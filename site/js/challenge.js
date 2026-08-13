/* ============================================================
 * challenge.js —— 挑战模式
 * 目标：通过"把次级子节点挂到正确的父节点"来帮助搭建物理知识框架。
 * - 核心节点 = 每领域 importance(size) 最大的 1 个节点（运行时计算）
 * - 每轮随机抽取 N 个有父节点的未放置子节点（N 用户自定义）
 * - 判定：宽松 = 任意直接边；严格 = weight>=3 强关联边（开局可选）
 * - 可视化：2D 力导向图展示"已搭建框架"（已放置节点 + 连线）
 *   ——挂对子节点后，它与所有已放置邻居的连线自动补全（= 补线）
 * - 已放置的子节点同样可作为新父节点
 * - 答错逐级给提示（领域 → 关键词 → 开放阅读）
 * - 全程计时，全部挂完展示用时
 * ============================================================ */
'use strict';

window.KTChallenge = (() => {
  const KT = window.KT;
  const { GRAPH, nodeMap, $, $$, esc, renderMarkdown } = KT;

  const EMPTY = new Set();

  // ------------------------- 邻接数据 -------------------------
  const adj = {};        // 任意直接边
  const strongAdj = {};  // weight>=3
  GRAPH.links.forEach(l => {
    const a = l.source, b = l.target;
    (adj[a] = adj[a] || new Set()).add(b);
    (adj[b] = adj[b] || new Set()).add(a);
    if ((l.weight || 3) >= 3) {
      (strongAdj[a] = strongAdj[a] || new Set()).add(b);
      (strongAdj[b] = strongAdj[b] || new Set()).add(a);
    }
  });

  // 精准补充的核心节点（在"每领域 importance 最大 1 个"之外额外加入，保证常见直观父节点在场）
  // 可在此维护：微积分/哈密顿力学/静电学/集合论/概率论/线性代数
  const EXTRA_CORE = ['calculus', 'hamiltonian-mechanics', 'electrostatics', 'set-theory', 'probability-theory', 'linear-algebra'];

  function computeCore() {
    const best = {};
    GRAPH.nodes.forEach(n => {
      if (!best[n.domain] || n.size > best[n.domain].size) best[n.domain] = n;
    });
    const core = Object.values(best).map(n => n.id);
    EXTRA_CORE.forEach(id => {
      if (nodeMap[id] && !core.includes(id)) core.push(id);
    });
    return core;
  }
  const CORE = computeCore();
  const CORE_SET = new Set(CORE);

  // ------------------------- 状态 -------------------------
  let state = null;
  let timerHandle = null;
  let selectedCard = null;
  let lastAttached = null;
  let GraphCh = null;

  function neighborsOf(id) {
    return state.difficulty === 'strict' ? (strongAdj[id] || EMPTY) : (adj[id] || EMPTY);
  }

  // ------------------------- 工具 -------------------------
  const overlay = $('#challenge');

  function fmtTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const ss = String(s % 60).padStart(2, '0');
    return `${m}:${ss}`;
  }

  // ------------------------- 2D 图 -------------------------
  function initGraph() {
    const el = $('#ch-graph');
    if (!GraphCh) {
      GraphCh = new ForceGraph(el)
        .nodeCanvasObjectMode(() => 'replace')
        .nodeCanvasObject(drawChNode)
        .nodeLabel(n => `<div style="font-size:12px"><b>${n.name}</b><div style="color:${n.color}">${n.domainName}</div></div>`)
        .linkColor(l => (l.strong ? 'rgba(88,166,255,0.6)' : 'rgba(139,152,165,0.3)'))
        .linkWidth(l => (l.strong ? 1.6 : 0.7))
        .onNodeClick(n => onChNodeClick(n.id))
        .onBackgroundClick(() => { selectedCard = null; renderAll(false); })
        .enableNodeDrag(true)
        .autoPauseRedraw(false)
        .d3VelocityDecay(0.4)
        .cooldownTime(15000);
      GraphCh.d3Force('link').distance(l => (l.strong ? 60 : 130)).strength(0.7);
      GraphCh.d3Force('charge').strength(n => -260);
      GraphCh.d3Force('center').x(0).y(0);
    }
    setTimeout(() => {
      try { GraphCh.width(el.clientWidth).height(el.clientHeight); } catch (e) { /* ignore */ }
      if (state) updateGraph();   // 画布就绪后重绘，确保节点可见
    }, 60);
  }

  function drawChNode(node, ctx, gs) {
    const r = (node.isNew ? 9 : 7) / gs;
    ctx.beginPath();
    ctx.arc(node.x, node.y, r * gs, 0, 2 * Math.PI);
    ctx.fillStyle = node.color;
    ctx.globalAlpha = 0.92;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = (node.isNew ? 2.5 : 1) / gs;
    ctx.strokeStyle = node.isNew ? '#ffffff' : 'rgba(255,255,255,0.35)';
    ctx.stroke();
    if (node.isNew) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, r * gs + 5, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 1.2 / gs;
      ctx.stroke();
    }
    const fs = 11 / gs;
    ctx.font = `${fs}px "Microsoft YaHei","PingFang SC",sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.9)';
    ctx.shadowBlur = 4;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(node.name, node.x, node.y - r * gs - 2);
    ctx.shadowBlur = 0;
  }

  function onChNodeClick(id) {
    if (selectedCard) attach(selectedCard, id);
    else openDetail(id);
  }

  function updateGraph() {
    if (!GraphCh || !state) return;
    const prev = new Map();
    try { GraphCh.graphData().nodes.forEach(n => prev.set(n.id, n)); } catch (e) { /* ignore */ }

    const nodes = Array.from(state.placed).map(id => {
      const n = nodeMap[id];
      const p = prev.get(id);
      let x = p ? p.x : 0, y = p ? p.y : 0;
      if (!p) {
        // 新节点：从它的已放置邻居质心处出现
        let sx = 0, sy = 0, k = 0;
        neighborsOf(id).forEach(nid => {
          const q = prev.get(nid);
          if (q) { sx += q.x; sy += q.y; k++; }
        });
        if (k) { x = sx / k; y = sy / k; }
      }
      return {
        id: n.id, name: n.name, domain: n.domain, domainName: n.domainName,
        color: n.color, size: n.size, x, y, isNew: (id === lastAttached),
      };
    });

    const links = [];
    const seen = new Set();
    GRAPH.links.forEach(l => {
      if (!state.placed.has(l.source) || !state.placed.has(l.target)) return;
      const key = l.source < l.target ? l.source + '|' + l.target : l.target + '|' + l.source;
      if (seen.has(key)) return;
      seen.add(key);
      links.push({ source: l.source, target: l.target, strong: (l.weight || 3) >= 3, weight: l.weight || 3 });
    });

    GraphCh.graphData({ nodes, links });
  }

  // ------------------------- 游戏流程 -------------------------
  function start(nPerRound, difficulty) {
    state = {
      placed: new Set(CORE),
      pool: new Set(GRAPH.nodes.filter(n => !CORE_SET.has(n.id)).map(n => n.id)),
      round: 0,
      cards: [],
      totalErrors: 0,
      totalAttached: 0,
      startTime: Date.now(),
      elapsed: 0,
      difficulty: difficulty,
      nPerRound: nPerRound,
      done: false,
    };
    selectedCard = null;
    lastAttached = null;
    clearInterval(timerHandle);
    timerHandle = setInterval(tick, 1000);
    initGraph();
    generateRound();
    updateGraph();   // 首次填充核心节点
  }

  function tick() {
    if (state && !state.done) {
      state.elapsed = Date.now() - state.startTime;
      const el = $('#ch-timer');
      if (el) el.textContent = fmtTime(state.elapsed);
    }
  }

  function generateRound() {
    const eligible = [];
    state.pool.forEach(id => {
      const nb = neighborsOf(id);
      for (const x of nb) if (state.placed.has(x)) { eligible.push(id); break; }
    });
    if (!eligible.length) { finish(); return; }

    const n = Math.min(state.nPerRound, eligible.length);
    const shuffled = eligible.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const picked = shuffled.slice(0, n);
    state.round++;
    state.cards = picked.map(id => ({
      id, name: nodeMap[id].name, domain: nodeMap[id].domain, domainName: nodeMap[id].domainName,
      color: nodeMap[id].color, state: 'pending', err: 0, hintLevel: 0, parent: null, auto: [],
    }));
    selectedCard = null;
    renderAll(false);
  }

  function attach(cardId, parentId) {
    if (!state || state.done) return;
    const card = state.cards.find(c => c.id === cardId);
    if (!card || card.state === 'done') return;
    if (!state.placed.has(parentId)) return;

    const nb = neighborsOf(cardId);
    if (nb.has(parentId)) {
      card.state = 'done';
      card.parent = parentId;
      state.placed.add(cardId);
      state.pool.delete(cardId);
      state.totalAttached++;
      lastAttached = cardId;
      const others = [];
      nb.forEach(x => { if (x !== parentId && state.placed.has(x)) others.push(x); });
      card.auto = others;
      const autoTxt = others.length
        ? `，已自动补全关联：${others.map(x => nodeMap[x].name).join('、')}`
        : '';
      feedback(`✅ 正确！「${card.name}」已挂到「${nodeMap[parentId].name}」${autoTxt}`, 'ok');
      selectedCard = null;
      if (state.cards.every(c => c.state === 'done')) {
        if (state.pool.size === 0) finish();
        else showNextButton();
      }
    } else {
      card.err++;
      state.totalErrors++;
      card.hintLevel = Math.min(3, card.err);
      feedback(wrongHint(card), 'bad');
    }
    renderAll(true);
  }

  function wrongHint(card) {
    const n = nodeMap[card.id];
    if (card.hintLevel === 1) {
      const kw = (n.tags || []).concat(n.keywords || []).slice(0, 6).join('、');
      return `❌ 再想想。提示：相关关键词——${kw || '（无）'}。`;
    }
    if (card.hintLevel === 2) {
      return `❌ 提示：该知识点属于「${n.domainName}」领域。`;
    }
    return `❌ 已开放阅读：「${n.name}」——点击卡片可查看完整内容。`;
  }

  function feedback(text, cls) {
    const el = $('#ch-feedback');
    if (!el) return;
    el.className = 'ch-feedback ' + (cls || '');
    el.innerHTML = text;
  }

  function showNextButton() {
    const el = $('#ch-next');
    if (el) el.classList.remove('hidden');
    feedback('本轮全部挂对！点击「下一轮」继续。', 'ok');
  }

  function nextRound() {
    const el = $('#ch-next');
    if (el) el.classList.add('hidden');
    $('#ch-feedback').innerHTML = '';
    generateRound();
  }

  function finish() {
    state.done = true;
    clearInterval(timerHandle);
    state.elapsed = Date.now() - state.startTime;
    renderDone();
  }

  function exit() {
    clearInterval(timerHandle);
    state = null;
    selectedCard = null;
    overlay.classList.add('hidden');
  }

  // ------------------------- 详情查看 -------------------------
  function openDetail(id) {
    const n = nodeMap[id];
    if (!n) return;
    $('#ch-detail-title').innerHTML = esc(n.name) + (n.nameEn ? ` <span class="en">${esc(n.nameEn)}</span>` : '');
    $('#ch-detail-domain').textContent = n.domainName;
    $('#ch-detail-domain').style.background = n.color;
    const body = $('#ch-detail-body');
    body.innerHTML = '';
    renderMarkdown(n.body, body);
    $('#ch-detail').classList.remove('hidden');
  }
  function closeDetail() {
    $('#ch-detail').classList.add('hidden');
  }

  // ------------------------- 渲染 -------------------------
  function updateHeader() {
    $('#ch-timer').textContent = fmtTime(state.elapsed);
    $('#ch-round').textContent = state.round;
    const totalSub = GRAPH.nodes.length - CORE.length;
    const attached = state.placed.size - CORE.length;
    $('#ch-progress-num').textContent = `${attached} / ${totalSub}`;
    const pct = totalSub ? Math.round(attached / totalSub * 100) : 0;
    $('#ch-progress-fill').style.width = pct + '%';
  }

  function renderCards() {
    const cardsHtml = state.cards.map(c => {
      const done = c.state === 'done';
      const readable = c.hintLevel >= 3;
      return `<div class="ch-card ${done ? 'done' : ''} ${c.id === selectedCard ? 'sel' : ''}" data-id="${esc(c.id)}" draggable="true">
        <span class="ch-card-name">${esc(c.name)}</span>
        <span class="ch-card-state">${done ? `已挂到「${esc(nodeMap[c.parent].name)}」` : (c.hintLevel ? `提示 ${c.hintLevel}/3` : '')}</span>
        ${(done || readable) ? `<button class="ch-read" data-id="${esc(c.id)}">阅读</button>` : ''}
      </div>`;
    }).join('');
    $('#ch-cards').innerHTML = cardsHtml || '<div class="ch-empty">本轮无卡片</div>';
    bindCardEvents();
  }

  function bindCardEvents() {
    $$('.ch-card', $('#ch-cards')).forEach(card => {
      const id = card.getAttribute('data-id');
      card.addEventListener('click', ev => {
        if (ev.target.closest('.ch-read')) return;
        selectedCard = (selectedCard === id) ? null : id;
        renderAll(false);
      });
      const rb = card.querySelector('.ch-read');
      if (rb) rb.addEventListener('click', () => openDetail(id));
      card.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text/challenge', id);
        selectedCard = id;
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => card.classList.remove('dragging'));
    });
  }

  function renderAll(rebuildGraph) {
    if (!state) return;
    updateHeader();
    if (rebuildGraph) updateGraph();
    renderCards();
  }

  function renderDone() {
    const acc = state.totalAttached + state.totalErrors;
    const accPct = acc ? Math.round(state.totalAttached / acc * 100) : 100;
    $('#ch-done-time').textContent = fmtTime(state.elapsed);
    $('#ch-done-rounds').textContent = state.round;
    $('#ch-done-errors').textContent = state.totalErrors;
    $('#ch-done-acc').textContent = accPct + '%';
    $('#ch-play').classList.add('hidden');
    $('#ch-done').classList.remove('hidden');
  }

  function showStart() {
    $('#ch-start').classList.remove('hidden');
    $('#ch-play').classList.add('hidden');
    $('#ch-done').classList.add('hidden');
    $('#ch-detail').classList.add('hidden');
    $('#ch-feedback').innerHTML = '';
    overlay.classList.remove('hidden');
  }

  // ------------------------- 搜索父节点 -------------------------
  function bindSearch() {
    const input = $('#ch-search');
    const res = $('#ch-search-res');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { res.classList.add('hidden'); res.innerHTML = ''; return; }
      const matches = GRAPH.nodes.filter(n => {
        if (n.name.toLowerCase().includes(q)) return true;
        if (n.nameEn && n.nameEn.toLowerCase().includes(q)) return true;
        return (n.aliases || []).some(a => a.toLowerCase().includes(q));
      }).slice(0, 10);
      if (!matches.length) {
        res.innerHTML = '<div class="ch-sr-empty">无匹配节点</div>';
        res.classList.remove('hidden');
        return;
      }
      res.innerHTML = matches.map(n =>
        `<div class="ch-sr-item" data-id="${esc(n.id)}">
          <span class="ch-sr-dot" style="background:${n.color}"></span>
          <span>${esc(n.name)}</span>
          <span class="ch-sr-meta">${esc(n.domainName)}</span>
        </div>`).join('');
      res.classList.remove('hidden');
    });

    res.addEventListener('click', ev => {
      const item = ev.target.closest('.ch-sr-item');
      if (!item) return;
      const id = item.getAttribute('data-id');
      if (selectedCard) {
        if (state.placed.has(id)) attach(selectedCard, id);
        else feedback(`「${nodeMap[id].name}」尚未放入框架，不能作为父节点。`, 'bad');
      } else {
        feedback('请先选中一个子节点（点击卡片或按数字键 1~9/0）。', 'bad');
      }
      res.classList.add('hidden');
      res.innerHTML = '';
      input.value = '';
    });

    document.addEventListener('click', ev => {
      if (!res.contains(ev.target) && ev.target !== input) {
        res.classList.add('hidden');
        res.innerHTML = '';
      }
    });
  }

  // ------------------------- 数字键快捷选择 -------------------------
  function selectCardByIndex(i) {
    const c = state.cards[i];
    if (!c) return;
    selectedCard = c.id;
    renderAll(false);
    const el = document.querySelector(`#ch-cards .ch-card[data-id="${c.id}"]`);
    if (el) el.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  function bindKeys() {
    document.addEventListener('keydown', ev => {
      if (!state || state.done) return;
      const t = ev.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      const k = ev.key;
      if (k >= '1' && k <= '9') { ev.preventDefault(); selectCardByIndex(parseInt(k, 10) - 1); }
      else if (k === '0') { ev.preventDefault(); selectCardByIndex(9); }
    });
  }

  // ------------------------- 初始化 -------------------------
  function init() {
    $('#btn-challenge').addEventListener('click', () => {
      clearInterval(timerHandle);
      state = null;
      showStart();
    });

    $('#ch-begin').addEventListener('click', () => {
      const n = parseInt($('#ch-n').value, 10) || 5;
      const diff = document.querySelector('input[name="ch-diff"]:checked').value || 'loose';
      $('#ch-start').classList.add('hidden');
      $('#ch-done').classList.add('hidden');
      $('#ch-play').classList.remove('hidden');
      $('#ch-next').classList.add('hidden');
      start(n, diff);
    });

    $('#ch-next').addEventListener('click', nextRound);
    $('#ch-close').addEventListener('click', exit);
    $('#ch-exit').addEventListener('click', exit);
    $('#ch-done-close').addEventListener('click', exit);
    $('#ch-restart').addEventListener('click', () => { state = null; showStart(); });
    $('#ch-detail-close').addEventListener('click', closeDetail);
    $('#ch-detail').addEventListener('click', ev => {
      if (ev.target === $('#ch-detail')) closeDetail();
    });

    bindSearch();
    bindKeys();

    // 拖拽卡片到图上某节点
    const graphEl = $('#ch-graph');
    graphEl.addEventListener('dragover', ev => ev.preventDefault());
    graphEl.addEventListener('drop', ev => {
      ev.preventDefault();
      const cid = ev.dataTransfer.getData('text/challenge');
      if (!cid || !GraphCh || !state) return;
      const pt = GraphCh.screen2GraphCoords(ev.clientX, ev.clientY);
      if (!pt) return;
      let best = null, bestD = Infinity;
      GraphCh.graphData().nodes.forEach(n => {
        const d = Math.hypot(n.x - pt.x, n.y - pt.y);
        if (d < bestD) { bestD = d; best = n; }
      });
      if (best && bestD < 60) attach(cid, best.id);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { start, exit };
})();
