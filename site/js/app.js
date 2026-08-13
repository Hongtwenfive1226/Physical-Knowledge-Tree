/* ============================================================
 * app.js —— 3D 全局视图 + 2D 局部平面视图 + 云图 + 交互编排
 * ============================================================ */
'use strict';

window.KTApp = (() => {
  const KT = window.KT;
  const { GRAPH, nodeMap, $, $$ } = KT;

  // ------------------------- 状态 -------------------------
  const LS_KEY = 'physics-kn-tree-settings';
  function loadSettings() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveSettings() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({
        labelFontSize: state.labelFontSize,
        spacing: state.spacing,
      }));
    } catch (e) { /* ignore */ }
  }
  const saved = loadSettings();

  const state = {
    mode: '3d',                 // '3d' 全局 | '2d' 局部平面
    selected: null,             // 当前选中节点 id
    labelsOn: true,
    hiddenDomains: new Set(),
    labelFontSize: typeof saved.labelFontSize === 'number' ? saved.labelFontSize : 15,
    spacing: typeof saved.spacing === 'number' ? saved.spacing : 1,
    highlightId: null,                      // 单击高亮的节点 id
    lastClick: { id: null, time: 0 },       // 双击判定
  };

  const dom = {
    graph3d: $('#graph3d'),
    graph2d: $('#graph2d'),
    hint2d: $('#hint2d'),
    legend: $('#cloud-legend'),
    loading: $('#loading'),
    btnGlobal: $('#btn-global'),
    btnLabels: $('#btn-labels'),
    btnLegend: $('#btn-legend'),
    btnReset: $('#btn-reset'),
    fontSlider: $('#font-slider'),
    spacingCtl: $('#spacing-ctl'),
    spacingSlider: $('#spacing-slider'),
    stat: $('#stat'),
    detailClose: $('#detail-close'),
  };

  // ------------------------- 数据 -------------------------
  function buildNodes() {
    return GRAPH.nodes.map(n => ({
      id: n.id, name: n.name, nameEn: n.nameEn, domain: n.domain, color: n.color,
      size: n.size, degree: n.degree,
    }));
  }
  function buildLinks() {
    return GRAPH.links.map(l => ({
      source: l.source, target: l.target, weight: l.weight,
      supersede: !!l.supersede, soft: !!l.soft,
    }));
  }

  const adj = {};
  GRAPH.links.forEach(l => {
    (adj[l.source] = adj[l.source] || new Set()).add(l.target);
    (adj[l.target] = adj[l.target] || new Set()).add(l.source);
  });

  const isDomainVisible = d => !state.hiddenDomains.has(d);

  // ------------------------- 3D 节点对象 -------------------------
  const labelTextureCache = new Map();
  function getLabelTexture(text) {
    const key = state.labelFontSize + ':' + text;
    let tex = labelTextureCache.get(key);
    if (!tex) {
      tex = makeLabelTexture(text);
      labelTextureCache.set(key, tex);
    }
    return tex;
  }

  function makeLabelTexture(text) {
    const dpr = 4;
    const fontSize = state.labelFontSize * dpr;
    const font = `${fontSize}px "Microsoft YaHei","PingFang SC",sans-serif`;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    ctx.font = font;
    const tw = ctx.measureText(text).width;
    const padX = 10 * dpr;
    const padY = 12 * dpr;
    const W = Math.ceil(tw + padX * 2);
    const H = Math.ceil(fontSize + padY * 2);
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    g.font = font;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineJoin = 'round';
    g.strokeStyle = 'rgba(0,0,0,0.85)';
    g.lineWidth = Math.max(2, fontSize * 0.1);
    g.strokeText(text, W / 2, H / 2);
    g.fillStyle = '#ffffff';
    g.fillText(text, W / 2, H / 2);
    const tex = new THREE.CanvasTexture(c);
    tex.generateMipmaps = false;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }

  function makeLabelSprite(text) {
    const tex = getLabelTexture(text);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.renderOrder = 999;
    const worldH = (state.labelFontSize + 20) * 0.055;
    const W = tex.image.width, H = tex.image.height;
    sprite.scale.set(worldH * (W / H), worldH, 1);
    return sprite;
  }

  function nodeRadius(n) {
    return 0.8 + Math.sqrt(n.size) * 0.30;
  }

  function isHighlightedNode(nodeId) {
    if (!state.highlightId) return true;
    if (nodeId === state.highlightId) return true;
    const nbrs = adj[state.highlightId];
    return !!(nbrs && nbrs.has(nodeId));
  }

  function makeNodeObject(node) {
    const r = nodeRadius(node);
    const group = new THREE.Group();
    const dimmed = state.highlightId && !isHighlightedNode(node.id);
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(r, 22, 22),
      new THREE.MeshPhongMaterial({ color: node.color, transparent: true, opacity: dimmed ? 0.12 : 0.92 })
    );
    sphere.userData.isNode = true;
    sphere.userData.nodeId = node.id;
    group.add(sphere);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(r * 1.4, r * 0.1, 8, 48),
      new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.85 })
    );
    halo.userData.isHalo = true;
    halo.visible = node.id === state.selected || node.id === state.highlightId;
    group.add(halo);

    const label = makeLabelSprite(node.name);
    label.position.set(0, r + 1.2 + state.labelFontSize / 60, 0);
    label.userData.isLabel = true;
    label.visible = state.labelsOn;
    if (state.labelsOn && dimmed) label.material.opacity = 0.18;
    group.add(label);
    return group;
  }

  function setLabels(on) {
    state.labelsOn = on;
    Graph3D.scene().traverse(o => {
      if (o.userData && o.userData.isLabel) o.visible = on;
    });
    dom.btnLabels.classList.toggle('active', on);
  }

  // ------------------------- 云图 -------------------------
  const cloudSprites = {};

  function makeCloudTexture() {
    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.32)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }

  function initClouds() {
    const tex = makeCloudTexture();
    Object.entries(GRAPH.meta.domains).forEach(([did, d]) => {
      const mat = new THREE.SpriteMaterial({
        map: tex, color: d.color, transparent: true,
        opacity: Math.max(0.22, (d.cloud_alpha || 0.08) * 3),
        depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.userData.isCloud = true;
      sprite.userData.domain = did;
      sprite.visible = false;
      Graph3D.scene().add(sprite);
      cloudSprites[did] = sprite;
    });
  }

  function updateClouds() {
    const nodes = Graph3D.graphData().nodes;
    if (!nodes || !nodes.length) return;
    const sums = {}, cnt = {}, maxr = {};
    nodes.forEach(n => {
      (sums[n.domain] = sums[n.domain] || { x: 0, y: 0, z: 0 });
      sums[n.domain].x += n.x; sums[n.domain].y += n.y; sums[n.domain].z += n.z;
      cnt[n.domain] = (cnt[n.domain] || 0) + 1;
    });
    nodes.forEach(n => {
      const c = sums[n.domain], k = cnt[n.domain];
      if (!c || !k) return;
      const dx = n.x - c.x / k, dy = n.y - c.y / k, dz = n.z - c.z / k;
      const rr = Math.sqrt(dx * dx + dy * dy + dz * dz);
      maxr[n.domain] = Math.max(maxr[n.domain] || 0, rr);
    });
    Object.entries(cloudSprites).forEach(([did, sprite]) => {
      const d = GRAPH.meta.domains[did];
      const k = cnt[did];
      const visible = state.mode === '3d' && isDomainVisible(did) && k > 0;
      if (!visible) { sprite.visible = false; return; }
      if (sprite.parent === null) Graph3D.scene().add(sprite);
      sprite.visible = true;
      const cx = sums[did].x / k, cy = sums[did].y / k, cz = sums[did].z / k;
      sprite.position.set(cx, cy, cz);
      const targetR = Math.max(70, (maxr[did] || 40) * 2.6) * (d.cloud_r || 1);
      sprite.scale.set(targetR, targetR, 1);
      sprite.material.opacity = Math.max(0.22, (d.cloud_alpha || 0.08) * 3);
      sprite.material.color.set(d.color);
    });
  }

  // 领域聚集力：把同领域节点拉向领域质心，形成云团
  function cloudClusterForce(alpha) {
    const nodes = Graph3D.graphData().nodes;
    const sums = {}, cnt = {};
    nodes.forEach(n => {
      (sums[n.domain] = sums[n.domain] || { x: 0, y: 0, z: 0 });
      sums[n.domain].x += n.x; sums[n.domain].y += n.y; sums[n.domain].z += n.z;
      cnt[n.domain] = (cnt[n.domain] || 0) + 1;
    });
    const strength = 0.03;
    nodes.forEach(n => {
      const c = sums[n.domain], k = cnt[n.domain];
      if (!c || !k) return;
      n.vx += (c.x / k - n.x) * strength * alpha;
      n.vy += (c.y / k - n.y) * strength * alpha;
      n.vz += (c.z / k - n.z) * strength * alpha;
    });
  }

  // ------------------------- 样式函数 -------------------------
  function nodeLabelHTML(n) {
    const d = GRAPH.meta.domains[n.domain];
    return `<div style="font-size:13px;line-height:1.6">
      <b style="font-size:15px">${n.name}</b>
      <div style="color:#9aa7b4">${n.nameEn || ''}</div>
      <div><span style="color:${d ? d.color : '#888'}">●</span> ${d ? d.name : n.domain}</div>
      <div style="color:#9aa7b4">关联 ${n.degree} · 点击查看详情</div>
    </div>`;
  }

  function emphasis(l) {
    const f = state.highlightId;
    if (!f) return 1;
    const a = l.source.id, b = l.target.id;
    return (a === f || b === f) ? 1 : 0.22;
  }

  function linkColor3D(l) {
    if (l.supersede) return emphasis(l) < 0.5 ? 'rgba(163,113,247,0.28)' : '#a371f7';
    const em = emphasis(l);
    return `rgba(139,152,165,${(0.14 + 0.55 * em).toFixed(2)})`;
  }
  function linkWidth3D(l) {
    const base = l.supersede ? 1.3 : (0.3 + l.weight * 0.28);
    return base * (0.45 + 0.55 * emphasis(l));
  }

  // ------------------------- 3D 图 -------------------------
  let Graph3D = null;
  let Graph2 = null;

  function initGraph3D() {
    Graph3D = new ForceGraph3D(dom.graph3d)
      .backgroundColor('#0d1117')
      .nodeThreeObject(node => makeNodeObject(node))
      .nodeThreeObjectExtend(false)
      .nodeLabel(node => nodeLabelHTML(node))
      .nodeVisibility(node => isDomainVisible(node.domain))
      .linkColor(linkColor3D)
      .linkWidth(linkWidth3D)
      .linkVisibility(l => isDomainVisible(l.source.domain) && isDomainVisible(l.target.domain))
      .linkDirectionalParticles(l => (l.supersede ? 2 : 0))
      .linkDirectionalParticleWidth(2)
      .linkDirectionalParticleSpeed(l => (l.supersede ? 0.004 : 0))
      .linkDirectionalArrowLength(l => (l.supersede ? 4.5 : 0))
      .linkDirectionalArrowRelPos(0.85)
      .onNodeClick(n => onNodeClicked(n.id))
      .onBackgroundClick(() => { if (state.mode === '3d') deselectAll(); })
      .graphData({ nodes: buildNodes(), links: buildLinks() });

    // 力配置：权重越大距离越近
    Graph3D.d3Force('link')
      .distance(l => l.supersede ? 34 : (18 + (5 - l.weight) * 16))
      .strength(l => (l.soft ? 0 : 1));
    Graph3D.d3Force('charge').strength(n => -38 - n.size * 0.5);
    Graph3D.d3Force('center').x(0).y(0).z(0);
    Graph3D.d3Force('cloudCluster', cloudClusterForce);
    Graph3D.d3AlphaDecay(0.0055)
      .d3VelocityDecay(0.35)
      .cooldownTime(180000)
      .warmupTicks(20);

    Graph3D.onEngineTick(() => updateClouds());
    initClouds();
    updateClouds();
    (function cloudLoop() {
      let frame = 0;
      (function step() {
        frame++;
        if (state.mode === '3d' && frame % 2 === 0) updateClouds();
        requestAnimationFrame(step);
      })();
    })();
  }

  // ------------------------- 2D 图 -------------------------
  function nodeRadius2D(n) {
    if (n.id === state.selected) return 11;
    if (n.weak) return 4;
    return 5 + Math.min(8, n.degree) * 0.7;
  }

  function isHighlighted2D(n) {
    if (!state.highlightId) return true;
    if (n.id === state.highlightId) return true;
    const nbrs = adj[state.highlightId];
    return !!(nbrs && nbrs.has(n.id));
  }

  function draw2DNode(n, ctx, gs) {
    const isCenter = n.id === state.selected;
    const weak = !!n.weak;
    const hlDim = state.highlightId && !isHighlighted2D(n);
    const r = nodeRadius2D(n) / gs;
    const baseAlpha = weak ? 0.35 : 0.92;
    ctx.beginPath();
    ctx.arc(n.x, n.y, r * gs, 0, 2 * Math.PI);
    ctx.fillStyle = n.color;
    ctx.globalAlpha = hlDim ? baseAlpha * 0.18 : baseAlpha;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = (isCenter ? 2.5 : (weak ? 0.8 : 1)) / gs;
    ctx.strokeStyle = isCenter ? '#ffffff'
      : (hlDim ? 'rgba(255,255,255,0.08)' : (weak ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.25)'));
    ctx.stroke();
    if (isCenter || n.id === state.highlightId) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, r * gs + 6, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineWidth = 1.5 / gs;
      ctx.stroke();
    }
    // 名称标签
    const fs = 14 / gs;
    ctx.font = `${fs}px "Microsoft YaHei","PingFang SC",sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.shadowColor = 'rgba(0,0,0,0.9)';
    ctx.shadowBlur = weak ? 2 : 4;
    ctx.fillStyle = hlDim ? 'rgba(255,255,255,0.22)' : (weak ? 'rgba(255,255,255,0.45)' : '#fff');
    ctx.fillText(n.name, n.x, n.y - r * gs - 3);
    ctx.shadowBlur = 0;
  }

  function paintNodePointer(n, color, ctx, gs) {
    const r = (nodeRadius2D(n) + 5) / gs;
    ctx.beginPath();
    ctx.arc(n.x, n.y, r * gs, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function linkEmphasis2D(l) {
    const f = state.highlightId;
    if (!f) return 1;
    const a = l.source.id, b = l.target.id;
    return (a === f || b === f) ? 1 : 0.2;
  }

  function initGraph2() {
    Graph2 = new ForceGraph(dom.graph2d)
      .nodeCanvasObjectMode(() => 'replace')
      .nodeCanvasObject(draw2DNode)
      .nodePointerAreaPaint(paintNodePointer)
      .nodeLabel(node => nodeLabelHTML(node))
      .linkColor(l => {
        const em = linkEmphasis2D(l);
        if (l.supersede) return em < 0.5 ? 'rgba(163,113,247,0.25)' : '#a371f7';
        const a = (l.soft ? 0.3 : 0.8) * (0.25 + 0.75 * em);
        return `rgba(139,152,165,${a.toFixed(2)})`;
      })
      .linkWidth(l => (l.supersede ? 2 : 0.5 + l.weight * 0.4) * (l.soft ? 0.6 : 1) * (0.4 + 0.6 * linkEmphasis2D(l)))
      .linkLineDash(l => ((l.soft || l.supersede) ? [4, 4] : null))
      .linkDirectionalParticles(l => (l.supersede ? 2 : 0))
      .linkDirectionalParticleWidth(2)
      .linkDirectionalParticleSpeed(l => (l.supersede ? 0.006 : 0))
      .onNodeClick(n => onNodeClicked(n.id))
      .onBackgroundClick(() => { if (state.mode === '2d') backToGlobal(); })
      .enableNodeDrag(true)
      .onNodeDragEnd(n => { n.fx = n.x; n.fy = n.y; })
      .autoPauseRedraw(false)
      .d3VelocityDecay(0.5)
      .d3AlphaDecay(0.03)
      .cooldownTime(12000);
  }

  function linkDistance2D(l) {
    const base = l.supersede ? 70 : (l.soft ? 140 : (44 + (5 - l.weight) * 26));
    return base * (state.spacing || 1);
  }

  function showEgo2D(id) {
    const node = nodeMap[id];
    if (!node) return;
    const ids = new Set([id]);
    const strongIds = new Set([id]);
    (node.links || []).forEach(l => { ids.add(l.id); strongIds.add(l.id); });
    (node.supersedeLinks || []).forEach(l => { ids.add(l.id); strongIds.add(l.id); });
    (node.softLinks || []).forEach(l => ids.add(l.id));

    const nodes = GRAPH.nodes.filter(n => ids.has(n.id)).map(n => ({
      id: n.id, name: n.name, nameEn: n.nameEn, domain: n.domain, color: n.color,
      size: n.size, degree: n.degree,
      weak: !strongIds.has(n.id),
      val: 1,
    }));
    const links = GRAPH.links.filter(l => ids.has(l.source) && ids.has(l.target))
      .map(l => ({ source: l.source, target: l.target, weight: l.weight, supersede: !!l.supersede, soft: !!l.soft }));

    Graph2.graphData({ nodes, links });
    Graph2.graphData().nodes.forEach(n => {
      if (n.id === id) { n.fx = 0; n.fy = 0; }
    });
    Graph2.d3Force('link')
      .distance(linkDistance2D)
      .strength(l => (l.soft ? 0.1 : 0.85));
    Graph2.d3Force('charge').strength(n => (n.weak ? -140 : -80));
    Graph2.d3Force('center').x(0).y(0).strength(0.02);
    Graph2.centerAt(0, 0, 0);
    Graph2.d3ReheatSimulation();
    setTimeout(() => {
      try { Graph2.zoomToFit(500, 70, n => n.id !== id); } catch (e) { /* ignore */ }
    }, 60);
  }

  // ------------------------- 模式切换 / 选择 -------------------------
  function setMode(mode) {
    state.mode = mode;
    dom.graph3d.classList.toggle('hidden', mode !== '3d');
    dom.graph2d.classList.toggle('hidden', mode !== '2d');
    dom.hint2d.classList.toggle('hidden', mode !== '2d');
    dom.btnGlobal.textContent = mode === '2d' ? '← 返回 3D 全局' : '3D 全局';
    dom.btnGlobal.classList.toggle('active', mode === '3d');
    dom.spacingCtl.classList.toggle('hidden', mode !== '2d');
    dom.btnReset.classList.toggle('hidden', mode !== '2d');

    if (mode === '3d') {
      try { Graph2.pauseAnimation(); } catch (e) { /* ignore */ }
      try { Graph3D.resumeAnimation(); } catch (e) { /* ignore */ }
      Graph3D.refresh();
      updateClouds();
      setTimeout(() => {
        try { Graph3D.zoomToFit(600, 70); } catch (e) { /* ignore */ }
      }, 80);
    } else if (mode === '2d' && state.selected) {
      try { Graph3D.pauseAnimation(); } catch (e) { /* ignore */ }
      try { Graph2.resumeAnimation(); } catch (e) { /* ignore */ }
      showEgo2D(state.selected);
      dom.hint2d.textContent =
        `以「${nodeMap[state.selected].name}」为中心 · 单击高亮相连节点 · 双击切换中心 · 空白返回全局`;
    }
  }

  function onNodeClicked(id) {
    const now = Date.now();
    if (state.lastClick.id === id && now - state.lastClick.time < 350) {
      state.lastClick = { id: null, time: 0 };
      selectNode(id, 'click');
    } else {
      state.lastClick = { id: id, time: now };
      state.highlightId = id;
      if (state.mode === '3d') Graph3D.refresh();
    }
  }

  function selectNode(id, source) {
    state.selected = id;
    state.highlightId = null;
    KTDetail.render(id);
    setMode('2d');
    if (window.KTTree) KTTree.onEntered(id, source || 'click');
  }

  function deselectAll() {
    state.selected = null;
    state.highlightId = null;
    KTDetail.close();
    setMode('3d');
  }

  function backToGlobal() {
    deselectAll();
  }

  // ------------------------- 图例 -------------------------
  function buildLegend() {
    const counts = {};
    GRAPH.nodes.forEach(n => { counts[n.domain] = (counts[n.domain] || 0) + 1; });
    const items = Object.entries(GRAPH.meta.domains).map(([did, d]) => `
      <div class="lg-item" data-domain="${did}">
        <span class="lg-swatch" style="background:${d.color}"></span>
        <span>${d.name}</span>
        <span class="lg-count">${counts[did] || 0}</span>
      </div>`).join('');
    dom.legend.innerHTML = `
      <div class="lg-title">领域（点击切换显示 / 隐藏）</div>
      ${items}
      <div class="lg-tip">节点间距越小、关系越紧密；云团表示领域区域。单击节点高亮相邻节点，双击进入节点。</div>`;
    $$('.lg-item', dom.legend).forEach(el => {
      el.addEventListener('click', () => {
        const did = el.getAttribute('data-domain');
        if (state.hiddenDomains.has(did)) state.hiddenDomains.delete(did);
        else state.hiddenDomains.add(did);
        el.classList.toggle('off', state.hiddenDomains.has(did));
        Graph3D.refresh();
        updateClouds();
      });
    });
  }

  // ------------------------- 初始化 -------------------------
  function init() {
    initGraph3D();
    initGraph2();
    buildLegend();

    KTSearch.init(id => selectNode(id, 'search'));

    if (window.KTTree) KTTree.init({ gotoNode: id => selectNode(id, 'nav') });

    dom.detailClose.addEventListener('click', deselectAll);
    dom.btnGlobal.addEventListener('click', () => {
      if (state.mode === '2d') deselectAll();
    });
    dom.btnLabels.addEventListener('click', () => setLabels(!state.labelsOn));
    dom.btnLegend.addEventListener('click', () => {
      dom.legend.classList.toggle('hidden');
      dom.btnLegend.classList.toggle('active', !dom.legend.classList.contains('hidden'));
    });

    dom.fontSlider.value = state.labelFontSize;
    dom.spacingSlider.value = Math.round(state.spacing * 100);
    dom.fontSlider.addEventListener('input', () => {
      state.labelFontSize = +dom.fontSlider.value;
      saveSettings();
      labelTextureCache.clear();
      Graph3D.refresh();
    });
    dom.spacingSlider.addEventListener('input', () => {
      state.spacing = (+dom.spacingSlider.value) / 100;
      saveSettings();
      Graph2.d3Force('link').distance(linkDistance2D);
      Graph2.d3ReheatSimulation();
    });
    dom.btnReset.addEventListener('click', () => {
      if (state.mode === '2d' && state.selected) showEgo2D(state.selected);
    });

    document.addEventListener('keydown', ev => {
      if (ev.key === 'Escape' && state.mode === '2d') deselectAll();
    });

    const nNodes = GRAPH.nodes.length;
    const nLinks = GRAPH.links.filter(l => !l.supersede).length;
    const nSup = GRAPH.links.filter(l => l.supersede).length;
    dom.stat.textContent = `节点 ${nNodes} · 连接 ${nLinks} · 上位替代 ${nSup}`;

    dom.loading.classList.add('fade');
    setTimeout(() => dom.loading.remove(), 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { selectNode, backToGlobal, setMode };
})();
