/* ============================================================
 * common.js —— 共享工具：数据索引、DOM 助手、markdown 渲染
 * ============================================================ */
'use strict';

window.KT = (() => {
  const GRAPH = window.PHYSICS_GRAPH;
  const nodeMap = {};
  (GRAPH.nodes || []).forEach(n => { nodeMap[n.id] = n; });

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* [[id]] / [[id|别名]] 双链 → 可跳转链接，并返回被引用的 id 集合 */
  function linkify(md) {
    const refs = new Set();
    const out = md.replace(/\[\[([a-z0-9][a-z0-9-]*)(?:\|([^\]\n]+))?\]\]/g, (m, id, label) => {
      refs.add(id);
      const n = nodeMap[id];
      const text = label || (n ? n.name : id);
      return `<a href="javascript:void(0)" class="jump-link" data-jump="${esc(id)}">${esc(text)}</a>`;
    });
    return { html: out, refs: refs };
  }

  /* 渲染 markdown 正文，并对公式做 KaTeX 排版 */
  function renderMarkdown(md, container) {
    const { html } = linkify(md);
    container.innerHTML = marked.parse(html);
    // 公式
    if (window.renderMathInElement) {
      renderMathInElement(container, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
        strict: false,
        output: 'htmlAndMathml',
      });
    }
  }

  /* 权重 → 标签 */
  const WEIGHT_LABEL = {
    5: '直接等价',
    4: '强相关',
    3: '相关',
    2: '弱相关',
    1: '边缘',
  };

  return { GRAPH, nodeMap, $, $$, esc, linkify, renderMarkdown, WEIGHT_LABEL };
})();
