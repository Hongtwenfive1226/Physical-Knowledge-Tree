/* ============================================================
 * tree.js —— 树状学习图
 * 记录用户访问的节点，组织为平面缩进树，显示在左侧面板。
 * - 双击/搜索进入 → 按相关度挂到最相关的根下（强/弱/询问建新根）
 * - 正文超链接进入 → 无条件挂到最近根下
 * - 支持拖拽改父子、设为根、移除、折叠
 * - localStorage 持久化
 * ============================================================ */
'use strict';

window.KTTree = (() => {
  const KT = window.KT;
  const { GRAPH, nodeMap, $, $$, esc } = KT;

  const LS_KEY = 'physics-kn-tree';
  const FOREST_KEY = 'physics-kn-tree-forest';

  // ------------------------- 数据 -------------------------
  let data = { enabled: false, nodes: {}, name: '' };
  let forestData = { trees: [] };
  let currentId = null;

  // 邻接与边权（含上位替代边）
  const adj = {};
  const edgeWeight = {};
  GRAPH.links.forEach(l => {
    const a = l.source, b = l.target;
    (adj[a] = adj[a] || new Set()).add(b);
    (adj[b] = adj[b] || new Set()).add(a);
    const key = a < b ? a + '|' + b : b + '|' + a;
    edgeWeight[key] = Math.max(edgeWeight[key] || 0, l.weight || 3);
  });

  function classify(a, b) {
    if (a === b) return 'strong';
    const key = a < b ? a + '|' + b : b + '|' + a;
    const w = edgeWeight[key] || 0;
    if (w >= 4) return 'strong';
    if (w >= 1) return 'weak';
    const na = adj[a] || new Set(), nb = adj[b] || new Set();
    for (const x of na) if (nb.has(x)) return 'weak';
    return 'none';
  }

  function roots() {
    return Object.keys(data.nodes).filter(id => data.nodes[id].pid === null);
  }
  function lastRoot() {
    const rs = roots();
    return rs.length ? rs[rs.length - 1] : null;
  }
  function hasNode(id) { return !!data.nodes[id]; }
  function childrenOf(pid) {
    return Object.keys(data.nodes).filter(id => data.nodes[id].pid === pid);
  }

  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
  }
  function load() {
    let d = {};
    try { d = JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (e) { d = {}; }
    data.enabled = !!d.enabled;
    data.nodes = (d.nodes && typeof d.nodes === 'object') ? d.nodes : {};
    data.name = typeof d.name === 'string' ? d.name : '';
  }
  function loadForest() {
    let d = {};
    try { d = JSON.parse(localStorage.getItem(FOREST_KEY) || '{}'); } catch (e) { d = {}; }
    forestData.trees = (d.trees && Array.isArray(d.trees)) ? d.trees : [];
  }
  function saveForestData() {
    try { localStorage.setItem(FOREST_KEY, JSON.stringify(forestData)); } catch (e) { /* ignore */ }
  }

  // ------------------------- DOM -------------------------
  let panel, list, btnTree, btnClear, emptyHint, promptEl;
  let saveBtn, forestBtn, saveBox, nameInput, saveConfirm, saveCancel, forestList;
  let gotoNode = () => {};

  function defaultName() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return `学习树 ${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  function init(hooks) {
    load();
    loadForest();
    panel = $('#tree-panel');
    list = $('#tree-list');
    btnTree = $('#btn-tree');
    btnClear = $('#tree-clear');
    emptyHint = $('#tree-empty');
    promptEl = $('#tree-prompt');
    saveBtn = $('#tree-save-btn');
    forestBtn = $('#tree-forest-btn');
    saveBox = $('#tree-save-box');
    nameInput = $('#tree-name-input');
    saveConfirm = $('#tree-save-confirm');
    saveCancel = $('#tree-save-cancel');
    forestList = $('#tree-forest');
    gotoNode = (hooks && hooks.gotoNode) || (() => {});

    btnTree.addEventListener('click', () => toggle(!data.enabled));
    btnClear.addEventListener('click', () => { data.nodes = {}; data.name = ''; save(); render(); });
    promptEl.addEventListener('click', ev => {
      const btn = ev.target.closest('[data-choice]');
      if (!btn) return;
      const choice = btn.getAttribute('data-choice');
      const id = promptEl.__pendingId;
      promptEl.classList.add('hidden');
      promptEl.__pendingId = null;
      if (id) finishPrompt(id, choice);
    });

    saveBtn.addEventListener('click', () => {
      nameInput.value = data.name || defaultName();
      saveBox.classList.toggle('hidden');
      if (!saveBox.classList.contains('hidden')) nameInput.focus();
    });
    saveConfirm.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (name) saveForest(name);
      saveBox.classList.add('hidden');
    });
    saveCancel.addEventListener('click', () => saveBox.classList.add('hidden'));
    nameInput.addEventListener('keydown', ev => { if (ev.key === 'Enter') saveConfirm.click(); });
    forestBtn.addEventListener('click', () => {
      renderForest();
      forestList.classList.toggle('hidden');
    });
    forestList.addEventListener('click', ev => {
      const item = ev.target.closest('[data-name]');
      if (!item) return;
      if (ev.target.closest('.ff-del')) { deleteForest(item.getAttribute('data-name')); return; }
      loadForestTree(item.getAttribute('data-name'));
    });

    if (data.enabled) { panel.classList.remove('hidden'); btnTree.classList.add('active'); }
    render();
  }

  function toggle(on) {
    data.enabled = on;
    save();
    panel.classList.toggle('hidden', !on);
    btnTree.classList.toggle('active', on);
  }

  // ------------------------- 森林 -------------------------
  function saveForest(name) {
    forestData.trees = forestData.trees.filter(t => t.name !== name);
    forestData.trees.unshift({ name: name, nodes: JSON.parse(JSON.stringify(data.nodes)), savedAt: Date.now() });
    saveForestData();
    data.name = name;
    save();
    if (saveBtn) {
      saveBtn.textContent = '已保存✓';
      setTimeout(() => { saveBtn.textContent = '保存'; }, 1200);
    }
  }

  function loadForestTree(name) {
    const t = forestData.trees.find(x => x.name === name);
    if (!t) return;
    data.nodes = JSON.parse(JSON.stringify(t.nodes || {}));
    data.name = name;
    save();
    if (forestList) forestList.classList.add('hidden');
    render();
  }

  function deleteForest(name) {
    forestData.trees = forestData.trees.filter(x => x.name !== name);
    saveForestData();
    renderForest();
  }

  function renderForest() {
    if (!forestList) return;
    if (!forestData.trees.length) {
      forestList.innerHTML = '<div class="ff-empty">暂无保存的学习树</div>';
      return;
    }
    forestList.innerHTML = forestData.trees.map(t => {
      const dt = new Date(t.savedAt);
      const p = n => String(n).padStart(2, '0');
      const time = `${dt.getFullYear()}-${p(dt.getMonth() + 1)}-${p(dt.getDate())} ${p(dt.getHours())}:${p(dt.getMinutes())}`;
      const count = Object.keys(t.nodes || {}).length;
      return `<div class="ff-item" data-name="${esc(t.name)}">
        <span class="ff-name">${esc(t.name)}</span>
        <span class="ff-meta">${count} 节点 · ${time}</span>
        <button class="ff-del" title="删除">×</button>
      </div>`;
    }).join('');
  }

  // ------------------------- 记录 -------------------------
  function onEntered(id, source) {
    currentId = id;
    if (!data.enabled) return;
    if (hasNode(id)) { render(); return; }

    if (source === 'hyperlink') {
      const r = lastRoot();
      addNode(id, r, 'hyper');
      return;
    }

    const rs = roots();
    if (!rs.length) { addNode(id, null, 'root'); return; }
    let best = null, bestKind = 'none';
    for (const r of rs) {
      const c = classify(id, r);
      if (c === 'strong') { best = r; bestKind = 'strong'; break; }
      if (c === 'weak' && bestKind !== 'strong') { best = r; bestKind = 'weak'; }
    }
    if (bestKind === 'strong' || bestKind === 'weak') {
      addNode(id, best, bestKind);
    } else {
      promptNewRoot(id);
    }
  }

  function promptNewRoot(id) {
    const name = nodeMap[id] ? nodeMap[id].name : id;
    promptEl.innerHTML = `
      <div class="tp-text">「${esc(name)}」与现有根均无关联，是否建立新的独立根？</div>
      <div class="tp-btns">
        <button class="btn" data-choice="new">建立新根</button>
        <button class="btn" data-choice="attach">挂在最近根下</button>
      </div>`;
    promptEl.__pendingId = id;
    promptEl.classList.remove('hidden');
  }

  function finishPrompt(id, choice) {
    if (choice === 'new') {
      addNode(id, null, 'root');
    } else {
      addNode(id, lastRoot(), 'weak');
    }
  }

  function addNode(id, pid, kind) {
    data.nodes[id] = { pid: pid, kind: kind, collapsed: false };
    save();
    render();
  }

  // ------------------------- 渲染 -------------------------
  function render() {
    if (!list) return;
    const rs = roots();
    emptyHint.classList.toggle('hidden', rs.length > 0);

    let html = '';
    const renderNode = (id, depth) => {
      const n = data.nodes[id];
      const node = nodeMap[id];
      const name = node ? node.name : id;
      const color = node ? node.color : '#888';
      const hasChild = childrenOf(id).length > 0;
      const cur = id === currentId ? ' current' : '';
      let out = `<div class="tree-item ${n.kind}${cur}" data-id="${esc(id)}" draggable="true">
        <span class="ti-indent" style="width:${depth * 16}px"></span>
        <span class="ti-toggle${hasChild ? '' : ' leaf'}">${hasChild ? (n.collapsed ? '▸' : '▾') : ''}</span>
        <span class="ti-dot" style="background:${esc(color)}"></span>
        <span class="ti-name">${esc(name)}</span>
        <span class="ti-actions">
          <button class="ti-btn" data-act="root" title="设为根">⟳</button>
          <button class="ti-btn" data-act="remove" title="移除">×</button>
        </span>
      </div>`;
      if (hasChild && !n.collapsed) {
        childrenOf(id).forEach(c => { out += renderNode(c, depth + 1); });
      }
      return out;
    };
    rs.forEach(r => { html += renderNode(r, 0); });
    list.innerHTML = html;

    $$('.tree-item', list).forEach(el => {
      const id = el.getAttribute('data-id');

      el.addEventListener('click', ev => {
        if (ev.target.closest('.ti-btn') || ev.target.closest('.ti-toggle')) return;
        gotoNode(id);
      });
      el.querySelector('.ti-toggle').addEventListener('click', () => {
        data.nodes[id].collapsed = !data.nodes[id].collapsed;
        save(); render();
      });
      el.querySelectorAll('.ti-btn').forEach(b => {
        b.addEventListener('click', () => {
          const act = b.getAttribute('data-act');
          if (act === 'root') { data.nodes[id].pid = null; save(); render(); }
          else if (act === 'remove') { removeSubtree(id); }
        });
      });

      // 拖拽改父子
      el.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text/plain', id);
        el.classList.add('dragging');
      });
      el.addEventListener('dragend', () => el.classList.remove('dragging'));
      el.addEventListener('dragover', ev => {
        if (id !== ev.dataTransfer.getData('text/plain')) { ev.preventDefault(); el.classList.add('drop-target'); }
      });
      el.addEventListener('dragleave', () => el.classList.remove('drop-target'));
      el.addEventListener('drop', ev => {
        ev.preventDefault();
        el.classList.remove('drop-target');
        const srcId = ev.dataTransfer.getData('text/plain');
        if (srcId && srcId !== id && !isDescendant(srcId, id)) {
          data.nodes[srcId].pid = id;
          save(); render();
        }
      });
    });
  }

  function isDescendant(id, anc) {
    let p = data.nodes[id] && data.nodes[id].pid;
    while (p) {
      if (p === anc) return true;
      p = data.nodes[p].pid;
    }
    return false;
  }

  function removeSubtree(id) {
    const stack = [id];
    while (stack.length) {
      const cur = stack.pop();
      childrenOf(cur).forEach(c => stack.push(c));
      delete data.nodes[cur];
    }
    save(); render();
  }

  return { init, onEntered, toggle };
})();
