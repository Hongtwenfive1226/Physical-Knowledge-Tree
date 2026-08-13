/* ============================================================
 * search.js —— 搜索
 * ============================================================ */
'use strict';

window.KTSearch = (() => {
  const KT = window.KT;
  const { GRAPH, $, esc } = KT;

  const input = $('#search-input');
  const box = $('#search-results');

  let current = [];     // 当前结果
  let activeIdx = -1;
  let pickHandler = null;

  function score(q, e) {
    const ql = q.toLowerCase();
    if (!ql) return 0;
    const fields = [e.name, e.nameEn].concat(e.aliases, e.tags, e.keywords, [e.domainName])
      .filter(Boolean).map(s => s.toLowerCase());
    let best = 0;
    for (const s of fields) {
      if (s === ql) best = Math.max(best, 100);
      else if (s.startsWith(ql)) best = Math.max(best, 80);
      else if (s.includes(ql)) best = Math.max(best, 55);
      else {
        // 模糊子序列
        let i = 0, ok = true;
        for (const ch of ql) {
          const j = s.indexOf(ch, i);
          if (j < 0) { ok = false; break; }
          i = j + 1;
        }
        if (ok) best = Math.max(best, 30);
      }
    }
    return best;
  }

  function highlight(text, q) {
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<b style="color:#fff">' + esc(text.slice(i, i + q.length)) + '</b>' + esc(text.slice(i + q.length));
  }

  function renderList(q) {
    const scored = GRAPH.search.map(e => ({ e, s: score(q, e) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 14);
    current = scored;
    activeIdx = scored.length ? 0 : -1;

    if (!scored.length) {
      box.innerHTML = `<div class="sr-empty">未找到「${esc(q)}」相关节点</div>`;
      return;
    }
    box.innerHTML = scored.map((x, i) => {
      const n = KT.nodeMap[x.e.id];
      const label = highlight(x.e.name, q);
      return `<div class="sr-item${i === activeIdx ? ' active' : ''}" data-id="${esc(x.e.id)}">
        <span class="sr-dot" style="background:${esc(n.color)}"></span>
        <span class="sr-name">${label}</span>
        <span class="sr-meta">${esc(x.e.domainName)}</span>
      </div>`;
    }).join('');
  }

  function apply(idx) {
    const item = current[idx];
    if (!item) return;
    hide();
    if (pickHandler) pickHandler(item.e.id);
  }

  function hide() {
    box.innerHTML = '';
    current = [];
    activeIdx = -1;
    input.blur();
  }

  function init(onPick) {
    pickHandler = onPick;

    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (!q) { box.innerHTML = ''; current = []; return; }
      renderList(q);
    });

    input.addEventListener('keydown', ev => {
      if (ev.key === 'Enter') { ev.preventDefault(); apply(activeIdx >= 0 ? activeIdx : 0); }
      else if (ev.key === 'ArrowDown') {
        ev.preventDefault();
        if (!current.length) return;
        activeIdx = (activeIdx + 1) % current.length;
        renderActive();
      } else if (ev.key === 'ArrowUp') {
        ev.preventDefault();
        if (!current.length) return;
        activeIdx = (activeIdx - 1 + current.length) % current.length;
        renderActive();
      } else if (ev.key === 'Escape') {
        hide();
      }
    });

    box.addEventListener('click', ev => {
      const item = ev.target.closest('.sr-item');
      if (!item) return;
      apply(current.findIndex(x => x.e.id === item.getAttribute('data-id')));
    });

    input.addEventListener('focus', () => {
      const q = input.value.trim();
      if (q) renderList(q);
    });

    document.addEventListener('click', ev => {
      if (!box.contains(ev.target) && ev.target !== input) hide();
    });
  }

  function renderActive() {
    $$('.sr-item', box).forEach((el, i) => {
      el.classList.toggle('active', i === activeIdx);
    });
  }
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  return { init };
})();
