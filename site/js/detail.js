/* ============================================================
 * detail.js —— 右侧详情抽屉
 * ============================================================ */
'use strict';

window.KTDetail = (() => {
  const KT = window.KT;
  const { GRAPH, nodeMap, $, $$, esc, renderMarkdown, WEIGHT_LABEL } = KT;

  const drawer = $('#detail');
  const head = $('#detail-head');
  const scroll = $('#detail-scroll');
  const titleEl = $('#detail-title');
  const subEl = $('#detail-sub');

  function render(id) {
    const n = nodeMap[id];
    if (!n) return;

    // ---- 头部 ----
    titleEl.innerHTML = esc(n.name) +
      (n.nameEn ? `<span class="en">${esc(n.nameEn)}</span>` : '');
    let sub = `<span class="badge-domain" style="background:${esc(n.color)}">${esc(n.domainName)}</span>`;
    if (n.aliases && n.aliases.length) {
      sub += `<span class="alias-list">别名：${n.aliases.map(esc).join(' / ')}</span>`;
    }
    subEl.innerHTML = sub;

    // ---- 滚动区 ----
    let html = '';

    // 上位替代横幅
    if (n.supersededBy && n.supersededBy.length) {
      html += `<div class="sec-superseded"><div class="lbl">上位替代 / 更普适理论</div>`;
      n.supersededBy.forEach(s => {
        html += `<p>本理论在更一般的情形下被 <a href="javascript:void(0)" class="jump-link" data-jump="${esc(s.id)}">「${esc(s.name)}」</a> 所替代或涵盖，是其特例/极限。点击可跳转查看。</p>`;
      });
      html += `</div>`;
    }

    // 被本节点替代
    if (n.supersedes && n.supersedes.length) {
      html += `<div class="sec-superseded" style="border-color:rgba(88,166,255,0.35);background:rgba(88,166,255,0.06)">
        <div class="lbl" style="color:var(--accent)">本节点是更上位理论，替代了：</div>`;
      n.supersedes.forEach(s => {
        html += `<p><a href="javascript:void(0)" class="jump-link" data-jump="${esc(s.id)}">「${esc(s.name)}」</a></p>`;
      });
      html += `</div>`;
    }

    // 正文
    html += `<div class="sec-body" id="body-md"></div>`;

    // 相关知识
    const links = n.links || [];
    if (links.length) {
      html += `<div class="sec-links"><div class="lbl">直接相关的知识点（按紧密程度排序）</div>`;
      links.forEach(l => {
        const wl = WEIGHT_LABEL[l.weight] || '';
        html += `<div class="link-card" data-jump="${esc(l.id)}">
          <span class="nm">${esc(l.name)}</span>
          <span class="wtag">${l.weight} · ${esc(wl)}</span>
          <span class="arrow">→</span>
        </div>
        ${l.note ? `<div class="link-card-note">${esc(l.note)}</div>` : ''}`;
      });
      html += `</div>`;
    }

    // 更远关联（软连接）
    const soft = n.softLinks || [];
    if (soft.length) {
      html += `<div class="sec-links"><div class="lbl">更远的关联（图中未直接连线）</div>`;
      soft.forEach(l => {
        html += `<div class="link-card soft" data-jump="${esc(l.id)}">
          <span class="nm">${esc(l.name)}</span>
          <span class="wtag">${l.weight}</span>
          <span class="arrow">↗</span>
        </div>`;
      });
      html += `</div>`;
    }

    // 上位/下位关系也可作为"相关"补充（如未在 links 中）
    const supLinks = n.supersedeLinks || [];
    if (supLinks.length) {
      html += `<div class="sec-links"><div class="lbl">与上位/下位理论的连线</div>`;
      supLinks.forEach(l => {
        html += `<div class="link-card supersede" data-jump="${esc(l.id)}">
          <span class="nm">${esc(l.name)}</span>
          <span class="wtag">${l.weight}</span>
          <span class="arrow">↑</span>
        </div>`;
      });
      html += `</div>`;
    }

    // 脚注
    html += `<div class="sec-foot">
      ID：${esc(n.id)} · 领域：${esc(n.domainName)} · 直接连接 ${n.links ? n.links.length : 0} 个
      ${n.degree != null ? ` · 总关联 ${n.degree} 个` : ''}
      ${n.updated ? ` · 更新 ${esc(n.updated)}` : ''}
    </div>`;

    scroll.innerHTML = html;

    // 渲染正文 markdown + 公式
    const bodyEl = $('#body-md', scroll);
    renderMarkdown(n.body, bodyEl);

    // 绑定跳转
    $$('.jump-link, .link-card', scroll).forEach(el => {
      el.addEventListener('click', ev => {
        ev.stopPropagation();
        const target = el.getAttribute('data-jump');
        if (target && window.KTApp && KTApp.selectNode) {
          KTApp.selectNode(target, 'hyperlink');
        }
      });
    });

    drawer.classList.remove('closed');
  }

  function close() {
    drawer.classList.add('closed');
  }

  function isOpen() {
    return !drawer.classList.contains('closed');
  }

  return { render, close, isOpen };
})();
