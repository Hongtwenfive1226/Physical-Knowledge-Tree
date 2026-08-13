/* 由 build.py 自动生成，请勿手动修改。修改 content/ 后重新运行 python build.py */
window.PHYSICS_GRAPH = {
 "meta": {
  "site": {
   "title": "中文物理知识树",
   "subtitle": "Physics Knowledge Graph",
   "description": "以\"四大力学\"为主干的物理与数学知识网络"
  },
  "domains": {
   "mathematics": {
    "name": "数学基础",
    "color": "#8e9eab",
    "cloud_alpha": 0.07,
    "cloud_r": 1.0
   },
   "math-methods": {
    "name": "数学物理方法",
    "color": "#16a085",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "classic-mechanics": {
    "name": "经典力学",
    "color": "#e74c3c",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "electrodynamics": {
    "name": "电动力学",
    "color": "#f39c12",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "quantum-mechanics": {
    "name": "量子力学",
    "color": "#9b59b6",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "statistical-mechanics": {
    "name": "统计物理与热力学",
    "color": "#2ecc71",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "relativity": {
    "name": "相对论",
    "color": "#3498db",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "quantum-field-theory": {
    "name": "量子场论",
    "color": "#8e44ad",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "particle-physics": {
    "name": "粒子物理",
    "color": "#d35400",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "condensed-matter": {
    "name": "凝聚态物理",
    "color": "#1abc9c",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "quantum-information": {
    "name": "量子信息",
    "color": "#c0392b",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "optics": {
    "name": "光学",
    "color": "#7f8c8d",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "fluid-mechanics": {
    "name": "流体与声学",
    "color": "#2980b9",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "cosmology": {
    "name": "天体与宇宙学",
    "color": "#6c5ce7",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "nuclear-physics": {
    "name": "核物理",
    "color": "#f9ca24",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "plasma-physics": {
    "name": "等离子体物理",
    "color": "#00cec9",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "astrophysics": {
    "name": "天体物理",
    "color": "#fd79a8",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "atomic-molecular-optics": {
    "name": "原子分子光学",
    "color": "#a29bfe",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "soft-matter": {
    "name": "软物质物理",
    "color": "#e17055",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "biophysics": {
    "name": "生物物理",
    "color": "#00b894",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "geophysics": {
    "name": "地球与大气物理",
    "color": "#57606f",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "quantum-gravity": {
    "name": "量子引力",
    "color": "#74b9ff",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   }
  },
  "max_visual_degree": 8,
  "link_weight_semantics": {
   "5": "几乎等价/直接可推导（如牛顿力学与拉格朗日力学）",
   "4": "强关联，一个的掌握直接依赖另一个",
   "3": "相关，共享部分概念或方法",
   "2": "弱相关，仅偶尔交叉",
   "1": "边缘联系，提供背景视角"
  }
 },
 "nodes": [
  {
   "id": "astrophysics",
   "name": "天体物理",
   "nameEn": "Astrophysics",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "天体物理学"
   ],
   "tags": [
    "天体物理",
    "恒星",
    "星系"
   ],
   "keywords": [
    "恒星",
    "星系",
    "星际介质",
    "致密天体"
   ],
   "size": 128,
   "degree": 11,
   "pos": {
    "x": 40,
    "y": 55,
    "z": 0
   },
   "fixed": false,
   "body": "# 天体物理\n\n## 概述\n\n天体物理把物理定律应用于**天体**（恒星、行星、星系、星际介质、致密天体），研究它们的结构、演化与辐射。核心主题：恒星内部结构与演化、恒星能源（核聚变）、恒星死亡（超新星、致密天体）、星系动力学、星际介质与恒星形成。天体物理是物理学的\"实验室\"——宇宙提供了地球上无法复现的极端条件（强引力、高密度、高温）。观测手段包括电磁辐射全波段、引力波与中微子。\n\n## 基本概念\n\n- **恒星 / 星系**：引力束缚的天体系统。\n- **光度 / 有效温度**：$L$、$T_{\\mathrm{eff}}$（赫罗图的坐标）。\n- **星际介质**：恒星间的气体与尘埃。\n- **致密天体**：白矮星、中子星、黑洞。\n- **多信使天文学**：电磁 + 引力波 + 中微子。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**流体静力学平衡**（恒星结构，[[stellar-structure]]）：\n\n$$ \\frac{dP}{dr}=-\\frac{GM(r)\\rho(r)}{r^2} $$\n\n**质量-光度关系**（主序星）：$L\\propto M^{3\\sim4}$。\n\n**钱德拉塞卡极限**（致密天体，[[compact-objects]]）：\n\n$$ M_{\\mathrm{Ch}}\\approx1.4\\,M_\\odot $$\n\n### 推导要点\n\n- **恒星平衡**：引力与压强梯度平衡（[[fluid-mechanics]] 静力学）。\n- **恒星能源**：核心核聚变（[[nuclear-fusion]]）。\n- **简并压**：白矮星/中子星由量子简并压支撑（[[quantum-statistics]]）。\n\n### 重要定理与推论\n\n- **质量-光度关系**：恒星主序的光度-质量标度。\n- **恒星演化的质量决定论**：演化路径由初始质量决定（[[stellar-evolution]]）。\n- **重元素合成**：超新星与恒星核合成（[[supernovae]]）。\n- **暗物质证据**：星系旋转曲线（[[galaxies]]）。\n\n## 深化内容\n\n天体物理连接 [[general-relativity]]（致密天体、引力波）、[[nuclear-physics]]（核合成）、[[plasma-physics]]（恒星内部）、[[electromagnetic-radiation]]（观测）。多信使天文学（[[gravitational-waves]] + 电磁）是前沿。延伸阅读可参考 Carroll & Ostlie《An Introduction to Modern Astrophysics》、Kippenhahn《Stellar Structure and Evolution》、Shu《The Physical Universe》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[stellar-structure]]、[[stellar-evolution]]、[[compact-objects]]、[[galaxies]]、[[interstellar-medium]]。\n- 理论基础：[[general-relativity]]（引力）、[[nuclear-fusion]]（恒星能源）、[[plasma-physics]]（恒星内部）。\n- 观测：[[electromagnetic-radiation]]、[[gravitational-waves]]、[[cosmology]]。\n\n## 前置知识\n\n- [[general-relativity]]、[[nuclear-physics]]、[[plasma-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "compact-objects",
     "name": "致密天体",
     "weight": 5,
     "note": "致密天体"
    },
    {
     "id": "galaxies",
     "name": "星系",
     "weight": 5,
     "note": "星系"
    },
    {
     "id": "interstellar-medium",
     "name": "星际介质",
     "weight": 5,
     "note": "星际介质"
    },
    {
     "id": "stellar-evolution",
     "name": "恒星演化",
     "weight": 5,
     "note": "恒星演化"
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 5,
     "note": "恒星内部结构"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 4,
     "note": "宇宙大尺度背景"
    },
    {
     "id": "supernovae",
     "name": "超新星",
     "weight": 4,
     "note": ""
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 3,
     "note": "引力理论"
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 3,
     "note": "恒星能量来源"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 3,
     "note": "恒星内部等离子体"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 2,
     "note": "观测辐射"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "compact-objects",
   "name": "致密天体",
   "nameEn": "Compact Objects",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "白矮星",
    "中子星",
    "致密星"
   ],
   "tags": [
    "天体物理",
    "致密天体",
    "简并"
   ],
   "keywords": [
    "白矮星",
    "中子星",
    "钱德拉塞卡极限",
    "简并压"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 致密天体\n\n## 概述\n\n致密天体是恒星演化终点的**简并残骸**，包括三类：**白矮星**（电子简并压支撑，质量上限钱德拉塞卡极限）、**中子星**（中子简并压支撑，密度达核密度，脉冲星即快速自转中子星）、**黑洞**（超过极限后引力坍缩，[[black-holes]]）。致密天体把量子简并压与广义相对论强引力这两个极端结合，是检验极端物理的天然实验室。\n\n## 基本概念\n\n- **白矮星 / 中子星 / 黑洞**：三类致密天体。\n- **钱德拉塞卡极限**：白矮星质量上限。\n- **简并压**：费米子的量子压（[[quantum-statistics]]）。\n- **脉冲星**：快速自转、强磁场的中子星。\n- **引力波**：致密双星并合（[[gravitational-waves]]）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n钱德拉塞卡极限：\n\n$$ M_{\\mathrm{Ch}}\\approx5.8\\,M_\\odot/\\mu_e^2\\approx1.4\\,M_\\odot\\ (\\text{对典型组成}) $$\n\n（$\\mu_e$ 为每电子平均分子量。）\n\n### 推导要点\n\n- **电子简并压**：白矮星由电子费米气体简并压支撑（[[quantum-statistics]]）。\n- **钱德拉塞卡极限**：简并压与引力平衡的极限质量，超过则坍缩。\n- **中子星**：超过电子简并极限后中子化，由中子简并压支撑。\n\n### 重要定理与推论\n\n- **钱德拉塞卡极限**：白矮星质量上限 $\\approx1.4M_\\odot$。\n- **简并压与引力平衡**：致密天体的支撑机制。\n- **脉冲星**：中子星的自转与辐射（灯塔模型）。\n- **致密双星并合**：引力波源（[[gravitational-waves]]）。\n\n## 深化内容\n\n致密天体连接 [[quantum-statistics]]（简并压）、[[general-relativity]]（强引力）、[[stellar-evolution]]/[[supernovae]]（形成）。中子星并合（引力波 + 千新星）是重元素来源；黑洞见 [[black-holes]]。延伸阅读可参考 Shapiro & Teukolsky《Black Holes, White Dwarfs, and Neutron Stars》、Carroll & Ostlie《An Introduction to Modern Astrophysics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[black-holes]]、[[general-relativity]]（强引力）、[[supernovae]]（形成）、[[stellar-evolution]]。\n- 量子：[[quantum-statistics]]（费米简并压）。\n\n## 前置知识\n\n- [[quantum-statistics]]、[[general-relativity]]、[[stellar-evolution]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 5,
     "note": "天体物理核心"
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 5,
     "note": "黑洞是最终致密态"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 4,
     "note": "强引力"
    },
    {
     "id": "stellar-evolution",
     "name": "恒星演化",
     "weight": 4,
     "note": "演化终点"
    },
    {
     "id": "supernovae",
     "name": "超新星",
     "weight": 4,
     "note": "形成机制"
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 3,
     "note": "简并压"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "galaxies",
   "name": "星系",
   "nameEn": "Galaxies",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "星系动力学"
   ],
   "tags": [
    "天体物理",
    "星系",
    "引力"
   ],
   "keywords": [
    "星系",
    "旋涡星系",
    "椭圆星系",
    "旋转曲线"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 星系\n\n## 概述\n\n星系是由引力束缚的**恒星、气体、尘埃与暗物质**系统，是宇宙大尺度结构的基本单元。按哈勃序列分为旋涡星系、椭圆星系、不规则星系。星系**旋转曲线**在外部保持平坦（而非开普勒衰减）是**暗物质**存在的关键证据。星系动力学、星系际介质、星系并合与活动星系核（超大质量黑洞吸积）是研究前沿。\n\n## 基本概念\n\n- **哈勃序列**：旋涡 / 椭圆 / 不规则。\n- **旋转曲线**：轨道速度随半径的变化。\n- **暗物质**：不发光的引力物质（旋转曲线平坦的证据）。\n- **活动星系核（AGN）**：超大质量黑洞吸积。\n- **星系团 / 大尺度结构**：星系的集团。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n开普勒旋转曲线（若只有可见物质）：\n\n$$ v(r)=\\sqrt{\\frac{GM(r)}{r}}\\propto r^{-1/2}\\ (\\text{外部}) $$\n\n观测到的平坦旋转曲线：$v(r)\\approx$ 常数（暗物质晕）。\n\n### 推导要点\n\n- **旋转曲线**：由引力与离心力平衡，$v^2/r=GM(r)/r^2$；若质量集中在内部，外部 $v\\propto r^{-1/2}$。\n- **平坦旋转曲线**：外部速度不降反平，说明存在暗物质晕 $M(r)\\propto r$。\n- **星系质量**：由旋转曲线 / 维里定理估计（含暗物质）。\n\n### 重要定理与推论\n\n- **暗物质证据**：旋转曲线平坦（暗物质晕）。\n- **星系形成**：暗物质晕中的重子冷却成恒星。\n- **星系并合**：旋涡星系并合成椭圆星系。\n- **活动星系核**：超大质量黑洞吸积（[[black-holes]]）。\n\n## 深化内容\n\n星系连接 [[cosmology]]（大尺度结构、暗物质）、[[general-relativity]]（引力动力学）、[[interstellar-medium]]（恒星形成）。暗物质本质仍是未解之谜。延伸阅读可参考 Binney & Tremaine《Galactic Dynamics》、Mo, van den Bosch & White《Galaxy Formation and Evolution》、Carroll & Ostlie《An Introduction to Modern Astrophysics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[astrophysics]]、[[cosmology]]（大尺度结构）、[[general-relativity]]（动力学）。\n- 关联：[[interstellar-medium]]（恒星形成）、[[stellar-evolution]]（恒星族）、[[black-holes]]（活动星系核）。\n\n## 前置知识\n\n- [[general-relativity]]、[[astrophysics]]、[[cosmology]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 5,
     "note": "天体物理对象"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 4,
     "note": "大尺度结构"
    },
    {
     "id": "interstellar-medium",
     "name": "星际介质",
     "weight": 4,
     "note": "星际气体与恒星形成"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 3,
     "note": "引力动力学"
    },
    {
     "id": "stellar-evolution",
     "name": "恒星演化",
     "weight": 2,
     "note": "恒星族"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "interstellar-medium",
   "name": "星际介质",
   "nameEn": "Interstellar Medium",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "ISM"
   ],
   "tags": [
    "天体物理",
    "星际介质",
    "气体"
   ],
   "keywords": [
    "星际气体",
    "星际尘埃",
    "恒星形成",
    "电离"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 星际介质\n\n## 概述\n\n星际介质（ISM）是星系中恒星之间的**气体与尘埃**，是恒星形成的原料库。按电离态与温度分为：中性氢（HI）、分子氢（$\\mathrm H_2$，巨分子云）、电离氢（HII 区）、星际尘埃。恒星形成发生于**分子云的引力坍缩**；大质量星的光电离产生 HII 区，超新星冲击波加热扰动 ISM。ISM 的观测依靠 21 cm 氢线、分子转动谱线与尘埃红外辐射。\n\n## 基本概念\n\n- **HI / HII 区**：中性 / 电离氢。\n- **巨分子云**：恒星形成的场所（$\\mathrm H_2$）。\n- **星际尘埃**：吸收/散射星光的固体微粒。\n- **恒星形成**：分子云引力坍缩。\n- **21 cm 线**：中性氢的超精细跃迁。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n金斯判据（引力坍缩条件）：\n\n$$ M>M_J\\approx\\Big(\\frac{\\pi k_BT}{G\\mu m_H}\\Big)^{3/2}\\rho^{-1/2} $$\n\n（分子云质量超过金斯质量时坍缩成恒星。）\n\n### 推导要点\n\n- **金斯不稳定性**：引力与热压竞争，超过金斯质量则引力坍缩。\n- **HII 区**：大质量星的紫外光电离周围氢（[[plasma-physics]]）。\n- **21 cm 线**：HI 的超精细跃迁（电子自旋翻转）。\n\n### 重要定理与推论\n\n- **恒星形成的场所**：巨分子云的引力坍缩。\n- **ISM 的物质循环**：恒星形成 → 星风/超新星 → 返回 ISM。\n- **尘埃消光与红外辐射**：尘埃吸收星光再红外辐射。\n- **ISM 观测**：21 cm 线、分子谱线、红外。\n\n## 深化内容\n\nISM 连接 [[galaxies]]（星系组分）、[[plasma-physics]]（HII 区）、[[electromagnetic-radiation]]（谱线观测）、[[stellar-structure]]（恒星形成）。延伸阅读可参考 Draine《Physics of the Interstellar and Intergalactic Medium》、Carroll & Ostlie《An Introduction to Modern Astrophysics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[astrophysics]]、[[galaxies]]（星系组分）、[[plasma-physics]]（电离气体）。\n- 关联：[[stellar-structure]]（恒星形成）、[[electromagnetic-radiation]]（谱线观测）。\n\n## 前置知识\n\n- [[astrophysics]]、[[plasma-physics]]、[[galaxies]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 5,
     "note": "恒星形成背景"
    },
    {
     "id": "galaxies",
     "name": "星系",
     "weight": 4,
     "note": "星系组分"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 3,
     "note": "电离氢区"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 2,
     "note": "观测谱线"
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "stellar-evolution",
   "name": "恒星演化",
   "nameEn": "Stellar Evolution",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "恒星生命周期"
   ],
   "tags": [
    "天体物理",
    "恒星",
    "演化"
   ],
   "keywords": [
    "赫罗图",
    "主序星",
    "红巨星",
    "白矮星"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 恒星演化\n\n## 概述\n\n恒星演化描述恒星随时间在**赫罗图**（光度-温度图）上的移动，其路径主要由**初始质量**决定。恒星的一生是\"引力与核聚变的竞争\"：主序上核心氢聚变，氢耗尽后核心收缩升温、逐级点燃更重的核燃料（氢→氦→碳/氧→…→铁）。小质量星平静地演化为白矮星，大质量星以超新星爆发终结、留下中子星或黑洞。恒星演化是元素合成（核合成）与致密天体形成的核心过程。\n\n## 基本概念\n\n- **赫罗图（HR 图）**：光度-温度图。\n- **主序**：核心氢燃烧阶段（恒星大部分寿命）。\n- **红巨星 / 红超巨星**：氢壳层燃烧阶段。\n- **简并核心**：白矮星的支撑。\n- **演化终点**：白矮星 / 中子星 / 黑洞。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n主序寿命（质量-光度关系 $L\\propto M^3$）：\n\n$$ \\tau_{\\mathrm{MS}}\\propto\\frac{M}{L}\\propto M^{-2} $$\n\n（大质量星寿命短。）\n\n### 推导要点\n\n- **主序能源**：核心氢聚变（质子-质子链、CNO 循环，[[nuclear-fusion]]）。\n- **红巨星相**：核心氢耗尽、壳层氢燃烧，外层膨胀冷却。\n- **大质量星演化**：逐级核燃烧到铁核，铁核坍缩（[[supernovae]]）。\n\n### 重要定理与推论\n\n- **质量决定演化**：初始质量决定演化路径与终点。\n- **主序寿命**：$\\tau\\propto M^{-2}$（大质量星短命）。\n- **元素合成**：恒星内部核合成 + 超新星爆炸核合成。\n- **恒星残骸**：白矮星（$M<8M_\\odot$）、中子星/黑洞（$M>8M_\\odot$）。\n\n## 深化内容\n\n恒星演化连接 [[stellar-structure]]（结构方程）、[[nuclear-fusion]]（能源）、[[supernovae]]（终点）、[[compact-objects]]（残骸）；是 [[astrophysics]] 的核心。延伸阅读可参考 Kippenhahn《Stellar Structure and Evolution》、Carroll & Ostlie《An Introduction to Modern Astrophysics》、Hansen & Kawaler《Stellar Interiors》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[stellar-structure]]（动力学基础）、[[astrophysics]]。\n- 终点：[[supernovae]]、[[compact-objects]]（白矮星/中子星/黑洞）。\n- 能源：[[nuclear-fusion]]（逐级核合成）。\n\n## 前置知识\n\n- [[stellar-structure]]、[[nuclear-fusion]]、[[astrophysics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 5,
     "note": "核心主题"
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 5,
     "note": "演化由结构方程决定"
    },
    {
     "id": "supernovae",
     "name": "超新星",
     "weight": 5,
     "note": "大质量星终点"
    },
    {
     "id": "compact-objects",
     "name": "致密天体",
     "weight": 4,
     "note": "演化终点残骸"
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 3,
     "note": "各阶段的核燃料"
    },
    {
     "id": "galaxies",
     "name": "星系",
     "weight": 2,
     "note": "恒星族"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "stellar-structure",
   "name": "恒星结构",
   "nameEn": "Stellar Structure",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "恒星内部结构"
   ],
   "tags": [
    "天体物理",
    "恒星",
    "结构"
   ],
   "keywords": [
    "流体静力学平衡",
    "质量-光度关系",
    "能量输运"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 恒星结构\n\n## 概述\n\n恒星结构由**四个一阶微分方程**（恒星结构方程）描述：流体静力学平衡、质量连续性、能量产生、能量输运，加上**状态方程**封闭系统。主序星处于流体静力学平衡——引力被压强梯度支撑，能量由核心核聚变提供并经辐射/对流输运到表面。恒星结构方程是理解恒星演化（[[stellar-evolution]]）与质量-光度关系的基础。\n\n## 基本概念\n\n- **流体静力学平衡**：引力与压强梯度平衡。\n- **质量-光度关系**：$L\\propto M^{3\\sim4}$（主序）。\n- **能量输运**：辐射 / 对流。\n- **状态方程**：理想气体 / 简并 / 辐射压。\n- **不透明度**：辐射输运的关键参数。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n恒星结构方程（四个）：\n\n$$ \\frac{dP}{dr}=-\\frac{GM(r)\\rho}{r^2},\\qquad \\frac{dM}{dr}=4\\pi r^2\\rho $$\n\n$$ \\frac{dL}{dr}=4\\pi r^2\\rho\\varepsilon,\\qquad \\frac{dT}{dr}=\\begin{cases}-\\frac{3\\kappa\\rho L}{16\\pi ac r^2T^3} & \\text{(辐射)}\\\\ -\\frac{\\gamma-1}{\\gamma}\\frac{T}{P}\\frac{dP}{dr} & \\text{(对流)}\\end{cases} $$\n\n### 推导要点\n\n- **静力学平衡**：引力与压强梯度力平衡（[[fluid-mechanics]]）。\n- **能量输运**：辐射扩散方程（光子平均自由程 $\\sim1/\\kappa\\rho$）。\n- **状态方程**：理想气体 $P=\\rho k_BT/\\mu m_H$（主序恒星）。\n\n### 重要定理与推论\n\n- **质量-光度关系**：$L\\propto M^3$（太阳附近主序）。\n- **主序的性质**：核心氢聚变，$T_c\\sim10^7$ K。\n- **维里定理**：恒星内能 = -1/2 引力势能。\n- **简并与辐射压**：白矮星简并、大质量星辐射压。\n\n## 深化内容\n\n恒星结构连接 [[fluid-mechanics]]（静力学）、[[thermodynamics]]（状态方程、输运）、[[nuclear-fusion]]（能源）、[[plasma-physics]]（恒星内部）。恒星结构方程数值求解（恒星演化模型）是标准工具。延伸阅读可参考 Kippenhahn《Stellar Structure and Evolution》、Carroll & Ostlie《An Introduction to Modern Astrophysics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[stellar-evolution]]、[[astrophysics]]、[[nuclear-fusion]]（能源）。\n- 物理基础：[[fluid-mechanics]]（静力学平衡）、[[thermodynamics]]（状态方程与输运）、[[plasma-physics]]（恒星内部等离子体）。\n\n## 前置知识\n\n- [[fluid-mechanics]]、[[thermodynamics]]、[[nuclear-fusion]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 5,
     "note": "天体物理核心"
    },
    {
     "id": "stellar-evolution",
     "name": "恒星演化",
     "weight": 5,
     "note": "结构决定演化"
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 4,
     "note": "核心能源"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 3,
     "note": "流体静力学平衡"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "能量输运与状态方程"
    },
    {
     "id": "interstellar-medium",
     "name": "星际介质",
     "weight": 2,
     "note": ""
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 2,
     "note": "恒星内部等离子体"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "supernovae",
   "name": "超新星",
   "nameEn": "Supernovae",
   "domain": "astrophysics",
   "domainName": "天体物理",
   "color": "#fd79a8",
   "aliases": [
    "超新星爆发"
   ],
   "tags": [
    "天体物理",
    "超新星",
    "恒星死亡"
   ],
   "keywords": [
    "Ia型",
    "核心坍缩",
    "重元素合成",
    "光变曲线"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 超新星\n\n## 概述\n\n超新星是恒星的**剧烈爆发**，是恒星死亡的壮观事件，分两大类：**核心坍缩超新星**（大质量星铁核坍缩、反弹，外层抛出）与 **Ia 型超新星**（白矮星吸积超过钱德拉塞卡极限后的热核爆炸）。超新星是宇宙中**重元素**（比铁重，经 r 过程）的主要合成场所，其峰值亮度可达整个星系量级，Ia 型超新星作为**标准烛光**用于宇宙距离测量。\n\n## 基本概念\n\n- **核心坍缩 / Ia 型**：两类超新星。\n- **r 过程**：快中子俘获（重元素合成）。\n- **光变曲线**：亮度随时间的变化。\n- **标准烛光**：Ia 型超新星的峰值光度近似恒定。\n- **残骸**：中子星 / 黑洞（核心坍缩）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\nIa 型超新星（钱德拉塞卡质量，[[compact-objects]]）：\n\n$$ M_{\\mathrm{Ch}}\\approx1.4\\,M_\\odot $$\n\n光变曲线峰值光度（Ia 型标准烛光）：\n\n$$ L_{\\mathrm{peak}}\\approx10^{43}\\,\\mathrm{erg/s}\\ (\\text{近似恒定}) $$\n\n### 推导要点\n\n- **核心坍缩**：铁核无法继续聚变（铁峰结合能最大），引力坍缩、中子化、反弹激波抛出外层。\n- **Ia 型**：白矮星吸积至钱德拉塞卡极限，碳氧热核爆炸。\n- **重元素合成**：r 过程（快速中子俘获）在超新星中合成比铁重的元素（[[nuclear-physics]]）。\n\n### 重要定理与推论\n\n- **重元素起源**：宇宙中比铁重的元素主要来自超新星（及中子星并合）。\n- **Ia 型标准烛光**：用于宇宙距离测量（发现宇宙加速膨胀，[[cosmology]]）。\n- **残骸**：核心坍缩超新星留下中子星/黑洞（[[compact-objects]]）。\n- **引力波**：核心坍缩可能辐射引力波（[[gravitational-waves]]）。\n\n## 深化内容\n\n超新星连接 [[stellar-evolution]]（来源）、[[compact-objects]]（残骸）、[[nuclear-physics]]（核合成）、[[gravitational-waves]]（多信使）。Ia 型超新星是 [[cosmology]] 暗能量发现的关键。延伸阅读可参考 Carroll & Ostlie《An Introduction to Modern Astrophysics》、Woosley & Janka《The Physics of Core-Collapse Supernovae》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[stellar-evolution]]（来源）、[[compact-objects]]（残骸：中子星/黑洞）。\n- 核合成：[[nuclear-physics]]（r 过程）；引力波：[[gravitational-waves]]。\n- 应用：宇宙学距离测量（[[cosmology]]）。\n\n## 前置知识\n\n- [[stellar-evolution]]、[[nuclear-physics]]、[[compact-objects]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "stellar-evolution",
     "name": "恒星演化",
     "weight": 5,
     "note": "大质量星终点"
    },
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 4,
     "note": ""
    },
    {
     "id": "compact-objects",
     "name": "致密天体",
     "weight": 4,
     "note": "残骸形成"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 3,
     "note": "重元素核合成"
    },
    {
     "id": "gravitational-waves",
     "name": "引力波",
     "weight": 2,
     "note": "核心坍缩引力波"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "atomic-molecular-optics",
   "name": "原子分子光学物理",
   "nameEn": "Atomic, Molecular and Optical Physics",
   "domain": "atomic-molecular-optics",
   "domainName": "原子分子光学",
   "color": "#a29bfe",
   "aliases": [
    "AMO物理"
   ],
   "tags": [
    "原子物理",
    "分子物理",
    "光学",
    "精密测量"
   ],
   "keywords": [
    "原子",
    "分子",
    "激光",
    "精密测量"
   ],
   "size": 88,
   "degree": 7,
   "pos": {
    "x": -10,
    "y": 60,
    "z": 0
   },
   "fixed": false,
   "body": "# 原子分子光学物理（AMO）\n\n## 概述\n\nAMO 物理研究**原子、分子与光的相互作用**，是量子力学最精确的实验检验场。涵盖原子结构、分子光谱、激光冷却与俘获、超冷原子、精密测量。AMO 提供最精确的物理常数测量（精细结构常数 $\\alpha\\approx1/137.036$）与原子钟（秒的现代定义）。现代 AMO 与量子信息（量子比特、量子模拟）、精密测量（原子干涉仪、引力波探测）深度融合，是冷原子量子技术的基础。\n\n## 基本概念\n\n- **原子 / 分子结构**：电子能级、分子振转谱。\n- **激光冷却**：光子动量转移冷却原子（[[laser-cooling]]）。\n- **超冷原子**：纳开尔文原子气体（[[ultracold-atoms]]）。\n- **原子钟**：基于原子超精细跃迁的计时标准。\n- **精密测量**：物理常数、惯性、引力的精确测量。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n原子能级与跃迁（[[atomic-physics]]）：\n\n$$ E_n=-\\frac{13.6\\,\\mathrm{eV}}{n^2}\\ (\\text{类氢}) $$\n\n多普勒冷却极限温度（[[laser-cooling]]）：\n\n$$ T_D=\\frac{\\hbar\\Gamma}{2k_B} $$\n\n### 推导要点\n\n- **原子结构**：薛定谔方程 + 精细/超精细修正（[[atomic-physics]]）。\n- **激光冷却**：光子反冲动量与多普勒效应（[[laser-cooling]]）。\n- **精密测量**：干涉相位 $\\propto$ 路径，原子干涉仪测量惯性。\n\n### 重要定理与推论\n\n- **原子钟的精度**：铯/锶原子钟，相对精度 $10^{-18}$。\n- **激光冷却**：达到微开尔文（多普勒极限）。\n- **玻色-爱因斯坦凝聚**：超冷原子的宏观量子态（[[ultracold-atoms]]、[[bose-einstein-condensation]]）。\n- **精密测量应用**：基本常数、引力波、惯性导航。\n\n## 深化内容\n\nAMO 是 [[quantum-mechanics]] 的试验场，与 [[quantum-optics]]（光-物质相互作用）、[[lasers]]（工具）、[[quantum-information]]（量子比特、量子模拟）深度交叉。延伸阅读可参考 Foot《Atomic Physics》、Metcalf & van der Straten《Laser Cooling and Trapping》、Demtröder《Atoms, Molecules and Photons》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[atomic-physics]]、[[molecular-physics]]、[[laser-cooling]]、[[ultracold-atoms]]、[[quantum-optics]]。\n- 基础：[[quantum-mechanics]]；工具：[[lasers]]。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[quantum-optics]]、[[atomic-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 5,
     "note": "原子层次"
    },
    {
     "id": "laser-cooling",
     "name": "激光冷却",
     "weight": 5,
     "note": "原子冷却与俘获"
    },
    {
     "id": "molecular-physics",
     "name": "分子物理",
     "weight": 5,
     "note": "分子层次"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "ultracold-atoms",
     "name": "超冷原子",
     "weight": 5,
     "note": "超冷原子"
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 4,
     "note": "光与物质量子相互作用"
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 3,
     "note": "激光工具"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "atomic-physics",
   "name": "原子物理",
   "nameEn": "Atomic Physics",
   "domain": "atomic-molecular-optics",
   "domainName": "原子分子光学",
   "color": "#a29bfe",
   "aliases": [
    "原子结构"
   ],
   "tags": [
    "原子",
    "能级",
    "光谱"
   ],
   "keywords": [
    "精细结构",
    "超精细结构",
    "能级",
    "电子组态"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 原子物理\n\n## 概述\n\n原子物理研究原子的**电子结构、能级与光谱**。电子组态由泡利原理与洪特规则决定，能级按能量尺度分层：粗结构（主量子数）、**精细结构**（自旋-轨道耦合的相对论效应）、**超精细结构**（电子与核自旋耦合）。氢原子（[[hydrogen-atom]]）是精确可解原型，其兰姆位移等 QED 修正（[[qed]]）精确计算。原子能级与跃迁是光谱学、激光物理、原子钟与精密测量的基础。\n\n## 基本概念\n\n- **电子组态**：电子占据的轨道。\n- **精细结构**：自旋-轨道耦合（$\\propto\\alpha^2$）。\n- **超精细结构**：电子-核自旋耦合。\n- **塞曼 / 斯塔克效应**：外磁场 / 电场劈裂。\n- **选择定则**：跃迁的角动量/宇称限制。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n类氢原子能级：\n\n$$ E_n=-\\frac{13.6\\,\\mathrm{eV}}{n^2} $$\n\n精细结构（自旋-轨道 + 相对论）：\n\n$$ E_{FS}=\\frac{(Z\\alpha)^2}{n^3}\\Big(\\frac{3}{4n}-\\frac{1}{j+1/2}\\Big)\\frac{13.6\\,\\mathrm{eV}}{n^2} $$\n\n### 推导要点\n\n- **电子组态**：多电子原子用中心场近似，电子占据壳层（泡利原理、洪特规则）。\n- **自旋-轨道耦合**：$\\hat H_{SO}=\\xi\\vec L\\cdot\\vec S$，$j=l\\pm1/2$ 劈裂（[[angular-momentum-qm]]、[[spin]]）。\n- **超精细结构**：核自旋 $I$ 与电子角动量耦合，$F=I+J$（21 cm 线）。\n\n### 重要定理与推论\n\n- **精细结构**：相对论 + 自旋-轨道（[[perturbation-theory]]）。\n- **超精细结构**：核磁矩与电子耦合（原子钟的基础）。\n- **塞曼效应**：外磁场劈裂能级（正常/反常塞曼）。\n- **兰姆位移**：QED 辐射修正（[[qed]]）。\n\n## 深化内容\n\n原子物理是 [[quantum-mechanics]] 的精确检验（[[hydrogen-atom]]、[[qed]]），并支撑原子钟、[[laser-cooling]]、[[quantum-information]]。延伸阅读可参考 Foot《Atomic Physics》、Bransden & Joachain《Physics of Atoms and Molecules》、Griffiths《量子力学概论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[hydrogen-atom]]、[[angular-momentum-qm]]/[[spin]]。\n- 高精度修正：[[qed]]（兰姆位移、反常磁矩）。\n- 应用：原子钟、激光冷却、光谱分析。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[hydrogen-atom]]、[[angular-momentum-qm]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 5,
     "note": "AMO 基础"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 4,
     "note": "精确可解原型"
    },
    {
     "id": "molecular-physics",
     "name": "分子物理",
     "weight": 4,
     "note": "由原子组成分子"
    },
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "laser-cooling",
     "name": "激光冷却",
     "weight": 3,
     "note": "能级与跃迁"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 3,
     "note": "精细/超精细结构"
    },
    {
     "id": "ultracold-atoms",
     "name": "超冷原子",
     "weight": 3,
     "note": "超冷原子属原子物理应用"
    }
   ],
   "softLinks": [
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 3,
     "note": "光与原子相互作用"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 2,
     "note": "兰姆位移"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "laser-cooling",
   "name": "激光冷却",
   "nameEn": "Laser Cooling",
   "domain": "atomic-molecular-optics",
   "domainName": "原子分子光学",
   "color": "#a29bfe",
   "aliases": [
    "多普勒冷却"
   ],
   "tags": [
    "原子",
    "冷却",
    "激光"
   ],
   "keywords": [
    "多普勒冷却",
    "磁光阱",
    "光学黏胶"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 激光冷却\n\n## 概述\n\n激光冷却利用**光子动量转移**减速原子：原子吸收迎面光子获得反冲动量，随后向各向同性自发辐射（净动量变化为零），净效应是持续减速（散射力/辐射压力）。**多普勒冷却**利用多普勒效应使迎面光子的吸收概率更大，冷却极限为**多普勒温度** $T_D=\\hbar\\Gamma/2k_B$（铷约 100 μK）。**磁光阱（MOT）**结合磁场梯度与圆偏振光实现三维冷却与俘获。激光冷却使原子达到微开尔文量级，是 [[ultracold-atoms]] 与玻色-爱因斯坦凝聚的前提（1997 诺奖）。\n\n## 基本概念\n\n- **散射力 / 辐射压力**：光子反冲动量传递。\n- **多普勒冷却**：利用多普勒效应选择性吸收。\n- **多普勒温度** $T_D=\\hbar\\Gamma/2k_B$：冷却极限。\n- **磁光阱（MOT）**：磁场 + 光的三维俘获。\n- **蒸发冷却**：进一步冷却到纳开尔文。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n多普勒冷却极限温度：\n\n$$ T_D=\\frac{\\hbar\\Gamma}{2k_B} $$\n\n（$\\Gamma$ 为激发态自然线宽。）\n\n### 推导要点\n\n- **散射力**：每吸收-发射一个光子，原子获得反冲动量 $\\hbar k$；吸收定向、发射各向同性，净减速。\n- **多普勒冷却**：原子迎着光运动时多普勒频移使吸收更有效，产生速度依赖的减速力。\n- **冷却极限**：冷却与反冲加热平衡，给出 $T_D=\\hbar\\Gamma/2k_B$。\n\n### 重要定理与推论\n\n- **多普勒冷却**：达到微开尔文量级。\n- **磁光阱**：三维冷却 + 俘获。\n- **亚多普勒冷却**：Sisyphus 冷却等达到低于 $T_D$（反冲极限）。\n- **为 BEC 铺路**：激光冷却 + 蒸发冷却实现 [[ultracold-atoms]]。\n\n## 深化内容\n\n激光冷却连接 [[quantum-optics]]（光子动量）、[[atomic-physics]]（能级与跃迁）、[[lasers]]（工具）；是 [[ultracold-atoms]] 与 [[bose-einstein-condensation]] 的前提。延伸阅读可参考 Metcalf & van der Straten《Laser Cooling and Trapping》、Foot《Atomic Physics》、Phillips《Laser cooling and trapping of neutral atoms》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[ultracold-atoms]]、[[atomic-molecular-optics]]、[[quantum-optics]]（光子动量）。\n- 工具：[[lasers]]、[[atomic-physics]]（能级选择）、[[quantum-mechanics]]。\n\n## 前置知识\n\n- [[atomic-physics]]、[[quantum-optics]]、[[lasers]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 5,
     "note": "AMO 核心技术"
    },
    {
     "id": "ultracold-atoms",
     "name": "超冷原子",
     "weight": 5,
     "note": "冷却到超低温"
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 4,
     "note": "工具"
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 4,
     "note": "光子动量转移"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 3,
     "note": "能级与跃迁"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "molecular-physics",
   "name": "分子物理",
   "nameEn": "Molecular Physics",
   "domain": "atomic-molecular-optics",
   "domainName": "原子分子光学",
   "color": "#a29bfe",
   "aliases": [
    "分子光谱"
   ],
   "tags": [
    "分子",
    "能级",
    "光谱"
   ],
   "keywords": [
    "玻恩-奥本海默近似",
    "振动能级",
    "转动能级"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 分子物理\n\n## 概述\n\n分子物理研究分子的**结构、能级与光谱**。核心近似是**玻恩-奥本海默近似**：因电子远轻于核，电子运动与核运动可分离（电子绝热跟随核）。分子能级分解为电子、振动、转动三部分，能量尺度依次递减。振动（红外）与转动（微波）能级反映核骨架，电子跃迁在紫外/可见光。分子光谱是化学分析、遥感、天体分子探测与激光化学的工具。\n\n## 基本概念\n\n- **玻恩-奥本海默近似**：电子-核运动分离。\n- **振动能级**：$E_v=\\hbar\\omega(v+1/2)$。\n- **转动能级**：$E_J=BJ(J+1)$。\n- **电子能级**：分子轨道。\n- **振转光谱**：振动带中的转动结构。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n分子能级分解：\n\n$$ E=E_{\\mathrm{电子}}+E_{\\mathrm{振动}}+E_{\\mathrm{转动}} $$\n\n刚性转子转动能级与振动能级：\n\n$$ E_J=\\frac{\\hbar^2}{2I}J(J+1),\\qquad E_v=\\hbar\\omega\\Big(v+\\frac12\\Big) $$\n\n### 推导要点\n\n- **玻恩-奥本海默近似**：电子质量 $\\ll$ 核质量，绝热分离电子与核运动。\n- **刚性转子**：双原子分子的转动（$I$ 为转动惯量）。\n- **简谐振动**：核间势的二次近似（[[vibration-theory]]）。\n\n### 重要定理与推论\n\n- **电子-振动-转动分离**：分子能级的三级结构。\n- **分子光谱**：振动（红外）、转动（微波）、电子（紫外/可见）。\n- **选择定则**：$\\Delta J=\\pm1$（转动）、$\\Delta v=\\pm1$（谐振动）。\n- **分子结构测定**：由转动光谱得键长（转动惯量）。\n\n## 深化内容\n\n分子物理连接 [[atomic-physics]]（原子组成分子）、[[quantum-mechanics]]（玻恩-奥本海默）、[[molecular-biophysics]]（生物大分子）、[[statistical-mechanics]]（分子配分函数）。延伸阅读可参考 Atkins & Friedman《Molecular Quantum Mechanics》、Demtröder《Molecular Physics》、Bernath《Spectra of Atoms and Molecules》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[atomic-physics]]（原子组成分子）、[[quantum-mechanics]]（玻恩-奥本海默近似）。\n- 关联：[[molecular-biophysics]]（生物大分子）、[[statistical-mechanics]]（分子配分函数）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[atomic-physics]]、[[vibration-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 5,
     "note": "AMO 基础"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 4,
     "note": "由原子组成分子"
    },
    {
     "id": "molecular-biophysics",
     "name": "分子生物物理",
     "weight": 3,
     "note": "生物大分子"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 2,
     "note": "分子统计"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "ultracold-atoms",
   "name": "超冷原子",
   "nameEn": "Ultracold Atoms",
   "domain": "atomic-molecular-optics",
   "domainName": "原子分子光学",
   "color": "#a29bfe",
   "aliases": [
    "超冷原子气体"
   ],
   "tags": [
    "原子",
    "超冷",
    "量子模拟"
   ],
   "keywords": [
    "玻色-爱因斯坦凝聚",
    "光晶格",
    "量子模拟"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 超冷原子\n\n## 概述\n\n超冷原子是温度达**纳开尔文**量级（经 [[laser-cooling]] + 蒸发冷却）的原子气体，展现出宏观量子相干性。1995 年首次实现 [[bose-einstein-condensation]]（铷、钠、锂，2001 诺奖）。**光晶格**（驻波激光形成的周期势）中的超冷原子可模拟强关联量子多体系统（玻色-哈伯德模型），是**量子模拟**的重要平台；也用于原子干涉仪、原子钟与精密测量。\n\n## 基本概念\n\n- **超冷原子气体**：纳开尔文原子云。\n- **光晶格**：驻波激光的周期势。\n- **玻色-哈伯德模型**：光晶格中超冷原子的理论模型。\n- **量子模拟**：用量子系统模拟另一量子系统。\n- **原子干涉仪**：基于物质波干涉的惯性/重力测量。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n光晶格中的玻色-哈伯德模型：\n\n$$ H=-J\\sum_{\\langle ij\\rangle}a_i^\\dagger a_j+\\frac{U}{2}\\sum_i n_i(n_i-1) $$\n\n（$J$ 为隧穿、$U$ 为格点相互作用。）\n\n### 推导要点\n\n- **冷却到 BEC**：激光冷却 + 蒸发冷却达到 [[bose-einstein-condensation]]。\n- **光晶格**：驻波激光的周期势，原子在其中隧穿。\n- **玻色-哈伯德模型**：光晶格中超冷玻色子的紧束缚模型（[[second-quantization]]）。\n\n### 重要定理与推论\n\n- **玻色-爱因斯坦凝聚**：宏观占据基态（[[bose-einstein-condensation]]）。\n- **超流-莫特绝缘体相变**：光晶格中的量子相变。\n- **量子模拟**：模拟强关联系统、拓扑模型。\n- **精密测量**：原子干涉仪、原子钟。\n\n## 深化内容\n\n超冷原子是 [[quantum-computing]]（冷原子平台）、[[quantum-information]]、精密测量的前沿；连接 [[laser-cooling]]、[[bose-einstein-condensation]]、[[second-quantization]]。延伸阅读可参考 Pethick & Smith《Bose-Einstein Condensation in Dilute Gases》、Bloch《Ultracold quantum gases in optical lattices》、Lewenstein《Ultracold Atoms in Optical Lattices》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[laser-cooling]]（冷却）、[[bose-einstein-condensation]]（凝聚）、[[atomic-molecular-optics]]。\n- 应用：[[quantum-computing]]（量子模拟）、精密测量、[[quantum-information]]。\n\n## 前置知识\n\n- [[laser-cooling]]、[[bose-einstein-condensation]]、[[second-quantization]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 5,
     "note": "AMO 前沿"
    },
    {
     "id": "bose-einstein-condensation",
     "name": "玻色-爱因斯坦凝聚",
     "weight": 5,
     "note": "玻色凝聚"
    },
    {
     "id": "laser-cooling",
     "name": "激光冷却",
     "weight": 5,
     "note": "冷却手段"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "量子相干"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 3,
     "note": "超冷原子属原子物理应用"
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 2,
     "note": "冷原子量子模拟"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "biophysics",
   "name": "生物物理",
   "nameEn": "Biophysics",
   "domain": "biophysics",
   "domainName": "生物物理",
   "color": "#00b894",
   "aliases": [
    "生物物理学"
   ],
   "tags": [
    "生物物理",
    "分子",
    "细胞"
   ],
   "keywords": [
    "分子机器",
    "细胞",
    "神经",
    "统计物理方法"
   ],
   "size": 78,
   "degree": 6,
   "pos": {
    "x": -50,
    "y": 60,
    "z": 0
   },
   "fixed": false,
   "body": "# 生物物理\n\n## 概述\n\n生物物理用**物理原理与方法**研究生命系统，跨越三个层次：分子（蛋白质、DNA、分子马达）、细胞（膜、骨架、运动）、组织/神经（信号、网络）。核心方法来自 [[statistical-mechanics]]（统计与涨落）、[[soft-matter]]（软材料）、[[information-theory]]（信息处理）、以及单分子测量与光学显微。生物物理把定量物理思维引入生命科学，是现代生命科学的基础学科之一。\n\n## 基本概念\n\n- **分子 / 细胞 / 神经**：三个研究层次。\n- **单分子测量**：光镊、AFM、荧光共振。\n- **分子马达**：肌球蛋白、驱动蛋白。\n- **机械转导**：力学信号转化学信号。\n- **神经编码**：神经系统的信息处理。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n蛋白质折叠的自由能景观（[[molecular-biophysics]]）：\n\n$$ \\Delta G=\\Delta H-T\\Delta S $$\n\n细胞骨架的弹性（[[cell-mechanics]]，[[continuum-mechanics]]）。\n\n神经元的霍奇金-赫胥黎方程（[[neuroscience-physics]]）：\n\n$$ C_m\\frac{dV}{dt}=-\\sum_iI_i+I_{\\mathrm{ext}} $$\n\n### 推导要点\n\n- **蛋白质折叠**：能量漏斗景观（[[statistical-mechanics]]）。\n- **细胞力学**：骨架的弹-黏性质（[[continuum-mechanics]]、[[soft-matter]]）。\n- **神经动力学**：离子通道的动力学（[[differential-equations]]）。\n\n### 重要定理与推论\n\n- **蛋白质折叠的能量漏斗**：天然态是全局自由能极小。\n- **分子马达的力学-化学耦合**：化学能转机械功。\n- **机械转导**：细胞感知并响应力学信号。\n- **神经信息编码**：神经脉冲序列编码信息（[[information-theory]]）。\n\n## 深化内容\n\n生物物理是 [[statistical-mechanics]]、[[soft-matter]]、[[information-theory]] 的应用，与 [[molecular-biophysics]]、[[cell-mechanics]]、[[neuroscience-physics]] 组成学科框架。延伸阅读可参考 Nelson《Biological Physics》、Phillips《Physical Biology of the Cell》、Bialek《Biophysics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[molecular-biophysics]]、[[cell-mechanics]]、[[neuroscience-physics]]。\n- 基础：[[statistical-mechanics]]、[[soft-matter]]、[[information-theory]]。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[soft-matter]]、[[information-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "cell-mechanics",
     "name": "细胞力学",
     "weight": 5,
     "note": "细胞层次"
    },
    {
     "id": "molecular-biophysics",
     "name": "分子生物物理",
     "weight": 5,
     "note": "分子层次"
    },
    {
     "id": "neuroscience-physics",
     "name": "神经科学物理",
     "weight": 5,
     "note": "神经系统"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "统计方法"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 3,
     "note": "信息处理"
    },
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 3,
     "note": "软物质背景"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "cell-mechanics",
   "name": "细胞力学",
   "nameEn": "Cell Mechanics",
   "domain": "biophysics",
   "domainName": "生物物理",
   "color": "#00b894",
   "aliases": [
    "细胞力学",
    "细胞骨架"
   ],
   "tags": [
    "生物物理",
    "细胞",
    "力学"
   ],
   "keywords": [
    "细胞骨架",
    "膜张力",
    "迁移",
    "黏附"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 细胞力学\n\n## 概述\n\n细胞力学研究细胞的**力学性质与力学响应**，是生物物理的重要层次。**细胞骨架**（微丝、微管、中间纤维）赋予细胞弹-黏性质；细胞膜张力、细胞黏附与迁移、**机械转导**（力学信号转化为生化信号）是核心主题。方法包括原子力显微镜（AFM）、微管吸吮、牵引力显微术、微流控。细胞力学把 [[continuum-mechanics]] 与 [[soft-matter]] 应用于活细胞。\n\n## 基本概念\n\n- **细胞骨架**：微丝、微管、中间纤维。\n- **膜张力**：细胞膜的力学。\n- **细胞黏附 / 迁移**：细胞与基质的相互作用。\n- **机械转导**：力学→生化信号。\n- **弹-黏性质**：细胞的流变行为。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n细胞骨架的弹性模量（[[continuum-mechanics]] 的胡克定律）：\n\n$$ \\sigma=E\\epsilon $$\n\n（细胞 $E\\sim1\\sim10$ kPa。）\n\n### 推导要点\n\n- **细胞骨架力学**：微丝/微管网络赋予细胞弹性与流变（[[soft-matter]]）。\n- **膜张力**：脂质双层的面积弹性。\n- **机械转导**：黏附斑感知力学信号并转导。\n\n### 重要定理与推论\n\n- **细胞的弹-黏性质**：细胞是黏弹性材料（幂律流变）。\n- **机械转导**：细胞感知基质刚度并响应。\n- **细胞迁移**：骨架极化驱动迁移（伪足）。\n- **细胞刚度与疾病**：癌细胞的力学性质改变。\n\n## 深化内容\n\n细胞力学连接 [[continuum-mechanics]]（弹性/流变）、[[soft-matter]]（软材料）、[[fluid-mechanics]]（微流控）、[[biophysics]]。延伸阅读可参考 Phillips《Physical Biology of the Cell》、Boal《Mechanics of the Cell》、Mofrad & Kamm《Cytoskeletal Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[biophysics]]、[[continuum-mechanics]]（弹性/流变）。\n- 关联：[[soft-matter]]（软材料）、[[fluid-mechanics]]（微流控）。\n\n## 前置知识\n\n- [[continuum-mechanics]]、[[soft-matter]]、[[biophysics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "biophysics",
     "name": "生物物理",
     "weight": 5,
     "note": "细胞层次"
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 4,
     "note": "弹性与流变"
    },
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 3,
     "note": "软材料性质"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 2,
     "note": "细胞微流体"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "molecular-biophysics",
   "name": "分子生物物理",
   "nameEn": "Molecular Biophysics",
   "domain": "biophysics",
   "domainName": "生物物理",
   "color": "#00b894",
   "aliases": [
    "生物大分子物理"
   ],
   "tags": [
    "生物物理",
    "分子",
    "蛋白质"
   ],
   "keywords": [
    "蛋白质折叠",
    "DNA",
    "单分子",
    "分子马达"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 分子生物物理\n\n## 概述\n\n分子生物物理研究**生物大分子**（蛋白质、DNA/RNA）的结构、动力学与功能。核心问题包括：**蛋白质折叠**（氨基酸序列如何确定三维结构，能量漏斗图像）、**分子马达**（肌球蛋白、驱动蛋白）的力学-化学耦合、以及**单分子测量**（光镊、AFM、荧光共振能量转移 FRET）。统计力学与分子动力学模拟是主要理论工具。\n\n## 基本概念\n\n- **蛋白质 / DNA/RNA**：生物大分子。\n- **蛋白质折叠**：序列→三维结构。\n- **分子马达**：化学能→机械功。\n- **单分子测量**：光镊、AFM、FRET。\n- **能量漏斗**：折叠的自由能景观。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n蛋白质折叠自由能：\n\n$$ \\Delta G=\\Delta H-T\\Delta S $$\n\n（天然态是自由能极小；$\\Delta S$ 项（疏水效应）重要。）\n\n### 推导要点\n\n- **能量漏斗**：折叠的自由能景观呈漏斗形，天然态是全局极小（[[statistical-mechanics]]）。\n- **分子马达**：ATP 水解的化学能驱动构象变化产生机械步进（力学-化学耦合）。\n- **单分子测量**：光镊测力、FRET 测距离。\n\n### 重要定理与推论\n\n- **安芬森法则**：蛋白质的氨基酸序列决定其三维结构。\n- **能量漏斗**：折叠路径的鲁棒性。\n- **分子马达的步进**：驱动蛋白的 8 nm 步进。\n- **DNA 的弹性**：蠕虫链模型（WLC）。\n\n## 深化内容\n\n分子生物物理连接 [[biophysics]]、[[statistical-mechanics]]（折叠、构象）、[[molecular-physics]]（分子结构）、[[self-assembly]]（膜与组装）。延伸阅读可参考 Nelson《Biological Physics》、Dill《Molecular Driving Forces》、Phillips《Physical Biology of the Cell》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[biophysics]]、[[statistical-mechanics]]（折叠与构象统计）。\n- 关联：[[molecular-physics]]（分子结构）、[[self-assembly]]（膜与组装）。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[biophysics]]、[[molecular-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "biophysics",
     "name": "生物物理",
     "weight": 5,
     "note": "分子层次"
    },
    {
     "id": "self-assembly",
     "name": "自组装",
     "weight": 4,
     "note": "膜与组装"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "构象统计与折叠"
    },
    {
     "id": "molecular-physics",
     "name": "分子物理",
     "weight": 3,
     "note": "分子能级"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "neuroscience-physics",
   "name": "神经科学物理",
   "nameEn": "Physics of Neuroscience",
   "domain": "biophysics",
   "domainName": "生物物理",
   "color": "#00b894",
   "aliases": [
    "神经物理学"
   ],
   "tags": [
    "生物物理",
    "神经",
    "动力学"
   ],
   "keywords": [
    "动作电位",
    "霍奇金-赫胥黎模型",
    "神经网络"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 神经科学物理\n\n## 概述\n\n神经科学物理用**物理与数学方法**研究神经系统的信号产生与动力学。**动作电位**（神经脉冲）由**霍奇金-赫胥黎方程**描述——电压门控离子通道的电导变化驱动膜电位的快速上升与回落。神经网络模型（整合-发放神经元、吸引子网络）研究信息编码、记忆与振荡。神经科学物理连接 [[differential-equations]]（动力学）、[[information-theory]]（信息编码）与 [[statistical-mechanics]]（网络统计）。\n\n## 基本概念\n\n- **动作电位**：神经元膜电位的快速脉冲。\n- **离子通道**：电压门控的 Na/K 通道。\n- **霍奇金-赫胥黎模型**：动作电位的动力学方程。\n- **突触 / 神经网络**：神经元间的连接。\n- **神经编码**：脉冲序列编码信息。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n霍奇金-赫胥黎方程：\n\n$$ C_m\\frac{dV}{dt}=-\\sum_iI_i+I_{\\mathrm{ext}}=-\\bar g_{\\mathrm{Na}}m^3h(V-V_{\\mathrm{Na}})-\\bar g_{\\mathrm{K}}n^4(V-V_{\\mathrm{K}})-g_L(V-V_L)+I_{\\mathrm{ext}} $$\n\n### 推导要点\n\n- **动作电位的机制**：Na 通道快速开放（去极化）、K 通道延迟开放（复极化）。\n- **HH 方程**：用门控变量 $m,h,n$ 描述通道开闭概率，拟合实验数据（[[differential-equations]]）。\n- **整合-发放模型**：简化神经元模型（膜电位积分到阈值发放）。\n\n### 重要定理与推论\n\n- **动作电位的全或无**：阈值以上全幅发放。\n- **不应期**：发放后的短暂不敏感期。\n- **神经编码**：脉冲频率/时序编码信息（[[information-theory]]）。\n- **神经振荡与同步**：网络集体动力学（[[chaos-theory]]）。\n\n## 深化内容\n\n神经科学物理连接 [[biophysics]]、[[information-theory]]（编码）、[[differential-equations]]（动力学）、[[statistical-mechanics]]（网络统计）、[[chaos-theory]]（振荡同步）。延伸阅读可参考 Dayan & Abbott《Theoretical Neuroscience》、Koch《Biophysics of Computation》、Izhikevich《Dynamical Systems in Neuroscience》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[biophysics]]、[[information-theory]]（神经编码）、[[differential-equations]]（动力学）。\n- 关联：[[statistical-mechanics]]（网络统计）、[[chaos-theory]]（振荡与同步）。\n\n## 前置知识\n\n- [[differential-equations]]、[[biophysics]]、[[information-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "biophysics",
     "name": "生物物理",
     "weight": 5,
     "note": "神经系统层次"
    },
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 4,
     "note": "神经动力学方程"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 4,
     "note": "神经信息编码"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": "网络统计"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 2,
     "note": "神经振荡"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "canonical-transformations",
   "name": "正则变换",
   "nameEn": "Canonical Transformations",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "正则变换理论"
   ],
   "tags": [
    "力学",
    "相空间",
    "辛结构"
   ],
   "keywords": [
    "生成函数",
    "辛条件",
    "正则不变量"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 正则变换\n\n## 概述\n\n正则变换是相空间 $(q,p)\\to(Q,P)$ 中**保持哈密顿方程形式不变**的坐标变换，是哈密顿力学的核心工具。其数学本质是**保辛变换**（保持辛形式 $\\sum dq_i\\wedge dp_i$）。正则变换的价值在于：通过选择合适的变换，可以把难以求解的哈密顿系统化为可解系统（如循环坐标、作用-角变量），这正是[[hamilton-jacobi-theory]] 的策略。正则变换由**生成函数**系统描述。\n\n## 基本概念\n\n- **辛结构**：$\\omega=\\sum dq_i\\wedge dp_i$；正则变换保持 $\\omega$ 不变。\n- **生成函数**：四种类型 $F_1(q,Q,t)$、$F_2(q,P,t)$、$F_3(p,Q,t)$、$F_4(p,P,t)$。\n- **新哈密顿量**：$K=H+\\partial F/\\partial t$。\n- **正则不变量**：泊松括号、相空间体积（刘维尔定理）在正则变换下不变。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n第二类生成函数 $F_2(q,P,t)$ 给出的变换：\n\n$$ p_i=\\frac{\\partial F_2}{\\partial q_i},\\qquad Q_i=\\frac{\\partial F_2}{\\partial P_i},\\qquad K=H+\\frac{\\partial F_2}{\\partial t} $$\n\n正则变换的**辛条件**（直接判据）：\n\n$$ \\{Q_i,Q_j\\}=0,\\quad \\{P_i,P_j\\}=0,\\quad \\{Q_i,P_j\\}=\\delta_{ij} $$\n\n### 推导要点\n\n- **生成函数来源**：要求变换保持作用量的差为全微分 $\\sum p_idq_i-\\sum P_idQ_i+(K-H)dt=dF$，由此 $F$ 的各偏导给出变换关系。\n- **辛条件等价**：正则变换保持泊松括号不变 $\\{f,g\\}_{q,p}=\\{f,g\\}_{Q,P}$；对基本变量取括号即得辛条件。\n- **无穷小正则变换**：取 $F_2=q_iP_i+\\epsilon G(q,P,t)$，得 $\\delta q_i=\\epsilon\\frac{\\partial G}{\\partial p_i}$、$\\delta p_i=-\\epsilon\\frac{\\partial G}{\\partial q_i}$，$G$ 即生成函数。\n\n### 重要定理与推论\n\n- **对称性与守恒**：若无穷小正则变换由 $G$ 生成且使 $H$ 不变，则 $G$ 是运动积分（诺特定理的哈密顿表述）。\n- **刘维尔定理**：正则变换保持相空间体积元 $d^np\\,d^nq$。\n- **四类生成函数**：通过勒让德变换相互转换，可覆盖各种变换（如 $q\\to p$ 交换）。\n\n## 深化内容\n\n正则变换的现代视角是**辛几何**：相空间是辛流形，正则变换是辛同胚，无穷小辛变换对应哈密顿向量场。**作用-角变量**（[[hamilton-jacobi-theory]]）是完全可积系统的标准坐标。正则变换在量子力学中对应**幺正变换**（表象变换）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[hamiltonian-mechanics]]、[[poisson-brackets]]、[[hamilton-jacobi-theory]]。\n- 现代视角：辛几何（[[differential-geometry]]）、[[quantum-mechanics]]（幺正变换）。\n\n## 前置知识\n\n- [[hamiltonian-mechanics]]、[[poisson-brackets]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 5,
     "note": "目标是把系统变换到作用-角变量"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 5,
     "note": "正则变换是哈密顿力学的核心工具"
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 5,
     "note": "泊松括号在正则变换下不变"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 3,
     "note": "可积性判别"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "central-force-motion",
   "name": "有心力运动与开普勒问题",
   "nameEn": "Central Force Motion & Kepler Problem",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "开普勒问题",
    "二体问题"
   ],
   "tags": [
    "力学",
    "引力",
    "轨道"
   ],
   "keywords": [
    "有效势",
    "轨道方程",
    "比奈公式",
    "开普勒定律"
   ],
   "size": 114,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 有心力运动与开普勒问题\n\n## 概述\n\n有心力问题研究物体在**指向固定中心**的力作用下的运动，是经典力学的核心可解问题。角动量 $\\vec L=\\vec r\\times\\vec p$ 守恒使运动局限于平面，从而把二维问题化为径向单变量问题（有效势方法）。对平方反比引力（库仑力同理），轨道是**圆锥曲线**，导出**开普勒三定律**。开普勒问题连接天体力学（行星轨道）与原子物理（玻尔模型、氢原子的量子对应），并作为散射理论与广义相对论修正（水星近日点进动）的起点。\n\n## 基本概念\n\n- **有心力**：$\\vec F=f(r)\\hat r$，只依赖径向距离且指向中心。\n- **约化质量**：二体问题化为单粒子问题，$\\mu=m_1m_2/(m_1+m_2)$。\n- **有效势**：$V_{\\mathrm{eff}}(r)=V(r)+L^2/(2\\mu r^2)$，离心势项源于角动量守恒。\n- **轨道方程 / 比奈公式**：以 $u=1/r$ 为变量的一阶微分方程。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n径向能量方程（有效势形式）：\n\n$$ E=\\frac12\\mu\\dot r^2+\\underbrace{\\frac{L^2}{2\\mu r^2}+V(r)}_{V_{\\mathrm{eff}}(r)} $$\n\n**比奈公式**（轨道方程）：\n\n$$ \\frac{d^2u}{d\\theta^2}+u=-\\frac{\\mu}{L^2u^2}f\\big(\\tfrac1u\\big) $$\n\n平方反比引力 $V=-k/r$ 的轨道：\n\n$$ \\frac1r=\\frac{\\mu k}{L^2}\\big(1+e\\cos\\theta\\big),\\qquad e=\\sqrt{1+\\frac{2EL^2}{\\mu k^2}} $$\n\n### 推导要点\n\n- **化为径向问题**：角动量守恒 $\\dot\\theta=L/(\\mu r^2)$，代入能量表达式消去 $\\dot\\theta$ 得径向方程。\n- **比奈公式**：利用 $\\frac{d}{d\\theta}=\\frac{\\dot r}{u'}$ 的链式关系，把 $r$ 关于 $t$ 的方程改写为 $u(\\theta)$ 的方程。\n- **轨道方程**：把 $V=-k/r$（即 $f=-k/r^2$）代入比奈公式，解得 $u=C+A\\cos\\theta$，改写为标准圆锥曲线。\n\n### 重要定理与推论\n\n- **开普勒第一定律**：行星轨道为椭圆（太阳在焦点）。\n- **开普勒第二定律**：面积速度恒定 $\\frac{dA}{dt}=L/(2\\mu)$（角动量守恒的直接后果）。\n- **开普勒第三定律**：$T^2=\\frac{4\\pi^2}{G(M+m)}a^3$，$T^2\\propto a^3$。\n- **能量-轨道对应**：$E<0$ 椭圆、$E=0$ 抛物线、$E>0$ 双曲线。\n\n## 深化内容\n\n平方反比有心力的散射给出**卢瑟福散射公式**（$\\alpha$ 粒子实验，原子核的发现）。量子对应是**氢原子**（[[hydrogen-atom]]）：库仑势的定态薛定谔方程，能级 $E_n\\propto-1/n^2$ 由量子化\"轨道\"给出。广义相对论对牛顿引力的修正表现为水星近日点进动（[[general-relativity]]）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Marion & Thornton《Classical Dynamics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[conservation-laws]]（角动量/能量守恒）、[[newtonian-mechanics]]（万有引力）。\n- 量子对应：[[hydrogen-atom]] 是库仑势的量子力学问题，其能级对应经典轨道（玻尔模型）。\n- 散射：卢瑟福散射；修正：[[general-relativity]]（近日点进动）。\n\n## 上位替代\n\n- 强引力/高速情形由 [[general-relativity]] 修正（水星近日点进动、光线偏折）。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[calculus]]、[[differential-equations]]",
   "supersededBy": [
    {
     "id": "general-relativity",
     "name": "广义相对论"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 5,
     "note": "有心力下角动量守恒"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": "万有引力是牛顿力学的核心应用"
    },
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 3,
     "note": "分离变量解开普勒问题"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 3,
     "note": "经典对应"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 2,
     "note": "天体轨道"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 2,
     "note": "广义相对论修正轨道"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 2,
     "note": "氢原子是量子的开普勒问题"
    }
   ],
   "supersedeLinks": [
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 3,
     "note": "轨道修正"
    }
   ]
  },
  {
   "id": "chaos-theory",
   "name": "混沌理论",
   "nameEn": "Chaos Theory",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "非线性动力学",
    "确定性混沌"
   ],
   "tags": [
    "力学",
    "非线性",
    "动力学"
   ],
   "keywords": [
    "李雅普诺夫指数",
    "奇怪吸引子",
    "对初值敏感",
    "分岔"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 混沌理论\n\n## 概述\n\n混沌理论研究**确定性非线性系统**的长期行为：即使运动方程完全确定、不含随机项，初值的微小差异也会随时间**指数放大**，使长期预测成为不可能。这一\"对初值敏感依赖\"由**李雅普诺夫指数** $\\lambda>0$ 定量刻画。混沌系统在相空间中趋向**奇怪吸引子**（洛伦兹吸引子、罗斯勒吸引子），具有分形结构。混沌的发现打破了\"可积性=规整\"的经典图景，揭示了非线性与可积性的对立。\n\n## 基本概念\n\n- **对初值敏感依赖**：$|\\delta x(t)|\\sim|\\delta x(0)|e^{\\lambda t}$。\n- **李雅普诺夫指数**：$\\lambda=\\lim_{t\\to\\infty}\\frac1t\\ln\\frac{|\\delta x(t)|}{|\\delta x(0)|}$；$\\lambda>0$ 表示混沌。\n- **奇怪吸引子**：非整数维的吸引集。\n- **可积 / 近可积系统**：有足够多守恒量 / 弱扰动下的可积系统。\n- **分岔**：参数变化时相图拓扑结构的突变（倍周期分岔通向混沌）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**洛伦兹方程**（混沌的原型）：\n\n$$ \\dot x=\\sigma(y-x),\\quad \\dot y=x(\\rho-z)-y,\\quad \\dot z=xy-\\beta z $$\n\n对 $\\sigma=10,\\beta=8/3,\\rho=28$ 出现混沌。\n\n**李雅普诺夫指数**（一维映射）：\n\n$$ \\lambda=\\lim_{n\\to\\infty}\\frac1n\\sum_{k=0}^{n-1}\\ln|f'(x_k)| $$\n\n### 推导要点\n\n- **逻辑斯蒂映射**：$x_{n+1}=rx_n(1-x_n)$，$r$ 增大经历倍周期分岔，$r>r_\\infty\\approx3.57$ 进入混沌。\n- **李雅普诺夫指数的意义**：追踪两条邻近轨迹的分离速率，正指数表示信息以指数速率丢失。\n- **奇怪吸引子的分形性**：洛伦兹吸引子经无穷次拉伸-折叠形成，具有分数维数。\n\n### 重要定理与推论\n\n- **庞加莱截面**：把连续流化为映射（截面上的返回映射），是分析混沌的标准工具。\n- **KAM 定理**：近可积哈密顿系统的大部分不变环面在小扰动下保留，混沌只出现在共振区附近。\n- **费根鲍姆普适性**：倍周期分岔的收敛速率具有普适常数 $\\delta\\approx4.669$，与具体映射无关。\n- **混沌与可积性**：可积系统运动规整（环面），不可积系统可现混沌。\n\n## 深化内容\n\n混沌理论是**非线性科学**的核心：它与 [[turbulence]]（流体湍流）、天体轨道长期稳定性、化学反应、种群动力学、电路振荡等密切相关。**量子混沌**研究经典混沌系统的量子对应（能级统计、随机矩阵理论）。**混沌控制**（OGY 方法）利用混沌对微扰的敏感性实现稳定化。延伸阅读可参考 Strogatz《Nonlinear Dynamics and Chaos》、Ott《Chaos in Dynamical Systems》、Schuster《Deterministic Chaos》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[differential-equations]]（非线性动力学）、[[turbulence]]（流体混沌）。\n- 相关：[[hamiltonian-mechanics]]（可积性）、[[canonical-transformations]]（不变环面）、[[probability-theory]]（统计描述）。\n\n## 前置知识\n\n- [[differential-equations]]、[[hamiltonian-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 5,
     "note": "非线性常微分方程"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 4,
     "note": "流体湍流的动力学"
    },
    {
     "id": "canonical-transformations",
     "name": "正则变换",
     "weight": 3,
     "note": "可积性判别"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 3,
     "note": "湍流与混沌"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 3,
     "note": "可积与不可积系统"
    },
    {
     "id": "climate-physics",
     "name": "气候物理",
     "weight": 2,
     "note": "气候非线性"
    },
    {
     "id": "neuroscience-physics",
     "name": "神经科学物理",
     "weight": 2,
     "note": "神经振荡"
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 2,
     "note": ""
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "conservation-laws",
   "name": "守恒定律",
   "nameEn": "Conservation Laws",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "守恒量",
    "诺特定理"
   ],
   "tags": [
    "力学",
    "守恒",
    "对称性"
   ],
   "keywords": [
    "动量守恒",
    "角动量守恒",
    "能量守恒",
    "对称性",
    "诺特定理"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 守恒定律\n\n## 概述\n\n守恒定律断言某些物理量在系统演化过程中保持不变，是物理学的最高原理之一。经典力学的三大守恒律——**动量、角动量、能量守恒**——分别对应**空间平移、旋转、时间平移**的对称性，这一深刻联系由**诺特定理**（1918）统一表述：每一个连续对称性对应一个守恒量。守恒律是求解问题的第一工具（往往可避开运动方程直接积分），并贯穿相对论、量子力学与场论。\n\n## 基本概念\n\n- **守恒量**：随时间不变的物理量，$\\frac{dQ}{dt}=0$。\n- **对称性**：使作用量（或运动方程）不变的变换。\n- **连续对称 / 分立对称**：可连续参数化（平移、旋转）/ 不可（空间反演、时间反演）。\n- **诺特流 / 诺特荷**：对称性对应的守恒流 $j^\\mu$ 与守恒荷 $Q=\\int j^0 d^3x$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n三大守恒律与对应对称性：\n\n- **动量守恒**（空间平移不变）：$\\sum\\vec p_i=\\mathrm{const}$。\n- **角动量守恒**（旋转不变）：$\\vec L=\\sum\\vec r_i\\times\\vec p_i=\\mathrm{const}$。\n- **能量守恒**（时间平移不变）：$E=T+V=\\mathrm{const}$。\n\n**诺特定理**：作用量在 $\\delta q_i=\\varepsilon f_i(q,t)$ 下不变，则\n\n$$ Q=\\sum_i\\frac{\\partial L}{\\partial\\dot q_i}\\,f_i - \\Lambda $$\n\n守恒（$\\Lambda$ 与作用量的表面项相关）。\n\n### 推导要点\n\n- **循环坐标情形**：若 $L$ 不显含 $q_k$，则欧拉-拉格朗日方程给出 $\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q_k}=0$，即 $p_k$ 守恒。\n- **诺特定理一般推导**：设 $q_i\\to q_i+\\varepsilon f_i$ 使 $\\delta L=\\varepsilon\\frac{d\\Lambda}{dt}$，计算\n\n$$ \\delta L=\\sum_i\\Big(\\frac{\\partial L}{\\partial q_i}f_i+\\frac{\\partial L}{\\partial\\dot q_i}\\dot f_i\\Big)\\varepsilon $$\n\n用欧拉-拉格朗日方程把 $\\frac{\\partial L}{\\partial q_i}$ 换成 $\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q_i}$，整理得 $\\frac{d}{dt}\\big(\\sum_i\\frac{\\partial L}{\\partial\\dot q_i}f_i-\\Lambda\\big)=0$。\n- **牛顿视角**：第三定律使内力成对抵消，直接得到动量/角动量守恒（见 [[newtonian-mechanics]]）。\n\n### 重要定理与推论\n\n- **诺特定理**：连续对称性 ⟺ 守恒律，是[[group-theory]] 与物理联系的枢纽。\n- **对称性破缺**：系统状态可能不保持拉格朗日量的对称性（自发对称破缺，见 [[spontaneous-symmetry-breaking]]）。\n- **守恒量与可积性**：$n$ 自由度系统若有 $n$ 个独立对合守恒量则完全可积（刘维尔-阿诺德定理）。\n\n## 深化内容\n\n守恒律的现代意义远超经典力学：在**相对论**中能量与动量合并为四维矢量 $p^\\mu$（洛伦兹协变守恒）；在**量子力学**中守恒量对应与哈密顿量对易的算符，给出好量子数与选择定则（维格纳-埃卡特定理）；在**场论**中诺特定理给出连续性方程与守恒荷（电荷、弱荷、色荷）。规范对称性、拓扑荷等概念也源于对称性分析。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Hill《Symmetry and Conservation Laws》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[group-theory]]（对称性语言）、[[lagrangian-mechanics]]（诺特定理）、[[central-force-motion]]（开普勒问题的守恒律解）。\n- 推广：[[special-relativity]]（能量动量四矢量）、[[quantum-mechanics]]（守恒量对应量子数）、[[spontaneous-symmetry-breaking]]。\n- 基础：[[newtonian-mechanics]]。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[lagrangian-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 5,
     "note": "有心力问题大量使用守恒律"
    },
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 5,
     "note": "诺特定理在分析力学中自然呈现"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 4,
     "note": "诺特定理联系对称性与守恒"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": "牛顿定律蕴含守恒律"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "守恒量对应量子数"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 3,
     "note": "相对论下能量动量统一为四维矢量"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "hamilton-jacobi-theory",
   "name": "哈密顿-雅可比理论",
   "nameEn": "Hamilton-Jacobi Theory",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "HJ理论"
   ],
   "tags": [
    "力学",
    "方法",
    "作用量"
   ],
   "keywords": [
    "哈密顿-雅可比方程",
    "作用-角变量",
    "主函数"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 哈密顿-雅可比理论\n\n## 概述\n\n哈密顿-雅可比（HJ）理论寻找一个正则变换，使新哈密顿量恒为零，从而把动力学化为\"平凡\"问题。这归结为关于**主函数** $S$ 的一阶偏微分方程——哈密顿-雅可比方程。主函数 $S$ 就是经典作用量，因此 HJ 理论是经典力学与量子力学（[[path-integral]] 的相位、半经典近似）之间的直接桥梁。对可分离系统，HJ 方程可变量分离，给出**作用-角变量**，是求解可积系统与半经典量子化（玻尔-索末菲）的标准框架。\n\n## 基本概念\n\n- **主函数（哈密顿特征函数）** $S(q,P,t)$：使 $K=0$ 的正则变换生成函数。\n- **哈密顿-雅可比方程**：$H(q,\\partial S/\\partial q,t)+\\partial S/\\partial t=0$。\n- **作用变量** $J_i=\\frac1{2\\pi}\\oint p_i\\,dq_i$；**角变量** $\\theta_i$。\n- **可分离性**：$S$ 可写成各坐标函数之和。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**哈密顿-雅可比方程**：\n\n$$ H\\Big(q_i,\\frac{\\partial S}{\\partial q_i},t\\Big)+\\frac{\\partial S}{\\partial t}=0 $$\n\n分离变量（$H$ 不显含 $t$）：\n\n$$ S(q,t)=W(q)-Et,\\qquad H\\Big(q_i,\\frac{\\partial W}{\\partial q_i}\\Big)=E $$\n\n**作用-角变量**（周期运动）：\n\n$$ J_i=\\frac{1}{2\\pi}\\oint p_i\\,dq_i,\\qquad \\omega_i=\\frac{\\partial H}{\\partial J_i} $$\n\n### 推导要点\n\n- **HJ 方程的来源**：取第二类生成函数 $F_2=S(q,P,t)$ 并要求 $K=0$，由 $K=H+\\partial S/\\partial t=0$、$p_i=\\partial S/\\partial q_i$ 即得 HJ 方程。\n- **主函数即作用量**：沿真实路径 $dS=\\sum p_idq_i-Hdt=Ldt$，故 $S=\\int Ldt$。\n- **分离变量**：对可分离系统 $W=\\sum W_i(q_i)$，HJ 方程化为若干常微分方程，分离常数即守恒量。\n\n### 重要定理与推论\n\n- **运动方程平凡化**：在 $K=0$ 的坐标中，$Q,P$ 均为常数，动力学退化。\n- **玻尔-索末菲量子化**：$J=\\oint p\\,dq=nh$（半经典条件），是旧量子论与 WKB 的雏形。\n- **几何光学类比**：$S$ 是波的相位，HJ 方程是波动方程在短波极限（$|\\nabla S|^2=n^2$，程函方程）的近似。\n\n## 深化内容\n\nHJ 理论是量子力学的\"半经典门户\"：主函数 $S$ 作为**路径积分**的相位 $e^{iS/\\hbar}$（[[path-integral]]），在 $\\hbar\\to0$ 极限下回到经典。WKB 近似直接建立于 $S/\\hbar$ 的展开。作用-角变量是[[chaos-theory]] 中可积性（KAM 理论）的语言。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[canonical-transformations]]、[[hamiltonian-mechanics]]、[[central-force-motion]]（分离变量）。\n- 量子联系：[[path-integral]]（相位 $e^{iS/\\hbar}$）、[[quantum-mechanics]]（半经典极限）。\n\n## 前置知识\n\n- [[variational-calculus]]、[[partial-differential-equations]]、[[hamiltonian-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "canonical-transformations",
     "name": "正则变换",
     "weight": 5,
     "note": "找使新哈密顿量为零的变换"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 5,
     "note": "由正则变换推导出"
    },
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 4,
     "note": "经典作用量是路径积分的相位"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 3,
     "note": "分离变量解开普勒问题"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "半经典极限"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 3,
     "note": ""
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "hamiltonian-mechanics",
   "name": "哈密顿力学",
   "nameEn": "Hamiltonian Mechanics",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "哈密顿方程",
    "正则方程"
   ],
   "tags": [
    "力学",
    "相空间",
    "辛结构"
   ],
   "keywords": [
    "哈密顿量",
    "相空间",
    "正则方程",
    "泊松括号"
   ],
   "size": 134,
   "degree": 12,
   "pos": {
    "x": -15,
    "y": -10,
    "z": 0
   },
   "fixed": false,
   "body": "# 哈密顿力学\n\n## 概述\n\n哈密顿力学是经典力学的第三种（最对称的）表述：以广义坐标 $q_i$ 与**共轭动量** $p_i$ 为独立变量，用单一标量函数 **哈密顿量** $H(q,p,t)$ 生成动力学。系统的演化在 $2n$ 维**相空间**中进行，由一阶的**正则方程**描述。哈密顿形式因其\"坐标-动量对称\"的结构，成为**正则量子化**（把 $q,p$ 提升为算符）与**统计力学**（相空间测度）的出发点，也是现代动力系统与辛几何研究的对象。\n\n## 基本概念\n\n- **共轭动量**：$p_i=\\partial L/\\partial\\dot q_i$。\n- **哈密顿量**：$H(q,p,t)=\\sum_i p_i\\dot q_i-L$（经勒让德变换由 $L$ 得到）；不显含时间时等于总能量。\n- **相空间**：以 $(q_i,p_i)$ 为坐标的 $2n$ 维空间，系统状态即相空间中的点。\n- **泊松括号**：$\\{f,g\\}=\\sum_i\\big(\\frac{\\partial f}{\\partial q_i}\\frac{\\partial g}{\\partial p_i}-\\frac{\\partial f}{\\partial p_i}\\frac{\\partial g}{\\partial q_i}\\big)$。\n- **辛结构**：相空间上的反对称双线性形式 $\\omega=\\sum dq_i\\wedge dp_i$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**哈密顿正则方程**：\n\n$$ \\dot q_i=\\frac{\\partial H}{\\partial p_i},\\qquad \\dot p_i=-\\frac{\\partial H}{\\partial q_i} $$\n\n**泊松括号形式的运动方程**：\n\n$$ \\frac{df}{dt}=\\{f,H\\}+\\frac{\\partial f}{\\partial t} $$\n\n**刘维尔定理**：相空间体积在演化下不变（相流不可压缩）。\n\n### 推导要点\n\n- **勒让德变换**：由 $H=\\sum p_i\\dot q_i-L$ 取全微分 $dH=\\sum(\\dot q_i\\,dp_i-\\dot p_i\\,dq_i)-\\frac{\\partial L}{\\partial t}dt$，与 $dH=\\sum(\\frac{\\partial H}{\\partial p_i}dp_i+\\frac{\\partial H}{\\partial q_i}dq_i)+\\frac{\\partial H}{\\partial t}dt$ 比较系数即得正则方程。\n- **运动方程**：$\\dot f=\\sum(\\frac{\\partial f}{\\partial q_i}\\dot q_i+\\frac{\\partial f}{\\partial p_i}\\dot p_i)+\\frac{\\partial f}{\\partial t}$，代入正则方程即 $\\{f,H\\}+\\frac{\\partial f}{\\partial t}$。\n- **刘维尔定理**：相流的雅可比行列式满足 $d(\\det J)/dt=(\\det J)\\,\\mathrm{div}\\,\\dot{\\vec x}$，而哈密顿流的散度为零。\n\n### 重要定理与推论\n\n- **能量守恒**：$\\dot H=\\partial H/\\partial t$，$H$ 不显含时间时守恒。\n- **循环坐标**：$H$ 不含 $q_k$ 时 $p_k$ 守恒（与拉格朗日形式一致）。\n- **刘维尔定理**：相空间体积（测度）不变，是统计力学等概率假设的基础。\n- **正则量子化的桥梁**：$\\{q_i,p_j\\}=\\delta_{ij}$ 提升为 $[\\hat q_i,\\hat p_j]=i\\hbar\\delta_{ij}$。\n\n## 深化内容\n\n哈密顿力学的几何化是**辛几何**：相空间是辛流形，正则变换是辛同胚，泊松括号是辛结构的代数体现。**刘维尔-阿诺德定理**刻画完全可积系统（作用-角变量）。哈密顿形式是[[statistical-mechanics]]（刘维尔测度、系综）与[[chaos-theory]]（KAM 理论）的共同语言，并经**正则量子化**通向[[quantum-mechanics]]。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[lagrangian-mechanics]]（勒让德变换来源）、[[poisson-brackets]]、[[canonical-transformations]]、[[hamilton-jacobi-theory]]。\n- 量子化：[[quantum-mechanics]] 的正则量子化把泊松括号提升为对易子 $\\{\\cdot,\\cdot\\}\\to-i[\\cdot,\\cdot]/\\hbar$。\n- 统计：[[statistical-mechanics]] 的相空间体积与系综；[[chaos-theory]] 的相空间动力学。\n- 几何：[[tensor-calculus]] / [[differential-geometry]] 的辛几何。\n\n## 上位替代\n\n- 单粒子哈密顿力学是 [[quantum-mechanics]] 的经典极限；多粒子/场的量子化走向 [[quantum-field-theory]]。\n\n## 前置知识\n\n- [[lagrangian-mechanics]]、[[calculus]]、[[linear-algebra]]",
   "supersededBy": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "canonical-transformations",
     "name": "正则变换",
     "weight": 5,
     "note": "正则变换保持辛结构"
    },
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 5,
     "note": "哈密顿-雅可比方程"
    },
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 5,
     "note": "由拉格朗日形式经勒让德变换得到"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 5,
     "note": "三种经典表述互相等价"
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 5,
     "note": "泊松括号是哈密顿力学的代数语言"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "系综理论以相空间为基础"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 3,
     "note": ""
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 3,
     "note": "相空间结构"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 3,
     "note": "辛几何表述"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 2,
     "note": "相空间的辛结构与几何化"
    }
   ],
   "supersedeLinks": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "正则量子化的出发点"
    }
   ]
  },
  {
   "id": "lagrangian-mechanics",
   "name": "拉格朗日力学",
   "nameEn": "Lagrangian Mechanics",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "分析力学",
    "拉格朗日方程"
   ],
   "tags": [
    "力学",
    "约束",
    "广义坐标",
    "最小作用量"
   ],
   "keywords": [
    "拉格朗日量",
    "广义坐标",
    "约束",
    "最小作用量原理",
    "广义动量"
   ],
   "size": 90,
   "degree": 7,
   "pos": {
    "x": -15,
    "y": 10,
    "z": 0
   },
   "fixed": false,
   "body": "# 拉格朗日力学\n\n## 概述\n\n拉格朗日力学是经典力学的**分析形式**：以广义坐标描述系统，以拉格朗日量 $L=T-V$ 为核心，由**最小作用量原理**统一导出运动方程。它的优势在于：采用任意广义坐标自动满足约束（无需解约束反力）、对多自由度与复杂约束系统极其高效、且以标量 $L$ 取代矢量力，为对称性分析（诺特定理）与量子化提供了自然语言。拉格朗日力学与牛顿力学在物理上完全等价，却是通往哈密顿力学、量子场论的必经之路。\n\n## 基本概念\n\n- **广义坐标** $q_i$：一组足以确定系统位形的独立参数（数目 = 自由度）。\n- **广义速度** $\\dot q_i$；**拉格朗日量** $L(q,\\dot q,t)=T-V$。\n- **作用量**：$S=\\int_{t_1}^{t_2}L\\,dt$，沿路径的泛函。\n- **广义动量**：$p_i=\\partial L/\\partial\\dot q_i$。\n- **循环坐标**：$L$ 不显含的 $q_k$，对应广义动量守恒。\n- **完整约束 / 非完整约束**：可表为 $f(q,t)=0$ / 不可（需乘子或另法处理）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**最小作用量原理**（哈密顿原理）：真实运动使作用量取驻值 $\\delta S=0$。\n\n**欧拉-拉格朗日方程**：\n\n$$ \\frac{\\mathrm d}{\\mathrm dt}\\frac{\\partial L}{\\partial\\dot q_i}-\\frac{\\partial L}{\\partial q_i}=0 $$\n\n**广义动量与循环坐标**：\n\n$$ \\frac{\\partial L}{\\partial q_k}=0 \\;\\Rightarrow\\; p_k=\\frac{\\partial L}{\\partial\\dot q_k}=\\mathrm{const} $$\n\n### 推导要点\n\n- **由达朗贝尔原理到拉格朗日方程**：从牛顿第二定律 + 虚功原理（约束反力做虚功为零）出发，把 $\\vec F_i-\\dot{\\vec p}_i$ 投影到广义坐标上，经偏导恒等式 $\\frac{\\partial\\vec r_i}{\\partial q_j}=\\frac{\\partial\\dot{\\vec r}_i}{\\partial\\dot q_j}$、$\\frac{d}{dt}\\frac{\\partial\\vec r_i}{\\partial q_j}=\\frac{\\partial\\dot{\\vec r}_i}{\\partial q_j}$ 整理，即得拉格朗日方程。\n- **由变分原理**：$\\delta S=\\int\\big(\\frac{\\partial L}{\\partial q}\\delta q+\\frac{\\partial L}{\\partial\\dot q}\\delta\\dot q\\big)dt$，对第二项分部积分，用 $\\delta q$ 在端点为零，得欧拉-拉格朗日方程（见 [[variational-calculus]]）。\n- **规范自由度**：$L$ 可加时间全导数 $L'=L+\\frac{dF(q,t)}{dt}$ 而不改变运动方程。\n\n### 重要定理与推论\n\n- **诺特定理**：每个连续对称性对应守恒量（见 [[conservation-laws]]）——时间平移→能量、空间平移→动量、旋转→角动量。\n- **能量函数**：$h=\\sum_i\\dot q_i\\frac{\\partial L}{\\partial\\dot q_i}-L$，当 $L$ 不显含时间时守恒（常等于 $T+V$）。\n- **与牛顿力学的等价性**：取 $q_i$ 为直角坐标，$L=\\tfrac12m\\dot r^2-V$，拉格朗日方程即 $\\vec F=m\\vec a$。\n\n## 深化内容\n\n拉格朗日框架是**现代理论物理的通用起点**：相对论粒子的作用量、广义相对论的爱因斯坦-希尔伯特作用量、以及**量子场论的拉格朗日密度**都源于此。在量子力学中，最小作用量原理经**路径积分**（[[path-integral]]）推广——所有路径以 $e^{iS/\\hbar}$ 贡献。规范对称性、自发破缺等场论概念也在拉格朗日语言中表述。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Landau & Lifshitz《Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[newtonian-mechanics]]（等价形式）、[[hamiltonian-mechanics]]（勒让德变换得到）、[[variational-calculus]]（数学基础）。\n- 相关：[[conservation-laws]]（诺特定理）、[[rigid-body-mechanics]]。\n- 更远：[[quantum-field-theory]]（拉格朗日密度）、[[path-integral]]（作用量的量子推广）、[[general-relativity]]（测地线作用量）。\n\n## 上位替代\n\n- 对微观/高速系统，单粒子拉格朗日形式被 [[quantum-field-theory]] 的场论拉格朗日密度取代；经典作用量在量子力学中以 [[path-integral]] 推广。\n\n## 前置知识\n\n- [[variational-calculus]]、[[calculus]]、[[linear-algebra]]",
   "supersededBy": [
    {
     "id": "quantum-field-theory",
     "name": "量子场论"
    }
   ],
   "supersedes": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学"
    }
   ],
   "links": [
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 5,
     "note": "诺特定理从对称性推出守恒量"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 5,
     "note": "由拉格朗日形式经勒让德变换得到哈密顿形式"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 5,
     "note": "最小作用量原理是变分法的直接应用"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 3,
     "note": ""
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 5,
     "note": "拉格朗日力学与牛顿力学在物理上等价，是后者的一般化表述"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": "拉格朗日密度形式是量子场论的出发点"
    }
   ]
  },
  {
   "id": "newtonian-mechanics",
   "name": "牛顿力学",
   "nameEn": "Newtonian Mechanics",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "经典力学",
    "牛顿定律",
    "牛顿三定律"
   ],
   "tags": [
    "力学",
    "质点",
    "运动学",
    "动力学",
    "惯性系"
   ],
   "keywords": [
    "力",
    "加速度",
    "惯性",
    "动量",
    "能量",
    "角动量"
   ],
   "size": 166,
   "degree": 16,
   "pos": {
    "x": -30,
    "y": 0,
    "z": 0
   },
   "fixed": false,
   "body": "# 牛顿力学\n\n## 概述\n\n牛顿力学研究宏观、低速（远小于光速）物体的机械运动，以牛顿三大定律为核心，是经典物理学的基石。它建立在**绝对空间与绝对时间**的假定之上：存在一类特殊的**惯性参考系**，在其中不受力（或合外力为零）的物体保持静止或匀速直线运动。牛顿力学在 17 世纪由《自然哲学的数学原理》（1687）奠基，其理论框架——力、质量、动量、能量、角动量——至今仍是整个物理学的词汇表。\n\n## 基本概念\n\n- **质点**：忽略大小形状、只有质量与位置的理想模型。\n- **惯性系**：牛顿第一定律成立的参考系；相对惯性系做匀速直线运动的仍是惯性系。\n- **力 / 质量**：力是改变运动状态的原因；质量（惯性质量）度量抵抗加速的能力。\n- **动量**：$\\vec p=m\\vec v$；**角动量**：$\\vec L=\\vec r\\times\\vec p$。\n- **动能 / 势能**：$T=\\tfrac12mv^2$；保守力有势能 $V$，$E=T+V$ 为机械能。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**第一定律（惯性定律）**：存在惯性系，其中物体在无外力时保持静止或匀速直线运动。\n\n**第二定律（动力学方程）**：\n\n$$ \\vec F = \\frac{\\mathrm d\\vec p}{\\mathrm dt},\\qquad \\vec p=m\\vec v $$\n\n质量恒定时退化为 $\\vec F=m\\vec a=m\\ddot{\\vec r}$。\n\n**第三定律（作用-反作用）**：\n\n$$ \\vec F_{12}=-\\vec F_{21} $$\n\n**万有引力定律**：\n\n$$ \\vec F = -G\\frac{m_1m_2}{r^2}\\hat r $$\n\n### 推导要点\n\n- **动量守恒**：对质点系，内力成对抵消（第三定律），只有外力改变总动量 $\\frac{d}{dt}\\sum\\vec p_i=\\sum\\vec F_i^{\\mathrm{ext}}$；外力为零时总动量守恒。\n- **角动量定理**：$\\frac{d\\vec L}{dt}=\\vec r\\times\\vec F=\\vec\\tau$（力矩），中心力下 $\\vec L$ 守恒。\n- **动能定理**：$\\frac{d}{dt}(\\tfrac12mv^2)=\\vec F\\cdot\\vec v$，力做功等于动能增量；保守力下导出机械能守恒。\n\n### 重要定理与推论\n\n- **质心定理**：系统的质心运动如同全部质量集中于质心、受合外力作用：$M\\ddot{\\vec R}=\\vec F^{\\mathrm{ext}}$。\n- **伽利略相对性原理**：力学规律在所有惯性系中形式相同（伽利略变换下协变），是狭义相对论的先声。\n- **动量、角动量、机械能三大守恒**：分别源于空间平移、旋转、时间平移对称（见 [[conservation-laws]] 与诺特定理）。\n- **开普勒三定律**：平方反比引力下的轨道运动（见 [[central-force-motion]]）。\n\n## 深化内容\n\n牛顿力学的绝对时空观在 20 世纪被修正：高速时由 [[special-relativity]] 取代（$v\\ll c$ 是其极限），微观尺度由 [[quantum-mechanics]] 取代（大量子数下回到经典）。但作为\"力学思维\"的起点，牛顿力学的**决定论**框架、受力分析方法与守恒律观念仍是全部物理的基石，并直接推广为分析力学（[[lagrangian-mechanics]]、[[hamiltonian-mechanics]]）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、费曼《物理学讲义》第一卷。\n\n## 与其他知识的联系\n\n- 紧密相关：[[lagrangian-mechanics]] 与 [[hamiltonian-mechanics]] 是牛顿力学的两种等价形式化。\n- 相关：[[rigid-body-mechanics]]（质点系推广）、[[conservation-laws]]（由对称性导出）、[[vibration-theory]]（多自由度系统）。\n- 更远：[[fluid-mechanics]]（连续介质）、[[special-relativity]] / [[quantum-mechanics]]（上位替代）。\n\n## 上位替代\n\n- [[special-relativity]]：速度接近光速时绝对时空失效，牛顿力学是其低速极限（$v\\ll c$）。\n- [[quantum-mechanics]]：原子尺度由波函数与薛定谔方程描述，牛顿力学是大量子数极限下的近似。\n\n## 前置知识\n\n- [[calculus]]、[[vector-calculus]]、[[linear-algebra]]",
   "supersededBy": [
    {
     "id": "special-relativity",
     "name": "狭义相对论"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 5,
     "note": "牛顿第二定律即二阶常微分方程"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 5,
     "note": "哈密顿力学由牛顿力学经拉格朗日形式发展而来"
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 5,
     "note": "牛顿定律只在惯性系成立"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 4,
     "note": "微积分是运动学与动力学的数学语言"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 4,
     "note": "万有引力是牛顿力学的核心应用"
    },
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 4,
     "note": "牛顿第三定律蕴含动量守恒"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 4,
     "note": "刚体力学是牛顿力学对质点系的推广"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 4,
     "note": "牛顿力学的矢量表述依赖矢量微积分"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": ""
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "equivalence-principle",
     "name": "等效原理",
     "weight": 3,
     "note": "惯性质量等于引力质量"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 3,
     "note": "波动是力学系统的集体运动"
    }
   ],
   "softLinks": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 3,
     "note": "连续介质力学是牛顿力学对流体系统的推广"
    }
   ],
   "supersedeLinks": [
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 5,
     "note": "拉格朗日力学是牛顿力学的等价重写，更便于处理约束"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 4,
     "note": "高速情形下由狭义相对论取代"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "微观尺度由量子力学取代"
    }
   ]
  },
  {
   "id": "non-inertial-frames",
   "name": "非惯性参考系",
   "nameEn": "Non-inertial Reference Frames",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "惯性力",
    "科里奥利力"
   ],
   "tags": [
    "力学",
    "参考系",
    "惯性力"
   ],
   "keywords": [
    "离心力",
    "科里奥利力",
    "惯性系",
    "转动参考系"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 非惯性参考系\n\n## 概述\n\n牛顿运动定律只在**惯性系**中成立。在加速或转动的**非惯性系**中，为维持 $F=ma$ 的形式，须引入**惯性力**（虚拟力）。匀速转动系中会出现**离心力**与**科里奥利力**。非惯性系分析在物理中至关重要：地球本身是转动系（傅科摆、信风、弹道偏转），而爱因斯坦正是从\"引力与惯性力不可区分\"（等效原理）出发建立了广义相对论。\n\n## 基本概念\n\n- **惯性系 / 非惯性系**：牛顿定律成立 / 不成立的参考系。\n- **惯性力（虚拟力）**：由参考系加速引起、无施力物体的力。\n- **离心力**：$-\\vec\\omega\\times(\\vec\\omega\\times\\vec r)$。\n- **科里奥利力**：$-2m\\,\\vec\\omega\\times\\vec v_{\\mathrm{rel}}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n转动系中的加速度关系：\n\n$$ \\vec a_{\\mathrm{abs}}=\\vec a_{\\mathrm{rel}}+\\vec\\alpha\\times\\vec r+\\vec\\omega\\times(\\vec\\omega\\times\\vec r)+2\\vec\\omega\\times\\vec v_{\\mathrm{rel}} $$\n\n相应惯性力：\n\n$$ \\vec F_{\\mathrm{inertial}}=-m\\vec\\alpha\\times\\vec r - m\\vec\\omega\\times(\\vec\\omega\\times\\vec r) - 2m\\vec\\omega\\times\\vec v_{\\mathrm{rel}} $$\n\n（三项依次为欧拉力、离心力、科里奥利力）。\n\n### 推导要点\n\n- **转动系求导关系**：对随转动系旋转的矢量 $\\vec A$，$\\frac{d\\vec A}{dt}\\big|_{\\text{空间}}=\\frac{d\\vec A}{dt}\\big|_{\\text{转动}}+\\vec\\omega\\times\\vec A$。\n- **加速度关系**：把 $\\vec r$ 的绝对速度写为 $\\vec v_{\\mathrm{abs}}=\\vec v_{\\mathrm{rel}}+\\vec\\omega\\times\\vec r$，再对时间求导（再次用求导关系），即得含离心与科里奥利项的加速度公式。\n- **科里奥利力的几何**：科里奥利加速度 $2\\vec\\omega\\times\\vec v$ 垂直于 $\\vec\\omega$ 与 $\\vec v$，只改变方向不改变速率。\n\n### 重要定理与推论\n\n- **傅科摆**：摆面以角速度 $\\omega\\sin\\varphi$ 旋转（$\\varphi$ 为纬度），是地球自转的直接证据。\n- **科里奥利效应**：北半球运动物体向右偏（信风、洋流、弹道偏转）。\n- **离心力与重力**：地球上的\"有效重力\" $g_{\\mathrm{eff}}=g-\\omega^2r\\cos^2\\varphi$ 略小于引力。\n- **等效原理的雏形**：均匀加速系与均匀引力场中的力学实验不可区分。\n\n## 深化内容\n\n非惯性系分析是通向**广义相对论**的关键一步：[[equivalence-principle]]（爱因斯坦电梯）正是\"引力与惯性力局部不可区分\"的陈述，由此引力被几何化为时空弯曲。旋转系与**旋转流体**（[[fluid-mechanics]]，如罗斯贝数、地球物理流体）密切相关。惯性力的引入也提醒\"参考系\"本身是物理描述的一部分。延伸阅读可参考朗道《力学》、Fowles《Analytical Mechanics》、Kleppner & Kolenkow《An Introduction to Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[newtonian-mechanics]]（惯性系定义）、[[rigid-body-mechanics]]（转动）。\n- 引力：[[equivalence-principle]] 建立在\"引力与惯性力不可区分\"之上，是 [[general-relativity]] 的出发点。\n- 应用：[[fluid-mechanics]]（旋转流体、地转）、[[atmospheric-physics]]（科里奥利效应）。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[vector-calculus]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 5,
     "note": "牛顿定律只在惯性系成立"
    },
    {
     "id": "equivalence-principle",
     "name": "等效原理",
     "weight": 4,
     "note": "引力与惯性力的等价"
    },
    {
     "id": "ocean-dynamics",
     "name": "海洋动力学",
     "weight": 3,
     "note": "科里奥利力主导"
    },
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 2,
     "note": "科里奥利效应"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 2,
     "note": "旋转流体"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 2,
     "note": ""
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 2,
     "note": "惯性系的相对论定义"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "poisson-brackets",
   "name": "泊松括号",
   "nameEn": "Poisson Brackets",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "泊松括号代数"
   ],
   "tags": [
    "力学",
    "代数结构",
    "对易子"
   ],
   "keywords": [
    "对易关系",
    "李代数",
    "辛结构",
    "正则量子化"
   ],
   "size": 94,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 泊松括号\n\n## 概述\n\n泊松括号是定义在相空间函数上的**二元代数运算**，是哈密顿力学的代数语言：动力学方程、守恒量判据、正则变换判据都用它统一表述。它赋予相空间函数一个**李代数**结构，使其成为辛几何的代数体现。泊松括号最重要的意义在于它提供了**正则量子化**的桥梁——把经典泊松括号 $\\{f,g\\}$ 提升为量子对易子 $[f,g]/i\\hbar$，从而由经典力学直接过渡到量子力学。\n\n## 基本概念\n\n- **泊松括号**：\n\n$$ \\{f,g\\}=\\sum_i\\Big(\\frac{\\partial f}{\\partial q_i}\\frac{\\partial g}{\\partial p_i}-\\frac{\\partial f}{\\partial p_i}\\frac{\\partial g}{\\partial q_i}\\Big) $$\n\n- **基本括号**：$\\{q_i,p_j\\}=\\delta_{ij}$，$\\{q_i,q_j\\}=\\{p_i,p_j\\}=0$。\n- **运动积分**：与 $H$ 泊松括号为零（且不显含时间）的函数。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n运动方程：\n\n$$ \\frac{df}{dt}=\\{f,H\\}+\\frac{\\partial f}{\\partial t} $$\n\n**性质**（使相空间函数构成李代数）：\n\n- 反对称：$\\{f,g\\}=-\\{g,f\\}$\n- 双线性：$\\{af+bg,h\\}=a\\{f,h\\}+b\\{g,h\\}$\n- 莱布尼茨律：$\\{fg,h\\}=f\\{g,h\\}+\\{f,h\\}g$\n- 雅可比恒等式：$\\{f,\\{g,h\\}\\}+\\{g,\\{h,f\\}\\}+\\{h,\\{f,g\\}\\}=0$\n\n### 推导要点\n\n- **运动方程**：把 $\\dot f=\\sum(\\frac{\\partial f}{\\partial q_i}\\dot q_i+\\frac{\\partial f}{\\partial p_i}\\dot p_i)$ 代入哈密顿正则方程，即得 $\\{f,H\\}+\\frac{\\partial f}{\\partial t}$。\n- **雅可比恒等式**：直接对定义展开，交叉项相互抵消（等价于相空间辛形式 $d\\omega=0$）。\n- **守恒判据**：$f$ 不显含时间且 $\\{f,H\\}=0$，则 $f$ 是运动积分。\n\n### 重要定理与推论\n\n- **泊松定理**：两个运动积分的泊松括号仍是运动积分（雅可比恒等式的推论）。\n- **角动量代数**：$\\{L_i,L_j\\}=\\epsilon_{ijk}L_k$，角动量分量构成 $SO(3)$ 李代数。\n- **正则量子化**：\n\n$$ \\{f,g\\}\\;\\longrightarrow\\;\\frac{1}{i\\hbar}[\\hat f,\\hat g] $$\n\n基本括号对应 $[\\hat q_i,\\hat p_j]=i\\hbar\\delta_{ij}$（海森堡对易关系）。\n\n## 深化内容\n\n泊松括号的几何本质是**辛流形**上的泊松结构；其退化情形（含约束系统）需引入**狄拉克括号**。正则量子化中泊松括号→对易子（或对反对称费米子情形→反对易子）是量子力学的核心对应原理之一（狄拉克量子化条件）。泊松括号也是无穷小生成元与对称性（诺特定理）的载体。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Dirac《Lectures on Quantum Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[hamiltonian-mechanics]]（运动方程）、[[canonical-transformations]]（正则不变性）、[[group-theory]]（李代数结构）。\n- 量子化：[[quantum-mechanics]]（正则量子化，见上）。\n- 角动量：[[angular-momentum-qm]]。\n\n## 上位替代\n\n- 量子理论中经典泊松括号被量子对易子取代（正则量子化），走向 [[quantum-mechanics]]。\n\n## 前置知识\n\n- [[hamiltonian-mechanics]]、[[calculus]]",
   "supersededBy": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "canonical-transformations",
     "name": "正则变换",
     "weight": 5,
     "note": "正则不变量的判据"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 5,
     "note": "泊松括号是哈密顿力学的代数语言"
    },
    {
     "id": "matrix-mechanics",
     "name": "矩阵力学",
     "weight": 4,
     "note": "对易子对应"
    },
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 3,
     "note": "角动量对易子"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 3,
     "note": "泊松括号构成李代数"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 2,
     "note": ""
    },
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "正则量子化把泊松括号提升为对易子"
    }
   ]
  },
  {
   "id": "rigid-body-mechanics",
   "name": "刚体力学",
   "nameEn": "Rigid Body Mechanics",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "刚体运动"
   ],
   "tags": [
    "力学",
    "刚体",
    "转动"
   ],
   "keywords": [
    "转动惯量",
    "惯量张量",
    "欧拉方程",
    "角速度",
    "欧拉角"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 刚体力学\n\n## 概述\n\n刚体力学研究**形状与相对位置不变的质点系**（刚体）的运动。刚体的任意运动可分解为**平动**（质心运动）与**转动**（绕质心的旋转）。转动由角速度 $\\vec\\omega$ 与**惯量张量** $\\hat I$ 描述；惯量张量是转动惯量在任意轴上的推广，其主轴系中的**欧拉动力学方程**是刚体转动的核心。刚体力学是理解陀螺、地球进动、卫星姿态的基础，其角动量结构也直接对应量子力学的角动量理论。\n\n## 基本概念\n\n- **刚体**：质点间距离不变的质点系，自由度 6（3 平动 + 3 转动）。\n- **质心**：$\\vec R=\\frac1M\\sum m_i\\vec r_i$。\n- **转动惯量**：$I=\\sum m_i r_{\\perp i}^2$；**惯量张量** $I_{jk}=\\sum m_i(\\delta_{jk}r_i^2-r_{ij}r_{ik})$。\n- **角速度** $\\vec\\omega$：刚体的瞬时转动轴与速率。\n- **欧拉角** $(\\phi,\\theta,\\psi)$：三维转动的参数化（另可用四元数）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n角动量与惯量张量：\n\n$$ \\vec L = \\hat I\\cdot\\vec\\omega $$\n\n**欧拉动力学方程**（刚体主轴系中）：\n\n$$ I_i\\dot\\omega_i + \\epsilon_{ijk}\\,\\omega_j\\,I_k\\omega_k = M_i $$\n\n**欧拉运动学方程**（角速度与欧拉角变化率的关系，自由刚体情形）。\n\n质心运动由 $M\\ddot{\\vec R}=\\vec F^{\\mathrm{ext}}$ 决定（[[newtonian-mechanics]] 的质心定理）。\n\n### 推导要点\n\n- **角动量**：$\\vec L=\\sum m_i\\vec r_i\\times(\\vec\\omega\\times\\vec r_i)=\\sum m_i(r_i^2\\vec\\omega-\\vec r_i(\\vec r_i\\cdot\\vec\\omega))$，分量形式即 $L_j=\\sum_k I_{jk}\\omega_k$。\n- **欧拉方程**：在主轴系中 $\\vec L=(I_1\\omega_1,I_2\\omega_2,I_3\\omega_3)$，由 $\\frac{d\\vec L}{dt}\\big|_{\\text{空间}}=\\frac{d\\vec L}{dt}\\big|_{\\text{刚体}}+\\vec\\omega\\times\\vec L=\\vec M$ 展开即得。\n- **主轴化**：惯量张量是实对称张量，可正交对角化（[[eigenvalue-problems]]），主轴是特征方向。\n\n### 重要定理与推论\n\n- **平行轴定理**：$I=I_{\\mathrm{cm}}+Md^2$（对平行轴）。\n- **对称刚体**：惯量椭球关于旋转对称（$I_1=I_2$），自由运动是自转 + 进动的叠加。\n- **欧拉定理**：任意刚体运动可视为瞬时绕某轴的转动。\n- **陀螺进动**：受外力矩的对称陀螺，其自转轴绕竖直轴缓慢进动。\n\n## 深化内容\n\n自由刚体的运动（欧拉-潘索运动）展示**进动、章动**；对称陀螺、重陀螺的动力学是经典力学的经典难题。现代姿态描述用**四元数**（避免欧拉角的奇异性）与**李群 SO(3)**。刚体角动量的泊松括号结构 $\\{L_i,L_j\\}=\\epsilon_{ijk}L_k$ 直接对应量子角动量的对易关系（[[angular-momentum-qm]]）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Featherstone《Rigid Body Dynamics Algorithms》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[newtonian-mechanics]]（质心运动）、[[tensor-calculus]]（惯量张量）、[[group-theory]]（欧拉角与 SO(3)）。\n- 相关：[[eigenvalue-problems]]（主轴化）、[[hamiltonian-mechanics]]。\n- 量子对应：[[angular-momentum-qm]]。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[vector-calculus]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": "刚体力学是牛顿力学对质点系的推广"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 4,
     "note": "惯量张量"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 3,
     "note": "欧拉角与旋转群"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 3,
     "note": ""
    },
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 2,
     "note": "经典角动量与量子角动量的对应"
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 2,
     "note": ""
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "vibration-theory",
   "name": "振动与简正模",
   "nameEn": "Vibration Theory and Normal Modes",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "小振动",
    "简正模式"
   ],
   "tags": [
    "力学",
    "振动",
    "简正模"
   ],
   "keywords": [
    "简正坐标",
    "谐振子",
    "耦合振子",
    "频谱",
    "本征值"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 振动与简正模\n\n## 概述\n\n振动理论研究系统在**平衡位置附近**的小幅周期运动，是经典力学通向波动、声学与量子谐振子的桥梁。核心思想是**线性化 + 简正坐标**：把耦合的多自由度振动通过坐标变换分解为若干个独立的**简正模**（normal mode），每个模以单一频率独立振动。简正模就是本征值问题，其思想贯穿晶格振动（声子）、分子振动、腔模与量子场论。\n\n## 基本概念\n\n- **平衡位置**：势能取极小的位形；小幅振动在其附近线性化。\n- **简正坐标**：使动能与势能同时对角化的坐标 $\\eta_i$。\n- **简正频率 / 简正模**：本征值 $\\omega_i$ 与对应本征矢量。\n- **阻尼 / 受迫**：耗散力 $-\\gamma\\dot q$ 与外力 $F(t)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n线性化后的运动方程（$N$ 自由度）：\n\n$$ M\\ddot{\\vec q} + K\\vec q = 0 $$\n\n本征值问题：\n\n$$ K\\vec Q = \\omega^2 M\\vec Q $$\n\n简正坐标下的解：\n\n$$ q_i(t)=\\sum_j c_j\\,Q_i^{(j)}\\cos(\\omega_j t+\\phi_j) $$\n\n受迫振动（简谐外力）稳态解与**共振**条件 $\\omega=\\omega_0$。\n\n### 推导要点\n\n- **线性化**：把势能展开到二阶 $V\\approx V_0+\\frac12\\sum K_{ij}q_iq_j$，动能 $T=\\frac12\\sum M_{ij}\\dot q_i\\dot q_j$，运动方程即 $M\\ddot q+Kq=0$。\n- **简正坐标**：作同时对角化（对 $M$ 归一化后 $K$ 对角化），本征矢量构成新坐标 $\\vec\\eta$，使方程解耦为 $\\ddot\\eta_i+\\omega_i^2\\eta_i=0$。\n- **阻尼与共振**：$\\ddot x+\\gamma\\dot x+\\omega_0^2x=F_0\\cos\\omega t$ 的稳态解振幅 $A=\\frac{F_0}{\\sqrt{(\\omega_0^2-\\omega^2)^2+\\gamma^2\\omega^2}}$，$\\omega\\to\\omega_0$ 时共振。\n\n### 重要定理与推论\n\n- **简正模的独立性**：能量可写成各模之和 $E=\\sum_i E_i$，各模互不交换能量。\n- **简并情形**：对称性导致简并频率（如正方对称的耦合振子）。\n- **本征值问题的普遍性**：简正模是[[eigenvalue-problems]] 的直接实例。\n- **连续极限**：$N\\to\\infty$ 时简正模过渡为波（[[wave-mechanics]]）。\n\n## 深化内容\n\n简正模思想是物理的普适工具：晶格振动量子化得到**声子**（[[phonons]]，二次量子化）；电磁场的模式量子化得到**光子**；量子谐振子的升降算符（[[quantum-harmonic-oscillator]]）即简正坐标的量子版本。简正模还用于分析分子红外/拉曼谱、结构振型与腔模。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、French《Vibrations and Waves》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[eigenvalue-problems]] 与 [[linear-algebra]]（简正模）、[[differential-equations]]（求解）。\n- 推广：连续极限 → [[wave-mechanics]]；晶格量子化 → [[phonons]]。\n- 量子对应：[[quantum-harmonic-oscillator]]；声学：[[acoustics]]。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[linear-algebra]]、[[differential-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 5,
     "note": "运动方程是线性常微分方程"
    },
    {
     "id": "acoustics",
     "name": "声学",
     "weight": 4,
     "note": "声振动"
    },
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 4,
     "note": "简正模即本征值问题"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 4,
     "note": "矩阵对角化求简正坐标"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "phonons",
     "name": "声子",
     "weight": 4,
     "note": "晶格振动量子化为声子"
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 4,
     "note": "量子谐振子"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 4,
     "note": "连续极限给出波动方程"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "wave-mechanics",
   "name": "波动与波动方程",
   "nameEn": "Waves and Wave Equations",
   "domain": "classic-mechanics",
   "domainName": "经典力学",
   "color": "#e74c3c",
   "aliases": [
    "机械波",
    "波动"
   ],
   "tags": [
    "力学",
    "波动",
    "传播"
   ],
   "keywords": [
    "波动方程",
    "色散",
    "干涉",
    "衍射",
    "相速度",
    "群速度"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 波动与波动方程\n\n## 概述\n\n波动是**扰动在空间中的传播**，由双曲型的波动方程描述。波是能量与动量传播的载体，叠加原理导致**干涉**与**衍射**。波分为机械波（需介质：声、水波、弦波）与电磁波（无介质）。波的概念贯通经典与量子：量子力学把波粒二象性表达为**物质波**（德布罗意），薛定谔方程即物质波的\"波动方程\"。波动与[[vibration-theory]] 一脉相承——连续介质极限下，简正模过渡为行波。\n\n## 基本概念\n\n- **波动方程**：$\\frac{\\partial^2u}{\\partial t^2}=c^2\\nabla^2u$，$c$ 为波速。\n- **平面波**：$u=A\\cos(\\vec k\\cdot\\vec r-\\omega t)$；波矢 $\\vec k$、角频率 $\\omega$、波长 $\\lambda=2\\pi/k$。\n- **色散关系**：$\\omega=\\omega(k)$；非色散（$\\omega=ck$）与色散介质。\n- **相速度 / 群速度**：$v_p=\\omega/k$、$v_g=d\\omega/dk$。\n- **横波 / 纵波**：位移垂直/平行于传播方向。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n波动方程：\n\n$$ \\frac{\\partial^2u}{\\partial t^2}=c^2\\nabla^2u $$\n\n平面波解与色散关系：\n\n$$ u(\\vec r,t)=Ae^{i(\\vec k\\cdot\\vec r-\\omega t)},\\qquad \\omega=\\omega(k) $$\n\n**波动方程的导出**（弦）：横向位移满足 $\\frac{\\partial^2y}{\\partial t^2}=\\frac{T}{\\mu}\\frac{\\partial^2y}{\\partial x^2}$，波速 $c=\\sqrt{T/\\mu}$。\n\n### 推导要点\n\n- **弦波动方程**：对弦元段用牛顿第二定律，张力竖直分量差 $\\approx T\\frac{\\partial^2y}{\\partial x^2}\\Delta x$，质量 $\\mu\\Delta x$，即得波动方程。\n- **通解（达朗贝尔解）**：$u(x,t)=f(x-ct)+g(x+ct)$，两列反向行波的叠加。\n- **色散关系来源**：把平面波代入方程，得 $\\omega$ 与 $k$ 的关系（如浅水波 $\\omega^2=gk\\tanh(kh)$）。\n\n### 重要定理与推论\n\n- **叠加原理**：线性波动方程解的线性组合仍是解（干涉、衍射的基础）。\n- **波的叠加与拍**：同向两列相近频率波叠加产生\"拍\" $\\omega_1-\\omega_2$。\n- **驻波**：两列反向行波叠加形成节点/腹点，是[[vibration-theory]] 简正模的连续版本。\n- **多普勒效应**：波源与观察者相对运动引起频率变化。\n- **波的能量**：能量密度与振幅平方成正比 $\\propto A^2\\omega^2$。\n\n## 深化内容\n\n波的观念贯穿物理：**声学**（[[acoustics]]）、**光学**（[[optics]]，惠更斯原理、干涉衍射）、**电磁波**（[[electromagnetic-waves]]，麦克斯韦方程的解）、以及**量子力学**的**物质波**（[[schrodinger-equation]]）。非线性波动引出孤子、激波等（[[fluid-mechanics]] 中的水波）。延伸阅读可参考 Crawford《Waves》、French《Vibrations and Waves》、朗道《连续介质力学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[acoustics]]（声波）、[[optics]]（光的波动性）、[[vibration-theory]]（简正模）。\n- 数学：[[partial-differential-equations]]、[[fourier-analysis]]（频谱）。\n- 横向联系：[[electromagnetic-waves]]（电磁波动）、[[schrodinger-equation]]（物质波方程）。\n\n## 前置知识\n\n- [[partial-differential-equations]]、[[fourier-analysis]]、[[vibration-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "acoustics",
     "name": "声学",
     "weight": 5,
     "note": "声波是机械波"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "波动方程是标准双曲型 PDE"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 4,
     "note": "电磁波是横波，无介质"
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": "波动用频谱描述"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 4,
     "note": "波动光学"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": "连续极限下的简正模"
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 3,
     "note": "弹性波"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 3,
     "note": "波动是力学系统的集体运动"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "物质波"
    },
    {
     "id": "gravitational-waves",
     "name": "引力波",
     "weight": 2,
     "note": "波动一般理论"
    }
   ],
   "softLinks": [
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 3,
     "note": "物质波"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "band-theory",
   "name": "能带理论",
   "nameEn": "Band Theory",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "能带",
    "布洛赫定理"
   ],
   "tags": [
    "凝聚态",
    "电子结构",
    "能带"
   ],
   "keywords": [
    "布洛赫定理",
    "费米面",
    "带隙"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 能带理论\n\n## 概述\n\n能带理论用**周期势**中的量子力学描述固体电子，是理解金属、半导体、绝缘体导电性的核心理论。**布洛赫定理**给出周期势中波函数的形式——布洛赫波（平面波调制周期函数），本征值 $E_n(\\vec k)$ 构成**能带**。能带间是否存在**带隙**及其大小决定固体的电学分类：金属（部分填充带）、半导体（满带+小带隙）、绝缘体（满带+大带隙）。**费米面**刻画金属电子的动量空间边界，是输运与磁性的关键对象。\n\n## 基本概念\n\n- **布洛赫波**：$\\psi_{\\vec k}=e^{i\\vec k\\cdot\\vec r}u_{\\vec k}(\\vec r)$。\n- **布里渊区**：倒格子的原胞（$\\vec k$ 空间）。\n- **能带 / 带隙**：$E_n(\\vec k)$、$E_g$。\n- **费米面 / 费米能**：$E_F$ 处的 $\\vec k$ 空间等能面。\n- **有效质量**：$m^*=\\hbar^2/(\\partial^2E/\\partial k^2)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**布洛赫定理**：\n\n$$ \\psi_{\\vec k}(\\vec r)=e^{i\\vec k\\cdot\\vec r}u_{\\vec k}(\\vec r),\\qquad u_{\\vec k}(\\vec r+\\vec R)=u_{\\vec k}(\\vec r) $$\n\n自由电子近似与近自由电子近似：能隙 $E_g=2|V_G|$（在布里渊区边界由周期势打开）。\n\n**有效质量**：\n\n$$ m^*=\\hbar^2\\Big(\\frac{\\partial^2E}{\\partial k^2}\\Big)^{-1} $$\n\n### 推导要点\n\n- **布洛赫定理**：由平移对称性，$T_{\\vec R}\\psi=e^{i\\vec k\\cdot\\vec R}\\psi$，故波函数为布洛赫波。\n- **近自由电子**：在布里渊区边界，周期势混合简并的平面波，打开能隙 $E_g=2|V_G|$。\n- **紧束缚近似**：由原子轨道线性组合，能带宽度与交叠积分相关。\n\n### 重要定理与推论\n\n- **导体/绝缘体分类**：费米面是否存在、带隙大小决定导电性。\n- **金属、半导体、绝缘体**：费米面在能带内 / 满带+小带隙 / 满带+大带隙。\n- **有效质量理论**：带边电子可用有效质量描述（[[semiconductors]]）。\n- **能带拓扑**：能带的贝里曲率给出拓扑不变量（[[topological-materials]]）。\n\n## 深化内容\n\n能带理论是 [[semiconductors]]、[[topological-materials]]（陈数、$Z_2$ 指标）、[[crystallography]] 的基础。现代电子结构计算用密度泛函理论（DFT）。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Simon《The Oxford Solid State Basics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[condensed-matter-physics]]、[[semiconductors]]、[[crystallography]]（倒空间）。\n- 基础：[[quantum-mechanics]]（周期势）、[[eigenvalue-problems]]、[[group-theory]]（空间群表示）。\n- 前沿：[[topological-materials]]（能带拓扑不变量）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[crystallography]]、[[eigenvalue-problems]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 5,
     "note": "固体电子结构核心"
    },
    {
     "id": "semiconductors",
     "name": "半导体",
     "weight": 5,
     "note": "能带决定导电性"
    },
    {
     "id": "crystallography",
     "name": "晶体学",
     "weight": 4,
     "note": "倒格子与周期结构"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "周期性势"
    },
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 4,
     "note": "带拓扑"
    },
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 3,
     "note": "布洛赫本征值问题"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "berry-phase",
   "name": "贝里相位",
   "nameEn": "Berry Phase",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "几何相位",
    "贝里曲率"
   ],
   "tags": [
    "量子",
    "几何相位",
    "拓扑"
   ],
   "keywords": [
    "绝热演化",
    "贝里曲率",
    "陈数"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 贝里相位\n\n## 概述\n\n贝里相位（1984）指出：量子系统在参数空间中沿闭合路径**绝热演化**时，波函数除动力学相位外还获得一个**几何相位**，它只依赖路径的几何（不变换规范、不依赖演化快慢）。贝里相位对应参数空间上的**贝里联络/曲率**（一种规范场），其环路积分给出**拓扑不变量**（如陈数）。贝里相位统一了阿哈罗诺夫-玻姆效应、量子霍尔效应、拓扑绝缘体与分子几何相位，是现代量子理论的核心概念。\n\n## 基本概念\n\n- **贝里联络**：$\\vec A_n=i\\langle n|\\nabla_{\\vec R}n\\rangle$。\n- **贝里曲率**：$\\Omega_n=\\nabla_{\\vec R}\\times\\vec A_n$。\n- **贝里相位**：$\\gamma_n=\\oint\\vec A_n\\cdot d\\vec R$。\n- **陈数**：贝里曲率的布里渊区积分。\n- **绝热定理**：慢变参数下系统保持在瞬时本征态。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**贝里相位**：\n\n$$ \\gamma_n=i\\oint\\langle n|\\nabla_{\\vec R}n\\rangle\\cdot d\\vec R=\\int\\Omega_n\\,d\\vec S $$\n\n贝里曲率与陈数：\n\n$$ \\Omega_n=\\nabla_{\\vec R}\\times\\big(i\\langle n|\\nabla_{\\vec R}n\\rangle\\big),\\qquad C=\\frac1{2\\pi}\\sum_n\\int_{\\mathrm{BZ}}\\Omega_n d^2k $$\n\n### 推导要点\n\n- **绝热定理**：参数 $\\vec R(t)$ 缓慢变化，系统保持在瞬时本征态 $|n(\\vec R)\\rangle$，波函数为 $|\\psi(t)\\rangle=e^{-i\\int E_ndt}e^{i\\gamma_n}|n\\rangle$。\n- **几何相位**：把 $i\\langle n|\\partial_t n\\rangle$ 的环路积分改写为参数空间环路积分，得 $\\gamma_n$（与时间参数化无关）。\n- **规范结构**：$|n\\rangle\\to e^{i\\chi}|n\\rangle$ 时 $\\vec A_n\\to\\vec A_n-\\nabla\\chi$（规范变换），$\\gamma_n$ 规范不变（模 $2\\pi$）。\n\n### 重要定理与推论\n\n- **贝里相位是几何量**：只依赖路径，与演化快慢无关。\n- **AB 效应是贝里相位的特例**：矢势环路积分（[[aharonov-bohm-effect]]）。\n- **陈数拓扑不变量**：整数量子霍尔电导 $\\sigma_{xy}=Ce^2/h$（[[topological-materials]]）。\n- **绝热近似的修正**：贝里相位是绝热展开的一阶（动力学相 + 几何相）。\n\n## 深化内容\n\n贝里相位是 [[topological-materials]]（陈数、$Z_2$ 指标）、[[gauge-field-theory]]（联络与曲率的几何）与 [[quantum-computing]]（几何相位量子门）的共同基础。分子系统中的圆锥交叉（几何相位）也是其应用。延伸阅读可参考 Berry 原始论文、Sakurai《现代量子力学》、Xiao, Chang & Niu《Berry phase effects on electronic properties》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[topological-materials]]（量子霍尔、拓扑绝缘体）、[[aharonov-bohm-effect]]（原型）。\n- 基础：[[quantum-mechanics]]（绝热演化）、[[differential-geometry]]（联络与曲率）。\n- 应用：[[quantum-computing]]（几何相位量子计算）、分子光谱（几何相位）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[aharonov-bohm-effect]]、[[topological-materials]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 5,
     "note": "拓扑不变量来自贝里相位"
    },
    {
     "id": "aharonov-bohm-effect",
     "name": "阿哈罗诺夫-玻姆效应",
     "weight": 4,
     "note": "AB效应是贝里相位的特例"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "贝里相位是凝聚态物理的核心概念"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "绝热定理"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 2,
     "note": ""
    },
    {
     "id": "quantum-tunneling",
     "name": "量子隧穿",
     "weight": 2,
     "note": ""
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "bose-einstein-condensation",
   "name": "玻色-爱因斯坦凝聚",
   "nameEn": "Bose-Einstein Condensation",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "BEC",
    "玻色凝聚"
   ],
   "tags": [
    "凝聚态",
    "玻色子",
    "低温"
   ],
   "keywords": [
    "临界温度",
    "凝聚",
    "超流体"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 玻色-爱因斯坦凝聚\n\n## 概述\n\n玻色-爱因斯坦凝聚（BEC）是大量玻色子在低温下**宏观占据同一量子基态**的现象，是量子统计（[[quantum-statistics]]）最深刻的宏观量子效应。爱因斯坦 1925 年预言，1995 年在碱金属原子气体中首次实现（2001 诺奖）。BEC 展现宏观量子相干（干涉、涡旋），是超流体 $^4$He 与超导（库珀对凝聚）的物理原型，也是冷原子量子模拟与精密测量的平台。\n\n## 基本概念\n\n- **玻色子**：整数自旋，可占据同一态。\n- **临界温度** $T_c$：凝聚发生的温度。\n- **凝聚体**：宏观占据基态的粒子集合。\n- **序参量**：宏观波函数 $\\psi=\\sqrt{n}e^{i\\theta}$。\n- **超流体**：无黏流动（涡旋量子化）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n理想玻色气体的临界温度：\n\n$$ T_c=\\frac{2\\pi\\hbar^2}{mk_B}\\Big(\\frac{n}{\\zeta(3/2)}\\Big)^{2/3},\\qquad \\zeta(3/2)\\approx2.612 $$\n\n凝聚比例：\n\n$$ \\frac{N_0}{N}=1-\\Big(\\frac{T}{T_c}\\Big)^{3/2}\\quad(T<T_c) $$\n\n### 推导要点\n\n- **临界条件**：总粒子数 $N=\\sum_{\\vec k}1/(e^{\\beta\\varepsilon_{\\vec k}}-1)$，当 $\\mu\\to0$ 时激发态能容纳的粒子数有上限 $N_{\\mathrm{ex}}=V\\zeta(3/2)(mk_BT/2\\pi\\hbar^2)^{3/2}$；低于 $T_c$ 时多余粒子凝聚到基态。\n- **宏观占据**：$T<T_c$ 时基态占据数 $N_0\\sim O(N)$（宏观量级）。\n- **序参量**：凝聚体的宏观波函数（相位相干）。\n\n### 重要定理与推论\n\n- **玻色凝聚**：$T<T_c$ 时宏观占据基态。\n- **宏观量子相干**：凝聚体的相位相干（干涉、原子激光）。\n- **涡旋量子化**：超流的环流 $\\oint\\vec v\\cdot d\\vec l=(h/m)n$。\n- **与超导/超流的关系**：库珀对凝聚（[[superconductivity]]）、$^4$He 超流是 BEC 的类似物。\n\n## 深化内容\n\nBEC 是 [[condensed-matter-physics]]、[[quantum-statistics]] 的宏观量子现象；冷原子 BEC 用于**量子模拟**（光晶格中的玻色-哈伯德模型）、原子干涉仪与 [[quantum-computing]]（冷原子平台）。延伸阅读可参考 Pethick & Smith《Bose-Einstein Condensation in Dilute Gases》、Pathria《Statistical Mechanics》、Pitaevskii & Stringari《Bose-Einstein Condensation》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-statistics]]（理论）、[[condensed-matter-physics]]、[[superconductivity]]（凝聚类比）。\n- 应用：量子模拟、原子干涉仪、[[quantum-computing]]（冷原子平台）。\n\n## 前置知识\n\n- [[quantum-statistics]]、[[statistical-mechanics]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 5,
     "note": "玻色分布"
    },
    {
     "id": "ultracold-atoms",
     "name": "超冷原子",
     "weight": 5,
     "note": "玻色凝聚"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "宏观量子现象"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 3,
     "note": "库珀对凝聚类似"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "condensed-matter-physics",
   "name": "凝聚态物理",
   "nameEn": "Condensed Matter Physics",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "固体物理",
    "凝聚态"
   ],
   "tags": [
    "凝聚态",
    "多体",
    "材料"
   ],
   "keywords": [
    "多体问题",
    "对称性破缺",
    "准粒子",
    "相变"
   ],
   "size": 218,
   "degree": 20,
   "pos": {
    "x": -45,
    "y": 35,
    "z": 0
   },
   "fixed": false,
   "body": "# 凝聚态物理\n\n## 概述\n\n凝聚态物理研究**大量粒子（$10^{23}$）聚集**形成的固体与液体的性质，是物理学最大的分支。其核心思想是**涌现**：大量微观粒子的集体行为产生全新的宏观现象（超导、磁性、晶体序、拓扑物态），这些现象不能简单由单个粒子推断。研究主题包括电子结构（能带）、晶格振动（声子）、磁性、超导、量子相变与拓扑物态。方法上是量子多体理论（二次量子化、格林函数、平均场、密度泛函）与统计力学的结合。\n\n## 基本概念\n\n- **多体系统**：大量相互作用粒子的系统。\n- **元激发 / 准粒子**：集体运动的量子化（声子、磁振子、等离激元）。\n- **对称性破缺 / 序参量**：相变与有序相的刻画。\n- **费米面 / 能带**：电子结构的基本对象。\n- **拓扑不变量**：物态的拓扑分类。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n固体电子的能带结构（布洛赫定理，见 [[band-theory]]）：\n\n$$ \\psi_{\\vec k}(\\vec r)=e^{i\\vec k\\cdot\\vec r}u_{\\vec k}(\\vec r),\\qquad E_n(\\vec k) $$\n\n超导的 BCS 能隙（[[superconductivity]]）：\n\n$$ \\Delta\\approx2\\hbar\\omega_De^{-1/N(0)V} $$\n\n### 推导要点\n\n- **能带理论**：周期势中的布洛赫波，本征值形成能带。\n- **二次量子化**：多体系统用产生/湮灭算符描述（[[second-quantization]]）。\n- **平均场 / DFT**：把多体问题化为单粒子有效问题（哈特里-福克、科恩-沈密度泛函）。\n\n### 重要定理与推论\n\n- **布洛赫定理**：周期势中的波函数形式（[[band-theory]]）。\n- **声子 / 准粒子**：晶格振动的量子化（[[phonons]]）。\n- **费米液体理论**：低温金属电子的准粒子图像。\n- **对称性破缺与相变**：有序相由序参量刻画（[[phase-transitions]]）。\n\n## 深化内容\n\n现代凝聚态物理与**量子技术**深度融合：拓扑绝缘体（[[topological-materials]]）、超导量子比特（[[quantum-computing]]）、二维材料（石墨烯）。方法与 [[quantum-field-theory]]（场论格林函数）交叉。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Altland & Simons《Condensed Matter Field Theory》、Chaikin & Lubensky《Principles of Condensed Matter Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[band-theory]]、[[superconductivity]]、[[topological-materials]]、[[phonons]]、[[semiconductors]]、[[crystallography]]。\n- 基础：[[quantum-mechanics]]、[[quantum-statistics]]、[[statistical-mechanics]]、[[phase-transitions]]、[[second-quantization]]。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[statistical-mechanics]]、[[second-quantization]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 5,
     "note": "固体电子结构"
    },
    {
     "id": "crystallography",
     "name": "晶体学",
     "weight": 5,
     "note": "晶体结构"
    },
    {
     "id": "phonons",
     "name": "声子",
     "weight": 5,
     "note": "晶格振动"
    },
    {
     "id": "semiconductors",
     "name": "半导体",
     "weight": 5,
     "note": "应用"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 5,
     "note": "重要量子相"
    },
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 5,
     "note": "拓扑物态"
    },
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 4,
     "note": "贝里相位是凝聚态核心概念"
    },
    {
     "id": "bose-einstein-condensation",
     "name": "玻色-爱因斯坦凝聚",
     "weight": 4,
     "note": "宏观量子现象"
    },
    {
     "id": "ising-model",
     "name": "伊辛模型",
     "weight": 4,
     "note": "磁性模型"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 4,
     "note": "相变"
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 4,
     "note": "电子气体"
    },
    {
     "id": "second-quantization",
     "name": "二次量子化",
     "weight": 4,
     "note": "多体方法"
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 3,
     "note": ""
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 3,
     "note": "固体输运"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 2,
     "note": ""
    },
    {
     "id": "liquid-crystals",
     "name": "液晶",
     "weight": 2,
     "note": "取向序"
    }
   ],
   "softLinks": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "微观基础"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": "凝聚态场论"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 3,
     "note": "磁性"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "crystallography",
   "name": "晶体学",
   "nameEn": "Crystallography",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "晶体结构",
    "空间群"
   ],
   "tags": [
    "凝聚态",
    "晶体",
    "对称性"
   ],
   "keywords": [
    "布拉维格子",
    "空间群",
    "倒格子",
    "布拉格衍射"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 晶体学\n\n## 概述\n\n晶体学研究原子/分子**周期性排列**的晶体结构，是固体物理与材料科学的几何基础。晶体 = **布拉维格子** + **基元**，其对称性由**空间群**（230 种）完整分类。**倒格子**（动量空间的周期结构）与**布拉格条件**使 X 射线衍射成为测定晶体结构的标准工具。晶体学为 [[band-theory]]（能带）、[[phonons]]（声子）与拓扑物态提供周期结构背景。\n\n## 基本概念\n\n- **布拉维格子**：14 种周期点阵（7 晶系）。\n- **原胞 / 单胞**：最小重复单元 / 常规重复单元。\n- **空间群**：晶体对称操作群（230 种）。\n- **倒格子**：动量空间的周期结构。\n- **米勒指数** $(hkl)$：晶面标记。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**布拉格条件**（X 射线衍射）：\n\n$$ 2d\\sin\\theta=n\\lambda $$\n\n倒格子关系：\n\n$$ \\vec a_i\\cdot\\vec b_j=2\\pi\\delta_{ij},\\qquad \\vec b_1=2\\pi\\frac{\\vec a_2\\times\\vec a_3}{\\vec a_1\\cdot(\\vec a_2\\times\\vec a_3)} $$\n\n### 推导要点\n\n- **布拉格条件**：相邻晶面反射的光程差 $2d\\sin\\theta$ 为波长整数倍时相长干涉。\n- **倒格子**：对正格子做傅里叶变换，周期结构在动量空间对应倒格点。\n- **空间群分类**：平移（格子）+ 点群（旋转/反射）+ 螺旋轴/滑移面组合成 230 种空间群（[[group-theory]]）。\n\n### 重要定理与推论\n\n- **劳厄条件 / 布拉格条件**：衍射峰位置给出晶面间距。\n- **平移对称性**：周期结构决定能带与声子的 $k$ 空间周期（[[band-theory]]、[[phonons]]）。\n- **对称性与物理性质**：晶体的点群决定张量性质（光学、弹性、压电）。\n- **结构测定**：X 射线/中子/电子衍射测定晶体结构。\n\n## 深化内容\n\n晶体学是 [[band-theory]]、[[phonons]]、[[topological-materials]] 的结构基础；准晶（非周期但有序）与拓扑晶体学是前沿。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Glazer《The Structures of Crystals》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[group-theory]]（空间群）、[[condensed-matter-physics]]、[[band-theory]]/[[phonons]]（周期结构）。\n- 技术：X 射线衍射（[[electromagnetic-waves]]）。\n\n## 前置知识\n\n- [[group-theory]]、[[linear-algebra]]、[[condensed-matter-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 5,
     "note": "晶体是凝聚态结构基础"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 5,
     "note": "空间群对称性"
    },
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 4,
     "note": "周期性结构"
    },
    {
     "id": "phonons",
     "name": "声子",
     "weight": 3,
     "note": "晶格动力学"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 2,
     "note": "X射线衍射"
    },
    {
     "id": "topology",
     "name": "拓扑学",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "phonons",
   "name": "声子",
   "nameEn": "Phonons",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "晶格振动量子化"
   ],
   "tags": [
    "凝聚态",
    "振动",
    "准粒子"
   ],
   "keywords": [
    "声子",
    "色散关系",
    "德拜模型",
    "热容"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 声子\n\n## 概述\n\n声子是**晶格振动的量子化元激发**，是准粒子（玻色子）的典型例子。晶格简正模量子化后，每个模的能量为 $\\hbar\\omega_{\\vec k}(n+1/2)$，声子数 $n$ 即振动量子数。声子的色散关系 $\\omega(\\vec k)$ 由晶格动力学决定（声学支/光学支），**德拜模型**用线性色散近似给出低温热容 $C_V\\propto T^3$。声子是晶格热导的载体，也是超导 BCS 配对（[[superconductivity]]）的媒介，是凝聚态中\"准粒子\"观念的原型。\n\n## 基本概念\n\n- **声子**：晶格振动量子，能量 $\\hbar\\omega_{\\vec k}$。\n- **声学支 / 光学支**：长波（声速）/ 高频（原胞内相对振动）。\n- **色散关系** $\\omega(\\vec k)$：频率-波矢关系。\n- **德拜温度** $\\Theta_D=\\hbar\\omega_D/k_B$：声子谱的特征温度。\n- **德拜模型**：线性色散近似。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n晶格振动量子化：\n\n$$ E_{n\\vec k}=\\hbar\\omega_{\\vec k}\\Big(n+\\frac12\\Big) $$\n\n**德拜热容**（低温 $T\\ll\\Theta_D$）：\n\n$$ C_V=\\frac{12\\pi^4}{5}Nk_B\\Big(\\frac{T}{\\Theta_D}\\Big)^3 $$\n\n高温（杜隆-珀蒂）：$C_V=3Nk_B$。\n\n### 推导要点\n\n- **模式量子化**：把晶格位移按简正模展开，每个模是独立的谐振子（[[vibration-theory]]、[[quantum-harmonic-oscillator]]），产生/湮灭算符（[[second-quantization]]）。\n- **德拜近似**：用 $\\omega=vk$ 线性色散、截止频率 $\\omega_D$（态总数=3N）近似声学支。\n- **热容**：对玻色分布求和 $U=\\sum_{\\vec k}\\hbar\\omega/(e^{\\hbar\\omega/k_BT}-1)$，低温下 $C_V\\propto T^3$。\n\n### 重要定理与推论\n\n- **低温 $T^3$ 律**：德拜模型给出 $C_V\\propto T^3$（实验吻合）。\n- **高温杜隆-珀蒂**：$C_V=3Nk_B$（经典能量均分）。\n- **声子-电子耦合**：声子是超导 BCS 配对的媒介（[[superconductivity]]）。\n- **晶格热导**：声子输运热（[[heat-conduction]]）。\n\n## 深化内容\n\n声子是 [[condensed-matter-physics]] 准粒子图像的原型，与 [[second-quantization]]、[[heat-conduction]] 直接相关。声子色散的测量（中子散射、拉曼）是晶格动力学实验。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Dove《Introduction to Lattice Dynamics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-harmonic-oscillator]]（量子化）、[[vibration-theory]]（经典极限）、[[second-quantization]]、[[heat-conduction]]。\n- 应用：[[superconductivity]]（BCS）、[[condensed-matter-physics]]、[[crystallography]]。\n\n## 前置知识\n\n- [[vibration-theory]]、[[quantum-harmonic-oscillator]]、[[second-quantization]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 5,
     "note": "晶格动力学"
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 5,
     "note": "模式量子化"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 4,
     "note": "晶格热导"
    },
    {
     "id": "second-quantization",
     "name": "二次量子化",
     "weight": 4,
     "note": "产生湮灭算符"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 4,
     "note": "声子媒介的库珀配对"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": "经典晶格振动"
    },
    {
     "id": "crystallography",
     "name": "晶体学",
     "weight": 3,
     "note": "晶格动力学"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "semiconductors",
   "name": "半导体",
   "nameEn": "Semiconductors",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "半导体物理",
    "晶体管"
   ],
   "tags": [
    "凝聚态",
    "半导体",
    "器件"
   ],
   "keywords": [
    "带隙",
    "掺杂",
    "pn结",
    "载流子"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 半导体\n\n## 概述\n\n半导体是带隙适中（约 $0.1\\sim3\\,\\mathrm{eV}$）的晶体，介于金属与绝缘体之间，是现代电子学的物质基础。其导电性可由**掺杂**（施主/受主杂质）大幅调控，这是所有电子器件的关键。**p-n 结**的整流特性（二极管方程）是晶体管、集成电路的核心；光电器件（LED、激光二极管、太阳能电池）利用光与载流子的相互转换。半导体物理支撑了整个信息技术与光电子产业。\n\n## 基本概念\n\n- **带隙** $E_g$：价带顶与导带底的能量差。\n- **本征 / 掺杂半导体**：无杂质 / 施主（n 型）、受主（p 型）。\n- **载流子**：电子与空穴。\n- **费米能级**：化学势。\n- **p-n 结**：p 型与 n 型半导体的界面。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n载流子浓度（本征）：\n\n$$ n_i=\\sqrt{N_cN_v}\\,e^{-E_g/2k_BT} $$\n\n**质量作用定律**：$np=n_i^2$。\n\n**二极管方程**（p-n 结）：\n\n$$ I=I_s\\big(e^{eV/k_BT}-1\\big) $$\n\n### 推导要点\n\n- **载流子浓度**：导带电子 $n=N_ce^{-(E_c-E_F)/k_BT}$，本征时 $n=p=n_i$。\n- **p-n 结整流**：耗尽区建立内建势垒，正向偏压降低势垒、反向升高，得二极管方程。\n- **掺杂控制**：施主杂质在带隙内引入浅能级，控制 $n$ 或 $p$。\n\n### 重要定理与推论\n\n- **二极管整流**：p-n 结的单向导电性。\n- **晶体管原理**：场效应/双极晶体管的开关与放大。\n- **光生载流子与发光**：光伏效应（太阳能电池）与复合发光（LED、激光二极管）。\n- **量子器件**：量子阱、量子点（低维半导体）。\n\n## 深化内容\n\n半导体物理连接 [[band-theory]]、[[transport-theory]]（载流子输运、霍尔效应）与 [[optics]]（光电器件）。现代前沿包括二维材料（石墨烯）、宽禁带半导体（GaN、SiC）与量子器件。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Sze《Physics of Semiconductor Devices》、Kittel《固体物理导论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[band-theory]]（能带）、[[condensed-matter-physics]]、[[transport-theory]]（载流子输运）。\n- 光电子：[[optics]]、[[lasers]]、[[quantum-optics]]。\n\n## 前置知识\n\n- [[band-theory]]、[[quantum-statistics]]、[[transport-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 5,
     "note": "能带结构基础"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 5,
     "note": "学科背景"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 3,
     "note": "载流子输运"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 2,
     "note": "光电器件"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "superconductivity",
   "name": "超导电性",
   "nameEn": "Superconductivity",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "超导",
    "BCS理论"
   ],
   "tags": [
    "凝聚态",
    "超导",
    "量子相"
   ],
   "keywords": [
    "库珀对",
    "BCS理论",
    "迈斯纳效应",
    "约瑟夫森效应"
   ],
   "size": 138,
   "degree": 12,
   "pos": null,
   "fixed": false,
   "body": "# 超导电性\n\n## 概述\n\n超导是某些材料在临界温度 $T_c$ 以下呈现**零电阻**与**完全抗磁性**（迈斯纳效应）的宏观量子现象。BCS 理论（1957）给出微观机制：声子媒介的电子-电子吸引使电子配对成**库珀对**，库珀对作为玻色子凝聚，打开超导能隙。超导可用 $U(1)$ 规范对称性自发破缺描述（与希格斯机制同构）。**约瑟夫森效应**（超导结隧穿）是超导量子比特、SQUID 与精密测量的基础。\n\n## 基本概念\n\n- **零电阻 / 迈斯纳效应**：超导的两个基本特征。\n- **库珀对**：动量和自旋相反的电子对。\n- **超导能隙** $\\Delta$：激发的能量阈值。\n- **临界温度 / 临界磁场**：$T_c$、$H_c$。\n- **约瑟夫森效应**：超导结的隧穿电流。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**BCS 能隙方程**（$T=0$）：\n\n$$ \\Delta\\approx2\\hbar\\omega_De^{-1/N(0)V} $$\n\n**临界温度**：\n\n$$ k_BT_c\\approx1.13\\hbar\\omega_De^{-1/N(0)V} $$\n\n**伦敦方程**（迈斯纳效应）：\n\n$$ \\nabla^2\\vec B=\\frac{\\vec B}{\\lambda_L^2},\\qquad \\lambda_L=\\sqrt{\\frac{m}{\\mu_0n_se^2}} $$\n\n### 推导要点\n\n- **BCS 配对**：声子媒介的吸引力使费米面附近电子配对，变分波函数（BCS 基态）给出能隙方程。\n- **迈斯纳效应**：伦敦方程 $\\vec J=-\\frac{n_se^2}{m}\\vec A$ 结合安培定律得 $\\nabla^2\\vec B=\\vec B/\\lambda_L^2$，磁场指数衰减（完全抗磁）。\n- **约瑟夫森效应**：超导结两侧相位差驱动隧穿电流 $I=I_c\\sin\\delta$（[[quantum-tunneling]]）。\n\n### 重要定理与推论\n\n- **迈斯纳效应**：超导体完全排斥磁场（完全抗磁性）。\n- **磁通量子化**：超导环中磁通为 $h/2e$ 的整数倍（库珀对电荷 $2e$）。\n- **约瑟夫森效应**：直流（$I_c\\sin\\delta$）与交流（$\\omega=2eV/\\hbar$）约瑟夫森效应。\n- **BCS 普适比**：$2\\Delta(0)/k_BT_c\\approx3.53$（弱耦合）。\n\n## 深化内容\n\n超导是 [[spontaneous-symmetry-breaking]]（安德森-希格斯机制）的凝聚态实现。**高温超导**（铜氧化物，$T_c>77$ K）机制仍是前沿；**拓扑超导**（[[topological-materials]]）预言马约拉纳费米子。超导量子比特是 [[quantum-computing]] 的主流平台。延伸阅读可参考 Tinkham《Introduction to Superconductivity》、de Gennes《Superconductivity of Metals and Alloys》、Annett《Superconductivity, Superfluids and Condensates》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[condensed-matter-physics]]、[[phonons]]（BCS 机制）、[[spontaneous-symmetry-breaking]]（理论框架）。\n- 相关：[[bose-einstein-condensation]]（凝聚概念）、[[topological-materials]]（拓扑超导）、[[quantum-computing]]（超导量子比特）。\n\n## 前置知识\n\n- [[condensed-matter-physics]]、[[quantum-statistics]]、[[second-quantization]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 5,
     "note": "凝聚态重要量子相"
    },
    {
     "id": "phonons",
     "name": "声子",
     "weight": 4,
     "note": "声子媒介配对"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 4,
     "note": "规范对称性破缺"
    },
    {
     "id": "bose-einstein-condensation",
     "name": "玻色-爱因斯坦凝聚",
     "weight": 3,
     "note": "库珀对凝聚类似"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 3,
     "note": "玻色凝聚"
    },
    {
     "id": "quantum-tunneling",
     "name": "量子隧穿",
     "weight": 3,
     "note": "约瑟夫森效应"
    },
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 3,
     "note": "拓扑超导"
    },
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 2,
     "note": ""
    },
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 2,
     "note": ""
    },
    {
     "id": "nuclear-models",
     "name": "核模型",
     "weight": 2,
     "note": "对关联类比BCS"
    }
   ],
   "softLinks": [
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 3,
     "note": "迈斯纳效应"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "topological-materials",
   "name": "拓扑物态",
   "nameEn": "Topological Materials",
   "domain": "condensed-matter",
   "domainName": "凝聚态物理",
   "color": "#1abc9c",
   "aliases": [
    "拓扑绝缘体",
    "拓扑超导"
   ],
   "tags": [
    "凝聚态",
    "拓扑",
    "量子霍尔"
   ],
   "keywords": [
    "陈数",
    "表面态",
    "拓扑不变量"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 拓扑物态\n\n## 概述\n\n拓扑物态由波函数的**全局拓扑性质**（而非局域序参量）刻画，是凝聚态物理近几十年的重大进展。第一个例子是**整数量子霍尔效应**（TKNN 不变量/陈数）；**拓扑绝缘体**的体是绝缘体、表面有受拓扑保护的无能隙边缘态。拓扑不变量（陈数、$Z_2$ 指标）由**贝里相位**积分给出，对连续微扰稳定。拓扑物态还提供容错量子计算的平台（拓扑量子比特、马约拉纳费米子）。\n\n## 基本概念\n\n- **拓扑不变量**：陈数 $C$、$Z_2$ 指标、绕数。\n- **贝里相位 / 贝里曲率**：能带在动量空间的几何相位。\n- **边缘态 / 表面态**：体-边对应关系。\n- **量子霍尔电导**：$\\sigma_{xy}=Ce^2/h$（量子化）。\n- **马约拉纳费米子**：拓扑超导的零能模。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**TKNN 陈数**（整数量子霍尔）：\n\n$$ C=\\frac1{2\\pi}\\sum_n\\int_{\\mathrm{BZ}}\\Omega_n(\\vec k)\\,d^2k,\\qquad \\sigma_{xy}=\\frac{e^2}{h}C $$\n\n贝里曲率：\n\n$$ \\Omega_n(\\vec k)=\\nabla_{\\vec k}\\times\\vec A_n(\\vec k),\\qquad \\vec A_n=i\\langle u_{n\\vec k}|\\nabla_{\\vec k}u_{n\\vec k}\\rangle $$\n\n### 推导要点\n\n- **量子霍尔电导**：TKNN 用久保公式证明 $\\sigma_{xy}=(e^2/h)C$，$C$ 为整数（陈数）。\n- **贝里相位**：绝热演化在动量空间闭环上累积几何相位（[[berry-phase]]、[[aharonov-bohm-effect]]）。\n- **体-边对应**：拓扑不变量的非平凡值对应表面/边缘的无能隙态（bulk-boundary correspondence）。\n\n### 重要定理与推论\n\n- **量子化霍尔电导**：$\\sigma_{xy}$ 精确量子化（1985、1998 诺奖）。\n- **拓扑保护**：边缘态对杂质、无序稳定（背散射被拓扑禁戒）。\n- **$Z_2$ 拓扑绝缘体**：时间反演不变系统的拓扑分类。\n- **马约拉纳费米子**：拓扑超导的零能模，可用于拓扑量子计算。\n\n## 深化内容\n\n拓扑物态连接 [[berry-phase]]、[[topology]]（同伦/同调）与 [[band-theory]]；拓扑超导与 [[superconductivity]]、[[quantum-computing]]（拓扑量子比特）交叉。量子自旋霍尔效应、外尔半金属、高阶拓扑绝缘体是前沿。延伸阅读可参考 Bernevig《Topological Insulators and Topological Superconductors》、Nakahara《Geometry, Topology and Physics》、Asbóth《A Short Course on Topological Insulators》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[berry-phase]]（物理机制）、[[topology]]（数学）、[[band-theory]]（能带）。\n- 相关：[[superconductivity]]（拓扑超导）、[[quantum-computing]]（拓扑量子计算）、[[aharonov-bohm-effect]]（相位效应）。\n\n## 前置知识\n\n- [[band-theory]]、[[berry-phase]]、[[topology]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 5,
     "note": "贝里相位与陈数"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 5,
     "note": "凝聚态前沿"
    },
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 4,
     "note": "能带拓扑"
    },
    {
     "id": "topology",
     "name": "拓扑学",
     "weight": 4,
     "note": "数学基础"
    },
    {
     "id": "aharonov-bohm-effect",
     "name": "阿哈罗诺夫-玻姆效应",
     "weight": 3,
     "note": "拓扑相"
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 3,
     "note": "拓扑量子比特"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 3,
     "note": "拓扑超导与马约拉纳费米子"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "cosmology",
   "name": "宇宙学",
   "nameEn": "Cosmology",
   "domain": "cosmology",
   "domainName": "天体与宇宙学",
   "color": "#6c5ce7",
   "aliases": [
    "宇宙学",
    "宇宙演化"
   ],
   "tags": [
    "宇宙学",
    "宇宙",
    "膨胀"
   ],
   "keywords": [
    "弗里德曼方程",
    "宇宙微波背景",
    "暗物质",
    "暗能量"
   ],
   "size": 158,
   "degree": 14,
   "pos": null,
   "fixed": false,
   "body": "# 宇宙学\n\n## 概述\n\n宇宙学研究宇宙整体的**起源、演化与结构**。在**宇宙学原理**（均匀各向同性）下，时空度规为 FLRW 度规，动力学由**弗里德曼方程**描述。观测证据支持**热大爆炸模型**：宇宙膨胀（哈勃定律）、**宇宙微波背景辐射**（CMB，2.7 K 黑体谱）、原初核合成的元素丰度。宇宙的组成约为 5% 普通物质、27% **暗物质**、68% **暗能量**（驱动加速膨胀，2011 诺奖）。\n\n## 基本概念\n\n- **尺度因子** $a(t)$：宇宙的膨胀因子。\n- **哈勃参数**：$H=\\dot a/a$。\n- **宇宙微波背景（CMB）**：大爆炸的遗迹辐射。\n- **暗物质 / 暗能量**：引力/加速膨胀的未知组分。\n- **红移**：$1+z=a_0/a$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**弗里德曼方程**：\n\n$$ H^2=\\Big(\\frac{\\dot a}{a}\\Big)^2=\\frac{8\\pi G\\rho}{3}-\\frac{kc^2}{a^2}+\\frac{\\Lambda c^2}{3} $$\n\n哈勃定律：\n\n$$ v=H_0d $$\n\n### 推导要点\n\n- **弗里德曼方程**：把 FLRW 度规代入爱因斯坦场方程（[[einstein-field-equations]]），得到尺度因子的动力学。\n- **CMB**：宇宙早期高温等离子体的辐射，复合后自由传播（[[blackbody-radiation]] 的 2.7 K 黑体谱）。\n- **原初核合成**：大爆炸后约 3 分钟合成轻元素（[[nuclear-physics]]）。\n\n### 重要定理与推论\n\n- **哈勃膨胀**：宇宙在膨胀（哈勃定律）。\n- **CMB**：大爆炸的直接遗迹。\n- **原初核合成**：氦丰度预言（约 25%）。\n- **暗能量与加速膨胀**：宇宙加速膨胀（超新星、CMB 证据）。\n\n## 深化内容\n\n宇宙学连接 [[general-relativity]]（[[einstein-field-equations]]）、[[blackbody-radiation]]（CMB）、[[particle-physics]]（早期宇宙、暗物质）、[[nuclear-physics]]（原初核合成）、[[astrophysics]]（大尺度结构）。暴胀理论、暗物质本质、暗能量是前沿。延伸阅读可参考 Dodelson《Modern Cosmology》、Weinberg《Cosmology》、Liddle《An Introduction to Modern Cosmology》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[general-relativity]]/[[einstein-field-equations]]（框架）、[[blackbody-radiation]]（背景辐射）。\n- 交叉：[[particle-physics]]（早期宇宙）、[[black-holes]]、[[gravitational-waves]]（原初引力波）、[[nuclear-physics]]（原初核合成）。\n\n## 前置知识\n\n- [[general-relativity]]、[[einstein-field-equations]]、[[blackbody-radiation]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 5,
     "note": "弗里德曼方程"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "理论框架"
    },
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 4,
     "note": "大尺度结构与恒星"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 4,
     "note": "宇宙微波背景"
    },
    {
     "id": "galaxies",
     "name": "星系",
     "weight": 4,
     "note": "大尺度结构"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 3,
     "note": "原初核合成"
    },
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 3,
     "note": "早期宇宙粒子物理"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 3,
     "note": "早期宇宙物理"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 2,
     "note": "天体轨道"
    },
    {
     "id": "gravitational-waves",
     "name": "引力波",
     "weight": 2,
     "note": "原初引力波"
    },
    {
     "id": "quantum-gravity",
     "name": "量子引力",
     "weight": 2,
     "note": "宇宙早期"
    }
   ],
   "softLinks": [
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 2,
     "note": ""
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 2,
     "note": "恒星能量来源"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "boundary-value-problems",
   "name": "边值问题",
   "nameEn": "Boundary Value Problems",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "静电边值问题"
   ],
   "tags": [
    "电磁学",
    "方法",
    "边界条件"
   ],
   "keywords": [
    "镜像法",
    "分离变量",
    "唯一性定理"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 边值问题\n\n## 概述\n\n边值问题是在给定**边界条件**下求解场方程（拉普拉斯方程 $\\nabla^2\\phi=0$ 或泊松方程 $\\nabla^2\\phi=-\\rho/\\varepsilon_0$）的数学问题，是静电学与数学物理方法的核心内容。其理论基础是**唯一性定理**：给定边界条件（狄利克雷型给定 $\\phi$、诺伊曼型给定法向导数），解唯一。求解方法包括分离变量法、镜像法、格林函数法与数值方法，覆盖了从简单几何到复杂工程的广泛情形。\n\n## 基本概念\n\n- **狄利克雷条件**：边界上给定 $\\phi$。\n- **诺伊曼条件**：边界上给定 $\\partial\\phi/\\partial n$。\n- **拉普拉斯 / 泊松方程**：无源 / 有源区域。\n- **格林函数**：点源的场，满足 $\\nabla^2G=-\\delta$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**拉普拉斯方程**（无源区域）：\n\n$$ \\nabla^2\\phi=0 $$\n\n**泊松方程**（有源区域）：\n\n$$ \\nabla^2\\phi=-\\frac{\\rho}{\\varepsilon_0} $$\n\n**唯一性定理**：给定闭区域边界上的 $\\phi$（或 $\\partial\\phi/\\partial n$），泊松方程的解唯一。\n\n### 推导要点\n\n- **唯一性定理**：设 $\\phi_1,\\phi_2$ 是两个解，令 $U=\\phi_1-\\phi_2$，则 $\\nabla^2U=0$；由格林第一恒等式 $\\int(\\nabla U)^2d\\tau=\\oint U\\frac{\\partial U}{\\partial n}da=0$（边界上 $U=0$ 或 $\\partial U/\\partial n=0$），得 $U=\\text{const}$，即解唯一。\n- **镜像法**：用边界外的\"假想电荷\"取代导体边界，使边界条件（等势面）自动满足，从而把边值问题化为点电荷叠加。\n- **分离变量法**：把 $\\phi$ 写成各坐标函数之积，拉普拉斯方程化为常微分方程（本征值问题），解用 [[special-functions]] 展开。\n\n### 重要定理与推论\n\n- **唯一性定理**：保证了各种近似解的可靠性（只要满足方程+边界，就是唯一解）。\n- **镜像法的适用**：平面/球面/柱面导体（点电荷-导体面、导体球）。\n- **级数展开**：不同坐标系对应不同函数族——球坐标球谐函数、柱坐标贝塞尔函数。\n- **数值方法**：有限差分/有限元（松弛迭代、雅可比/高斯-赛德尔迭代）。\n\n## 深化内容\n\n边值问题的格林函数法（[[green-function]]）把非齐次方程解写为 $u=\\int G\\rho$；二维问题可用**保角映射**（[[complex-analysis]]）化复杂边界为简单边界。数值方法（有限元、矩量法）是工程电磁场的通用工具。边值问题也出现在热传导、扩散、量子定态（[[schrodinger-equation]]）等同类椭圆/抛物型方程。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Arfken《Mathematical Methods for Physicists》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electrostatics]]（物理背景）、[[partial-differential-equations]]/[[mathematical-physics-methods]]（数学）、[[separation-of-variables]]/[[green-function]]/[[special-functions]]（工具）。\n- 应用：导体与电容、[[waveguides-resonators]]、天线、扩散与热传导（同类方程）。\n\n## 前置知识\n\n- [[partial-differential-equations]]、[[electrostatics]]、[[mathematical-physics-methods]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 5,
     "note": "静电边值问题"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "拉普拉斯/泊松方程"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 4,
     "note": "格林函数法"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 4,
     "note": "主要求解方法"
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 4,
     "note": "边界条件确定模式"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 3,
     "note": "不同坐标系的函数族"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 2,
     "note": "二维保角映射"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "circuits",
   "name": "电路理论",
   "nameEn": "Circuit Theory",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "电路",
    "电磁振荡"
   ],
   "tags": [
    "电磁学",
    "电路",
    "振荡"
   ],
   "keywords": [
    "基尔霍夫定律",
    "RLC电路",
    "复阻抗",
    "谐振"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 电路理论\n\n## 概述\n\n电路理论把电磁场方程在**集总参数**近似下化为代数/常微分方程，是电子学、信号处理与实验物理的基本工具。核心是**基尔霍夫定律**（电流节点守恒、电压环路守恒）结合元件方程（欧姆定律、电容、电感）。交流稳态用**复阻抗**分析，$RLC$ 谐振电路给出自然频率与品质因数。电路理论是麦克斯韦方程在\"器件尺度远小于波长\"时的近似，传输线理论则把它推广到分布式系统。\n\n## 基本概念\n\n- **元件**：电阻 $R$（$V=IR$）、电容 $C$（$I=C\\,dV/dt$）、电感 $L$（$V=L\\,dI/dt$）。\n- **基尔霍夫电流定律（KCL）**：节点电流和为零。\n- **基尔霍夫电压定律（KVL）**：环路电压和为零。\n- **复阻抗**：$Z_R=R$、$Z_C=1/(i\\omega C)$、$Z_L=i\\omega L$。\n- **品质因数**：$Q=\\omega_0/\\Delta\\omega$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**基尔霍夫定律**：\n\n$$ \\sum_k I_k=0\\quad(\\text{KCL}),\\qquad \\sum_k V_k=0\\quad(\\text{KVL}) $$\n\n**RLC 串联电路**：\n\n$$ L\\frac{d^2Q}{dt^2}+R\\frac{dQ}{dt}+\\frac{Q}{C}=V(t) $$\n\n自然频率与品质因数：\n\n$$ \\omega_0=\\frac1{\\sqrt{LC}},\\qquad Q=\\frac1R\\sqrt{\\frac LC} $$\n\n### 推导要点\n\n- **KCL/KVL 的来源**：KCL 是电荷守恒（$\\nabla\\cdot\\vec J=-\\partial\\rho/\\partial t$）在节点上的体现；KVL 是静场无旋性 $\\oint\\vec E\\cdot d\\vec l=0$ 在回路上的体现。\n- **复阻抗法**：对正弦稳态 $V,I\\propto e^{i\\omega t}$，$d/dt\\to i\\omega$，微分方程化为代数方程，复数幅值比即阻抗。\n- **谐振条件**：$RLC$ 电路中 $Z_L+Z_C=0$ 即 $\\omega=\\omega_0$，电流幅值最大（串联谐振）。\n\n### 重要定理与推论\n\n- **戴维南 / 诺顿定理**：任意线性二端网络可等效为电压源+电阻 / 电流源+电阻。\n- **叠加原理**：线性电路的各独立源贡献可叠加。\n- **谐振与滤波**：$RLC$ 电路的频率选择性——低通、高通、带通滤波。\n- **阻抗匹配**：负载与源阻抗共轭匹配时功率传输最大。\n\n## 深化内容\n\n电路理论推广到**传输线**（当器件尺度与波长可比）：分布参数方程导出波动方程与特征阻抗。**有源电路**（放大器、振荡器）与**非线性电路**（整流、混频）是电子学核心。电路理论还与**信号处理**（滤波器设计）、[[quantum-information]]（超导量子比特的电路 QED）交叉。延伸阅读可参考 Horowitz & Hill《电子学》、Pozar《Microwave Engineering》、Feynman《物理学讲义》第二卷。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electromagnetic-induction]]（电感）、[[differential-equations]]（瞬态）、[[electromagnetic-waves]]（传输线）。\n- 应用：实验电子学、滤波器设计、[[superconductivity]]（超导电路）。\n\n## 前置知识\n\n- [[electrostatics]]、[[magnetostatics]]、[[differential-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 4,
     "note": "电路方程"
    },
    {
     "id": "electromagnetic-induction",
     "name": "电磁感应",
     "weight": 4,
     "note": "电感与互感"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 3,
     "note": "交流电路与传输线"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 3,
     "note": "电容"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 3,
     "note": "电感"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "electromagnetic-induction",
   "name": "电磁感应",
   "nameEn": "Electromagnetic Induction",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "法拉第定律",
    "感应电动势"
   ],
   "tags": [
    "电磁学",
    "感应",
    "时变场"
   ],
   "keywords": [
    "法拉第定律",
    "楞次定律",
    "互感",
    "自感"
   ],
   "size": 64,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 电磁感应\n\n## 概述\n\n电磁感应描述**时变磁通量**在回路中产生电动势的现象，由法拉第（1831）发现、楞次确定方向。其微分形式是麦克斯韦方程组中的**法拉第方程** $\\nabla\\times\\vec E=-\\partial\\vec B/\\partial t$——时变磁场产生有旋的**感生电场**。电磁感应是电与磁统一的直接体现，也是发电机、变压器、电动机、电感、涡流制动与电磁炉的物理基础，标志着电力时代的开端。\n\n## 基本概念\n\n- **磁通量**：$\\Phi_B=\\int\\vec B\\cdot d\\vec S$。\n- **电动势**：$\\mathcal E=\\oint\\vec E\\cdot d\\vec l$。\n- **感生电动势 / 动生电动势**：由时变磁场 / 导体运动引起。\n- **自感 / 互感**：$L=\\Phi/I$、$M=\\Phi_{12}/I_1$。\n- **感生电场**：非保守场，$\\nabla\\times\\vec E_{\\mathrm{ind}}\\neq0$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**法拉第定律**：\n\n$$ \\mathcal E=-\\frac{d\\Phi_B}{dt},\\qquad \\nabla\\times\\vec E=-\\frac{\\partial\\vec B}{\\partial t} $$\n\n**自感与互感电动势**：\n\n$$ \\mathcal E=-L\\frac{dI}{dt},\\qquad \\mathcal E_2=-M\\frac{dI_1}{dt} $$\n\n**电感储能**：\n\n$$ U=\\frac12 LI^2 $$\n\n### 推导要点\n\n- **法拉第定律的微分形式**：用斯托克斯定理把 $\\oint\\vec E\\cdot d\\vec l$ 化为面积分 $\\int(\\nabla\\times\\vec E)\\cdot d\\vec S$，与 $\\mathcal E=-\\frac{d}{dt}\\int\\vec B\\cdot d\\vec S$ 比较，得 $\\nabla\\times\\vec E=-\\partial\\vec B/\\partial t$。\n- **动生电动势**：导体棒在磁场中运动，洛伦兹力 $q\\vec v\\times\\vec B$ 驱动电荷分离，产生 $\\mathcal E=\\oint(\\vec v\\times\\vec B)\\cdot d\\vec l$。\n- **楞次定律**：感应电流方向反抗磁通变化（能量守恒的要求，否则可无限增能）。\n\n### 重要定理与推论\n\n- **楞次定律**：感应电流的磁效应反抗引起它的磁通变化。\n- **感生电场非保守**：$\\oint\\vec E\\cdot d\\vec l\\neq0$，与静电场本质不同。\n- **变压器原理**：互感使初级线圈的能量传到次级，匝数比决定变压比 $V_2/V_1=N_2/N_1$。\n- **涡流**：块状导体中的感应环流，引起焦耳热（电磁炉、涡流制动）。\n\n## 深化内容\n\n电磁感应是**麦克斯韦方程组**法拉第方程的内容；其反向（位移电流）由麦克斯韦补全，共同预言电磁波。自感/互感是 [[circuits]] 中 $RLC$ 电路、变压器的基础；超导中的**迈斯纳效应**与磁通量子化也源于感应。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、费曼《物理学讲义》第二卷。\n\n## 与其他知识的联系\n\n- 紧密相关：[[maxwell-equations]]（电磁统一）、[[circuits]]（变压器/发电机/电感）、[[lorentz-force]]（动生机制）。\n- 应用：电力工业、电磁炉、涡流制动、[[waveguides-resonators]]。\n\n## 上位替代\n\n- 完整描述归入 [[maxwell-equations]]。\n\n## 前置知识\n\n- [[magnetostatics]]、[[vector-calculus]]、[[lorentz-force]]",
   "supersededBy": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "circuits",
     "name": "电路理论",
     "weight": 4,
     "note": "变压器与发电机原理"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 4,
     "note": "时变磁场耦合电与磁"
    },
    {
     "id": "lorentz-force",
     "name": "洛伦兹力",
     "weight": 3,
     "note": "动生电动势的来源"
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "法拉第定律是麦克斯韦方程组的一环"
    }
   ]
  },
  {
   "id": "electromagnetic-media",
   "name": "介质中的电磁场",
   "nameEn": "Electromagnetic Fields in Media",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "电介质",
    "磁介质"
   ],
   "tags": [
    "电磁学",
    "介质",
    "极化"
   ],
   "keywords": [
    "极化强度",
    "磁化强度",
    "D场",
    "H场",
    "本构关系"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 介质中的电磁场\n\n## 概述\n\n介质中的电磁场把**束缚电荷与束缚电流**的响应归入宏观辅助场：极化强度 $\\vec P$（电偶极密度）与磁化强度 $\\vec M$（磁偶极密度），由此定义电位移 $\\vec D=\\varepsilon_0\\vec E+\\vec P$ 与磁场强度 $\\vec H=\\vec B/\\mu_0-\\vec M$。介质中的麦克斯韦方程组只用**自由**电荷/电流 $\\rho_f,\\vec J_f$。线性介质的本构关系 $\\vec D=\\varepsilon\\vec E$、$\\vec B=\\mu\\vec H$ 使介质效应归结为介电常数与磁导率，直接给出折射率与光速的介质修正。\n\n## 基本概念\n\n- **极化强度**：$\\vec P$，单位体积电偶极矩；束缚电荷 $\\rho_b=-\\nabla\\cdot\\vec P$、$\\sigma_b=\\vec P\\cdot\\hat n$。\n- **磁化强度**：$\\vec M$，单位体积磁偶极矩；束缚电流 $\\vec J_b=\\nabla\\times\\vec M$。\n- **电位移 / 磁场强度**：$\\vec D$、$\\vec H$。\n- **本构关系**：线性各向同性介质 $\\vec D=\\varepsilon\\vec E$、$\\vec B=\\mu\\vec H$；$\\varepsilon_r=\\varepsilon/\\varepsilon_0$、$\\mu_r=\\mu/\\mu_0$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n介质中的麦克斯韦方程组：\n\n$$ \\nabla\\cdot\\vec D=\\rho_f,\\qquad \\nabla\\cdot\\vec B=0 $$\n\n$$ \\nabla\\times\\vec E=-\\frac{\\partial\\vec B}{\\partial t},\\qquad \\nabla\\times\\vec H=\\vec J_f+\\frac{\\partial\\vec D}{\\partial t} $$\n\n边界条件（无面自由电荷/电流）：\n\n$$ D_{1\\perp}-D_{2\\perp}=\\sigma_f,\\quad B_{1\\perp}=B_{2\\perp},\\quad E_{1\\parallel}=E_{2\\parallel},\\quad H_{1\\parallel}-H_{2\\parallel}=\\vec K_f\\times\\hat n $$\n\n### 推导要点\n\n- **束缚电荷/电流**：把介质视为大量微小偶极的集合，$\\rho_b=-\\nabla\\cdot\\vec P$ 由偶极场的叠加得到；磁化电流 $\\vec J_b=\\nabla\\times\\vec M$ 同理。\n- **介质方程**：把 $\\vec E,\\vec B$ 的麦克斯韦方程按自由/束缚源拆分，束缚部分吸收进 $\\vec D,\\vec H$ 即得介质形式。\n- **边界条件**：对界面取高斯面/安培回路，令厚度趋于零得到法向/切向跳变。\n\n### 重要定理与推论\n\n- **折射率**：线性介质中光速 $v=1/\\sqrt{\\mu\\varepsilon}$，折射率 $n=\\sqrt{\\mu_r\\varepsilon_r}\\approx\\sqrt{\\varepsilon_r}$（非磁介质）。\n- **界面折射与反射**：法向 $\\vec D$ 连续、切向 $\\vec E$ 连续给出斯涅尔定律与菲涅尔公式。\n- **色散与损耗**：复介电常数 $\\varepsilon=\\varepsilon'+i\\varepsilon''$ 刻画色散（实部）与吸收（虚部）。\n- **铁电 / 铁磁**：$\\vec P,\\vec M$ 与 $\\vec E,\\vec B$ 非线性、有滞回，对应 [[condensed-matter-physics]] 的有序相。\n\n## 深化内容\n\n介质的微观响应由**克拉默斯-克朗尼希关系**（因果性约束实部虚部）联系；**色散理论**（洛伦兹振子模型）给出 $\\varepsilon(\\omega)$ 的频率依赖，是 [[optics]] 折射色散与 [[condensed-matter-physics]] 光吸收的基础。非线性介质给出倍频、光整流等非线性光学。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Born & Wolf《Principles of Optics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[maxwell-equations]]（介质形式）、[[electromagnetic-waves]]（传播/折射/色散）。\n- 应用：[[optics]]（折射率、菲涅尔公式）、[[condensed-matter-physics]]（铁电/铁磁）、光纤技术。\n\n## 前置知识\n\n- [[maxwell-equations]]、[[electrostatics]]、[[magnetostatics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "介质中的麦克斯韦方程组"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 4,
     "note": "介质中波的传播"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 3,
     "note": "折射与色散"
    },
    {
     "id": "wave-optics",
     "name": "波动光学",
     "weight": 3,
     "note": "折射偏振"
    },
    {
     "id": "circuits",
     "name": "电路理论",
     "weight": 2,
     "note": ""
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "electromagnetic-potentials",
   "name": "电磁势与规范",
   "nameEn": "Electromagnetic Potentials & Gauge",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "矢势",
    "标势",
    "规范变换"
   ],
   "tags": [
    "电磁学",
    "势",
    "规范"
   ],
   "keywords": [
    "矢势 A",
    "标势 phi",
    "洛伦兹规范",
    "库仑规范"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 电磁势与规范\n\n## 概述\n\n电磁场可用**标势** $\\phi$ 与**矢势** $\\vec A$ 描述，从而把麦克斯韦方程组（四个一阶方程）化为更简洁的势方程。势不是唯一的——**规范变换**不改变物理场 $\\vec E,\\vec B$。这一\"规范自由度\"看似是数学冗余，却有深刻物理意义：**阿哈罗诺夫-玻姆效应**证明势（的相位）本身可观测，而规范对称性正是现代规范场论（$U(1)$、杨-米尔斯）的原型。\n\n## 基本概念\n\n- **标势 / 矢势**：$\\phi$、$\\vec A$。\n- **规范变换**：$\\phi\\to\\phi-\\partial\\Lambda/\\partial t$、$\\vec A\\to\\vec A+\\nabla\\Lambda$。\n- **库仑规范**：$\\nabla\\cdot\\vec A=0$。\n- **洛伦兹规范**：$\\nabla\\cdot\\vec A+\\frac1{c^2}\\frac{\\partial\\phi}{\\partial t}=0$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n势与场的关系：\n\n$$ \\vec E=-\\nabla\\phi-\\frac{\\partial\\vec A}{\\partial t},\\qquad \\vec B=\\nabla\\times\\vec A $$\n\n洛伦兹规范下的达朗贝尔方程：\n\n$$ \\Big(\\nabla^2-\\frac1{c^2}\\frac{\\partial^2}{\\partial t^2}\\Big)\\phi=-\\frac{\\rho}{\\varepsilon_0},\\qquad \\Big(\\nabla^2-\\frac1{c^2}\\frac{\\partial^2}{\\partial t^2}\\Big)\\vec A=-\\mu_0\\vec J $$\n\n### 推导要点\n\n- **矢势的存在性**：由 $\\nabla\\cdot\\vec B=0$，可用旋度表示 $\\vec B=\\nabla\\times\\vec A$；由 $\\nabla\\times(\\vec E+\\partial\\vec A/\\partial t)=0$，可用梯度表示 $\\vec E+\\partial\\vec A/\\partial t=-\\nabla\\phi$。\n- **达朗贝尔方程**：把 $\\vec E,\\vec B$ 用势表示后代入麦克斯韦方程组，选取洛伦兹规范即得（$\\phi,\\vec A$ 解耦为两个达朗贝尔方程）。\n- **规范不变性**：$\\nabla\\times\\nabla\\Lambda=0$、$\\nabla(\\partial\\Lambda/\\partial t)-\\partial(\\nabla\\Lambda)/\\partial t=0$，故 $\\vec E,\\vec B$ 在规范变换下不变。\n\n### 重要定理与推论\n\n- **规范自由度**：势不唯一，但 $\\vec E,\\vec B$ 唯一（规范不变性）。\n- **库仑规范的物理**：标势即瞬时库仑势，矢势满足无源条件。\n- **洛伦兹规范的协变性**：适合相对论表述，四矢势 $A^\\mu=(\\phi/c,\\vec A)$。\n- **阿哈罗诺夫-玻姆效应**：矢势在 $\\vec B=0$ 区域仍影响量子相位（见 [[aharonov-bohm-effect]]）。\n\n## 深化内容\n\n规范对称性是现代理论物理的核心：电磁场是 $U(1)$ **规范场**（[[gauge-field-theory]]），规范变换推广为局域对称性，矢势即联络、电磁张量即曲率（纤维丛语言）。阿哈罗诺夫-玻姆效应与贝里相位（[[berry-phase]]）都源于势的几何意义。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[maxwell-equations]]、[[relativistic-electrodynamics]]（四矢势 $A^\\mu$）、[[magnetostatics]]/[[electrostatics]]。\n- 量子效应：[[aharonov-bohm-effect]]；规范理论：[[gauge-field-theory]]。\n\n## 前置知识\n\n- [[maxwell-equations]]、[[vector-calculus]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "aharonov-bohm-effect",
     "name": "阿哈罗诺夫-玻姆效应",
     "weight": 5,
     "note": "势的物理效应"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "势是方程组的简化表述"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 4,
     "note": "推迟势"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 4,
     "note": "标势"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 4,
     "note": "规范自由度的物理诠释"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 4,
     "note": "矢势"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 4,
     "note": "四矢势"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "electromagnetic-radiation",
   "name": "电磁辐射",
   "nameEn": "Electromagnetic Radiation",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "辐射",
    "偶极辐射"
   ],
   "tags": [
    "电磁学",
    "辐射",
    "能量"
   ],
   "keywords": [
    "推迟势",
    "偶极辐射",
    "坡印廷矢量",
    "辐射功率",
    "拉莫尔公式"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 电磁辐射\n\n## 概述\n\n电磁辐射是**加速电荷**产生的电磁波。源的辐射解由**推迟势**给出——观察者在 $t$ 时刻感受到的场来自 $t_r=t-\\mathcal R/c$ 时刻的源（信息以光速传播）。远场区辐射由**电偶极辐射**主导，功率由**拉莫尔公式**给出；更一般的源用**多极展开**（电偶极、磁偶极、电四极…）。辐射是天线、无线电、发光、轫致辐射与同步辐射的物理基础，量子化后对应光子发射（QED）。\n\n## 基本概念\n\n- **推迟时间**：$t_r=t-\\mathcal R/c$。\n- **推迟势**：$\\phi,\\vec A$ 由推迟时刻的源决定。\n- **辐射区（远场）**：$r\\gg\\lambda$，场以 $1/r$ 衰减、横波。\n- **电偶极矩**：$\\vec p=\\int\\vec r'\\rho(\\vec r')d\\tau'$；**辐射功率** $P$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**推迟势**：\n\n$$ \\phi(\\vec r,t)=\\frac1{4\\pi\\varepsilon_0}\\int\\frac{\\rho(\\vec r',t_r)}{\\mathcal R}d\\tau',\\qquad \\vec A(\\vec r,t)=\\frac{\\mu_0}{4\\pi}\\int\\frac{\\vec J(\\vec r',t_r)}{\\mathcal R}d\\tau' $$\n\n**电偶极辐射**（远场）：\n\n$$ \\vec E=\\frac{\\mu_0}{4\\pi}\\Big[\\frac{(\\hat r\\cdot\\ddot{\\vec p})\\hat r-\\ddot{\\vec p}}{r}\\Big]_{t_r},\\qquad \\vec B=\\frac1c\\hat r\\times\\vec E $$\n\n**拉莫尔公式**（辐射总功率）：\n\n$$ P=\\frac{\\mu_0q^2a^2}{6\\pi c}=\\frac{q^2a^2}{6\\pi\\varepsilon_0c^3} $$\n\n### 推导要点\n\n- **推迟势的来源**：洛伦兹规范下达朗贝尔方程 $\\Box\\phi=-\\rho/\\varepsilon_0$ 的推迟格林函数解 $G(t,\\vec r)=\\delta(t-\\mathcal R/c)/(4\\pi\\mathcal R)$。\n- **偶极辐射场**：远场近似下 $\\vec A\\approx\\frac{\\mu_0}{4\\pi r}\\dot{\\vec p}(t_r)$，由 $\\vec E=-\\partial\\vec A/\\partial t$（辐射区）、$\\vec B=\\nabla\\times\\vec A$ 取保留 $1/r$ 的项。\n- **拉莫尔公式**：由坡印廷矢量在球面上积分 $P=\\oint\\langle\\vec S\\rangle\\cdot d\\vec a$，代入偶极辐射场得到。\n\n### 重要定理与推论\n\n- **拉莫尔公式**：辐射功率正比于加速度平方 $P\\propto a^2$——只有加速电荷才辐射。\n- **辐射的角分布**（偶极）：$\\frac{dP}{d\\Omega}\\propto\\sin^2\\theta$（垂直偶极轴最强）。\n- **多极展开**：电四极、磁偶极辐射的功率标度更高阶（$1/c$ 的更高次），一般弱于电偶极。\n- **轫致辐射 / 同步辐射**：电子被库仑场偏转 / 在磁场中回旋加速时的辐射。\n\n## 深化内容\n\n辐射理论的应用包括**天线理论**（半波振子、方向图）、**散射**（瑞利/米氏散射、天空蓝色）、以及**原子自发辐射**的经典对应。相对论推广给出**李纳-维谢尔势**（任意运动点电荷的严格解）。量子化后，辐射对应**光子**的发射/吸收（[[qed]]、[[quantum-optics]]），并修正了黑体辐射（普朗克）与原子寿命。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[maxwell-equations]]、[[electromagnetic-waves]]、[[electromagnetic-potentials]]（推迟势）。\n- 数学：[[spherical-harmonics]]（多极展开）、[[multipole-expansion]]。\n- 量子化：[[qed]]（光子发射/吸收）、[[quantum-optics]]（光的量子统计）。\n\n## 前置知识\n\n- [[maxwell-equations]]、[[electromagnetic-potentials]]、[[electromagnetic-waves]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 5,
     "note": "辐射场的波动本质"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "辐射由时变源产生"
    },
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 4,
     "note": "推迟势"
    },
    {
     "id": "multipole-expansion",
     "name": "多极展开",
     "weight": 4,
     "note": "辐射多极"
    },
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 4,
     "note": "多极展开"
    },
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 2,
     "note": "观测辐射"
    },
    {
     "id": "interstellar-medium",
     "name": "星际介质",
     "weight": 2,
     "note": "观测谱线"
    },
    {
     "id": "plasma-oscillations",
     "name": "等离子体振荡",
     "weight": 2,
     "note": ""
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 2,
     "note": "量子化辐射"
    }
   ],
   "softLinks": [
    {
     "id": "lasers",
     "name": "激光",
     "weight": 2,
     "note": ""
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "electromagnetic-waves",
   "name": "电磁波",
   "nameEn": "Electromagnetic Waves",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "电磁辐射波",
    "波动光学"
   ],
   "tags": [
    "电磁学",
    "波动",
    "光"
   ],
   "keywords": [
    "平面波",
    "偏振",
    "色散",
    "波阻抗",
    "坡印廷矢量"
   ],
   "size": 198,
   "degree": 18,
   "pos": null,
   "fixed": false,
   "body": "# 电磁波\n\n## 概述\n\n电磁波是电磁场以波动形式在空间传播，由麦克斯韦方程组直接预言。真空中电磁波以光速 $c$ 传播，是**横波**（$\\vec E\\perp\\vec B\\perp\\vec k$）。赫兹 1887 年实验证实其存在，光被确认为特定频段的电磁波——由此光学并入电磁学。电磁波携带能量（坡印廷矢量）与动量（辐射压），其频谱从无线电波延伸到 $\\gamma$ 射线，构成现代通信、遥感、医学成像与光谱学的物理基础。\n\n## 基本概念\n\n- **平面波**：$\\vec E=\\vec E_0e^{i(\\vec k\\cdot\\vec r-\\omega t)}$，波矢 $\\vec k$、角频率 $\\omega$。\n- **偏振**：$\\vec E$ 的振动方向（线偏振、圆偏振、椭圆偏振）。\n- **波阻抗**：$Z_0=\\sqrt{\\mu_0/\\varepsilon_0}\\approx377\\,\\Omega$（真空），$\\vec E$ 与 $\\vec H$ 振幅之比。\n- **坡印廷矢量**：$\\vec S=\\frac1{\\mu_0}\\vec E\\times\\vec B$，能量流密度。\n- **色散**：介质中波速随频率变化 $\\omega=\\omega(k)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n真空中的平面波关系：\n\n$$ \\vec E=\\vec E_0e^{i(\\vec k\\cdot\\vec r-\\omega t)},\\qquad \\vec B=\\frac1c\\hat k\\times\\vec E,\\qquad k=\\frac{\\omega}{c} $$\n\n坡印廷矢量与能量密度：\n\n$$ \\vec S=\\frac1{\\mu_0}\\vec E\\times\\vec B,\\qquad u=\\frac12\\Big(\\varepsilon_0E^2+\\frac{B^2}{\\mu_0}\\Big) $$\n\n平均能流（简谐波）：$\\langle S\\rangle=\\frac12\\mathrm{Re}(\\vec E\\times\\vec H^*)$。\n\n### 推导要点\n\n- **波动方程的来源**：真空无源麦克斯韦方程组取旋度联立（见 [[maxwell-equations]]），得 $\\nabla^2\\vec E=\\mu_0\\varepsilon_0\\ddot{\\vec E}$。\n- **横波性**：由 $\\nabla\\cdot\\vec E=0$ 对平面波给出 $\\vec k\\cdot\\vec E_0=0$（纵场分量为零）；由法拉第定律得 $\\vec B=\\hat k\\times\\vec E/c$。\n- **坡印廷定理**：由 $\\nabla\\cdot(\\vec E\\times\\vec H)$ 展开并代入两个旋度方程，得 $\\frac{\\partial u}{\\partial t}+\\nabla\\cdot\\vec S=-\\vec J\\cdot\\vec E$（能量守恒）。\n\n### 重要定理与推论\n\n- **光的电磁本质**：麦克斯韦预言 $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ 与光速吻合。\n- **坡印廷定理**：电磁能量守恒——场能变化 = 流入通量 + 对电荷做功。\n- **辐射压**：电磁波携带动量 $\\vec g=\\vec S/c^2$，对表面产生压力。\n- **偏振态**：两正交线偏振以相位差叠加得到圆/椭圆偏振（波动光学基础）。\n\n## 深化内容\n\n电磁波在介质中的传播引出**折射、色散、吸收**（[[electromagnetic-media]]）；在边界与波导中形成受限模式（[[waveguides-resonators]]）；由加速电荷产生的是**辐射**（[[electromagnetic-radiation]]）。频谱分析用[[fourier-analysis]]。电磁波的相对论协变性（光速不变）是[[special-relativity]] 的出发点。量子化后电磁波即**光子**（[[qed]]）。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Born & Wolf《Principles of Optics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[maxwell-equations]]（来源）、[[optics]]（光的电磁本质）、[[electromagnetic-media]]。\n- 产生与传播：[[electromagnetic-radiation]]（辐射源）、[[waveguides-resonators]]（导波）。\n- 数学：[[complex-analysis]]、[[fourier-analysis]]（频谱与脉冲）。\n- 相对论：[[special-relativity]]（光速不变）。\n\n## 前置知识\n\n- [[maxwell-equations]]、[[vector-calculus]]、[[wave-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 5,
     "note": "波的产生"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "电磁波由麦克斯韦方程组预言"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 5,
     "note": "光是电磁波"
    },
    {
     "id": "wave-optics",
     "name": "波动光学",
     "weight": 5,
     "note": "光的波动本质"
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 5,
     "note": "受限电磁波"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 4,
     "note": "介质中的传播"
    },
    {
     "id": "plasma-oscillations",
     "name": "等离子体振荡",
     "weight": 4,
     "note": "等离子体中的波"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 4,
     "note": "光速不变"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 4,
     "note": "电磁波是横波，无介质"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 3,
     "note": "辐射场"
    },
    {
     "id": "circuits",
     "name": "电路理论",
     "weight": 3,
     "note": "交流电路与传输线"
    },
    {
     "id": "acoustics",
     "name": "声学",
     "weight": 2,
     "note": "多普勒效应类比"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 2,
     "note": "复振幅"
    },
    {
     "id": "crystallography",
     "name": "晶体学",
     "weight": 2,
     "note": "X射线衍射"
    },
    {
     "id": "geometric-optics",
     "name": "几何光学",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 3,
     "note": "频谱分析"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 3,
     "note": "等离子体中的波"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 2,
     "note": "贝塞尔函数用于柱坐标"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "electrostatics",
   "name": "静电学",
   "nameEn": "Electrostatics",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "静电场",
    "库仑定律"
   ],
   "tags": [
    "电磁学",
    "电场",
    "静电"
   ],
   "keywords": [
    "库仑定律",
    "高斯定律",
    "电势",
    "泊松方程"
   ],
   "size": 144,
   "degree": 13,
   "pos": null,
   "fixed": false,
   "body": "# 静电学\n\n## 概述\n\n静电学研究**静止电荷**产生的电场。其出发点是**库仑定律**（实验定律），等价表述为**高斯定律**。静电场是**无旋**的（$\\nabla\\times\\vec E=0$），故可引入**电势** $\\phi$，使电场表达为梯度 $\\vec E=-\\nabla\\phi$；电势满足**泊松方程**。静电学的核心是求解给定电荷分布与边界条件下的场，工具包括高斯定律（高对称）、镜像法、分离变量法与多极展开。静电学是麦克斯韦方程组在\"无时变\"情形的退化，也是格林函数法与边值问题的标准实例。\n\n## 基本概念\n\n- **电荷** $q$：电场之源，量子化为 $e=1.602\\times10^{-19}\\,\\mathrm C$。\n- **电场**：单位电荷受的力 $\\vec E=\\vec F/q$；**电通量** $\\Phi_E=\\int\\vec E\\cdot d\\vec S$。\n- **电势**：$\\vec E=-\\nabla\\phi$，$\\phi$ 差为移动单位电荷所做的功。\n- **电位移**（介质中）：$\\vec D=\\varepsilon_0\\vec E+\\vec P$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**库仑定律**：\n\n$$ \\vec F=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1q_2}{r^2}\\hat r,\\qquad \\vec E(\\vec r)=\\frac{1}{4\\pi\\varepsilon_0}\\int\\frac{\\rho(\\vec r')\\hat{\\mathcal R}}{\\mathcal R^2}d\\tau' $$\n\n**高斯定律**（微分与积分形式）：\n\n$$ \\nabla\\cdot\\vec E=\\frac{\\rho}{\\varepsilon_0},\\qquad \\oint\\vec E\\cdot d\\vec S=\\frac{Q_{\\mathrm{encl}}}{\\varepsilon_0} $$\n\n**电势与泊松方程**：\n\n$$ \\vec E=-\\nabla\\phi,\\qquad \\nabla^2\\phi=-\\frac{\\rho}{\\varepsilon_0} $$\n\n### 推导要点\n\n- **高斯定律 $\\Leftrightarrow$ 库仑定律**：对点电荷，包围它的闭曲面通量为 $q/\\varepsilon_0$（立体角 $4\\pi$）；由叠加原理推广到任意分布。微分形式由散度定理 $\\oint\\vec E\\cdot d\\vec S=\\int\\nabla\\cdot\\vec E\\,d\\tau$ 得到。\n- **泊松方程**：把 $\\vec E=-\\nabla\\phi$ 代入 $\\nabla\\cdot\\vec E=\\rho/\\varepsilon_0$ 即得。\n- **静电能**：把电荷逐个从无穷远搬来，$W=\\frac12\\sum q_i\\phi_i=\\frac{\\varepsilon_0}{2}\\int E^2d\\tau$（能量储存于场中）。\n\n### 重要定理与推论\n\n- **静电场的无旋性**：$\\nabla\\times\\vec E=0$，故 $\\oint\\vec E\\cdot d\\vec l=0$（保守场）。\n- **导体的性质**：静电平衡时导体内 $\\vec E=0$、表面是等势面、电荷只分布在表面。\n- **唯一性定理**：给定边界条件，泊松方程的解唯一（边值问题的理论保证）。\n- **静电能**：$W=\\frac12\\int\\rho\\phi\\,d\\tau$ 或 $\\frac{\\varepsilon_0}{2}\\int E^2d\\tau$。\n\n## 深化内容\n\n静电学是**格林函数法**与**边值问题**（[[boundary-value-problems]]）的标准范例：点电荷势 $G=1/(4\\pi\\varepsilon_0|\\vec r-\\vec r'|)$ 即拉普拉斯算子的格林函数。**多极展开**（[[multipole-expansion]]）把远处场按单极、偶极、四极展开。二维静电问题可用**保角映射**（[[complex-analysis]]）求解。静电与静磁的对偶（[[magnetostatics]]）以及相对论下的电-磁统一（[[special-relativity]]）是深入理解的关键。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、费曼《物理学讲义》第二卷。\n\n## 与其他知识的联系\n\n- 紧密相关：[[magnetostatics]]（对偶）、[[maxwell-equations]]（一般化）、[[boundary-value-problems]]、[[green-function]]。\n- 数学：[[vector-calculus]]、[[multipole-expansion]]、[[complex-analysis]]。\n\n## 上位替代\n\n- 随时间变化的电场由完整 [[maxwell-equations]] 描述（静电是其 $\\partial/\\partial t=0$ 的特例）。\n\n## 前置知识\n\n- [[vector-calculus]]、[[calculus]]",
   "supersededBy": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 5,
     "note": "泊松/拉普拉斯方程求解"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 5,
     "note": "静电与静磁的对偶"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 5,
     "note": "高斯定理与梯度"
    },
    {
     "id": "debye-screening",
     "name": "德拜屏蔽",
     "weight": 4,
     "note": "屏蔽势"
    },
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 4,
     "note": "标势"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 4,
     "note": "点源格林函数"
    },
    {
     "id": "lorentz-force",
     "name": "洛伦兹力",
     "weight": 4,
     "note": "电场力部分"
    },
    {
     "id": "multipole-expansion",
     "name": "多极展开",
     "weight": 4,
     "note": "静电势的多极展开"
    },
    {
     "id": "circuits",
     "name": "电路理论",
     "weight": 3,
     "note": "电容"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 3,
     "note": ""
    },
    {
     "id": "colloids",
     "name": "胶体",
     "weight": 2,
     "note": "双电层"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 2,
     "note": "二维保角映射"
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "静电场是麦克斯韦方程组的高斯定律特例"
    }
   ]
  },
  {
   "id": "lorentz-force",
   "name": "洛伦兹力",
   "nameEn": "Lorentz Force",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "电磁力"
   ],
   "tags": [
    "电磁学",
    "力",
    "电荷运动"
   ],
   "keywords": [
    "电场力",
    "磁场力",
    "霍尔效应",
    "回旋运动"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 洛伦兹力\n\n## 概述\n\n洛伦兹力是带电粒子在电磁场中受到的力，与麦克斯韦方程组一起构成经典电磁学的**完整内容**：方程组决定场如何由源产生与演化，洛伦兹力决定场如何作用于电荷。其电场部分可做功改变粒子动能，磁场部分恒不做功、只弯曲运动方向。洛伦兹力是加速器、质谱仪、霍尔效应、磁流体、等离子体物理的基础，其四维协变形式与狭义相对论完全一致。\n\n## 基本概念\n\n- **电场力**：$\\vec F_E=q\\vec E$，做功改变动能。\n- **磁场力**：$\\vec F_B=q\\vec v\\times\\vec B$，恒与速度垂直、不做功。\n- **回旋运动**：均匀磁场中带电粒子做圆周运动，回旋频率 $\\omega_c=qB/m$、半径 $r=mv/(qB)$。\n- **漂移**：叠加电场/梯度场时导向中心的漂移速度。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**洛伦兹力**：\n\n$$ \\vec F=q\\big(\\vec E+\\vec v\\times\\vec B\\big) $$\n\n运动方程：\n\n$$ \\frac{d\\vec p}{dt}=q\\big(\\vec E+\\vec v\\times\\vec B\\big) $$\n\n**四维力形式**（相对论）：\n\n$$ \\frac{dp^\\mu}{d\\tau}=qF^{\\mu\\nu}u_\\nu $$\n\n### 推导要点\n\n- **磁场不做功**：功率 $P=\\vec F_B\\cdot\\vec v=q(\\vec v\\times\\vec B)\\cdot\\vec v=0$（混合积含两个 $\\vec v$，为零）。\n- **回旋运动**：垂直 $\\vec B$ 的方程 $\\dot{\\vec v}=\\omega_c\\vec v\\times\\hat B$ 是匀速圆周运动，半径与频率如上。\n- **回旋 + 漂移**：$\\vec v=\\vec v_\\perp+\\vec v_\\parallel$，纵向匀速、横向回旋；外加 $\\vec E_\\perp$ 产生 $\\vec E\\times\\vec B$ 漂移。\n\n### 重要定理与推论\n\n- **霍尔效应**：导体中载流子在磁场下偏转，建立横向霍尔电压 $V_H=IB/(nq\\,d)$。\n- **回旋加速器原理**：$\\omega_c$ 与速度无关（非相对论），可用固定频率电场持续加速。\n- **洛伦兹力与动生电动势**：导体切割磁感线时，洛伦兹力驱动电荷分离，是 [[electromagnetic-induction]] 动生电动势的来源。\n- **相对论不变性**：洛伦兹力是四维力 $f^\\mu=qF^{\\mu\\nu}u_\\nu$ 的空间分量。\n\n## 深化内容\n\n洛伦兹力的相对论协变形式（[[special-relativity]]、[[relativistic-electrodynamics]]）显示电场力与磁场力是同一电磁张量 $F_{\\mu\\nu}$ 的不同分量，磁场力本质是运动参照系中的电场效应。在**等离子体物理**（[[plasma-physics]]）中，洛伦兹力是回旋、漂移、磁约束的基础。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Chen《等离子体物理学导论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electrostatics]]/[[magnetostatics]]（力的来源）、[[maxwell-equations]]（场的演化）。\n- 应用：[[electromagnetic-induction]]（动生电动势）、[[plasma-physics]]（漂移）、[[semiconductors]]（霍尔效应）。\n- 相对论：[[special-relativity]]（四维力形式）。\n\n## 前置知识\n\n- [[electrostatics]]、[[magnetostatics]]、[[special-relativity]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 4,
     "note": "电场力部分"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 4,
     "note": "磁场力部分"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 4,
     "note": "与麦克斯韦方程组共同构成电磁学"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 4,
     "note": "四维力"
    },
    {
     "id": "electromagnetic-induction",
     "name": "电磁感应",
     "weight": 3,
     "note": "动生电动势"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 3,
     "note": "洛伦兹协变形式"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "magnetostatics",
   "name": "磁静学",
   "nameEn": "Magnetostatics",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "静磁场",
    "安培定律"
   ],
   "tags": [
    "电磁学",
    "磁场",
    "稳恒电流"
   ],
   "keywords": [
    "毕奥-萨伐尔定律",
    "安培环路定理",
    "矢势"
   ],
   "size": 114,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 磁静学\n\n## 概述\n\n磁静学研究**稳恒电流**产生的磁场。其出发点是**毕奥-萨伐尔定律**（或等价地**安培环路定理**）。磁场是**无源**的（$\\nabla\\cdot\\vec B=0$，不存在磁单极），故可引入**矢势** $\\vec A$（$\\vec B=\\nabla\\times\\vec A$）。磁静学与静电学构成优美的**对偶**（$\\vec E$ 对 $\\vec B$、$\\phi$ 对 $\\vec A$、$\\rho$ 对 $\\vec J$）。更深层的理解来自相对论：磁场本质上是运动参照系中电场的洛伦兹变换结果，电与磁是电磁场的两个侧面。\n\n## 基本概念\n\n- **磁场** $\\vec B$：对运动电荷施洛伦兹力 $\\vec F=q\\vec v\\times\\vec B$。\n- **磁通量**：$\\Phi_B=\\int\\vec B\\cdot d\\vec S$。\n- **矢势** $\\vec A$：$\\vec B=\\nabla\\times\\vec A$；规范自由度 $\\vec A\\to\\vec A+\\nabla\\lambda$。\n- **磁化强度 / 磁场强度**：$\\vec M$、$\\vec H=\\vec B/\\mu_0-\\vec M$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**毕奥-萨伐尔定律**：\n\n$$ \\vec B(\\vec r)=\\frac{\\mu_0}{4\\pi}\\int\\frac{\\vec J(\\vec r')\\times\\hat{\\mathcal R}}{\\mathcal R^2}d\\tau' $$\n\n**安培环路定理**（微分与积分形式）：\n\n$$ \\nabla\\times\\vec B=\\mu_0\\vec J,\\qquad \\oint\\vec B\\cdot d\\vec l=\\mu_0 I_{\\mathrm{encl}} $$\n\n**磁场的无源性**：\n\n$$ \\nabla\\cdot\\vec B=0 $$\n\n### 推导要点\n\n- **矢势与安培定律的联系**：由 $\\vec B=\\nabla\\times\\vec A$ 与库仑规范 $\\nabla\\cdot\\vec A=0$，代入 $\\nabla\\times\\vec B=\\mu_0\\vec J$ 得 $\\nabla^2\\vec A=-\\mu_0\\vec J$（与静电泊松方程同构）。\n- **毕奥-萨伐尔 $\\Leftrightarrow$ 安培定律**：对直导线的磁场由安培定理直接积分，对一般分布由毕奥-萨伐尔叠加。\n- **无源性的含义**：$\\nabla\\cdot\\vec B=0$ 意味着磁感线闭合（无磁单极），等价于 $\\oint\\vec B\\cdot d\\vec S=0$。\n\n### 重要定理与推论\n\n- **安培定律的适用条件**：只适用于稳恒电流（无位移电流），由麦克斯韦修正后推广到时变场。\n- **矢势的规范自由度**：$\\vec A$ 可加任意梯度而不改变 $\\vec B$（见 [[electromagnetic-potentials]]）。\n- **静磁对偶**：$\\rho\\leftrightarrow\\vec J$、$\\phi\\leftrightarrow\\vec A$、$\\nabla\\cdot\\vec E\\leftrightarrow\\nabla\\times\\vec B$。\n- **磁偶极与磁矩**：小电流环的远场为磁偶极场 $\\vec m=I\\vec S$。\n\n## 深化内容\n\n磁场的**相对论本质**：在运动电荷参照系中，纯电场经洛伦兹变换产生磁场项（见 [[special-relativity]] 与 [[relativistic-electrodynamics]]），电与磁统一于电磁张量 $F_{\\mu\\nu}$。磁介质理论（抗磁/顺磁/铁磁）解释物质的磁性。**迈斯纳效应**（[[superconductivity]]）表明超导体完全排斥磁场。**阿哈罗诺夫-玻姆效应**（[[aharonov-bohm-effect]]）揭示矢势的量子可观测性。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、费曼《物理学讲义》第二卷。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electrostatics]]（对偶）、[[lorentz-force]]、[[vector-calculus]]、[[electromagnetic-potentials]]。\n- 相对论：[[special-relativity]]（磁场是电场的相对论效应）、[[relativistic-electrodynamics]]。\n- 时变耦合：[[electromagnetic-induction]] 使磁场与电场耦合，导向完整 [[maxwell-equations]]。\n\n## 上位替代\n\n- 含时变化的磁场需用完整 [[maxwell-equations]] 描述。\n\n## 前置知识\n\n- [[vector-calculus]]、[[electrostatics]]",
   "supersededBy": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 5,
     "note": "静磁与静电对偶"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 5,
     "note": "旋度与环路定理"
    },
    {
     "id": "electromagnetic-induction",
     "name": "电磁感应",
     "weight": 4,
     "note": "时变磁场耦合电与磁"
    },
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 4,
     "note": "矢势"
    },
    {
     "id": "lorentz-force",
     "name": "洛伦兹力",
     "weight": 4,
     "note": "磁场对运动电荷的作用"
    },
    {
     "id": "circuits",
     "name": "电路理论",
     "weight": 3,
     "note": "电感"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 3,
     "note": "磁场是电场的相对论效应"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 3,
     "note": "迈斯纳效应"
    }
   ],
   "supersedeLinks": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "稳恒电流下的麦克斯韦方程组"
    }
   ]
  },
  {
   "id": "maxwell-equations",
   "name": "麦克斯韦方程组",
   "nameEn": "Maxwell's Equations",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "麦克斯韦方程",
    "电磁场理论"
   ],
   "tags": [
    "电磁学",
    "场方程"
   ],
   "keywords": [
    "高斯定律",
    "法拉第定律",
    "安培-麦克斯韦定律",
    "电磁波",
    "位移电流"
   ],
   "size": 242,
   "degree": 21,
   "pos": {
    "x": 20,
    "y": 0,
    "z": 0
   },
   "fixed": false,
   "body": "# 麦克斯韦方程组\n\n## 概述\n\n麦克斯韦方程组统一了电与磁，是经典电磁学（乃至全部经典场论）的基石。麦克斯韦在 1865 年把高斯定律、法拉第定律、安培定律整合为一组自洽的场方程，关键的创新是加入**位移电流** $\\varepsilon_0\\partial\\vec E/\\partial t$，从而预言了**电磁波**并以光速传播——把光学纳入电磁学。方程组具有洛伦兹协变性，是狭义相对论的直接动因；其量子化给出量子电动力学（QED）。\n\n## 基本概念\n\n- **电荷密度 / 电流密度**：$\\rho$、$\\vec J$，满足连续性方程 $\\partial\\rho/\\partial t+\\nabla\\cdot\\vec J=0$。\n- **位移电流**：$\\vec J_d=\\varepsilon_0\\partial\\vec E/\\partial t$，非电荷流动的\"等效电流\"。\n- **电磁场**：$\\vec E$（电场）、$\\vec B$（磁场）；真空常数 $\\varepsilon_0$、$\\mu_0$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n微分形式（SI 单位）：\n\n$$ \\nabla\\cdot\\vec E=\\frac{\\rho}{\\varepsilon_0},\\qquad \\nabla\\cdot\\vec B=0 $$\n\n$$ \\nabla\\times\\vec E=-\\frac{\\partial\\vec B}{\\partial t},\\qquad \\nabla\\times\\vec B=\\mu_0\\vec J+\\mu_0\\varepsilon_0\\frac{\\partial\\vec E}{\\partial t} $$\n\n真空无源情形，$\\vec E,\\vec B$ 均满足波动方程：\n\n$$ \\Big(\\nabla^2-\\frac{1}{c^2}\\frac{\\partial^2}{\\partial t^2}\\Big)\\vec E=0,\\qquad c=\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} $$\n\n### 推导要点\n\n- **位移电流的引入**：对安培定律取散度 $\\nabla\\cdot(\\nabla\\times\\vec B)=0=\\mu_0\\nabla\\cdot\\vec J$，与连续性方程 $\\nabla\\cdot\\vec J=-\\partial\\rho/\\partial t$ 矛盾；加入 $\\varepsilon_0\\partial\\vec E/\\partial t$ 后用高斯定律消去 $\\partial\\rho/\\partial t$ 即自洽。\n- **电磁波的预言**：真空无源时对 $\\nabla\\times\\vec E=-\\partial\\vec B/\\partial t$ 再取旋度，用 $\\nabla\\times\\vec B=\\mu_0\\varepsilon_0\\partial\\vec E/\\partial t$ 得波动方程，波速 $c=1/\\sqrt{\\mu_0\\varepsilon_0}$（与光速吻合）。\n- **电荷守恒**：对高斯定律取时间导数 + 安培定律取散度，得到连续性方程。\n\n### 重要定理与推论\n\n- **电荷守恒**：连续性方程是方程组的必然推论。\n- **电磁波存在**：$\\vec E,\\vec B$ 相互激发、以光速传播的横波。\n- **边界条件**：跨介质界面时 $\\vec E_\\parallel,\\vec B_\\perp$ 连续（无面电荷/电流时）。\n- **规范自由度**：$\\phi,\\vec A$ 可做规范变换而不改变 $\\vec E,\\vec B$（见 [[electromagnetic-potentials]]）。\n\n## 深化内容\n\n麦克斯韦方程组具有**洛伦兹协变性**（见 [[relativistic-electrodynamics]]）：$\\vec E,\\vec B$ 统一为电磁张量 $F_{\\mu\\nu}$，方程组压缩为 $\\partial_\\mu F^{\\mu\\nu}=\\mu_0J^\\nu$。作为 $U(1)$ **规范场**（[[gauge-field-theory]]），它是规范场论的原型。量子化后得到 **QED**（[[qed]]），预言光子并精确到 $10^{-12}$。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electromagnetic-waves]]、[[electromagnetic-induction]]、[[electrostatics]]/[[magnetostatics]]（退化情形）、[[vector-calculus]]。\n- 相对论：[[special-relativity]] 中 $\\vec E,\\vec B$ 统一为 $F_{\\mu\\nu}$；[[relativistic-electrodynamics]]。\n- 量子化：[[quantum-field-theory]] → [[qed]]。\n\n## 上位替代\n\n- 经典电磁场是量子场论中电磁场（光子场）的经典极限：[[qed]]。\n\n## 前置知识\n\n- [[vector-calculus]]、[[calculus]]、[[electrostatics]]、[[magnetostatics]]",
   "supersededBy": [
    {
     "id": "qed",
     "name": "量子电动力学"
    }
   ],
   "supersedes": [
    {
     "id": "electrostatics",
     "name": "静电学"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学"
    },
    {
     "id": "electromagnetic-induction",
     "name": "电磁感应"
    }
   ],
   "links": [
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 5,
     "note": "介质中的麦克斯韦方程组"
    },
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 5,
     "note": "势是方程组的简化表述"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 5,
     "note": "辐射由时变源产生"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 5,
     "note": "方程组预言电磁波"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 5,
     "note": "电磁场方程"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 5,
     "note": "方程组的协变形式"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 5,
     "note": "微分形式的数学语言"
    },
    {
     "id": "lorentz-force",
     "name": "洛伦兹力",
     "weight": 4,
     "note": "电磁力定律与方程组并列"
    },
    {
     "id": "magnetohydrodynamics",
     "name": "磁流体力学",
     "weight": 4,
     "note": "电磁场"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 4,
     "note": "洛伦兹协变形式"
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 4,
     "note": ""
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 3,
     "note": "电磁场是 U(1) 规范场"
    },
    {
     "id": "plasma-oscillations",
     "name": "等离子体振荡",
     "weight": 3,
     "note": "电磁场"
    }
   ],
   "softLinks": [
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": "波动方程/亥姆霍兹方程"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 3,
     "note": ""
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": "量子化为 QED"
    }
   ],
   "supersedeLinks": [
    {
     "id": "electromagnetic-induction",
     "name": "电磁感应",
     "weight": 5,
     "note": "法拉第定律是其中一环"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 5,
     "note": "静电是麦克斯韦方程组的高斯定律情形"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 5,
     "note": "静磁是稳恒电流情形"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 4,
     "note": "经典极限"
    }
   ]
  },
  {
   "id": "multipole-expansion",
   "name": "多极展开",
   "nameEn": "Multipole Expansion",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "多极矩"
   ],
   "tags": [
    "电磁学",
    "展开",
    "远场"
   ],
   "keywords": [
    "单极",
    "偶极",
    "四极",
    "勒让德",
    "球谐函数"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 多极展开\n\n## 概述\n\n多极展开把远处电荷/电流分布的场按**多极矩**逐级展开：单极（总电荷）、偶极（$\\vec p$）、四极（$Q_{ij}$）…… 当观测距离远大于源尺寸时，级数迅速收敛，前几项即给出场的良好近似。多极展开是静电势远场、辐射问题（偶极/四极辐射）与量子跃迁选择定则的统一数学框架，也是\"一个复杂分布的场在远处看像什么\"的系统回答。\n\n## 基本概念\n\n- **单极矩**：总电荷 $Q=\\int\\rho\\,d\\tau$。\n- **电偶极矩**：$\\vec p=\\int\\vec r'\\rho\\,d\\tau'$。\n- **电四极矩**：$Q_{ij}=\\int(3r'_ir'_j-r'^2\\delta_{ij})\\rho\\,d\\tau'$。\n- **磁偶极矩**：$\\vec m=\\frac12\\int\\vec r'\\times\\vec J\\,d\\tau'$。\n- **展开参数**：$r'/r\\ll1$（源远小于距离）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n静电势的多极展开：\n\n$$ \\phi(\\vec r)=\\frac1{4\\pi\\varepsilon_0}\\Big[\\frac{Q}{r}+\\frac{\\vec p\\cdot\\hat r}{r^2}+\\frac1{2r^3}\\sum_{ij}Q_{ij}\\hat r_i\\hat r_j+\\cdots\\Big] $$\n\n球谐函数展开（系统形式）：\n\n$$ \\frac1{|\\vec r-\\vec r'|}=\\sum_{l=0}^{\\infty}\\sum_{m=-l}^{l}\\frac{4\\pi}{2l+1}\\frac{r_<^l}{r_>^{l+1}}Y_{lm}(\\hat r)Y_{lm}^*(\\hat r') $$\n\n### 推导要点\n\n- **泰勒展开法**：把 $1/|\\vec r-\\vec r'|$ 对 $\\vec r'$ 在原点展开，逐阶整理系数即得多极矩。\n- **勒让德展开**：$1/|\\vec r-\\vec r'|=\\sum_l\\frac{r_<^l}{r_>^{l+1}}P_l(\\cos\\gamma)$，再由加法公式展开为球谐函数。\n- **辐射多极**：对推迟势做同样的远场展开，$l$ 阶多极辐射功率按 $(\\omega a/c)^{2l}$ 标度。\n\n### 重要定理与推论\n\n- **偶极项主导**：中性系统（$Q=0$）远场由偶极主导。\n- **唯一性**：给定多极矩，远场唯一确定。\n- **辐射选择定则**：量子跃迁的电偶极（E1）、磁偶极（M1）、电四极（E2）对应不同角动量/宇称选择定则（[[quantum-mechanics]]）。\n- **坐标系无关性**：最低阶非零多极矩与原点选择无关。\n\n## 深化内容\n\n多极展开用于**分子/原子**（范德瓦尔斯力、分子光谱）、**核物理**（核四极矩反映核形变）、**引力波**（质量四极矩辐射）与**天线阵列**。辐射多极的角分布由球谐函数决定，功率逐阶递减。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[spherical-harmonics]]（基函数）、[[electrostatics]]/[[electromagnetic-radiation]]（应用）、[[special-functions]]。\n- 量子：[[quantum-mechanics]] 中跃迁概率的多极展开决定选择定则。\n\n## 前置知识\n\n- [[spherical-harmonics]]、[[special-functions]]、[[electrostatics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 5,
     "note": "球谐函数作为展开基"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 4,
     "note": "辐射多极"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 4,
     "note": "静电势的多极展开"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "电磁跃迁的多极选择定则"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "relativistic-electrodynamics",
   "name": "相对论电动力学",
   "nameEn": "Relativistic Electrodynamics",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "四维电磁场"
   ],
   "tags": [
    "电磁学",
    "相对论",
    "张量"
   ],
   "keywords": [
    "电磁张量",
    "洛伦兹变换",
    "四维势"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 相对论电动力学\n\n## 概述\n\n相对论电动力学把电磁学写成**洛伦兹协变**的四维张量形式，揭示电磁学的内在相对论结构：$\\vec E,\\vec B$ 不是两个独立矢量，而是电磁张量 $F_{\\mu\\nu}$ 的不同分量。麦克斯韦方程组压缩为两条协变方程，洛伦兹力是四维力的空间分量。这一形式解释了\"磁场是电场的相对论效应\"，并成为规范场论（杨-米尔斯）的原型。\n\n## 基本概念\n\n- **四矢势**：$A^\\mu=(\\phi/c,\\vec A)$。\n- **电磁张量**：$F_{\\mu\\nu}=\\partial_\\mu A_\\nu-\\partial_\\nu A_\\mu$，分量为 $\\vec E,\\vec B$。\n- **对偶张量**：$\\tilde F^{\\mu\\nu}=\\frac12\\epsilon^{\\mu\\nu\\rho\\sigma}F_{\\rho\\sigma}$。\n- **四电流**：$J^\\mu=(c\\rho,\\vec J)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n电磁张量：\n\n$$ F_{\\mu\\nu}=\\begin{pmatrix}0&E_x/c&E_y/c&E_z/c\\\\-E_x/c&0&-B_z&B_y\\\\-E_y/c&B_z&0&-B_x\\\\-E_z/c&-B_y&B_x&0\\end{pmatrix} $$\n\n麦克斯韦方程组（两条协变方程）：\n\n$$ \\partial_\\mu F^{\\mu\\nu}=\\mu_0J^\\nu,\\qquad \\partial_\\mu\\tilde F^{\\mu\\nu}=0 $$\n\n**洛伦兹力四维形式**：\n\n$$ \\frac{dp^\\mu}{d\\tau}=qF^{\\mu\\nu}u_\\nu $$\n\n### 推导要点\n\n- **电磁张量的构造**：由 $\\vec E=-\\nabla\\phi-\\partial\\vec A/\\partial t$、$\\vec B=\\nabla\\times\\vec A$，把分量整理为 $F_{\\mu\\nu}=\\partial_\\mu A_\\nu-\\partial_\\nu A_\\mu$。\n- **两条协变方程**：非齐次麦克斯韦方程（高斯 + 安培）合并为 $\\partial_\\mu F^{\\mu\\nu}=\\mu_0J^\\nu$；齐次方程（无源 + 法拉第）合并为 $\\partial_\\mu\\tilde F^{\\mu\\nu}=0$。\n- **四维力**：洛伦兹力 $\\vec F=q(\\vec E+\\vec v\\times\\vec B)$ 的分量恰为 $qF^{\\mu\\nu}u_\\nu$ 的空间部分。\n\n### 重要定理与推论\n\n- **洛伦兹协变性**：方程在洛伦兹变换下形式不变（张量方程自动协变）。\n- **场变换**：不同惯性系中 $\\vec E,\\vec B$ 互相转化（纯电场经 boost 产生磁场）。\n- **两个洛伦兹不变量**：$F_{\\mu\\nu}F^{\\mu\\nu}$（$\\propto B^2-E^2/c^2$）与 $F_{\\mu\\nu}\\tilde F^{\\mu\\nu}$（$\\propto\\vec E\\cdot\\vec B$）。\n- **规范不变性的四维形式**：$A^\\mu\\to A^\\mu+\\partial^\\mu\\Lambda$ 不改变 $F_{\\mu\\nu}$。\n\n## 深化内容\n\n相对论电动力学是**规范场论**（[[gauge-field-theory]]）的原型：把 $U(1)$ 整体对称推广为局域对称，强制引入规范场 $A^\\mu$（即电磁场）。这一\"规范原理\"推广到 $SU(2),SU(3)$ 即电弱、强相互作用。电磁张量的几何解释是联络的曲率（纤维丛）。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[special-relativity]]（框架）、[[tensor-calculus]]（语言）、[[maxwell-equations]]（内容）、[[electromagnetic-potentials]]（四矢势）。\n- 现代推广：[[gauge-field-theory]] 把电磁场推广为规范场。\n\n## 前置知识\n\n- [[tensor-calculus]]、[[special-relativity]]、[[maxwell-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "方程组的协变形式"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 5,
     "note": "洛伦兹协变性"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 5,
     "note": "张量语言"
    },
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 4,
     "note": "四矢势"
    },
    {
     "id": "lorentz-force",
     "name": "洛伦兹力",
     "weight": 4,
     "note": "四维力"
    },
    {
     "id": "minkowski-spacetime",
     "name": "闵可夫斯基时空",
     "weight": 4,
     "note": "四维电磁场"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "waveguides-resonators",
   "name": "波导与谐振腔",
   "nameEn": "Waveguides & Resonators",
   "domain": "electrodynamics",
   "domainName": "电动力学",
   "color": "#f39c12",
   "aliases": [
    "导波",
    "谐振腔"
   ],
   "tags": [
    "电磁学",
    "导波",
    "模式"
   ],
   "keywords": [
    "TE模",
    "TM模",
    "截止频率",
    "品质因子"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 波导与谐振腔\n\n## 概述\n\n波导引导电磁波沿特定方向传播；谐振腔把电磁场限制在有限体积内形成驻波模式。两者都由导体/介质边界条件决定场的**模式**（TE/TM 模）。波导中的每个模式有**截止频率** $\\omega_c$：低于 $\\omega_c$ 的模式指数衰减（截止），高于 $\\omega_c$ 的模式传播。谐振腔的本征频率离散化，品质因子 $Q$ 刻画损耗。这些概念是微波工程、光纤、激光器与粒子加速器的物理基础。\n\n## 基本概念\n\n- **TE / TM 模**：横电（$E_z=0$）/ 横磁（$H_z=0$）模式。\n- **截止频率** $\\omega_c$：模式能否传播的阈值。\n- **传播常数**：$\\gamma=\\alpha+i\\beta$，纵向传播与衰减。\n- **品质因子**：$Q=\\omega\\times(\\text{储能}/\\text{耗散功率})$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n波导中的亥姆霍兹方程（分离纵向后）：\n\n$$ \\big(\\nabla_t^2+\\gamma^2+\\omega^2\\mu\\varepsilon\\big)\\vec F_t=0 $$\n\n矩形波导 TE/TM 模的截止波数：\n\n$$ k_c=\\sqrt{\\Big(\\frac{m\\pi}{a}\\Big)^2+\\Big(\\frac{n\\pi}{b}\\Big)^2} $$\n\n谐振腔品质因子：\n\n$$ Q=\\frac{\\omega_0}{\\Delta\\omega}=\\frac{\\omega_0\\,U}{P_{\\mathrm{loss}}} $$\n\n### 推导要点\n\n- **纵向分离**：设场为 $\\vec F=\\vec F_t(x,y)e^{-\\gamma z}$，代入波动方程，横向部分满足亥姆霍兹方程，纵向由边界条件确定 $\\gamma$。\n- **截止频率**：$\\gamma^2=k_c^2-\\omega^2\\mu\\varepsilon$；当 $\\omega<\\omega_c=k_c/\\sqrt{\\mu\\varepsilon}$ 时 $\\gamma$ 为实数（衰减），$\\omega>\\omega_c$ 时 $\\gamma$ 为纯虚数（传播）。\n- **Q 因子**：由储能的指数衰减 $U(t)=U_0e^{-\\omega_0t/Q}$ 定义，或由谱线宽度 $\\Delta\\omega$ 给出。\n\n### 重要定理与推论\n\n- **截止现象**：波导是\"高通\"结构，低于截止频率的波不能传播。\n- **模式简并与正交性**：不同模式携带独立信息，可多路复用。\n- **谐振腔的离散谱**：本征频率由腔几何决定（类比简正模）。\n- **光纤的单模条件**：$V=2\\pi a\\,\\mathrm{NA}/\\lambda<2.405$ 时单模传输。\n\n## 深化内容\n\n波导与谐振腔是**微波工程**（矩形/圆形波导、同轴线）、**光纤通信**（介质波导、全反射导波）与**集成光子学**的基础；光学谐振腔是[[lasers]] 反馈的必要条件。粒子加速器中**射频腔**用谐振电磁场加速粒子。延伸阅读可参考 Jackson《Classical Electrodynamics》、Pozar《Microwave Engineering》、Saleh & Teich《Fundamentals of Photonics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electromagnetic-waves]]（物理本质）、[[boundary-value-problems]]/[[separation-of-variables]]（模式求解）。\n- 应用：[[optics]]（光纤、集成光子学）、[[lasers]]（光学谐振腔）、微波器件。\n\n## 前置知识\n\n- [[electromagnetic-waves]]、[[boundary-value-problems]]、[[maxwell-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 5,
     "note": "波导是受限的电磁波"
    },
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 4,
     "note": "边界条件确定模式"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 4,
     "note": ""
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 3,
     "note": "谐振腔"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 3,
     "note": "光纤与集成光学"
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 3,
     "note": ""
    },
    {
     "id": "electromagnetic-induction",
     "name": "电磁感应",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "acoustics",
   "name": "声学",
   "nameEn": "Acoustics",
   "domain": "fluid-mechanics",
   "domainName": "流体与声学",
   "color": "#2980b9",
   "aliases": [
    "声波",
    "声学"
   ],
   "tags": [
    "声学",
    "波动",
    "声音"
   ],
   "keywords": [
    "声波",
    "声压",
    "声速",
    "多普勒效应"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 声学\n\n## 概述\n\n声学研究声波的产生、传播与感知。声波是流体/固体中的机械波，在空气中是纵波（压缩波），声速\n\n$$ c = \\sqrt{\\frac{\\gamma p}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}} $$\n\n声压级 $L = 20\\log_{10}(p/p_0)$（dB）。物理声学（波动）、生理声学（听觉）与建筑声学、超声、声呐、超声成像都是其分支。多普勒效应与电磁波同理。\n\n## 与其他知识的联系\n\n- 紧密相关：[[wave-mechanics]]（波动理论）、[[vibration-theory]]（声源）、[[fluid-mechanics]]（传播介质）。\n- 数学：[[partial-differential-equations]]、[[fourier-analysis]]（频谱）。",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 5,
     "note": "机械波"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 4,
     "note": "声波是流体中的压缩波"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": "振动与声"
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 3,
     "note": "频谱"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 3,
     "note": ""
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 2,
     "note": "多普勒效应类比"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "continuum-mechanics",
   "name": "连续介质力学",
   "nameEn": "Continuum Mechanics",
   "domain": "fluid-mechanics",
   "domainName": "流体与声学",
   "color": "#2980b9",
   "aliases": [
    "连续介质",
    "弹性力学"
   ],
   "tags": [
    "力学",
    "连续介质",
    "材料"
   ],
   "keywords": [
    "应力",
    "应变",
    "本构关系",
    "弹性"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 连续介质力学\n\n## 概述\n\n连续介质力学统一处理固体（弹性/塑性）与流体，核心概念是**应力张量** $\\sigma_{ij}$、**应变张量** $\\epsilon_{ij}$ 与**本构关系**（如胡克定律）\n\n$$ \\sigma_{ij} = C_{ijkl}\\,\\epsilon_{kl} $$\n\n平衡与运动方程由动量守恒导出（柯西方程）。弹性波（纵波/横波）在固体中传播；塑性、黏弹性、断裂是其延伸。变分原理（最小势能）是求解的数学基础。\n\n## 与其他知识的联系\n\n- 紧密相关：[[fluid-mechanics]]（流体分支）、[[tensor-calculus]]（张量）。\n- 相关：[[wave-mechanics]]（弹性波）、[[variational-calculus]]、[[partial-differential-equations]]。",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 5,
     "note": "流体是连续介质的特例"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 5,
     "note": "应力应变张量"
    },
    {
     "id": "cell-mechanics",
     "name": "细胞力学",
     "weight": 4,
     "note": "弹性与流变"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 3,
     "note": "最小势能原理"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 3,
     "note": "场与梯度"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 3,
     "note": "弹性波"
    }
   ],
   "softLinks": [
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 2,
     "note": "流变学"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "fluid-mechanics",
   "name": "流体力学",
   "nameEn": "Fluid Mechanics",
   "domain": "fluid-mechanics",
   "domainName": "流体与声学",
   "color": "#2980b9",
   "aliases": [
    "流体动力学"
   ],
   "tags": [
    "流体",
    "连续介质",
    "动力学"
   ],
   "keywords": [
    "纳维-斯托克斯方程",
    "伯努利方程",
    "雷诺数"
   ],
   "size": 208,
   "degree": 19,
   "pos": null,
   "fixed": false,
   "body": "# 流体力学\n\n## 概述\n\n流体力学研究液体与气体的运动。连续介质假设下由**纳维-斯托克斯方程**描述：\n\n$$ \\rho\\Big(\\frac{\\partial \\vec v}{\\partial t} + \\vec v\\cdot\\nabla\\vec v\\Big) = -\\nabla p + \\mu\\nabla^2\\vec v + \\rho\\vec g $$\n\n无黏（欧拉方程）与不可压缩情形有伯努利方程 $p + \\frac12\\rho v^2 + \\rho gh = \\mathrm{const}$。**雷诺数** $Re = \\rho vL/\\mu$ 判定层流/湍流。地球物理、工程、生物流体都依赖流体力学。\n\n## 与其他知识的联系\n\n- 紧密相关：[[continuum-mechanics]]（框架）、[[turbulence]]、[[partial-differential-equations]]、[[vector-calculus]]。\n- 波的传播：[[acoustics]]。\n- 非线性：[[chaos-theory]]（湍流）。",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 5,
     "note": "连续介质力学分支"
    },
    {
     "id": "geophysics",
     "name": "地球与大气物理",
     "weight": 5,
     "note": "流体力学基础"
    },
    {
     "id": "magnetohydrodynamics",
     "name": "磁流体力学",
     "weight": 5,
     "note": "磁流体力学是流体+电磁的耦合"
    },
    {
     "id": "ocean-dynamics",
     "name": "海洋动力学",
     "weight": 5,
     "note": "流体方程"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "方程类型"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 5,
     "note": "湍流"
    },
    {
     "id": "acoustics",
     "name": "声学",
     "weight": 4,
     "note": "流体中的波"
    },
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 4,
     "note": "大气流体"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 4,
     "note": "导电流体的等离子体描述"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 4,
     "note": "场描述"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 3,
     "note": "湍流与混沌"
    },
    {
     "id": "colloids",
     "name": "胶体",
     "weight": 3,
     "note": "悬浮液流体"
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 3,
     "note": "流体静力学平衡"
    },
    {
     "id": "cell-mechanics",
     "name": "细胞力学",
     "weight": 2,
     "note": "细胞微流体"
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 2,
     "note": "旋转流体"
    }
   ],
   "softLinks": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 3,
     "note": "力学基础"
    },
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 3,
     "note": "软物质流体"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 3,
     "note": ""
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 2,
     "note": "对流"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "turbulence",
   "name": "湍流",
   "nameEn": "Turbulence",
   "domain": "fluid-mechanics",
   "domainName": "流体与声学",
   "color": "#2980b9",
   "aliases": [
    "湍流理论"
   ],
   "tags": [
    "流体",
    "湍流",
    "非线性"
   ],
   "keywords": [
    "雷诺数",
    "湍流级联",
    "柯尔莫哥洛夫标度"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 湍流\n\n## 概述\n\n湍流是高雷诺数下流体的混沌、多尺度运动状态。能量由大涡注入并逐级传递（**能量级联**）至黏性耗散尺度，柯尔莫哥洛夫-41 理论给出能谱标度：\n\n$$ E(k) \\propto k^{-5/3} $$\n\n湍流仍是物理学未解难题（纳维-斯托克斯方程光滑性问题属千禧年问题）。方法包括直接数值模拟、大涡模拟、雷诺平均与统计理论。\n\n## 与其他知识的联系\n\n- 紧密相关：[[fluid-mechanics]]（方程）、[[chaos-theory]]（动力学本质）。\n- 数学：[[partial-differential-equations]]、[[probability-theory]]、[[fluctuation-theory]]（统计）。",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 5,
     "note": "流体力学的核心难题"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 4,
     "note": "确定性混沌"
    },
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 3,
     "note": "边界层湍流"
    },
    {
     "id": "geophysics",
     "name": "地球与大气物理",
     "weight": 3,
     "note": "大气海洋湍流"
    },
    {
     "id": "magnetohydrodynamics",
     "name": "磁流体力学",
     "weight": 3,
     "note": "MHD 湍流"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 3,
     "note": ""
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 3,
     "note": "等离子体湍流"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 2,
     "note": "随机统计"
    },
    {
     "id": "ocean-dynamics",
     "name": "海洋动力学",
     "weight": 2,
     "note": "海洋湍流"
    }
   ],
   "softLinks": [
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "atmospheric-physics",
   "name": "大气物理",
   "nameEn": "Atmospheric Physics",
   "domain": "geophysics",
   "domainName": "地球与大气物理",
   "color": "#57606f",
   "aliases": [
    "大气动力学"
   ],
   "tags": [
    "大气",
    "气象",
    "流体"
   ],
   "keywords": [
    "大气环流",
    "对流层",
    "天气系统"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 大气物理\n\n## 概述\n\n大气物理研究大气的**组成、分层结构与动力学**。大气分层（对流层、平流层、中间层、热层）由温度廓线决定；对流层的天气系统（气旋、锋面）由**斜压不稳定**驱动；大尺度大气环流由太阳辐射差异与地球旋转（科里奥利力）共同决定。气象预报用**数值天气模式**求解大气流体方程（原始方程组）。湿空气热力学、云微物理与辐射传输是重要子领域。\n\n## 基本概念\n\n- **大气分层**：对流层、平流层等。\n- **大气环流**：哈德莱、费雷尔、极地环流。\n- **天气系统**：气旋、锋面。\n- **斜压不稳定**：中纬度天气系统之源。\n- **科里奥利力**：地球旋转效应（[[non-inertial-frames]]）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n地转风（大尺度平衡）：\n\n$$ \\vec v_g=\\frac1{\\rho f}\\hat z\\times\\nabla p $$\n\n静力学平衡：\n\n$$ \\frac{\\partial p}{\\partial z}=-\\rho g $$\n\n### 推导要点\n\n- **地转平衡**：压强梯度力与科里奥利力平衡（[[fluid-mechanics]] + [[non-inertial-frames]]）。\n- **大气环流**：赤道加热、极地冷却驱动的热力环流。\n- **斜压不稳定**：水平温度梯度的势能转化为气旋动能。\n\n### 重要定理与推论\n\n- **地转风**：大尺度风与等压线平行。\n- **热成风**：水平温度梯度导致风随高度变化。\n- **大气环流三圈结构**：哈德莱/费雷尔/极地环流。\n- **数值天气预报**：求解原始方程组。\n\n## 深化内容\n\n大气物理是 [[geophysics]]、[[fluid-mechanics]]、[[thermodynamics]]（湿空气）、[[turbulence]]（边界层）的应用。延伸阅读可参考 Holton《An Introduction to Dynamic Meteorology》、Vallis《Atmospheric and Oceanic Fluid Dynamics》、Wallace & Hobbs《Atmospheric Science》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[geophysics]]、[[fluid-mechanics]]（大气流体）。\n- 关联：[[thermodynamics]]（湿空气）、[[turbulence]]（边界层）、[[non-inertial-frames]]（科里奥利力）。\n\n## 前置知识\n\n- [[fluid-mechanics]]、[[thermodynamics]]、[[geophysics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "geophysics",
     "name": "地球与大气物理",
     "weight": 5,
     "note": "地球系统分支"
    },
    {
     "id": "climate-physics",
     "name": "气候物理",
     "weight": 4,
     "note": "大气过程"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 4,
     "note": "大气流体"
    },
    {
     "id": "ocean-dynamics",
     "name": "海洋动力学",
     "weight": 3,
     "note": "海气相互作用"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "湿空气热力学"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 3,
     "note": "边界层湍流"
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 2,
     "note": "科里奥利效应"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "climate-physics",
   "name": "气候物理",
   "nameEn": "Climate Physics",
   "domain": "geophysics",
   "domainName": "地球与大气物理",
   "color": "#57606f",
   "aliases": [
    "气候系统",
    "气候科学"
   ],
   "tags": [
    "气候",
    "辐射平衡",
    "地球系统"
   ],
   "keywords": [
    "辐射平衡",
    "温室效应",
    "气候反馈"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 气候物理\n\n## 概述\n\n气候物理研究地球气候系统的**长期行为与能量平衡**。最基本的模型是**行星辐射平衡**：太阳辐射输入与地球红外输出平衡。**温室效应**——大气吸收红外辐射——使地表温度高于有效温度。气候反馈（水汽、冰反照率、云）决定**气候敏感度**（温度对辐射强迫的响应）。气候系统是**非线性强迫耗散系统**，其长期变化由能量收支与反馈综合决定。\n\n## 基本概念\n\n- **辐射平衡**：太阳输入与地球输出平衡。\n- **温室效应**：大气红外吸收。\n- **气候反馈**：水汽、冰反照率、云反馈。\n- **气候敏感度**：温度对辐射强迫的响应。\n- **辐射强迫**：大气成分变化引起的能量收支扰动。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n行星辐射平衡：\n\n$$ S_0(1-\\alpha)=4\\sigma T_{\\mathrm{eff}}^4 $$\n\n温室效应（地表温度高于有效温度）：\n\n$$ T_s=T_{\\mathrm{eff}}+\\Delta T_{\\mathrm{温室}} $$\n\n### 推导要点\n\n- **辐射平衡**：太阳短波输入 = 地球长波输出（[[blackbody-radiation]]、斯蒂芬-玻尔兹曼定律）。\n- **温室效应**：大气对红外不透明，地表辐射被吸收再辐射（[[thermodynamics]]）。\n- **气候反馈**：正/负反馈放大/抑制初始扰动（水汽正反馈、冰反照率正反馈）。\n\n### 重要定理与推论\n\n- **温室效应**：地表温度高于无大气时的有效温度（约 33 K 的温室增温）。\n- **气候敏感度**：$CO_2$ 倍增约升温 3 K（含反馈）。\n- **气候反馈**：正反馈（水汽、冰反照率）主导。\n- **气候系统的非线性**：多平衡、突变（[[chaos-theory]]）。\n\n## 深化内容\n\n气候物理是 [[geophysics]]、[[atmospheric-physics]]、[[ocean-dynamics]] 的综合，基于 [[thermodynamics]]、[[blackbody-radiation]]；气候变化是当代重大科学与社会问题。延伸阅读可参考 Pierrehumbert《Principles of Planetary Climate》、Hartmann《Global Physical Climatology》、Archer《Global Warming》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[geophysics]]、[[atmospheric-physics]]、[[ocean-dynamics]]（海气耦合）。\n- 基础：[[thermodynamics]]（能量平衡）、[[blackbody-radiation]]（辐射）、[[chaos-theory]]（非线性）。\n\n## 前置知识\n\n- [[thermodynamics]]、[[blackbody-radiation]]、[[geophysics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "geophysics",
     "name": "地球与大气物理",
     "weight": 5,
     "note": "地球系统分支"
    },
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 4,
     "note": "大气过程"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 3,
     "note": "辐射平衡"
    },
    {
     "id": "ocean-dynamics",
     "name": "海洋动力学",
     "weight": 3,
     "note": "海洋过程"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "能量平衡"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 2,
     "note": "气候非线性"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "geophysics",
   "name": "地球与大气物理",
   "nameEn": "Geophysics and Atmospheric Physics",
   "domain": "geophysics",
   "domainName": "地球与大气物理",
   "color": "#57606f",
   "aliases": [
    "地球物理",
    "大气物理"
   ],
   "tags": [
    "地球物理",
    "大气",
    "海洋",
    "气候"
   ],
   "keywords": [
    "大气",
    "海洋",
    "气候",
    "地球系统"
   ],
   "size": 78,
   "degree": 6,
   "pos": {
    "x": -60,
    "y": 40,
    "z": 0
   },
   "fixed": false,
   "body": "# 地球与大气物理\n\n## 概述\n\n地球与大气物理研究**地球系统**的物理过程：大气动力学、海洋环流、气候系统与固体地球。地球系统是一个**旋转球面上的强迫耗散流体系统**，能量输入来自太阳辐射，遵循 [[fluid-mechanics]] 与 [[thermodynamics]]。核心主题：大气环流（哈德莱环流、急流）、海洋温盐环流、辐射平衡与气候反馈。这是理解气候变化、天气预报与海洋环流的物理基础。\n\n## 基本概念\n\n- **大气 / 海洋 / 气候**：地球系统的三个子系统。\n- **大气环流 / 海洋环流**：大尺度运动。\n- **辐射平衡**：太阳辐射输入与地球辐射输出。\n- **气候反馈**：水汽、冰反照率、云反馈。\n- **科里奥利力**：旋转地球的效应（[[non-inertial-frames]]）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n行星辐射平衡（[[climate-physics]]）：\n\n$$ S_0(1-\\alpha)=4\\sigma T_{\\mathrm{eff}}^4 $$\n\n地转平衡（大尺度环流）：\n\n$$ f\\hat z\\times\\vec v=-\\frac1{\\rho}\\nabla p $$\n\n（$f=2\\Omega\\sin\\varphi$ 为科里奥利参数。）\n\n### 推导要点\n\n- **大气/海洋流体**：旋转球面上的流体运动（[[fluid-mechanics]] + [[non-inertial-frames]]）。\n- **辐射平衡**：太阳辐射与地球辐射的平衡（[[blackbody-radiation]]）。\n- **地转平衡**：压强梯度力与科里奥利力平衡。\n\n### 重要定理与推论\n\n- **大气环流**：哈德莱环流、费雷尔环流、急流（[[atmospheric-physics]]）。\n- **海洋环流**：温盐环流、风生环流（[[ocean-dynamics]]）。\n- **温室效应**：大气红外吸收（[[climate-physics]]）。\n- **气候反馈**：决定气候敏感度。\n\n## 深化内容\n\n地球与大气物理是 [[fluid-mechanics]]、[[thermodynamics]]、[[turbulence]] 的应用，与 [[atmospheric-physics]]、[[ocean-dynamics]]、[[climate-physics]] 组成框架。延伸阅读可参考 Vallis《Atmospheric and Oceanic Fluid Dynamics》、Holton《An Introduction to Dynamic Meteorology》、Pierrehumbert《Principles of Planetary Climate》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[atmospheric-physics]]、[[ocean-dynamics]]、[[climate-physics]]、[[fluid-mechanics]]。\n- 基础：[[turbulence]]（湍流）、[[thermodynamics]]（辐射平衡）、[[non-inertial-frames]]（科里奥利力）。\n\n## 前置知识\n\n- [[fluid-mechanics]]、[[thermodynamics]]、[[non-inertial-frames]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 5,
     "note": "大气物理"
    },
    {
     "id": "climate-physics",
     "name": "气候物理",
     "weight": 5,
     "note": "气候物理"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 5,
     "note": "流体力学基础"
    },
    {
     "id": "ocean-dynamics",
     "name": "海洋动力学",
     "weight": 5,
     "note": "海洋动力学"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "辐射与热平衡"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 3,
     "note": "大气海洋湍流"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "ocean-dynamics",
   "name": "海洋动力学",
   "nameEn": "Ocean Dynamics",
   "domain": "geophysics",
   "domainName": "地球与大气物理",
   "color": "#57606f",
   "aliases": [
    "物理海洋学"
   ],
   "tags": [
    "海洋",
    "环流",
    "流体"
   ],
   "keywords": [
    "海洋环流",
    "温盐环流",
    "海流"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 海洋动力学\n\n## 概述\n\n海洋动力学研究**海洋环流、海浪与海洋过程**。大尺度环流由**风应力**（风生环流）与**浮力**（温盐环流）驱动，**地转平衡**（压强梯度力与科里奥利力平衡）支配海流。**温盐环流**（热盐环流）是贯穿全球的深层环流，输送大量热量，对气候至关重要。海洋是气候系统的巨大**热库与碳汇**，与大气耦合决定地球能量平衡。\n\n## 基本概念\n\n- **风生环流 / 温盐环流**：两类大尺度环流。\n- **地转平衡**：压强梯度力与科里奥利力平衡。\n- **海流 / 洋流**：黑潮、湾流等。\n- **海浪**：风驱动表面波。\n- **热库 / 碳汇**：海洋的储热与储碳作用。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n地转平衡（大尺度）：\n\n$$ f\\hat z\\times\\vec v=-\\frac1{\\rho}\\nabla p $$\n\n温盐环流：由密度（温度+盐度）差异驱动的深层环流。\n\n### 推导要点\n\n- **风生环流**：风应力驱动表层海流（埃克曼输运）。\n- **地转平衡**：大尺度海流由压强梯度与科里奥利力平衡（[[fluid-mechanics]]、[[non-inertial-frames]]）。\n- **温盐环流**：高纬冷却增密、下沉，形成深层环流。\n\n### 重要定理与推论\n\n- **埃克曼输运**：风驱动的表层输运。\n- **地转海流**：大尺度海流沿等压线。\n- **温盐环流**：全球热输送的深层环流。\n- **海气耦合**：海洋与大气交换热量与动量（[[climate-physics]]）。\n\n## 深化内容\n\n海洋动力学是 [[geophysics]]、[[fluid-mechanics]]、[[non-inertial-frames]]（科里奥利力）的应用，与 [[climate-physics]]（海气耦合）交叉。延伸阅读可参考 Vallis《Atmospheric and Oceanic Fluid Dynamics》、Gill《Atmosphere-Ocean Dynamics》、Pedlosky《Geophysical Fluid Dynamics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[geophysics]]、[[fluid-mechanics]]、[[non-inertial-frames]]（科里奥利力）。\n- 关联：[[turbulence]]、[[climate-physics]]（海气耦合）。\n\n## 前置知识\n\n- [[fluid-mechanics]]、[[non-inertial-frames]]、[[geophysics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 5,
     "note": "流体方程"
    },
    {
     "id": "geophysics",
     "name": "地球与大气物理",
     "weight": 5,
     "note": "地球系统分支"
    },
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 3,
     "note": "海气相互作用"
    },
    {
     "id": "climate-physics",
     "name": "气候物理",
     "weight": 3,
     "note": "海洋-大气耦合"
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 3,
     "note": "科里奥利力主导"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 2,
     "note": "海洋湍流"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "eigenvalue-problems",
   "name": "本征值问题",
   "nameEn": "Eigenvalue Problems",
   "domain": "math-methods",
   "domainName": "数学物理方法",
   "color": "#16a085",
   "aliases": [
    "斯图姆-刘维尔理论",
    "本征值理论"
   ],
   "tags": [
    "数学",
    "线性算子",
    "谱理论"
   ],
   "keywords": [
    "本征值",
    "本征函数",
    "正交完备性"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 本征值问题\n\n## 概述\n\n本征值问题研究线性算子 $L\\psi=\\lambda\\psi$ 的解，是数学物理方法的核心理论。**斯图姆-刘维尔理论**保证：在适当边界条件下，本征值是离散实数，本征函数族 $\\{\\psi_n\\}$ 关于权函数**正交完备**，因而任意函数可做**广义傅里叶展开**。有限维情形归结为矩阵对角化（[[linear-algebra]]），无限维情形发展为泛函分析的谱理论。量子力学的定态方程、振动简正模、能带理论都是本征值问题的直接实例。\n\n## 基本概念\n\n- **本征值 / 本征函数**：$L\\psi_n=\\lambda_n\\psi_n$ 的 $\\lambda_n$、$\\psi_n$。\n- **斯图姆-刘维尔方程**：$\\frac{d}{dx}\\big[p(x)y'\\big]+[\\lambda w(x)-q(x)]y=0$。\n- **权函数** $w(x)$、**正交性**、**完备性**。\n- **谱**：本征值的集合。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n本征值问题与广义傅里叶展开：\n\n$$ L\\psi_n=\\lambda_n\\psi_n,\\qquad f(x)=\\sum_n c_n\\psi_n(x),\\quad c_n=\\frac{\\langle\\psi_n,f\\rangle}{\\langle\\psi_n,\\psi_n\\rangle} $$\n\n正交性：\n\n$$ \\int_a^b w(x)\\psi_n(x)\\psi_m(x)dx=0\\quad(n\\ne m) $$\n\n### 推导要点\n\n- **正交性**：斯图姆-刘维尔算符在权 $w$ 下自伴，不同本征值的本征函数自动正交。\n- **完备性**：本征函数族构成 $L^2_w$ 的完备基（可证展开收敛）。\n- **瑞利商**：$\\lambda=\\frac{\\int(\\psi L\\psi)dx}{\\int\\psi^2dx}$，用于变分近似（瑞利-里兹法）。\n\n### 重要定理与推论\n\n- **斯图姆-刘维尔定理**：本征值离散实数、本征函数正交完备。\n- **本征函数展开**：广义傅里叶级数（[[special-functions]] 的应用）。\n- **量子能谱**：定态薛定谔方程本征值即能级（[[quantum-mechanics]]）。\n- **简正模 / 能带**：[[vibration-theory]]、[[band-theory]] 的本征值问题。\n\n## 深化内容\n\n本征值问题是[[linear-algebra]] 谱理论的无限维推广（自伴算符、希尔伯特空间），连接 [[separation-of-variables]]、[[special-functions]] 与 [[variational-calculus]]（瑞利-里兹法）。量子力学的测量公设（[[operators-and-measurement]]）正是本征值问题。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Courant & Hilbert《Methods of Mathematical Physics》、Sturm-Liouville 理论。\n\n## 与其他知识的联系\n\n- 紧密相关：[[special-functions]]（本征函数库）、[[separation-of-variables]]（构造途径）、[[linear-algebra]]（有限维基础）。\n- 物理：[[quantum-mechanics]]（定态方程与能谱）、[[vibration-theory]]（简正模）、[[band-theory]]（能带）。\n- 方法：[[mathematical-physics-methods]]、[[variational-calculus]]（瑞利-里兹法）。\n\n## 前置知识\n\n- [[linear-algebra]]、[[differential-equations]]、[[special-functions]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 5,
     "note": "有限维本征值问题即矩阵对角化"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "斯图姆-刘维尔本征值问题"
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 5,
     "note": "分离变量归结为本征值问题"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 5,
     "note": "本征函数族即特殊函数"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "定态薛定谔方程即本征值问题"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": "定态即本征值问题"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": "简正模即本征值问题"
    },
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 3,
     "note": "布洛赫本征值问题"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "green-function",
   "name": "格林函数",
   "nameEn": "Green's Functions",
   "domain": "math-methods",
   "domainName": "数学物理方法",
   "color": "#16a085",
   "aliases": [
    "格林函数法"
   ],
   "tags": [
    "数学",
    "方法",
    "点源",
    "线性算子"
   ],
   "keywords": [
    "点源",
    "基本解",
    "卷积",
    "传播子"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 格林函数\n\n## 概述\n\n格林函数是线性微分算子对**点源**的响应（基本解），是求解非齐次线性方程的统一方法。对线性方程 $Lu=f$，解就是\"各点源的响应按源的强度叠加\"：\n\n$$ u(x)=\\int G(x,x')f(x')dx' $$\n\n格林函数由 $LG(x,x')=\\delta(x-x')$ 加边界条件确定。格林函数在物理中无处不在：静电学的点电荷势（$1/r$）、量子力学的传播子、热传导的热核、散射理论的李普曼-施温格核，都是格林函数。\n\n## 基本概念\n\n- **点源**：$\\delta$ 函数。\n- **格林函数**：$LG(x,x')=\\delta(x-x')$ 的解。\n- **卷积叠加**：$u=G*f$。\n- **传播子**：含时格林函数（量子力学 $e^{-iHt/\\hbar}$）。\n- **格林算符**：$(E-H_0)^{-1}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n格林函数定义：\n\n$$ L_xG(x,x')=\\delta(x-x') $$\n\n解的卷积表示：\n\n$$ u(x)=\\int G(x,x')f(x')dx' $$\n\n静电学格林函数（泊松方程基本解）：\n\n$$ \\nabla^2G=-\\delta(\\vec r-\\vec r'),\\qquad G(\\vec r,\\vec r')=\\frac{1}{4\\pi|\\vec r-\\vec r'|} $$\n\n### 推导要点\n\n- **基本解的来源**：对泊松方程，球对称解 $\\nabla^2G=0\\ (r\\ne0)$ 得 $G=C/r$，由 $\\int\\nabla^2G\\,d\\tau=-1$（高斯定理）定出 $C=1/4\\pi$。\n- **叠加原理**：$L\\big(\\int Gf\\big)=\\int(LG)f=\\int\\delta f=f$。\n- **本征展开**：$G(x,x')=\\sum_n\\frac{\\psi_n(x)\\psi_n^*(x')}{\\lambda_n}$（用本征函数展开 $\\delta$）。\n\n### 重要定理与推论\n\n- **格林函数的对称性**：$G(x,x')=G(x',x)$（自伴算子）。\n- **库仑势是格林函数**：静电点电荷势即泊松方程基本解（[[electrostatics]]）。\n- **传播子是含时格林函数**：量子力学 [[path-integral]] 的传播子、场论传播子。\n- **李普曼-施温格方程**：散射理论的格林算符表述（[[scattering-theory]]）。\n\n## 深化内容\n\n格林函数是[[mathematical-physics-methods]]、[[boundary-value-problems]]、[[quantum-field-theory]]（传播子、费曼图）、[[scattering-theory]] 的共同工具。镜像格林函数、推迟/超前格林函数分别对应不同边界条件与因果性。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Jackson《Classical Electrodynamics》、Mathews & Walker《Mathematical Methods of Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electrostatics]]（库仑势）、[[path-integral]]（传播子）、[[scattering-theory]]（李普曼-施温格方程）。\n- 应用：[[heat-conduction]]（热核）、[[quantum-field-theory]]（场论传播子）、[[partial-differential-equations]]。\n- 方法：[[mathematical-physics-methods]]、[[integral-transforms]]（变换法求格林函数）。\n\n## 前置知识\n\n- [[partial-differential-equations]]、[[vector-calculus]]、[[fourier-analysis]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "格林函数法"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "线性非齐次 PDE 的通解方法"
    },
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 4,
     "note": "格林函数法"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 4,
     "note": "泊松方程格林函数"
    },
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 4,
     "note": "传播子即含时格林函数"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 4,
     "note": "李普曼-施温格方程"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 3,
     "note": "热传导方程格林函数"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "integral-transforms",
   "name": "积分变换",
   "nameEn": "Integral Transforms",
   "domain": "math-methods",
   "domainName": "数学物理方法",
   "color": "#16a085",
   "aliases": [
    "拉普拉斯变换",
    "积分变换法"
   ],
   "tags": [
    "数学",
    "方法",
    "变换"
   ],
   "keywords": [
    "傅里叶变换",
    "拉普拉斯变换",
    "卷积"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 积分变换\n\n## 概述\n\n积分变换把函数从\"原域\"映射到\"变换域\"，其核心价值在于把**微分运算化为代数运算**、**卷积化为乘积**，从而简化线性微分方程的求解。两种最基本变换：**傅里叶变换**（适用于全空间/稳态问题）与**拉普拉斯变换**（含衰减因子，天然适合初值问题）。在变换域中求解后，经**反演**回到原域。积分变换是信号处理、控制论、量子力学（表象变换）与数理方法的通用工具。\n\n## 基本概念\n\n- **傅里叶变换**：$\\hat f(k)=\\int f(x)e^{-ikx}dx$。\n- **拉普拉斯变换**：$F(s)=\\int_0^\\infty f(t)e^{-st}dt$。\n- **卷积定理**：$F[f*g]=\\hat f\\hat g$。\n- **反演**：由变换域回到原域的逆变换。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n傅里叶变换对：\n\n$$ \\hat f(k)=\\int_{-\\infty}^{\\infty}f(x)e^{-ikx}dx,\\qquad f(x)=\\frac1{2\\pi}\\int\\hat f(k)e^{ikx}dk $$\n\n拉普拉斯变换：\n\n$$ F(s)=\\int_0^\\infty f(t)e^{-st}dt $$\n\n**微分 → 乘法**：$\\widehat{f'}=ik\\hat f$、$\\mathcal L[f']=sF(s)-f(0)$。\n\n**卷积定理**：$\\widehat{f*g}=\\hat f\\,\\hat g$。\n\n### 推导要点\n\n- **微分化乘法**：对导数做变换，分部积分消去导数，得 $ik$（傅里叶）或 $s$（拉普拉斯）因子。\n- **卷积定理**：换元 $u=x-y$ 把二重积分分解为两个一维积分。\n- **拉普拉斯反演**：用复平面的围道积分（布朗维奇积分，[[complex-analysis]]）。\n\n### 重要定理与推论\n\n- **微分方程 → 代数方程**：线性常系数方程在变换域化为代数方程。\n- **卷积定理**：线性系统的响应 = 脉冲响应与输入的卷积。\n- **拉普拉斯变换的初值/终值定理**：$f(0)=\\lim_{s\\to\\infty}sF(s)$。\n- **表象变换**：量子力学位置-动量表象的傅里叶对偶（[[quantum-mechanics]]）。\n\n## 深化内容\n\n积分变换是[[fourier-analysis]] 与 [[complex-analysis]] 的应用，用于[[differential-equations]]、[[partial-differential-equations]]（[[mathematical-physics-methods]]）、信号处理与控制论。量子力学的**表象变换**、格林函数的变换域求解都是其应用。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Bracewell《The Fourier Transform and Its Applications》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[fourier-analysis]]、[[mathematical-physics-methods]]、[[differential-equations]]/[[partial-differential-equations]]（求解工具）。\n- 方法：[[complex-analysis]]（拉普拉斯反演）、[[green-function]]（变换域求格林函数）。\n- 物理：[[quantum-mechanics]]（表象变换）。\n\n## 前置知识\n\n- [[calculus]]、[[complex-analysis]]、[[fourier-analysis]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 5,
     "note": "傅里叶变换是积分变换的核心成员"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "傅里叶/拉普拉斯变换法"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 4,
     "note": "拉普拉斯变换的解析延拓与反演"
    },
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 4,
     "note": "把微分方程化为代数方程"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "位置-动量表象变换"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "mathematical-physics-methods",
   "name": "数学物理方法",
   "nameEn": "Methods of Mathematical Physics",
   "domain": "math-methods",
   "domainName": "数学物理方法",
   "color": "#16a085",
   "aliases": [
    "数理方法",
    "数学物理方程"
   ],
   "tags": [
    "数学",
    "物理",
    "偏微分方程",
    "特殊函数"
   ],
   "keywords": [
    "分离变量法",
    "本征值问题",
    "积分变换",
    "格林函数"
   ],
   "size": 178,
   "degree": 16,
   "pos": {
    "x": 0,
    "y": -25,
    "z": 0
   },
   "fixed": false,
   "body": "# 数学物理方法\n\n## 概述\n\n数学物理方法是沟通数学与物理的桥梁课程，系统研究三类典型偏微分方程（波动方程、热传导方程、拉普拉斯/泊松方程）的求解。其核心思想可概括为\"把偏微分方程化为可解的标准问题\"：**分离变量法**化为常微分方程本征值问题，**积分变换法**化为代数方程，**格林函数法**化为点源叠加。特殊函数（贝塞尔、勒让德、球谐）作为本征函数族贯穿始终。这门课是量子力学、电动力学、流体力学等一切场论课程的前置。\n\n## 基本概念\n\n- **三类标准方程**：波动方程（双曲）、热传导方程（抛物）、拉普拉斯方程（椭圆）。\n- **定解条件**：初值条件 + 边界条件（狄利克雷/诺伊曼/混合）。\n- **本征函数展开**：正交完备函数族的广义傅里叶级数。\n- **格林函数**：点源的基本解。\n- **特殊函数**：斯图姆-刘维尔问题的本征函数族。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n三类标准方程：\n\n$$ \\frac{\\partial^2u}{\\partial t^2}=c^2\\nabla^2u,\\qquad \\frac{\\partial u}{\\partial t}=\\alpha\\nabla^2u,\\qquad \\nabla^2u=0 $$\n\n**格林函数法**：\n\n$$ \\nabla^2G=-\\delta(\\vec r-\\vec r'),\\qquad u(\\vec r)=\\int G(\\vec r,\\vec r')\\rho(\\vec r')d^3r' $$\n\n### 推导要点\n\n- **分离变量**：设 $u=X(x)Y(y)Z(z)$，代入方程把偏微分化为常微分方程，分离常数即本征值。\n- **积分变换**：对某变量做傅里叶/拉普拉斯变换，把微分化为乘法，解变换域代数方程后反演。\n- **格林函数**：由 $LG=\\delta$ 解出基本解，$u=G*f$ 满足 $Lu=f$（叠加原理）。\n\n### 重要定理与推论\n\n- **唯一性定理**：定解条件给定时解唯一（[[boundary-value-problems]]）。\n- **正交完备性**：斯图姆-刘维尔本征函数族构成 $L^2_w$ 的完备正交基（[[eigenvalue-problems]]）。\n- **三类方程的定性差异**：波动传播、热扩散、椭圆平衡。\n- **特殊函数**：坐标系决定函数族（[[special-functions]]、[[spherical-harmonics]]）。\n\n## 深化内容\n\n数学物理方法的现代发展通向**泛函分析**（索伯列夫空间、弱解）、**分布理论**（$\\delta$ 函数严格化）与**渐近方法**（WKB、鞍点法）。它也是 [[quantum-mechanics]]（定态方程）、[[maxwell-equations]]（边值问题）与 [[heat-conduction]] 的直接工具。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Courant & Hilbert《Methods of Mathematical Physics》、王竹溪《特殊函数概论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[partial-differential-equations]]（对象）、[[eigenvalue-problems]]（理论核心）、[[green-function]]、[[integral-transforms]]、[[special-functions]]（工具）。\n- 物理应用：[[schrodinger-equation]]、[[maxwell-equations]]、[[heat-conduction]]、[[boundary-value-problems]]。\n- 数学基础：[[vector-calculus]]、[[complex-analysis]]、[[fourier-analysis]]、[[variational-calculus]]。\n\n## 前置知识\n\n- [[calculus]]、[[differential-equations]]、[[vector-calculus]]、[[complex-analysis]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 5,
     "note": "斯图姆-刘维尔本征值问题"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 5,
     "note": "格林函数法"
    },
    {
     "id": "integral-transforms",
     "name": "积分变换",
     "weight": 5,
     "note": "傅里叶/拉普拉斯变换法"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "数理方法的研究对象"
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 5,
     "note": "数理方法的核心技术之一"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 5,
     "note": "分离变量所得本征函数"
    },
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 5,
     "note": "球谐函数是核心工具"
    },
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 4,
     "note": ""
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 4,
     "note": ""
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 4,
     "note": ""
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": ""
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 4,
     "note": "求解方法"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 4,
     "note": ""
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 3,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "separation-of-variables",
   "name": "分离变量法",
   "nameEn": "Separation of Variables",
   "domain": "math-methods",
   "domainName": "数学物理方法",
   "color": "#16a085",
   "aliases": [
    "变量分离"
   ],
   "tags": [
    "数学",
    "方法",
    "偏微分方程"
   ],
   "keywords": [
    "本征函数",
    "本征值",
    "叠加原理"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 分离变量法\n\n## 概述\n\n分离变量法是求解线性偏微分方程最基本的方法：假设解可写成**单变量函数之积**，代入方程把偏微分方程化为若干**常微分方程**（本征值问题），再由边界条件确定本征值与本征函数，最后用**叠加原理**由初/边条件定出系数。分离变量法的可行性依赖于方程的可分离性与坐标系的对称性；不同坐标系分离出不同的特殊函数族，因此它也是理解特殊函数（贝塞尔、勒让德、球谐）的自然途径。\n\n## 基本概念\n\n- **分离假设**：$u(x,y,z)=X(x)Y(y)Z(z)$。\n- **分离常数**：分离过程中引入的常数（本征值）。\n- **本征值问题**：分离后的常微分方程 + 边界条件。\n- **叠加原理**：线性方程解的线性组合仍是解。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n三维拉普拉斯方程的分离（球坐标）：\n\n$$ \\nabla^2u=0\\quad\\Rightarrow\\quad u=R(r)\\Theta(\\theta)\\Phi(\\phi) $$\n\n径向、角向分离为：\n\n$$ \\frac{d^2\\Phi}{d\\phi^2}=-m^2\\Phi,\\qquad \\Theta(\\theta)=P_l^m(\\cos\\theta),\\qquad R(r)=Ar^l+Br^{-l-1} $$\n\n通解（叠加）：\n\n$$ u(r,\\theta,\\phi)=\\sum_{l=0}^{\\infty}\\sum_{m=-l}^{l}\\big(A_{lm}r^l+B_{lm}r^{-l-1}\\big)Y_{lm}(\\theta,\\phi) $$\n\n### 推导要点\n\n- **分离步骤**：代入 $u=R\\Theta\\Phi$，两边同除以 $u$，把依赖不同变量的项分离到方程两边，各等于一个常数。\n- **角向方程**：$\\Phi''+m^2\\Phi=0$（三角函数），$\\Theta$ 满足连带勒让德方程（$l(l+1)$ 本征值）。\n- **系数确定**：用本征函数的正交性 $\\int Y_{lm}^*Y_{l'm'}d\\Omega=\\delta_{ll'}\\delta_{mm'}$ 定出 $A_{lm},B_{lm}$。\n\n### 重要定理与推论\n\n- **斯图姆-刘维尔框架**：分离变量产生的常微分方程都是斯图姆-刘维尔问题（[[eigenvalue-problems]]）。\n- **坐标系的对应**：直角→三角/双曲、球→球谐、柱→贝塞尔。\n- **定态薛定谔方程**：量子力学定态就是分离变量（[[schrodinger-equation]]）。\n- **边界条件决定本征值**：如无限势阱 $k_n=n\\pi/L$。\n\n## 深化内容\n\n分离变量法是 [[mathematical-physics-methods]] 的核心，用于 [[electromagnetic-waves]]（波导模式）、[[heat-conduction]]（热传导）、[[schrodinger-equation]]（定态）。不可分离系统需积分变换或格林函数。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Griffiths《电动力学导论》第三章、王竹溪《特殊函数概论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[eigenvalue-problems]]（本征值与本征函数）、[[special-functions]]（本征函数库）、[[spherical-harmonics]]。\n- 应用：[[schrodinger-equation]]（定态问题）、[[electromagnetic-waves]]（波导模式）、[[heat-conduction]]。\n- 基础：[[mathematical-physics-methods]]、[[partial-differential-equations]]。\n\n## 前置知识\n\n- [[partial-differential-equations]]、[[differential-equations]]、[[eigenvalue-problems]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 5,
     "note": "分离变量归结为本征值问题"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "数理方法的核心技术之一"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 5,
     "note": "坐标系决定所得特殊函数族"
    },
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 4,
     "note": "主要求解方法"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": "定态问题即分离变量"
    },
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 4,
     "note": ""
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "spherical-harmonics",
   "name": "球谐函数",
   "nameEn": "Spherical Harmonics",
   "domain": "math-methods",
   "domainName": "数学物理方法",
   "color": "#16a085",
   "aliases": [
    "球函数"
   ],
   "tags": [
    "数学",
    "特殊函数",
    "角动量"
   ],
   "keywords": [
    "勒让德函数",
    "角量子数",
    "球对称"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 球谐函数\n\n## 概述\n\n球谐函数 $Y_{lm}(\\theta,\\phi)$ 是球面拉普拉斯算符 $\\nabla^2_\\Omega$ 的**本征函数**，构成球面上正交完备的基，是处理球对称问题（氢原子、中心力场、多极展开）的角向标准基。它们同时是**轨道角动量算符**的本征函数（$l$ 与 $m$ 分别对应角动量平方与 $z$ 分量），因此也是旋转群 $SO(3)$ 不可约表示的基。球谐函数统一了特殊函数、角动量理论与球对称边值问题。\n\n## 基本概念\n\n- **球面拉普拉斯算符**：$\\nabla^2_\\Omega$。\n- **角量子数**：$l=0,1,2,\\dots$、磁量子数 $m=-l,\\dots,l$。\n- **连带勒让德函数** $P_l^m(\\cos\\theta)$：$\\Theta$ 方程的解。\n- **正交归一**：$\\int Y_{lm}^*Y_{l'm'}d\\Omega=\\delta_{ll'}\\delta_{mm'}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n本征方程与正交性：\n\n$$ \\nabla^2_\\Omega Y_{lm}=-l(l+1)Y_{lm},\\qquad \\int Y_{lm}^*Y_{l'm'}\\,d\\Omega=\\delta_{ll'}\\delta_{mm'} $$\n\n显式表达式：\n\n$$ Y_{lm}(\\theta,\\phi)=\\sqrt{\\frac{2l+1}{4\\pi}\\frac{(l-m)!}{(l+m)!}}\\,P_l^m(\\cos\\theta)\\,e^{im\\phi} $$\n\n加法公式：\n\n$$ P_l(\\cos\\gamma)=\\frac{4\\pi}{2l+1}\\sum_{m=-l}^{l}Y_{lm}^*(\\hat r_1)Y_{lm}(\\hat r_2) $$\n\n### 推导要点\n\n- **分离变量**：对球坐标拉普拉斯方程分离 $\\Theta(\\theta)\\Phi(\\phi)$，$\\Phi=e^{im\\phi}$、$\\Theta$ 满足连带勒让德方程。\n- **本征值条件**：$\\Theta$ 在 $\\theta=0,\\pi$ 处正则要求 $l(l+1)$ 本征值、$m$ 取整数。\n- **正交性**：角动量算符自伴性（或勒让德多项式正交性）给出。\n\n### 重要定理与推论\n\n- **角动量本征函数**：$Y_{lm}$ 是 $\\hat L^2,\\hat L_z$ 的共同本征函数（[[angular-momentum-qm]]）。\n- **完备性**：任意球面函数可展开 $f(\\theta,\\phi)=\\sum_{lm}c_{lm}Y_{lm}$。\n- **多极展开**：$1/|\\vec r-\\vec r'|$ 的勒让德展开（[[multipole-expansion]]）。\n- **氢原子角向**：氢原子波函数的角向部分（[[hydrogen-atom]]）。\n\n## 深化内容\n\n球谐函数是 $SO(3)$ 不可约表示 $D^l$ 的基，联系 [[group-theory]] 与 [[angular-momentum-qm]]。其应用遍及 [[electromagnetic-radiation]]（多极）、[[hydrogen-atom]]、分子轨道与地球物理（重力/磁场球谐分析）。自旋球谐函数推广到自旋粒子。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Sakurai《现代量子力学》、Jackson《Classical Electrodynamics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[angular-momentum-qm]]（本征函数）、[[hydrogen-atom]]、[[multipole-expansion]]（多极矩）。\n- 应用：[[electromagnetic-radiation]]（辐射多极展开）。\n- 方法：[[separation-of-variables]]、[[special-functions]]。\n\n## 前置知识\n\n- [[special-functions]]、[[separation-of-variables]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 5,
     "note": "球谐函数是角动量的本征函数"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 5,
     "note": "氢原子角向部分"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "球谐函数是数学物理方法的核心工具"
    },
    {
     "id": "multipole-expansion",
     "name": "多极展开",
     "weight": 5,
     "note": "球谐函数作为展开基"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 5,
     "note": "球谐函数是特殊函数的重要成员"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 4,
     "note": "多极展开"
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 4,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "calculus",
   "name": "微积分",
   "nameEn": "Calculus",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "高等数学",
    "数学分析"
   ],
   "tags": [
    "数学",
    "微分",
    "积分",
    "极限"
   ],
   "keywords": [
    "导数",
    "积分",
    "极限",
    "级数",
    "泰勒"
   ],
   "size": 138,
   "degree": 12,
   "pos": {
    "x": 0,
    "y": -40,
    "z": 0
   },
   "fixed": false,
   "body": "# 微积分\n\n## 概述\n\n微积分研究函数的**变化率**（微分）与**累积量**（积分）及其互逆关系，是近代数学与全部定量科学（尤其是物理学）的共同语言。牛顿与莱布尼茨在 17 世纪各自独立建立微积分，后经柯西、魏尔斯特拉斯、黎曼等人以 $\\varepsilon$-$\\delta$ 语言严格化，奠定现代分析的基石。其思想核心可概括为两点：以**极限**精确刻画\"无限接近\"，以及**微积分基本定理**揭示微分与积分互为逆运算。\n\n## 基本概念\n\n- **极限**：$\\lim_{x\\to a}f(x)=L$ 表示当 $x$ 无限接近 $a$（但不必等于 $a$）时 $f(x)$ 无限接近 $L$；严格定义用 $\\varepsilon$-$\\delta$ 语言。\n- **连续**：$f$ 在 $a$ 处连续 $\\iff \\lim_{x\\to a}f(x)=f(a)$。\n- **导数**：函数在某点的瞬时变化率\n\n$$ f'(a) = \\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h} $$\n\n- **微分**：$df = f'(x)\\,dx$，是函数增量的线性主部。\n- **定积分**：黎曼和的极限 $\\int_a^b f(x)\\,dx = \\lim_{\\|P\\|\\to0}\\sum_i f(x_i^*)\\Delta x_i$，几何上是有符号面积。\n- **原函数**：若 $F'=f$，则 $F$ 称为 $f$ 的原函数。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n导数基本运算法则：\n\n$$ (f\\pm g)'=f'\\pm g',\\qquad (fg)'=f'g+fg',\\qquad \\Big(\\frac{f}{g}\\Big)'=\\frac{f'g-fg'}{g^2} $$\n\n复合函数求导的**链式法则**：\n\n$$ \\frac{\\mathrm d}{\\mathrm dx}f\\big(g(x)\\big)=f'\\big(g(x)\\big)\\,g'(x) $$\n\n**微积分基本定理**（牛顿-莱布尼茨公式）：\n\n$$ \\int_a^b f(x)\\,\\mathrm dx = F(b)-F(a),\\qquad F'=f $$\n\n其第一部分断言\"变上限积分\"是原函数：\n\n$$ \\frac{\\mathrm d}{\\mathrm dx}\\int_a^x f(t)\\,\\mathrm dt = f(x) $$\n\n### 推导要点\n\n- **链式法则**：由差分比恒等式 $\\dfrac{\\Delta f}{\\Delta x}=\\dfrac{\\Delta f}{\\Delta u}\\cdot\\dfrac{\\Delta u}{\\Delta x}$ 取极限得到。\n- **微积分基本定理**：对分割 $a=x_0<\\dots<x_n=b$ 用拉格朗日中值定理逐段有 $F(x_i)-F(x_{i-1})=f(c_i)\\Delta x_i$，求和后令 $\\|P\\|\\to0$ 即得 $\\int_a^b f=F(b)-F(a)$。\n- **泰勒公式**：光滑函数在 $a$ 点展开为多项式加余项\n\n$$ f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x) $$\n\n余项 $R_n$ 有拉格朗日型与积分型两种表示。\n\n### 重要定理与推论\n\n- **微分中值定理**（拉格朗日）：存在 $c\\in(a,b)$ 使 $f'(c)=\\dfrac{f(b)-f(a)}{b-a}$；推论——导数处处为零则函数为常数。\n- **泰勒公式**：函数在一点的 $n$ 阶多项式逼近，是物理中\"小量展开\"与数值近似的总框架。\n- **洛必达法则**：对 $\\frac00$、$\\frac\\infty\\infty$ 型不定式，在条件满足时 $\\lim f/g=\\lim f'/g'$。\n- **换元积分** $\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du$ 与**分部积分** $\\int u\\,dv=uv-\\int v\\,du$，是积分计算的两大引擎。\n- **广义积分**：无穷区间或无界函数积分的收敛性，是傅里叶变换、拉普拉斯变换的前提。\n\n## 深化内容\n\n微积分的严格化发展为**实分析**（$\\varepsilon$-$\\delta$ 极限、一致连续、紧性、一致收敛），函数空间 $C[a,b]$、$L^p$ 的完备性（巴拿赫空间）成为泛函分析的开端。**勒贝格积分**把黎曼积分推广到可测函数，使极限与积分可交换（控制收敛定理），是概率论、调和分析与量子力学（希尔伯特空间 $L^2$）的严格基础。多元微积分进一步引出格林、高斯、斯托克斯公式，由**微分形式**统一为 $\\int_{\\partial\\Omega}\\omega=\\int_\\Omega d\\omega$。延伸阅读可参考卓里奇《数学分析》、Apostol《Mathematical Analysis》、Spivak《Calculus》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[differential-equations]]（物理定律的标准表达）、[[vector-calculus]]（微积分到场论的推广）。\n- 相关：[[fourier-analysis]] 与 [[complex-analysis]]（级数/积分理论的自然延伸）、[[variational-calculus]]（极值问题推广到泛函）。\n- 应用：[[newtonian-mechanics]]（运动方程）、[[electrostatics]]（高斯定律积分形式）、[[quantum-mechanics]]（概率归一与期望）都以微积分为语言。\n\n## 前置知识\n\n- [[set-theory]]（实数系与极限的严格基础）",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 5,
     "note": "微分方程是微积分的直接应用"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 5,
     "note": "矢量微积分把微积分推广到场"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 4,
     "note": "复分析是微积分在复数域的自然推广"
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": "级数与积分在调和分析中的推广"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 4,
     "note": "多元微积分的自然延伸与工具"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": "经典力学的数学语言"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 4,
     "note": "泛函分析意义上的微积分推广"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 3,
     "note": ""
    },
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "set-theory",
     "name": "集合论与数学基础",
     "weight": 3,
     "note": "实数系的严格基础"
    },
    {
     "id": "topology",
     "name": "拓扑学",
     "weight": 2,
     "note": "连续性的推广"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "complex-analysis",
   "name": "复变函数",
   "nameEn": "Complex Analysis",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "复分析"
   ],
   "tags": [
    "数学",
    "复数",
    "解析函数"
   ],
   "keywords": [
    "柯西积分",
    "留数",
    "解析延拓",
    "保角映射"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 复变函数\n\n## 概述\n\n复变函数研究复平面上的解析函数。解析性（可复导）远比实可导苛刻：它蕴含无穷次可导、局部展开为幂级数、以及**柯西积分定理**等一系列\"刚性\"性质。复分析在物理中的核心价值有二：一是**留数定理**提供计算实定积分与反常积分的统一利器；二是**保角映射**用于求解二维位势问题（静电、流体）。复变方法还是拉普拉斯变换、色散关系与量子场论围道积分的语言。\n\n## 基本概念\n\n- **复数** $z=x+iy$，模 $|z|$，辐角 $\\arg z$，共轭 $\\bar z$；欧拉公式 $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$。\n- **解析函数**：在开集内处处可复导；等价于满足**柯西-黎曼方程** $\\partial u/\\partial x=\\partial v/\\partial y,\\ \\partial u/\\partial y=-\\partial v/\\partial x$（$f=u+iv$）。\n- **奇点**：可去奇点、极点（$m$ 阶）、本性奇点；解析延拓沿路径扩展定义域。\n- **留数**：$f$ 在孤立奇点 $z_0$ 的洛朗展开中 $(z-z_0)^{-1}$ 项系数。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**柯西积分定理**：解析函数沿闭围道积分为零\n\n$$ \\oint_\\gamma f(z)\\,\\mathrm dz = 0 $$\n\n**柯西积分公式**（及其导数形式）：\n\n$$ f(z_0)=\\frac{1}{2\\pi i}\\oint_\\gamma\\frac{f(z)}{z-z_0}\\,dz,\\qquad f^{(n)}(z_0)=\\frac{n!}{2\\pi i}\\oint_\\gamma\\frac{f(z)}{(z-z_0)^{n+1}}\\,dz $$\n\n**留数定理**：\n\n$$ \\oint_\\gamma f(z)\\,\\mathrm dz = 2\\pi i\\sum_{k}\\mathrm{Res}(f,z_k) $$\n\n### 推导要点\n\n- **柯西积分定理**：对 $f\\,dz=(u+iv)(dx+idy)$ 用格林公式，结合柯西-黎曼方程，被积表达式成为全微分，闭路积分为零。\n- **柯西积分公式**：对 $f(z)/(z-z_0)$ 在挖去 $z_0$ 的围道用柯西定理，小圆贡献取极限 $z\\to z_0$ 得到 $2\\pi i f(z_0)$。\n- **留数定理**：把 $f$ 展开为洛朗级数，逐项积分，只有 $-1$ 次项贡献 $2\\pi i$。\n\n### 重要定理与推论\n\n- **解析 ⇔ 洛朗/泰勒展开**：解析函数局部等于收敛幂级数。\n- **刘维尔定理**：全平面有界的整函数必为常数；由此可证**代数基本定理**。\n- **留数计算实积分**：$\\int_{-\\infty}^{\\infty}R(x)dx$ 用上半平面围道，$\\int_0^{2\\pi}R(\\cos\\theta,\\sin\\theta)d\\theta$ 用单位圆围道。\n- **儒歇定理与辐角原理**：用于根的计数。\n\n## 深化内容\n\n复分析通向**黎曼面**与**多值函数**的单值化（$\\sqrt{z}$、$\\ln z$），是弦理论、共形场论中重要工具；**共形映射**把任意单连通域共形等价于单位圆（黎曼映射定理），是二维流体与静电边值问题的标准解法。**色散关系**（克拉默斯-克朗尼希）把因果系统的实部与虚部联系起来。延伸阅读可参考阿尔福斯《复分析》、Brown & Churchill《Complex Variables》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[integral-transforms]]（拉普拉斯变换的围道反演）、[[special-functions]]（留数法求积分）。\n- 相关：[[fourier-analysis]]、[[electromagnetic-waves]]（复振幅）、[[quantum-mechanics]]（谐振子围道积分）。\n- 应用：[[electrostatics]] 与 [[fluid-mechanics]] 的二维位势问题用保角映射求解。\n\n## 前置知识\n\n- [[calculus]]、[[set-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 4,
     "note": "复分析是微积分在复数域的自然推广"
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": "拉普拉斯变换用复平面分析"
    },
    {
     "id": "integral-transforms",
     "name": "积分变换",
     "weight": 4,
     "note": "拉普拉斯变换的解析延拓与反演"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 4,
     "note": "留数法求特殊函数积分"
    },
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 2,
     "note": "二维保角映射"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 2,
     "note": "复振幅与波阻抗"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 2,
     "note": "二维保角映射"
    }
   ],
   "softLinks": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "differential-equations",
   "name": "常微分方程",
   "nameEn": "Ordinary Differential Equations",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "ODE"
   ],
   "tags": [
    "数学",
    "微分方程",
    "动力系统"
   ],
   "keywords": [
    "初值问题",
    "相空间",
    "稳定性",
    "常系数",
    "矩阵指数"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 常微分方程\n\n## 概述\n\n常微分方程（ODE）研究含单变量未知函数及其导数的方程，是经典力学、电路、化学反应与动力系统的数学骨架。初值问题的一般形式为\n\n$$ \\frac{\\mathrm d\\vec y}{\\mathrm dt} = \\vec f(\\vec y, t),\\qquad \\vec y(t_0)=\\vec y_0 $$\n\n线性常系数方程可用矩阵指数 $e^{At}$ 求解，解的结构由特征值决定（增长/衰减/振荡）。对非线性系统，**相空间分析**与**稳定性理论**（李雅普诺夫方法）是刻画长期行为的基本工具。\n\n## 基本概念\n\n- **阶**：方程中出现的最高阶导数的阶数。\n- **线性/非线性**：关于未知函数及其导数是否线性。\n- **初值问题 / 边值问题**：给定初始条件或边界条件求特解。\n- **通解 / 特解**：含独立积分常数的解族 / 满足定解条件的单个解。\n- **相空间**：以状态变量为坐标的空间，解曲线为相轨迹。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**一阶线性方程**（积分因子法）：\n\n$$ y'+p(x)y=q(x) \\;\\Rightarrow\\; y=e^{-\\int p}\\Big[\\int q\\,e^{\\int p}\\,dx+C\\Big] $$\n\n**可分离变量**：$y'=g(x)h(y) \\Rightarrow \\int\\frac{dy}{h(y)}=\\int g(x)\\,dx$。\n\n**常系数线性方程**：特征方程\n\n$$ a_n\\lambda^n+\\cdots+a_0=0 $$\n\n其根决定通解结构（实根→指数项，复根→振荡项，重根→乘幂次）。\n\n**一阶线性方程组**（矩阵指数）：\n\n$$ \\dot{\\vec x}=A\\vec x \\;\\Rightarrow\\; \\vec x(t)=e^{At}\\vec x_0 $$\n\n### 推导要点\n\n- **积分因子**：方程乘以 $\\mu=e^{\\int p\\,dx}$ 后左端成为 $(\\mu y)'$，两边积分即得通解。\n- **常数变易法**：先求齐次解 $y_h$，再把常数换成函数 $u(x)$ 代入非齐次方程确定 $u$。\n- **特征方程**：设 $y=e^{\\lambda x}$ 代入常系数方程，得到关于 $\\lambda$ 的代数方程（把微分方程化为代数问题）。\n- **矩阵指数**：若 $A=PDP^{-1}$，则 $e^{At}=Pe^{Dt}P^{-1}$（$D$ 对角时逐项 $e^{\\lambda_i t}$）。\n\n### 重要定理与推论\n\n- **存在唯一性定理**（Picard–Lindelöf）：若 $\\vec f$ 对 $\\vec y$ 满足利普希茨条件，则初值问题局部存在唯一解。\n- **线性叠加原理**：线性齐次方程解的线性组合仍是解，通解是基本解组的线性组合。\n- **二阶常系数方程**：$y''+py'+qy=0$ 的判别式 $\\Delta=p^2-4q$ 分三类（过阻尼/临界/欠阻尼），直接对应[[vibration-theory]] 的阻尼振动。\n- **共振**：非齐次项频率等于固有频率时解含 $t\\sin\\omega t$ 型增长项，振幅线性增大。\n\n## 深化内容\n\n现代理论把 ODE 提升为**动力系统**：相空间上的流、不动点分类（结点/焦点/鞍点）、极限环与分岔、结构稳定性，以及**混沌**（对初值敏感依赖，见 [[chaos-theory]]）。**摄动方法**（正则摄动、多重尺度、WKB）处理小参数非线性方程；**数值方法**（龙格-库塔等）是求解非解析方程的通用手段。延伸阅读可参考 Arnold《常微分方程》、Strogatz《Nonlinear Dynamics and Chaos》、Bender & Orszag《Advanced Mathematical Methods》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[newtonian-mechanics]] 的运动方程是二阶 ODE；[[vibration-theory]] 与 [[circuits]] 用线性 ODE 描述振荡。\n- 相关：[[partial-differential-equations]] 是场方程的载体；[[chaos-theory]] 研究非线性 ODE 的长期行为。\n- 方法：[[linear-algebra]]（特征值/矩阵指数）、[[special-functions]]（贝塞尔/勒让德方程）。\n\n## 前置知识\n\n- [[calculus]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 5,
     "note": "微分方程由微积分发展而来"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 5,
     "note": "非线性 ODE 与混沌"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 5,
     "note": "牛顿第二定律即二阶常微分方程"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "偏微分方程是 ODE 向多变量情形的推广"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 5,
     "note": "振子系统归结为线性 ODE"
    },
    {
     "id": "circuits",
     "name": "电路理论",
     "weight": 4,
     "note": "电路方程"
    },
    {
     "id": "integral-transforms",
     "name": "积分变换",
     "weight": 4,
     "note": "把微分方程化为代数方程"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 4,
     "note": "线性方程组用矩阵方法求解"
    },
    {
     "id": "neuroscience-physics",
     "name": "神经科学物理",
     "weight": 4,
     "note": "神经动力学方程"
    }
   ],
   "softLinks": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 3,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "differential-geometry",
   "name": "微分几何",
   "nameEn": "Differential Geometry",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "黎曼几何",
    "流形"
   ],
   "tags": [
    "数学",
    "几何",
    "流形"
   ],
   "keywords": [
    "流形",
    "切空间",
    "黎曼度量",
    "测地线",
    "曲率"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 微分几何\n\n## 概述\n\n微分几何用微积分研究**流形**——局部可\"拉平\"（同胚于欧氏空间）的几何对象。它提供坐标无关的语言，使广义相对论能把引力描述为时空的弯曲，也使规范场论能用纤维丛表述。核心对象：切空间、向量场、黎曼度量、联络、测地线与曲率。微分几何的深刻之处在于区分**内蕴**性质（只依赖度量，如高斯曲率）与**外蕴**性质（依赖嵌入方式）。\n\n## 基本概念\n\n- **流形**：局部同胚于 $\\mathbb R^n$ 的拓扑空间，配以光滑坐标图册。\n- **切空间与切丛**：流形一点处的切向量全体；向量场是切丛的截面。\n- **黎曼度量**：正定对称张量 $g_{\\mu\\nu}$，赋予长度与角度 $ds^2=g_{\\mu\\nu}dx^\\mu dx^\\nu$。\n- **联络**：规定向量沿曲线\"平行移动\"的规则（列维-奇维塔联络由度规唯一确定）。\n- **测地线**：局部最短/最直的曲线，即加速度（协变意义下）为零。\n- **曲率**：黎曼张量 $R^\\rho{}_{\\sigma\\mu\\nu}$、里奇张量 $R_{\\mu\\nu}$、标量曲率 $R$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**测地线方程**：\n\n$$ \\frac{\\mathrm d^2 x^\\mu}{\\mathrm d\\tau^2} + \\Gamma^\\mu_{\\rho\\sigma}\\frac{\\mathrm dx^\\rho}{\\mathrm d\\tau}\\frac{\\mathrm dx^\\sigma}{\\mathrm d\\tau} = 0 $$\n\n**黎曼曲率张量**（见 [[tensor-calculus]]）与**测地偏离方程**：\n\n$$ \\frac{D^2\\xi^\\mu}{D\\tau^2} = -R^\\mu{}_{\\nu\\rho\\sigma}u^\\nu u^\\rho \\xi^\\sigma $$\n\n### 推导要点\n\n- **测地线**：对弧长泛函 $\\int\\sqrt{g_{\\mu\\nu}\\dot x^\\mu\\dot x^\\nu}\\,d\\tau$ 用欧拉-拉格朗日方程（[[variational-calculus]]）得到测地线方程。\n- **曲率的来源**：平行移动沿闭合回路后向量发生旋转，转角与回路面积之比在无穷小极限给出黎曼曲率；等价于协变导数的对易子 $[\\nabla_\\mu,\\nabla_\\nu]$。\n- **测地偏离方程**：两条邻近测地线间分离矢量 $\\xi^\\mu$ 的二次导与曲率成正比，是\"潮汐力\"的几何表达。\n\n### 重要定理与推论\n\n- **高斯绝妙定理**：二维曲面的高斯曲率 $K$ 是内蕴量（只依赖度量，不依赖嵌入），由 $K=R/2$ 给出。\n- **高斯-博内定理**：$\\int_\\Sigma K\\,dA+\\int_{\\partial\\Sigma}k_g\\,ds=2\\pi\\chi(\\Sigma)$，把曲率与拓扑（欧拉示性数）联系。\n- **比安基恒等式**：$\\nabla_{[\\lambda}R_{\\mu\\nu]\\rho\\sigma}=0$，蕴含爱因斯坦张量守恒。\n- **李维-奇维塔联络**：唯一无挠且度规相容的联络。\n\n## 深化内容\n\n微分几何的现代发展包括**纤维丛与特征类**（规范场论、拓扑量子数的数学语言）、**辛几何**（哈密顿力学的相空间）、**复几何与卡拉比-丘流形**（弦理论紧化）、以及**指标定理**（阿蒂亚-辛格，联系分析与拓扑）。这些结构使微分几何成为现代理论物理（引力、规范场、弦）的核心数学。延伸阅读可参考 do Carmo《Riemannian Geometry》、Nakahara《Geometry, Topology and Physics》、Frankel《The Geometry of Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[general-relativity]]（引力=时空几何）、[[tensor-calculus]]（计算语言）。\n- 相关：[[topology]]（流形的整体结构）、[[gauge-field-theory]]（纤维丛/联络的规范理论）。\n- 现代物理：[[hamiltonian-mechanics]]（辛结构）、[[string-theory]]（卡拉比-丘流形）。\n\n## 前置知识\n\n- [[calculus]]、[[linear-algebra]]、[[tensor-calculus]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 5,
     "note": "曲率"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "引力几何化为弯曲时空"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 5,
     "note": "黎曼几何以张量分析为计算语言"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 4,
     "note": "纤维丛与规范联络"
    },
    {
     "id": "loop-quantum-gravity",
     "name": "圈量子引力",
     "weight": 4,
     "note": "联络与变量"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 4,
     "note": "卡拉比-丘流形"
    },
    {
     "id": "topology",
     "name": "拓扑学",
     "weight": 4,
     "note": "流形概念来源于拓扑"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 3,
     "note": "微分形式统一了梯度/散度/旋度"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 2,
     "note": "相空间的辛结构与几何化"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "fourier-analysis",
   "name": "傅里叶分析",
   "nameEn": "Fourier Analysis",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "傅里叶变换",
    "傅里叶级数"
   ],
   "tags": [
    "数学",
    "调和分析",
    "信号"
   ],
   "keywords": [
    "傅里叶级数",
    "傅里叶变换",
    "频谱",
    "卷积"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 傅里叶分析\n\n## 概述\n\n傅里叶分析把任意（足够好的）函数分解为简谐振荡（平面波）的叠加，是\"频谱\"观念的数学基础。周期函数用**傅里叶级数**展开，非周期函数用**傅里叶变换**展开；两者由周期趋于无穷的极限联系。傅里叶分析在物理中的地位无可替代：它把微分方程化为代数方程（线性系统分析）、给出位置-动量表象对偶（量子力学）、并把衍射、色散、滤波等现象统一到频域视角。\n\n## 基本概念\n\n- **傅里叶系数**：周期函数在正交基 $\\{e^{inx}\\}$ 上的投影\n\n$$ c_n=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}f(x)e^{-inx}\\,dx $$\n\n- **傅里叶变换对**：\n\n$$ \\hat f(k)=\\int_{-\\infty}^{\\infty}f(x)e^{-ikx}\\,dx,\\qquad f(x)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}\\hat f(k)e^{ikx}\\,dk $$\n\n- **卷积**：$(f*g)(x)=\\int f(y)g(x-y)\\,dy$，描述线性系统的叠加。\n- **频谱**：$\\hat f(k)$ 刻画各频率分量的幅度/相位。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n傅里叶级数（指数形式）：\n\n$$ f(x)=\\sum_{n=-\\infty}^{\\infty}c_n e^{inx},\\qquad c_n=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}f(x)e^{-inx}\\,dx $$\n\n傅里叶变换（正/逆）：\n\n$$ \\hat f(k)=\\int_{-\\infty}^{\\infty}f(x)e^{-ikx}\\,dx,\\qquad f(x)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}\\hat f(k)e^{ikx}\\,dk $$\n\n**帕塞瓦尔定理**（能量守恒于频域）：\n\n$$ \\int_{-\\infty}^{\\infty}|f(x)|^2\\,dx = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}|\\hat f(k)|^2\\,dk $$\n\n### 推导要点\n\n- **系数的正交性**：由 $\\int_{-\\pi}^{\\pi}e^{i(m-n)x}dx=2\\pi\\delta_{mn}$，两边乘 $e^{-imx}$ 积分即得 $c_m$。\n- **变换的极限来源**：令周期 $L\\to\\infty$、$n/L\\to k$，傅里叶级数的求和过渡为积分，得到变换对。\n- **卷积定理**：把 $\\widehat{f*g}=\\int\\int f(y)g(x-y)e^{-ikx}dxdy$ 换元 $u=x-y$ 分解为两个一维积分，得 $\\widehat{f*g}=\\hat f\\,\\hat g$。\n\n### 重要定理与推论\n\n- **卷积定理**：$\\widehat{f*g}=\\hat f\\,\\hat g$，时域卷积对应频域乘积，是滤波器设计的基石。\n- **微分 → 乘法**：$\\widehat{f'}=ik\\hat f$，把微分方程化为代数方程。\n- **不确定性关系**：$\\Delta x\\,\\Delta k\\ge 1/2$（信号时宽与带宽不可同时任意小）。\n- **狄拉克梳与采样定理**：均匀采样的傅里叶变换是频谱的周期复制（奈奎斯特采样定理）。\n\n## 深化内容\n\n傅里叶分析的一般化是**调和分析**：在群与齐性空间上定义卷积与变换（如 $L^2(\\mathbb R)$ 上的傅里叶变换、局部紧群上的庞特里亚金对偶）。**分布（广义函数）理论**把傅里叶变换推广到缓增分布，使 $\\delta$ 函数、平面波等严格化。**快速傅里叶变换（FFT）**把计算复杂度从 $O(N^2)$ 降到 $O(N\\log N)$，是数值信号处理的基础。延伸阅读可参考 Stein & Shakarchi《Fourier Analysis》、Bracewell《The Fourier Transform and Its Applications》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[integral-transforms]]（统一傅里叶/拉普拉斯变换）、[[partial-differential-equations]]（频谱展开求解）。\n- 物理应用：[[quantum-mechanics]]（位置-动量表象对偶，$\\Delta x\\Delta p$ 不确定关系）、[[optics]]（衍射）、[[electromagnetic-waves]]（频域色散）。\n- 相关：[[mathematical-physics-methods]]。\n\n## 前置知识\n\n- [[calculus]]、[[complex-analysis]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "integral-transforms",
     "name": "积分变换",
     "weight": 5,
     "note": "傅里叶变换是积分变换的一种"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 4,
     "note": "级数与积分理论是其基础"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 4,
     "note": "拉普拉斯变换用复平面分析"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": "线性 PDE 的标准解法"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "动量与位置表象互为傅里叶对偶"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 4,
     "note": "波动用频谱描述"
    },
    {
     "id": "wave-optics",
     "name": "波动光学",
     "weight": 4,
     "note": "夫琅禾费衍射即傅里叶变换"
    },
    {
     "id": "acoustics",
     "name": "声学",
     "weight": 3,
     "note": "频谱"
    }
   ],
   "softLinks": [
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 3,
     "note": "信号频谱分析"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 3,
     "note": "夫琅禾费衍射即空间傅里叶变换"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "group-theory",
   "name": "群论",
   "nameEn": "Group Theory",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "对称性",
    "李群"
   ],
   "tags": [
    "数学",
    "对称性",
    "群表示"
   ],
   "keywords": [
    "群",
    "表示论",
    "李群",
    "对称变换",
    "不可约表示"
   ],
   "size": 138,
   "degree": 12,
   "pos": null,
   "fixed": false,
   "body": "# 群论\n\n## 概述\n\n群论研究**对称性**的代数结构：一个群是带二元运算、满足封闭性/结合律/存在单位元/存在逆元的集合。对物理最重要的是**李群**（连续对称群，如旋转群 $SO(3)$、酉群 $SU(n)$、洛伦兹群）与**表示论**——把群元素实现为作用在向量空间上的矩阵。群论之所以是物理的核心语言，在于**诺特定理**：每个连续对称性对应一个守恒量（时间平移→能量、空间平移→动量、旋转→角动量），从而把\"对称性\"与\"守恒律\"直接联系起来。\n\n## 基本概念\n\n- **群**：$(G,\\cdot)$ 满足四条公理；**阿贝尔群**满足交换律。\n- **子群 / 正规子群 / 商群**：群的子结构；**同态**保持运算的映射。\n- **李群 / 李代数**：光滑流形上的群；李代数是其单位元处的切空间，以李括号 $[X,Y]$ 为乘法。\n- **表示**：群到 $GL(V)$ 的同态；**不可约表示**是无可约子空间的表示。\n- **特征标**：表示的迹 $\\chi(g)=\\mathrm{tr}\\,\\rho(g)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n李代数基本关系（以 $SU(2)$/角动量为代表）：\n\n$$ [J_i,J_j]=i\\hbar\\,\\epsilon_{ijk}J_k $$\n\n不可约表示的特征标正交性：\n\n$$ \\frac{1}{|G|}\\sum_{g\\in G}\\chi^{(\\alpha)}(g)^*\\chi^{(\\beta)}(g)=\\delta_{\\alpha\\beta} $$\n\n**诺特定理**：作用量在连续变换 $q\\to q+\\epsilon\\,\\delta q$ 下不变，则守恒流\n\n$$ \\partial_\\mu j^\\mu=0,\\qquad j^\\mu=\\frac{\\partial\\mathcal L}{\\partial(\\partial_\\mu q)}\\delta q $$\n\n### 推导要点\n\n- **诺特定理**：把变换代入作用量，令 $\\delta S=0$ 对任意区域成立，分部积分后得到连续性方程 $\\partial_\\mu j^\\mu=0$，其空间积分给出守恒荷。\n- **特征标正交性**：由表示矩阵元的大正交性定理（舒尔引理 + 不可约性）求和得到。\n- **$SO(3)$ 的表示**：用生成元 $J_\\pm,J_z$ 的代数关系，从最高权态递降构造 $|j,m\\rangle$，得到维数 $2j+1$ 的不可约表示。\n\n### 重要定理与推论\n\n- **舒尔引理**：与不可约表示所有元素对易的算符必为常数倍单位矩阵（量子力学中\"守恒量与哈密顿量对易\"的根源）。\n- **不可约表示的直和分解**：任意表示分解为不可约表示直和，特征标判定是否等价。\n- **维格纳-埃卡特定理**：矩阵元分解为几何因子（CG 系数）与约化矩阵元。\n- **群的正交表示**：有限群/紧李群的表示可酉化。\n\n## 深化内容\n\n群论的物理应用贯穿现代物理：**规范群**（$U(1)$、$SU(2)$、$SU(3)$）给出标准模型的相互作用；**晶体空间群**（230 个）分类晶体对称；**李代数的分类**（嘉当-基灵）给出 $A_n,B_n,C_n,D_n$ 与例外李代数；**表示论**决定粒子谱与选择定则。延伸阅读可参考 Georgi《Lie Algebras in Particle Physics》、Tung《Group Theory in Physics》、Hamermesh《Group Theory》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[angular-momentum-qm]] 中 $SO(3)$ 的不可约表示给出角动量量子数；[[conservation-laws]] 来自对称性（诺特定理）。\n- 应用：[[standard-model]] 的规范群、[[crystallography]] 的空间群、[[condensed-matter-physics]] 的能带对称性。\n- 基础：[[linear-algebra]]（表示论）。\n\n## 前置知识\n\n- [[linear-algebra]]、[[set-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 5,
     "note": "旋转群 SO(3) 与角动量"
    },
    {
     "id": "crystallography",
     "name": "晶体学",
     "weight": 5,
     "note": "空间群与晶体对称性"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 5,
     "note": "规范群"
    },
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 4,
     "note": "诺特定理联系对称性与守恒量"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 4,
     "note": "规范群 SU(3)×SU(2)×U(1)"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 3,
     "note": "表示论基于线性代数"
    },
    {
     "id": "loop-quantum-gravity",
     "name": "圈量子引力",
     "weight": 3,
     "note": "规范群表示"
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 3,
     "note": "泊松括号构成李代数"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 3,
     "note": "欧拉角与旋转群"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 3,
     "note": ""
    },
    {
     "id": "set-theory",
     "name": "集合论与数学基础",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "information-theory",
   "name": "信息论",
   "nameEn": "Information Theory",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "香农信息论"
   ],
   "tags": [
    "数学",
    "信息",
    "熵"
   ],
   "keywords": [
    "香农熵",
    "互信息",
    "信道容量",
    "KL散度"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 信息论\n\n## 概述\n\n信息论由香农在 1948 年建立，用概率量化\"信息\"与\"不确定性\"。核心量是**香农熵** $H(X)$，它度量随机变量的不确定度，也等于对其最优编码所需的最小平均比特数。两条编码定理——**信源编码定理**与**信道编码定理**——分别给出无损压缩的极限与可靠通信的速率上限。香农熵在形式上与统计力学的玻尔兹曼熵一致，而**兰道尔原理**进一步把\"擦除一比特信息\"与\"耗散 $k_BT\\ln2$ 能量\"联系起来，揭示信息与物理熵的深层统一。\n\n## 基本概念\n\n- **香农熵**：$H(X)=-\\sum_x p(x)\\log p(x)$（比特单位取 $\\log_2$）。\n- **联合熵 / 条件熵**：$H(X,Y)$、$H(X|Y)=\\sum_y p(y)H(X|Y=y)$。\n- **互信息**：$I(X;Y)=H(X)-H(X|Y)=H(X)+H(Y)-H(X,Y)$。\n- **KL 散度**（相对熵）：$D(p\\|q)=\\sum_x p(x)\\log\\frac{p(x)}{q(x)}$，度量两个分布的距离。\n- **信道**：输入→输出的条件分布 $p(y|x)$；**信道容量** $C$ 是可靠通信速率上限。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**熵的链式法则**：\n\n$$ H(X,Y)=H(X)+H(Y|X) $$\n\n**互信息与熵的关系**：\n\n$$ I(X;Y)=H(X)+H(Y)-H(X,Y) $$\n\n**信道容量**（香农公式，高斯信道）：\n\n$$ C = \\frac12\\log_2\\Big(1+\\frac{P}{N}\\Big) $$\n\n### 推导要点\n\n- **熵的非负性与上界**：由 $-\\log p\\ge0$ 得 $H\\ge0$；由凸性（琴生不等式）得 $H(X)\\le\\log|\\mathcal X|$（等号当且仅当均匀分布）。\n- **链式法则**：由 $p(x,y)=p(x)p(y|x)$ 与 $\\log(ab)=\\log a+\\log b$ 展开求和得到。\n- **互信息非负**：$I(X;Y)=D(p_{XY}\\|p_Xp_Y)\\ge0$（KL 散度非负），等号当且仅当 $X,Y$ 独立。\n\n### 重要定理与推论\n\n- **信源编码定理**：$n$ 个独立样本可压缩到约 $nH(X)$ 比特，且不可再少。\n- **信道编码定理**：只要速率 $R<C$，就存在编码使误码率任意小；$R>C$ 则不可能。\n- **数据处理不等式**：$X\\to Y\\to Z$ 时 $I(X;Z)\\le I(X;Y)$（信息只能衰减）。\n- **兰道尔原理**：擦除 1 比特至少耗散 $k_BT\\ln2$ 的热量，联系信息与热力学。\n\n## 深化内容\n\n信息论的量子推广是**量子信息论**（[[quantum-information]]）：冯诺依曼熵 $S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho)$、量子互信息、量子信道容量、纠缠熵。**算法信息论**（柯尔莫哥洛夫复杂度）研究对象的最短描述长度。信息论还与**统计力学**、**机器学习**（交叉熵损失）深度交叉。延伸阅读可参考 Cover & Thomas《Elements of Information Theory》、MacKay《Information Theory, Inference, and Learning Algorithms》、Nielsen & Chuang《量子计算与量子信息》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[entropy-information]]（熵的双重身份）、[[quantum-information]]（冯诺依曼熵）、[[probability-theory]]（基础）。\n- 相关：[[statistical-mechanics]] / [[thermodynamics]]（物理熵）。\n\n## 前置知识\n\n- [[probability-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "entropy-information",
     "name": "熵与信息",
     "weight": 5,
     "note": "熵的统计与信息两种诠释"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 5,
     "note": "信息论以概率论为基础"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "量子信息是信息论的量子推广"
    },
    {
     "id": "neuroscience-physics",
     "name": "神经科学物理",
     "weight": 4,
     "note": "神经信息编码"
    },
    {
     "id": "biophysics",
     "name": "生物物理",
     "weight": 3,
     "note": "信息处理"
    },
    {
     "id": "quantum-cryptography",
     "name": "量子密码学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "linear-algebra",
   "name": "线性代数",
   "nameEn": "Linear Algebra",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "矩阵论",
    "线性空间"
   ],
   "tags": [
    "数学",
    "矩阵",
    "线性空间",
    "特征值"
   ],
   "keywords": [
    "向量空间",
    "矩阵",
    "行列式",
    "特征值",
    "内积"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 线性代数\n\n## 概述\n\n线性代数研究**线性空间**（向量空间）及其上的**线性映射**，是量子力学、多元分析、微分方程与数据科学的基础语言。其对象——向量空间、矩阵、行列式、特征值——在物理中的核心地位体现为：量子态构成希尔伯特空间，可观测算符是自伴线性算子，测量值即其本征值。线性代数的\"中枢定理\"是**谱定理**：实对称（复厄米）矩阵可通过正交（酉）变换对角化，且特征值为实数。\n\n## 基本概念\n\n- **线性空间**：定义加法与数乘且满足八条公理的集合；基底与维数刻画其\"大小\"。\n- **线性映射**：$T(\\alpha u+\\beta v)=\\alpha T(u)+\\beta T(v)$；选定基后表示为矩阵。\n- **矩阵运算**：加法、数乘、乘法（对应复合）、转置 $A^T$、共轭转置 $A^\\dagger$、逆 $A^{-1}$。\n- **行列式** $\\det A$：方阵的标量不变量，刻画体积缩放因子，且 $\\det A\\ne0\\iff A$ 可逆。\n- **特征值与特征向量**：$Av=\\lambda v$ 的非零解；$\\lambda$ 是特征多项式 $\\det(A-\\lambda I)=0$ 的根。\n- **内积空间**：$\\langle u,v\\rangle$（复空间对第一个变量共轭线性），诱导范数 $\\|v\\|=\\sqrt{\\langle v,v\\rangle}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n特征方程与对角化：\n\n$$ Av=\\lambda v \\iff \\det(A-\\lambda I)=0,\\qquad A = PDP^{-1} $$\n\n**谱定理**（实对称/复厄米情形）：\n\n$$ A = U\\Lambda U^\\dagger,\\qquad U^\\dagger U=I,\\quad \\Lambda=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n),\\ \\lambda_i\\in\\mathbb R $$\n\n**凯莱-哈密顿定理**：方阵满足自身的特征多项式 $p(A)=0$。\n\n### 推导要点\n\n- **特征值问题的来源**：把微分方程组 $\\dot x=Ax$ 的解设成 $x=e^{\\lambda t}v$，代入得 $Av=\\lambda v$。\n- **谱定理（对称情形）**：用二次型 $Q(x)=x^TAx$ 在单位球上的极值法——设 $v_1$ 使 $Q$ 取极大，拉格朗日乘子给出 $Av_1=\\lambda_1v_1$，在正交补上归纳即得对角化。\n- **对角化的威力**：若 $A=PDP^{-1}$，则 $A^k=PD^kP^{-1}$，故 $e^{tA}=Pe^{tD}P^{-1}$ 直接给出 $\\dot x=Ax$ 的解。\n\n### 重要定理与推论\n\n- **秩-零化度定理**：$\\dim\\ker T+\\dim\\mathrm{Im}\\,T=\\dim V$，是线性方程组解结构的根基。\n- **逆矩阵与克拉默法则**：$A^{-1}=\\mathrm{adj}(A)/\\det A$。\n- **正定矩阵与二次型**：$A\\succ0$ 的所有特征值为正，对应多元函数极小值的判据（黑塞矩阵正定）。\n- **极分解与奇异值分解（SVD）**：$A=U\\Sigma V^\\dagger$，是数值线性代数与现代数据方法的基石。\n- **最小二乘**：超定方程 $Ax\\approx b$ 的正规方程 $A^TAx=A^Tb$，是数据拟合的标准工具。\n\n## 深化内容\n\n无限维推广是**泛函分析**：希尔伯特空间的谱理论把\"厄米矩阵对角化\"推广为自伴算符的谱分解，是量子力学中位置、动量、能量算符的数学基础；线性泛函、对偶空间、紧算子、无界自伴算符构成量子力学的严格框架。**表示论**把群元素表示为线性变换（矩阵），连接线性代数与群论。SVD 与低秩近似则是现代机器学习与信息压缩的核心。延伸阅读可参考 Strang《线性代数》、Hoffman & Kunze《Linear Algebra》、Halmos《Finite-Dimensional Vector Spaces》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]（态空间与算符）、[[eigenvalue-problems]]（本征值问题）。\n- 相关：[[tensor-calculus]]（多重线性推广）、[[group-theory]]（表示论）、[[differential-equations]]（矩阵指数）。\n- 应用：[[vibration-theory]]（简正模）、[[band-theory]]（能带）、[[quantum-information]]（量子比特与密度矩阵）。\n\n## 前置知识\n\n- [[set-theory]]（空间与映射的概念基础）",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 5,
     "note": "本征值问题是线性代数在数学物理中的核心应用"
    },
    {
     "id": "operators-and-measurement",
     "name": "算符与测量",
     "weight": 5,
     "note": "厄米算符与谱分解"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子力学态空间是希尔伯特空间，算符是线性算子"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 4,
     "note": "多元微积分与线性代数共同构成数学分析的基础"
    },
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 4,
     "note": "常系数线性微分方程组用矩阵指数求解"
    },
    {
     "id": "matrix-mechanics",
     "name": "矩阵力学",
     "weight": 4,
     "note": "矩阵方法"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 4,
     "note": "张量可视为多重线性映射的推广"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": "简正坐标归结为矩阵对角化"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 3,
     "note": "线性变换构成一般线性群"
    },
    {
     "id": "set-theory",
     "name": "集合论与数学基础",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "partial-differential-equations",
   "name": "偏微分方程",
   "nameEn": "Partial Differential Equations",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "PDE"
   ],
   "tags": [
    "数学",
    "偏微分方程",
    "数学物理"
   ],
   "keywords": [
    "波动方程",
    "热传导方程",
    "拉普拉斯方程",
    "定解条件"
   ],
   "size": 198,
   "degree": 18,
   "pos": null,
   "fixed": false,
   "body": "# 偏微分方程\n\n## 概述\n\n偏微分方程（PDE）描述含多个自变量未知函数的偏导关系，是物理场的标准数学形式。三类经典方程：\n\n- **波动方程**（双曲型）：$\\dfrac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u$\n- **热传导/扩散方程**（抛物型）：$\\dfrac{\\partial u}{\\partial t} = \\alpha\\nabla^2 u$\n- **拉普拉斯/泊松方程**（椭圆型）：$\\nabla^2 u = 0$ 或 $= -\\rho/\\varepsilon_0$\n\n定解条件（初值 + 边界条件）与适定性是理论的核心。分离变量法、积分变换法、格林函数法、变分法/弱解理论是主要求解路径。\n\n## 与其他知识的联系\n\n- 紧密相关：[[mathematical-physics-methods]] 系统研究这些方程；[[green-function]] 与 [[fourier-analysis]] 是线性 PDE 的两大求解工具。\n- 物理来源：[[schrodinger-equation]]（量子）、[[maxwell-equations]]（电磁）、[[heat-conduction]]（热）、[[fluid-mechanics]]（流体）。\n- 数学深化：[[eigenvalue-problems]]（斯图姆-刘维尔）、[[special-functions]]（本征函数展开）。\n\n## 数学基础\n\n- [[differential-equations]]、[[vector-calculus]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 5,
     "note": "拉普拉斯/泊松方程"
    },
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 5,
     "note": "常微分方程是 PDE 的特例（分离变量后）"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 5,
     "note": "纳维-斯托克斯方程"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 5,
     "note": "格林函数法求非齐次 PDE"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 5,
     "note": "抛物型方程"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "数理方法的核心研究对象"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 5,
     "note": "波动方程是标准双曲型 PDE"
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 4,
     "note": ""
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": "傅里叶方法求解线性 PDE"
    },
    {
     "id": "integral-transforms",
     "name": "积分变换",
     "weight": 4,
     "note": ""
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": "数学类型"
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 4,
     "note": "弱解与能量泛函"
    },
    {
     "id": "acoustics",
     "name": "声学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 4,
     "note": "波动方程/亥姆霍兹方程"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 4,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "probability-theory",
   "name": "概率论",
   "nameEn": "Probability Theory",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "概率"
   ],
   "tags": [
    "数学",
    "概率",
    "随机"
   ],
   "keywords": [
    "随机变量",
    "分布",
    "期望",
    "大数定律",
    "中心极限定理"
   ],
   "size": 158,
   "degree": 14,
   "pos": null,
   "fixed": false,
   "body": "# 概率论\n\n## 概述\n\n概率论研究随机现象的数量规律，是统计物理、量子力学、信号与信息的数学基础。其公理化体系由柯尔莫哥洛夫建立于测度论之上。两条极限定理是物理的支柱：**大数定律**保证大量独立试验的平均趋于期望（宏观量可测性——温度、压强的统计意义），**中心极限定理**保证大量独立随机变量之和近似正态（涨落与误差的普适性来源）。随机过程（马尔可夫过程、布朗运动）描述随时间演化的随机系统。\n\n## 基本概念\n\n- **概率空间**：$(\\Omega,\\mathcal F,P)$，$\\Omega$ 为样本空间、$\\mathcal F$ 为事件域、$P$ 为概率测度。\n- **随机变量**：$\\Omega\\to\\mathbb R$ 的可测函数；**分布函数** $F(x)=P(X\\le x)$。\n- **期望与方差**：$\\mathbb E[X]=\\int x\\,dF$，$\\mathrm{Var}(X)=\\mathbb E[X^2]-(\\mathbb E X)^2$。\n- **独立性**：$P(A\\cap B)=P(A)P(B)$；独立随机变量、独立同分布（i.i.d.）序列。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**贝叶斯公式**：\n\n$$ P(A|B)=\\frac{P(B|A)P(A)}{P(B)} $$\n\n**切比雪夫不等式**（大数定律的工具）：\n\n$$ P\\big(|X-\\mu|\\ge\\varepsilon\\big)\\le\\frac{\\mathrm{Var}(X)}{\\varepsilon^2} $$\n\n**中心极限定理**：对 i.i.d. 序列 $X_i$（均值 $\\mu$、方差 $\\sigma^2$），\n\n$$ \\frac{\\bar X_n-\\mu}{\\sigma/\\sqrt n}\\xrightarrow{d}\\mathcal N(0,1) $$\n\n### 推导要点\n\n- **大数定律**：由切比雪夫不等式，$P(|\\bar X_n-\\mu|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)\\to0$，得依概率收敛。\n- **中心极限定理（特征函数法）**：标准化和的特征函数 $\\varphi(t)=(1-\\frac{t^2}{2n}+o(\\frac1n))^n\\to e^{-t^2/2}$，对应正态分布。\n- **贝叶斯公式**：由条件概率定义与 $P(A)P(B|A)=P(B)P(A|B)$ 直接得到。\n\n### 重要定理与推论\n\n- **强大数定律**：$\\bar X_n\\to\\mu$ 几乎必然。\n- **正态分布的性质**：误差、涨落的普适分布，$\\int e^{-x^2/2\\sigma^2}dx=\\sqrt{2\\pi}\\sigma$。\n- **条件期望与鞅**：最优预测、停止时间，是随机过程与金融数学的工具。\n- **泊松分布与指数分布**：稀有事件计数、等待时间。\n\n## 深化内容\n\n概率论的严格化是**测度论**（勒贝格积分、$L^p$ 空间），使随机变量、期望、收敛概念统一于积分论。**随机过程**（马尔可夫链、布朗运动、鞅、随机微分方程）是涨落理论、金融与粒子输运的基础。**大偏差理论**刻画罕见事件概率的指数衰减。延伸阅读可参考 Feller《概率论及其应用》、Durrett《Probability》、Grimmett & Stirzaker《Probability and Random Processes》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[statistical-mechanics]]（系综理论）、[[fluctuation-theory]]（涨落）、[[information-theory]]（香农熵）。\n- 相关：[[quantum-measurement]]（测量结果的概率性）、[[kinetic-theory]]。\n- 基础：[[set-theory]]、[[calculus]]。\n\n## 前置知识\n\n- [[set-theory]]、[[calculus]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 5,
     "note": "涨落与随机过程"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 5,
     "note": "熵与信息的联系"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "统计物理以概率论为语言"
    },
    {
     "id": "ensembles",
     "name": "系综理论",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 4,
     "note": "波函数的概率诠释"
    },
    {
     "id": "bell-inequalities",
     "name": "贝尔不等式",
     "weight": 3,
     "note": "隐变量与局部因果"
    },
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 3,
     "note": "指数衰变规律"
    },
    {
     "id": "polymers",
     "name": "聚合物物理",
     "weight": 3,
     "note": "随机行走模型"
    },
    {
     "id": "set-theory",
     "name": "集合论与数学基础",
     "weight": 3,
     "note": "概率的公理化基础"
    },
    {
     "id": "chaos-theory",
     "name": "混沌理论",
     "weight": 2,
     "note": ""
    },
    {
     "id": "ising-model",
     "name": "伊辛模型",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 2,
     "note": ""
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "set-theory",
   "name": "集合论与数学基础",
   "nameEn": "Set Theory and Foundations",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "数学基础",
    "公理化集合论"
   ],
   "tags": [
    "数学",
    "逻辑",
    "集合"
   ],
   "keywords": [
    "集合",
    "映射",
    "基数",
    "序数",
    "公理"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 集合论与数学基础\n\n## 概述\n\n集合论是数学的奠基性理论，研究集合、元素、映射、关系与基数等基本概念。现代数学（分析、代数、拓扑、测度论）几乎全部可在 **ZFC 公理体系**（策梅洛-弗兰克尔公理 + 选择公理）上严格建立。对物理学习者而言，集合论的价值在于：提供集合与映射的严格语言、澄清\"无穷\"的不同层次（基数）、以及理解\"为什么数学对象能被精确定义\"。它是理解实数的构造、极限的严格化与一切抽象结构的前提。\n\n## 基本概念\n\n- **集合与元素**：$x\\in A$；空集 $\\emptyset$；子集、并集、交集、差集、幂集 $\\mathcal P(A)$。\n- **映射（函数）**：$f:A\\to B$，单射、满射、双射。\n- **关系与等价类**：等价关系（自反、对称、传递）把集合划分为等价类。\n- **基数**：集合\"大小\"的度量，$|A|$；可数无穷（$\\aleph_0$）与不可数无穷。\n- **序数**：良序集（每非空子集有最小元）的\"序型\"。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**康托尔对角线论证**：不存在 $\\mathbb N\\to\\mathbb R$ 的双射，即实数集不可数：\n\n$$ |\\mathbb R| > |\\mathbb N| = \\aleph_0 $$\n\n**康托尔定理**：任何集合 $A$ 的幂集严格更大\n\n$$ |A| < |\\mathcal P(A)| $$\n\n**选择公理（AC）**：任意非空集合族存在选择函数；等价于良序定理与佐恩引理。\n\n### 推导要点\n\n- **康托尔对角线**：假设把 $[0,1)$ 的实数排成 $x_1,x_2,\\dots$，构造一个实数使其第 $k$ 位与 $x_k$ 的第 $k$ 位不同，则该数不在列表内，矛盾。\n- **康托尔定理**：假设 $f:A\\to\\mathcal P(A)$ 是满射，考虑 $B=\\{x\\in A:x\\notin f(x)\\}$，则不存在 $a$ 使 $f(a)=B$。\n- **佐恩引理的应用**：证明任意向量空间有基、任意环有极大理想等（存在性证明的标准工具）。\n\n### 重要定理与推论\n\n- **自然数集与有理数集可数**，实数集不可数。\n- **连续统假设（CH）**：$|\\mathbb R|=\\aleph_1$ 与否，独立于 ZFC（哥德尔、科恩）。\n- **佐恩引理** ⟺ 选择公理 ⟺ 良序定理，是构造性存在证明的核心。\n\n## 深化内容\n\n集合论的发展涉及**大基数公理**、**力迫法**（科恩证明 CH 独立于 ZFC 的方法）、以及**数理逻辑**的**哥德尔不完备定理**（任何足够强的公理系统必有不可判定命题）。这些结果划定了\"数学能证明什么\"的边界。对物理而言，集合论与测度论（[[probability-theory]] 的基础）和拓扑（[[topology]] 的基础）直接衔接。延伸阅读可参考 Halmos《Naive Set Theory》、Enderton《Elements of Set Theory》。\n\n## 与其他知识的联系\n\n- 相关：[[topology]] 直接建立在集合论上；[[calculus]] 的极限与实数理论需要严格化基础。\n- 基础性：为 [[probability-theory]]（测度论）、[[group-theory]]、[[linear-algebra]] 提供语言。\n\n## 前置知识\n\n- 无前置（自足的基础课程）",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "topology",
     "name": "拓扑学",
     "weight": 4,
     "note": "拓扑学建立于集合论之上"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 3,
     "note": "实数系的严格基础"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 3,
     "note": "测度论基础"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 2,
     "note": ""
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "special-functions",
   "name": "特殊函数",
   "nameEn": "Special Functions",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "正交多项式"
   ],
   "tags": [
    "数学",
    "特殊函数",
    "数学物理"
   ],
   "keywords": [
    "勒让德函数",
    "贝塞尔函数",
    "厄米函数",
    "正交性",
    "超几何函数"
   ],
   "size": 158,
   "degree": 14,
   "pos": null,
   "fixed": false,
   "body": "# 特殊函数\n\n## 概述\n\n特殊函数是数学物理方程在特定坐标系下分离变量后得到的本征函数族：勒让德多项式 $P_l(x)$、连带勒让德函数 $P_l^m(x)$、球谐函数 $Y_{lm}$、贝塞尔函数 $J_\\nu(x)$、厄米多项式 $H_n(x)$、拉盖尔多项式、以及统一它们的**超几何函数**。它们共同满足**斯图姆-刘维尔方程**，构成带权正交完备系，从而保证\"广义傅里叶展开\"（本征函数展开）的合法性——这是解偏微分方程与量子力学定态问题的数学基础。\n\n## 基本概念\n\n- **斯图姆-刘维尔方程**：$\\dfrac{d}{dx}\\big[p(x)y'\\big]+[\\lambda w(x)-q(x)]y=0$，$w$ 为权函数。\n- **正交性**：$\\int_a^b w(x)p_n(x)p_m(x)\\,dx=0\\ (n\\ne m)$。\n- **生成函数**：把一族正交多项式打包为一个母函数，如勒让德 $\\frac1{\\sqrt{1-2xt+t^2}}=\\sum P_n(x)t^n$。\n- **递推关系**：相邻阶之间的线性关系，是数值计算与推导的主要工具。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n各函数族的微分方程与正交性：\n\n- **勒让德方程**：$(1-x^2)y''-2xy'+l(l+1)y=0$，解 $P_l(x)$，正交于 $[-1,1]$。\n- **贝塞尔方程**：$x^2y''+xy'+(x^2-\\nu^2)y=0$，解 $J_\\nu(x)$，源于柱坐标拉普拉斯方程。\n- **厄米方程**：$y''-2xy'+2ny=0$，解 $H_n(x)$，正交于 $(-\\infty,\\infty)$ 权 $e^{-x^2}$。\n- **拉盖尔方程**：$xy''+(1-x)y'+ny=0$，解 $L_n(x)$，源于径向氢原子方程。\n\n正交性统一表述：\n\n$$ \\int_a^b w(x)\\,p_n(x)\\,p_m(x)\\,\\mathrm dx = \\delta_{nm}\\|p_n\\|^2 $$\n\n### 推导要点\n\n- **正交性来源**：斯图姆-刘维尔算符是（在权 $w$ 下）自伴的，不同本征值的本征函数自动正交（$\\lambda_n-\\lambda_m\\neq0$ 时内积为零）。\n- **生成函数展开**：把生成函数对 $t$ 泰勒展开，逐项系数即 $P_n(x)$；对生成函数求导可推得递推关系。\n- **贝塞尔函数**：对柱坐标拉普拉斯方程分离变量后，径向满足贝塞尔方程，用弗罗贝尼乌斯级数法（指标方程）得到 $J_\\nu(x)$ 的幂级数。\n\n### 重要定理与推论\n\n- **完备性**：本征函数族构成 $L^2_w$ 的完备正交基，任意函数可展开 $f=\\sum c_n p_n$。\n- **递推与微分公式**：如 $(2n+1)xP_n=(n+1)P_{n+1}+nP_{n-1}$、$H_n'=2nH_{n-1}$。\n- **正交多项式与零点**：$n$ 阶正交多项式有 $n$ 个实零点（高斯求积节点）。\n- **渐近行为**：$J_\\nu(x)\\sim\\sqrt{2/(\\pi x)}\\cos(x-\\nu\\pi/2-\\pi/4)$（$x\\to\\infty$）。\n\n## 深化内容\n\n所有\"经典正交多项式\"与贝塞尔函数都统一于**超几何函数** ${}_2F_1$ 与合流超几何函数 ${}_1F_1$，其积分表示、递推关系与渐近展开构成系统理论。**渐近分析**（最速下降法、鞍点法、WKB）给出大参数展开。**椭圆函数与 θ 函数**是更一般的周期/拟周期函数。现代物理中，特殊函数出现在精确可解模型（氢原子、谐振子、角动量）与可积系统。延伸阅读可参考王竹溪《特殊函数概论》、Arfken《Mathematical Methods for Physicists》、Abramowitz & Stegun《Handbook of Mathematical Functions》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[eigenvalue-problems]] 与本征函数展开；[[spherical-harmonics]] 与 [[hydrogen-atom]]、[[angular-momentum-qm]]。\n- 应用：[[quantum-harmonic-oscillator]]（厄米多项式）、[[electromagnetic-waves]]（贝塞尔函数）、[[boundary-value-problems]]。\n- 方法：[[complex-analysis]]（留数）、[[integral-transforms]]。\n\n## 前置知识\n\n- [[calculus]]、[[differential-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 5,
     "note": "特殊函数是斯图姆-刘维尔问题的本征函数"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 5,
     "note": "分离变量所得本征函数"
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 5,
     "note": "坐标系决定所得特殊函数族"
    },
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 5,
     "note": "球谐函数是特殊函数的重要成员"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 4,
     "note": "留数法计算特殊函数积分"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 4,
     "note": "氢原子波函数含拉盖尔/球谐函数"
    },
    {
     "id": "multipole-expansion",
     "name": "多极展开",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 4,
     "note": "厄米多项式"
    },
    {
     "id": "boundary-value-problems",
     "name": "边值问题",
     "weight": 3,
     "note": "不同坐标系的函数族"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 3,
     "note": ""
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 2,
     "note": "贝塞尔函数用于柱坐标"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "tensor-calculus",
   "name": "张量分析",
   "nameEn": "Tensor Calculus",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "张量",
    "里奇微积分"
   ],
   "tags": [
    "数学",
    "张量",
    "黎曼几何",
    "广义相对论"
   ],
   "keywords": [
    "协变指标",
    "逆变指标",
    "克里斯托费尔符号",
    "协变导数"
   ],
   "size": 138,
   "degree": 12,
   "pos": null,
   "fixed": false,
   "body": "# 张量分析\n\n## 概述\n\n张量分析在（可弯曲的）坐标系统中研究张量场及其微分运算，是广义相对论与连续介质力学的计算语言。其核心问题是：如何在坐标变换下保持物理规律的**协变性**（形式不变）。为此引入协变导数、克里斯托费尔符号与曲率张量。张量指标分协变（下）与逆变（上）两类，由度规张量升降；爱因斯坦求和约定（重复指标自动求和）简化书写。\n\n## 基本概念\n\n- **张量**：在坐标变换 $x'^\\mu=x'^\\mu(x)$ 下按指标规律变换的多重线性对象；如逆变矢量 $V'^\\mu=\\frac{\\partial x'^\\mu}{\\partial x^\\nu}V^\\nu$。\n- **度规张量** $g_{\\mu\\nu}$：定义线元 $ds^2=g_{\\mu\\nu}dx^\\mu dx^\\nu$，用于升降指标 $V_\\mu=g_{\\mu\\nu}V^\\nu$。\n- **克里斯托费尔符号**：$\\Gamma^\\lambda_{\\mu\\nu}=\\frac12 g^{\\lambda\\sigma}(\\partial_\\mu g_{\\nu\\sigma}+\\partial_\\nu g_{\\mu\\sigma}-\\partial_\\sigma g_{\\mu\\nu})$，本身不是张量。\n- **协变导数**：$\\nabla_\\mu V^\\nu=\\partial_\\mu V^\\nu+\\Gamma^\\nu_{\\mu\\lambda}V^\\lambda$，对协变指标则为减号。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n协变导数（矢量的两个指标类型）：\n\n$$ \\nabla_\\mu V^\\nu=\\partial_\\mu V^\\nu+\\Gamma^\\nu_{\\mu\\lambda}V^\\lambda,\\qquad \\nabla_\\mu V_\\nu=\\partial_\\mu V_\\nu-\\Gamma^\\lambda_{\\mu\\nu}V_\\lambda $$\n\n**黎曼曲率张量**：\n\n$$ R^\\rho{}_{\\sigma\\mu\\nu}=\\partial_\\mu\\Gamma^\\rho_{\\nu\\sigma}-\\partial_\\nu\\Gamma^\\rho_{\\mu\\sigma}+\\Gamma^\\rho_{\\mu\\lambda}\\Gamma^\\lambda_{\\nu\\sigma}-\\Gamma^\\rho_{\\nu\\lambda}\\Gamma^\\lambda_{\\mu\\sigma} $$\n\n**里奇张量** $R_{\\mu\\nu}=R^\\lambda{}_{\\mu\\lambda\\nu}$ 与**标量曲率** $R=g^{\\mu\\nu}R_{\\mu\\nu}$。\n\n### 推导要点\n\n- **协变导数的构造**：要求 $\\nabla_\\mu V^\\nu$ 是张量（变换正确）且 $\\nabla_\\mu g_{\\nu\\sigma}=0$（度规相容），由此唯一确定 $\\Gamma$ 的表达式。\n- **曲率张量**：计算协变导数的对易子 $[\\nabla_\\mu,\\nabla_\\nu]V^\\rho$，结果只依赖 $V^\\rho$ 本身（系数即曲率张量）——曲率度量协变导数不可交换的程度。\n- **测地线**：沿曲线平行移动切矢，$\\frac{du^\\mu}{d\\tau}+\\Gamma^\\mu_{\\rho\\sigma}u^\\rho u^\\sigma=0$。\n\n### 重要定理与推论\n\n- **对称性与恒等式**：$R_{\\mu\\nu\\rho\\sigma}$ 满足反对称、交换对称与**比安基恒等式** $\\nabla_{[\\lambda}R_{\\mu\\nu]\\rho\\sigma}=0$，后者导出 $\\nabla_\\mu G^{\\mu\\nu}=0$（爱因斯坦张量守恒）。\n- **坐标协变性**：张量方程在任意坐标变换下形式不变，是广义相对论的基本要求。\n- **平直空间退化**：欧氏空间中 $\\Gamma=0$，协变导数退化为偏导数，张量分析退化为[[vector-calculus]]。\n\n## 深化内容\n\n张量分析的现代形式是**微分几何**与**纤维丛**：联络是主丛上的规范场，曲率是联络的场强，这一观点统一了引力（列维-奇维塔联络）与规范场论（杨-米尔斯联络）。**微分形式**提供坐标无关的外微分运算。**旋量**是洛伦兹群的另一类表示，用于相对论量子力学。延伸阅读可参考 Schutz《A First Course in General Relativity》、Carroll《Spacetime and Geometry》、Landau & Lifshitz《The Classical Theory of Fields》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[general-relativity]] 的场方程 $G_{\\mu\\nu}=8\\pi GT_{\\mu\\nu}/c^4$ 是张量方程；[[differential-geometry]] 提供几何基础。\n- 相关：[[special-relativity]]（洛伦兹张量）、[[continuum-mechanics]]（应力/应变张量）、[[fluid-mechanics]]。\n- 退化：[[vector-calculus]] 是平直欧氏空间的特殊形式。\n\n## 前置知识\n\n- [[linear-algebra]]、[[calculus]]、[[differential-geometry]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 5,
     "note": "应力应变张量"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 5,
     "note": "黎曼几何以张量分析为语言"
    },
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 5,
     "note": "张量方程"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "爱因斯坦场方程是张量方程"
    },
    {
     "id": "minkowski-spacetime",
     "name": "闵可夫斯基时空",
     "weight": 5,
     "note": "洛伦兹张量"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 5,
     "note": "张量语言"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 4,
     "note": "张量是多重线性代数的推广"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 4,
     "note": "惯量张量"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 4,
     "note": "洛伦兹协变表述"
    },
    {
     "id": "vector-calculus",
     "name": "矢量分析",
     "weight": 4,
     "note": "矢量分析是张量分析的特例"
    }
   ],
   "softLinks": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 3,
     "note": "辛几何表述"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "topology",
   "name": "拓扑学",
   "nameEn": "Topology",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "拓扑",
    "点集拓扑"
   ],
   "tags": [
    "数学",
    "拓扑",
    "流形"
   ],
   "keywords": [
    "开集",
    "连续映射",
    "同胚",
    "紧致性",
    "同伦",
    "同调"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 拓扑学\n\n## 概述\n\n拓扑学研究在**连续变形**（拉伸、弯曲、但不撕裂不粘连）下保持不变的性质，即\"形状\"的本质。它用**开集**定义连续性，用**同胚**定义\"相同形状\"，用**拓扑不变量**（欧拉示性数、同伦群、同调群）分类空间。拓扑学从纯粹几何问题出发，近年深刻进入物理：拓扑绝缘体、量子霍尔效应的拓扑量子数、以及场论中的拓扑缺陷与瞬子，都源于\"整体性质不能被连续变形改变\"这一思想。\n\n## 基本概念\n\n- **拓扑空间**：集合 + 一族开集（满足并、有限交、含全集空集）。\n- **连续映射**：开集的原像仍为开集。\n- **同胚**：双向连续的双射；同胚的空间视为\"相同\"。\n- **紧致性**：任意开覆盖有有限子覆盖；**连通性**：不能分解为两个分离的非空开集。\n- **同伦**：连续变形的等价；**基本群** $\\pi_1$ 刻画环路的\"绕数\"。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**欧拉示性数**（多面体/二维闭曲面）：\n\n$$ \\chi = V - E + F $$\n\n对亏格 $g$ 的可定向闭曲面，$\\chi=2-2g$。\n\n**基本群与同伦不变量**：$\\pi_1(S^1)=\\mathbb Z$（绕数），$\\pi_1(S^n)=0\\ (n\\ge2)$。\n\n**高斯-博内定理**（拓扑与几何的联系，见 [[differential-geometry]]）：\n\n$$ \\int_\\Sigma K\\,dA = 2\\pi\\chi(\\Sigma) $$\n\n### 推导要点\n\n- **欧拉示性数的不变性**：对三角剖分做\"细分/合并\"操作，$V-E+F$ 不变，故是拓扑不变量。\n- **基本群**：以基点为起点终点的环路在\"同伦\"下的等价类构成群，乘法为环路的拼接。\n- **布劳威尔不动点定理**：连续 $f:D^n\\to D^n$ 有不动点，可用同调/基本群反证。\n\n### 重要定理与推论\n\n- **布劳威尔不动点定理**：单位圆盘到自身的连续映射必有不动点。\n- **若尔当曲线定理**：平面上的简单闭曲线把平面分成内外两部分。\n- **毛球定理**：$S^2$ 上不存在处处非零的切向量场（\"无法梳平头发\"）。\n- **拓扑不变量分类**：同伦群 $\\pi_n$、同调群 $H_n$、欧拉示性数 $\\chi$ 在连续变形下不变。\n\n## 深化内容\n\n**代数拓扑**把拓扑问题化为代数问题（同调、同伦、上同调、特征类），是纤维丛与规范场的数学基础。**微分拓扑**研究光滑流形（莫尔斯理论、指标定理）。物理应用：**拓扑绝缘体/拓扑序**（[[topological-materials]]）的能带拓扑不变量（陈数、$Z_2$ 指标）、**量子霍尔效应**的 TKNN 不变量、**拓扑缺陷**（涡旋、畴壁、磁单极）与**瞬子**。延伸阅读可参考 Munkres《Topology》、Hatcher《Algebraic Topology》、Nakahara《Geometry, Topology and Physics》。\n\n## 与其他知识的联系\n\n- 相关：[[differential-geometry]]（流形的整体结构）、[[topological-materials]]（能带拓扑不变量）、[[string-theory]]、[[gauge-field-theory]]（纤维丛）。\n\n## 前置知识\n\n- [[set-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 4,
     "note": "流形是带拓扑结构的对象"
    },
    {
     "id": "set-theory",
     "name": "集合论与数学基础",
     "weight": 4,
     "note": "拓扑空间定义在集合上"
    },
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 4,
     "note": "拓扑不变量刻画物态"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 2,
     "note": "连续性的推广"
    },
    {
     "id": "crystallography",
     "name": "晶体学",
     "weight": 2,
     "note": ""
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "variational-calculus",
   "name": "变分法",
   "nameEn": "Calculus of Variations",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "泛函极值",
    "变分原理"
   ],
   "tags": [
    "数学",
    "泛函",
    "极值"
   ],
   "keywords": [
    "欧拉-拉格朗日方程",
    "泛函",
    "极值",
    "最小作用量"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 变分法\n\n## 概述\n\n变分法研究**泛函**（函数到数的映射）的极值问题：不是对数求极值，而是对\"整条曲线\"求极值。核心结果是**欧拉-拉格朗日方程**，它把泛函极值化为微分方程。变分法在物理中的总纲是**变分原理**——把动力学（最小作用量原理）、光学（费马原理）、静力学（最小势能原理）、场论（爱因斯坦-希尔伯特作用量）统一表述为\"某个泛函取极值\"。它也是量子力学变分法与偏微分方程弱解理论的基础。\n\n## 基本概念\n\n- **泛函**：$J[y]=\\int_a^b F(x,y,y')\\,dx$，自变量是函数 $y(x)$。\n- **变分** $\\delta J$：$J[y+\\varepsilon\\eta]$ 对 $\\varepsilon$ 的一阶导在 $\\varepsilon=0$ 处的值，即泛函的\"方向导数\"。\n- **驻点（极值）**：$\\delta J=0$ 对一切容许的扰动 $\\eta$（通常 $\\eta(a)=\\eta(b)=0$）。\n- **约束极值**：附加积分约束 $\\int G\\,dx=\\text{const}$ 时用拉格朗日乘子。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**欧拉-拉格朗日方程**：泛函 $J[y]=\\int_a^b F(x,y,y')\\,dx$ 的极值函数满足\n\n$$ \\frac{\\partial F}{\\partial y}-\\frac{\\mathrm d}{\\mathrm dx}\\frac{\\partial F}{\\partial y'}=0 $$\n\n**贝尔特拉米恒等式**（$F$ 不显含 $x$ 时的一阶积分）：\n\n$$ F - y'\\frac{\\partial F}{\\partial y'}=\\mathrm{const} $$\n\n**约束极值**：在 $\\int G\\,dx=c$ 下，极值由 $\\widetilde F=F-\\lambda G$ 的欧拉-拉格朗日方程给出。\n\n### 推导要点\n\n- 设 $\\delta y=\\varepsilon\\eta$，展开\n\n$$ J[y+\\varepsilon\\eta]=J[y]+\\varepsilon\\int_a^b\\Big(\\frac{\\partial F}{\\partial y}\\eta+\\frac{\\partial F}{\\partial y'}\\eta'\\Big)dx+O(\\varepsilon^2) $$\n\n对第二项分部积分，用边界条件 $\\eta(a)=\\eta(b)=0$，令 $\\varepsilon$ 一次项为零，由 $\\eta$ 任意得欧拉-拉格朗日方程。\n- **贝尔特拉米恒等式**：对 $F-F'$ 求全导并利用欧拉-拉格朗日方程，得当 $F$ 不显含 $x$ 时该量为常数。\n\n### 重要定理与推论\n\n- **最速降线（摆线）**：$F=\\sqrt{1+y'^2}/\\sqrt{y}$，得摆线解。\n- **测地线**：$F=\\sqrt{g_{ij}\\dot x^i\\dot x^j}$ 给出黎曼流形上的测地线方程。\n- **特征值问题的变分刻画**：瑞利商 $R[y]=\\int|\\nabla y|^2/\\int|y|^2$ 的驻点是拉普拉斯算子的特征函数（[[eigenvalue-problems]]）。\n- **充分条件**：勒让德条件 $F_{y'y'}\\ge0$ 保证局部极小。\n\n## 深化内容\n\n变分法的发展通向**泛函分析**的弱解理论：把微分方程边值问题改写为能量泛函的极小问题，用索伯列夫空间直接法证明解的存在性。**最优控制**（庞特里亚金极大值原理、贝尔曼动态规划）把变分法推广到含控制变量的系统。量子力学的**路径积分**与变分法同源——经典路径是作用量泛函的驻点。延伸阅读可参考 Gelfand & Fomin《Calculus of Variations》、Lanczos《The Variational Principles of Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[lagrangian-mechanics]] 与 [[hamiltonian-mechanics]] 建立在其上；[[qm-variational-method]] 是其量子应用。\n- 相关：[[general-relativity]]（测地线与场方程来自作用量变分）、[[partial-differential-equations]]（能量泛函与弱解）。\n- 应用：[[optics]]（费马原理）、[[continuum-mechanics]]（最小势能原理）。\n\n## 前置知识\n\n- [[calculus]]、[[differential-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 5,
     "note": "最小作用量原理直接应用变分法"
    },
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 4,
     "note": "变分法是微积分极值思想的推广"
    },
    {
     "id": "geometric-optics",
     "name": "几何光学",
     "weight": 4,
     "note": "费马原理"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": "弱解与能量泛函"
    },
    {
     "id": "qm-variational-method",
     "name": "量子变分法",
     "weight": 4,
     "note": "量子力学中用于近似基态"
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 3,
     "note": "最小势能原理"
    },
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 3,
     "note": ""
    },
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 2,
     "note": "爱因斯坦-希尔伯特作用量"
    },
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 3,
     "note": "测地线与爱因斯坦场方程由变分原理导出"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "vector-calculus",
   "name": "矢量分析",
   "nameEn": "Vector Calculus",
   "domain": "mathematics",
   "domainName": "数学基础",
   "color": "#8e9eab",
   "aliases": [
    "矢量场论",
    "向量微积分"
   ],
   "tags": [
    "数学",
    "矢量",
    "场论",
    "梯度"
   ],
   "keywords": [
    "梯度",
    "散度",
    "旋度",
    "通量",
    "环量",
    "亥姆霍兹分解"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 矢量分析\n\n## 概述\n\n矢量分析是微积分在三维欧氏空间中**标量场**与**矢量场**上的推广，是电磁学、流体力学、引力论等场论学科的通用语言。它以三个微分算子——梯度、散度、旋度——刻画场的变化，以高斯定理与斯托克斯定理把场的局部微分性质与整体积分性质联系起来。矢量分析是整个\"场论\"思维的起点，麦克斯韦方程组即是其最典型的物理应用。\n\n## 基本概念\n\n- **标量场 / 矢量场**：空间各点赋一个标量/矢量的函数 $\\phi(\\vec r)$、$\\vec F(\\vec r)$。\n- **梯度**：标量场变化最快的方向与速率\n\n$$ \\nabla\\phi = \\Big(\\frac{\\partial\\phi}{\\partial x},\\frac{\\partial\\phi}{\\partial y},\\frac{\\partial\\phi}{\\partial z}\\Big) $$\n\n- **散度**：矢量场在某点的\"源强度\"（通量体密度）\n\n$$ \\nabla\\cdot\\vec F = \\frac{\\partial F_x}{\\partial x}+\\frac{\\partial F_y}{\\partial y}+\\frac{\\partial F_z}{\\partial z} $$\n\n- **旋度**：矢量场在某点的\"涡旋强度\"（环量面密度）\n\n$$ \\nabla\\times\\vec F = \\Big(\\frac{\\partial F_z}{\\partial y}-\\frac{\\partial F_y}{\\partial z},\\ \\frac{\\partial F_x}{\\partial z}-\\frac{\\partial F_z}{\\partial x},\\ \\frac{\\partial F_y}{\\partial x}-\\frac{\\partial F_x}{\\partial y}\\Big) $$\n\n- **拉普拉斯算子**：$\\nabla^2=\\nabla\\cdot\\nabla$，作用于标量 $\\nabla^2\\phi$ 或矢量（逐分量）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**高斯（散度）定理**：\n\n$$ \\oint_{\\partial V}\\vec F\\cdot\\mathrm d\\vec S = \\int_V \\nabla\\cdot\\vec F\\,\\mathrm dV $$\n\n**斯托克斯（旋度）定理**：\n\n$$ \\oint_{\\partial S}\\vec F\\cdot\\mathrm d\\vec l = \\int_S(\\nabla\\times\\vec F)\\cdot\\mathrm d\\vec S $$\n\n**格林公式**（平面情形，是两者的二维统一）：\n\n$$ \\oint_{\\partial D}(P\\,dx+Q\\,dy)=\\iint_D\\Big(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Big)\\,dx\\,dy $$\n\n常用算子恒等式：\n\n$$ \\nabla\\times(\\nabla\\phi)=0,\\qquad \\nabla\\cdot(\\nabla\\times\\vec F)=0 $$\n\n### 推导要点\n\n- **高斯定理**：把体积分割为小长方体，相邻面的通量相互抵消，只剩边界的通量；每个小体元通量 $\\approx(\\nabla\\cdot\\vec F)\\Delta V$，取极限即得。\n- **斯托克斯定理**：把曲面分割为小面片，相邻边的环量相互抵消，只剩边界环量；每个面片环量 $\\approx(\\nabla\\times\\vec F)\\cdot\\Delta\\vec S$。\n- 两者本质上都是**微积分基本定理**在高维的推广：$\\int_{\\partial\\Omega}\\omega=\\int_\\Omega d\\omega$。\n\n### 重要定理与推论\n\n- **保守场判据**：$\\vec F=\\nabla\\phi \\iff \\nabla\\times\\vec F=0$（单连通域），此时线积分与路径无关、环路积分为零。\n- **亥姆霍兹分解**：满足边界条件的矢量场可唯一分解为无旋部分与无散部分之和\n\n$$ \\vec F = -\\nabla\\phi + \\nabla\\times\\vec A $$\n\n这是静电学（$\\vec E=-\\nabla\\phi$）与静磁学（$\\vec B=\\nabla\\times\\vec A$）的共同数学基础。\n- **无散场为管形场**（通量守恒）、**无旋场为保守场**（存在势）。\n\n## 深化内容\n\n在弯曲空间与一般维数中，矢量分析被**张量分析与微分形式**取代：梯度/散度/旋度统一为外微分 $d$ 与 Hodge 星算子，高斯/斯托克斯定理统一为斯托克斯定理 $\\int_{\\partial\\Omega}\\omega=\\int_\\Omega d\\omega$。曲线坐标系（柱、球坐标）下的算子表达通过尺度因子 $h_i$ 给出，是解拉普拉斯方程的起点。**亥姆霍兹-霍奇分解**把三维分解推广到任意黎曼流形上的微分形式。延伸阅读可参考 Griffiths《电动力学导论》附录、Schey《Div, Grad, Curl, and All That》、Arfken《Mathematical Methods for Physicists》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[maxwell-equations]] 的微分形式正是散度与旋度的物理表达；[[electrostatics]] 中 $\\vec E=-\\nabla\\phi$。\n- 相关：[[fluid-mechanics]]（流线、涡量）、[[newtonian-mechanics]]（力场）。\n- 更一般：[[tensor-calculus]] 与 [[differential-geometry]] 把矢量分析推广到弯曲空间（协变导数代替偏导、微分形式统一算子）。\n\n## 前置知识\n\n- [[calculus]]（多元微积分）\n- [[linear-algebra]]（坐标变换与内积）",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "calculus",
     "name": "微积分",
     "weight": 5,
     "note": "矢量分析是微积分在矢量场中的推广"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 5,
     "note": "高斯定理与梯度"
    },
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 5,
     "note": "旋度与环路定理"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "麦克斯韦方程组是矢量微积分的典型应用"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 4,
     "note": "流场描述用散度与旋度"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": "经典力学的矢量表述"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 4,
     "note": "矢量分析是张量分析在三维欧氏空间的退化情形"
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 3,
     "note": "场与梯度"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 3,
     "note": "微分形式统一了梯度/散度/旋度"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-decay",
   "name": "放射性衰变",
   "nameEn": "Radioactive Decay",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "放射衰变",
    "衰变"
   ],
   "tags": [
    "核物理",
    "衰变",
    "放射性"
   ],
   "keywords": [
    "半衰期",
    "阿尔法衰变",
    "贝塔衰变",
    "伽马衰变"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 放射性衰变\n\n## 概述\n\n放射性衰变是不稳定原子核自发转变为其他核并放出辐射的过程，遵循**指数规律**（衰变是随机的量子过程）。三种主要模式：**α 衰变**（放氦核，由量子隧穿解释）、**β 衰变**（核子互变放电子/正电子与中微子，由弱相互作用驱动）、**γ 衰变**（激发态退激放光子，由电磁相互作用驱动）。放射性衰变是核医学、放射性测年（碳-14）、核能工业的基础。\n\n## 基本概念\n\n- **衰变常数** $\\lambda$：单位时间衰变概率。\n- **半衰期** $t_{1/2}=\\ln2/\\lambda$。\n- **α / β / γ 衰变**：三种模式。\n- **活度**：$A=\\lambda N$（每秒衰变数）。\n- **衰变链**：多代衰变序列。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**指数衰变定律**：\n\n$$ N(t)=N_0e^{-\\lambda t},\\qquad t_{1/2}=\\frac{\\ln2}{\\lambda} $$\n\n**α 衰变的伽莫夫公式**（隧穿概率）：\n\n$$ T\\approx\\exp\\Big(-2\\int_{r_1}^{r_2}\\sqrt{\\frac{2m(V(r)-E)}{\\hbar^2}}dr\\Big) $$\n\n**β 衰变**：$n\\to p+e^-+\\bar\\nu_e$（弱相互作用，[[standard-model]]）。\n\n### 推导要点\n\n- **指数规律**：每个核以常数概率 $\\lambda$ 衰变，$dN=-\\lambda Ndt$ 积分得指数衰减（[[probability-theory]] 的泊松过程）。\n- **α 衰变**：α 粒子隧穿库仑+离心势垒（伽莫夫模型，[[quantum-tunneling]]）。\n- **β 衰变**：弱相互作用的 $W^\\pm$ 交换，中微子带走能量（费米理论）。\n\n### 重要定理与推论\n\n- **指数衰减与半衰期**：$t_{1/2}$ 与核数目无关。\n- **α 衰变能谱分立**：α 粒子能量离散（两体衰变）。\n- **β 衰变能谱连续**：三体衰变，中微子分享能量（中微子存在的证据）。\n- **选择定则**：角动量、宇称守恒决定衰变模式。\n\n## 深化内容\n\n放射性衰变连接 [[quantum-tunneling]]（α 衰变）、[[standard-model]]（β 衰变弱作用）、[[probability-theory]]（指数规律）。应用：放射性测年（$^{14}$C）、核医学（PET、放疗）、核能。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Lilley《Nuclear Physics》、费米《Nuclear Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-physics]]、[[quantum-tunneling]]（α 衰变机制）、[[quantum-mechanics]]。\n- 相互作用：[[standard-model]]（β 衰变的弱作用、γ 衰变的电磁作用）。\n- 数学：[[probability-theory]]（指数衰变与半衰期）。\n\n## 前置知识\n\n- [[nuclear-physics]]、[[quantum-tunneling]]、[[standard-model]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 5,
     "note": "核心过程"
    },
    {
     "id": "quantum-tunneling",
     "name": "量子隧穿",
     "weight": 5,
     "note": "α 衰变是隧穿效应"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "衰变规律的量子起源"
    },
    {
     "id": "nuclear-fission",
     "name": "核裂变",
     "weight": 3,
     "note": "裂变产物继续衰变"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 3,
     "note": "衰变反映结构"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 3,
     "note": "指数衰变规律"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 3,
     "note": "β 衰变由弱相互作用驱动"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-fission",
   "name": "核裂变",
   "nameEn": "Nuclear Fission",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "裂变",
    "原子核裂变"
   ],
   "tags": [
    "核物理",
    "裂变",
    "核能"
   ],
   "keywords": [
    "链式反应",
    "裂变产物",
    "临界质量"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 核裂变\n\n## 概述\n\n核裂变是重核（如 $^{235}$U）吸收中子后**分裂为两个中等质量核**并放出能量与中子的过程，每次裂变释放约 200 MeV 能量与数个中子。释放的中子可引发更多裂变，形成**链式反应**（需 $\\nu>1$）。**临界质量**是维持链式反应的最小燃料质量。裂变是核电站与核武器的能量来源，也是人类首次大规模利用核能的途径。\n\n## 基本概念\n\n- **裂变产物**：分裂成的中等质量核。\n- **链式反应**：中子引发的自持裂变。\n- **临界质量 / 临界态**：链式反应恰好自持的条件。\n- **裂变能**：约 200 MeV/裂变。\n- **慢化剂 / 控制棒**：反应堆的关键组件。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n裂变反应：\n\n$$ {}^{235}\\mathrm{U}+n\\to{}^{236}\\mathrm{U}^*\\to\\text{裂变产物}+\\nu n+\\sim200\\,\\mathrm{MeV} $$\n\n链式反应条件（中子倍增因子 $k$）：\n\n$$ k=\\frac{\\text{下一代中子数}}{\\text{上一代中子数}},\\qquad k\\ge1\\ \\text{自持} $$\n\n### 推导要点\n\n- **裂变的能量来源**：重核结合能较低（$B/A$ 曲线），分裂成中等核释放能量（[[nuclear-models]] 液滴模型的库仑-表面竞争）。\n- **链式反应**：$\\nu\\sim2.5$ 个中子/裂变，若至少一个引发下一裂变则自持。\n- **临界质量**：使中子泄漏与吸收不足以阻止链式反应的质量。\n\n### 重要定理与推论\n\n- **链式反应与临界**：$k=1$ 临界、$k>1$ 超临界（爆炸）、$k<1$ 次临界。\n- **裂变产物放射性**：产物继续 [[nuclear-decay]]（β 衰变）。\n- **核电站**：受控链式反应（压水堆、沸水堆）。\n- **核武器**：非受控超临界链式反应。\n\n## 深化内容\n\n核裂变是 [[nuclear-reactions]] 的重要应用，其理论基于液滴模型（[[nuclear-models]]）；裂变产物衰变（[[nuclear-decay]]）与核废料处理是重要问题。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Lilley《Nuclear Physics》、Bodansky《Nuclear Energy》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-reactions]]、[[nuclear-physics]]。\n- 理论基础：液滴模型（[[nuclear-models]]）解释重核不稳定性；裂变产物经 [[nuclear-decay]] 进一步衰变。\n- 应用：核电站与核武器等核能利用。\n\n## 前置知识\n\n- [[nuclear-reactions]]、[[nuclear-models]]、[[nuclear-decay]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-reactions",
     "name": "核反应",
     "weight": 5,
     "note": "裂变是一类核反应"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 4,
     "note": "核裂变"
    },
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 3,
     "note": "裂变产物继续衰变"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 3,
     "note": "液滴模型解释裂变"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-fusion",
   "name": "核聚变",
   "nameEn": "Nuclear Fusion",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "聚变",
    "热核聚变"
   ],
   "tags": [
    "核物理",
    "聚变",
    "能源"
   ],
   "keywords": [
    "氘氚聚变",
    "托卡马克",
    "恒星能量"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 核聚变\n\n## 概述\n\n核聚变是**轻核结合成较重核**并释放能量的过程，是恒星能量的来源，也是受控聚变发电的目标。氘-氚聚变反应放出 17.6 MeV 能量。轻核带正电荷，需克服**库仑势垒**（辅以量子隧穿），因此要求约 $10^8$ K 的高温，燃料处于**等离子体**态。**劳森判据** $n\\tau_E$ 给出自持聚变（点火）条件。受控聚变的主要途径是磁约束（托卡马克，[[plasma-confinement]]）与惯性约束。\n\n## 基本概念\n\n- **氘-氚（D-T）聚变**：能量最易释放的反应。\n- **库仑势垒 / 隧穿**：聚变需克服的障碍与机制。\n- **等离子体**：聚变燃料的高温态。\n- **劳森判据**：$n\\tau_E$ 自持条件。\n- **磁约束 / 惯性约束**：两种聚变途径。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n氘-氚聚变：\n\n$$ {}^{2}\\mathrm H+{}^{3}\\mathrm H\\to{}^{4}\\mathrm{He}+n+17.6\\,\\mathrm{MeV} $$\n\n**劳森判据**（D-T 自持）：\n\n$$ n\\tau_E>10^{20}\\,\\mathrm{s\\,m^{-3}} $$\n\n（$n$ 为密度、$\\tau_E$ 为能量约束时间）。\n\n### 推导要点\n\n- **聚变能量**：由 $B/A$ 曲线，轻核结合能随 $A$ 增大而增大，聚变释放能量（[[nuclear-reactions]]）。\n- **隧穿**：高温下质子以一定概率隧穿库仑势垒（[[quantum-tunneling]]）。\n- **劳森判据**：聚变功率超过损失功率的自持条件。\n\n### 重要定理与推论\n\n- **恒星能量**：质子-质子链与 CNO 循环（[[cosmology]]、[[astrophysics]]）。\n- **聚变比裂变更高效**：单位质量能量更大、产物更清洁。\n- **磁约束托卡马克**：ITER 等受控聚变实验（[[plasma-confinement]]）。\n- **惯性约束**：激光聚变（NIF）。\n\n## 深化内容\n\n核聚变连接 [[plasma-physics]]（高温等离子体）、[[plasma-confinement]]（磁约束）、[[quantum-tunneling]]（势垒隧穿）与 [[cosmology]]（恒星核合成）。受控聚变是能源领域的长期目标。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Freidberg《Plasma Physics and Fusion Energy》、陈骝《等离子体物理学导论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-reactions]]、[[plasma-physics]]（高温燃料）、[[plasma-confinement]]（磁约束托卡马克）。\n- 机制：[[quantum-tunneling]]（库仑势垒）、[[cosmology]]（恒星核合成）。\n\n## 前置知识\n\n- [[nuclear-reactions]]、[[plasma-physics]]、[[quantum-tunneling]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-reactions",
     "name": "核反应",
     "weight": 5,
     "note": "聚变是一类核反应"
    },
    {
     "id": "plasma-confinement",
     "name": "磁约束聚变",
     "weight": 5,
     "note": "磁约束实现聚变"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 4,
     "note": "核聚变"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 4,
     "note": "聚变燃料是高温等离子体"
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 4,
     "note": "核心能源"
    },
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 3,
     "note": "恒星能量来源"
    },
    {
     "id": "quantum-tunneling",
     "name": "量子隧穿",
     "weight": 3,
     "note": "库仑势垒隧穿"
    },
    {
     "id": "stellar-evolution",
     "name": "恒星演化",
     "weight": 3,
     "note": "各阶段的核燃料"
    }
   ],
   "softLinks": [
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 2,
     "note": "恒星能量来源"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-models",
   "name": "核模型",
   "nameEn": "Nuclear Models",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "壳模型",
    "液滴模型"
   ],
   "tags": [
    "核物理",
    "模型",
    "结构"
   ],
   "keywords": [
    "液滴模型",
    "壳模型",
    "集体模型"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 核模型\n\n## 概述\n\n核模型是对核结构的**近似描述**，因为核力复杂、核是多体系统，无法精确求解。三大互补模型：**液滴模型**（把核视为带电液滴，解释结合能与裂变）、**壳模型**（核子在平均场中占据单粒子能级，解释幻数与自旋-宇称）、**集体模型**（玻尔-莫特森，结合单粒子与集体转动/振动，解释形变核）。各模型适用于不同观测量，共同构成核结构理论的近似框架。\n\n## 基本概念\n\n- **液滴模型**：结合能公式、裂变势垒。\n- **壳模型**：平均场、单粒子能级、幻数。\n- **集体模型**：形变、转动带、振动谱。\n- **对关联**：核子配对（BCS 类比）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n液滴模型的结合能（魏茨泽克公式）：\n\n$$ B=a_VA-a_SA^{2/3}-a_C\\frac{Z(Z-1)}{A^{1/3}}-a_A\\frac{(N-Z)^2}{A}+\\delta $$\n\n壳模型单粒子哈密顿量（含自旋-轨道）：\n\n$$ \\hat H=\\frac{\\hat p^2}{2m}+V(r)+\\hat{\\vec l}\\cdot\\hat{\\vec s}\\,f(r) $$\n\n集体模型转动能：$E_J=\\frac{\\hbar^2}{2\\mathcal I}J(J+1)$。\n\n### 推导要点\n\n- **液滴模型**：从宏观能量（体积、表面、库仑、对称、配对）拟合结合能。\n- **壳模型**：求解平均场单粒子能级，加自旋-轨道项得幻数。\n- **集体模型**：形变核的整体转动/振动作为集体自由度。\n\n### 重要定理与推论\n\n- **液滴模型解释裂变**：重核的库仑能与表面能竞争导致裂变势垒（[[nuclear-fission]]）。\n- **壳模型解释幻数**：壳层闭合处特别稳定（[[nuclear-structure]]）。\n- **集体模型解释转动带**：形变核的 $J(J+1)$ 转动谱。\n- **对关联**：BCS 类比的核子配对（[[superconductivity]]）。\n\n## 深化内容\n\n核模型的底层是 [[standard-model]] 的 QCD（核力）；壳模型连接 [[angular-momentum-qm]]；对关联类比 [[superconductivity]]。现代核结构计算用大规模壳模型、密度泛函。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Bohr & Mottelson《Nuclear Structure》、Casten《Nuclear Structure from a Simple Perspective》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-structure]]、[[nuclear-physics]]。\n- 基础：[[quantum-mechanics]]（平均场）、[[angular-momentum-qm]]（角动量耦合）、[[superconductivity]]（对关联类比）。\n- 底层理论：核力来自 [[standard-model]] 的 QCD。\n\n## 前置知识\n\n- [[nuclear-structure]]、[[quantum-mechanics]]、[[angular-momentum-qm]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 5,
     "note": "描述核结构的模型"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 4,
     "note": "核模型"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "壳模型的量子基础"
    },
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 3,
     "note": "壳模型角动量"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 3,
     "note": "底层为QCD"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 2,
     "note": "对关联类比BCS"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-physics",
   "name": "核物理",
   "nameEn": "Nuclear Physics",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "原子核物理"
   ],
   "tags": [
    "核物理",
    "原子核",
    "强相互作用"
   ],
   "keywords": [
    "原子核",
    "核力",
    "质量亏损",
    "结合能"
   ],
   "size": 138,
   "degree": 12,
   "pos": {
    "x": 15,
    "y": 55,
    "z": 0
   },
   "fixed": false,
   "body": "# 核物理\n\n## 概述\n\n核物理研究**原子核**的结构、性质与相互作用。原子核由 $Z$ 个质子与 $N$ 个中子（统称核子）组成，质量数 $A=Z+N$。核子由**强相互作用**（核力，其基本描述是 QCD）束缚，核的**结合能**来自质量亏损。核物理连接三个尺度：量子多体问题（核子尺度）、夸克-胶子（QCD 尺度）、以及天体（恒星核合成、中子星）。应用包括核能（裂变/聚变）、核医学（放射治疗、PET）、放射性测年与核天体物理。\n\n## 基本概念\n\n- **核子 / 质量数**：质子、中子；$A=Z+N$。\n- **结合能**：$B=(Zm_p+Nm_n-M_{\\mathrm{核}})c^2$。\n- **质量亏损**：结合能对应的质量减少。\n- **同位素 / 同量异位素**：同 $Z$ 不同 $N$ / 同 $A$ 不同 $Z,N$。\n- **核半径**：$R=r_0A^{1/3}$，$r_0\\approx1.2$ fm。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n结合能与半经验质量公式（魏茨泽克/贝特）：\n\n$$ B=a_VA-a_SA^{2/3}-a_C\\frac{Z(Z-1)}{A^{1/3}}-a_A\\frac{(N-Z)^2}{A}+\\delta(A,Z) $$\n\n各物理项：体积项（饱和性）、表面项、库仑项、对称能项、配对项。\n\n### 推导要点\n\n- **液滴模型**：把核视为带电液滴，逐项估计结合能（体积、表面、库仑、对称、配对）。\n- **质量亏损**：$E=mc^2$，结合能由核子质量之和与核质量之差给出。\n- **核力性质**：短程（$\\sim1$ fm）、饱和性、与电荷无关（近似）。\n\n### 重要定理与推论\n\n- **结合能曲线**：$B/A\\sim8$ MeV，$^{56}$Fe 附近最稳定。\n- **稳定岛**：中子/质子比对稳定核的约束。\n- **核力饱和性**：每个核子只与邻近核子作用（结合能 $\\propto A$）。\n- **对称能**：$N=Z$ 最稳定（轻核），重核需 $N>Z$。\n\n## 深化内容\n\n核物理连接 [[quantum-mechanics]]（多体）、[[standard-model]]（QCD 核力）、[[elementary-particles]]（夸克结构）、[[scattering-theory]]（核散射实验）。核天体物理（[[cosmology]] 的原初核合成、[[supernovae]] 的重元素合成）是重要交叉。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Wong《Introductory Nuclear Physics》、Bohr & Mottelson《Nuclear Structure》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-structure]]、[[nuclear-decay]]、[[nuclear-reactions]]、[[quantum-mechanics]]。\n- 基础理论：核力是 [[standard-model]] 中强相互作用的低能体现，核子由夸克组成（[[elementary-particles]]）。\n- 实验方法：[[scattering-theory]]；应用：[[nuclear-fission]]/[[nuclear-fusion]]（能源）、[[cosmology]]（原初核合成）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[scattering-theory]]、[[standard-model]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 5,
     "note": "放射性衰变"
    },
    {
     "id": "nuclear-reactions",
     "name": "核反应",
     "weight": 5,
     "note": "核反应"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 5,
     "note": "原子核的结构"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "微观理论基础"
    },
    {
     "id": "nuclear-fission",
     "name": "核裂变",
     "weight": 4,
     "note": "核裂变"
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 4,
     "note": "核聚变"
    },
    {
     "id": "nuclear-models",
     "name": "核模型",
     "weight": 4,
     "note": "核模型"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 3,
     "note": "原初核合成"
    },
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 3,
     "note": "核子由夸克组成"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 3,
     "note": "核散射实验方法"
    },
    {
     "id": "supernovae",
     "name": "超新星",
     "weight": 3,
     "note": "重元素核合成"
    }
   ],
   "softLinks": [
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 3,
     "note": "强相互作用(QCD)是核力的基本描述"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-reactions",
   "name": "核反应",
   "nameEn": "Nuclear Reactions",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "核反应过程"
   ],
   "tags": [
    "核物理",
    "反应",
    "截面"
   ],
   "keywords": [
    "反应截面",
    "反应能",
    "复合核"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 核反应\n\n## 概述\n\n核反应是核子或原子核与靶核碰撞引发的核转变，一般形式 $a+A\\to B+b$（或 $A(a,b)B$）。反应由**反应能 $Q$ 值**表征（$Q>0$ 放能、$Q<0$ 吸能），定量描述用**截面** $\\sigma$。主要机制：**复合核模型**（入射粒子被吸收形成复合核后衰变）、**直接反应**（单次碰撞）、**共振反应**。核反应是 [[nuclear-fission]] 与 [[nuclear-fusion]] 的共同框架，也是核合成的途径。\n\n## 基本概念\n\n- **反应能（Q 值）**：$Q=(m_a+m_A-m_B-m_b)c^2$。\n- **截面** $\\sigma$：反应概率（面积量纲）。\n- **复合核**：中间态的激发核。\n- **共振**：截面在特定能量的峰。\n- **守恒律**：能量、动量、电荷、核子数守恒。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n反应能与截面：\n\n$$ Q=(m_a+m_A-m_B-m_b)c^2,\\qquad \\sigma=\\frac{\\text{反应率}}{\\text{入射通量}} $$\n\n**布莱特-维格纳共振**：\n\n$$ \\sigma(E)\\propto\\frac{1}{(E-E_0)^2+\\Gamma^2/4} $$\n\n### 推导要点\n\n- **Q 值**：由质能关系 $E=mc^2$，反应前后质量差转化为动能。\n- **复合核**：入射粒子与靶核合并为激发复合核，再衰变（玻尔模型）。\n- **共振**：复合核激发态对应截面峰。\n\n### 重要定理与推论\n\n- **核子数、电荷守恒**：反应前后 $A$、$Z$ 守恒。\n- **截面与反应机制**：复合核、直接、共振三种机制。\n- **卢瑟福散射**：$\\alpha$ 粒子散射（[[scattering-theory]] 的应用）。\n- **核合成**：恒星中的核反应（[[nuclear-fusion]]、[[cosmology]]）。\n\n## 深化内容\n\n核反应是 [[nuclear-fission]]、[[nuclear-fusion]]、核合成的框架，与 [[scattering-theory]]（截面计算）直接相关。重离子反应、散裂反应是前沿。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Lilley《Nuclear Physics》、Satchler《Introduction to Nuclear Reactions》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-physics]]、[[scattering-theory]]（截面与散射振幅）。\n- 关联：[[nuclear-fission]]/[[nuclear-fusion]]（两类最重要的反应）、[[nuclear-structure]]。\n\n## 前置知识\n\n- [[nuclear-physics]]、[[scattering-theory]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-fission",
     "name": "核裂变",
     "weight": 5,
     "note": "裂变是核反应"
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 5,
     "note": "聚变是核反应"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 5,
     "note": "核心过程"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 4,
     "note": "散射与截面"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 3,
     "note": ""
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "nuclear-structure",
   "name": "原子核结构",
   "nameEn": "Nuclear Structure",
   "domain": "nuclear-physics",
   "domainName": "核物理",
   "color": "#f9ca24",
   "aliases": [
    "核结构"
   ],
   "tags": [
    "核物理",
    "原子核",
    "结构"
   ],
   "keywords": [
    "壳结构",
    "幻数",
    "形变",
    "激发态"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 原子核结构\n\n## 概述\n\n原子核是一个**有界量子多体系统**（数十到数百个全同费米子核子），其结构由核力（短程、饱和）决定。核结构呈现三类现象：**壳结构**（幻数处特别稳定）、**集体运动**（转动、振动）、**核子配对**（对关联）。核的基态性质（自旋、宇称、磁矩、电四极矩）与激发谱（转动带、振动谱）是核结构研究的主要内容。\n\n## 基本概念\n\n- **幻数**：2, 8, 20, 28, 50, 82, 126（壳层闭合）。\n- **核自旋 / 宇称**：基态角动量与空间反演。\n- **形变**：核偏离球形（四极形变）。\n- **激发态 / 转动带**：集体激发的能谱。\n- **对关联**：时间反演配对核子。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n核半径与电荷分布：\n\n$$ R=r_0A^{1/3},\\qquad r_0\\approx1.2\\,\\mathrm{fm} $$\n\n壳模型单粒子能级（自旋-轨道耦合）：\n\n$$ E_{nlj},\\qquad \\hat H_{\\mathrm{单粒子}}=\\frac{\\hat p^2}{2m}+V(r)+\\hat{\\vec l}\\cdot\\hat{\\vec s}\\,f(r) $$\n\n### 推导要点\n\n- **壳结构**：核子在平均场中占据单粒子能级，自旋-轨道耦合项 $\\vec l\\cdot\\vec s$ 给出正确的幻数序列（[[nuclear-models]] 的壳模型）。\n- **集体转动**：形变核的转动能 $E_J=\\frac{\\hbar^2}{2\\mathcal I}J(J+1)$，转动带。\n- **对关联**：核子配对降低能量（超导 BCS 类比）。\n\n### 重要定理与推论\n\n- **幻数**：壳层闭合处结合能、稳定性异常（类似原子电子壳层）。\n- **核形状**：大部分核近球形，某些核显著形变（椭球）。\n- **集体谱**：振动谱（等距）、转动谱（$J(J+1)$）。\n- **对关联**：偶数核更稳定（奇偶效应）。\n\n## 深化内容\n\n核结构理论用 [[nuclear-models]]（壳模型、集体模型）描述；对关联类比 [[superconductivity]]（BCS）。核结构通过衰变（[[nuclear-decay]]）、散射、光谱实验研究。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Bohr & Mottelson《Nuclear Structure》、Casten《Nuclear Structure from a Simple Perspective》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-models]]（描述方法）、[[nuclear-physics]]。\n- 理论基础：[[quantum-mechanics]]（多体）、[[identical-particles]]/[[spin]]（全同费米子与自旋）。\n- 关联：[[nuclear-decay]]（衰变反映结构）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[angular-momentum-qm]]、[[nuclear-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-models",
     "name": "核模型",
     "weight": 5,
     "note": "结构模型"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 5,
     "note": "学科核心"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "量子多体问题"
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 3,
     "note": "核子是全同费米子"
    },
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 3,
     "note": "衰变反映结构"
    },
    {
     "id": "nuclear-fission",
     "name": "核裂变",
     "weight": 3,
     "note": "液滴模型解释裂变"
    },
    {
     "id": "nuclear-reactions",
     "name": "核反应",
     "weight": 3,
     "note": ""
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 3,
     "note": "核自旋"
    }
   ],
   "softLinks": [
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "geometric-optics",
   "name": "几何光学",
   "nameEn": "Geometric Optics",
   "domain": "optics",
   "domainName": "光学",
   "color": "#7f8c8d",
   "aliases": [
    "射线光学"
   ],
   "tags": [
    "光学",
    "射线",
    "成像"
   ],
   "keywords": [
    "费马原理",
    "斯涅尔定律",
    "透镜成像"
   ],
   "size": 64,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 几何光学\n\n## 概述\n\n几何光学在**波长远小于障碍物/孔径**的极限下用**光线**（射线）描述光的传播，是设计透镜、望远镜、显微镜等成像系统的框架。其三条基本定律——直线传播、反射定律、折射定律（斯涅尔定律）——都可从更根本的**费马原理**（光沿光程取极值的路径传播）导出。成像由**高斯光学**（近轴近似）描述，给出薄透镜公式与放大率。几何光学是波动光学在 $\\lambda\\to0$ 的极限。\n\n## 基本概念\n\n- **光线**：光的传播方向。\n- **光程**：$n\\,s$（几何长度 × 折射率）。\n- **折射率**：$n=c/v$。\n- **物距 / 像距 / 焦距**：$u$、$v$、$f$。\n- **近轴近似**：小角近似 $\\sin\\theta\\approx\\theta$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n反射与折射定律：\n\n$$ \\theta_i=\\theta_r,\\qquad n_1\\sin\\theta_1=n_2\\sin\\theta_2 $$\n\n**费马原理**：\n\n$$ \\delta\\int n\\,ds=0 $$\n\n**薄透镜公式（高斯光学）**：\n\n$$ \\frac1f=\\frac1u+\\frac1v,\\qquad M=-\\frac vu $$\n\n### 推导要点\n\n- **斯涅尔定律**：由费马原理对光程求变分，或由惠更斯原理构造折射波前。\n- **薄透镜公式**：对球面折射逐面应用斯涅尔定律，近轴近似下得到。\n- **费马原理**：[[variational-calculus]] 的直接应用（光程泛函的极值）。\n\n### 重要定理与推论\n\n- **费马原理**：反射、折射、直线传播都是光程极值的结果。\n- **全内反射**：$n_1>n_2$ 且 $\\theta_1>\\theta_c=\\arcsin(n_2/n_1)$ 时发生（光纤基础）。\n- **成像关系**：透镜、球面镜的物像关系。\n- **像差**：球差、色差等偏离理想成像。\n\n## 深化内容\n\n几何光学是 [[wave-optics]] 的短波极限；费马原理与[[variational-calculus]]（最小作用量）同源，且与量子力学的[[path-integral]]（相位稳定）有深刻类比。应用：望远镜、显微镜、相机、[[lasers]] 光束。延伸阅读可参考 Hecht《Optics》、Born & Wolf《Principles of Optics》、赵凯华《光学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[optics]]（分支）、[[wave-optics]]（波动修正，其上位形式）、[[variational-calculus]]（费马原理）。\n- 应用：望远镜、显微镜、相机设计、[[lasers]] 光束。\n\n## 前置知识\n\n- [[optics]]、[[variational-calculus]]、[[electromagnetic-waves]]",
   "supersededBy": [
    {
     "id": "wave-optics",
     "name": "波动光学"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "optics",
     "name": "光学",
     "weight": 5,
     "note": "光学分支"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 4,
     "note": "费马原理"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 2,
     "note": ""
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 2,
     "note": "光束传播"
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "wave-optics",
     "name": "波动光学",
     "weight": 4,
     "note": "波动极限"
    }
   ]
  },
  {
   "id": "lasers",
   "name": "激光",
   "nameEn": "Lasers",
   "domain": "optics",
   "domainName": "光学",
   "color": "#7f8c8d",
   "aliases": [
    "激光器",
    "受激辐射"
   ],
   "tags": [
    "光学",
    "光源",
    "相干"
   ],
   "keywords": [
    "受激辐射",
    "粒子数反转",
    "谐振腔",
    "相干光"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 激光\n\n## 概述\n\n激光（受激辐射光放大）基于爱因斯坦 1917 年预言的**受激辐射**：光子诱导高能级原子发射与之同频率、同相位、同方向的光子，实现相干放大。实现激光需要两个条件：**粒子数反转**（上能级布居大于下能级，需泵浦）与**光学谐振腔**（提供反馈与模式选择）。激光输出单色、相干、准直的高亮度光束，是 [[quantum-optics]] 的核心光源，广泛用于工业、医学、通信、精密测量与量子技术。\n\n## 基本概念\n\n- **受激辐射 / 自发辐射 / 吸收**：三种光-物质过程。\n- **粒子数反转**：$N_2>N_1$（上能级布居多）。\n- **增益介质 / 泵浦**：放大光的介质与能量来源。\n- **谐振腔**：提供反馈与选模。\n- **阈值条件**：增益超过损耗。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n爱因斯坦系数关系（A、B 系数）：\n\n$$ A_{21},\\quad B_{12}=B_{21},\\qquad \\frac{A_{21}}{B_{21}}=\\frac{8\\pi h\\nu^3}{c^3} $$\n\n**粒子数反转**条件（玻尔兹曼分布被打破）：\n\n$$ N_2>N_1 $$\n\n激光阈值（增益 = 损耗）：\n\n$$ g_{\\mathrm{th}}=\\alpha+\\frac1{2L}\\ln\\frac1{R_1R_2} $$\n\n### 推导要点\n\n- **爱因斯坦系数**：由热平衡（玻尔兹曼分布 + 普朗克辐射）导出 $A,B$ 系数的关系（[[statistical-mechanics]]、[[blackbody-radiation]]）。\n- **粒子数反转**：泵浦把粒子抽运到上能级，打破热平衡布居（热平衡时 $N_2<N_1$）。\n- **阈值**：谐振腔内往返增益需补偿损耗（镜面反射 $R$、介质损耗 $\\alpha$）。\n\n### 重要定理与推论\n\n- **受激辐射的相干性**：受激光子与入射光子同相位（相干放大）。\n- **激光的模式**：纵模（频率）与横模（高斯光束 $TEM_{00}$）。\n- **单色性 / 相干性**：激光的谱线极窄（[[quantum-optics]] 的相干态近似）。\n- **光束质量**：高斯光束的准直与聚焦。\n\n## 深化内容\n\n激光是 [[quantum-optics]] 的核心光源，与 [[waveguides-resonators]]（谐振腔）、[[electromagnetic-radiation]]（受激辐射）相关。激光冷却（[[laser-cooling]]）、光频梳（精密测量）、自由电子激光是前沿。延伸阅读可参考 Siegman《Lasers》、Svelto《Principles of Lasers》、Milonni & Eberly《Laser Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-optics]]（光场性质）、[[waveguides-resonators]]（腔）、[[optics]]。\n- 原理：[[quantum-mechanics]]（受激辐射）、[[statistical-mechanics]]（粒子数布居）。\n\n## 前置知识\n\n- [[quantum-optics]]、[[electromagnetic-radiation]]、[[statistical-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "laser-cooling",
     "name": "激光冷却",
     "weight": 4,
     "note": "工具"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 4,
     "note": "应用领域"
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 4,
     "note": "光场量子性质"
    },
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 3,
     "note": "激光工具"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "受激辐射的量子基础"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": "玻尔兹曼分布与粒子数反转"
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 3,
     "note": "谐振腔"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 2,
     "note": ""
    },
    {
     "id": "geometric-optics",
     "name": "几何光学",
     "weight": 2,
     "note": "光束传播"
    }
   ],
   "softLinks": [
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "optics",
   "name": "光学",
   "nameEn": "Optics",
   "domain": "optics",
   "domainName": "光学",
   "color": "#7f8c8d",
   "aliases": [
    "光学",
    "光物理"
   ],
   "tags": [
    "光学",
    "光",
    "波动"
   ],
   "keywords": [
    "几何光学",
    "波动光学",
    "光子"
   ],
   "size": 138,
   "degree": 12,
   "pos": {
    "x": 5,
    "y": 55,
    "z": 0
   },
   "fixed": false,
   "body": "# 光学\n\n## 概述\n\n光学研究光的产生、传播、探测及其与物质的相互作用。光具有**波粒二象性**：既是电磁波（频率 $10^{14}\\sim10^{16}$ Hz，由 [[maxwell-equations]] 描述），又是光子流（由 [[quantum-optics]] 描述）。光学按近似层次分为三大分支：**几何光学**（光线近似，成像）、**波动光学**（干涉、衍射、偏振）、**量子光学**（光子统计、相干态）。光速 $c\\approx3\\times10^8$ m/s，折射率 $n=c/v$ 描述介质中传播。\n\n## 基本概念\n\n- **光速 / 折射率**：$c$、$n=c/v$。\n- **波长 / 频率**：可见光 $\\lambda\\sim400\\sim700$ nm。\n- **光线 / 波前**：几何光学的射线、波动光学的等相面。\n- **光子**：光的量子（能量 $h\\nu$）。\n- **相干性**：时间/空间相干，干涉的前提。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n三大分支的核心关系：\n\n- **几何光学**：斯涅尔定律 $n_1\\sin\\theta_1=n_2\\sin\\theta_2$。\n- **波动光学**：干涉强度 $I=I_1+I_2+2\\sqrt{I_1I_2}\\cos\\delta$。\n- **量子光学**：光子能量 $E=h\\nu$，相干态描述激光。\n\n### 推导要点\n\n- **几何光学是波动光学的短波极限**：$\\lambda\\to0$ 时惠更斯原理退化为光线传播。\n- **干涉来自叠加原理**：两列波相位差 $\\delta$ 决定相长/相消。\n- **光子能量**：$E=h\\nu$（普朗克-爱因斯坦关系），是 [[blackbody-radiation]] 与光电效应的基础。\n\n### 重要定理与推论\n\n- **光的电磁本质**：光速 $c=1/\\sqrt{\\mu_0\\varepsilon_0}$（[[maxwell-equations]]）。\n- **干涉、衍射、偏振**：波动性的三大表现。\n- **衍射极限**：$\\theta\\approx1.22\\lambda/D$（光学分辨率的极限）。\n- **波粒二象性**：光既是波又是粒子（[[quantum-optics]]）。\n\n## 深化内容\n\n光学连接 [[electromagnetic-waves]]、[[quantum-optics]]、[[fourier-analysis]]（衍射 = 傅里叶变换）；应用遍及成像、通信、激光、光谱与量子信息（[[quantum-information]]）。延伸阅读可参考 Born & Wolf《Principles of Optics》、Hecht《Optics》、Griffiths《电动力学导论》（光作为电磁波）。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electromagnetic-waves]]（本质）、[[geometric-optics]]/[[wave-optics]]（分支）、[[quantum-optics]]（量子）、[[lasers]]（光源）。\n- 基础：[[maxwell-equations]]、[[electromagnetic-media]]、[[fourier-analysis]]（衍射计算）。\n\n## 前置知识\n\n- [[electromagnetic-waves]]、[[wave-mechanics]]、[[maxwell-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 5,
     "note": "光的电磁本质"
    },
    {
     "id": "geometric-optics",
     "name": "几何光学",
     "weight": 5,
     "note": "光的直线传播近似"
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 5,
     "note": "光的量子理论"
    },
    {
     "id": "wave-optics",
     "name": "波动光学",
     "weight": 5,
     "note": "干涉衍射"
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 4,
     "note": "相干光源"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 4,
     "note": "波动光学"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 3,
     "note": "折射与色散"
    },
    {
     "id": "liquid-crystals",
     "name": "液晶",
     "weight": 3,
     "note": "双折射与显示"
    },
    {
     "id": "waveguides-resonators",
     "name": "波导与谐振腔",
     "weight": 3,
     "note": "光纤与集成光学"
    },
    {
     "id": "semiconductors",
     "name": "半导体",
     "weight": 2,
     "note": "光电器件"
    }
   ],
   "softLinks": [
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 3,
     "note": "夫琅禾费衍射即空间傅里叶变换"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 3,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "quantum-optics",
   "name": "量子光学",
   "nameEn": "Quantum Optics",
   "domain": "optics",
   "domainName": "光学",
   "color": "#7f8c8d",
   "aliases": [
    "光量子理论",
    "光子统计"
   ],
   "tags": [
    "光学",
    "量子",
    "光子"
   ],
   "keywords": [
    "光子",
    "相干态",
    "压缩光",
    "腔量子电动力学"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 量子光学\n\n## 概述\n\n量子光学研究**光场的量子性质**及其与物质的相互作用。光场按 [[quantum-harmonic-oscillator]] 模式量子化，光子的量子态由光子数态（Fock 态）或**相干态**描述；相干态是最接近经典光的量子态（激光近似为相干态）。量子光学揭示光子反聚束、压缩光、单光子源、纠缠光子对等纯量子现象，并发展出**腔量子电动力学（cavity QED）**，是量子信息与精密测量的实验平台。\n\n## 基本概念\n\n- **光子数态（Fock 态）** $|n\\rangle$：确定光子数的态。\n- **相干态** $|\\alpha\\rangle$：$a|\\alpha\\rangle=\\alpha|\\alpha\\rangle$，最接近经典光。\n- **压缩态**：某一正交分量涨落低于真空。\n- **腔 QED**：腔中单原子与光场强耦合。\n- **单光子源 / 纠缠光子对**：量子光学的资源。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n光场量子化与相干态：\n\n$$ \\hat H=\\sum_{\\vec k}\\hbar\\omega_{\\vec k}\\Big(a_{\\vec k}^\\dagger a_{\\vec k}+\\frac12\\Big),\\qquad |\\alpha\\rangle=e^{-|\\alpha|^2/2}\\sum_n\\frac{\\alpha^n}{\\sqrt{n!}}|n\\rangle $$\n\n光子数分布（相干态为泊松）：\n\n$$ P(n)=e^{-|\\alpha|^2}\\frac{|\\alpha|^{2n}}{n!} $$\n\n### 推导要点\n\n- **光场量子化**：电磁场按模式展开，振幅系数提升为产生/湮灭算符（[[second-quantization]]、[[qed]]）。\n- **相干态**：是湮灭算符的本征态，光子数服从泊松分布。\n- **光子反聚束**：$g^{(2)}(0)<1$，单光子发射的特征（经典光不可能）。\n\n### 重要定理与推论\n\n- **相干态**：激光的近经典描述（相位确定）。\n- **光子反聚束 / 压缩光**：纯量子现象（低于经典极限的涨落）。\n- **纠缠光子对**：自发参量下转换（SPDC）产生，用于 [[quantum-information]]。\n- **腔 QED**：原子-光场强耦合，用于量子门与量子模拟。\n\n## 深化内容\n\n量子光学是 [[quantum-information]]（光子量子比特、量子密钥分发 [[quantum-cryptography]]）、[[entanglement]]（纠缠光子）、[[qed]]（光-物质相互作用）的实验平台；[[laser-cooling]] 也基于光-原子动量交换。延伸阅读可参考 Scully & Zubairy《Quantum Optics》、Walls & Milburn《Quantum Optics》、Loudon《The Quantum Theory of Light》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[qed]]（相互作用）、[[quantum-harmonic-oscillator]]（场量子化）、[[lasers]]（光源）。\n- 应用：[[quantum-information]]（光子量子比特、量子密钥分发）、[[entanglement]]（纠缠光子）、[[laser-cooling]]。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[quantum-harmonic-oscillator]]、[[qed]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "optics",
     "name": "光学",
     "weight": 5,
     "note": "光学分支"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 4,
     "note": "光与物质量子相互作用"
    },
    {
     "id": "laser-cooling",
     "name": "激光冷却",
     "weight": 4,
     "note": "光-原子动量交换"
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 4,
     "note": "相干光源"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 4,
     "note": "光与物质相互作用"
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 4,
     "note": "光场模式量子化"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 4,
     "note": "光子量子信息"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 3,
     "note": "光与原子相互作用"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "wave-optics",
   "name": "波动光学",
   "nameEn": "Wave Optics",
   "domain": "optics",
   "domainName": "光学",
   "color": "#7f8c8d",
   "aliases": [
    "物理光学"
   ],
   "tags": [
    "光学",
    "波动",
    "干涉衍射"
   ],
   "keywords": [
    "惠更斯原理",
    "干涉",
    "衍射",
    "偏振"
   ],
   "size": 74,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 波动光学\n\n## 概述\n\n波动光学用波动理论解释光的**干涉、衍射与偏振**——这些现象无法由几何光学（光线）描述。核心原理是**惠更斯-菲涅尔原理**：波前每一点是次波源，次波的相干叠加给出传播。波动光学揭示了光的横波性（偏振），并给出**衍射极限**（光学分辨率的根本限制）。夫琅禾费衍射与空间**傅里叶变换**（[[fourier-analysis]]）的对应使波动光学与信号处理相通。\n\n## 基本概念\n\n- **惠更斯-菲涅尔原理**：次波相干叠加。\n- **干涉 / 衍射**：波的叠加 / 波绕过障碍物。\n- **偏振**：横波的振动方向（线、圆、椭圆偏振）。\n- **相干性**：时间/空间相干（[[electromagnetic-waves]]）。\n- **衍射极限**：$\\theta\\approx1.22\\lambda/D$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n双光束干涉强度：\n\n$$ I=I_1+I_2+2\\sqrt{I_1I_2}\\cos\\delta $$\n\n**杨氏双缝**干涉条纹间距：\n\n$$ \\Delta x=\\frac{\\lambda D}{d} $$\n\n单缝夫琅禾费衍射的强度分布：\n\n$$ I(\\theta)=I_0\\Big(\\frac{\\sin\\beta}{\\beta}\\Big)^2,\\qquad \\beta=\\frac{\\pi a\\sin\\theta}{\\lambda} $$\n\n### 推导要点\n\n- **杨氏双缝**：两缝到屏的光程差 $\\delta=2\\pi d\\sin\\theta/\\lambda$，相长（亮纹）条件 $d\\sin\\theta=m\\lambda$。\n- **夫琅禾费衍射 = 傅里叶变换**：远场振幅是孔径函数的傅里叶变换（[[fourier-analysis]]）。\n- **偏振**：由麦克斯韦方程的横波解 $\\vec E\\perp\\vec k$ 决定。\n\n### 重要定理与推论\n\n- **干涉 / 衍射**：波动性的直接证据（杨氏、单缝、光栅）。\n- **衍射极限**：$\\theta\\approx1.22\\lambda/D$，光学分辨率的极限。\n- **光栅方程**：$d\\sin\\theta=m\\lambda$，光栅用于分光。\n- **布儒斯特角**：$\\tan\\theta_B=n_2/n_1$，反射光完全偏振。\n\n## 深化内容\n\n波动光学是 [[optics]] 的核心；夫琅禾费衍射与[[fourier-analysis]] 对应是傅里叶光学的基石。衍射极限与 [[lasers]]、显微镜分辨（阿贝极限）相关。延伸阅读可参考 Hecht《Optics》、Born & Wolf《Principles of Optics》、Goodman《Introduction to Fourier Optics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electromagnetic-waves]]（物理本质）、[[fourier-analysis]]（衍射数学）、[[optics]]。\n- 上位：短波极限退化为 [[geometric-optics]]；量子层面走向 [[quantum-optics]]。\n\n## 前置知识\n\n- [[electromagnetic-waves]]、[[fourier-analysis]]、[[optics]]",
   "supersededBy": [],
   "supersedes": [
    {
     "id": "geometric-optics",
     "name": "几何光学"
    }
   ],
   "links": [
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 5,
     "note": "光的波动本质"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 5,
     "note": "光学分支"
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": "夫琅禾费衍射即傅里叶变换"
    },
    {
     "id": "electromagnetic-media",
     "name": "介质中的电磁场",
     "weight": 3,
     "note": "折射偏振"
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "geometric-optics",
     "name": "几何光学",
     "weight": 4,
     "note": "几何光学是极限"
    }
   ]
  },
  {
   "id": "elementary-particles",
   "name": "基本粒子",
   "nameEn": "Elementary Particles",
   "domain": "particle-physics",
   "domainName": "粒子物理",
   "color": "#d35400",
   "aliases": [
    "粒子分类",
    "费米子",
    "玻色子"
   ],
   "tags": [
    "粒子物理",
    "分类",
    "标准模型"
   ],
   "keywords": [
    "夸克",
    "轻子",
    "规范玻色子",
    "希格斯玻色子"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 基本粒子\n\n## 概述\n\n基本粒子是标准模型中不可再分的\"点\"粒子，按**自旋**分为两大类：**费米子**（自旋 1/2，构成物质）与**玻色子**（整数自旋，传递相互作用）。费米子包括夸克与轻子，各分三代；玻色子包括规范玻色子（光子、$W^\\pm$、$Z$、胶子）与标量希格斯玻色子。粒子由自旋-统计定理（[[spin]]、[[identical-particles]]）决定统计性质，其质量由希格斯机制（[[spontaneous-symmetry-breaking]]）产生。\n\n## 基本概念\n\n- **夸克**：$u,d,c,s,t,b$，带色荷、分数电荷（$+\\frac23e$、$-\\frac13e$）。\n- **轻子**：$e,\\mu,\\tau$ 与中微子 $\\nu_e,\\nu_\\mu,\\nu_\\tau$。\n- **规范玻色子**：$\\gamma$、$W^\\pm$、$Z$、胶子 $g$。\n- **希格斯玻色子** $H$：标量玻色子。\n- **三代结构**：费米子分三代（质量递增）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n粒子清单（标准模型）：\n\n| 类别 | 粒子 | 自旋 | 相互作用 |\n|---|---|---|---|\n| 夸克 | $u,d,c,s,t,b$ | $1/2$ | 强、电磁、弱 |\n| 轻子 | $e,\\mu,\\tau,\\nu_{e,\\mu,\\tau}$ | $1/2$ | 电磁、弱 |\n| 规范玻色子 | $\\gamma,W^\\pm,Z,g$ | $1$ | 对应相互作用 |\n| 希格斯 | $H$ | $0$ | 质量起源 |\n\n### 推导要点\n\n- **自旋-统计**：半整数自旋→费米子（泡利原理）、整数→玻色子（[[spin]]、[[identical-particles]]）。\n- **夸克禁闭**：夸克带色荷，强相互作用（QCD）使孤立夸克不存在，只以强子（$q\\bar q$ 介子、$qqq$ 重子）形式出现。\n- **质量起源**：希格斯机制给 $W^\\pm,Z$ 与费米子质量（[[spontaneous-symmetry-breaking]]）。\n\n### 重要定理与推论\n\n- **三代之谜**：为何恰好三代费米子，是标准模型未解之谜。\n- **强子结构**：质子 = $uud$、中子 = $udd$。\n- **中微子振荡**：中微子有微小质量且味混合（超越标准模型）。\n- **反粒子**：每种粒子有对应的反粒子（电荷共轭）。\n\n## 深化内容\n\n基本粒子的分类与性质是 [[standard-model]] 的核心；超越标准模型（超对称、暗物质、第四代？）是前沿。粒子性质（质量、寿命、衰变道）由 Particle Data Group 汇编。延伸阅读可参考 Griffiths《Introduction to Elementary Particles》、Halzen & Martin《Quarks and Leptons》、Particle Data Group。\n\n## 与其他知识的联系\n\n- 紧密相关：[[standard-model]]、[[particle-physics]]、[[spin]]（自旋-统计）。\n- 理论：[[quantum-field-theory]]、[[spontaneous-symmetry-breaking]]（希格斯机制）、[[identical-particles]]。\n\n## 前置知识\n\n- [[standard-model]]、[[spin]]、[[quantum-field-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 5,
     "note": "学科对象"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 5,
     "note": "粒子清单的理论框架"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 4,
     "note": ""
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 4,
     "note": "自旋决定费米/玻色"
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 3,
     "note": ""
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 3,
     "note": "核子由夸克组成"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 3,
     "note": "希格斯玻色子"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "particle-physics",
   "name": "粒子物理",
   "nameEn": "Particle Physics",
   "domain": "particle-physics",
   "domainName": "粒子物理",
   "color": "#d35400",
   "aliases": [
    "高能物理",
    "基本粒子"
   ],
   "tags": [
    "粒子物理",
    "加速器",
    "标准模型"
   ],
   "keywords": [
    "标准模型",
    "探测器",
    "散射截面"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 粒子物理\n\n## 概述\n\n粒子物理（高能物理）研究物质的最基本构成与基本相互作用，其理论框架是**标准模型**（[[standard-model]]）。实验方法：用**加速器**把粒子加速到高能碰撞，用**探测器**记录产物，测量**散射截面**与**衰变宽度**，与理论预言（费曼图计算）比较。粒子物理不仅揭示微观规律，还连接宇宙学（早期宇宙、暗物质、原初核合成），并持续寻找超越标准模型的新物理（超对称、暗物质、中微子质量）。\n\n## 基本概念\n\n- **散射截面** $\\sigma$：反应概率的度量（面积量纲）。\n- **亮度** $\\mathcal L$：加速器单位面积粒子流。\n- **衰变宽度 / 寿命**：$\\Gamma$、$\\tau=\\hbar/\\Gamma$。\n- **共振**：中间态粒子（如 $Z$ 玻色子共振）。\n- **事例 / 探测器**：碰撞事件的记录。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n截面与实验测量：\n\n$$ \\sigma=\\frac{N}{\\mathcal L\\,\\epsilon} $$\n\n（$N$ 为事例数、$\\epsilon$ 为探测效率）。\n\n**共振截面**（布莱特-维格纳）：\n\n$$ \\sigma(E)\\propto\\frac{1}{(E-M)^2+\\Gamma^2/4} $$\n\n### 推导要点\n\n- **截面计算**：由散射振幅 $\\mathcal M$（[[feynman-diagrams]]）经 $d\\sigma\\propto|\\mathcal M|^2 d\\Pi$ 积分得到。\n- **共振峰**：中间态粒子产生共振，截面在 $E=M$ 处达峰、宽度 $\\Gamma$。\n- **亮度的意义**：截面 = 事例率 / 亮度，把理论可算量与实验可测量联系。\n\n### 重要定理与推论\n\n- **标准模型检验**：对撞机实验（LEP、Tevatron、LHC）精确验证 [[standard-model]]。\n- **粒子发现**：$W^\\pm,Z$（1983）、顶夸克（1995）、希格斯玻色子（2012）。\n- **守恒律**：能量、动量、电荷、重子数、轻子数守恒（选择定则）。\n- **超越标准模型**：暗物质、中微子质量、超对称是当前前沿。\n\n## 深化内容\n\n粒子物理与 [[cosmology]]（早期宇宙、暗物质）、[[nuclear-physics]]（重离子对撞、夸克胶子等离子体）交叉。实验技术（加速器、探测器、数据分析）是物理与工程的结合。延伸阅读可参考 Griffiths《Introduction to Elementary Particles》、Halzen & Martin《Quarks and Leptons》、Particle Data Group《Review of Particle Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[standard-model]]、[[elementary-particles]]、[[quantum-field-theory]]。\n- 工具：[[feynman-diagrams]]、[[scattering-theory]]。\n- 交叉：[[cosmology]]（天体粒子物理）、[[condensed-matter-physics]]（探测器材料）。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[scattering-theory]]、[[standard-model]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 5,
     "note": "粒子分类"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 5,
     "note": "理论框架"
    },
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 4,
     "note": "计算工具"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 3,
     "note": "早期宇宙"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 3,
     "note": "实验方法"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 2,
     "note": "超越标准模型"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "standard-model",
   "name": "粒子物理标准模型",
   "nameEn": "Standard Model of Particle Physics",
   "domain": "particle-physics",
   "domainName": "粒子物理",
   "color": "#d35400",
   "aliases": [
    "标准模型",
    "SM"
   ],
   "tags": [
    "粒子物理",
    "规范场论",
    "统一理论"
   ],
   "keywords": [
    "电弱统一",
    "量子色动力学",
    "希格斯机制"
   ],
   "size": 158,
   "degree": 14,
   "pos": null,
   "fixed": false,
   "body": "# 粒子物理标准模型\n\n## 概述\n\n标准模型是描述三种基本相互作用（**电磁、弱、强**）的量子场论，是粒子物理的理论框架。其规范群为\n\n$$ SU(3)_c\\times SU(2)_L\\times U(1)_Y $$\n\n其中 $SU(3)_c$ 是量子色动力学（QCD，强相互作用），$SU(2)_L\\times U(1)_Y$ 经**电弱对称性破缺**（希格斯机制）统一电磁与弱相互作用。标准模型预言并解释了全部基本粒子（2012 年发现希格斯玻色子），经 LEP、LHC 等高精度实验验证，但仍未包含引力、暗物质、中微子质量与宇宙学常数问题。\n\n## 基本概念\n\n- **规范群**：$SU(3)_c\\times SU(2)_L\\times U(1)_Y$。\n- **量子色动力学（QCD）**：强相互作用，胶子传递，夸克禁闭、渐近自由。\n- **电弱理论**：电磁 + 弱相互作用，经希格斯机制破缺为 $U(1)_{\\mathrm{em}}$。\n- **希格斯机制**：$W^\\pm,Z$ 与费米子质量起源。\n- **可重整化性**：紫外发散可由有限参数吸收。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n规范群与协变导数：\n\n$$ SU(3)_c\\times SU(2)_L\\times U(1)_Y,\\qquad D_\\mu=\\partial_\\mu-ig_sG_\\mu^aT^a-igW_\\mu^i\\tau^i-ig'B_\\mu Y $$\n\n电弱对称性破缺后，$W^\\pm,Z$ 获得质量：\n\n$$ m_W=\\frac12gv,\\qquad m_Z=\\frac12\\sqrt{g^2+g'^2}\\,v,\\qquad v=\\frac1{\\sqrt{\\sqrt2\\,G_F}} $$\n\n### 推导要点\n\n- **规范原理**：要求费米子场在 $SU(3)\\times SU(2)\\times U(1)$ 局域对称下不变，引入规范场（胶子、$W^i$、$B$）。\n- **电弱破缺**：希格斯二重态 $\\Phi$ 取非零真空期望值，$SU(2)_L\\times U(1)_Y\\to U(1)_{\\mathrm{em}}$，$W^\\pm,Z$ 获得质量、光子保持无质量（[[spontaneous-symmetry-breaking]]）。\n- **费米子质量**：汤川耦合 $y_f\\bar\\psi_L\\Phi\\psi_R$ 在破缺后给出 $m_f=y_fv/\\sqrt2$。\n\n### 重要定理与推论\n\n- **渐近自由**：QCD 高能耦合变弱（[[renormalization]]，2004 诺奖）。\n- **夸克禁闭**：强子内夸克不能被分离。\n- **电弱统一**：电磁与弱相互作用在 $SU(2)\\times U(1)$ 中统一（1979 诺奖）。\n- **希格斯机制**：质量起源（2013 诺奖）。\n\n## 深化内容\n\n标准模型是 [[gauge-field-theory]] 与 [[quantum-field-theory]] 的最高成就，其精确检验（电弱精密测量、希格斯性质）仍在继续。未解问题：暗物质、中微子质量、强 CP 问题、层级问题，指向超越标准模型的新物理（[[string-theory]]、超对称）。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Griffiths《Introduction to Elementary Particles》、Schwartz《Quantum Field Theory and the Standard Model》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[gauge-field-theory]]、[[quantum-field-theory]]、[[spontaneous-symmetry-breaking]]、[[elementary-particles]]、[[group-theory]]。\n- 验证：[[feynman-diagrams]]、加速器实验（[[particle-physics]]）。\n- 局限与超越：[[string-theory]]、[[cosmology]]。\n\n## 前置知识\n\n- [[gauge-field-theory]]、[[quantum-field-theory]]、[[spontaneous-symmetry-breaking]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 5,
     "note": "粒子清单"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 5,
     "note": "规范群 SU(3)×SU(2)×U(1)"
    },
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 5,
     "note": "粒子物理的理论框架"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 5,
     "note": "电弱对称性破缺"
    },
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 4,
     "note": "计算"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 4,
     "note": "规范群表示"
    },
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 4,
     "note": "可重整化"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 3,
     "note": "早期宇宙物理"
    },
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 3,
     "note": "β 衰变由弱相互作用驱动"
    },
    {
     "id": "nuclear-models",
     "name": "核模型",
     "weight": 3,
     "note": "底层为QCD"
    },
    {
     "id": "nuclear-reactions",
     "name": "核反应",
     "weight": 2,
     "note": ""
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 2,
     "note": "粒子物理中的散射实验"
    }
   ],
   "softLinks": [
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 3,
     "note": "强相互作用(QCD)是核力的基本描述"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "debye-screening",
   "name": "德拜屏蔽",
   "nameEn": "Debye Screening",
   "domain": "plasma-physics",
   "domainName": "等离子体物理",
   "color": "#00cec9",
   "aliases": [
    "德拜长度",
    "屏蔽效应"
   ],
   "tags": [
    "等离子体",
    "屏蔽",
    "准中性"
   ],
   "keywords": [
    "德拜长度",
    "准中性",
    "屏蔽势"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 德拜屏蔽\n\n## 概述\n\n德拜屏蔽是等离子体**屏蔽外电荷**的集体现象：点电荷在等离子体中的势不再是裸库仑势，而是指数衰减的**汤川势**，屏蔽特征尺度为**德拜长度** $\\lambda_D$。在大于 $\\lambda_D$ 的尺度上，等离子体表现为**准中性**（宏观电中性）。德拜屏蔽是等离子体的定义性特征——只有系统尺度 $L\\gg\\lambda_D$ 时才称得上等离子体。它与 [[plasma-oscillations]]（集体振荡）共同构成等离子体\"集体行为\"的图像。\n\n## 基本概念\n\n- **德拜长度**：$\\lambda_D=\\sqrt{\\varepsilon_0k_BT_e/n_ee^2}$。\n- **准中性**：$L\\gg\\lambda_D$ 时宏观电中性。\n- **屏蔽势（汤川势）**：$e^{-r/\\lambda_D}/r$。\n- **德拜球**：半径 $\\lambda_D$ 的球（含大量粒子，$n\\lambda_D^3\\gg1$）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n屏蔽势：\n\n$$ \\phi(r)=\\frac{q}{4\\pi\\varepsilon_0r}e^{-r/\\lambda_D} $$\n\n德拜长度：\n\n$$ \\lambda_D=\\sqrt{\\frac{\\varepsilon_0k_BT_e}{n_ee^2}} $$\n\n### 推导要点\n\n- **泊松方程 + 玻尔兹曼分布**：电子密度 $n_e=n_0e^{e\\phi/k_BT_e}$，线性化 $\\nabla^2\\phi=\\frac{e(n_e-n_i)}{\\varepsilon_0}\\approx\\frac{e^2n_0}{\\varepsilon_0k_BT_e}\\phi$，解得汤川势。\n- **准中性条件**：$L\\gg\\lambda_D$ 时电荷分离被屏蔽，宏观中性。\n- **等离子体参数**：$n\\lambda_D^3\\gg1$（德拜球内粒子多，集体行为显著）。\n\n### 重要定理与推论\n\n- **汤川屏蔽**：库仑势被指数屏蔽（与 [[electrostatics]] 的裸库仑势对比）。\n- **准中性**：等离子体宏观电中性的根源。\n- **德拜长度标度**：$\\lambda_D\\propto\\sqrt{T_e/n_e}$（高温、低密度屏蔽更远）。\n- **等离子体的判据**：$L\\gg\\lambda_D$、$n\\lambda_D^3\\gg1$。\n\n## 深化内容\n\n德拜屏蔽是 [[plasma-physics]] 的基础，与 [[plasma-oscillations]] 构成集体行为；类似屏蔽也出现在电解质、半导体（[[semiconductors]]）。延伸阅读可参考 陈骝《等离子体物理学导论》、Goldston & Rutherford《Introduction to Plasma Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[plasma-physics]]（基本性质）、[[electrostatics]]（屏蔽势）、[[statistical-mechanics]]（玻尔兹曼分布）。\n- 关联：[[plasma-oscillations]]（同一物理图像下的集体行为）。\n\n## 前置知识\n\n- [[electrostatics]]、[[statistical-mechanics]]、[[plasma-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 5,
     "note": "等离子体的基本特征"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 4,
     "note": "屏蔽势"
    },
    {
     "id": "plasma-oscillations",
     "name": "等离子体振荡",
     "weight": 4,
     "note": "准中性背景"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "玻尔兹曼分布"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "magnetohydrodynamics",
   "name": "磁流体力学",
   "nameEn": "Magnetohydrodynamics",
   "domain": "plasma-physics",
   "domainName": "等离子体物理",
   "color": "#00cec9",
   "aliases": [
    "MHD"
   ],
   "tags": [
    "等离子体",
    "磁流体",
    "流体"
   ],
   "keywords": [
    "阿尔文波",
    "磁冻结",
    "磁雷诺数"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 磁流体力学\n\n## 概述\n\n磁流体力学（MHD）把磁化等离子体视为**导电流体**，耦合流体方程与电磁方程（[[maxwell-equations]]），描述等离子体的大尺度集体行为。MHD 的核心效应：**磁冻结**（高磁雷诺数时磁场随流体\"冻结\"）、**阿尔文波**（沿磁场的横波）、以及磁场对流的洛伦兹力作用。MHD 是天体物理（太阳风、吸积盘、太阳发电机）与受控聚变（托卡马克平衡）的标准框架。\n\n## 基本概念\n\n- **磁雷诺数** $R_m=UL/\\eta$：对流与磁扩散之比。\n- **磁冻结**：$R_m\\gg1$ 时磁场随流体运动。\n- **阿尔文波**：沿磁场的横波。\n- **磁压 / 洛伦兹力**：$\\vec J\\times\\vec B$。\n- **磁流体近似**：导电流体的单流体描述。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n动量方程与磁感应方程：\n\n$$ \\rho\\Big(\\frac{\\partial\\vec v}{\\partial t}+\\vec v\\cdot\\nabla\\vec v\\Big)=-\\nabla p+\\vec J\\times\\vec B $$\n\n$$ \\frac{\\partial\\vec B}{\\partial t}=\\nabla\\times(\\vec v\\times\\vec B)-\\nabla\\times(\\eta\\nabla\\times\\vec B) $$\n\n### 推导要点\n\n- **磁感应方程**：由法拉第定律 $\\partial\\vec B/\\partial t=-\\nabla\\times\\vec E$ + 欧姆定律 $\\vec E=-\\vec v\\times\\vec B+\\eta\\vec J$ 导出。\n- **磁冻结**：忽略电阻项（$\\eta\\to0$），磁通量随流体元守恒（阿尔文冻结定理）。\n- **阿尔文波**：磁张力提供恢复力，线性化得横波 $v_A=B/\\sqrt{\\mu_0\\rho}$。\n\n### 重要定理与推论\n\n- **阿尔文冻结定理**：高磁雷诺数时磁场与流体冻结。\n- **阿尔文波**：磁化等离子体的基本波模（速度 $v_A$）。\n- **磁流体平衡**：$\\nabla p=\\vec J\\times\\vec B$（托卡马克平衡，[[plasma-confinement]]）。\n- **太阳发电机**：MHD 对流的自激发电机（太阳磁场）。\n\n## 深化内容\n\nMHD 是 [[plasma-physics]] 的流体极限，连接 [[fluid-mechanics]]、[[maxwell-equations]]；应用于 [[plasma-confinement]]（聚变平衡）、[[turbulence]]（MHD 湍流）、[[cosmology]]（太阳风、吸积盘）。延伸阅读可参考 陈骝《等离子体物理学导论》、Freidberg《Ideal Magnetohydrodynamics》、Priest《Magnetohydrodynamics of the Sun》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[fluid-mechanics]]（流体方程）、[[plasma-physics]]（等离子体）、[[maxwell-equations]]。\n- 应用：[[plasma-confinement]]（托卡马克平衡）、[[turbulence]]（MHD 湍流）、[[cosmology]]（太阳风、吸积盘等天体过程）。\n\n## 前置知识\n\n- [[fluid-mechanics]]、[[maxwell-equations]]、[[plasma-physics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 5,
     "note": "流体方程"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 5,
     "note": "磁化等离子体的流体描述"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 4,
     "note": "电磁场"
    },
    {
     "id": "plasma-confinement",
     "name": "磁约束聚变",
     "weight": 4,
     "note": "聚变平衡"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 3,
     "note": "MHD 湍流"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "plasma-confinement",
   "name": "磁约束聚变",
   "nameEn": "Magnetic Confinement Fusion",
   "domain": "plasma-physics",
   "domainName": "等离子体物理",
   "color": "#00cec9",
   "aliases": [
    "托卡马克",
    "磁约束"
   ],
   "tags": [
    "等离子体",
    "聚变",
    "约束"
   ],
   "keywords": [
    "托卡马克",
    "磁场约束",
    "劳森判据"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 磁约束聚变\n\n## 概述\n\n磁约束聚变用**磁场约束高温等离子体**以实现自持核聚变（[[nuclear-fusion]]），是受控聚变发电的主要途径。主要装置是**托卡马克**（环形装置）：环向磁场 + 等离子体电流产生的极向磁场形成**闭合螺旋磁面**，把高温等离子体约束在环形区域。聚变条件由**劳森判据**给出；目标是 $Q>1$（输出能量超过输入）。ITER 是国际合作托卡马克实验堆。\n\n## 基本概念\n\n- **托卡马克**：环形磁约束装置。\n- **闭合磁面**：磁场线的环形缠绕。\n- **劳森判据**：$nT\\tau_E$ 自持条件。\n- **能量增益因子** $Q$：聚变功率/加热功率。\n- **等离子体电流 / 纵场**：托卡马克的两大磁场。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n劳森判据（D-T）：\n\n$$ nT\\tau_E>3\\times10^{21}\\,\\mathrm{keV\\,s\\,m^{-3}} $$\n\n磁流体平衡：\n\n$$ \\nabla p=\\vec J\\times\\vec B $$\n\n### 推导要点\n\n- **磁约束原理**：带电粒子绕磁力线回旋（[[lorentz-force]]），磁场约束等离子体。\n- **托卡马克磁场**：环向场约束 + 极向场（等离子体电流产生）形成螺旋磁面。\n- **劳森判据**：聚变功率与损失功率平衡的自持条件。\n\n### 重要定理与推论\n\n- **磁约束**：闭合磁面约束等离子体。\n- **劳森判据**：聚变自持的密度-温度-约束时间条件。\n- **等离子体加热**：欧姆加热、中性束、射频（[[plasma-oscillations]] 相关的波加热）。\n- **MHD 稳定性**：托卡马克的平衡与稳定性（[[magnetohydrodynamics]]）。\n\n## 深化内容\n\n磁约束聚变是 [[nuclear-fusion]]、[[magnetohydrodynamics]]、[[plasma-physics]] 的综合应用；ITER、托卡马克的仿星器（替代方案）是前沿。惯性约束（激光聚变，NIF）是另一途径。延伸阅读可参考 Freidberg《Plasma Physics and Fusion Energy》、Wesson《Tokamaks》、陈骝《等离子体物理学导论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[nuclear-fusion]]（目标）、[[magnetohydrodynamics]]（平衡/稳定性）、[[plasma-physics]]（基础）。\n- 关联：[[plasma-oscillations]]（射频加热）。\n\n## 前置知识\n\n- [[plasma-physics]]、[[magnetohydrodynamics]]、[[nuclear-fusion]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 5,
     "note": "受控聚变的实现途径"
    },
    {
     "id": "magnetohydrodynamics",
     "name": "磁流体力学",
     "weight": 4,
     "note": "平衡与稳定性"
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 4,
     "note": "等离子体基础"
    },
    {
     "id": "plasma-oscillations",
     "name": "等离子体振荡",
     "weight": 2,
     "note": "加热与波"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "plasma-oscillations",
   "name": "等离子体振荡",
   "nameEn": "Plasma Oscillations",
   "domain": "plasma-physics",
   "domainName": "等离子体物理",
   "color": "#00cec9",
   "aliases": [
    "朗缪尔波"
   ],
   "tags": [
    "等离子体",
    "振荡",
    "波"
   ],
   "keywords": [
    "朗缪尔频率",
    "等离子体频率",
    "集体振荡"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 等离子体振荡\n\n## 概述\n\n等离子体振荡是电子**集体相对离子背景**的振荡，其固有频率是**等离子体（朗缪尔）频率** $\\omega_p$。电子气偏离平衡后以 $\\omega_p$ 振荡，对应的波（静电波）称**朗缪尔波**。等离子体频率是等离子体最重要的标度：它是电磁波传播的**截止频率**（$\\omega<\\omega_p$ 的电磁波被反射）。等离子体振荡与 [[debye-screening]] 共同体现等离子体的集体行为。\n\n## 基本概念\n\n- **等离子体频率**：$\\omega_p=\\sqrt{n_ee^2/\\varepsilon_0m_e}$。\n- **朗缪尔波**：静电振荡的波。\n- **截止频率**：电磁波传播的下限。\n- **热修正**：色散关系中的 $3v_{\\mathrm{th}}^2k^2$ 项。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n等离子体频率：\n\n$$ \\omega_p=\\sqrt{\\frac{n_ee^2}{\\varepsilon_0m_e}} $$\n\n朗缪尔波色散关系：\n\n$$ \\omega^2=\\omega_p^2+3v_{\\mathrm{th}}^2k^2 $$\n\n### 推导要点\n\n- **振荡图像**：电子相对离子位移产生电场恢复力，电子气做简谐振荡（[[quantum-harmonic-oscillator]] 的经典类比）。\n- **色散关系**：线性化连续性方程 + 动量方程 + 泊松方程，得朗缪尔波色散。\n- **截止**：由电磁波色散 $\\omega^2=\\omega_p^2+c^2k^2$，$\\omega<\\omega_p$ 时 $k$ 虚（指数衰减，不能传播）。\n\n### 重要定理与推论\n\n- **集体振荡频率**：$\\omega_p$ 只依赖密度（与温度、波矢无关，领头阶）。\n- **截止现象**：$\\omega<\\omega_p$ 的电磁波不能穿透等离子体。\n- **朗缪尔波**：静电振荡的色散。\n- **电离层应用**：无线电波反射（电离层 $\\omega_p$ 决定可穿透频率）。\n\n## 深化内容\n\n等离子体振荡是 [[plasma-physics]] 集体行为的核心，与 [[debye-screening]]、[[electromagnetic-waves]]（色散、截止）直接相关。空间等离子体（电离层）、激光等离子体中都重要。延伸阅读可参考 陈骝《等离子体物理学导论》、Goldston & Rutherford《Introduction to Plasma Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[plasma-physics]]、[[debye-screening]]（集体图像）。\n- 波：[[electromagnetic-waves]]（色散与截止）、[[maxwell-equations]]。\n\n## 前置知识\n\n- [[plasma-physics]]、[[electromagnetic-waves]]、[[maxwell-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 5,
     "note": "集体行为"
    },
    {
     "id": "debye-screening",
     "name": "德拜屏蔽",
     "weight": 4,
     "note": "准中性背景"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 4,
     "note": "等离子体中的波"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 3,
     "note": "电磁场"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 2,
     "note": ""
    },
    {
     "id": "plasma-confinement",
     "name": "磁约束聚变",
     "weight": 2,
     "note": "加热与波"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "plasma-physics",
   "name": "等离子体物理",
   "nameEn": "Plasma Physics",
   "domain": "plasma-physics",
   "domainName": "等离子体物理",
   "color": "#00cec9",
   "aliases": [
    "等离子体"
   ],
   "tags": [
    "等离子体",
    "电磁",
    "电离气体"
   ],
   "keywords": [
    "等离子体",
    "电离",
    "德拜屏蔽",
    "集体行为"
   ],
   "size": 148,
   "degree": 13,
   "pos": {
    "x": 25,
    "y": 55,
    "z": 0
   },
   "fixed": false,
   "body": "# 等离子体物理\n\n## 概述\n\n等离子体是**部分或完全电离的气体**（物质的第四态），由带电粒子与电磁场耦合而成，覆盖宇宙中 99% 以上的可见物质（恒星、星际介质、电离层）。其核心特征是**集体行为**：带电粒子的长程库仑作用使等离子体表现出德拜屏蔽（准中性）、集体振荡（朗缪尔波）与丰富波模。等离子体按描述层次分为：单粒子运动（漂移）、**动理学**（分布函数的弗拉索夫-玻尔兹曼方程）、**磁流体力学**（MHD 流体近似）。\n\n## 基本概念\n\n- **等离子体**：准中性电离气体。\n- **德拜长度** $\\lambda_D$：屏蔽的特征尺度（[[debye-screening]]）。\n- **等离子体频率** $\\omega_p$：电子集体振荡频率（[[plasma-oscillations]]）。\n- **分布函数** $f(\\vec r,\\vec v,t)$：动理学描述。\n- **磁化等离子体**：受磁场约束的等离子体（[[magnetohydrodynamics]]）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**德拜长度**与**等离子体频率**：\n\n$$ \\lambda_D=\\sqrt{\\frac{\\varepsilon_0k_BT_e}{n_ee^2}},\\qquad \\omega_p=\\sqrt{\\frac{n_ee^2}{\\varepsilon_0m_e}} $$\n\n**弗拉索夫方程**（无碰撞动理学）：\n\n$$ \\frac{\\partial f}{\\partial t}+\\vec v\\cdot\\nabla f+\\frac{q}{m}(\\vec E+\\vec v\\times\\vec B)\\cdot\\nabla_vf=0 $$\n\n### 推导要点\n\n- **德拜屏蔽**：泊松方程 + 玻尔兹曼分布给出屏蔽势（[[debye-screening]]）。\n- **等离子体振荡**：电子集体相对离子背景的振荡（[[plasma-oscillations]]）。\n- **MHD**：对分布函数取矩（密度、动量、能量）得流体方程（[[magnetohydrodynamics]]）。\n\n### 重要定理与推论\n\n- **准中性**：$L\\gg\\lambda_D$ 时等离子体宏观电中性。\n- **等离子体频率是截止频率**：$\\omega<\\omega_p$ 的电磁波不能传播。\n- **磁约束**：磁场可约束等离子体（[[plasma-confinement]]）。\n- **等离子体湍流**：非线性集体行为（[[turbulence]]）。\n\n## 深化内容\n\n等离子体物理连接 [[maxwell-equations]]、[[fluid-mechanics]]、[[statistical-mechanics]]，应用于受控聚变（[[plasma-confinement]]、[[nuclear-fusion]]）、空间等离子体（太阳风）、工业等离子体加工。延伸阅读可参考 陈骝《等离子体物理学导论》、Goldston & Rutherford《Introduction to Plasma Physics》、Freidberg《Plasma Physics and Fusion Energy》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[debye-screening]]、[[plasma-oscillations]]、[[magnetohydrodynamics]]、[[maxwell-equations]]。\n- 基础：[[fluid-mechanics]]（流体近似）、[[statistical-mechanics]]（分布函数）、[[electromagnetic-waves]]（波）。\n- 相关：[[turbulence]]（等离子体湍流）、[[nuclear-fusion]]（聚变应用）。\n\n## 前置知识\n\n- [[maxwell-equations]]、[[statistical-mechanics]]、[[fluid-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "debye-screening",
     "name": "德拜屏蔽",
     "weight": 5,
     "note": "等离子体准中性"
    },
    {
     "id": "magnetohydrodynamics",
     "name": "磁流体力学",
     "weight": 5,
     "note": "磁化等离子体的流体描述"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 5,
     "note": "电磁场方程"
    },
    {
     "id": "plasma-oscillations",
     "name": "等离子体振荡",
     "weight": 5,
     "note": "集体振荡"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 4,
     "note": "流体近似"
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 4,
     "note": "聚变燃料是高温等离子体"
    },
    {
     "id": "plasma-confinement",
     "name": "磁约束聚变",
     "weight": 4,
     "note": "磁约束"
    },
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 3,
     "note": "恒星内部等离子体"
    },
    {
     "id": "interstellar-medium",
     "name": "星际介质",
     "weight": 3,
     "note": "电离氢区"
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 3,
     "note": "等离子体湍流"
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 2,
     "note": "恒星内部等离子体"
    }
   ],
   "softLinks": [
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 3,
     "note": "等离子体中的波"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": "分布函数与统计"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "feynman-diagrams",
   "name": "费曼图",
   "nameEn": "Feynman Diagrams",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "费曼规则",
    "费曼图展开"
   ],
   "tags": [
    "量子场论",
    "计算",
    "图形"
   ],
   "keywords": [
    "传播子",
    "顶点",
    "散射振幅"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 费曼图\n\n## 概述\n\n费曼图把量子场论的**微扰展开图形化**，是计算散射振幅与关联函数的标准工具。图的每个元素对应数学对象：外线=外粒子、内线=传播子、顶点=相互作用；由**费曼规则**把图翻译为积分表达式。图按**圈数**（$\\hbar$ 幂次）组织微扰级数：树图（无圈）对应经典/领头阶，圈图对应量子修正（常含紫外发散，由 [[renormalization]] 处理）。费曼图使复杂计算高度系统化，是粒子物理与凝聚态理论共用的语言。\n\n## 基本概念\n\n- **传播子**：内线，粒子的动量空间传播函数。\n- **顶点**：相互作用点（如 QED 的 $-ie\\gamma^\\mu$）。\n- **树图 / 圈图**：无圈 / 含圈的图。\n- **费曼规则**：图 ↔ 积分表达式的对应。\n- **散射截面**：由振幅 $\\mathcal M$ 计算。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n散射振幅的费曼图展开（示意）：\n\n$$ \\mathcal M=\\sum_{\\text{图}}\\int\\prod_{\\text{内线}}\\frac{i}{k^2-m^2+i\\epsilon}\\prod_{\\text{顶点}}(-ig)\\prod(2\\pi)^4\\delta^{(4)}(\\sum k) $$\n\n**圈数-$\\hbar$ 对应**：$L$ 圈图正比于 $\\hbar^{L}$。\n\n### 推导要点\n\n- **微扰展开**：生成泛函 $Z[J]$ 对耦合常数展开，维克定理把关联函数分解为传播子的积（[[path-integral]]）。\n- **费曼规则**：由拉格朗日量直接读出——每个场对应线、每个相互作用项对应顶点。\n- **动量守恒**：每个顶点有 $\\delta^{(4)}$ 保证动量守恒。\n\n### 重要定理与推论\n\n- **圈数组织微扰论**：树图→经典，圈图→量子修正。\n- **紫外发散**：圈图的高动量积分发散（[[renormalization]]）。\n- **截面计算**：$\\sigma\\propto\\int|\\mathcal M|^2 d\\Pi$，是 [[particle-physics]] 实验分析的基础。\n- **图形化因子**：对称因子、组合因子由图的对称性决定。\n\n## 深化内容\n\n费曼图是 [[qed]]、[[standard-model]] 一切散射计算的核心工具；关联函数、有效作用量（圈展开）、重正化群（[[renormalization]]）都以它为基础。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Griffiths《Introduction to Elementary Particles》、Weinberg《The Quantum Theory of Fields》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-field-theory]]、[[qed]]、[[renormalization]]（圈图）、[[scattering-theory]]。\n- 应用：[[standard-model]] 的交叉截面计算、[[particle-physics]] 实验分析。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[path-integral]]、[[scattering-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 5,
     "note": "应用范例"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "场论微扰计算工具"
    },
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 4,
     "note": "计算工具"
    },
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 4,
     "note": "微扰展开来源"
    },
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 4,
     "note": "圈图与发散"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 4,
     "note": "散射振幅"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 4,
     "note": "计算"
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 3,
     "note": "微扰论的图形化"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "gauge-field-theory",
   "name": "规范场论",
   "nameEn": "Gauge Field Theory",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "规范理论",
    "杨-米尔斯理论"
   ],
   "tags": [
    "量子场论",
    "规范",
    "对称性"
   ],
   "keywords": [
    "局域对称",
    "杨-米尔斯",
    "联络",
    "流"
   ],
   "size": 138,
   "degree": 12,
   "pos": null,
   "fixed": false,
   "body": "# 规范场论\n\n## 概述\n\n规范场论基于**局域规范对称性**：要求理论在**依赖时空点**的规范群变换下不变，就必须引入规范场（联络）与**规范协变导数**。电磁学（$U(1)$）是阿贝尔原型；**杨-米尔斯理论**（1954）把规范原理推广到非阿贝尔群（$SU(N)$），规范场获得自相互作用。规范场论统一了三种基本相互作用——电磁（$U(1)$）、弱（$SU(2)$）、强（$SU(3)$），是[[standard-model]] 的理论框架，也是现代物理的核心思想。\n\n## 基本概念\n\n- **规范群**：$U(1)$、$SU(2)$、$SU(3)$ 等李群。\n- **规范协变导数**：$D_\\mu=\\partial_\\mu-igA_\\mu^aT^a$。\n- **规范场** $A_\\mu^a$：对应规范群的生成元。\n- **场强张量**：$F_{\\mu\\nu}^a=\\partial_\\mu A_\\nu^a-\\partial_\\nu A_\\mu^a+gf^{abc}A_\\mu^bA_\\nu^c$。\n- **纤维丛 / 联络**：规范场的几何解释。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n规范协变导数与场强：\n\n$$ D_\\mu=\\partial_\\mu-igA_\\mu^aT^a,\\qquad F_{\\mu\\nu}^a=\\partial_\\mu A_\\nu^a-\\partial_\\nu A_\\mu^a+gf^{abc}A_\\mu^bA_\\nu^c $$\n\n**杨-米尔斯拉格朗日量**：\n\n$$ \\mathcal L=-\\frac14F_{\\mu\\nu}^aF^{a\\mu\\nu} $$\n\n（$f^{abc}$ 为结构常数，非阿贝尔项 $gf^{abc}A_\\mu^bA_\\nu^c$ 导致规范场自相互作用。）\n\n### 推导要点\n\n- **规范原理**：要求 $\\psi\\to e^{ig\\Lambda^aT^a}\\psi$ 不变，普通导数 $\\partial_\\mu$ 需替换为协变导数 $D_\\mu$，从而引入规范场 $A_\\mu^a$，其变换规律 $A_\\mu\\to A_\\mu+\\partial_\\mu\\Lambda+ig[A_\\mu,\\Lambda]$ 保证 $D_\\mu\\psi$ 协变。\n- **非阿贝尔性**：$f^{abc}\\neq0$ 使场强含 $A\\wedge A$ 项，规范场自相互作用（三场、四场顶角）。\n- **几何解释**：规范场是主丛上的联络，场强是曲率（[[differential-geometry]]）。\n\n### 重要定理与推论\n\n- **规范原理 ⇒ 相互作用**：局域对称性强制相互作用的存在与形式。\n- **渐近自由**：$SU(3)$ 规范理论（QCD）的高能耦合变弱（[[renormalization]]）。\n- **禁闭**：非阿贝尔规范理论的低能强耦合（夸克禁闭）。\n- **希格斯机制**：规范对称性自发破缺赋予规范玻色子质量（[[spontaneous-symmetry-breaking]]）。\n\n## 深化内容\n\n规范场论是 [[standard-model]] 的核心：$SU(3)\\times SU(2)\\times U(1)$。其数学框架是**纤维丛与特征类**（[[differential-geometry]]、[[topology]]），拓扑量子数（瞬子、磁单极）有深刻物理。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Weinberg《The Quantum Theory of Fields》、Nakahara《Geometry, Topology and Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[standard-model]]（规范群）、[[group-theory]]（表示）、[[differential-geometry]]（纤维丛语言）。\n- 原型：[[electromagnetic-potentials]] 与 [[qed]]（阿贝尔规范）。\n- 质量起源：[[spontaneous-symmetry-breaking]]（希格斯机制）。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[group-theory]]、[[differential-geometry]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 5,
     "note": "规范群"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 5,
     "note": "阿贝尔情形"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "场论框架"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 5,
     "note": "质量起源"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 5,
     "note": "规范群 SU(3)×SU(2)×U(1)"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 4,
     "note": "纤维丛与联络"
    },
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 4,
     "note": "U(1) 规范场的原型"
    },
    {
     "id": "aharonov-bohm-effect",
     "name": "阿哈罗诺夫-玻姆效应",
     "weight": 3,
     "note": "规范原理"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 3,
     "note": "电磁场是 U(1) 规范场"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 3,
     "note": "对偶性"
    },
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "qed",
   "name": "量子电动力学",
   "nameEn": "Quantum Electrodynamics",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "QED"
   ],
   "tags": [
    "量子场论",
    "电磁",
    "规范"
   ],
   "keywords": [
    "狄拉克方程",
    "兰姆位移",
    "反常磁矩",
    "费曼图"
   ],
   "size": 134,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 量子电动力学\n\n## 概述\n\n量子电动力学（QED）是电磁相互作用的量子场论，是物理学史上**最精确验证的理论**（预言与实验符合到 $10^{-12}$ 量级）。它把麦克斯韦电磁场与狄拉克电子场统一为 $U(1)$ 规范场论，预言了光子、正电子、兰姆位移与反常磁矩。QED 的重整化方法（费曼、施温格、朝永、戴森，1940 年代）是现代量子场论方法论的起点，其规范结构与费曼图计算成为所有规范场论的模板。\n\n## 基本概念\n\n- **狄拉克场** $\\psi$：电子/正电子场。\n- **规范场** $A_\\mu$：光子场。\n- **精细结构常数** $\\alpha=e^2/(4\\pi\\varepsilon_0\\hbar c)\\approx1/137$：微扰展开参数。\n- **兰姆位移 / 反常磁矩**：QED 的辐射修正。\n\n## 核心内容\n\n### 基本定律 / 方程\n\nQED 拉格朗日量：\n\n$$ \\mathcal L=\\bar\\psi(i\\gamma^\\mu D_\\mu-m)\\psi-\\frac14F_{\\mu\\nu}F^{\\mu\\nu},\\qquad D_\\mu=\\partial_\\mu+ieA_\\mu $$\n\n狄拉克方程（自由电子）：\n\n$$ (i\\gamma^\\mu\\partial_\\mu-m)\\psi=0 $$\n\n### 推导要点\n\n- **规范原理**：要求电子场在局域 $U(1)$ 相位变换 $\\psi\\to e^{ie\\Lambda}\\psi$ 下不变，强制引入规范场 $A_\\mu$（光子），即\"规范对称性→相互作用\"。\n- **费曼图**：电子-光子顶角 $-ie\\gamma^\\mu$，光子传播子、电子传播子；逐阶计算散射振幅。\n- **重整化**：圈图紫外发散被吸收进电荷与质量的裸参数，得到有限的 $\\alpha$ 与 $m$。\n\n### 重要定理与推论\n\n- **电子反常磁矩**：$a_e=(g-2)/2=\\alpha/2\\pi+\\cdots$，与实验符合 $10^{-12}$。\n- **兰姆位移**：氢原子 $2S_{1/2}$ 与 $2P_{1/2}$ 的能级劈裂（真空涨落效应，[[hydrogen-atom]]）。\n- **正电子预言**：狄拉克方程负能解 → 反粒子（狄拉克海）。\n- **轫致辐射与康普顿散射**：QED 树图过程。\n\n## 深化内容\n\nQED 是 [[gauge-field-theory]] 的**阿贝尔原型**：规范原理推广到 $SU(2),SU(3)$ 即电弱、强相互作用（[[standard-model]]）。QED 的辐射修正、重正化群（[[renormalization]]）是场论标准工具。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Weinberg《The Quantum Theory of Fields》、费曼《QED：光和物质的奇妙理论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-field-theory]]（框架）、[[gauge-field-theory]]（U(1) 规范）、[[feynman-diagrams]]。\n- 检验：[[hydrogen-atom]]（兰姆位移）、[[spin]]（狄拉克方程）。\n- 经典极限：[[maxwell-equations]]。\n\n## 上位替代\n\n- 统一弱电相互作用走向 [[standard-model]]。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[special-relativity]]、[[feynman-diagrams]]",
   "supersededBy": [],
   "supersedes": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组"
    }
   ],
   "links": [
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 5,
     "note": "计算方法"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 5,
     "note": "U(1) 规范理论"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "电磁相互作用的场论"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 4,
     "note": "兰姆位移"
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 4,
     "note": "光与物质相互作用"
    },
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 4,
     "note": "原始应用"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 3,
     "note": "相对论量子力学"
    },
    {
     "id": "electromagnetic-radiation",
     "name": "电磁辐射",
     "weight": 2,
     "note": "量子化辐射"
    }
   ],
   "softLinks": [
    {
     "id": "spin",
     "name": "自旋",
     "weight": 3,
     "note": "狄拉克方程导出自旋"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 2,
     "note": "兰姆位移"
    }
   ],
   "supersedeLinks": [
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 4,
     "note": "经典极限"
    }
   ]
  },
  {
   "id": "quantum-field-theory",
   "name": "量子场论",
   "nameEn": "Quantum Field Theory",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "QFT",
    "场论"
   ],
   "tags": [
    "量子场论",
    "相对论量子力学",
    "多粒子"
   ],
   "keywords": [
    "量子化",
    "费曼图",
    "重整化",
    "粒子产生湮灭"
   ],
   "size": 242,
   "degree": 20,
   "pos": {
    "x": 45,
    "y": 35,
    "z": 0
   },
   "fixed": false,
   "body": "# 量子场论\n\n## 概述\n\n量子场论（QFT）统一了**相对论**与**量子力学**，是描述基本粒子与规范相互作用的现代理论框架。其核心观念：基本客体不是\"粒子\"而是\"场\"，粒子只是量子化场的激发态；场的量子化使**粒子可产生与湮灭**（正反粒子对、光子发射）。数学上以**路径积分**（生成泛函）为表述，以**费曼图**做微扰计算，以**重整化**处理紫外发散。规范场论描述电磁/弱/强相互作用，自发对称破缺（希格斯机制）赋予粒子质量。QFT 是[[standard-model]] 的理论基础。\n\n## 基本概念\n\n- **场算符** $\\phi(x)$：时空各点的量子算符。\n- **产生/湮灭算符**：场的傅里叶展开系数。\n- **生成泛函** $Z[J]$：关联函数的母函数。\n- **规范场 / 规范协变导数**：局域对称性要求的场。\n- **真空 / 激发态**：场的基态与粒子态。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n标量场的克莱因-戈登拉格朗日量与路径积分：\n\n$$ \\mathcal L=\\frac12(\\partial_\\mu\\phi)^2-\\frac12m^2\\phi^2-\\frac{\\lambda}{4!}\\phi^4,\\qquad Z[J]=\\int\\mathcal D\\phi\\,e^{i\\int(\\mathcal L+J\\phi)d^4x} $$\n\n狄拉克场（费米子）拉格朗日量：\n\n$$ \\mathcal L=\\bar\\psi(i\\gamma^\\mu\\partial_\\mu-m)\\psi $$\n\n### 推导要点\n\n- **正则量子化**：把场 $\\phi$ 与共轭动量 $\\pi$ 提升为算符，施加对易关系 $[\\phi,\\pi]=i\\hbar\\delta$，场的傅里叶系数成为产生/湮灭算符（[[second-quantization]]）。\n- **微扰展开**：对相互作用项按 $\\lambda$ 展开，费曼图逐阶计算（[[feynman-diagrams]]）。\n- **重整化**：吸收无穷大进裸参数，得到有限物理量（[[renormalization]]）。\n\n### 重要定理与推论\n\n- **自旋-统计定理**：整数自旋=玻色子、半整数=费米子（[[identical-particles]]）。\n- **CPT 定理**：任何洛伦兹不变定域理论在 CPT 联合反演下不变。\n- **戈德斯通定理**：连续对称性自发破缺产生无质量戈德斯通玻色子。\n- **场的激发即粒子**：真空 $\\phi$ 激发态对应粒子，光子/声子都是场量子。\n\n## 深化内容\n\nQFT 的应用遍及 [[standard-model]]、[[condensed-matter-physics]]（凝聚态场论）、[[quantum-information]]。其未解问题包括量子引力（[[quantum-gravity]]）、强耦合 QCD、宇宙学常数问题。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Schwartz《Quantum Field Theory and the Standard Model》、Weinberg《The Quantum Theory of Fields》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[qed]]、[[standard-model]]、[[gauge-field-theory]]、[[feynman-diagrams]]、[[renormalization]]。\n- 数学：[[path-integral]]、[[second-quantization]]、[[group-theory]]、[[special-relativity]]。\n- 上位替代：单粒子量子力学与经典场论都是其极限。\n\n## 上位替代\n\n- 目前尚无更普适理论完全替代之（候选：[[string-theory]]）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[special-relativity]]、[[path-integral]]",
   "supersededBy": [],
   "supersedes": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学"
    },
    {
     "id": "path-integral",
     "name": "路径积分"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论"
    }
   ],
   "links": [
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 5,
     "note": "计算方法"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 5,
     "note": "规范场论"
    },
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 5,
     "note": "第一个成功的量子场论"
    },
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 5,
     "note": "理论自洽性"
    },
    {
     "id": "second-quantization",
     "name": "二次量子化",
     "weight": 5,
     "note": "技术桥梁"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 5,
     "note": "粒子物理的场论框架"
    },
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-gravity",
     "name": "量子引力",
     "weight": 4,
     "note": "量子化框架"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 4,
     "note": "质量起源"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 4,
     "note": "场论的一般化"
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 3,
     "note": "霍金辐射"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 3,
     "note": ""
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 3,
     "note": "场论微扰展开"
    }
   ],
   "softLinks": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 3,
     "note": "凝聚态场论"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 3,
     "note": "量子化为 QED"
    }
   ],
   "supersedeLinks": [
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 5,
     "note": "表述工具"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 4,
     "note": "洛伦兹协变"
    },
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 3,
     "note": "拉格朗日密度形式是量子场论的出发点"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "单粒子极限"
    }
   ]
  },
  {
   "id": "renormalization",
   "name": "重整化",
   "nameEn": "Renormalization",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "重整化群",
    "重整化理论"
   ],
   "tags": [
    "量子场论",
    "方法",
    "发散"
   ],
   "keywords": [
    "紫外发散",
    "重整化群",
    "跑动耦合常数",
    "普适性"
   ],
   "size": 94,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 重整化\n\n## 概述\n\n重整化处理量子场论中的**紫外发散**：圈图积分在高动量端发散，通过把发散吸收进有限个\"裸参数\"（质量、耦合常数、场强）中重新定义物理量，得到有限且与实验一致的预言。**重整化群（RG）方程**描述物理量（尤其耦合常数）随能量标度 $\\mu$ 的\"跑动\"；RG 还揭示**普适性**——不同微观理论在长波极限共享相同行为（临界现象、渐近自由）。重整化是 QFT 自洽性的基石，也是凝聚态临界现象的统一理论。\n\n## 基本概念\n\n- **紫外发散**：圈图积分 $k\\to\\infty$ 的对数/幂次发散。\n- **裸参数 / 物理参数**：发散参量 / 重整化后的有限值。\n- **跑动耦合常数**：$g(\\mu)$，随标度变化。\n- **β 函数**：$\\beta(g)=\\mu\\frac{dg}{d\\mu}$。\n- **普适性**：长波极限对微观细节不敏感。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**重整化群方程**：\n\n$$ \\mu\\frac{\\partial g}{\\partial\\mu}=\\beta(g) $$\n\nQED 的跑动耦合（领头阶）：\n\n$$ \\alpha(\\mu)=\\frac{\\alpha(\\mu_0)}{1-\\frac{2\\alpha(\\mu_0)}{3\\pi}\\ln\\frac{\\mu}{\\mu_0}} $$\n\n### 推导要点\n\n- **正规化**：引入截断（截断动量 $\\Lambda$、维数正规化 $d=4-\\epsilon$）使发散有限。\n- **重整化方案**：把发散项吸收进抵消项（counterterm），物理量在 $\\Lambda\\to\\infty$ 下有限。\n- **RG 方程**：要求物理量不依赖重正化标度 $\\mu$（$\\frac{d}{d\\mu}(\\text{物理量})=0$），导出 $\\beta$ 函数。\n\n### 重要定理与推论\n\n- **可重整化性**：只有有限个发散类型的理论可重整化（如 QED、标准模型）。\n- **渐近自由**：非阿贝尔规范理论 $\\beta<0$，高能耦合变弱（QCD）。\n- **朗道极点**：QED 的 $\\alpha$ 在高能增长（$\\beta>0$）。\n- **普适性与临界现象**：威尔逊 RG 解释 [[critical-phenomena]] 的普适类。\n\n## 深化内容\n\n重整化群是 [[quantum-field-theory]] 与 [[condensed-matter-physics]] 的共同语言：威尔逊把重整化用于 [[phase-transitions]]/[[critical-phenomena]]，K. Wilson 因此获 1982 年诺贝尔奖。渐近自由（Gross、Politzer、Wilczek，2004 诺奖）是 QCD 的核心。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Goldenfeld《Lectures on Phase Transitions》、Weinberg《The Quantum Theory of Fields》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-field-theory]]（框架）、[[qed]]（成功案例）、[[feynman-diagrams]]（发散来源）。\n- 凝聚态：[[critical-phenomena]]（威尔逊重正化群）、[[phase-transitions]]。\n- 量子色动力学（[[standard-model]]）的渐近自由。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[feynman-diagrams]]、[[qed]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "场论自洽性"
    },
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 4,
     "note": "圈图发散"
    },
    {
     "id": "ising-model",
     "name": "伊辛模型",
     "weight": 4,
     "note": "重正化群研究其临界行为"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 4,
     "note": "重正化群"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 4,
     "note": "原始应用"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 4,
     "note": "可重整化性"
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "critical-phenomena",
     "name": "临界现象",
     "weight": 5,
     "note": "重正化群用于临界现象"
    }
   ]
  },
  {
   "id": "spontaneous-symmetry-breaking",
   "name": "自发对称破缺与希格斯机制",
   "nameEn": "Spontaneous Symmetry Breaking & Higgs Mechanism",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "希格斯机制",
    "对称性自发破缺"
   ],
   "tags": [
    "量子场论",
    "对称性",
    "质量起源"
   ],
   "keywords": [
    "戈德斯通定理",
    "希格斯玻色子",
    "电弱统一"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 自发对称破缺与希格斯机制\n\n## 概述\n\n自发对称破缺指**拉格朗日量具有对称性，而真空（基态）不保持它**——对称性是\"隐藏\"而非\"缺失\"的。**戈德斯通定理**：每个破缺的连续对称性对应一个无质量戈德斯通玻色子。**希格斯机制**：当破缺的是规范对称时，戈德斯通玻色子被规范场\"吃掉\"而成为其纵向分量，规范玻色子获得质量。希格斯机制解释了 $W^\\pm,Z$ 玻色子与费米子的质量起源（[[standard-model]]），2012 年 LHC 发现希格斯玻色子证实之。\n\n## 基本概念\n\n- **真空（基态）**：场的最低能态。\n- **墨西哥帽势**：$V(\\phi)=-\\mu^2\\phi^2+\\lambda\\phi^4$，极小在 $|\\phi|=\\mu/\\sqrt{2\\lambda}\\neq0$。\n- **戈德斯通玻色子**：自发破缺产生的无质量模。\n- **希格斯场 / 玻色子**：破缺机制的标量场及其量子。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n墨西哥帽势与真空：\n\n$$ V(\\phi)=-\\mu^2\\phi^2+\\lambda\\phi^4,\\qquad \\langle\\phi\\rangle=\\frac{v}{\\sqrt2}=\\frac{\\mu}{\\sqrt{2\\lambda}} $$\n\n对称性破缺后展开 $\\phi=(v+h)e^{i\\theta/v}$：$h$ 有质量、$\\theta$ 是无质量戈德斯通模。\n\n**希格斯机制**：规范场通过 $|D_\\mu\\phi|^2$ 获得质量：\n\n$$ m_A=g\\langle\\phi\\rangle=gv $$\n\n### 推导要点\n\n- **真空选择**：$\\phi$ 在复平面沿圆 $|\\phi|=v$ 取极小，真空选择其中一个方向（破缺 $U(1)$ 对称）。\n- **戈德斯通定理**：沿真空圆（势能平坦方向）的激发无质量（径向激发有质量）。\n- **希格斯机制**：用规范变换\"吃掉\"$\\theta$ 模（幺正规范），它成为规范场的纵向分量，规范场获得质量 $m_A=gv$。\n\n### 重要定理与推论\n\n- **戈德斯通定理**：连续对称性自发破缺 → 无质量玻色子。\n- **希格斯机制**：规范对称性破缺 → 规范玻色子有质量。\n- **电弱统一**：$W^\\pm,Z$ 获得质量，光子保持无质量（[[standard-model]]）。\n- **凝聚态类比**：超导的安德森-希格斯机制（[[superconductivity]]）。\n\n## 深化内容\n\n自发对称破缺是 [[standard-model]]（电弱统一）与 [[phase-transitions]]（对称性破缺相变）的核心，联系 [[group-theory]]（真空的对称群）。希格斯玻色子的发现（2012）是粒子物理的里程碑。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Griffiths《Introduction to Elementary Particles》、朗道《统计物理学》（有序相）。\n\n## 与其他知识的联系\n\n- 紧密相关：[[standard-model]]（电弱统一）、[[gauge-field-theory]]、[[phase-transitions]]（对称性破缺的凝聚态类似物）。\n- 凝聚态对应：[[superconductivity]]（安德森-希格斯机制）。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[gauge-field-theory]]、[[group-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 5,
     "note": "规范场获得质量"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 5,
     "note": "质量起源"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 4,
     "note": "凝聚态类比"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 4,
     "note": "质量起源"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 4,
     "note": "戈德斯通模式在超导中的吸收"
    },
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 3,
     "note": "希格斯玻色子"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "string-theory",
   "name": "弦理论",
   "nameEn": "String Theory",
   "domain": "quantum-field-theory",
   "domainName": "量子场论",
   "color": "#8e44ad",
   "aliases": [
    "超弦理论"
   ],
   "tags": [
    "量子引力",
    "弦",
    "统一理论"
   ],
   "keywords": [
    "超弦",
    "额外维度",
    "对偶性",
    "卡拉比-丘流形"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 弦理论\n\n## 概述\n\n弦理论把基本粒子替换为**一维弦**的振动模式，从而自然地把量子力学、引力与规范相互作用纳入单一框架。弦的振动谱中天然包含无质量**自旋-2 态**（引力子），因此弦理论是引力量子化的候选。理论要求额外空间维数（超弦为 10 维），额外维紧致化在**卡拉比-丘流形**上。**对偶性**（T 对偶、S 对偶）与 M 理论统一了五种超弦理论。弦理论为黑洞熵提供了微观统计解释（[[black-holes]]），并给出规范/引力的对偶（AdS/CFT），但尚无直接的实验验证。\n\n## 基本概念\n\n- **弦 / 世界面**：一维弦在时空扫出的二维面。\n- **开弦 / 闭弦**：端点自由 / 闭合的弦。\n- **引力子**：闭弦的无质量自旋-2 激发。\n- **卡拉比-丘流形**：额外维紧致的流形。\n- **对偶性 / M 理论**：各弦理论间的等价关系。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n弦的作用量（玻色弦，Nambu-Goto 或 Polyakov）：\n\n$$ S=-\\frac1{2\\pi\\alpha'}\\int d^2\\sigma\\sqrt{-\\det(\\partial_aX^\\mu\\partial_bX_\\mu)} $$\n\n弦振动谱的质量公式（开弦）：\n\n$$ M^2=\\frac1{\\alpha'}(N-1) $$\n\n其中 $N$ 为振子数算符本征值、$\\alpha'$ 为弦张力参数。\n\n### 推导要点\n\n- **弦的量子化**：对 $X^\\mu(\\sigma,\\tau)$ 做模式展开，正则量子化；要求洛伦兹不变性 → 临界维数 $D=26$（玻色弦）/ $10$（超弦）。\n- **引力子**：闭弦的无质量自旋-2 态即引力子的场论极限。\n- **对偶性**：T 对偶联系大/小半径紧化，S 对偶联系弱/强耦合，M 理论在 11 维统一。\n\n### 重要定理与推论\n\n- **引力的自然包含**：弦谱含自旋-2 无质量态。\n- **黑洞熵的微观计数**：极端黑洞熵与弦态数一致（[[black-holes]]）。\n- **AdS/CFT 对偶**：引力与规范场论的全息对偶（[[gauge-field-theory]]）。\n- **额外维紧致化**：真空的多样性与弦景观问题。\n\n## 深化内容\n\n弦理论是 [[quantum-gravity]] 的主要候选，与 [[differential-geometry]]（卡拉比-丘）、[[topology]]（镜像对称）深度交叉。AdS/CFT 对偶连接引力与 [[quantum-information]]（全息原理）。弦景观与宇宙学（多重宇宙）是前沿。延伸阅读可参考 Polchinski《String Theory》、Zwiebach《A First Course in String Theory》、Green, Schwarz & Witten《Superstring Theory》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-field-theory]]、[[general-relativity]]（量子引力）、[[differential-geometry]]。\n- 应用：[[black-holes]]（熵计算）、[[gauge-field-theory]]（AdS/CFT 对偶）、[[topology]]、[[quantum-gravity]]。\n\n## 前置知识\n\n- [[quantum-field-theory]]、[[general-relativity]]、[[differential-geometry]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 4,
     "note": "卡拉比-丘流形"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 4,
     "note": "目标之一是量子引力"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 4,
     "note": "场论的一般化"
    },
    {
     "id": "quantum-gravity",
     "name": "量子引力",
     "weight": 4,
     "note": "量子引力候选"
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 3,
     "note": "黑洞熵的微观计数"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 3,
     "note": "对偶性"
    },
    {
     "id": "loop-quantum-gravity",
     "name": "圈量子引力",
     "weight": 2,
     "note": "另一候选"
    },
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 2,
     "note": "超越标准模型"
    },
    {
     "id": "topology",
     "name": "拓扑学",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "loop-quantum-gravity",
   "name": "圈量子引力",
   "nameEn": "Loop Quantum Gravity",
   "domain": "quantum-gravity",
   "domainName": "量子引力",
   "color": "#74b9ff",
   "aliases": [
    "LQG",
    "圈量子引力理论"
   ],
   "tags": [
    "量子引力",
    "时空",
    "几何"
   ],
   "keywords": [
    "自旋网络",
    "面积量子化",
    "背景无关"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 圈量子引力\n\n## 概述\n\n圈量子引力（LQG）是量子引力的**背景无关**方案：不预设固定时空背景，直接量子化广义相对论的几何自由度。它以规范联络（**阿什特卡变量**）为基本变量，把广义相对论改写为 $SU(2)$ 规范场论形式，量子态用**自旋网络**（图上的量子几何）表示。LQG 预言**面积/体积量子化**（几何量离散），并给出黑洞熵的微观统计与早期宇宙的圈量子宇宙学。\n\n## 基本概念\n\n- **阿什特卡变量**：联络 + 密度三重标架。\n- **自旋网络**：图上的 $SU(2)$ 自旋标记，量子几何的态。\n- **面积/体积算符**：量子化的几何量。\n- **背景无关**：不依赖固定时空背景。\n- **圈量子宇宙学**：LQG 应用于宇宙。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n面积算符本征值（离散）：\n\n$$ A\\sim8\\pi\\gamma\\ell_P^2\\sum_j\\sqrt{j(j+1)} $$\n\n（$\\gamma$ 为巴巴罗-伊米尔齐参数、$j$ 为自旋量子数。）\n\n### 推导要点\n\n- **阿什特卡变量**：把广义相对论改写为 $SU(2)$ 规范场论 + 约束（[[differential-geometry]] 的联络）。\n- **自旋网络**：规范场论的量子态由圈（Wilson 圈）的图表示（[[group-theory]] 的 $SU(2)$ 表示）。\n- **面积量子化**：面积算符的离散本征谱。\n\n### 重要定理与推论\n\n- **面积/体积量子化**：时空几何在普朗克尺度离散。\n- **黑洞熵的微观统计**：视界面积离散给出熵计数（[[black-holes]]）。\n- **背景无关性**：不预设时空背景（与弦理论不同）。\n- **圈量子宇宙学**：宇宙大爆炸奇点可能被量子效应消除。\n\n## 深化内容\n\nLQG 是 [[quantum-gravity]] 的主要候选之一，与 [[string-theory]] 竞争；连接 [[general-relativity]]、[[differential-geometry]]（联络）、[[group-theory]]（$SU(2)$ 表示）。延伸阅读可参考 Rovelli《Quantum Gravity》、Rovelli《Covariant Loop Quantum Gravity》、Thiemann《Modern Canonical Quantum General Relativity》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-gravity]]、[[general-relativity]]、[[differential-geometry]]（联络）。\n- 关联：[[group-theory]]（SU(2) 表示）、[[string-theory]]（竞争候选）、[[black-holes]]（熵计算）。\n\n## 前置知识\n\n- [[general-relativity]]、[[differential-geometry]]、[[group-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-gravity",
     "name": "量子引力",
     "weight": 5,
     "note": "量子引力候选"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 4,
     "note": "联络与变量"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 4,
     "note": "待量子化理论"
    },
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 3,
     "note": "规范群表示"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 2,
     "note": "另一候选"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-gravity",
   "name": "量子引力",
   "nameEn": "Quantum Gravity",
   "domain": "quantum-gravity",
   "domainName": "量子引力",
   "color": "#74b9ff",
   "aliases": [
    "量子引力理论"
   ],
   "tags": [
    "量子引力",
    "引力",
    "量子场论"
   ],
   "keywords": [
    "普朗克尺度",
    "引力量子化",
    "黑洞信息"
   ],
   "size": 78,
   "degree": 6,
   "pos": {
    "x": 60,
    "y": 15,
    "z": 0
   },
   "fixed": false,
   "body": "# 量子引力\n\n## 概述\n\n量子引力旨在**统一广义相对论与量子力学**，是理论物理的核心未解问题。困难在于：引力在**普朗克尺度** $\\ell_P\\approx1.6\\times10^{-35}$ m 处不可重整化——传统量子场论方法对引力失效。主要候选：**弦理论**（[[string-theory]]，把基本客体换成弦，自然包含引力子）与**圈量子引力**（[[loop-quantum-gravity]]，直接量子化时空几何）。关键问题包括**黑洞信息悖论**、时空的量子本质与早期宇宙奇点。\n\n## 基本概念\n\n- **普朗克尺度**：$\\ell_P=\\sqrt{\\hbar G/c^3}$、$t_P=\\sqrt{\\hbar G/c^5}$。\n- **引力子**：引力的量子（自旋-2）。\n- **不可重整化**：引力的紫外发散无法用有限参数吸收。\n- **背景无关 / 背景相关**：量子引力的两种纲领。\n- **黑洞信息悖论**：霍金辐射是否丢失信息。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n普朗克长度 / 时间：\n\n$$ \\ell_P=\\sqrt{\\frac{\\hbar G}{c^3}}\\approx1.6\\times10^{-35}\\,\\mathrm m,\\qquad t_P=\\sqrt{\\frac{\\hbar G}{c^5}}\\approx5.4\\times10^{-44}\\,\\mathrm s $$\n\n### 推导要点\n\n- **不可重整化**：引力的耦合常数 $G$ 有负质量量纲，高阶圈图需要无限多抵消项。\n- **普朗克尺度**：由 $\\hbar,c,G$ 量纲分析唯一构造的长度/时间标度。\n- **候选纲领**：弦理论（额外维、引力子）、圈量子引力（背景无关、自旋网络）。\n\n### 重要定理与推论\n\n- **普朗克尺度**：量子引力效应显著的标度。\n- **黑洞信息悖论**：霍金辐射与幺正性的矛盾（[[black-holes]]）。\n- **全息原理**：引力系统的自由度编码在边界（AdS/CFT）。\n- **量子引力候选**：弦理论、圈量子引力（[[string-theory]]、[[loop-quantum-gravity]]）。\n\n## 深化内容\n\n量子引力连接 [[general-relativity]]、[[quantum-field-theory]]、[[black-holes]]（信息悖论、霍金辐射）、[[cosmology]]（早期宇宙）。目前无实验验证，是理论物理最深刻的开放问题。延伸阅读可参考 Rovelli《Quantum Gravity》、Kiefer《Quantum Gravity》、Penrose《The Road to Reality》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[string-theory]]、[[loop-quantum-gravity]]、[[general-relativity]]、[[quantum-field-theory]]。\n- 关联：[[black-holes]]（信息悖论、霍金辐射）、[[cosmology]]（暴胀与奇点）。\n\n## 上位替代\n\n- 目前无实验验证；是 [[general-relativity]] 与 [[quantum-field-theory]] 待融合的更普适理论。\n\n## 前置知识\n\n- [[general-relativity]]、[[quantum-field-theory]]、[[string-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "待量子化的引力"
    },
    {
     "id": "loop-quantum-gravity",
     "name": "圈量子引力",
     "weight": 5,
     "note": "圈量子引力是另一候选"
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 4,
     "note": "黑洞信息悖论"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 4,
     "note": "量子化框架"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 4,
     "note": "弦理论是主要候选"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 2,
     "note": "宇宙早期"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-computing",
   "name": "量子计算",
   "nameEn": "Quantum Computing",
   "domain": "quantum-information",
   "domainName": "量子信息",
   "color": "#c0392b",
   "aliases": [
    "量子计算机",
    "量子算法"
   ],
   "tags": [
    "量子信息",
    "计算",
    "算法"
   ],
   "keywords": [
    "量子比特",
    "量子门",
    "叠加",
    "纠缠"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 量子计算\n\n## 概述\n\n量子计算利用量子比特的**叠加与纠缠**实现并行计算，对某些问题提供经典计算机无法企及的加速。基本操作是**量子门**（酉变换），可组成通用门集。著名量子算法：**Shor 算法**（大数分解，$O(\\log^3N)$）威胁 RSA 加密、**Grover 算法**（无序搜索，$O(\\sqrt N)$）。物理实现平台包括超导、离子阱、光量子、冷原子与拓扑量子比特。主要障碍是**退相干**，需 [[quantum-error-correction]] 实现容错。\n\n## 基本概念\n\n- **量子比特**：$|\\psi\\rangle=\\alpha|0\\rangle+\\beta|1\\rangle$。\n- **量子门**：哈达玛 $H$、相位、CNOT、Toffoli 等酉门。\n- **通用门集**：可近似任意酉变换的有限门集。\n- **量子并行**：叠加态同时编码多个经典输入。\n- **退相干**：量子比特与环境的耦合。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n量子态与量子门（布洛赫球表示）：\n\n$$ |\\psi\\rangle=\\cos\\frac\\theta2|0\\rangle+e^{i\\phi}\\sin\\frac\\theta2|1\\rangle $$\n\n哈达玛门与 CNOT 门：\n\n$$ H=\\frac1{\\sqrt2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix},\\qquad \\mathrm{CNOT}=\\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\0&0&0&1\\\\0&0&1&0\\end{pmatrix} $$\n\n**Shor 算法复杂度**：$O(\\log^3N)$ vs 经典亚指数；**Grover**：$O(\\sqrt N)$。\n\n### 推导要点\n\n- **量子并行**：对 $n$ 量子比特施加 $H^{\\otimes n}$，同时作用到 $2^n$ 个基态。\n- **Shor 算法**：把大数分解化为求周期，用**量子傅里叶变换（QFT）** 提取周期（[[fourier-analysis]]）。\n- **Grover 算法**：振幅放大，把目标态振幅以 $O(\\sqrt N)$ 步放大到近 1。\n\n### 重要定理与推论\n\n- **通用性**：有限门集（H、T、CNOT）可近似任意酉变换（Solovay-Kitaev）。\n- **量子加速**：Shor（分解）、Grover（搜索）展示指数/二次加速。\n- **容错阈值定理**：门错误率低于阈值时容错计算可行（[[quantum-error-correction]]）。\n- **不可克隆与计算**：未知量子态不可复制（[[quantum-information]]）。\n\n## 深化内容\n\n量子计算的物理平台与 [[spin]]（自旋比特）、[[superconductivity]]（超导比特）、[[quantum-optics]]（光子）、[[topological-materials]]（拓扑比特）交叉；退相干由 [[quantum-measurement]] 与 [[quantum-error-correction]] 处理。**量子优越性**（2019 谷歌）已实验展示。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Preskill《Lecture Notes》、Mermin《Quantum Computer Science》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-information]]、[[quantum-error-correction]]、[[entanglement]]。\n- 物理平台：[[spin]]（自旋比特）、[[superconductivity]]（超导比特）、[[quantum-optics]]（光子）、[[topological-materials]]（拓扑比特）。\n- 挑战：[[quantum-measurement]]（退相干）。\n\n## 前置知识\n\n- [[quantum-information]]、[[linear-algebra]]、[[entanglement]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-error-correction",
     "name": "量子纠错",
     "weight": 5,
     "note": "容错计算"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "理论框架"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "物理基础"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 4,
     "note": "纠缠资源"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 4,
     "note": "量子比特实现"
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 3,
     "note": "退相干"
    },
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 3,
     "note": "拓扑量子比特"
    },
    {
     "id": "ultracold-atoms",
     "name": "超冷原子",
     "weight": 2,
     "note": "冷原子量子模拟"
    }
   ],
   "softLinks": [
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "quantum-cryptography",
   "name": "量子密码学",
   "nameEn": "Quantum Cryptography",
   "domain": "quantum-information",
   "domainName": "量子信息",
   "color": "#c0392b",
   "aliases": [
    "量子密钥分发",
    "QKD"
   ],
   "tags": [
    "量子信息",
    "密码",
    "安全"
   ],
   "keywords": [
    "BB84",
    "量子密钥分发",
    "不可克隆定理"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 量子密码学\n\n## 概述\n\n量子密码学利用量子力学原理（**不可克隆定理**与**测量坍缩**）保证通信的**无条件安全**。核心是**量子密钥分发（QKD）**：BB84 协议用量子比特编码密钥，窃听必然扰动量子态而被发现；E91 协议用纠缠对分发密钥，安全性由贝尔不等式验证。QKD 已在光纤与卫星（墨子号）实现，是量子信息最早走向实用的方向之一。\n\n## 基本概念\n\n- **量子密钥分发（QKD）**：用量子信道分发安全密钥。\n- **BB84 协议**：四态（两组正交基）编码。\n- **E91 协议**：基于纠缠对的 QKD。\n- **不可克隆定理**：未知量子态不可复制。\n- **窃听检测**：窃听引入误码率升高。\n\n## 核心内容\n\n### 基本定律 / 方程\n\nBB84 编码（两组基 $\\{0/1\\}$、$\\{+/-$（对角）$\\}$）；窃听引入误码率，检测概率：\n\n$$ P(\\text{窃听被发现})\\to1\\quad(\\text{密钥足够长}) $$\n\n**不可克隆定理**（安全基础）：\n\n$$ \\nexists\\,U:\\ U|\\psi\\rangle|0\\rangle=|\\psi\\rangle|\\psi\\rangle\\ \\ \\forall|\\psi\\rangle $$\n\n### 推导要点\n\n- **不可克隆定理**：由量子力学线性性证明（[[quantum-information]]）。\n- **BB84 窃听检测**：窃听者不知发送方用的基，随机测量会扰动态；双方公开部分比特比对误码率，误码率异常升高即发现窃听。\n- **E91 协议**：纠缠对关联违反贝尔不等式（[[bell-inequalities]]），窃听破坏纠缠被检测。\n\n### 重要定理与推论\n\n- **无条件安全性**：QKD 的安全性基于物理定律而非计算复杂度。\n- **不可克隆定理**：量子密码安全的基石。\n- **隐私放大 / 纠错**：从原始密钥提取安全密钥的标准步骤。\n- **设备无关 QKD**：基于贝尔不等式、不依赖设备可信度。\n\n## 深化内容\n\n量子密码学是 [[quantum-information]]、[[entanglement]]、[[bell-inequalities]] 的应用；后量子密码（抗量子计算攻击的经典密码）是互补方向。QKD 的实际部署（光纤、卫星、网络）在快速发展。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Bennett & Brassard 原始论文、Gisin《Quantum Cryptography》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-information]]、[[entanglement]]、[[quantum-mechanics]]（不可克隆）。\n- 安全基础：[[bell-inequalities]]、[[information-theory]]。\n\n## 前置知识\n\n- [[quantum-information]]、[[entanglement]]、[[bell-inequalities]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "理论框架"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 4,
     "note": "纠缠密钥分发"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "不可克隆定理"
    },
    {
     "id": "bell-inequalities",
     "name": "贝尔不等式",
     "weight": 3,
     "note": "安全证明"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-error-correction",
   "name": "量子纠错",
   "nameEn": "Quantum Error Correction",
   "domain": "quantum-information",
   "domainName": "量子信息",
   "color": "#c0392b",
   "aliases": [
    "量子纠错码",
    "QEC"
   ],
   "tags": [
    "量子信息",
    "容错",
    "纠错"
   ],
   "keywords": [
    "表面码",
    "稳定子码",
    "容错阈值"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 量子纠错\n\n## 概述\n\n量子纠错（QEC）克服量子比特的**退相干与门误差**，是大规模容错量子计算的前提。与经典纠错不同，量子态连续且**不可克隆**，因此用**冗余编码**（把逻辑比特编码到多个物理比特）与**稳定子码**（通过纠错测量检测误差而不破坏编码信息）。**表面码**（容错阈值约 1%）是当前主流方案。QEC 使\"有噪声的量子计算机\"能够可靠执行任意量子算法（阈值定理）。\n\n## 基本概念\n\n- **逻辑比特 / 物理比特**：被保护的量子信息 / 承载它的比特。\n- **稳定子码**：用稳定子算符定义码空间。\n- **纠错测量**：测量稳定子（不破坏码空间）。\n- **容错阈值**：门错误率低于阈值时纠错有效。\n- **表面码**：二维网格上的拓扑稳定子码。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**9 比特 Shor 码**（纠正单比特翻转 + 相位错误）与**7 比特 Steane 码**（CSS 码）是早期范例。\n\n稳定子码的**纠错条件**（Knill-Laflamme）：\n\n$$ \\langle\\psi_i|E_a^\\dagger E_b|\\psi_j\\rangle=\\delta_{ij}C_{ab}\\ \\ \\forall E_a,E_b\\in\\mathcal E $$\n\n**容错阈值定理**：门错误率 $p<p_{\\mathrm{th}}$（表面码 $p_{\\mathrm{th}}\\approx1\\%$）时，可用更多物理比特任意压低逻辑错误率。\n\n### 推导要点\n\n- **冗余编码**：把逻辑态编码到纠缠的多比特态（如 $|0_L\\rangle=(|000\\rangle+|111\\rangle)/\\sqrt2$ 等）。\n- **稳定子测量**：测量稳定子算符（如 $Z_1Z_2$、$Z_2Z_3$）检测错误，因稳定子与码空间对易而不破坏编码。\n- **纠错条件**：Knill-Laflamme 条件保证可检测并纠正 $\\mathcal E$ 中的错误。\n\n### 重要定理与推论\n\n- **阈值定理**：错误率低于阈值时容错计算可行。\n- **稳定子形式**：[[group-theory]] 的阿贝尔稳定子群定义码空间。\n- **表面码**：高阈值、局域测量的拓扑码，是主流实验方案。\n- **退相干防护**：QEC 是量子比特抵御退相干（[[quantum-measurement]]）的主动方法。\n\n## 深化内容\n\n量子纠错是 [[quantum-computing]] 的核心，与 [[quantum-information]]（量子信道、容错阈值）、[[density-matrix]]（噪声模型）交叉。拓扑码与 [[topological-materials]]（马约拉纳、拓扑量子比特）相关。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Preskill《Lecture Notes》、Gottesman《Stabilizer Codes and Quantum Error Correction》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-computing]]（目标）、[[quantum-information]]（理论）。\n- 物理挑战：[[quantum-measurement]]（退相干）、[[density-matrix]]（噪声模型）。\n\n## 前置知识\n\n- [[quantum-information]]、[[density-matrix]]、[[quantum-computing]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 5,
     "note": "容错计算的基础"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "理论框架"
    },
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 3,
     "note": "退相干与测量"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-information",
   "name": "量子信息",
   "nameEn": "Quantum Information",
   "domain": "quantum-information",
   "domainName": "量子信息",
   "color": "#c0392b",
   "aliases": [
    "量子信息科学"
   ],
   "tags": [
    "量子信息",
    "纠缠",
    "资源"
   ],
   "keywords": [
    "量子比特",
    "纠缠",
    "冯诺依曼熵",
    "量子信道"
   ],
   "size": 118,
   "degree": 10,
   "pos": {
    "x": 60,
    "y": 30,
    "z": 0
   },
   "fixed": false,
   "body": "# 量子信息\n\n## 概述\n\n量子信息研究用量子系统编码、传输与处理信息，是[[information-theory]] 的量子推广。基本单元是**量子比特** $|\\psi\\rangle=\\alpha|0\\rangle+\\beta|1\\rangle$（叠加态），核心资源是**叠加**与**纠缠**。量子信息论用密度算符（[[density-matrix]]）描述态、用冯诺依曼熵度量信息、用保真度度量态的距离。与经典信息的根本区别由**无克隆定理**与**贝尔非定域性**（[[bell-inequalities]]）刻画。\n\n## 基本概念\n\n- **量子比特**：二维希尔伯特空间的态。\n- **密度算符 / 混合态**：最一般的量子态表示。\n- **冯诺依曼熵**：$S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho)$。\n- **保真度**：$F=\\langle\\psi|\\rho|\\psi\\rangle$。\n- **量子信道**：完全正定保迹映射（CPTP）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n量子比特与密度算符：\n\n$$ |\\psi\\rangle=\\alpha|0\\rangle+\\beta|1\\rangle,\\qquad \\rho=\\sum_ip_i|\\psi_i\\rangle\\langle\\psi_i| $$\n\n冯诺依曼熵：\n\n$$ S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho) $$\n\n**无克隆定理**：不存在酉变换 $U$ 使 $U|\\psi\\rangle|0\\rangle=|\\psi\\rangle|\\psi\\rangle$ 对所有 $|\\psi\\rangle$ 成立。\n\n### 推导要点\n\n- **无克隆定理**：假设 $U|a\\rangle|0\\rangle=|a\\rangle|a\\rangle$、$U|b\\rangle|0\\rangle=|b\\rangle|b\\rangle$，由线性性 $U(\\alpha|a\\rangle+\\beta|b\\rangle)|0\\rangle=\\alpha|aa\\rangle+\\beta|bb\\rangle\\ne(\\alpha|a\\rangle+\\beta|b\\rangle)^{\\otimes2}$，矛盾。\n- **冯诺依曼熵**：密度算符本征值的香农熵，度量混合度。\n- **贝尔非定域性**：纠缠态违反贝尔不等式（[[bell-inequalities]]）。\n\n### 重要定理与推论\n\n- **无克隆定理**：未知量子态不可复制（量子密码安全的基础）。\n- **无删除定理 / 不可广播**：量子信息的守恒性。\n- **纠缠是资源**：纠缠蒸馏、纠缠熵量化资源（[[entanglement]]）。\n- **量子信道容量**：量子信息传输的速率上限。\n\n## 深化内容\n\n量子信息是 [[quantum-computing]]、[[quantum-cryptography]]、[[quantum-error-correction]] 的理论基础，并与 [[information-theory]]、[[density-matrix]]、[[entanglement]] 深度交叉。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Wilde《Quantum Information Theory》、Preskill《Lecture Notes》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[entanglement]]、[[density-matrix]]、[[information-theory]]。\n- 应用：[[quantum-computing]]、[[quantum-cryptography]]、[[quantum-error-correction]]。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[density-matrix]]、[[information-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 5,
     "note": "量子态表示"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 5,
     "note": "纠缠是核心资源"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 5,
     "note": "经典信息论的推广"
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 5,
     "note": "应用"
    },
    {
     "id": "quantum-cryptography",
     "name": "量子密码学",
     "weight": 5,
     "note": "应用"
    },
    {
     "id": "quantum-error-correction",
     "name": "量子纠错",
     "weight": 5,
     "note": "应用"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "entropy-information",
     "name": "熵与信息",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 4,
     "note": "光子量子信息"
    },
    {
     "id": "bell-inequalities",
     "name": "贝尔不等式",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "aharonov-bohm-effect",
   "name": "阿哈罗诺夫-玻姆效应",
   "nameEn": "Aharonov-Bohm Effect",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "AB效应"
   ],
   "tags": [
    "量子",
    "规范势",
    "相位"
   ],
   "keywords": [
    "矢势",
    "几何相位",
    "规范不变"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 阿哈罗诺夫-玻姆效应\n\n## 概述\n\n阿哈罗诺夫-玻姆效应（AB 效应，1959）表明：即使电子经过的区域 $\\vec E=\\vec B=0$（磁场完全限制在螺线管内），**矢势 $\\vec A$ 仍通过量子相位影响干涉条纹**。两路电子获得的相位差正比于矢势的环路积分（即磁通量）。这一效应证明电磁势不只是数学工具、而是具有可观测物理效应的量，并深刻揭示了**几何相位**与规范结构的物理意义——是贝里相位、拓扑物态与规范场论思想的源头。\n\n## 基本概念\n\n- **磁通量**：$\\Phi_B=\\int\\vec B\\cdot d\\vec S$。\n- **矢势环路积分**：$\\oint\\vec A\\cdot d\\vec l=\\Phi_B$（斯托克斯定理）。\n- **几何相位**：只依赖路径（环路）的相位。\n- **规范不变性**：物理效应依赖 $\\Phi_B$（规范不变量），而非 $\\vec A$ 的规范选择。\n\n## 核心内容\n\n### 基本定律 / 方程\n\nAB 相位差：\n\n$$ \\Delta\\phi=\\frac{q}{\\hbar}\\oint\\vec A\\cdot d\\vec l=\\frac{q\\Phi_B}{\\hbar} $$\n\n干涉条纹移动：\n\n$$ \\Delta x=\\frac{q\\Phi_B}{h}\\cdot\\frac{\\lambda L}{d} $$\n\n### 推导要点\n\n- **相位累积**：带电粒子在矢势中累积相位 $e^{iq\\int\\vec A\\cdot d\\vec l/\\hbar}$；两路绕螺线管一周的相位差即 $\\Delta\\phi=q\\Phi_B/\\hbar$。\n- **$\\vec B=0$ 但 $\\vec A\\neq0$**：螺线管外 $\\vec B=0$，但 $\\vec A\\neq0$（$\\nabla\\times\\vec A=0$ 但 $\\vec A$ 非零，因 $\\oint\\vec A\\cdot d\\vec l=\\Phi_B$）。\n- **规范不变性**：$\\Phi_B$ 是规范不变量，相位差可观测、不依赖规范选择。\n\n### 重要定理与推论\n\n- **势的物理实在性**：$\\vec A$（而非只有 $\\vec E,\\vec B$）有可观测效应。\n- **拓扑性**：相位只依赖磁通 $\\Phi_B$（整体量），与电子路径的细节无关。\n- **量子化条件**：超导环中 $\\Phi_B$ 量子化为 $h/2e$ 的整数倍（磁通量子化）。\n- **规范场论的意义**：局域规范对称性与可观测相位的关系。\n\n## 深化内容\n\nAB 效应是**贝里相位**（[[berry-phase]]）的原型：参数空间闭环上的几何相位。它与 [[topological-materials]]（拓扑绝缘体的类似效应）、磁通量子化、以及 [[gauge-field-theory]] 的规范原理直接相关。AB 效应已在电子双缝（螺线管）、超导环、介观环等实验中确认。延伸阅读可参考 Griffiths《电动力学导论》、Sakurai《现代量子力学》、Aharonov & Bohm 原始论文。\n\n## 与其他知识的联系\n\n- 紧密相关：[[electromagnetic-potentials]]（势的物理意义）、[[quantum-mechanics]]（干涉）。\n- 推广：[[berry-phase]]（几何相位）、[[topological-materials]]（拓扑绝缘体）、[[gauge-field-theory]]（规范原理）。\n\n## 前置知识\n\n- [[electromagnetic-potentials]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "electromagnetic-potentials",
     "name": "电磁势与规范",
     "weight": 5,
     "note": "势的物理意义"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子干涉实验"
    },
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 4,
     "note": "几何相位的推广"
    },
    {
     "id": "gauge-field-theory",
     "name": "规范场论",
     "weight": 3,
     "note": "规范原理"
    },
    {
     "id": "topological-materials",
     "name": "拓扑物态",
     "weight": 3,
     "note": "拓扑相"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "angular-momentum-qm",
   "name": "量子角动量理论",
   "nameEn": "Quantum Angular Momentum",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "角动量算符",
    "角动量耦合"
   ],
   "tags": [
    "量子",
    "角动量",
    "对称性"
   ],
   "keywords": [
    "对易子",
    "升降算符",
    "CG系数",
    "旋转群"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 量子角动量理论\n\n## 概述\n\n角动量是量子力学的核心可观察量，其代数结构完全由**对易关系** $[\\hat J_i,\\hat J_j]=i\\hbar\\epsilon_{ijk}\\hat J_k$ 决定——这正对应旋转群 $SO(3)$（及 $SU(2)$）的**李代数**。由对易关系可完全解出角动量的本征谱：$\\hat J^2$ 的本征值为 $\\hbar^2j(j+1)$（$j$ 取整数或半整数），$\\hat J_z$ 的本征值为 $\\hbar m$（$m=-j,\\dots,j$）。角动量理论统一了轨道角动量（$j$ 整数）、自旋（$j$ 半整数）与角动量耦合（CG 系数），是原子结构、分子光谱与粒子物理的共同语言。\n\n## 基本概念\n\n- **角动量算符**：$\\hat J_x,\\hat J_y,\\hat J_z$，满足 $[\\hat J_i,\\hat J_j]=i\\hbar\\epsilon_{ijk}\\hat J_k$。\n- **升降算符**：$\\hat J_\\pm=\\hat J_x\\pm i\\hat J_y$。\n- **本征态**：$|j,m\\rangle$。\n- **CG 系数**：$C^{JM}_{j_1m_1j_2m_2}=\\langle j_1j_2;JM|j_1m_1;j_2m_2\\rangle$。\n- **卡西米尔算符**：$\\hat J^2=\\hat J_x^2+\\hat J_y^2+\\hat J_z^2$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n对易关系与本征值：\n\n$$ [\\hat J_i,\\hat J_j]=i\\hbar\\epsilon_{ijk}\\hat J_k,\\qquad \\hat J^2|j,m\\rangle=\\hbar^2j(j+1)|j,m\\rangle,\\quad \\hat J_z|j,m\\rangle=\\hbar m|j,m\\rangle $$\n\n升降算符的作用：\n\n$$ \\hat J_\\pm|j,m\\rangle=\\hbar\\sqrt{(j\\mp m)(j\\pm m+1)}\\,|j,m\\pm1\\rangle $$\n\n**角动量耦合**：\n\n$$ |j_1j_2;JM\\rangle=\\sum_{m_1m_2}C^{JM}_{j_1m_1j_2m_2}|j_1m_1\\rangle|j_2m_2\\rangle $$\n\n### 推导要点\n\n- **本征值谱**：由 $[\\hat J_z,\\hat J_\\pm]=\\pm\\hbar\\hat J_\\pm$，$\\hat J_\\pm|j,m\\rangle\\propto|j,m\\pm1\\rangle$；因 $m$ 有上下界（$\\hat J^2-\\hat J_z^2\\ge0$），要求 $m$ 从 $j$ 到 $-j$ 整数步进，故 $j$ 为整数或半整数，且 $\\hat J^2$ 本征值为 $j(j+1)\\hbar^2$。\n- **升降算符系数**：由归一化 $|\\hat J_\\pm|j,m\\rangle|^2=\\langle j,m|\\hat J_\\mp\\hat J_\\pm|j,m\\rangle$ 用 $\\hat J_\\mp\\hat J_\\pm=\\hat J^2-\\hat J_z^2\\mp\\hbar\\hat J_z$ 计算。\n- **CG 系数**：由两角动量的直积空间 $\\{|j_1m_1\\rangle|j_2m_2\\rangle\\}$ 到总角动量基的幺正变换给出。\n\n### 重要定理与推论\n\n- **角动量的量子化**：$j$ 取 $0,\\frac12,1,\\frac32,\\dots$，$m$ 取 $-j,\\dots,j$ 共 $2j+1$ 个值。\n- **$SO(3)$ 与 $SU(2)$ 的表示**：$j$ 标注不可约表示，半整数表示只属于 $SU(2)$（自旋）。\n- **维格纳-埃卡特定理**：角动量矩阵元分解为 CG 系数 × 约化矩阵元。\n- **选择定则**：电偶极跃迁 $\\Delta l=\\pm1$、$\\Delta m=0,\\pm1$。\n\n## 深化内容\n\n角动量理论是[[group-theory]] 表示论的最典型应用：$SU(2)$ 的双值表示（自旋）覆盖 $SO(3)$，是自旋与费米子的几何根源。角动量耦合（CG 系数、$6j$/$9j$ 符号）用于原子光谱（LS 耦合）、核物理（核壳模型）。轨道角动量本征函数即 [[spherical-harmonics]]。延伸阅读可参考 Sakurai《现代量子力学》、朗道《量子力学（非相对论）》、Edmonds《Angular Momentum in Quantum Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[spin]]（内禀角动量）、[[group-theory]]（表示论）、[[spherical-harmonics]]（轨道角动量本征函数）。\n- 应用：[[hydrogen-atom]]（原子结构）、[[identical-particles]]（全同粒子统计）、光谱学。\n- 经典对应：[[poisson-brackets]]（角动量对易子的来源）。\n\n## 前置知识\n\n- [[linear-algebra]]、[[group-theory]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "group-theory",
     "name": "群论",
     "weight": 5,
     "note": "旋转群 SO(3) 的表示"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 5,
     "note": "轨道角动量"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "角动量是量子力学的核心可观察量"
    },
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 5,
     "note": "本征函数"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 5,
     "note": "自旋是内禀角动量"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 3,
     "note": ""
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 3,
     "note": ""
    },
    {
     "id": "nuclear-models",
     "name": "核模型",
     "weight": 3,
     "note": "壳模型角动量"
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 3,
     "note": "经典对应"
    },
    {
     "id": "rigid-body-mechanics",
     "name": "刚体力学",
     "weight": 2,
     "note": "经典角动量与量子角动量的对应"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "bell-inequalities",
   "name": "贝尔不等式",
   "nameEn": "Bell Inequalities",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "贝尔定理",
    "CHSH"
   ],
   "tags": [
    "量子",
    "非定域性",
    "隐变量"
   ],
   "keywords": [
    "贝尔定理",
    "CHSH不等式",
    "隐变量理论"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 贝尔不等式\n\n## 概述\n\n贝尔定理（1964）解决了爱因斯坦-波多尔斯基-罗森（EPR）提出的\"量子力学是否不完备\"问题：贝尔证明，任何满足**定域性**与**实在性**的隐变量理论都必须服从一组不等式（贝尔不等式），而量子力学对纠缠态的预言**违反**这组不等式。随后的实验（阿斯佩 1982 等）明确支持量子力学，从而排除了定域隐变量理论，确立量子关联的**非定域性**——这是量子力学基础的核心结论。\n\n## 基本概念\n\n- **定域实在论**：测量结果由预先存在的隐变量决定，且不受类空间隔影响。\n- **关联函数**：$E(a,b)=\\langle A_aB_b\\rangle$。\n- **CHSH 不等式**：贝尔不等式最常用的实验形式。\n- **EPR 对**：纠缠粒子对，用于检验贝尔不等式。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**CHSH 不等式**（定域隐变量理论的上界）：\n\n$$ S=E(a,b)+E(a,b')+E(a',b)-E(a',b')\\le2 $$\n\n量子力学对最大纠缠态的预言：\n\n$$ S=2\\sqrt2>2 $$\n\n### 推导要点\n\n- **CHSH 不等式的推导**：假设存在隐变量 $\\lambda$，$A_a(\\lambda)=\\pm1$、$B_b(\\lambda)=\\pm1$；由 $|A_a(B_b+B_{b'})+A_{a'}(B_b-B_{b'})|=2$ 对 $\\lambda$ 平均，得 $S\\le2$。\n- **量子预言**：对贝尔态 $|\\Phi^+\\rangle$ 取合适测量方向，$E(a,b)=-\\cos\\theta_{ab}$，选 $\\theta=\\pi/4$ 组合得 $S=2\\sqrt2$。\n- **实验检验**：用偏振纠缠光子对（或离子、超导比特），统计相关计数，验证违反并排除定域隐变量。\n\n### 重要定理与推论\n\n- **贝尔定理**：量子力学与定域实在论不相容（非定域性）。\n- **无信号定理**：量子非定域性不违反相对论（不能超光速传信息）。\n- **EPR 问题的结论**：量子力学不完备的担忧被否定——量子关联是本质非定域的。\n- **2022 年诺贝尔奖**：阿斯佩、克劳泽、塞林格因贝尔不等式实验获奖。\n\n## 深化内容\n\n贝尔不等式是**量子信息与量子密码**的理论基础：违反贝尔不等式可认证纠缠（设备无关量子密钥分发）。**无漏洞贝尔实验**（2015）进一步排除了探测漏洞与定域漏洞。广义的贝尔非定域性研究关联的量子界限（Tsirelson 界 $2\\sqrt2$）与多体非定域性。延伸阅读可参考 Bell《Speakable and Unspeakable in Quantum Mechanics》、Nielsen & Chuang《量子计算与量子信息》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[entanglement]]（违反不等式的态）、[[quantum-mechanics]]（理论预言）、[[quantum-measurement]]。\n- 基础：[[probability-theory]]（关联函数）。\n\n## 前置知识\n\n- [[entanglement]]、[[probability-theory]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 5,
     "note": "纠缠态违反贝尔不等式"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子力学的非定域性"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 3,
     "note": "隐变量与局部因果"
    },
    {
     "id": "quantum-cryptography",
     "name": "量子密码学",
     "weight": 3,
     "note": "安全证明"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "density-matrix",
   "name": "密度矩阵",
   "nameEn": "Density Matrix",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "密度算符",
    "混合态"
   ],
   "tags": [
    "量子",
    "混合态",
    "统计"
   ],
   "keywords": [
    "密度算符",
    "约化密度矩阵",
    "纯度",
    "冯诺依曼熵"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 密度矩阵\n\n## 概述\n\n密度矩阵（密度算符）是量子态的**最一般描述**，统一处理纯态与混合态（经典概率加权的系综）。当系统状态不完全已知或与外界关联时，必须用密度算符 $\\rho$ 而非态矢描述。密度算符是量子统计力学（$\\rho\\propto e^{-\\beta H}$）、退相干理论与量子信息论的共同语言；其约化密度矩阵与冯诺依曼熵是量子纠缠的核心工具。\n\n## 基本概念\n\n- **密度算符**：$\\rho=\\sum_i p_i|\\psi_i\\rangle\\langle\\psi_i|$，$p_i\\ge0$、$\\sum_ip_i=1$。\n- **纯态 / 混合态**：$\\rho=|\\psi\\rangle\\langle\\psi|$（$\\rho^2=\\rho$）/ 一般系综。\n- **纯度**：$\\mathrm{tr}\\rho^2\\le1$，等于 1 当且仅当纯态。\n- **约化密度矩阵**：$\\rho_A=\\mathrm{tr}_B\\rho_{AB}$（对子系统 $B$ 求偏迹）。\n- **冯诺依曼熵**：$S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n密度算符与期望值：\n\n$$ \\rho=\\sum_i p_i|\\psi_i\\rangle\\langle\\psi_i|,\\qquad \\langle A\\rangle=\\mathrm{tr}(\\rho A) $$\n\n**刘维尔-冯诺依曼方程**（演化）：\n\n$$ i\\hbar\\frac{\\partial\\rho}{\\partial t}=[\\hat H,\\rho] $$\n\n约化密度矩阵与冯诺依曼熵：\n\n$$ \\rho_A=\\mathrm{tr}_B\\rho_{AB},\\qquad S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho) $$\n\n### 推导要点\n\n- **期望值**：$\\langle A\\rangle=\\sum_ip_i\\langle\\psi_i|\\hat A|\\psi_i\\rangle=\\mathrm{tr}(\\rho A)$（用迹的循环性）。\n- **演化方程**：由薛定谔方程对 $\\rho$ 求时间导数，用 $i\\hbar\\partial_t|\\psi\\rangle=\\hat H|\\psi\\rangle$ 得 $i\\hbar\\dot\\rho=[\\hat H,\\rho]$。\n- **约化密度矩阵**：对复合态 $|\\psi_{AB}\\rangle$ 求偏迹，得到只含子系统 $A$ 信息的算符；冯诺依曼熵度量其混合程度。\n\n### 重要定理与推论\n\n- **纯度判据**：$\\mathrm{tr}\\rho^2=1\\iff$ 纯态，$<1$ 为混合态。\n- **演化幺正性**：纯态在幺正演化下保持纯态；混合化来自与环境的纠缠（退相干）。\n- **吉布斯态**：热平衡 $\\rho=e^{-\\beta H}/Z$（[[statistical-mechanics]] 的量子系综）。\n- **纠缠度量**：纯态纠缠度 $E(|\\psi_{AB}\\rangle)=S(\\rho_A)$（[[entanglement]]）。\n\n## 深化内容\n\n密度算符是**退相干**（[[quantum-measurement]]）的数学框架：系统与环境的纠缠使 $\\rho_A$ 的干涉项消失。量子信息论（[[quantum-information]]）用密度算符定义量子信道、保真度、纠缠度量。量子统计（[[quantum-statistics]]）中 $\\rho$ 给出系综平均。延伸阅读可参考 Sakurai《现代量子力学》、Nielsen & Chuang《量子计算与量子信息》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[entanglement]]（约化密度矩阵）、[[quantum-measurement]]（退相干）、[[quantum-information]]。\n- 统计：[[statistical-mechanics]]（量子系综）、[[quantum-statistics]]。\n- 基础：[[operators-and-measurement]]。\n\n## 前置知识\n\n- [[linear-algebra]]、[[quantum-mechanics]]、[[operators-and-measurement]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 5,
     "note": "约化密度矩阵度量纠缠"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "量子态分辨"
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 5,
     "note": "退相干"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "混合态的完整描述"
    },
    {
     "id": "entropy-information",
     "name": "熵与信息",
     "weight": 4,
     "note": "冯诺依曼熵"
    },
    {
     "id": "operators-and-measurement",
     "name": "算符与测量",
     "weight": 4,
     "note": "混合态与测量"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "密度算符与量子统计"
    },
    {
     "id": "quantum-error-correction",
     "name": "量子纠错",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "entanglement",
   "name": "量子纠缠",
   "nameEn": "Quantum Entanglement",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "纠缠态",
    "EPR"
   ],
   "tags": [
    "量子",
    "纠缠",
    "非局域"
   ],
   "keywords": [
    "EPR悖论",
    "贝尔不等式",
    "非局域关联"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 量子纠缠\n\n## 概述\n\n纠缠是复合量子系统**不能分解为各子系统直积态**的关联，是量子力学最本质、最\"非经典\"的特征。典型纠缠态是贝尔态 $|\\Phi^+\\rangle=(|00\\rangle+|11\\rangle)/\\sqrt2$：对其中一个粒子测量会瞬间决定另一个的结果，即使两粒子空间分离。纠缠关联**违反贝尔不等式**（[[bell-inequalities]]），排除定域隐变量理论，确立量子非定域性。纠缠是量子信息处理的核心资源（量子计算、量子密钥分发、量子隐形传态）。\n\n## 基本概念\n\n- **纠缠态**：不能写成直积态的复合态。\n- **贝尔态**：四个最大纠缠双比特态 $|\\Phi^\\pm\\rangle$、$|\\Psi^\\pm\\rangle$。\n- **施密特分解**：$|\\psi\\rangle=\\sum_i\\sqrt{\\lambda_i}|i_A\\rangle|i_B\\rangle$。\n- **纠缠熵**：$E(|\\psi\\rangle)=S(\\rho_A)=-\\sum_i\\lambda_i\\ln\\lambda_i$。\n- **可分态 / 纠缠态**：可写/不可写为 $\\sum p_i\\rho_A^i\\otimes\\rho_B^i$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n贝尔态（四个最大纠缠态）：\n\n$$ |\\Phi^\\pm\\rangle=\\frac{|00\\rangle\\pm|11\\rangle}{\\sqrt2},\\qquad |\\Psi^\\pm\\rangle=\\frac{|01\\rangle\\pm|10\\rangle}{\\sqrt2} $$\n\n施密特分解：\n\n$$ |\\psi_{AB}\\rangle=\\sum_i\\sqrt{\\lambda_i}\\,|i_A\\rangle|i_B\\rangle $$\n\n纠缠熵：\n\n$$ E(|\\psi\\rangle)=S(\\rho_A)=-\\sum_i\\lambda_i\\ln\\lambda_i $$\n\n### 推导要点\n\n- **纠缠判据**：若 $|\\psi\\rangle=|\\psi_A\\rangle\\otimes|\\psi_B\\rangle$，则约化密度矩阵是纯态（$\\mathrm{tr}\\rho_A^2=1$）；贝尔态约化后 $\\rho_A=\\mathbb I/2$（最大混合），故高度纠缠。\n- **施密特分解**：对 $|\\psi_{AB}\\rangle$ 的矩阵做 SVD，得到单指标求和（[[linear-algebra]] 的奇异值分解）。\n- **贝尔不等式违反**：对 $|\\Phi^+\\rangle$，CHSH 关联 $S=2\\sqrt2>2$（见 [[bell-inequalities]]）。\n\n### 重要定理与推论\n\n- **非定域性**：纠缠关联不能由定域隐变量解释（贝尔定理）。\n- **不可克隆定理**：纠缠态未知态不可精确复制（量子密码的安全基础）。\n- **纠缠蒸馏与稀释**：纠缠可作为可操作的资源（[[quantum-information]]）。\n- **单配性**：纠缠不可随意共享（monogamy of entanglement）。\n\n## 深化内容\n\n纠缠是量子信息论的资源理论核心：[[quantum-cryptography]]（BB84/E91）、量子隐形传态、[[quantum-computing]] 的加速都依赖纠缠。纠缠的度量（纠缠熵、并发度、纠缠生成熵）与**多体纠缠**是活跃研究领域。退相干（[[quantum-measurement]]）破坏纠缠，是量子计算的主要挑战。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Sakurai《现代量子力学》、Preskill《Lecture Notes》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[density-matrix]]（纠缠度量）、[[quantum-information]]（资源理论）、[[bell-inequalities]]（验证）。\n- 应用：[[quantum-cryptography]]（量子密钥分发）、[[quantum-computing]]、量子隐形传态。\n- 基础：[[quantum-mechanics]]、[[operators-and-measurement]]。\n\n## 前置知识\n\n- [[density-matrix]]、[[linear-algebra]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "bell-inequalities",
     "name": "贝尔不等式",
     "weight": 5,
     "note": "纠缠态违反贝尔不等式"
    },
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 5,
     "note": "约化密度矩阵与纠缠度量"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "纠缠是量子资源"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子理论的推论"
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 4,
     "note": "纠缠资源"
    },
    {
     "id": "quantum-cryptography",
     "name": "量子密码学",
     "weight": 4,
     "note": "纠缠密钥分发"
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 4,
     "note": "测量与纠缠"
    },
    {
     "id": "operators-and-measurement",
     "name": "算符与测量",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 3,
     "note": ""
    },
    {
     "id": "aharonov-bohm-effect",
     "name": "阿哈罗诺夫-玻姆效应",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "hydrogen-atom",
   "name": "氢原子",
   "nameEn": "Hydrogen Atom",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "氢原子结构",
    "库仑势"
   ],
   "tags": [
    "量子",
    "原子",
    "库仑场"
   ],
   "keywords": [
    "玻尔模型",
    "量子数",
    "能级",
    "精细结构"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 氢原子\n\n## 概述\n\n氢原子是量子力学中**精确可解**的核心模型：单个电子在质子库仑势 $V=-e^2/(4\\pi\\varepsilon_0 r)$ 中运动。分离变量后，波函数分解为径向（拉盖尔多项式）与角向（球谐函数）之积，能级只由主量子数 $n$ 决定 $E_n\\propto-1/n^2$。氢原子的精确解验证了薛定谔方程，其能级结构、精细结构、超精细结构与兰姆位移是检验量子力学与 QED 的经典标尺，也是理解一切多电子原子的起点。\n\n## 基本概念\n\n- **量子数**：主量子数 $n$、角量子数 $l$、磁量子数 $m$（自旋 $s=1/2$）。\n- **约化质量**：$\\mu=m_em_p/(m_e+m_p)$。\n- **径向波函数**：$R_{nl}(r)$（连带拉盖尔多项式）；**角向**：球谐函数 $Y_{lm}$。\n- **玻尔半径**：$a_0=\\frac{4\\pi\\varepsilon_0\\hbar^2}{\\mu e^2}=0.529\\,\\mathrm{Å}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n波函数与能级：\n\n$$ \\psi_{nlm}(r,\\theta,\\phi)=R_{nl}(r)Y_{lm}(\\theta,\\phi),\\qquad E_n=-\\frac{\\mu e^4}{2(4\\pi\\varepsilon_0)^2\\hbar^2}\\frac1{n^2}=-\\frac{13.6\\,\\mathrm{eV}}{n^2} $$\n\n径向方程：\n\n$$ \\Big[-\\frac{\\hbar^2}{2\\mu}\\frac{d^2}{dr^2}+\\frac{\\hbar^2l(l+1)}{2\\mu r^2}-\\frac{e^2}{4\\pi\\varepsilon_0 r}\\Big]u_{nl}=E_n u_{nl},\\qquad u_{nl}=rR_{nl} $$\n\n### 推导要点\n\n- **分离变量**：$\\psi=R(r)Y_{lm}(\\theta,\\phi)$，角向方程给出 $Y_{lm}$（[[spherical-harmonics]]），径向方程化为含离心势 $\\hbar^2l(l+1)/2\\mu r^2$ 的一维问题。\n- **能级量子化**：径向方程在 $r\\to0,\\infty$ 处要求可积，$R_{nl}$ 用拉盖尔多项式 $L^{2l+1}_{n-l-1}$ 展开，边界条件给出 $n=1,2,\\dots$、$l=0,\\dots,n-1$。\n- **简并度**：对给定 $n$，$l=0,\\dots,n-1$、$m=-l,\\dots,l$ 共 $n^2$ 重简并（不计自旋）。\n\n### 重要定理与推论\n\n- **能级只依赖 $n$**：$E_n\\propto-1/n^2$，库仑势的额外简并（$l$ 简并）源于其隐藏的\"拉普拉斯-龙格-楞次\"对称性。\n- **光谱**：莱曼系（$n\\to1$）、巴耳末系（$n\\to2$），$\\frac1\\lambda=R(1/n_f^2-1/n_i^2)$。\n- **径向概率**：最概然半径 $r=n^2a_0$，基态 $n=1$ 恰为玻尔半径。\n- **经典对应**：$n\\to\\infty$ 时径向概率趋向开普勒轨道分布（对应原理）。\n\n## 深化内容\n\n高阶效应修正能级：**精细结构**（相对论 + 自旋-轨道耦合，$E_{FS}\\propto\\alpha^2$，见 [[perturbation-theory]]）、**超精细结构**（电子-核自旋耦合）、**兰姆位移**（QED 真空涨落，[[qed]] 的里程碑）、**塞曼/斯塔克效应**（外磁场/电场劈裂）。类氢离子与 [[condensed-matter-physics]] 的激子（等效氢原子）是直接推广。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[schrodinger-equation]]（方程）、[[angular-momentum-qm]]/[[spherical-harmonics]]（角向结构）、[[central-force-motion]]（经典对应）。\n- 修正：[[perturbation-theory]]（精细/超精细）、[[qed]]（兰姆位移）。\n- 推广：类氢离子、[[condensed-matter-physics]] 中的激子。\n\n## 前置知识\n\n- [[schrodinger-equation]]、[[angular-momentum-qm]]、[[special-functions]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 5,
     "note": "角向波函数"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 5,
     "note": "精确求解的典范"
    },
    {
     "id": "spherical-harmonics",
     "name": "球谐函数",
     "weight": 5,
     "note": "角动量本征函数"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 4,
     "note": "精确可解原型"
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 4,
     "note": "精细结构与超精细结构"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 4,
     "note": "兰姆位移"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 4,
     "note": "径向解含拉盖尔函数"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 3,
     "note": "经典对应"
    },
    {
     "id": "qm-variational-method",
     "name": "量子变分法",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "identical-particles",
   "name": "全同粒子",
   "nameEn": "Identical Particles",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "量子统计",
    "泡利不相容"
   ],
   "tags": [
    "量子",
    "全同粒子",
    "对称性"
   ],
   "keywords": [
    "玻色子",
    "费米子",
    "泡利不相容",
    "交换对称"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 全同粒子\n\n## 概述\n\n量子力学中，同类粒子（电子、光子、原子）**原则上不可区分**——交换任意两个全同粒子不产生新的物理状态。这要求多粒子波函数满足**交换对称性**：玻色子（整数自旋）交换对称，费米子（半整数自旋）交换反对称。费米子的反对称性导致**泡利不相容原理**（原子壳层结构、电子简并压），玻色子的对称性导致玻色-爱因斯坦凝聚与激光。自旋与统计的联系由**自旋-统计定理**（相对论量子场论证明）给出。\n\n## 基本概念\n\n- **全同性**：同类粒子不可区分。\n- **交换对称 / 反对称**：$\\psi(\\cdots,\\vec r_i,\\cdots,\\vec r_j,\\cdots)=\\pm\\psi(\\cdots,\\vec r_j,\\cdots,\\vec r_i,\\cdots)$。\n- **玻色子 / 费米子**：整数 / 半整数自旋。\n- **Slater 行列式**：费米子多体波函数的反对称化形式。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n两粒子交换对称：\n\n$$ \\psi(\\vec r_1,\\vec r_2)=\\pm\\psi(\\vec r_2,\\vec r_1) $$\n\n费米子的 Slater 行列式：\n\n$$ \\Psi(\\vec r_1,\\dots,\\vec r_N)=\\frac1{\\sqrt{N!}}\\det\\big[\\psi_i(\\vec r_j)\\big] $$\n\n**泡利不相容原理**：两个费米子不能占据同一单粒子态。\n\n### 推导要点\n\n- **交换算符的对称性**：交换算符 $\\hat P_{12}$ 满足 $\\hat P_{12}^2=1$，本征值为 $\\pm1$；因粒子不可区分，$[\\hat H,\\hat P]=0$，波函数必须是其本征态。\n- **自旋-统计定理**：相对论量子场论中，因果性（类空对易/反对易）要求整数自旋场用对易子（玻色）、半整数自旋场用反对易子（费米）。\n- **Slater 行列式的反对称性**：交换两行（两粒子）行列式变号，天然满足反对称；两个粒子同态时行列式为零（泡利原理）。\n\n### 重要定理与推论\n\n- **泡利不相容原理**：费米子不占据同一量子态，决定原子壳层结构与元素周期表。\n- **交换相互作用**：全同性引起交换能（无经典对应，如铁磁性的海森堡交换）。\n- **玻色凝聚**：玻色子可大量占据基态，低温下形成玻色-爱因斯坦凝聚（[[bose-einstein-condensation]]）。\n- **自旋-统计联系**：粒子分类由自旋决定（[[spin]]）。\n\n## 深化内容\n\n全同粒子的系统处理由**二次量子化**（[[second-quantization]]）给出：产生/湮灭算符自动实现对称化，Fock 空间是描述全同粒子的自然框架。量子统计（费米-狄拉克 / 玻色-爱因斯坦分布，见 [[quantum-statistics]]）直接来自全同性。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[spin]]（自旋-统计）、[[quantum-statistics]]（费米/玻色分布）、[[second-quantization]]。\n- 应用：[[condensed-matter-physics]]（电子气、超导）、[[particle-physics]]、[[bose-einstein-condensation]]。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[spin]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "多体量子力学"
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 5,
     "note": "玻色/费米分布"
    },
    {
     "id": "second-quantization",
     "name": "二次量子化",
     "weight": 5,
     "note": "场量子化描述多体系统"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 5,
     "note": "自旋-统计联系"
    },
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 3,
     "note": ""
    },
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 3,
     "note": ""
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 3,
     "note": "核子是全同费米子"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "matrix-mechanics",
   "name": "矩阵力学",
   "nameEn": "Matrix Mechanics",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "海森堡表象",
    "矩阵表述"
   ],
   "tags": [
    "量子",
    "海森堡",
    "矩阵"
   ],
   "keywords": [
    "海森堡方程",
    "对易子",
    "运动常数"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 矩阵力学\n\n## 概述\n\n矩阵力学是海森堡在 1925 年建立的**第一种**量子力学表述：可观测物理量表示为矩阵（算符），态矢不随时间演化，而算符演化由**海森堡方程**描述。海森堡的出发点是\"只讨论可观测量的关系\"（频率、振幅），并发现位置与动量的矩阵满足对易关系 $[\\hat x,\\hat p]=i\\hbar$。随后薛定谔的波动力学与狄拉克的变换理论证明三者等价，统一于抽象的希尔伯特空间表述。\n\n## 基本概念\n\n- **可观测量 → 矩阵**：每个物理量对应一个（厄米）矩阵。\n- **对易关系**：$[\\hat x,\\hat p]=i\\hbar$。\n- **海森堡表象**：态固定、算符演化。\n- **幺正变换**：联系不同表象（海森堡 ↔ 薛定谔）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**海森堡运动方程**：\n\n$$ \\frac{d\\hat A}{dt}=\\frac{i}{\\hbar}[\\hat H,\\hat A]+\\frac{\\partial\\hat A}{\\partial t} $$\n\n**基本对易关系**：\n\n$$ [\\hat x,\\hat p]=i\\hbar $$\n\n**运动常数判据**：$[\\hat H,\\hat A]=0$（且不显含时间）⟹ $\\hat A$ 守恒。\n\n### 推导要点\n\n- **海森堡方程**：由薛定谔表象演化 $\\hat A_H(t)=e^{iHt/\\hbar}\\hat A e^{-iHt/\\hbar}$ 对 $t$ 求导，得 $\\frac{d\\hat A_H}{dt}=\\frac{i}{\\hbar}[\\hat H,\\hat A_H]$。\n- **对易关系的来源**：经典泊松括号 $\\{x,p\\}=1$ 经正则量子化提升为 $[\\hat x,\\hat p]=i\\hbar$（见 [[poisson-brackets]]）。\n- **与波动力学等价**：位置表象中 $\\hat p=-i\\hbar\\nabla$，代入对易关系满足；两表象由幺正变换联系。\n\n### 重要定理与推论\n\n- **三种表述等价**：矩阵力学（海森堡）、波动力学（薛定谔）、路径积分（费曼）物理等价。\n- **守恒量与好量子数**：$[\\hat H,\\hat A]=0$ 的 $\\hat A$ 本征值是守恒量子数。\n- **对角化与谱**：可观测量矩阵对角化给出本征值（能谱）。\n- **量子化条件**：$\\{f,g\\}\\to[f,g]/i\\hbar$ 是经典到量子的桥梁。\n\n## 深化内容\n\n矩阵力学是现代\"算符代数\"观点的起点：希尔伯特空间、自伴算符、谱理论（[[linear-algebra]] 的无限维推广）是量子力学的严格数学基础。海森堡表象在量子场论、统计力学（关联函数随时间演化）中广泛使用。相互作用表象介于两者之间，是微扰论与费曼图的基础。延伸阅读可参考 Sakurai《现代量子力学》、Dirac《The Principles of Quantum Mechanics》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[schrodinger-equation]]（等价表述）、[[linear-algebra]]。\n- 经典对应：对易子 $[\\cdot,\\cdot]/i\\hbar$ 对应 [[poisson-brackets]]。\n\n## 前置知识\n\n- [[linear-algebra]]、[[poisson-brackets]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "与波动力学等价的表述"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 4,
     "note": "矩阵方法"
    },
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 4,
     "note": "对易子对应"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": "两种表述等价"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "operators-and-measurement",
   "name": "算符与测量",
   "nameEn": "Operators & Measurement",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "量子测量公设",
    "可观测算符"
   ],
   "tags": [
    "量子",
    "算符",
    "测量"
   ],
   "keywords": [
    "厄米算符",
    "本征值",
    "玻恩规则",
    "投影测量",
    "谱分解"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 算符与测量\n\n## 概述\n\n量子力学中，每个可观测物理量 $A$ 对应一个**厄米（自伴）算符** $\\hat A$；其本征值 $\\{a_n\\}$ 就是测量可能得到的结果，本征矢构成正交完备基。**测量公设**给出概率（玻恩规则）与测量后的态（投影坍缩）。非对易算符不能同时具有确定值，由此产生不确定性原理。谱分解 $\\hat A=\\sum_n a_n|a_n\\rangle\\langle a_n|$ 与概率诠释共同构成量子测量的数学核心，也是量子信息论的起点。\n\n## 基本概念\n\n- **厄米算符**：$\\hat A^\\dagger=\\hat A$，本征值为实数、本征矢正交完备。\n- **谱分解**：$\\hat A=\\sum_n a_n|a_n\\rangle\\langle a_n|$。\n- **期望值**：$\\langle A\\rangle=\\langle\\psi|\\hat A|\\psi\\rangle$。\n- **投影测量**：测得 $a_n$ 后态坍缩为 $|a_n\\rangle$。\n- **相容可观测量**：$[\\hat A,\\hat B]=0$ 时可同时对角化、同时测量。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**测量公设（玻恩规则）**：\n\n$$ P(a_n)=|\\langle a_n|\\psi\\rangle|^2 $$\n\n**期望值与方差**：\n\n$$ \\langle A\\rangle=\\langle\\psi|\\hat A|\\psi\\rangle,\\qquad (\\Delta A)^2=\\langle\\hat A^2\\rangle-\\langle\\hat A\\rangle^2 $$\n\n**投影坍缩**：测量后 $\\psi\\to\\hat P_n\\psi/\\|\\hat P_n\\psi\\|$，$\\hat P_n=|a_n\\rangle\\langle a_n|$。\n\n### 推导要点\n\n- **本征值实数性**：由 $\\hat A|a\\rangle=a|a\\rangle$ 取内积 $\\langle a|\\hat A|a\\rangle=a\\langle a|a\\rangle$，用厄米性 $\\langle a|\\hat A|a\\rangle=\\langle a|\\hat A|a\\rangle^*$ 得 $a=a^*$。\n- **本征矢正交性**：$(\\hat A-a_1)|a_1\\rangle=0$、$(\\hat A-a_2)|a_2\\rangle=0$，取内积相减得 $(a_1-a_2)\\langle a_1|a_2\\rangle=0$。\n- **不确定性原理**：对 $\\hat A-\\langle A\\rangle$ 与 $\\hat B-\\langle B\\rangle$ 用施瓦茨不等式（见 [[quantum-mechanics]]）。\n\n### 重要定理与推论\n\n- **谱定理**：厄米算符可谱分解，本征矢完备（[[linear-algebra]] 谱理论的无限维推广）。\n- **不确定性关系**：$[\\hat A,\\hat B]=i\\hbar\\hat C\\Rightarrow\\Delta A\\Delta B\\ge\\frac{\\hbar}{2}|\\langle C\\rangle|$。\n- **同时测量条件**：$\\hat A,\\hat B$ 相容（对易）⟺ 可同时取确定值。\n- **测量改变状态**：投影测量是非幺正过程（坍缩），区别于薛定谔演化。\n\n## 深化内容\n\n广义测量由**POVM（正算子值测度）**描述，包含 POVM、广义测量与弱测量。测量的动力学解释由**退相干**给出（[[quantum-measurement]]）：系统与环境纠缠使干涉项消失。混合态测量用 [[density-matrix]] 描述。测量与信息的联系是 [[quantum-information]] 的基础（无克隆定理、量子信道）。延伸阅读可参考 Sakurai《现代量子力学》、Nielsen & Chuang《量子计算与量子信息》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]（公设）、[[linear-algebra]]（谱理论）。\n- 测量问题：[[quantum-measurement]]（坍缩与退相干）、[[density-matrix]]（混合态）。\n- 关联：[[entanglement]]（非局域关联）、[[quantum-information]]。\n\n## 前置知识\n\n- [[linear-algebra]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 5,
     "note": "厄米算符与谱分解"
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 5,
     "note": "测量的动力学问题"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子力学的公设体系"
    },
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 4,
     "note": "混合态与测量"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": "演化与测量互补"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "path-integral",
   "name": "路径积分",
   "nameEn": "Path Integral",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "费曼路径积分",
    "传播子"
   ],
   "tags": [
    "量子",
    "方法",
    "传播子"
   ],
   "keywords": [
    "传播子",
    "配分函数",
    "相位因子"
   ],
   "size": 84,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 路径积分\n\n## 概述\n\n费曼路径积分（1948）把量子跃迁振幅表示为**所有可能路径**的贡献之和：传播子 $K=\\langle x_f|e^{-iHt/\\hbar}|x_i\\rangle$ 写作对路径的\"泛函积分\"，每条路径以 $e^{iS/\\hbar}$（$S$ 为经典作用量）加权。经典路径因**相位相长干涉**而主导（$\\hbar\\to0$ 时回到最小作用量原理），偏离路径贡献量子涨落。路径积分是量子场论与量子统计力学的核心表述，特别适合处理规范场与拓扑效应，并自然连接经典力学与量子力学。\n\n## 基本概念\n\n- **传播子**：$K(x_f,t_f;x_i,t_i)=\\langle x_f|e^{-iH(t_f-t_i)/\\hbar}|x_i\\rangle$。\n- **路径测度**：$\\mathcal Dx(t)$，对连续路径的积分。\n- **经典作用量**：$S[x]=\\int L\\,dt$。\n- **虚时（Wick 旋转）**：$\\tau=it$，把振荡相位化为指数衰减因子。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**费曼路径积分**：\n\n$$ K(x_f,t_f;x_i,t_i)=\\int_{x_i}^{x_f}\\mathcal Dx(t)\\,e^{\\frac{i}{\\hbar}S[x(t)]} $$\n\n**量子-经典对应**：$\\hbar\\to0$ 时由稳相近似，主导路径满足 $\\delta S=0$（欧拉-拉格朗日方程，见 [[variational-calculus]]）。\n\n**虚时配分函数**：\n\n$$ Z=\\int\\mathcal Dx\\,e^{-S_E[x]/\\hbar} $$\n\n### 推导要点\n\n- **路径积分的构造**：把时间分割为 $N$ 段，插入完备性 $1=\\int dx_k|x_k\\rangle\\langle x_k|$，每小段时间用 $\\langle x_{k+1}|e^{-iH\\Delta t/\\hbar}|x_k\\rangle\\approx e^{iL\\Delta t/\\hbar}$，取 $N\\to\\infty$ 即得路径积分。\n- **稳相近似**：$S$ 在经典路径处取驻值，附近相位相长；远离路径相位快速振荡相消。\n- **虚时变换**：$\\tau=it$ 把 $e^{iS/\\hbar}$ 变为 $e^{-S_E/\\hbar}$，与玻尔兹曼因子 $e^{-\\beta H}$ 同构。\n\n### 重要定理与推论\n\n- **经典极限**：$\\hbar\\to0$ 回到最小作用量原理。\n- **自由粒子传播子**：$K\\propto e^{im(x_f-x_i)^2/2\\hbar t}$（高斯型）。\n- **谐振子传播子**：可用路径积分精确求解。\n- **虚时与统计的等价**：量子演化与热平衡配分函数的对应。\n\n## 深化内容\n\n路径积分是**量子场论**（[[quantum-field-theory]]）的核心：生成泛函、微扰展开（[[feynman-diagrams]]）、规范场量子化都建立在泛函积分之上。虚时路径积分给出[[statistical-mechanics]] 的配分函数与相变（[[phase-transitions]]）研究框架。拓扑效应（瞬子、AB 效应、贝里相位）在路径积分中自然呈现。延伸阅读可参考 Feynman & Hibbs《Quantum Mechanics and Path Integrals》、Peskin & Schroeder《An Introduction to QFT》、Schulman《Techniques and Applications of Path Integration》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[green-function]]（传播子）、[[hamilton-jacobi-theory]]（经典作用量）。\n- 场论：[[quantum-field-theory]] 的生成泛函、[[feynman-diagrams]]。\n- 统计：虚时路径积分给出 [[statistical-mechanics]] 配分函数。\n\n## 上位替代\n\n- 在多粒子/场的层面由 [[quantum-field-theory]] 的泛函积分取代。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[variational-calculus]]、[[hamilton-jacobi-theory]]",
   "supersededBy": [
    {
     "id": "quantum-field-theory",
     "name": "量子场论"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子力学的费曼表述"
    },
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 4,
     "note": "微扰展开来源"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 4,
     "note": "传播子是含时格林函数"
    },
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 4,
     "note": "经典作用量是相位"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "虚时路径积分与配分函数"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "场论的核心表述"
    }
   ]
  },
  {
   "id": "perturbation-theory",
   "name": "量子微扰论",
   "nameEn": "Perturbation Theory",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "微扰论",
    "简并微扰"
   ],
   "tags": [
    "量子",
    "近似方法",
    "微扰"
   ],
   "keywords": [
    "非简并微扰",
    "简并微扰",
    "费米黄金规则"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 量子微扰论\n\n## 概述\n\n微扰论是量子力学最重要的近似方法：当哈密顿量可写为 $H=H_0+\\lambda V$（$H_0$ 精确可解、$V$ 为小微扰）时，以 $H_0$ 的本征解为零级近似，逐级展开能量与态矢。分为**定态微扰**（非简并与简并）与**含时微扰**。定态微扰给出能级的逐级修正；含时微扰给出跃迁概率与**费米黄金规则**，是散射、辐射跃迁、退相干等过程的计算基础，也是量子场论微扰展开（费曼图）的雏形。\n\n## 基本概念\n\n- **未微扰哈密顿量** $H_0$、**微扰** $V$、**小参数** $\\lambda$。\n- **级数展开**：$E_n=E_n^{(0)}+\\lambda E_n^{(1)}+\\lambda^2E_n^{(2)}+\\cdots$、$|\\psi_n\\rangle=|\\psi_n^{(0)}\\rangle+\\lambda|\\psi_n^{(1)}\\rangle+\\cdots$。\n- **简并子空间**：$H_0$ 有简并本征值的子空间。\n- **态密度** $\\rho(E)$：费米黄金规则中的末态密度。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**非简并微扰**（一阶、二阶能量修正）：\n\n$$ E_n^{(1)}=\\langle n^{(0)}|V|n^{(0)}\\rangle,\\qquad E_n^{(2)}=\\sum_{k\\ne n}\\frac{|\\langle k^{(0)}|V|n^{(0)}\\rangle|^2}{E_n^{(0)}-E_k^{(0)}} $$\n\n**费米黄金规则**（含时微扰）：\n\n$$ \\Gamma=\\frac{2\\pi}{\\hbar}|\\langle f|V|i\\rangle|^2\\,\\rho(E_f) $$\n\n### 推导要点\n\n- **定态微扰**：把 $H=H_0+\\lambda V$ 代入 $H|\\psi\\rangle=E|\\psi\\rangle$，按 $\\lambda$ 幂次比较系数；由 $\\langle n^{(0)}|$ 投影得一阶修正，二阶由中间态求和得到。\n- **简并微扰**：在简并子空间内把 $V$ 对角化（解久期方程 $\\det(V_{ij}-E^{(1)}\\delta_{ij})=0$），微扰解除简并。\n- **费米黄金规则**：含时微扰 $V(t)$ 的一阶跃迁振幅，在长时间极限下 $|(1-e^{i\\omega t})/\\omega|^2\\to2\\pi t\\delta(\\omega)$，跃迁率与时间无关。\n\n### 重要定理与推论\n\n- **一阶能量 = 微扰的平均值**：$E_n^{(1)}=\\langle V\\rangle_n$。\n- **二阶能量含虚跃迁**：中间态 $k\\ne n$ 的贡献，符号由能量差决定（基态二阶修正恒为负）。\n- **简并的解除**：对称性微扰使简并能级劈裂（塞曼、斯塔克效应）。\n- **选择定则**：$\\langle f|V|i\\rangle$ 为零的跃迁被禁戒（由角动量/宇称决定）。\n\n## 深化内容\n\n微扰论推广到**量子场论**：相互作用表象中的戴森级数与**费曼图**（[[feynman-diagrams]]）是微扰展开的图形化，重整化（[[renormalization]]）处理发散。Wigner-Brillouin 微扰、布里渊-维格纳方法、含时变分原理是更精细的变体。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[hydrogen-atom]]（精细/超精细结构）、[[scattering-theory]]、[[qm-variational-method]]（另一近似方法）。\n- 场论推广：[[quantum-field-theory]] 的微扰展开与 [[feynman-diagrams]]。\n- 条件：$\\lambda V$ 需足够小，否则用变分或非微扰方法。\n\n## 前置知识\n\n- [[schrodinger-equation]]、[[linear-algebra]]、[[hydrogen-atom]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子力学的主要近似方法"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 4,
     "note": "精细结构等修正"
    },
    {
     "id": "qm-variational-method",
     "name": "量子变分法",
     "weight": 4,
     "note": "另一种近似方法"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 4,
     "note": "玻恩近似"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 4,
     "note": ""
    },
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 3,
     "note": "微扰论的图形化"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": "场论微扰展开"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "qm-variational-method",
   "name": "量子变分法",
   "nameEn": "Variational Method (Quantum)",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "变分近似",
    "瑞利-里兹法"
   ],
   "tags": [
    "量子",
    "近似方法",
    "变分"
   ],
   "keywords": [
    "试探波函数",
    "基态能量",
    "期望值"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 量子变分法\n\n## 概述\n\n变分法是求量子系统**基态**（及低激发态）近似解的重要方法，基于一个简单的能量不等式：对任意归一化试探波函数，其能量期望值 $\\langle\\psi|\\hat H|\\psi\\rangle$ 恒**大于等于**基态能量 $E_0$。因此可以构造含变分参数的试探波函数，通过**极小化**能量期望值得到 $E_0$ 的上界与近似波函数。变分法特别适用于**微扰法失效的强关联系统**（如原子、分子、多体问题），是现代电子结构计算（哈特里-福克、密度泛函）的基石。\n\n## 基本概念\n\n- **试探波函数**：$|\\psi(\\lambda_1,\\lambda_2,\\dots)\\rangle$，含可调参数。\n- **能量泛函**：$E(\\lambda)=\\langle\\psi(\\lambda)|\\hat H|\\psi(\\lambda)\\rangle$。\n- **变分原理**：$E_0\\le E(\\lambda)$，等号当且仅当 $\\psi$ 为精确基态。\n- **瑞利-里兹法**：在有限基 $\\{|\\phi_i\\rangle\\}$ 上展开，化为矩阵本征值问题。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**变分原理**：\n\n$$ E_0\\le\\frac{\\langle\\psi|\\hat H|\\psi\\rangle}{\\langle\\psi|\\psi\\rangle} $$\n\n**极小化条件**：\n\n$$ \\frac{\\partial E(\\lambda)}{\\partial\\lambda_i}=0 $$\n\n**瑞利-里兹法**（有限基展开 $\\psi=\\sum_i c_i\\phi_i$）：\n\n$$ \\sum_j H_{ij}c_j=E\\,S_{ij}c_j,\\qquad H_{ij}=\\langle\\phi_i|\\hat H|\\phi_j\\rangle,\\ S_{ij}=\\langle\\phi_i|\\phi_j\\rangle $$\n\n### 推导要点\n\n- **变分原理**：把 $\\psi$ 在 $\\hat H$ 的本征基展开 $\\psi=\\sum_n c_n|n\\rangle$，则 $\\langle\\hat H\\rangle=\\sum_n|c_n|^2E_n\\ge E_0\\sum_n|c_n|^2=E_0$。\n- **极小化**：对能量泛函求关于变分参数的偏导并令其为零。\n- **瑞利-里兹**：把能量泛函在有限基上的极值问题化为广义本征值问题 $Hc=ESc$。\n\n### 重要定理与推论\n\n- **变分上界**：变分能量恒为基态能量的上界，参数越多越接近精确值。\n- **与微扰互补**：微扰适合小耦合，变分适合强关联（如氦原子基态）。\n- **激发态推广**：在正交于低能态的约束下变分，可近似激发态。\n- **海利-费曼定理**：$\\partial E/\\partial\\lambda=\\langle\\partial H/\\partial\\lambda\\rangle$（能量对参数求导）。\n\n## 深化内容\n\n变分法是**多体理论**的核心：哈特里-福克近似（Slater 行列式试探）、密度泛函理论（以电子密度为变量，Hohenberg-Kohn + Kohn-Sham）是量子化学与 [[condensed-matter-physics]] 的标准工具。**量子蒙特卡洛**把变分与随机抽样结合。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、Szabo & Ostlund《Modern Quantum Chemistry》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[variational-calculus]]（数学原理）。\n- 互补：[[perturbation-theory]]（微扰适用小耦合，变分适用强耦合）。\n- 应用：[[hydrogen-atom]]（精确解作检验）、[[condensed-matter-physics]]（哈特里-福克/密度泛函）。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[variational-calculus]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "求基态的近似方法"
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 4,
     "note": "另一种近似方法"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 4,
     "note": "变分原理"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 3,
     "note": ""
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-harmonic-oscillator",
   "name": "量子谐振子",
   "nameEn": "Quantum Harmonic Oscillator",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "谐振子",
    "升降算符"
   ],
   "tags": [
    "量子",
    "谐振子",
    "精确可解"
   ],
   "keywords": [
    "升降算符",
    "零点能",
    "声子",
    "相干态"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 量子谐振子\n\n## 概述\n\n量子谐振子是量子力学中最基本的精确可解模型，对应任意势阱在平衡点附近的二次近似。其重要性在于：能级**等距**（$E_n=\\hbar\\omega(n+1/2)$）、存在**零点能**、且可用**升降算符**（产生/湮灭算符）代数求解。谐振子是整个量子物理的\"量子化单元\"——晶格振动的**声子**、电磁场的**光子**、量子场论的自由场模式都以它为原型，升降算符语言直接通向二次量子化。\n\n## 基本概念\n\n- **哈密顿量**：$\\hat H=\\frac{\\hat p^2}{2m}+\\frac12m\\omega^2\\hat x^2$。\n- **升降算符**：$\\hat a=\\sqrt{\\frac{m\\omega}{2\\hbar}}(\\hat x+\\frac{i}{m\\omega}\\hat p)$、$\\hat a^\\dagger=(\\hat a)^\\dagger$，满足 $[\\hat a,\\hat a^\\dagger]=1$。\n- **数算符**：$\\hat N=\\hat a^\\dagger\\hat a$，本征值为整数 $n$。\n- **零点能**：$E_0=\\hbar\\omega/2$，最低能态仍有量子涨落。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n哈密顿量与能级：\n\n$$ \\hat H=\\hbar\\omega\\Big(\\hat a^\\dagger\\hat a+\\frac12\\Big),\\qquad E_n=\\hbar\\omega\\Big(n+\\frac12\\Big),\\ n=0,1,2,\\dots $$\n\n升降算符作用：\n\n$$ \\hat a|n\\rangle=\\sqrt n\\,|n-1\\rangle,\\qquad \\hat a^\\dagger|n\\rangle=\\sqrt{n+1}\\,|n+1\\rangle $$\n\n基态波函数：\n\n$$ \\psi_0(x)=\\Big(\\frac{m\\omega}{\\pi\\hbar}\\Big)^{1/4}e^{-m\\omega x^2/2\\hbar} $$\n\n### 推导要点\n\n- **升降算符法**：由 $[\\hat a,\\hat a^\\dagger]=1$ 得 $[\\hat N,\\hat a^\\dagger]=\\hat a^\\dagger$，故 $\\hat a^\\dagger$ 逐级抬升数本征值；因 $\\hat N$ 半正定，存在基态 $\\hat a|0\\rangle=0$，解之得高斯波函数。\n- **零点能**：$\\hat a|0\\rangle=0$ 给出 $\\langle\\hat p^2\\rangle=\\hbar m\\omega/2$、$\\langle\\hat x^2\\rangle=\\hbar/(2m\\omega)$，故 $E_0=\\hbar\\omega/2$。\n- **波函数解**：$\\psi_n(x)=H_n(\\sqrt{m\\omega/\\hbar}\\,x)e^{-m\\omega x^2/2\\hbar}$，$H_n$ 为厄米多项式（[[special-functions]]）。\n\n### 重要定理与推论\n\n- **等距能级**：$\\Delta E=\\hbar\\omega$，是黑体辐射量子化（普朗克）的模型。\n- **零点能**：$\\Delta x\\Delta p=\\hbar/2$ 取等号（最小不确定态）。\n- **升降算符的物理**：$\\hat a^\\dagger$ 增加一个能量量子（声子/光子）。\n- **相干态**：$a|\\alpha\\rangle=\\alpha|\\alpha\\rangle$，最接近经典谐振子运动的量子态。\n\n## 深化内容\n\n谐振子的升降算符形式直接通向**二次量子化**（[[second-quantization]]）：晶格振动量子化为[[phonons]]、电磁场量子化为[[quantum-optics]] 的光子。**相干态**（最小不确定态）是激光光场的量子描述。谐振子还是场论自由场、量子信息（连续变量）的基础。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、Cohen-Tannoudji《量子力学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[schrodinger-equation]]（求解）、[[second-quantization]]（产生/湮灭算符）、[[phonons]]（声子）。\n- 应用：[[quantum-optics]]（光场模式）、[[quantum-field-theory]]（自由场）、[[vibration-theory]]（经典对应）。\n\n## 前置知识\n\n- [[schrodinger-equation]]、[[linear-algebra]]、[[special-functions]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "phonons",
     "name": "声子",
     "weight": 5,
     "note": "晶格振动量子化"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 5,
     "note": "精确可解模型"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 4,
     "note": "光场模式量子化"
    },
    {
     "id": "second-quantization",
     "name": "二次量子化",
     "weight": 4,
     "note": "产生湮灭算符"
    },
    {
     "id": "special-functions",
     "name": "特殊函数",
     "weight": 4,
     "note": "厄米多项式"
    },
    {
     "id": "vibration-theory",
     "name": "振动与简正模",
     "weight": 4,
     "note": "经典对应"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-measurement",
   "name": "量子测量与退相干",
   "nameEn": "Quantum Measurement & Decoherence",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "测量问题",
    "退相干"
   ],
   "tags": [
    "量子",
    "测量",
    "退相干"
   ],
   "keywords": [
    "坍缩",
    "退相干",
    "环境耦合",
    "投影假设"
   ],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 量子测量与退相干\n\n## 概述\n\n量子测量的核心疑难在于：薛定谔方程给出**幺正、可逆**的演化，而测量导致波函数\"**坍缩**\"（非幺正、不可逆、概率性）。**投影测量公设**给出概率（玻恩规则）与坍缩后的态，但\"坍缩何时、如何发生\"是测量问题。**退相干理论**（泽赫、祖雷克）给出最有力的物理解释：系统与环境的不可避免纠缠使干涉项在约化密度矩阵中消失，从而涌现经典行为——但诠释层面的根本问题仍未完全解决。\n\n## 基本概念\n\n- **投影测量**：测量 $\\hat A$ 得到 $a_n$ 后态坍缩为 $|a_n\\rangle$。\n- **坍缩（波包缩减）**：测量的非幺正过程。\n- **退相干**：环境纠缠导致的相干性丢失。\n- **量子达尔文主义**：环境\"记录\"经典信息。\n- **诠释**：哥本哈根、多世界、隐变量、量子贝叶斯主义等。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n投影测量公设：\n\n$$ P(a_n)=|\\langle a_n|\\psi\\rangle|^2,\\qquad |\\psi\\rangle\\xrightarrow{\\text{测得}a_n}|a_n\\rangle $$\n\n**退相干**（系统-环境复合体的幺正演化 → 约化密度矩阵对角化）：\n\n$$ \\rho_{SA}=|\\psi\\rangle\\langle\\psi|\\otimes|\\epsilon\\rangle\\langle\\epsilon|\\xrightarrow{U}\\sum_k p_k|k\\rangle\\langle k|\\otimes\\rho_{E,k} $$\n\n从而 $\\rho_A=\\mathrm{tr}_E\\rho_{SA}=\\sum_k p_k|k\\rangle\\langle k|$（对角，无干涉项）。\n\n### 推导要点\n\n- **退相干的机制**：系统与环境的相互作用 $H_{SE}$ 使系统本征态 $|k\\rangle$ 与环境态 $|\\epsilon_k\\rangle$ 纠缠，环境态近乎正交 $\\langle\\epsilon_k|\\epsilon_j\\rangle\\approx\\delta_{kj}$；对 $\\rho_A$ 取偏迹后非对角元 $\\langle k|\\rho_A|j\\rangle\\propto\\langle\\epsilon_j|\\epsilon_k\\rangle\\to0$。\n- **退相干时间**：宏观物体与环境强耦合，退相干极快（$\\sim10^{-20}$s），因此宏观叠加态不可见。\n- **坍缩 vs 幺正演化**：投影公设是额外假设，退相干说明\"为什么看起来像坍缩\"。\n\n### 重要定理与推论\n\n- **退相干解释经典涌现**：宏观物体的经典性来自环境纠缠。\n- **量子达尔文主义**：环境冗余记录的信息使不同观察者看到一致的经典结果。\n- **退相干是量子计算的障碍**：量子比特与环境耦合丢失相干（[[quantum-computing]]），需 [[quantum-error-correction]]。\n- **测量问题仍未完全解决**：退相干解释\"表观坍缩\"，但\"单一结果的确定\"仍需诠释。\n\n## 深化内容\n\n测量问题与量子诠释（哥本哈根、多世界、德布罗意-玻姆隐变量、量子贝叶斯主义）是量子基础的前沿。**弱测量与弱值**（Aharonov）扩展测量概念。**量子芝诺/反芝诺效应**表明频繁测量抑制/加速演化。退相干理论是 [[quantum-error-correction]] 与容错量子计算的前提。延伸阅读可参考 Zurek《Decoherence and the Transition from Quantum to Classical》、Nielsen & Chuang《量子计算与量子信息》、Sakurai《现代量子力学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[operators-and-measurement]]（投影公设）、[[density-matrix]]（数学）、[[entanglement]]。\n- 应用与挑战：[[quantum-computing]] 的退相干误差、[[quantum-error-correction]]。\n\n## 前置知识\n\n- [[density-matrix]]、[[operators-and-measurement]]、[[entanglement]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 5,
     "note": "退相干的数学描述"
    },
    {
     "id": "operators-and-measurement",
     "name": "算符与测量",
     "weight": 5,
     "note": "投影测量公设"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "测量问题是量子力学的核心疑难"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 4,
     "note": "测量装置与被测系统的纠缠"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 4,
     "note": "波函数的概率诠释"
    },
    {
     "id": "bell-inequalities",
     "name": "贝尔不等式",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 3,
     "note": "退相干是量子计算的主要障碍"
    },
    {
     "id": "quantum-error-correction",
     "name": "量子纠错",
     "weight": 3,
     "note": "退相干与测量"
    }
   ],
   "softLinks": [
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "quantum-mechanics",
   "name": "量子力学",
   "nameEn": "Quantum Mechanics",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "量子理论",
    "波动力学"
   ],
   "tags": [
    "量子",
    "波函数",
    "测量"
   ],
   "keywords": [
    "波函数",
    "算符",
    "测量",
    "对易子",
    "不确定性"
   ],
   "size": 592,
   "degree": 56,
   "pos": {
    "x": 30,
    "y": 20,
    "z": 0
   },
   "fixed": false,
   "body": "# 量子力学\n\n## 概述\n\n量子力学描述微观（原子及更小）尺度系统的规律，是 20 世纪最成功的物理理论之一。它以**波函数**（态矢）与**算符**为核心：系统状态属于希尔伯特空间，可观测物理量对应厄米算符，测量结果只能是其本征值，概率由**玻恩规则** $P(a)=|\\langle a|\\psi\\rangle|^2$ 给出。量子力学于 1925–26 年由海森堡（矩阵力学）、薛定谔（波动力学）、玻恩、狄拉克等人建立，其预言（能谱、氢原子、反粒子、纠缠）已被实验精确验证。\n\n## 基本概念\n\n- **态矢 / 波函数**：$|\\psi\\rangle$、$\\psi(\\vec r)=\\langle\\vec r|\\psi\\rangle$。\n- **希尔伯特空间**：完备内积空间，态矢的数学空间。\n- **算符 / 厄米算符**：可观测量对应线性厄米（自伴）算符。\n- **本征值 / 本征矢**：$\\hat A|a\\rangle=a|a\\rangle$，测量值即本征值。\n- **叠加原理**：$|\\psi\\rangle=\\sum c_n|n\\rangle$，各分量的概率为 $|c_n|^2$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**基本对易关系**：\n\n$$ [\\hat x,\\hat p]=i\\hbar $$\n\n**海森堡不确定性原理**：\n\n$$ \\Delta A\\,\\Delta B\\ge\\frac12|\\langle[\\hat A,\\hat B]\\rangle|,\\qquad \\Delta x\\,\\Delta p\\ge\\frac{\\hbar}{2} $$\n\n**薛定谔方程**（演化）：\n\n$$ i\\hbar\\frac{\\partial}{\\partial t}|\\psi\\rangle=\\hat H|\\psi\\rangle $$\n\n### 推导要点\n\n- **正则量子化**：把经典泊松括号提升为对易子 $\\{x,p\\}=1\\to[\\hat x,\\hat p]=i\\hbar$（见 [[poisson-brackets]]、[[hamiltonian-mechanics]]）。\n- **不确定性原理**：由施瓦茨不等式 $|\\langle u|u\\rangle||\\langle v|v\\rangle|\\ge|\\langle u|v\\rangle|^2$ 应用于 $\\hat A-\\langle A\\rangle$ 与 $\\hat B-\\langle B\\rangle$，结合对易子即得。\n- **玻恩规则**：概率诠释由实验（干涉、测量统计）确立，是量子力学公设之一。\n\n### 重要定理与推论\n\n- **五条公设**：态矢、可观测量、测量、演化（薛定谔方程）、全同粒子对称性。\n- **能级量子化**：束缚态能量离散（原子光谱、谐振子）。\n- **隧穿与干涉**：波函数的波动性导致隧穿与干涉。\n- **经典对应**：$\\hbar\\to0$ 或大量子数下回到经典力学（对应原理）。\n\n## 深化内容\n\n量子力学的数学形式是**希尔伯特空间上的谱理论**（[[linear-algebra]] 的无限维推广）。三种表述——薛定谔（态演化）、海森堡（[[matrix-mechanics]]，算符演化）、费曼（[[path-integral]]）——物理等价。诠释问题（哥本哈根、多世界、退相干）见 [[quantum-measurement]]。相对论化与多粒子推广走向 [[quantum-field-theory]]。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、Shankar《量子力学原理》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[schrodinger-equation]]、[[operators-and-measurement]]、[[angular-momentum-qm]]、[[spin]]。\n- 数学基础：[[linear-algebra]]（态空间与算符）、[[fourier-analysis]]（表象变换）。\n- 表述：[[matrix-mechanics]]、[[path-integral]]。\n- 关联：[[entanglement]]、[[quantum-measurement]]、[[density-matrix]]。\n\n## 上位替代\n\n- 经典极限：$\\hbar\\to0$（大量子数）回到 [[newtonian-mechanics]]。\n- 相对论量子力学与多粒子系统由 [[quantum-field-theory]] 取代。\n\n## 前置知识\n\n- [[linear-algebra]]、[[calculus]]、[[hamiltonian-mechanics]]",
   "supersededBy": [
    {
     "id": "quantum-field-theory",
     "name": "量子场论"
    }
   ],
   "supersedes": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学"
    }
   ],
   "links": [
    {
     "id": "aharonov-bohm-effect",
     "name": "阿哈罗诺夫-玻姆效应",
     "weight": 5,
     "note": "量子干涉实验"
    },
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 5,
     "note": "角动量是量子力学的核心可观察量"
    },
    {
     "id": "atomic-molecular-optics",
     "name": "原子分子光学物理",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "bell-inequalities",
     "name": "贝尔不等式",
     "weight": 5,
     "note": "量子力学的非定域性"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 5,
     "note": "普朗克量子假设揭开量子力学序幕"
    },
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 5,
     "note": "混合态的完整描述"
    },
    {
     "id": "entanglement",
     "name": "量子纠缠",
     "weight": 5,
     "note": "量子理论的推论"
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 5,
     "note": "多体量子力学"
    },
    {
     "id": "linear-algebra",
     "name": "线性代数",
     "weight": 5,
     "note": "态空间与算符"
    },
    {
     "id": "matrix-mechanics",
     "name": "矩阵力学",
     "weight": 5,
     "note": "海森堡表述"
    },
    {
     "id": "molecular-physics",
     "name": "分子物理",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 5,
     "note": "量子力学的多体应用"
    },
    {
     "id": "operators-and-measurement",
     "name": "算符与测量",
     "weight": 5,
     "note": "测量理论"
    },
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 5,
     "note": "费曼路径积分表述"
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 5,
     "note": "量子力学的主要近似方法"
    },
    {
     "id": "qm-variational-method",
     "name": "量子变分法",
     "weight": 5,
     "note": "求基态的近似方法"
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 5,
     "note": "物理基础"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 5,
     "note": "退相干与测量问题"
    },
    {
     "id": "quantum-optics",
     "name": "量子光学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "scattering-theory",
     "name": "散射理论",
     "weight": 5,
     "note": "量子散射理论"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 5,
     "note": "量子力学的基本方程"
    },
    {
     "id": "band-theory",
     "name": "能带理论",
     "weight": 4,
     "note": "周期性势"
    },
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 4,
     "note": "绝热定理"
    },
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 4,
     "note": "定态薛定谔方程即本征值问题"
    },
    {
     "id": "fourier-analysis",
     "name": "傅里叶分析",
     "weight": 4,
     "note": "动量与位置表象互为傅里叶对偶"
    },
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 4,
     "note": ""
    },
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 4,
     "note": "衰变规律的量子起源"
    },
    {
     "id": "nuclear-models",
     "name": "核模型",
     "weight": 4,
     "note": "壳模型的量子基础"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 4,
     "note": "量子多体问题"
    },
    {
     "id": "quantum-cryptography",
     "name": "量子密码学",
     "weight": 4,
     "note": "不可克隆定理"
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-tunneling",
     "name": "量子隧穿",
     "weight": 4,
     "note": ""
    },
    {
     "id": "second-quantization",
     "name": "二次量子化",
     "weight": 4,
     "note": "多体量子力学的表述"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 4,
     "note": ""
    },
    {
     "id": "ultracold-atoms",
     "name": "超冷原子",
     "weight": 4,
     "note": "量子相干"
    },
    {
     "id": "bose-einstein-condensation",
     "name": "玻色-爱因斯坦凝聚",
     "weight": 3,
     "note": ""
    },
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 3,
     "note": "守恒量对应量子数"
    },
    {
     "id": "hamilton-jacobi-theory",
     "name": "哈密顿-雅可比理论",
     "weight": 3,
     "note": "半经典极限"
    },
    {
     "id": "integral-transforms",
     "name": "积分变换",
     "weight": 3,
     "note": "位置-动量表象变换"
    },
    {
     "id": "laser-cooling",
     "name": "激光冷却",
     "weight": 3,
     "note": ""
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 3,
     "note": "受激辐射的量子基础"
    },
    {
     "id": "multipole-expansion",
     "name": "多极展开",
     "weight": 3,
     "note": "电磁跃迁的多极选择定则"
    },
    {
     "id": "semiconductors",
     "name": "半导体",
     "weight": 3,
     "note": ""
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 3,
     "note": "物质波"
    },
    {
     "id": "canonical-transformations",
     "name": "正则变换",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "微观基础"
    },
    {
     "id": "differential-equations",
     "name": "常微分方程",
     "weight": 3,
     "note": ""
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": "量子统计"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 2,
     "note": "氢原子是量子的开普勒问题"
    },
    {
     "id": "complex-analysis",
     "name": "复变函数",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": [
    {
     "id": "poisson-brackets",
     "name": "泊松括号",
     "weight": 5,
     "note": "正则量子化把泊松括号提升为对易子"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 4,
     "note": "正则量子化来源"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 3,
     "note": "微观尺度由量子力学取代"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": "单粒子极限"
    }
   ]
  },
  {
   "id": "quantum-tunneling",
   "name": "量子隧穿",
   "nameEn": "Quantum Tunneling",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "隧穿效应"
   ],
   "tags": [
    "量子",
    "隧穿",
    "势垒"
   ],
   "keywords": [
    "透射系数",
    "WKB近似",
    "扫描隧道显微镜"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 量子隧穿\n\n## 概述\n\n量子隧穿是粒子**穿过经典禁区**（势垒 $V>E$ 的区域）的现象，无经典对应，是量子波动性的直接体现。对有限高势垒，透射系数指数衰减，由 **WKB 近似**给出。隧穿是许多重要物理过程的根源：$\\alpha$ 衰变、扫描隧道显微镜（STM）、约瑟夫森效应、核聚变（太阳中质子隧穿库仑势垒）、闪存器件与量子点。隧穿表明波函数在禁区并非严格为零，而是指数衰减，从而在另一侧\"漏出\"。\n\n## 基本概念\n\n- **势垒**：$V(x)>E$ 的经典禁区。\n- **透射系数 / 反射系数**：$T$、$R$，满足 $T+R=1$。\n- **WKB 近似**：慢变势下的半经典近似。\n- **隧穿时间**：粒子穿过势垒的时间（仍有争议的概念）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n矩形势垒（高 $V_0$、宽 $a$）的透射系数：\n\n$$ T=\\frac{1}{1+\\frac{V_0^2\\sinh^2(\\kappa a)}{4E(V_0-E)}},\\qquad \\kappa=\\frac{\\sqrt{2m(V_0-E)}}{\\hbar} $$\n\n**WKB 隧穿概率**（一般势垒）：\n\n$$ T\\approx\\exp\\Big(-2\\int_{x_1}^{x_2}\\sqrt{\\frac{2m(V(x)-E)}{\\hbar^2}}\\,dx\\Big) $$\n\n### 推导要点\n\n- **矩形势垒**：在三个区域（入射、势垒内 $e^{\\pm\\kappa x}$、透射）写波函数，由波函数及其导数在边界连续，解出透射振幅。\n- **WKB 近似**：在慢变势下取 $\\psi\\approx e^{\\pm i\\int k(x)dx}/\\sqrt{k(x)}$，禁区 $k=i\\kappa$ 得指数衰减，连接公式给出透射概率。\n- **指数衰减的本质**：禁区波函数 $\\sim e^{-\\kappa x}$，穿透率随 $\\kappa a$ 指数下降。\n\n### 重要定理与推论\n\n- **隧穿无经典对应**：经典粒子 $E<V$ 完全反射，量子粒子有非零透射。\n- **$\\alpha$ 衰变**：伽莫夫理论用隧穿解释 $\\alpha$ 粒子逃逸库仑+离心势垒（见 [[nuclear-decay]]）。\n- **扫描隧道显微镜**：隧穿电流 $I\\propto e^{-2\\kappa d}$，对针尖-样品距离 $d$ 极敏感，实现原子级成像。\n- **约瑟夫森效应**：库珀对隧穿绝缘势垒（[[superconductivity]]）。\n\n## 深化内容\n\n隧穿的推广包括**共振隧穿**（量子阱中的透射峰）、**瞬子**（量子场论中的虚时隧穿，描述量子衰变）、**宏观量子隧穿**（超导相位隧穿）。隧穿时间与超光速争议是量子基础的有趣话题。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[schrodinger-equation]]、[[quantum-mechanics]]。\n- 应用：[[nuclear-decay]]（α 衰变）、[[superconductivity]]（约瑟夫森结）、扫描隧道显微镜、闪存器件。\n\n## 前置知识\n\n- [[schrodinger-equation]]、[[quantum-mechanics]]、[[differential-equations]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "nuclear-decay",
     "name": "放射性衰变",
     "weight": 5,
     "note": "α 衰变即势垒隧穿"
    },
    {
     "id": "schrodinger-equation",
     "name": "薛定谔方程",
     "weight": 5,
     "note": "隧穿由波动性产生"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "nuclear-fusion",
     "name": "核聚变",
     "weight": 3,
     "note": "库仑势垒隧穿"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 3,
     "note": "约瑟夫森结"
    },
    {
     "id": "berry-phase",
     "name": "贝里相位",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "scattering-theory",
   "name": "散射理论",
   "nameEn": "Scattering Theory",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "量子散射",
    "碰撞理论"
   ],
   "tags": [
    "量子",
    "散射",
    "截面"
   ],
   "keywords": [
    "散射振幅",
    "微分散射截面",
    "相移",
    "玻恩近似"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 散射理论\n\n## 概述\n\n散射理论从散射实验（粒子被势/靶散射后）提取**相互作用**信息，是量子力学与粒子物理、原子核物理、凝聚态物理的实验核心。其框架：入射平面波 $e^{ikz}$ 被势散射后，远场波函数为\"平面波 + 出射球面波\"，球面波的系数即**散射振幅** $f(\\theta,\\phi)$，其模方给出**微分散射截面**。分波法（相移分析）处理球对称势，玻恩近似处理弱势，李普曼-施温格方程用格林函数形式化整个理论。\n\n## 基本概念\n\n- **散射振幅**：$f(\\theta,\\phi)$，球面波系数。\n- **微分散射截面**：$\\frac{d\\sigma}{d\\Omega}=|f|^2$；总截面 $\\sigma=\\int|f|^2d\\Omega$。\n- **相移** $\\delta_l$：散射势对第 $l$ 分波的相位改变。\n- **动量转移**：$\\vec q=\\vec k-\\vec k'$，$q=2k\\sin(\\theta/2)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n渐近波函数：\n\n$$ \\psi(\\vec r)\\xrightarrow{r\\to\\infty}e^{ikz}+f(\\theta,\\phi)\\frac{e^{ikr}}{r} $$\n\n**分波法**（球对称势）：\n\n$$ f(\\theta)=\\frac1k\\sum_{l=0}^{\\infty}(2l+1)e^{i\\delta_l}\\sin\\delta_l\\,P_l(\\cos\\theta),\\qquad \\sigma=\\frac{4\\pi}{k^2}\\sum_l(2l+1)\\sin^2\\delta_l $$\n\n**玻恩近似**：\n\n$$ f(\\theta)\\approx-\\frac{m}{2\\pi\\hbar^2}\\int e^{-i\\vec q\\cdot\\vec r}V(\\vec r)\\,d^3r $$\n\n### 推导要点\n\n- **分波展开**：把 $\\psi$ 按 $P_l(\\cos\\theta)$ 展开，每分波径向方程在无穷远处为 $R_l\\sim\\sin(kr-l\\pi/2+\\delta_l)/r$，与自由解比较相位差即 $\\delta_l$。\n- **玻恩近似**：用格林函数写出积分方程 $\\psi=\\phi_0+\\int GV\\psi$，对弱势取一次迭代（用 $\\phi_0$ 替换积分中的 $\\psi$），得玻恩近似。\n- **李普曼-施温格方程**：$\\psi_k=\\phi_k+\\hat G_0V\\psi_k$，其中 $\\hat G_0=(E-H_0+i\\epsilon)^{-1}$ 是自由格林函数（[[green-function]]）。\n\n### 重要定理与推论\n\n- **光学定理**：$\\sigma_{\\mathrm{tot}}=\\frac{4\\pi}{k}\\mathrm{Im}\\,f(0)$（总截面与向前散射振幅虚部联系，概率守恒）。\n- **相移的意义**：吸引势 $\\delta_l>0$（相位超前）、排斥势 $\\delta_l<0$。\n- **低能散射**：只有 $l=0$（s 波）贡献，$\\sigma\\to4\\pi a^2$（散射长度 $a$）。\n- **玻恩近似的适用**：弱势/高能（$|V|\\ll\\hbar^2/ma^2$）。\n\n## 深化内容\n\n散射理论推广到**量子场论**：散射振幅由[[feynman-diagrams]] 计算（S 矩阵），是 [[particle-physics]] 与 [[standard-model]] 验证的基础。共振散射（布莱特-维格纳）、多体散射、库仑散射（卢瑟福公式的量子形式）是重要扩展。延伸阅读可参考 Sakurai《现代量子力学》、Griffiths《量子力学概论》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]、[[green-function]]（李普曼-施温格方程）、[[perturbation-theory]]（玻恩级数）。\n- 场论推广：[[feynman-diagrams]]（S 矩阵）、[[particle-physics]]、[[standard-model]]。\n\n## 前置知识\n\n- [[quantum-mechanics]]、[[green-function]]、[[special-functions]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子散射理论"
    },
    {
     "id": "feynman-diagrams",
     "name": "费曼图",
     "weight": 4,
     "note": "场论散射振幅"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 4,
     "note": "李普曼-施温格方程"
    },
    {
     "id": "nuclear-reactions",
     "name": "核反应",
     "weight": 4,
     "note": "散射与截面"
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 4,
     "note": "玻恩近似"
    },
    {
     "id": "nuclear-physics",
     "name": "核物理",
     "weight": 3,
     "note": "核散射实验方法"
    },
    {
     "id": "particle-physics",
     "name": "粒子物理",
     "weight": 3,
     "note": "实验方法"
    },
    {
     "id": "standard-model",
     "name": "粒子物理标准模型",
     "weight": 2,
     "note": "粒子物理中的散射实验"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "schrodinger-equation",
   "name": "薛定谔方程",
   "nameEn": "Schrödinger Equation",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "含时薛定谔方程",
    "定态薛定谔方程"
   ],
   "tags": [
    "量子",
    "波函数",
    "方程"
   ],
   "keywords": [
    "哈密顿量",
    "定态",
    "本征值",
    "演化算符",
    "概率流"
   ],
   "size": 148,
   "degree": 13,
   "pos": null,
   "fixed": false,
   "body": "# 薛定谔方程\n\n## 概述\n\n薛定谔方程（1926）是量子力学的基本动力学方程，描述波函数随时间的幺正演化，地位相当于经典力学的牛顿第二定律。含时方程由哈密顿算符 $\\hat H$ 生成；当 $\\hat H$ 不显含时间时，分离变量得到**定态方程** $\\hat H\\psi=E\\psi$，即本征值问题，其本征值给出能谱。薛定谔方程由德布罗意物质波假设启发、经正则量子化确立，其精确可解模型（谐振子、氢原子）构成了量子力学的骨架。\n\n## 基本概念\n\n- **波函数**：$\\psi(\\vec r,t)$，满足 $|\\psi|^2$ 为概率密度（玻恩规则）。\n- **哈密顿算符**：$\\hat H=-\\frac{\\hbar^2}{2m}\\nabla^2+V(\\vec r)$。\n- **定态**：能量本征态 $\\psi_n$，概率密度不随时间变化。\n- **演化算符**：$\\hat U(t)=e^{-i\\hat Ht/\\hbar}$，幺正。\n- **概率流**：$\\vec j=\\frac{\\hbar}{2mi}(\\psi^*\\nabla\\psi-\\psi\\nabla\\psi^*)$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**含时薛定谔方程**：\n\n$$ i\\hbar\\frac{\\partial\\psi}{\\partial t}=\\hat H\\psi=\\Big(-\\frac{\\hbar^2}{2m}\\nabla^2+V\\Big)\\psi $$\n\n**定态薛定谔方程**：\n\n$$ \\hat H\\psi_n=E_n\\psi_n $$\n\n**概率守恒（连续性方程）**：\n\n$$ \\frac{\\partial|\\psi|^2}{\\partial t}+\\nabla\\cdot\\vec j=0 $$\n\n### 推导要点\n\n- **定态分离**：设 $\\psi(\\vec r,t)=\\psi(\\vec r)T(t)$，代入含时方程分离变量，得 $T=e^{-iEt/\\hbar}$ 与定态方程 $\\hat H\\psi=E\\psi$。\n- **演化算符**：形式解 $\\psi(t)=e^{-i\\hat Ht/\\hbar}\\psi(0)$；$\\hat H$ 厄米故 $e^{-i\\hat Ht/\\hbar}$ 幺正（保概率）。\n- **连续性方程**：由薛定谔方程及其共轭相减，整理为 $\\partial_t(\\psi^*\\psi)+\\nabla\\cdot\\vec j=0$，保证总概率守恒。\n\n### 重要定理与推论\n\n- **幺正演化**：概率守恒，$\\|\\psi(t)\\|=\\|\\psi(0)\\|$。\n- **能谱的本征值结构**：束缚态能量离散，散射态连续。\n- **定态的稳定性**：定态概率密度不随时间变化。\n- **平面波解**：自由粒子 $\\psi=e^{i(\\vec k\\cdot\\vec r-\\omega t)}$，$\\omega=E/\\hbar$（德布罗意关系）。\n\n## 深化内容\n\n薛定谔方程是**波动力学**（位置表象）形式，与海森堡的[[matrix-mechanics]] 等价（表象变换）。费曼的 [[path-integral]] 从传播子角度给出另一表述。相对论化导出克莱因-戈登方程与狄拉克方程（走向 [[quantum-field-theory]]）。含时微扰、散射、退相干（[[quantum-measurement]]）都以它为出发点。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-mechanics]]（框架）、[[hydrogen-atom]] 与 [[quantum-harmonic-oscillator]]（可解模型）、[[eigenvalue-problems]]。\n- 数学：[[partial-differential-equations]]、[[mathematical-physics-methods]]（分离变量/格林函数）。\n- 物质波：由德布罗意关系 $\\vec p=\\hbar\\vec k$ 启发（[[wave-mechanics]]）。\n\n## 前置知识\n\n- [[linear-algebra]]、[[partial-differential-equations]]、[[quantum-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "hydrogen-atom",
     "name": "氢原子",
     "weight": 5,
     "note": "精确可解的重要例子"
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 5,
     "note": "精确可解模型"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "量子力学的基本方程"
    },
    {
     "id": "quantum-tunneling",
     "name": "量子隧穿",
     "weight": 5,
     "note": "隧穿由波动性产生"
    },
    {
     "id": "eigenvalue-problems",
     "name": "本征值问题",
     "weight": 4,
     "note": "定态即本征值问题"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": ""
    },
    {
     "id": "matrix-mechanics",
     "name": "矩阵力学",
     "weight": 4,
     "note": "两种表述等价"
    },
    {
     "id": "operators-and-measurement",
     "name": "算符与测量",
     "weight": 4,
     "note": "算符形式"
    },
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 4,
     "note": "数学类型"
    },
    {
     "id": "perturbation-theory",
     "name": "量子微扰论",
     "weight": 4,
     "note": ""
    },
    {
     "id": "separation-of-variables",
     "name": "分离变量法",
     "weight": 4,
     "note": "定态问题即分离变量"
    },
    {
     "id": "qm-variational-method",
     "name": "量子变分法",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 3,
     "note": "物质波"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "second-quantization",
   "name": "二次量子化",
   "nameEn": "Second Quantization",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "产生湮灭算符",
    "占据数表示"
   ],
   "tags": [
    "量子",
    "多体",
    "场量子化"
   ],
   "keywords": [
    "产生算符",
    "湮灭算符",
    "对易子",
    "Fock空间"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 二次量子化\n\n## 概述\n\n二次量子化把单粒子波函数\"提升\"为**产生/湮灭算符**，在**占据数表象**（Fock 空间）中描述多体系统。玻色子满足对易关系、费米子满足反对易关系，粒子数算符 $\\hat n_i=a_i^\\dagger a_i$ 的本征值即占据数。二次量子化自动实现全同粒子的交换对称性，使多体问题（电子气体、超导、声子、光子）获得简洁统一的语言，是**量子场论**与凝聚态多体理论的标准起点。\n\n## 基本概念\n\n- **产生/湮灭算符**：$a_i^\\dagger$ 增加、$a_i$ 减少一个 $i$ 态粒子。\n- **Fock 空间**：占据数态 $|n_1,n_2,\\dots\\rangle$ 张成的空间。\n- **玻色子 / 费米子关系**：对易 $[a_i,a_j^\\dagger]=\\delta_{ij}$ / 反对易 $\\{c_i,c_j^\\dagger\\}=\\delta_{ij}$。\n- **数算符**：$\\hat n_i=a_i^\\dagger a_i$；总粒子数 $\\hat N=\\sum_i\\hat n_i$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n玻色子与费米子的（反）对易关系：\n\n$$ [a_i,a_j^\\dagger]=\\delta_{ij},\\ [a_i,a_j]=0\\quad(\\text{玻色});\\qquad \\{c_i,c_j^\\dagger\\}=\\delta_{ij},\\ \\{c_i,c_j\\}=0\\quad(\\text{费米}) $$\n\n占据数态与算符作用：\n\n$$ a_i^\\dagger|n_i\\rangle=\\sqrt{n_i+1}\\,|n_i+1\\rangle,\\qquad a_i|n_i\\rangle=\\sqrt{n_i}\\,|n_i-1\\rangle $$\n\n单粒子算符 / 二体算符的二次量子化形式：\n\n$$ \\hat O=\\sum_{ij}\\langle i|\\hat o|j\\rangle a_i^\\dagger a_j,\\qquad \\hat V=\\frac12\\sum_{ijkl}\\langle ij|V|kl\\rangle a_i^\\dagger a_j^\\dagger a_l a_k $$\n\n### 推导要点\n\n- **产生/湮灭算符的来源**：把单粒子模式视为谐振子（[[quantum-harmonic-oscillator]]），占据数对应谐振子量子数，升降算符即产生/湮灭。\n- **费米子的反对易**：泡利原理要求最多一个粒子，反对易关系保证 $c_i^{\\dagger2}=0$（不能双占据）。\n- **算符表示**：单粒子算符 $\\hat O$ 作用于单粒子即 $\\hat o$，二次量子化形式把多体作用推广到 Fock 空间。\n\n### 重要定理与推论\n\n- **自动对称化**：产生/湮灭算符的（反）对易关系自动保证玻色/费米统计。\n- **泡利原理**：$c_i^{\\dagger2}=0$ 是费米子反对易关系的直接结果。\n- **场的量子化**：把场 $\\hat\\phi(\\vec r)=\\sum_k\\phi_k(\\vec r)a_k$ 用产生/湮灭展开，即 [[quantum-field-theory]] 的起点。\n- **真空态**：$a_i|0\\rangle=0$ 定义真空。\n\n## 深化内容\n\n二次量子化是**量子场论**与 [[condensed-matter-physics]] 的通用语言：[[phonons]]（晶格振动量子化）、[[superconductivity]]（BCS 库珀对）、[[quantum-optics]]（光子）、[[bose-einstein-condensation]] 都用它表述。延伸阅读可参考 Fetter & Walecka《Quantum Theory of Many-Particle Systems》、Altland & Simons《Condensed Matter Field Theory》、Peskin & Schroeder《An Introduction to QFT》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[identical-particles]]（全同性）、[[quantum-harmonic-oscillator]]（模式量子化）、[[quantum-field-theory]]（场的正则量子化）。\n- 应用：[[condensed-matter-physics]]（电子气体、超导）、[[phonons]]（声子场）、[[quantum-optics]]（光子场）。\n\n## 前置知识\n\n- [[quantum-harmonic-oscillator]]、[[identical-particles]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 5,
     "note": "天然处理全同粒子"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 5,
     "note": "场量子化的起点"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "多体问题"
    },
    {
     "id": "phonons",
     "name": "声子",
     "weight": 4,
     "note": "产生湮灭算符"
    },
    {
     "id": "quantum-harmonic-oscillator",
     "name": "量子谐振子",
     "weight": 4,
     "note": "模式量子化"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": "多体量子力学的表述"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "spin",
   "name": "自旋",
   "nameEn": "Spin",
   "domain": "quantum-mechanics",
   "domainName": "量子力学",
   "color": "#9b59b6",
   "aliases": [
    "自旋角动量",
    "泡利矩阵"
   ],
   "tags": [
    "量子",
    "自旋",
    "粒子内禀"
   ],
   "keywords": [
    "泡利矩阵",
    "自旋1/2",
    "塞曼效应"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 自旋\n\n## 概述\n\n自旋是粒子的**内禀角动量**，无经典对应（无法用\"绕轴自转\"解释）。自旋 $1/2$ 系统由**泡利矩阵**描述，其态是二维希尔伯特空间中的矢量。自旋满足角动量对易关系但取**半整数值**。**自旋-统计定理**把自旋与统计联系：半整数自旋→费米子、整数自旋→玻色子。自旋是量子比特（[[quantum-computing]]）最自然的物理实现，也是原子精细结构、磁性、NMR/MRI 与量子信息的基础。\n\n## 基本概念\n\n- **自旋算符**：$\\hat S_x,\\hat S_y,\\hat S_z$，满足 $[\\hat S_i,\\hat S_j]=i\\hbar\\epsilon_{ijk}\\hat S_k$。\n- **泡利矩阵**：$\\sigma_x,\\sigma_y,\\sigma_z$，满足 $\\sigma_i\\sigma_j=\\delta_{ij}+i\\epsilon_{ijk}\\sigma_k$。\n- **自旋态**：$|0\\rangle$（自旋上）、$|1\\rangle$（自旋下），布洛赫球描述。\n- **磁矩**：$\\vec\\mu=\\gamma\\vec S$，$\\gamma$ 为旋磁比（电子 $\\gamma\\approx-e/m_e$）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n自旋 $1/2$ 算符（泡利矩阵）：\n\n$$ \\hat{\\vec S}=\\frac{\\hbar}{2}\\vec\\sigma,\\qquad \\sigma_x=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\ \\sigma_y=\\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix},\\ \\sigma_z=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix} $$\n\n**磁场中的自旋哈密顿量**（塞曼）：\n\n$$ \\hat H=-\\vec\\mu\\cdot\\vec B=-\\gamma\\vec S\\cdot\\vec B $$\n\n### 推导要点\n\n- **自旋的表示**：$j=1/2$ 是 $SU(2)$ 的二维不可约表示，生成元即 $\\vec\\sigma/2$（见 [[angular-momentum-qm]]）。\n- **塞曼效应**：取 $\\vec B=B\\hat z$，$H=-\\gamma BS_z$，本征值 $\\mp\\gamma\\hbar B/2$，能级劈裂。\n- **自旋进动**：态在磁场中的演化 $|\\psi(t)\\rangle=e^{i\\gamma Bt\\sigma_z/2}|\\psi(0)\\rangle$，自旋绕 $B$ 轴进动。\n\n### 重要定理与推论\n\n- **泡利矩阵代数**：$\\{\\sigma_i,\\sigma_j\\}=2\\delta_{ij}$、$[\\sigma_i,\\sigma_j]=2i\\epsilon_{ijk}\\sigma_k$、$\\sigma_i^2=1$、$\\mathrm{tr}\\,\\sigma_i=0$。\n- **自旋-统计定理**：自旋决定玻色/费米统计（[[identical-particles]]）。\n- **自旋-轨道耦合**：$\\vec L\\cdot\\vec S$ 导致原子精细结构（[[perturbation-theory]]）。\n- **自旋态是量子比特**：$|0\\rangle,|1\\rangle$ 是 [[quantum-computing]] 的基本单元。\n\n## 深化内容\n\n自旋的**相对论起源**：狄拉克方程自然导出自旋 $1/2$ 与反常磁矩（[[quantum-field-theory]]、[[qed]]）。自旋耦合（LS、JJ）决定原子/分子能级；自旋电子学（自旋电子器件）、核磁共振（NMR）与磁共振成像（MRI）是重要应用。**贝尔态与纠缠**（[[entanglement]]）常以自旋实现。延伸阅读可参考 Sakurai《现代量子力学》、Griffiths《量子力学概论》、朗道《量子力学（非相对论）》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[angular-momentum-qm]]、[[identical-particles]]（泡利不相容）。\n- 相对论起源：[[quantum-field-theory]] 的狄拉克方程、[[qed]]（反常磁矩）。\n- 应用：[[quantum-computing]]（量子比特）、[[condensed-matter-physics]]（磁性）、NMR/MRI。\n\n## 前置知识\n\n- [[angular-momentum-qm]]、[[quantum-mechanics]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "angular-momentum-qm",
     "name": "量子角动量理论",
     "weight": 5,
     "note": "自旋是角动量理论的一部分"
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 5,
     "note": "自旋-统计定理"
    },
    {
     "id": "elementary-particles",
     "name": "基本粒子",
     "weight": 4,
     "note": "自旋决定费米/玻色"
    },
    {
     "id": "quantum-computing",
     "name": "量子计算",
     "weight": 4,
     "note": "量子比特的物理实现"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 4,
     "note": "自旋-统计"
    },
    {
     "id": "atomic-physics",
     "name": "原子物理",
     "weight": 3,
     "note": "精细/超精细结构"
    },
    {
     "id": "nuclear-structure",
     "name": "原子核结构",
     "weight": 3,
     "note": "核自旋"
    }
   ],
   "softLinks": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 3,
     "note": "磁性"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 3,
     "note": "狄拉克方程导出自旋"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 3,
     "note": "狄拉克方程导出自旋"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "black-holes",
   "name": "黑洞",
   "nameEn": "Black Holes",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "黑洞物理",
    "施瓦西黑洞"
   ],
   "tags": [
    "相对论",
    "引力",
    "黑洞"
   ],
   "keywords": [
    "事件视界",
    "奇点",
    "霍金辐射"
   ],
   "size": 128,
   "degree": 11,
   "pos": null,
   "fixed": false,
   "body": "# 黑洞\n\n## 概述\n\n黑洞是广义相对论预言的**引力坍缩终极态**：物质坍缩到某半径内后，形成连光都无法逃逸的时空区域，其边界是**事件视界**。施瓦西解（球对称真空解）给出施瓦西半径 $r_s=2GM/c^2$，内部有曲率发散的**奇点**。黑洞由三个参数完全刻画（**无毛定理**）：质量、电荷、角动量。黑洞热力学与霍金辐射把广义相对论、量子场论与热力学联系起来，是量子引力研究的核心。\n\n## 基本概念\n\n- **事件视界**：$r=r_s$，内部信号无法逃出。\n- **施瓦西半径**：$r_s=2GM/c^2$。\n- **奇点**：曲率发散的时空点。\n- **无毛定理**：黑洞由 $M,Q,J$ 三参数完全决定。\n- **霍金辐射**：黑洞的半经典热辐射。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**施瓦西度规**：\n\n$$ ds^2=-\\Big(1-\\frac{2GM}{c^2r}\\Big)c^2dt^2+\\Big(1-\\frac{2GM}{c^2r}\\Big)^{-1}dr^2+r^2d\\Omega^2 $$\n\n**施瓦西半径**：\n\n$$ r_s=\\frac{2GM}{c^2} $$\n\n**贝肯斯坦-霍金熵与霍金温度**：\n\n$$ S=\\frac{k_Bc^3A}{4G\\hbar},\\qquad T_H=\\frac{\\hbar c^3}{8\\pi GMk_B} $$\n\n### 推导要点\n\n- **施瓦西解**：对球对称静态真空场方程求解，得施瓦西度规；$r=r_s$ 是坐标奇点（非物理）、$r=0$ 是真奇点。\n- **事件视界的逃逸速度**：由逃逸速度 $v_{\\mathrm{esc}}=\\sqrt{2GM/r}=c$ 得 $r_s=2GM/c^2$（与牛顿类比，精确解巧合一致）。\n- **霍金辐射**：视界附近的量子场产生粒子对，负能粒子落入黑洞、正能粒子逃逸，得热谱 $T_H=\\hbar c^3/(8\\pi GMk_B)$。\n\n### 重要定理与推论\n\n- **无毛定理**：黑洞由 $M,Q,J$ 唯一决定。\n- **黑洞热力学四定律**：面积定理（面积不减）、温度-表面引力类比等。\n- **霍金辐射与蒸发**：黑洞以 $T_H$ 辐射，最终蒸发（小质量黑洞温度更高）。\n- **黑洞信息悖论**：蒸发后信息是否丢失（[[quantum-gravity]] 的核心问题）。\n\n## 深化内容\n\n黑洞的天体物理证据：[[gravitational-waves]]（LIGO 双黑洞并合）、事件视界望远镜（M87*、Sgr A* 成像）。黑洞熵、霍金辐射与信息悖论连接 [[quantum-field-theory]]、[[entropy-information]] 与 [[string-theory]]。延伸阅读可参考 Carroll《Spacetime and Geometry》、Wald《General Relativity》、Hawking & Ellis《The Large Scale Structure of Space-Time》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[general-relativity]]、[[einstein-field-equations]]（施瓦西/克尔解）。\n- 观测：[[gravitational-waves]]（并合）、[[compact-objects]]。\n- 理论：[[entropy-information]]（信息悖论）、[[quantum-field-theory]]（霍金辐射）、[[string-theory]]/[[quantum-gravity]]。\n\n## 前置知识\n\n- [[general-relativity]]、[[einstein-field-equations]]、[[tensor-calculus]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "compact-objects",
     "name": "致密天体",
     "weight": 5,
     "note": "致密天体终极态"
    },
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 5,
     "note": "施瓦西解"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "引力坍缩的极端解"
    },
    {
     "id": "gravitational-waves",
     "name": "引力波",
     "weight": 4,
     "note": "并合辐射"
    },
    {
     "id": "quantum-gravity",
     "name": "量子引力",
     "weight": 4,
     "note": "黑洞信息悖论"
    },
    {
     "id": "entropy-information",
     "name": "熵与信息",
     "weight": 3,
     "note": "黑洞熵"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 3,
     "note": "霍金辐射"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 3,
     "note": "量子引力研究"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "黑洞热力学"
    }
   ],
   "softLinks": [
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 2,
     "note": "广义相对论修正轨道"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "einstein-field-equations",
   "name": "爱因斯坦场方程",
   "nameEn": "Einstein Field Equations",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "场方程",
    "引力方程"
   ],
   "tags": [
    "相对论",
    "引力",
    "方程"
   ],
   "keywords": [
    "里奇张量",
    "能量动量张量",
    "宇宙学常数"
   ],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 爱因斯坦场方程\n\n## 概述\n\n爱因斯坦场方程（1915）是广义相对论的核心：它把**时空几何**（爱因斯坦张量 $G_{\\mu\\nu}$）与**物质能量**（能量-动量张量 $T_{\\mu\\nu}$）联系为\n\n$$ G_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T_{\\mu\\nu} $$\n\n即\"物质告诉时空如何弯曲，时空告诉物质如何运动\"。场方程由**爱因斯坦-希尔伯特作用量**对度规变分得到，其精确解——施瓦西解（黑洞）、克尔解、FLRW 解（宇宙）——是广义相对论与天体物理的基石。\n\n## 基本概念\n\n- **里奇张量** $R_{\\mu\\nu}$、**标量曲率** $R$：曲率的缩并。\n- **爱因斯坦张量**：$G_{\\mu\\nu}=R_{\\mu\\nu}-\\frac12Rg_{\\mu\\nu}$。\n- **能量-动量张量** $T_{\\mu\\nu}$：物质的能量密度、动量流、应力。\n- **宇宙学常数** $\\Lambda$：真空能量密度。\n- **比安基恒等式**：$\\nabla_\\mu G^{\\mu\\nu}=0$（几何自动满足）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**爱因斯坦场方程**（含宇宙学常数）：\n\n$$ R_{\\mu\\nu}-\\frac12Rg_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T_{\\mu\\nu} $$\n\n**爱因斯坦-希尔伯特作用量**：\n\n$$ S=\\frac{c^4}{16\\pi G}\\int R\\sqrt{-g}\\,d^4x+\\int\\mathcal L_m\\sqrt{-g}\\,d^4x $$\n\n**守恒律**：$\\nabla_\\mu T^{\\mu\\nu}=0$（能量动量守恒，由比安基恒等式保证）。\n\n### 推导要点\n\n- **作用量变分**：对爱因斯坦-希尔伯特作用量关于度规变分，$\\delta\\int R\\sqrt{-g}\\,d^4x=\\int(R_{\\mu\\nu}-\\frac12Rg_{\\mu\\nu})\\delta g^{\\mu\\nu}\\sqrt{-g}\\,d^4x$，与物质项变分比较得场方程。\n- **守恒的几何保证**：$\\nabla_\\mu G^{\\mu\\nu}=0$（比安基恒等式）⇒ $\\nabla_\\mu T^{\\mu\\nu}=0$。\n- **弱场极限**：$g_{\\mu\\nu}=\\eta_{\\mu\\nu}+h_{\\mu\\nu}$ 线性化，得 $\\nabla^2\\Phi=4\\pi G\\rho$（牛顿引力）。\n\n### 重要定理与推论\n\n- **施瓦西解**：球对称真空解，描述黑洞（[[black-holes]]）。\n- **FLRW 解**：均匀各向同性解，给出宇宙学弗里德曼方程（[[cosmology]]）。\n- **引力波**：场方程的线性化波动解（[[gravitational-waves]]）。\n- **守恒与测地线**：$\\nabla_\\mu T^{\\mu\\nu}=0$ 蕴含自由粒子沿测地线运动。\n\n## 深化内容\n\n场方程的精确解与物理：施瓦西/克尔/克尔-纽曼黑洞、FLRW 宇宙、引力波。**宇宙学常数** $\\Lambda$ 与暗能量（[[cosmology]]）对应。场方程的非线性使其难以求解，数值相对论（引力波模拟）是前沿。量子化场方程通向[[quantum-gravity]]。延伸阅读可参考 Schutz《A First Course in General Relativity》、Carroll《Spacetime and Geometry》、Wald《General Relativity》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[general-relativity]]、[[tensor-calculus]]/[[differential-geometry]]（数学）、[[black-holes]]、[[cosmology]]。\n- 弱场极限：牛顿引力泊松方程 $\\nabla^2\\Phi=4\\pi G\\rho$。\n- 线性化：[[gravitational-waves]]。\n\n## 前置知识\n\n- [[tensor-calculus]]、[[differential-geometry]]、[[general-relativity]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 5,
     "note": "施瓦西解"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 5,
     "note": "弗里德曼方程"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 5,
     "note": "曲率"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "广义相对论的核心方程"
    },
    {
     "id": "gravitational-waves",
     "name": "引力波",
     "weight": 5,
     "note": "弱场线性化解"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 5,
     "note": "张量方程"
    },
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 2,
     "note": "爱因斯坦-希尔伯特作用量"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "equivalence-principle",
   "name": "等效原理",
   "nameEn": "Equivalence Principle",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "爱因斯坦电梯"
   ],
   "tags": [
    "相对论",
    "引力",
    "惯性质量"
   ],
   "keywords": [
    "惯性质量",
    "引力质量",
    "局部惯性系"
   ],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 等效原理\n\n## 概述\n\n等效原理断言：在足够小的时空区域内，**引力场与加速参考系的效应不可区分**（爱因斯坦电梯思想实验）。其最直接的实验基础是**惯性质量等于引力质量**（厄缶实验，精确到 $10^{-12}$；现代卫星实验到 $10^{-15}$）。等效原理是广义相对论的第一公设：它保证每个时空点存在**局部惯性系**（自由落体系），使狭义相对论局部成立，从而引力被几何化为时空弯曲。\n\n## 基本概念\n\n- **惯性质量**：牛顿第二定律 $F=m_ia$ 中的质量。\n- **引力质量**：万有引力 $F=Gm_gM/r^2$ 中的质量。\n- **局部惯性系**：自由落体参考系，其中狭义相对论成立。\n- **弱 / 强等效原理**：运动学等价 / 包括一切（非引力）物理定律等价。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**惯性质量 = 引力质量**（实验基础）：\n\n$$ m_i=m_g $$\n\n引力加速度与质量无关：\n\n$$ a=\\frac{GM}{r^2}\\quad(\\text{与物体质量无关}) $$\n\n**引力红移**（等效原理的推论）：\n\n$$ \\frac{\\Delta\\nu}{\\nu}=-\\frac{gh}{c^2} $$\n\n### 推导要点\n\n- **爱因斯坦电梯**：密闭电梯中无法区分\"静止于引力场\"与\"在自由空间加速\"（力学实验无法区分）。\n- **引力红移**：由等效原理，光从引力场底部发出到达顶部时频率降低（等价于多普勒效应），$\\Delta\\nu/\\nu=-gh/c^2$。\n- **光线偏折的定性预言**：等效原理预言光在引力场中偏折（广义相对论给出定量值，为等效原理值的 2 倍）。\n\n### 重要定理与推论\n\n- **局部惯性系存在**：引力可被局部\"消除\"（自由落体）。\n- **引力红移**：已在 Pound-Rebka 实验、GPS 中验证。\n- **光线偏折**：等效原理的定性预言。\n- **引力与几何**：等效原理是\"引力 = 时空弯曲\"的出发点。\n\n## 深化内容\n\n等效原理是[[general-relativity]] 的公设；引力红移、光线偏折、水星近日点进动、引力时间延迟（夏皮罗）是其可检验推论。GPS 系统必须计入广义相对论的时间修正（否则每天积累 ~10 km 误差）。延伸阅读可参考 Schutz《A First Course in General Relativity》、Will《Theory and Experiment in Gravitational Physics》、爱因斯坦原始论文。\n\n## 与其他知识的联系\n\n- 紧密相关：[[general-relativity]]（出发点）、[[non-inertial-frames]]（惯性力）、[[newtonian-mechanics]]（质量等价）。\n- 验证：引力红移、光线偏折、GPS 相对论修正。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[special-relativity]]、[[non-inertial-frames]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "广义相对论的出发点"
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 4,
     "note": "惯性力"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 3,
     "note": "惯性质量等于引力质量"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "general-relativity",
   "name": "广义相对论",
   "nameEn": "General Relativity",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "广义相对论",
    "GR"
   ],
   "tags": [
    "相对论",
    "引力",
    "时空"
   ],
   "keywords": [
    "等效原理",
    "场方程",
    "弯曲时空",
    "测地线"
   ],
   "size": 210,
   "degree": 17,
   "pos": {
    "x": 55,
    "y": -15,
    "z": 0
   },
   "fixed": false,
   "body": "# 广义相对论\n\n## 概述\n\n广义相对论（爱因斯坦，1915）是引力的几何理论：引力不是\"力\"，而是**时空弯曲**的表现。由**等效原理**出发（引力与加速参考系局部不可区分），引力场被等同于时空度规 $g_{\\mu\\nu}$，自由粒子沿弯曲时空的**测地线**运动，物质能量-动量张量 $T_{\\mu\\nu}$ 通过**爱因斯坦场方程**决定时空曲率。广义相对论已通过水星近日点进动、光线偏折、引力红移、引力波（LIGO 2015）、黑洞成像（EHT 2019）等精确验证。\n\n## 基本概念\n\n- **等效原理**：引力与惯性力局部不可区分。\n- **度规** $g_{\\mu\\nu}$：时空几何，线元 $ds^2=g_{\\mu\\nu}dx^\\mu dx^\\nu$。\n- **测地线**：弯曲时空中的\"直线\"（自由落体轨迹）。\n- **曲率**：黎曼张量、里奇张量、标量曲率。\n- **能量-动量张量** $T_{\\mu\\nu}$：物质的能量、动量、应力。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**爱因斯坦场方程**：\n\n$$ G_{\\mu\\nu}=R_{\\mu\\nu}-\\frac12Rg_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=\\frac{8\\pi G}{c^4}T_{\\mu\\nu} $$\n\n**测地线方程**：\n\n$$ \\frac{d^2x^\\mu}{d\\tau^2}+\\Gamma^\\mu_{\\rho\\sigma}\\frac{dx^\\rho}{d\\tau}\\frac{dx^\\sigma}{d\\tau}=0 $$\n\n**弱场极限**（牛顿泊松方程）：\n\n$$ \\nabla^2\\Phi=4\\pi G\\rho $$\n\n### 推导要点\n\n- **测地线方程**：由弧长泛函 $S=\\int ds$ 的变分（[[variational-calculus]]）导出，克里斯托费尔符号由度规给出。\n- **场方程的作用量**：爱因斯坦-希尔伯特作用量 $S=\\int R\\sqrt{-g}\\,d^4x$，对其变分得到 $G_{\\mu\\nu}$。\n- **弱场极限**：$g_{\\mu\\nu}=\\eta_{\\mu\\nu}+h_{\\mu\\nu}$，线性化场方程给出泊松方程，把牛顿引力作为弱场近似。\n\n### 重要定理与推论\n\n- **等效原理**：[[equivalence-principle]]（爱因斯坦电梯）。\n- **三大经典检验**：水星近日点进动、光线偏折、引力红移。\n- **引力波**：场方程的线性化解（[[gravitational-waves]]）。\n- **黑洞**：施瓦西/克尔解（[[black-holes]]）。\n\n## 深化内容\n\n广义相对论的解包括：施瓦西解（球对称）、克尔解（旋转黑洞）、FLRW 度规（[[cosmology]]）。**引力波**（[[gravitational-waves]]）打开引力波天文学；**黑洞**（[[black-holes]]）与信息悖论、霍金辐射连接量子引力（[[quantum-gravity]]）。广义相对论的量子化是当代理论物理的核心未解问题。延伸阅读可参考 Schutz《A First Course in General Relativity》、Carroll《Spacetime and Geometry》、Wald《General Relativity》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[equivalence-principle]]、[[einstein-field-equations]]、[[black-holes]]、[[cosmology]]。\n- 数学：[[differential-geometry]]（黎曼几何）、[[tensor-calculus]]。\n- 极限：低速弱场 [[newtonian-mechanics]]；无引力 [[special-relativity]]。\n- 观测：[[gravitational-waves]]（LIGO）、[[astrophysics]]（强引力天体）。\n\n## 前置知识\n\n- [[special-relativity]]、[[tensor-calculus]]、[[differential-geometry]]",
   "supersededBy": [],
   "supersedes": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学"
    },
    {
     "id": "special-relativity",
     "name": "狭义相对论"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题"
    }
   ],
   "links": [
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 5,
     "note": "极端引力"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 5,
     "note": "宇宙学"
    },
    {
     "id": "differential-geometry",
     "name": "微分几何",
     "weight": 5,
     "note": "数学语言"
    },
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 5,
     "note": "核心方程"
    },
    {
     "id": "equivalence-principle",
     "name": "等效原理",
     "weight": 5,
     "note": "出发点"
    },
    {
     "id": "gravitational-waves",
     "name": "引力波",
     "weight": 5,
     "note": "引力波"
    },
    {
     "id": "quantum-gravity",
     "name": "量子引力",
     "weight": 5,
     "note": "待与量子力学统一"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 5,
     "note": "计算工具"
    },
    {
     "id": "compact-objects",
     "name": "致密天体",
     "weight": 4,
     "note": "强引力"
    },
    {
     "id": "loop-quantum-gravity",
     "name": "圈量子引力",
     "weight": 4,
     "note": "待量子化理论"
    },
    {
     "id": "minkowski-spacetime",
     "name": "闵可夫斯基时空",
     "weight": 4,
     "note": "弯曲时空的平直极限"
    },
    {
     "id": "string-theory",
     "name": "弦理论",
     "weight": 4,
     "note": "目标之一是量子引力"
    },
    {
     "id": "astrophysics",
     "name": "天体物理",
     "weight": 3,
     "note": "强引力天体应用"
    },
    {
     "id": "galaxies",
     "name": "星系",
     "weight": 3,
     "note": "引力动力学"
    }
   ],
   "softLinks": [
    {
     "id": "variational-calculus",
     "name": "变分法",
     "weight": 3,
     "note": "测地线与爱因斯坦场方程由变分原理导出"
    }
   ],
   "supersedeLinks": [
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 4,
     "note": "平直时空极限"
    },
    {
     "id": "central-force-motion",
     "name": "有心力运动与开普勒问题",
     "weight": 3,
     "note": "轨道修正"
    }
   ]
  },
  {
   "id": "gravitational-waves",
   "name": "引力波",
   "nameEn": "Gravitational Waves",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "引力辐射"
   ],
   "tags": [
    "相对论",
    "引力",
    "波动"
   ],
   "keywords": [
    "横波",
    "极化",
    "引力波探测器",
    "四极辐射"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 引力波\n\n## 概述\n\n引力波是**时空曲率的涟漪**，由加速的质量系统产生，以光速传播。在弱场线性化近似下，度规 $g_{\\mu\\nu}=\\eta_{\\mu\\nu}+h_{\\mu\\nu}$，微扰 $h_{\\mu\\nu}$ 在横向无迹（TT）规范下满足波动方程，是**横波**、有两种极化（$+$ 与 $\\times$）。引力波的最低阶辐射是**四极辐射**（单极/偶极被守恒律禁戒）。2015 年 LIGO 首次直接探测双黑洞并合（GW150914），开启引力波天文学。\n\n## 基本概念\n\n- **微扰** $h_{\\mu\\nu}$：度规对平直背景的偏离。\n- **横向无迹（TT）规范**：$\\partial_\\mu h^{\\mu\\nu}=0$、$h=0$、$h_{0\\nu}=0$。\n- **极化**：$+$ 与 $\\times$ 两种模式。\n- **四极公式**：引力波由质量四极矩的时间二阶导产生。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n线性化波动方程（TT 规范）：\n\n$$ \\Box\\bar h_{\\mu\\nu}=0,\\qquad \\bar h_{\\mu\\nu}=h_{\\mu\\nu}-\\frac12\\eta_{\\mu\\nu}h $$\n\n**四极辐射公式**（辐射功率）：\n\n$$ P=\\frac{G}{5c^5}\\langle\\dddot{Q}_{ij}\\dddot{Q}_{ij}\\rangle $$\n\n其中 $Q_{ij}=\\int\\rho(3x_ix_j-r^2\\delta_{ij})d^3x$ 为质量四极矩。\n\n### 推导要点\n\n- **线性化**：把 $g_{\\mu\\nu}=\\eta_{\\mu\\nu}+h_{\\mu\\nu}$ 代入场方程，保留 $h$ 一阶，选择洛伦兹规范 $\\partial_\\mu\\bar h^{\\mu\\nu}=0$ 得波动方程。\n- **TT 规范**：利用剩余规范自由度消去 $h$ 的迹与 $0$ 分量，留下两个物理自由度（$+$、$\\times$ 极化）。\n- **四极公式**：由推迟解远场展开，最低阶非零项是四极矩（质量单极守恒、偶极为质心运动）。\n\n### 重要定理与推论\n\n- **横波、两极化**：引力波以 $+$、$\\times$ 两种极化传播。\n- **四极主导**：引力辐射最低阶是四极（无偶极辐射）。\n- **引力波携带能量角动量**：双星系统因辐射引力波而旋近（脉冲双星 PSR 1913+16 的验证）。\n- **引力波天文学**：并合事件（[[black-holes]]）、超新星、原初引力波（[[cosmology]]）。\n\n## 深化内容\n\n引力波探测（LIGO、Virgo、KAGRA、未来的 LISA）验证了广义相对论并开辟**多信使天文学**（引力波 + 电磁 + 中微子）。引力波的偏振、速度、波形检验修改引力理论。原初引力波可能携带暴胀的信息。延伸阅读可参考 Schutz《A First Course in General Relativity》、Maggiore《Gravitational Waves》、Carroll《Spacetime and Geometry》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[einstein-field-equations]]（线性化解）、[[general-relativity]]、[[black-holes]]（并合源）。\n- 源：双星并合、超新星、[[cosmology]]（原初引力波）。\n\n## 前置知识\n\n- [[einstein-field-equations]]、[[general-relativity]]、[[wave-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "einstein-field-equations",
     "name": "爱因斯坦场方程",
     "weight": 5,
     "note": "弱场线性化解"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 5,
     "note": "预言来源"
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 4,
     "note": "并合事件"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 2,
     "note": "原初引力波"
    },
    {
     "id": "supernovae",
     "name": "超新星",
     "weight": 2,
     "note": "核心坍缩引力波"
    },
    {
     "id": "wave-mechanics",
     "name": "波动与波动方程",
     "weight": 2,
     "note": "波动一般理论"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "minkowski-spacetime",
   "name": "闵可夫斯基时空",
   "nameEn": "Minkowski Spacetime",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "四维时空",
    "时空几何"
   ],
   "tags": [
    "相对论",
    "时空",
    "几何"
   ],
   "keywords": [
    "线元",
    "类时",
    "类光",
    "固有时"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 闵可夫斯基时空\n\n## 概述\n\n闵可夫斯基（1908）把狭义相对论表述为**四维时空几何**：把时间与空间统一为四维时空中的坐标，洛伦兹变换成为时空的\"伪转动\"，不变的是**时空间隔**。这一几何化揭示了狭义相对论的本质结构——因果结构由光锥决定、不同惯性系只是时空的坐标选择。闵可夫斯基时空是广义相对论（弯曲时空）的平直极限，也是相对论量子场论的舞台。\n\n## 基本概念\n\n- **事件 / 四矢量**：$x^\\mu=(ct,x,y,z)$。\n- **闵可夫斯基度规**：$\\eta_{\\mu\\nu}=\\mathrm{diag}(-1,1,1,1)$。\n- **时空间隔**：$ds^2=\\eta_{\\mu\\nu}dx^\\mu dx^\\nu$。\n- **类时 / 类光 / 类空**：$ds^2<0$ / $=0$ / $>0$。\n- **固有时**：$d\\tau=\\sqrt{-ds^2}/c$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n线元：\n\n$$ ds^2=-c^2dt^2+dx^2+dy^2+dz^2=\\eta_{\\mu\\nu}dx^\\mu dx^\\nu $$\n\n间隔分类与因果结构：\n\n- 类时 $ds^2<0$：因果关联（光锥内）。\n- 类光 $ds^2=0$：光传播（光锥）。\n- 类空 $ds^2>0$：无因果关联。\n\n洛伦兹变换保持 $ds^2$ 不变（[[special-relativity]]），构成**庞加莱群**（洛伦兹变换 + 平移）。\n\n### 推导要点\n\n- **度规不变性**：洛伦兹变换的定义即\"保持 $ds^2=\\eta_{\\mu\\nu}dx^\\mu dx^\\nu$ 不变\"的线性变换。\n- **固有时**：随粒子运动时 $d\\vec x=\\vec v dt$，$ds^2=-c^2dt^2(1-v^2/c^2)=-c^2d\\tau^2$，得 $d\\tau=dt/\\gamma$。\n- **因果结构**：类时间隔可由单一惯性系内的信号连接，类空间隔则不能（同时性的相对性）。\n\n### 重要定理与推论\n\n- **光锥与因果**：事件只能影响光锥内的未来事件。\n- **洛伦兹不变性**：物理量按洛伦兹张量/标量变换。\n- **庞加莱群**：时空的对称群（平移 + 旋转 + boost）。\n- **平直极限**：$\\eta_{\\mu\\nu}$ 是广义相对论度规 $g_{\\mu\\nu}$ 的平直极限（[[general-relativity]]）。\n\n## 深化内容\n\n闵可夫斯基时空是[[relativistic-electrodynamics]]（电磁张量）与[[quantum-field-theory]]（场的舞台）的基础。因果结构与光锥在现代物理（量子场论的局域性）中至关重要。延伸阅读可参考 Taylor & Wheeler《Spacetime Physics》、Schutz《A First Course in General Relativity》、朗道《场论》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[special-relativity]]（物理内容）、[[tensor-calculus]]（四维张量语言）。\n- 推广：[[general-relativity]] 中 $\\eta_{\\mu\\nu}$ 被弯曲度规 $g_{\\mu\\nu}$ 取代。\n- 电磁：[[relativistic-electrodynamics]] 的电磁张量定义在闵可夫斯基时空。\n\n## 前置知识\n\n- [[special-relativity]]、[[tensor-calculus]]、[[linear-algebra]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "special-relativity",
     "name": "狭义相对论",
     "weight": 5,
     "note": "狭义相对论的几何表述"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 5,
     "note": "洛伦兹张量"
    },
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 4,
     "note": "弯曲时空的平直极限"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 4,
     "note": "四维电磁场"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "special-relativity",
   "name": "狭义相对论",
   "nameEn": "Special Relativity",
   "domain": "relativity",
   "domainName": "相对论",
   "color": "#3498db",
   "aliases": [
    "相对论",
    "洛伦兹变换"
   ],
   "tags": [
    "相对论",
    "时空",
    "光速"
   ],
   "keywords": [
    "洛伦兹变换",
    "时间膨胀",
    "长度收缩",
    "E=mc2"
   ],
   "size": 176,
   "degree": 16,
   "pos": {
    "x": 40,
    "y": 0,
    "z": 0
   },
   "fixed": false,
   "body": "# 狭义相对论\n\n## 概述\n\n狭义相对论（爱因斯坦，1905）建立在两条公设上：**相对性原理**（物理定律在所有惯性系中形式相同）与**光速不变原理**（真空光速与光源/观察者运动无关）。由此导出洛伦兹变换取代伽利略变换，彻底改变了绝对时空观。其推论——时间膨胀、长度收缩、同时性的相对性、质能关系 $E=mc^2$——已被粒子物理（寿命延长）、核能、GPS 等高精度验证。狭义相对论是广义相对论（含引力）与量子场论的基础。\n\n## 基本概念\n\n- **惯性系**：牛顿定律成立的参考系。\n- **洛伦兹因子**：$\\gamma=1/\\sqrt{1-v^2/c^2}$。\n- **事件 / 时空坐标**：$(ct,x,y,z)$。\n- **四矢量**：四维动量 $p^\\mu=(E/c,\\vec p)$。\n- **原时**：随粒子运动的时钟的时间 $d\\tau=dt/\\gamma$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**洛伦兹变换**（沿 $x$ 轴）：\n\n$$ x'=\\gamma(x-vt),\\qquad t'=\\gamma\\Big(t-\\frac{vx}{c^2}\\Big),\\qquad \\gamma=\\frac1{\\sqrt{1-v^2/c^2}} $$\n\n**时间膨胀 / 长度收缩**：\n\n$$ \\Delta t=\\gamma\\Delta t_0,\\qquad L=\\frac{L_0}{\\gamma} $$\n\n**质能关系与能量-动量关系**：\n\n$$ E=mc^2=\\gamma m_0c^2,\\qquad E^2=(pc)^2+(m_0c^2)^2 $$\n\n### 推导要点\n\n- **洛伦兹变换**：由光速不变（光锥 $x^2-c^2t^2=0$ 不变）与线性变换要求，解出洛伦兹变换；低速极限 $v\\ll c$ 回到伽利略变换。\n- **时间膨胀**：运动时钟的光在往返中走过更长路径，$\\Delta t=2d/(c\\sqrt{1-v^2/c^2})=\\gamma\\cdot2d/c$。\n- **质能关系**：由四维动量的相对论定义 $p^\\mu=m_0u^\\mu$，能量 $E=p^0c=\\gamma m_0c^2$，静止能量 $E_0=m_0c^2$。\n\n### 重要定理与推论\n\n- **同时性的相对性**：不同惯性系对\"同时\"的判断不同。\n- **速度合成公式**：$u=(u'+v)/(1+u'v/c^2)$，不超光速。\n- **相对论多普勒效应**与**质能等价** $E=mc^2$。\n- **能量动量守恒**：$p^\\mu$ 在碰撞中守恒，是[[conservation-laws]] 的相对论形式。\n\n## 深化内容\n\n狭义相对论的几何表述是[[minkowski-spacetime]]（闵可夫斯基时空），洛伦兹变换是四维时空的\"旋转\"。电磁学的协变形式（[[relativistic-electrodynamics]]）统一了 $\\vec E,\\vec B$。相对论量子力学（狄拉克方程）导出自旋与反粒子（[[quantum-field-theory]]）。延伸阅读可参考 Taylor & Wheeler《Spacetime Physics》、朗道《场论》、Einstein 原始论文。\n\n## 与其他知识的联系\n\n- 紧密相关：[[minkowski-spacetime]]（几何表述）、[[relativistic-electrodynamics]]（电磁协变）、[[tensor-calculus]]。\n- 量子：狄拉克方程（[[quantum-field-theory]]）。\n- 上位替代：[[general-relativity]]（含引力）；低速极限 [[newtonian-mechanics]]。\n\n## 上位替代\n\n- 包含引力的推广是 [[general-relativity]]；低速极限回到 [[newtonian-mechanics]]。\n\n## 前置知识\n\n- [[newtonian-mechanics]]、[[calculus]]、[[electromagnetic-waves]]",
   "supersededBy": [
    {
     "id": "general-relativity",
     "name": "广义相对论"
    }
   ],
   "supersedes": [
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学"
    }
   ],
   "links": [
    {
     "id": "minkowski-spacetime",
     "name": "闵可夫斯基时空",
     "weight": 5,
     "note": "四维时空"
    },
    {
     "id": "relativistic-electrodynamics",
     "name": "相对论电动力学",
     "weight": 5,
     "note": "协变电动力学"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 4,
     "note": "光速不变"
    },
    {
     "id": "maxwell-equations",
     "name": "麦克斯韦方程组",
     "weight": 4,
     "note": "洛伦兹协变形式"
    },
    {
     "id": "tensor-calculus",
     "name": "张量分析",
     "weight": 4,
     "note": "四维张量"
    },
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 3,
     "note": "能量动量四矢量"
    },
    {
     "id": "lorentz-force",
     "name": "洛伦兹力",
     "weight": 3,
     "note": "洛伦兹协变形式"
    },
    {
     "id": "qed",
     "name": "量子电动力学",
     "weight": 3,
     "note": "相对论量子力学"
    },
    {
     "id": "lagrangian-mechanics",
     "name": "拉格朗日力学",
     "weight": 2,
     "note": ""
    },
    {
     "id": "non-inertial-frames",
     "name": "非惯性参考系",
     "weight": 2,
     "note": "惯性系的相对论定义"
    }
   ],
   "softLinks": [
    {
     "id": "magnetostatics",
     "name": "磁静学",
     "weight": 3,
     "note": "磁场是电场的相对论效应"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 3,
     "note": "狄拉克方程导出自旋"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": [
    {
     "id": "general-relativity",
     "name": "广义相对论",
     "weight": 4,
     "note": "推广到引力"
    },
    {
     "id": "newtonian-mechanics",
     "name": "牛顿力学",
     "weight": 4,
     "note": "低速极限"
    },
    {
     "id": "quantum-field-theory",
     "name": "量子场论",
     "weight": 4,
     "note": "洛伦兹协变"
    }
   ]
  },
  {
   "id": "colloids",
   "name": "胶体",
   "nameEn": "Colloids",
   "domain": "soft-matter",
   "domainName": "软物质物理",
   "color": "#e17055",
   "aliases": [
    "胶体物理",
    "胶体悬浮液"
   ],
   "tags": [
    "软物质",
    "胶体",
    "悬浮"
   ],
   "keywords": [
    "布朗运动",
    "胶体晶体",
    "双电层"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 胶体\n\n## 概述\n\n胶体是**微粒（1 nm ~ 1 μm）分散在连续介质**中的悬浮体系。胶体粒子做**布朗运动**（[[fluctuation-theory]]），粒子间相互作用（范德瓦尔斯吸引、静电双电层排斥、排空力）可调控，从而自组装为**胶体晶体**等有序结构。胶体是研究相变、玻璃化与结晶的**模型系统**（粒子大到可用光学显微镜直接观测），也是油漆、乳液、药物、食品等工业制品的基础。\n\n## 基本概念\n\n- **胶体粒子**：介观微粒（纳米-微米）。\n- **布朗运动**：粒子的热随机行走。\n- **双电层**：带电粒子表面的反离子层。\n- **排空力**：聚合物诱导的吸引。\n- **胶体晶体**：胶体粒子的晶格排列。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n布朗运动的均方位移（[[fluctuation-theory]]、爱因斯坦）：\n\n$$ \\langle r^2\\rangle=6Dt,\\qquad D=\\frac{k_BT}{6\\pi\\eta R} $$\n\n（斯托克斯-爱因斯坦关系。）\n\n### 推导要点\n\n- **布朗运动**：胶体粒子的热随机行走，$D=k_BT/(6\\pi\\eta R)$（涨落-耗散）。\n- **双电层**：带电粒子表面的反离子屏蔽（[[electrostatics]] 的德拜屏蔽类比）。\n- **胶体晶体**：粒子间排斥/吸引平衡形成晶格。\n\n### 重要定理与推论\n\n- **斯托克斯-爱因斯坦关系**：$D=k_BT/6\\pi\\eta R$（扩散与黏度）。\n- **布朗运动**：热涨落的直接证据（[[fluctuation-theory]]）。\n- **胶体结晶**：胶体是相变的模型系统。\n- **胶体的可调性**：相互作用可工程调控。\n\n## 深化内容\n\n胶体是 [[soft-matter]]、[[statistical-mechanics]]（相变、玻璃化）、[[fluctuation-theory]]（布朗运动）的模型系统；连接 [[electrostatics]]（双电层）、[[fluid-mechanics]]（悬浮液）。延伸阅读可参考 Jones《Soft Condensed Matter》、Russel《Colloidal Dispersions》、Hunter《Foundations of Colloid Science》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[soft-matter]]、[[statistical-mechanics]]、[[fluctuation-theory]]（布朗运动）。\n- 关联：[[fluid-mechanics]]（悬浮液）、[[electrostatics]]（双电层）、[[phase-transitions]]。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[fluctuation-theory]]、[[soft-matter]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 5,
     "note": "软物质核心"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 4,
     "note": "布朗运动"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "统计描述"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 3,
     "note": "悬浮液流体"
    },
    {
     "id": "electrostatics",
     "name": "静电学",
     "weight": 2,
     "note": "双电层"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "liquid-crystals",
   "name": "液晶",
   "nameEn": "Liquid Crystals",
   "domain": "soft-matter",
   "domainName": "软物质物理",
   "color": "#e17055",
   "aliases": [
    "液晶相"
   ],
   "tags": [
    "软物质",
    "液晶",
    "序"
   ],
   "keywords": [
    "向列相",
    "近晶相",
    "取向序"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 液晶\n\n## 概述\n\n液晶是介于**固态晶体与各向同性液体**之间的相：分子有**取向序**（长轴方向有序）但无（或弱）位置序。主要相：**向列相**（仅取向序）、**近晶相**（取向 + 层状位置序）、**胆甾相**（螺旋取向）。液晶对电场、温度响应灵敏，其**双折射**性质是平板显示（LCD）的物理基础。向列-各向同性相变可用取向序参量与朗道理论描述。\n\n## 基本概念\n\n- **取向序参量**：$S=\\langle\\frac32\\cos^2\\theta-\\frac12\\rangle$。\n- **向列相 / 近晶相 / 胆甾相**：三种液晶相。\n- **指向矢** $\\hat n$：平均分子取向。\n- **双折射**：光学的各向异性。\n- **拓扑缺陷**：液晶中的缺陷（disclination）。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n取向序参量：\n\n$$ S=\\Big\\langle\\frac32\\cos^2\\theta-\\frac12\\Big\\rangle $$\n\n向列相自由能（朗道-德让理论）：\n\n$$ F=\\frac12a(T-T^*)S^2-\\frac13bS^3+\\frac14cS^4 $$\n\n### 推导要点\n\n- **序参量**：$S$ 度量取向有序（$S=0$ 各向同性、$S=1$ 完全有序）。\n- **朗道理论**：自由能对 $S$ 展开（含 $S^3$ 项，导致一级相变）。\n- **双折射**：液晶的各向异性折射率（[[optics]]）。\n\n### 重要定理与推论\n\n- **向列-各向同性相变**：一级相变（$S^3$ 项）。\n- **液晶显示（LCD）**：电场改变取向、调制光（[[optics]]）。\n- **拓扑缺陷**：液晶的向错（disclination）。\n- **液晶的软弹性**：对微扰的大响应。\n\n## 深化内容\n\n液晶是 [[soft-matter]]、[[phase-transitions]]（序参量、朗道理论）、[[optics]]（双折射、显示）的交汇；拓扑缺陷连接 [[condensed-matter-physics]]。延伸阅读可参考 de Gennes & Prost《The Physics of Liquid Crystals》、Chaikin & Lubensky《Principles of Condensed Matter Physics》、Chandrasekhar《Liquid Crystals》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[soft-matter]]、[[phase-transitions]]（序参量与相变）。\n- 关联：[[optics]]（双折射、显示）、[[condensed-matter-physics]]（取向序与缺陷）。\n\n## 前置知识\n\n- [[phase-transitions]]、[[soft-matter]]、[[optics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 5,
     "note": "软物质核心"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 4,
     "note": "相变与序"
    },
    {
     "id": "optics",
     "name": "光学",
     "weight": 3,
     "note": "双折射与显示"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 2,
     "note": "取向序"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "polymers",
   "name": "聚合物物理",
   "nameEn": "Polymer Physics",
   "domain": "soft-matter",
   "domainName": "软物质物理",
   "color": "#e17055",
   "aliases": [
    "高分子物理"
   ],
   "tags": [
    "软物质",
    "聚合物",
    "高分子"
   ],
   "keywords": [
    "随机行走",
    "熵弹性",
    "玻璃化转变"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 聚合物物理\n\n## 概述\n\n聚合物是**长链大分子**（由重复单元共价连接），其物理性质由**链构象**决定。理想链可视为**随机行走**（自由连接链），均方末端距 $\\langle R^2\\rangle=Nl^2$。**熵弹性**是聚合物最独特的性质：拉伸链减少构象数、产生熵回复力（橡皮弹性的来源）。真实链有**排除体积**（自避行走），溶液行为由弗洛里理论描述。聚合物的**玻璃化转变**与相分离是重要现象。\n\n## 基本概念\n\n- **链构象**：聚合物的空间形态。\n- **理想链 / 随机行走**：自由连接链模型。\n- **熵弹性**：拉伸链的熵回复力。\n- **排除体积**：链段间的体积排斥（膨胀链）。\n- **玻璃化转变** $T_g$：聚合物的玻璃-橡胶转变。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n理想链均方末端距：\n\n$$ \\langle R^2\\rangle=Nl^2 $$\n\n熵弹性（橡皮回复力）：\n\n$$ f=\\frac{3k_BT}{Nl^2}R $$\n\n### 推导要点\n\n- **随机行走**：$N$ 步随机行走的均方位移 $\\langle R^2\\rangle=Nl^2$（[[probability-theory]]）。\n- **熵弹性**：构象数 $\\Omega(R)$ 决定自由能 $F=-k_BT\\ln\\Omega$，拉伸减少 $\\Omega$、产生回复力。\n- **排除体积**：真实链的自避行走，弗洛里指数 $\\nu\\approx3/5$（膨胀链）。\n\n### 重要定理与推论\n\n- **熵弹性**：橡皮弹性的分子起源（不是能量、是熵）。\n- **弗洛里理论**：聚合物的标度指数。\n- **玻璃化转变**：聚合物的动力学冻结。\n- **聚合物的标度性**：不同链长共享标度律。\n\n## 深化内容\n\n聚合物物理是 [[soft-matter]] 的核心，连接 [[statistical-mechanics]]（构象统计）、[[probability-theory]]（随机行走）、[[phase-transitions]]（玻璃化/相分离）。延伸阅读可参考 de Gennes《Scaling Concepts in Polymer Physics》、Doi《Introduction to Polymer Physics》、Rubinstein & Colby《Polymer Physics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[soft-matter]]、[[statistical-mechanics]]（构象统计）。\n- 关联：[[probability-theory]]（随机行走模型）、[[phase-transitions]]（玻璃化/相分离）。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[probability-theory]]、[[soft-matter]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 5,
     "note": "软物质核心"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "构象统计"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 3,
     "note": "随机行走模型"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 2,
     "note": "玻璃化与相分离"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "self-assembly",
   "name": "自组装",
   "nameEn": "Self-Assembly",
   "domain": "soft-matter",
   "domainName": "软物质物理",
   "color": "#e17055",
   "aliases": [
    "分子自组装"
   ],
   "tags": [
    "软物质",
    "自组装",
    "生物膜"
   ],
   "keywords": [
    "胶束",
    "脂质双分子层",
    "两亲分子"
   ],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 自组装\n\n## 概述\n\n自组装是分子（尤其**两亲分子**，同时含亲水头与疏水尾）在无外场下**自发形成有序结构**的过程，由疏水/亲水相互作用与**熵驱动**。典型结构：**胶束**（球形/柱状）、**脂质双分子层**（生物膜基础）、**囊泡**。自组装是软物质与生物物理的交叉核心：细胞膜、蛋白质折叠、病毒衣壳都依赖自组装。人工自组装用于纳米材料、药物递送与功能器件。\n\n## 基本概念\n\n- **两亲分子**：亲水头 + 疏水尾。\n- **胶束 / 脂质双层 / 囊泡**：自组装结构。\n- **疏水效应**：疏水尾聚集（熵驱动）。\n- **临界胶束浓度（CMC）**：胶束形成的浓度。\n- **自组装的熵驱动**：水分子熵增驱动聚集。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n临界胶束浓度与自由能：\n\n$$ \\mathrm{CMC}\\propto e^{-\\Delta G/(k_BT)} $$\n\n（$\\Delta G$ 为单体进入胶束的自由能变化。）\n\n### 推导要点\n\n- **疏水效应**：疏水尾周围水分子有序化（熵减），聚集后释放水分子（熵增），驱动自组装。\n- **胶束化**：单体-胶束平衡，超过 CMC 时形成胶束。\n- **膜的自组装**：双亲分子自发形成脂质双层（最小化疏水接触）。\n\n### 重要定理与推论\n\n- **胶束化与 CMC**：超过临界浓度形成胶束。\n- **脂质双分子层**：生物膜的物理基础（[[molecular-biophysics]]）。\n- **囊泡**：封闭的双层结构（人工细胞模型）。\n- **熵驱动**：自组装常由熵（而非能量）驱动（[[statistical-mechanics]]）。\n\n## 深化内容\n\n自组装连接 [[soft-matter]]、[[molecular-biophysics]]（生物膜、蛋白质）、[[statistical-mechanics]]（熵驱动）、[[phase-transitions]]。延伸阅读可参考 Israelachvili《Intermolecular and Surface Forces》、Jones《Soft Condensed Matter》、Tanford《The Hydrophobic Effect》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[soft-matter]]、[[molecular-biophysics]]（生物膜）、[[statistical-mechanics]]（熵驱动）。\n- 关联：[[phase-transitions]]、[[polymers]]。\n\n## 前置知识\n\n- [[soft-matter]]、[[statistical-mechanics]]、[[molecular-biophysics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 5,
     "note": "软物质核心现象"
    },
    {
     "id": "molecular-biophysics",
     "name": "分子生物物理",
     "weight": 4,
     "note": "生物膜与蛋白质组装"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 3,
     "note": "熵驱动"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "soft-matter",
   "name": "软物质物理",
   "nameEn": "Soft Matter Physics",
   "domain": "soft-matter",
   "domainName": "软物质物理",
   "color": "#e17055",
   "aliases": [
    "软物质"
   ],
   "tags": [
    "软物质",
    "聚合物",
    "胶体",
    "液晶"
   ],
   "keywords": [
    "聚合物",
    "胶体",
    "液晶",
    "自组装"
   ],
   "size": 118,
   "degree": 10,
   "pos": {
    "x": -30,
    "y": 60,
    "z": 0
   },
   "fixed": false,
   "body": "# 软物质物理\n\n## 概述\n\n软物质物理研究**聚合物、胶体、液晶、膜、凝胶**等\"软\"材料——它们由微弱相互作用（热能量级 $k_BT$）决定结构，因此对外界微小扰动响应强烈（de Gennes 所谓\"软物质 = 弱力 + 大响应\"）。核心特征：**介观尺度**、**自组装**、丰富的相行为、非线性流变，且常为**熵驱动**。软物质是统计力学与材料科学、生物物理、食品、显示技术的交叉，是当代物理最活跃的方向之一。\n\n## 基本概念\n\n- **软材料**：聚合物、胶体、液晶、膜。\n- **介观尺度**：纳米到微米。\n- **熵驱动**：结构由熵而非能量主导。\n- **自组装**：自发形成有序结构。\n- **流变 / 复杂流体**：非线性力学响应。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n聚合物理想链的均方末端距（[[polymers]]）：\n\n$$ \\langle R^2\\rangle=Nl^2 $$\n\n布朗运动的均方位移（[[colloids]]、[[fluctuation-theory]]）：\n\n$$ \\langle r^2\\rangle=6Dt $$\n\n### 推导要点\n\n- **熵弹性**：链构象数决定弹性（[[polymers]]）。\n- **布朗运动**：胶体粒子的随机行走（[[colloids]]）。\n- **取向序**：液晶的序参量（[[liquid-crystals]]）。\n\n### 重要定理与推论\n\n- **熵驱动结构**：软物质的相行为由熵主导（[[statistical-mechanics]]）。\n- **自组装**：两亲分子自发形成胶束、膜（[[self-assembly]]）。\n- **丰富相行为**：液晶相、胶体晶体、玻璃化（[[phase-transitions]]）。\n- **软物质的普适性**：不同软体系共享标度律。\n\n## 深化内容\n\n软物质是 [[statistical-mechanics]]（熵驱动）、[[phase-transitions]]（相变）、[[fluid-mechanics]]/[[continuum-mechanics]]（流变）的应用；与 [[biophysics]]（生物膜、细胞）深度交叉。延伸阅读可参考 de Gennes《Scaling Concepts in Polymer Physics》、Chaikin & Lubensky《Principles of Condensed Matter Physics》、Jones《Soft Condensed Matter》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[polymers]]、[[colloids]]、[[liquid-crystals]]、[[self-assembly]]、[[statistical-mechanics]]。\n- 基础：[[phase-transitions]]、[[fluid-mechanics]]、[[continuum-mechanics]]（流变）。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[phase-transitions]]、[[fluid-mechanics]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "colloids",
     "name": "胶体",
     "weight": 5,
     "note": "胶体"
    },
    {
     "id": "liquid-crystals",
     "name": "液晶",
     "weight": 5,
     "note": "液晶"
    },
    {
     "id": "polymers",
     "name": "聚合物物理",
     "weight": 5,
     "note": "聚合物物理"
    },
    {
     "id": "self-assembly",
     "name": "自组装",
     "weight": 5,
     "note": "自组装"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "理论基础"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 4,
     "note": "相变"
    },
    {
     "id": "biophysics",
     "name": "生物物理",
     "weight": 3,
     "note": "软物质背景"
    },
    {
     "id": "cell-mechanics",
     "name": "细胞力学",
     "weight": 3,
     "note": "软材料性质"
    }
   ],
   "softLinks": [
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 3,
     "note": "软物质流体"
    },
    {
     "id": "continuum-mechanics",
     "name": "连续介质力学",
     "weight": 2,
     "note": "流变学"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "blackbody-radiation",
   "name": "黑体辐射",
   "nameEn": "Blackbody Radiation",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "黑体",
    "普朗克定律"
   ],
   "tags": [
    "统计物理",
    "辐射",
    "量子起源"
   ],
   "keywords": [
    "普朗克公式",
    "维恩位移",
    "斯蒂芬-玻尔兹曼定律",
    "紫外灾变"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 黑体辐射\n\n## 概述\n\n黑体辐射是处于**热平衡**的电磁辐射场。经典物理用能量均分给出瑞利-金斯公式，在紫外端发散（\"紫外灾变\"）。普朗克（1900）引入能量量子化假设 $E=h\\nu$，得到与实验完全吻合的**普朗克公式**，由此揭开量子力学的序幕。黑体辐射的现代理解：光子是玻色子，服从玻色-爱因斯坦统计（[[quantum-statistics]]），辐射谱完全由温度决定。\n\n## 基本概念\n\n- **黑体**：完全吸收并发射所有频率辐射的理想体。\n- **谱能量密度**：$u(\\nu,T)$，单位体积单位频率的能量。\n- **光子气体**：$\\mu=0$ 的玻色气体。\n- **维恩位移 / 斯蒂芬-玻尔兹曼定律**：谱峰位置与总能量的温度依赖。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**普朗克公式**：\n\n$$ u(\\nu,T)=\\frac{8\\pi h\\nu^3}{c^3}\\frac{1}{e^{h\\nu/k_BT}-1} $$\n\n**维恩位移定律**：$\\lambda_{\\max}T=b\\approx2.898\\times10^{-3}\\,\\mathrm{m\\,K}$。\n\n**斯蒂芬-玻尔兹曼定律**：\n\n$$ U=\\frac{4\\sigma}{c}T^4,\\qquad \\sigma=\\frac{2\\pi^5k_B^4}{15h^3c^2} $$\n\n### 推导要点\n\n- **态密度**：电磁场模式数 $g(\\nu)d\\nu=8\\pi\\nu^2d\\nu/c^3$（计入两个偏振）。\n- **玻色占据**：每个模式光子数 $\\bar n=1/(e^{h\\nu/k_BT}-1)$（$\\mu=0$ 的玻色-爱因斯坦分布），能量密度 $u=g(\\nu)\\bar n\\,h\\nu$。\n- **紫外灾变**：经典能量均分给每个模式 $k_BT$，则 $u\\propto\\nu^2$ 发散；量子化使高频模式占据被指数压低。\n\n### 重要定理与推论\n\n- **普朗克公式的统一**：高频（$h\\nu\\gg k_BT$）回到维恩公式、低频（$h\\nu\\ll k_BT$）回到瑞利-金斯公式。\n- **维恩位移定律**：温度升高谱峰蓝移。\n- **斯蒂芬-玻尔兹曼定律**：总能量 $\\propto T^4$。\n- **宇宙微波背景**：$2.7\\,\\mathrm K$ 的黑体谱（[[cosmology]] 大爆炸的遗迹）。\n\n## 深化内容\n\n黑体辐射是量子力学的起源：普朗克常数 $h$ 由此引入。光子统计的**玻色本质**（[[quantum-statistics]]）解释了自发辐射与受激辐射（[[lasers]] 的基础）。宇宙微波背景辐射（[[cosmology]]）是宇宙中最精确的黑体谱。延伸阅读可参考 Pathria《Statistical Mechanics》、Kittel《Thermal Physics》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[quantum-statistics]]（光子气体）、[[quantum-mechanics]]（量子化起源）、[[statistical-mechanics]]。\n- 宇宙学：[[cosmology]] 的宇宙微波背景辐射（2.7 K）。\n- 应用：[[lasers]]、热成像。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[quantum-statistics]]、[[electromagnetic-waves]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 5,
     "note": "普朗克量子假设揭开量子力学序幕"
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 5,
     "note": "光子气体是玻色系统"
    },
    {
     "id": "cosmology",
     "name": "宇宙学",
     "weight": 4,
     "note": "宇宙微波背景辐射"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "统计处理"
    },
    {
     "id": "climate-physics",
     "name": "气候物理",
     "weight": 3,
     "note": "辐射平衡"
    },
    {
     "id": "electromagnetic-waves",
     "name": "电磁波",
     "weight": 3,
     "note": "辐射场"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "热辐射"
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "boltzmann-equation",
   "name": "玻尔兹曼方程",
   "nameEn": "Boltzmann Equation",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "玻尔兹曼输运方程"
   ],
   "tags": [
    "统计物理",
    "动力学",
    "输运"
   ],
   "keywords": [
    "分布函数",
    "碰撞项",
    "H定理"
   ],
   "size": 84,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 玻尔兹曼方程\n\n## 概述\n\n玻尔兹曼方程是**非平衡统计力学**的基本方程，描述单粒子分布函数 $f(\\vec r,\\vec v,t)$ 在相空间中的演化。左端是漂移项（自由运动 + 外力），右端是**碰撞项**（二体碰撞的散射积分）。**H 定理**证明 $H=\\int f\\ln f\\,d\\vec v$ 单调不增，为熵增与宏观不可逆性提供微观基础。线性化（弛豫时间近似）后可直接计算输运系数，矩展开则导出流体力学方程——玻尔兹曼方程是连接微观碰撞与宏观流体/输运的桥梁。\n\n## 基本概念\n\n- **分布函数**：$f(\\vec r,\\vec v,t)$，$\\int f\\,d^3v=n(\\vec r,t)$。\n- **碰撞项**：$(\\partial f/\\partial t)_{\\mathrm{coll}}$，二体碰撞散射积分。\n- **H 函数**：$H=\\int f\\ln f\\,d\\vec v$。\n- **弛豫时间近似**：$(\\partial f/\\partial t)_{\\mathrm{coll}}\\approx-(f-f_0)/\\tau$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**玻尔兹曼方程**：\n\n$$ \\frac{\\partial f}{\\partial t}+\\vec v\\cdot\\nabla f+\\frac{\\vec F}{m}\\cdot\\nabla_v f=\\Big(\\frac{\\partial f}{\\partial t}\\Big)_{\\mathrm{coll}} $$\n\n碰撞项（二体碰撞积分）：\n\n$$ \\Big(\\frac{\\partial f}{\\partial t}\\Big)_{\\mathrm{coll}}=\\int d^3v_2\\int d\\Omega\\,|v_1-v_2|\\frac{d\\sigma}{d\\Omega}\\big[f_1'f_2'-f_1f_2\\big] $$\n\n**H 定理**：\n\n$$ \\frac{dH}{dt}\\le0 $$\n\n### 推导要点\n\n- **漂移项**：沿相空间轨迹 $f$ 守恒（刘维尔定理），$\\frac{df}{dt}=\\frac{\\partial f}{\\partial t}+\\vec v\\cdot\\nabla f+\\frac{\\vec F}{m}\\cdot\\nabla_vf=0$；碰撞改变 $f$，故右侧加碰撞项。\n- **H 定理**：由碰撞项的对称性证明 $\\frac{dH}{dt}=-\\int\\frac12[f_1'f_2'-f_1f_2]\\ln\\frac{f_1'f_2'}{f_1f_2}\\,d\\mu\\le0$（被积函数非负）。\n- **弛豫时间近似**：把复杂碰撞项简化为向平衡分布 $f_0$ 的指数弛豫，便于求输运系数。\n\n### 重要定理与推论\n\n- **H 定理**：$H$ 单调不增，平衡态（麦克斯韦-玻尔兹曼分布）时取最小值。\n- **细致平衡**：碰撞使 $f$ 趋向平衡分布。\n- **输运系数**：弛豫时间近似下 $\\eta\\sim n\\bar v\\lambda$、$\\sigma\\sim ne^2\\tau/m$。\n- **流体极限**：矩方程（质量、动量、能量）在长波极限给出欧拉/纳维-斯托克斯方程。\n\n## 深化内容\n\n玻尔兹曼方程是[[transport-theory]] 与 [[nonequilibrium-thermodynamics]] 的微观基础；量子推广有玻尔兹曼-朗道方程（费米液体）、量子玻尔兹曼方程。等离子体物理中的弗拉索夫方程是其无碰撞极限。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Huang《Statistical Mechanics》、朗道《物理动力学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[transport-theory]]（输运系数）、[[kinetic-theory]]（物理背景）。\n- 非平衡：[[nonequilibrium-thermodynamics]]、[[fluctuation-theory]]。\n- 推广：流体力学（矩展开）、[[plasma-physics]]（弗拉索夫方程）。\n\n## 前置知识\n\n- [[kinetic-theory]]、[[statistical-mechanics]]、[[probability-theory]]",
   "supersededBy": [],
   "supersedes": [
    {
     "id": "kinetic-theory",
     "name": "分子运动论"
    }
   ],
   "links": [
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 5,
     "note": "输运系数的推导"
    },
    {
     "id": "nonequilibrium-thermodynamics",
     "name": "非平衡热力学",
     "weight": 4,
     "note": "微观动力学"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "动力学"
    },
    {
     "id": "ideal-gas",
     "name": "理想气体",
     "weight": 3,
     "note": ""
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 5,
     "note": "动力学基础"
    }
   ]
  },
  {
   "id": "critical-phenomena",
   "name": "临界现象",
   "nameEn": "Critical Phenomena",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "临界现象理论",
    "临界指数"
   ],
   "tags": [
    "统计物理",
    "临界",
    "标度"
   ],
   "keywords": [
    "临界指数",
    "标度律",
    "普适类",
    "关联长度"
   ],
   "size": 64,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 临界现象\n\n## 概述\n\n临界现象是连续相变**临界点附近**的奇异行为：关联长度 $\\xi$ 发散、涨落放大、热力学量呈**幂律**奇异。临界行为由一组**临界指数**（$\\alpha,\\beta,\\gamma,\\delta,\\nu$）刻画，它们满足标度关系，且只依赖空间维度与序参量对称性——即**普适类**。重正化群从理论上解释了普适性：临界点对应重整化变换的不动点，标度不变性直接给出幂律。\n\n## 基本概念\n\n- **约化温度**：$t=(T-T_c)/T_c$。\n- **临界指数**：$\\alpha$（比热）、$\\beta$（序参量）、$\\gamma$（磁化率）、$\\nu$（关联长度）、$\\eta$（关联函数）。\n- **关联长度** $\\xi\\sim|t|^{-\\nu}$。\n- **普适类**：共享相同临界指数与标度函数的系统集合。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n临界幂律：\n\n$$ C\\sim|t|^{-\\alpha},\\qquad M\\sim|t|^\\beta,\\qquad \\chi\\sim|t|^{-\\gamma},\\qquad \\xi\\sim|t|^{-\\nu} $$\n\n关联函数（临界点）：\n\n$$ G(r)\\sim\\frac{e^{-r/\\xi}}{r^{d-2+\\eta}},\\qquad \\xi\\to\\infty\\ \\Rightarrow\\ G(r)\\sim\\frac1{r^{d-2+\\eta}} $$\n\n**标度关系**：\n\n$$ \\alpha+2\\beta+\\gamma=2,\\qquad \\gamma=\\nu(2-\\eta),\\qquad \\nu d=2-\\alpha $$\n\n### 推导要点\n\n- **标度假设**：自由能奇异部分满足标度形式 $f_s(t,h)=b^{-d}f_s(b^{y_t}t,b^{y_h}h)$，由此导出临界指数的标度关系。\n- **重正化群的思想**：逐步粗粒化（积分掉短波涨落），临界点在标度变换下的不动点给出幂律与指数。\n- **高斯近似失效**：关联长度发散时涨落不可忽略，平均场（朗道）理论在 $d<4$ 失效。\n\n### 重要定理与推论\n\n- **普适性**：临界指数只依赖维度与对称性，与微观细节无关。\n- **标度律**：临界指数不独立，满足标度关系（只有两个独立指数）。\n- **上临界维度**：$d>d_c=4$ 时平均场理论成立，$d<4$ 需重正化群。\n- **二维伊辛精确值**：$\\alpha=0,\\beta=1/8,\\gamma=7/4,\\nu=1$（昂萨格解）。\n\n## 深化内容\n\n临界现象由**重正化群**（[[renormalization]]，威尔逊 1971）系统解决，是理论物理的里程碑。应用遍及超流/超导相变、液晶、聚合物、宇宙早期相变与量子相变。延伸阅读可参考 Goldenfeld《Lectures on Phase Transitions》、Kardar《Statistical Physics of Fields》、Wilson 原始论文。\n\n## 与其他知识的联系\n\n- 紧密相关：[[phase-transitions]]、[[renormalization]]（解释）、[[ising-model]]、[[fluctuation-theory]]。\n- 应用：超流体/超导相变、聚合物、宇宙早期相变。\n\n## 前置知识\n\n- [[phase-transitions]]、[[ising-model]]、[[statistical-mechanics]]",
   "supersededBy": [
    {
     "id": "renormalization",
     "name": "重整化"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 5,
     "note": "连续相变在临界点的行为"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 4,
     "note": "临界涨落"
    },
    {
     "id": "ising-model",
     "name": "伊辛模型",
     "weight": 4,
     "note": "原型模型"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 5,
     "note": "重正化群解释临界现象"
    }
   ]
  },
  {
   "id": "ensembles",
   "name": "系综理论",
   "nameEn": "Ensembles",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "系综",
    "正则系综",
    "巨正则系综"
   ],
   "tags": [
    "统计物理",
    "系综",
    "方法"
   ],
   "keywords": [
    "微正则系综",
    "正则系综",
    "巨正则系综",
    "配分函数"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 系综理论\n\n## 概述\n\n系综是统计力学的操作框架：想象大量与系统宏观条件相同、微观状态不同的\"复制品\"，宏观量即系综平均。按固定量不同分为三种主要系综——**微正则**（$E,V,N$）、**正则**（$T,V,N$）、**巨正则**（$T,V,\\mu$），各自对应一个特征函数（熵 $S$、自由能 $F$、巨势 $\\Omega$）。在热力学极限下三者等价，具体用哪种由方便程度决定。系综理论把\"算热力学量\"化为\"算配分函数\"。\n\n## 基本概念\n\n- **微正则系综**：孤立系统，能量固定，等概率。\n- **正则系综**：与大热库交换能量（温度固定）。\n- **巨正则系综**：与热库交换能量与粒子（温度、化学势固定）。\n- **配分函数**：$Z$（正则）、$\\Xi$ 或 $\\mathcal Z$（巨正则）。\n- **化学势** $\\mu$：增加一个粒子的自由能代价。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n三种系综的概率与配分函数：\n\n| 系综 | 固定量 | 权重 | 特征函数 |\n|---|---|---|---|\n| 微正则 | $E,V,N$ | 等概率 $1/\\Omega$ | $S=k_B\\ln\\Omega$ |\n| 正则 | $T,V,N$ | $e^{-\\beta E}$ | $F=-k_BT\\ln Z$ |\n| 巨正则 | $T,V,\\mu$ | $e^{-\\beta(E-\\mu N)}$ | $\\Omega=-k_BT\\ln\\Xi$ |\n\n正则配分函数：$Z=\\mathrm{tr}\\,e^{-\\beta H}$；巨正则：$\\Xi=\\sum_N z^N Z_N$（$z=e^{\\beta\\mu}$ 为逸度）。\n\n### 推导要点\n\n- **正则分布**：把系统 + 大热库视为微正则复合系统，对热库能量做泰勒展开 $\\ln\\Omega(E_t-E)\\approx\\ln\\Omega(E_t)-\\beta E$，得 $p(E)\\propto e^{-\\beta E}$。\n- **巨正则分布**：同理，系统与热库交换能量和粒子，展开得 $p(N,E)\\propto e^{-\\beta(E-\\mu N)}$。\n- **热力学量的导出**：由 $F=-k_BT\\ln Z$，$S=-\\partial F/\\partial T$、$p=-\\partial F/\\partial V$、$\\langle N\\rangle=-\\partial\\Omega/\\partial\\mu$。\n\n### 重要定理与推论\n\n- **系综等价**：热力学极限 $N\\to\\infty$ 下三系综给出相同的热力学量（涨落相对量级 $1/\\sqrt N$）。\n- **能量涨落**：正则系综中 $\\frac{\\langle(\\Delta E)^2\\rangle}{\\langle E\\rangle^2}\\propto\\frac1N$。\n- **粒子数涨落**：巨正则系综中 $\\frac{\\langle(\\Delta N)^2\\rangle}{\\langle N\\rangle^2}\\propto\\frac1N$。\n- **配分函数是枢纽**：一切热力学量由 $Z$ 的导数给出。\n\n## 深化内容\n\n巨正则系综是处理**量子统计**（[[quantum-statistics]]）与粒子数可变系统（化学反应、吸附、玻色凝聚）的自然框架。系综理论推广到量子情形用 [[density-matrix]]（$\\rho=e^{-\\beta H}/Z$）。延伸阅读可参考 Pathria《Statistical Mechanics》、Kardar《Statistical Physics of Particles》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[statistical-mechanics]]（框架）、[[thermodynamics]]（输出）、[[ideal-gas]]（计算实例）。\n- 量子版：[[density-matrix]]（$\\rho=e^{-\\beta H}/Z$）、[[quantum-statistics]]。\n- 基础：[[probability-theory]]。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[probability-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "统计力学的基本方法"
    },
    {
     "id": "ideal-gas",
     "name": "理想气体",
     "weight": 4,
     "note": "各系综下的计算"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 4,
     "note": ""
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 4,
     "note": "输出热力学量"
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "entropy-information",
   "name": "熵与信息",
   "nameEn": "Entropy & Information",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "信息熵"
   ],
   "tags": [
    "统计物理",
    "信息",
    "熵"
   ],
   "keywords": [
    "玻尔兹曼熵",
    "香农熵",
    "兰道尔原理"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 熵与信息\n\n## 概述\n\n\"熵\"在三个看似无关的领域出现，却有相同的数学形式：热力学熵（克劳修斯）、统计熵（玻尔兹曼 $S=k_B\\ln\\Omega$）、信息熵（香农 $H=-\\sum p_i\\log p_i$）。这并非巧合——**玻尔兹曼熵**度量微观态数、**香农熵**度量不确定性，两者都是\"缺失信息\"的量化。**兰道尔原理**进一步揭示物理联系：擦除一比特信息至少耗散 $k_BT\\ln2$ 的能量。量子版是**冯诺依曼熵** $S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho)$，是量子信息与量子统计的核心。\n\n## 基本概念\n\n- **玻尔兹曼熵**：$S=k_B\\ln\\Omega$。\n- **香农熵**：$H=-\\sum_i p_i\\log p_i$（比特单位）。\n- **冯诺依曼熵**：$S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho)$。\n- **兰道尔原理**：擦除 1 比特 $\\ge k_BT\\ln2$ 的热耗散。\n- **麦克斯韦妖**：利用信息\"违反\"第二定律的思想实验。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n玻尔兹曼熵与香农熵：\n\n$$ S=k_B\\ln\\Omega,\\qquad H=-\\sum_i p_i\\log p_i $$\n\n冯诺依曼熵：\n\n$$ S(\\rho)=-\\mathrm{tr}(\\rho\\ln\\rho)=-\\sum_i\\lambda_i\\ln\\lambda_i $$\n\n**兰道尔原理**：\n\n$$ \\Delta Q\\ge k_BT\\ln2\\quad(\\text{每比特}) $$\n\n### 推导要点\n\n- **香农熵的公理**：由连续性、可加性、极大性三条公理唯一确定 $H=-\\sum p_i\\log p_i$。\n- **玻尔兹曼熵与香农熵的对应**：对等概率微观态 $p_i=1/\\Omega$，$S=-k_B\\sum p_i\\ln p_i=k_B\\ln\\Omega$。\n- **兰道尔原理**：擦除是把比特从\"可能两种态\"压到\"确定一种态\"，自由度减半，由第二定律推出最小耗散。\n\n### 重要定理与推论\n\n- **熵是缺失信息**：熵度量\"我们对微观态的无知程度\"。\n- **麦克斯韦妖的解决**：妖获取信息需耗散能量（信息-热力学联系）。\n- **黑洞熵**：贝肯斯坦-霍金熵 $S=A/4\\ell_P^2$（[[black-holes]]），是熵的引力版本。\n- **第二定律与信息的统一**：孤立系统熵增 = 信息丢失。\n\n## 深化内容\n\n熵与信息是[[information-theory]]、[[quantum-information]]、[[quantum-computing]] 的共同核心。**黑洞信息悖论**（[[black-holes]]）与全息原理把熵、信息与引力几何联系起来。延伸阅读可参考 Shannon《A Mathematical Theory of Communication》、Nielsen & Chuang《量子计算与量子信息》、Jaynes《Probability Theory》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[thermodynamics]]、[[statistical-mechanics]]（经典熵）、[[information-theory]]（香农熵）、[[density-matrix]]（冯诺依曼熵）。\n- 量子信息：[[quantum-information]]、[[quantum-computing]]。\n- 引力：[[black-holes]]（黑洞熵）。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[information-theory]]、[[density-matrix]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 5,
     "note": "香农熵"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "玻尔兹曼熵"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 5,
     "note": "熵是热力学的核心量"
    },
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 4,
     "note": "冯诺依曼熵"
    },
    {
     "id": "quantum-information",
     "name": "量子信息",
     "weight": 4,
     "note": ""
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 3,
     "note": "黑洞熵"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "fluctuation-theory",
   "name": "涨落理论",
   "nameEn": "Fluctuation Theory",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "涨落",
    "布朗运动",
    "随机过程"
   ],
   "tags": [
    "统计物理",
    "涨落",
    "随机"
   ],
   "keywords": [
    "涨落耗散定理",
    "布朗运动",
    "朗之万方程",
    "相关函数"
   ],
   "size": 138,
   "degree": 12,
   "pos": null,
   "fixed": false,
   "body": "# 涨落理论\n\n## 概述\n\n涨落理论研究物理量在平均值附近的**随机偏离**，是统计力学与随机过程（[[probability-theory]]）的交汇。平衡涨落由热力学势的曲率决定（能量涨落 $\\propto$ 比热）；**布朗运动**与**朗之万方程**描述随机力驱动的动力学；**涨落-耗散定理**（爱因斯坦、昂萨格）把平衡涨落与线性响应（耗散系数）联系起来，是非平衡统计的核心结论。临界点附近涨落发散，需要重正化群处理。\n\n## 基本概念\n\n- **涨落**：$\\delta X=X-\\langle X\\rangle$；方差 $\\langle(\\delta X)^2\\rangle$。\n- **布朗运动**：微粒在流体中的随机行走。\n- **朗之万方程**：含随机力的运动方程。\n- **关联函数**：$\\langle\\delta X(t)\\delta X(t')\\rangle$。\n- **涨落-耗散定理**：涨落（噪声）与耗散（摩擦）的联系。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**能量涨落**：\n\n$$ \\overline{(\\Delta E)^2}=k_BT^2C_V $$\n\n**布朗运动（爱因斯坦关系）**：\n\n$$ \\langle x^2\\rangle=2Dt,\\qquad D=\\frac{k_BT}{\\gamma} $$\n\n**朗之万方程**：\n\n$$ m\\frac{dv}{dt}=-\\gamma v+\\eta(t),\\qquad \\langle\\eta(t)\\eta(t')\\rangle=2\\gamma k_BT\\,\\delta(t-t') $$\n\n**涨落-耗散定理**：\n\n$$ \\mathrm{Im}\\,\\chi(\\omega)\\propto\\int_{-\\infty}^{\\infty}\\langle X(0)X(t)\\rangle e^{i\\omega t}dt $$\n\n### 推导要点\n\n- **能量涨落**：由 $\\langle E\\rangle=-\\partial\\ln Z/\\partial\\beta$ 对 $\\beta$ 求导得 $\\langle(\\Delta E)^2\\rangle=\\partial^2\\ln Z/\\partial\\beta^2=k_BT^2C_V$。\n- **爱因斯坦关系**：布朗粒子达到力平衡 $\\gamma v$（摩擦）与渗透压梯度（随机力），由涨落-耗散得到 $D=k_BT/\\gamma$。\n- **朗之万方程**：随机力 $\\eta(t)$ 满足高斯白噪声，其强度由涨落-耗散定理确定为 $2\\gamma k_BT$。\n\n### 重要定理与推论\n\n- **涨落-耗散定理**：线性响应的耗散部分与平衡涨落的关系（噪声是耗散的\"另一面\"）。\n- **临界涨落**：临界点附近关联长度发散，涨落增强（[[critical-phenomena]]）。\n- **昂萨格倒易关系**：交叉输运系数的对称性（[[nonequilibrium-thermodynamics]]）。\n- **布朗运动的均方位移**：$\\langle x^2\\rangle=2Dt$ 线性增长（扩散）。\n\n## 深化内容\n\n涨落理论是**随机过程**（[[probability-theory]]：马尔可夫、维纳、Ornstein-Uhlenbeck）与 **噪声分析** 的基础；**临界涨落**由重正化群（[[renormalization]]）处理。涨落-耗散定理推广到量子情形（量子涨落-耗散定理），与 [[quantum-measurement]] 的测量噪声相关。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Pathria《Statistical Mechanics》、Chandler《Introduction to Modern Statistical Mechanics》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[statistical-mechanics]]、[[probability-theory]]（随机过程）、[[transport-theory]]（涨落-耗散）。\n- 临界现象：[[phase-transitions]]/[[critical-phenomena]] 中涨落发散。\n- 应用：噪声分析、[[quantum-measurement]]（测量噪声）。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[probability-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 5,
     "note": "随机过程"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "平衡涨落"
    },
    {
     "id": "colloids",
     "name": "胶体",
     "weight": 4,
     "note": "布朗运动"
    },
    {
     "id": "critical-phenomena",
     "name": "临界现象",
     "weight": 4,
     "note": "临界点涨落发散"
    },
    {
     "id": "nonequilibrium-thermodynamics",
     "name": "非平衡热力学",
     "weight": 4,
     "note": "涨落与线性响应"
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 4,
     "note": "涨落-耗散"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 3,
     "note": "临界涨落"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": "涨落与热力学量的关联"
    },
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程",
     "weight": 2,
     "note": ""
    },
    {
     "id": "turbulence",
     "name": "湍流",
     "weight": 2,
     "note": "随机统计"
    }
   ],
   "softLinks": [
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 3,
     "note": "随机行走"
    },
    {
     "id": "quantum-measurement",
     "name": "量子测量与退相干",
     "weight": 2,
     "note": ""
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "heat-conduction",
   "name": "热传导与扩散",
   "nameEn": "Heat Conduction & Diffusion",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "热扩散",
    "扩散方程"
   ],
   "tags": [
    "统计物理",
    "输运",
    "扩散"
   ],
   "keywords": [
    "热传导方程",
    "扩散方程",
    "热导率"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 热传导与扩散\n\n## 概述\n\n热传导与扩散是同一类**抛物型**输运过程，分别描述温度场与浓度场的弛豫。热传导由**傅里叶定律**（$\\vec q=-\\kappa\\nabla T$）、扩散由**菲克定律**（$\\vec J=-D\\nabla n$）驱动，结合守恒律得到**热传导方程 / 扩散方程**。微观上，热传导由分子碰撞（气体）、声子与电子（固体）承担；扩散就是**随机行走**（布朗运动），爱因斯坦关系 $\\langle r^2\\rangle=6Dt$ 联系宏观扩散系数与微观随机行走。\n\n## 基本概念\n\n- **热导率** $\\kappa$、**热扩散率** $\\alpha=\\kappa/(\\rho c_p)$。\n- **扩散系数** $D$。\n- **傅里叶定律 / 菲克定律**：流正比于梯度。\n- **格林函数 / 热核**：热传导方程的基本解。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n热传导方程：\n\n$$ \\frac{\\partial T}{\\partial t}=\\alpha\\nabla^2T,\\qquad \\alpha=\\frac{\\kappa}{\\rho c_p} $$\n\n扩散方程：\n\n$$ \\frac{\\partial n}{\\partial t}=D\\nabla^2n $$\n\n**爱因斯坦关系**：\n\n$$ \\langle r^2\\rangle=6Dt,\\qquad D=\\frac{k_BT}{\\gamma} $$\n\n### 推导要点\n\n- **热传导方程**：由能量守恒 $\\rho c_p\\partial T/\\partial t=-\\nabla\\cdot\\vec q$ 代入傅里叶定律 $\\vec q=-\\kappa\\nabla T$ 得到。\n- **扩散方程**：由粒子数守恒 $\\partial n/\\partial t=-\\nabla\\cdot\\vec J$ 代入菲克定律得到。\n- **爱因斯坦关系**：布朗粒子在随机力与摩擦下的均方位移线性增长，由涨落-耗散定理给出 $D=k_BT/\\gamma$。\n\n### 重要定理与推论\n\n- **抛物型方程的平滑性**：热传导抹平初始的不均匀（不可逆、信息丢失）。\n- **热传导方程的基本解**：高斯型热核（点源扩散）。\n- **扩散的均方位移**：$\\langle r^2\\rangle\\propto t$（正常扩散），反常扩散 $\\langle r^2\\rangle\\propto t^\\alpha$ 偏离之。\n- **稳态解**：一维稳态 $T$ 线性分布（傅里叶定律）。\n\n## 深化内容\n\n热传导与扩散是 [[transport-theory]]、[[mathematical-physics-methods]]（分离变量、格林函数）的标准实例。固体中声子热导（[[phonons]]）与电子热导（[[condensed-matter-physics]]）有不同机制；**反常扩散**（分形介质、莱维飞行）是前沿。延伸阅读可参考 Carslaw & Jaeger《Conduction of Heat in Solids》、Kardar《Statistical Physics of Fields》、朗道《流体力学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[transport-theory]]（输运系数）、[[partial-differential-equations]]/[[mathematical-physics-methods]]（求解）。\n- 物理机制：[[kinetic-theory]]（气体）、[[phonons]]（固体）、[[condensed-matter-physics]]。\n- 涨落视角：[[fluctuation-theory]]（随机行走与布朗运动）。\n\n## 前置知识\n\n- [[partial-differential-equations]]、[[transport-theory]]、[[kinetic-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "partial-differential-equations",
     "name": "偏微分方程",
     "weight": 5,
     "note": "抛物型方程"
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 5,
     "note": "输运过程"
    },
    {
     "id": "mathematical-physics-methods",
     "name": "数学物理方法",
     "weight": 4,
     "note": "求解方法"
    },
    {
     "id": "phonons",
     "name": "声子",
     "weight": 4,
     "note": "晶格热导"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "热传导与扩散是统计力学内容"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 4,
     "note": "热传导是热力学过程"
    },
    {
     "id": "green-function",
     "name": "格林函数",
     "weight": 3,
     "note": "热传导方程格林函数"
    },
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 3,
     "note": "微观机制"
    }
   ],
   "softLinks": [
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 3,
     "note": "随机行走"
    },
    {
     "id": "fluid-mechanics",
     "name": "流体力学",
     "weight": 2,
     "note": "对流"
    }
   ],
   "supersedeLinks": []
  },
  {
   "id": "ideal-gas",
   "name": "理想气体",
   "nameEn": "Ideal Gas",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "理想气体模型"
   ],
   "tags": [
    "统计物理",
    "模型",
    "气体"
   ],
   "keywords": [
    "状态方程",
    "麦克斯韦分布",
    "配分函数"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 理想气体\n\n## 概述\n\n理想气体是忽略分子相互作用（只保留弹性碰撞）的模型，是统计力学**最简单、最完整**的可解实例：由单粒子配分函数可直接导出状态方程、内能、熵与麦克斯韦速率分布。它验证了统计力学的整套方法，并作为零级近似推广到真实气体（范德瓦尔斯）与量子气体（费米/玻色统计）。理想气体的结论（$PV=Nk_BT$、$U=\\frac32Nk_BT$、能量均分）是理解一切热系统的起点。\n\n## 基本概念\n\n- **单粒子配分函数**：$Z_1=V(2\\pi mk_BT/h^2)^{3/2}$（平动）。\n- **$N$ 粒子配分函数**：$Z_N=Z_1^N/N!$（全同性修正）。\n- **麦克斯韦分布**：速率的概率密度。\n- **均方根速率**：$v_{\\mathrm{rms}}=\\sqrt{3k_BT/m}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n状态方程与内能：\n\n$$ PV=Nk_BT,\\qquad U=\\frac32Nk_BT $$\n\n**麦克斯韦速率分布**：\n\n$$ f(v)=\\Big(\\frac{m}{2\\pi k_BT}\\Big)^{3/2}4\\pi v^2e^{-mv^2/2k_BT} $$\n\n**熵**（萨库尔-特罗德公式）：\n\n$$ S=Nk_B\\Big[\\ln\\Big(\\frac VN\\Big(\\frac{4\\pi mE}{3Nh^2}\\Big)^{3/2}\\Big)+\\frac52\\Big] $$\n\n### 推导要点\n\n- **配分函数**：单粒子能量 $\\varepsilon=p^2/2m$，$Z_1=\\frac1{h^3}\\int e^{-\\beta p^2/2m}d^3p\\,d^3r=V(2\\pi mk_BT/h^2)^{3/2}$。\n- **状态方程**：$F=-k_BT\\ln Z_N$，$P=-\\partial F/\\partial V=Nk_BT/V$。\n- **麦克斯韦分布**：速度各分量为高斯 $\\propto e^{-mv_x^2/2k_BT}$，球坐标积分（$4\\pi v^2$）得速率分布。\n\n### 重要定理与推论\n\n- **能量均分**：每个平动自由度 $\\frac12k_BT$，$U=\\frac32Nk_BT$。\n- **理想气体定律**：$PV=Nk_BT$，是玻意耳、查理、盖-吕萨克定律的统一。\n- **绝热方程**：$PV^\\gamma=\\text{const}$，$\\gamma=C_p/C_V=5/3$（单原子）。\n- **吉布斯佯谬**：$1/N!$ 因子保证熵的可加性（全同性）。\n\n## 深化内容\n\n理想气体推广到**真实气体**：范德瓦尔斯方程 $(P+an^2)(V-nb)=Nk_BT$ 计入分子体积与吸引。低温/高密度下需**量子统计**（[[quantum-statistics]]）修正。理想气体也是 [[kinetic-theory]] 与 [[boltzmann-equation]] 的零级近似。延伸阅读可参考 Pathria《Statistical Mechanics》、Kittel《Thermal Physics》、费曼《物理学讲义》第一卷。\n\n## 与其他知识的联系\n\n- 紧密相关：[[statistical-mechanics]]（配分函数方法）、[[kinetic-theory]]（动力学）、[[thermodynamics]]（状态方程）。\n- 推广：[[quantum-statistics]]（量子气体）、[[phase-transitions]]（凝结）、范德瓦尔斯气体。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[ensembles]]、[[calculus]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 5,
     "note": "分子运动论"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "最简单的统计力学模型"
    },
    {
     "id": "ensembles",
     "name": "系综理论",
     "weight": 4,
     "note": "各系综下的计算"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 4,
     "note": "宏观状态方程"
    },
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程",
     "weight": 3,
     "note": ""
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 3,
     "note": "量子修正"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "ising-model",
   "name": "伊辛模型",
   "nameEn": "Ising Model",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "Ising模型"
   ],
   "tags": [
    "统计物理",
    "模型",
    "自旋格点"
   ],
   "keywords": [
    "自旋",
    "相变",
    "平均场",
    "精确解"
   ],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 伊辛模型\n\n## 概述\n\n伊辛模型把磁体抽象为晶格上的自旋变量 $s_i=\\pm1$，相邻自旋有交换相互作用，是**相变与临界现象的原型模型**。其价值在于：一维可精确求解（无相变）、二维可精确求解（昂萨格 1944，有连续相变）、高维用平均场近似，而重正化群把伊辛模型作为检验普适性的标准模型。伊辛模型尽管简单，却抓住了相变的本质——相互作用、热涨落与对称性破缺的竞争。\n\n## 基本概念\n\n- **自旋变量**：$s_i=\\pm1$。\n- **哈密顿量**：$H=-J\\sum_{\\langle ij\\rangle}s_is_j-h\\sum_is_i$（$J>0$ 铁磁）。\n- **配分函数**：$Z=\\sum_{\\{s_i\\}}e^{-\\beta H}$。\n- **磁化强度**：$M=\\langle s_i\\rangle$；**临界温度** $T_c$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n哈密顿量与配分函数：\n\n$$ H=-J\\sum_{\\langle ij\\rangle}s_is_j-h\\sum_is_i,\\qquad Z=\\sum_{\\{s_i\\}}e^{-\\beta H} $$\n\n**平均场方程**：\n\n$$ M=\\tanh\\big(\\beta(JzM+h)\\big) $$\n\n（$z$ 为配位数），$h=0$ 时临界温度 $k_BT_c=Jz$。\n\n**二维精确解**（昂萨格）：临界温度\n\n$$ \\frac{k_BT_c}{J}=\\frac{2}{\\ln(1+\\sqrt2)}\\approx2.269 $$\n\n### 推导要点\n\n- **平均场近似**：把 $s_is_j$ 近似为 $\\langle s_i\\rangle s_j+s_i\\langle s_j\\rangle-\\langle s_i\\rangle\\langle s_j\\rangle$，忽略涨落，得到自洽方程 $M=\\tanh(\\beta JzM)$。\n- **一维转移矩阵法**：用 $2\\times2$ 转移矩阵 $T$，$Z=\\mathrm{tr}\\,T^N$，本征值给出无相变（$T_c=0$）。\n- **二维昂萨格解**：用转移矩阵 + 李代数（洋葱交）方法精确求解，比热对数发散 $\\alpha=0$。\n\n### 重要定理与推论\n\n- **维度决定相变**：一维无相变、二维以上有相变（朗道-佩尔斯证明一维无长程有序）。\n- **平均场失效于低维**：平均场指数（$\\beta=1/2$）与二维精确解（$\\beta=1/8$）不符，揭示涨落的重要性。\n- **普适性**：二维伊辛模型的临界指数与大量物理系统相同（[[critical-phenomena]]）。\n- **自发磁化**：$T<T_c$ 时 $M\\neq0$，对称性自发破缺。\n\n## 深化内容\n\n伊辛模型的推广：$\\mathrm{XY}$ 模型（连续自旋，Kosterlitz-Thouless 相变）、海森堡模型、Potts 模型。**重正化群**（[[renormalization]]）对伊辛模型给出精确的临界指数与标度关系。伊辛模型还应用于神经网络（霍普菲尔德模型）、社会动力学、图像去噪。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Baxter《Exactly Solved Models in Statistical Mechanics》、Goldenfeld《Lectures on Phase Transitions》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[phase-transitions]]/[[critical-phenomena]]（研究对象）、[[renormalization]]（现代求解方法）。\n- 应用：[[condensed-matter-physics]]（磁学）、神经网络（霍普菲尔德模型）、社会动力学。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[probability-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 5,
     "note": "相变的原型模型"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "统计力学重要模型"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "磁性模型"
    },
    {
     "id": "critical-phenomena",
     "name": "临界现象",
     "weight": 4,
     "note": "原型模型"
    },
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 4,
     "note": "重正化群研究其临界行为"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "kinetic-theory",
   "name": "分子运动论",
   "nameEn": "Kinetic Theory",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "气体动理论"
   ],
   "tags": [
    "统计物理",
    "分子",
    "微观"
   ],
   "keywords": [
    "平均自由程",
    "碰撞",
    "输运系数"
   ],
   "size": 84,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 分子运动论\n\n## 概述\n\n分子运动论把气体视为大量分子**无规则热运动**的集合，从微观碰撞出发导出宏观性质。其核心成果：压强源于分子对器壁的动量传递，温度是分子平均平动动能的量度，**平均自由程**决定输运现象（黏滞、热传导、扩散）的大小。分子运动论在 19 世纪由克劳修斯、麦克斯韦、玻尔兹曼建立，为热力学提供了第一个微观模型，是统计力学与气体动力学的前身。\n\n## 基本概念\n\n- **平均平动动能**：$\\frac12m\\overline{v^2}=\\frac32k_BT$。\n- **平均自由程**：$\\lambda=\\frac1{\\sqrt2\\,n\\sigma}$（$\\sigma$ 为碰撞截面）。\n- **碰撞频率**：$Z=\\sqrt2\\,n\\sigma\\bar v$。\n- **输运系数**：黏度 $\\eta$、热导率 $\\kappa$、扩散系数 $D$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n压强（动量传递）：\n\n$$ P=\\frac13nm\\overline{v^2}=nk_BT $$\n\n平均自由程：\n\n$$ \\lambda=\\frac1{\\sqrt2\\,n\\sigma} $$\n\n输运系数（简单平均自由程理论）：\n\n$$ \\eta=\\frac13nm\\bar v\\lambda,\\qquad \\kappa=\\frac13nm\\bar v\\lambda c_V,\\qquad D=\\frac13\\bar v\\lambda $$\n\n### 推导要点\n\n- **压强公式**：计算单位时间撞在单位面积器壁上的分子动量变化，对麦克斯韦分布平均得 $P=\\frac13nm\\overline{v^2}$。\n- **平均自由程**：在分子参考系中，其他分子以相对速率 $\\sqrt2\\bar v$ 运动，单位时间扫过体积 $\\sqrt2\\bar v\\sigma$，故碰撞频率 $Z=\\sqrt2n\\sigma\\bar v$，$\\lambda=\\bar v/Z$。\n- **输运系数**：跨越平均自由程的分子把其来源处的动量/能量/粒子数带到另一侧，梯度导致净输运。\n\n### 重要定理与推论\n\n- **温度与动能的联系**：$T$ 正比于分子平均平动动能。\n- **麦克斯韦-玻尔兹曼分布**：速率分布（[[ideal-gas]]）。\n- **输运与温度的关系**：$\\eta,\\kappa\\propto\\sqrt T$（理想气体，与压强无关）。\n- **扩散与黏滞的类比**：三类输运系数共享 $\\frac13\\bar v\\lambda$ 结构。\n\n## 深化内容\n\n分子运动论的系统化是**玻尔兹曼方程**（[[boltzmann-equation]]）：用单粒子分布函数 $f(\\vec r,\\vec v,t)$ 描述演化，碰撞项给出输运系数与 $H$ 定理（熵增的微观起源）。分子运动论是[[transport-theory]] 与 [[nonequilibrium-thermodynamics]] 的基础。延伸阅读可参考 Feynman《物理学讲义》第一卷、Reif《Fundamentals of Statistical and Thermal Physics》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[ideal-gas]]（模型）、[[boltzmann-equation]]（动力学方程）、[[transport-theory]]（输运系数）。\n- 基础：[[statistical-mechanics]]、[[probability-theory]]。\n\n## 上位替代\n\n- 由 [[boltzmann-equation]] 与统计力学更一般地取代。\n\n## 前置知识\n\n- [[ideal-gas]]、[[probability-theory]]、[[statistical-mechanics]]",
   "supersededBy": [
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "ideal-gas",
     "name": "理想气体",
     "weight": 5,
     "note": "气体动理论的对象"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 4,
     "note": "气体输运"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 3,
     "note": "微观机制"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 3,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程",
     "weight": 5,
     "note": "动力学方程"
    }
   ]
  },
  {
   "id": "nonequilibrium-thermodynamics",
   "name": "非平衡热力学",
   "nameEn": "Non-equilibrium Thermodynamics",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "不可逆热力学"
   ],
   "tags": [
    "统计物理",
    "非平衡",
    "不可逆"
   ],
   "keywords": [
    "熵产生",
    "昂萨格关系",
    "线性响应"
   ],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 非平衡热力学\n\n## 概述\n\n非平衡热力学把热力学推广到**偏离平衡**的系统，研究不可逆过程（输运、化学反应、耗散）的宏观规律。核心概念是**熵产生率**：把流 $\\vec J$ 与对应的热力学力 $\\vec X$（梯度、化学亲和势）联系起来，熵产生率为 $\\vec J\\cdot\\vec X$。**昂萨格倒易关系**给出交叉输运系数的对称性，**涨落-耗散定理**把输运系数与平衡涨落联系。非平衡热力学是输运理论、生物过程、化学动力学与自组织的宏观框架。\n\n## 基本概念\n\n- **熵产生率**：$\\sigma=\\frac{dS_{\\mathrm{irr}}}{dt}\\ge0$。\n- **流与力**：广义流 $J_i$ 与广义力 $X_i$。\n- **线性唯象关系**：$J_i=\\sum_j L_{ij}X_j$。\n- **昂萨格系数**：$L_{ij}$，满足倒易关系。\n- **远离平衡 / 耗散结构**：非线性区的自组织。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**熵产生率**：\n\n$$ \\frac{dS}{dt}=\\int\\sum_i J_iX_i\\,dV\\ge0 $$\n\n**线性唯象关系**：\n\n$$ J_i=\\sum_j L_{ij}X_j $$\n\n**昂萨格倒易关系**：\n\n$$ L_{ij}=L_{ji} $$\n\n### 推导要点\n\n- **熵产生**：把熵变分解为可逆部分与不可逆部分，不可逆部分由流与力的乘积给出（热流 $\\vec q/T$、物质流 $\\vec J_i$ 与化学势梯度）。\n- **昂萨格倒易关系**：由微观可逆性（时间反演对称）与平衡涨落的对称性证明。\n- **熵增原理的推广**：第二定律要求熵产生率非负，即 $\\sum L_{ij}X_iX_j\\ge0$（$L$ 正定）。\n\n### 重要定理与推论\n\n- **昂萨格倒易关系**：热电效应（塞贝克/珀尔帖）的对称性。\n- **最小熵产生原理**：近平衡线性区，稳态对应最小熵产生。\n- **涨落-耗散定理**：输运系数与平衡涨落的关系（[[fluctuation-theory]]）。\n- **耗散结构**：远离平衡时，熵产生可驱动自组织（普里高津）。\n\n## 深化内容\n\n非平衡热力学是[[transport-theory]]、[[boltzmann-equation]] 的宏观框架，并应用于生物物理（主动输运、新陈代谢）、化学反应网络与气候系统（[[climate-physics]]）。**远离平衡**的耗散结构与 [[chaos-theory]] 相关。延伸阅读可参考 Prigogine《Introduction to Thermodynamics of Irreversible Processes》、de Groot & Mazur《Non-Equilibrium Thermodynamics》、Kardar《Statistical Physics of Fields》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[transport-theory]]（输运）、[[fluctuation-theory]]（线性响应）、[[boltzmann-equation]]（微观基础）。\n- 非线性区：[[chaos-theory]]、耗散结构（自组织）。\n\n## 前置知识\n\n- [[thermodynamics]]、[[transport-theory]]、[[fluctuation-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程",
     "weight": 4,
     "note": "微观动力学"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 4,
     "note": "涨落与线性响应"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 4,
     "note": "平衡热力学的推广"
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 4,
     "note": "输运与熵产生"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "phase-transitions",
   "name": "相变与临界现象",
   "nameEn": "Phase Transitions & Critical Phenomena",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "相变",
    "临界点"
   ],
   "tags": [
    "统计物理",
    "相变",
    "临界"
   ],
   "keywords": [
    "序参量",
    "一级相变",
    "二级相变",
    "临界指数"
   ],
   "size": 158,
   "degree": 14,
   "pos": null,
   "fixed": false,
   "body": "# 相变与临界现象\n\n## 概述\n\n相变是物质宏观状态（相）之间的转变，是统计力学最深刻的现象之一。按热力学势（吉布斯自由能）的奇异性分类：**一级相变**（潜热、序参量跃变，如汽-液、固-液）与**二级（连续）相变**（序参量连续、比热发散，如铁磁-顺磁、超流）。相变用**序参量**刻画有序程度，临界点附近由**临界指数**描述幂律奇异行为；临界点涨落发散、关联长度趋于无穷，普适性由**重正化群**解释。\n\n## 基本概念\n\n- **序参量**：刻画有序度的量（磁化 $M$、密度差 $\\Delta\\rho$、超流波函数）。\n- **一级 / 二级相变**：序参量跃变 / 连续、潜热有无。\n- **临界点**：二级相变发生的温度 $T_c$。\n- **临界指数**：$\\alpha,\\beta,\\gamma,\\delta,\\nu$ 等幂律指数。\n- **关联长度** $\\xi$：涨落的空间尺度。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n相平衡条件：两相 $T,p,\\mu$ 相等（克劳修斯-克拉珀龙方程）：\n\n$$ \\frac{dp}{dT}=\\frac{L}{T\\Delta v} $$\n\n**朗道理论**（序参量自由能展开）：\n\n$$ F[M]=F_0+\\frac12a(T-T_c)M^2+\\frac14bM^4 $$\n\n临界行为（幂律）：\n\n$$ M\\sim(T_c-T)^\\beta,\\qquad \\chi\\sim|T-T_c|^{-\\gamma},\\qquad C\\sim|T-T_c|^{-\\alpha} $$\n\n### 推导要点\n\n- **相平衡**：吉布斯自由能极小 $\\mu_1=\\mu_2$，微分得克劳修斯-克拉珀龙方程。\n- **朗道理论**：对称性允许把自由能对序参量展开到 $M^4$，极小化 $\\partial F/\\partial M=0$ 给出 $M\\propto\\sqrt{T_c-T}$（$\\beta=1/2$）。\n- **临界指数的实验/精确值**：朗道给出平均场指数（$\\beta=1/2,\\gamma=1$），与二维伊辛模型精确解（昂萨格）及实验不同，需重正化群修正。\n\n### 重要定理与推论\n\n- **一级相变的潜热与共存**：两相共存线、临界点结束。\n- **二级相变的幂律**：临界指数满足标度关系（$\\alpha+2\\beta+\\gamma=2$ 等）。\n- **普适性**：临界指数只依赖维度与对称性，不依赖微观细节。\n- **序参量的对称性破缺**：低温相的自发对称破缺（见 [[spontaneous-symmetry-breaking]]）。\n\n## 深化内容\n\n相变的现代理论是**重正化群**（[[renormalization]]、[[critical-phenomena]]）：威尔逊把标度变换与临界指数联系，解释普适性。应用遍及 [[superconductivity]]、[[bose-einstein-condensation]]、液晶（[[liquid-crystals]]）、宇宙早期相变。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Goldenfeld《Lectures on Phase Transitions》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[ising-model]]（理论模型）、[[critical-phenomena]]（临界行为）、[[thermodynamics]]（热力学描述）。\n- 现代方法：[[renormalization]]（重正化群）、[[fluctuation-theory]]。\n- 应用：[[superconductivity]]、[[bose-einstein-condensation]]、宇宙相变。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[thermodynamics]]、[[ensembles]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "critical-phenomena",
     "name": "临界现象",
     "weight": 5,
     "note": "临界行为"
    },
    {
     "id": "ising-model",
     "name": "伊辛模型",
     "weight": 5,
     "note": "相变的原型模型"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "相变的统计基础"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "相变"
    },
    {
     "id": "liquid-crystals",
     "name": "液晶",
     "weight": 4,
     "note": "相变与序"
    },
    {
     "id": "renormalization",
     "name": "重整化",
     "weight": 4,
     "note": "重正化群"
    },
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 4,
     "note": "相变"
    },
    {
     "id": "spontaneous-symmetry-breaking",
     "name": "自发对称破缺与希格斯机制",
     "weight": 4,
     "note": "凝聚态类比"
    },
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 4,
     "note": "相平衡与热力学势"
    },
    {
     "id": "bose-einstein-condensation",
     "name": "玻色-爱因斯坦凝聚",
     "weight": 3,
     "note": ""
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 3,
     "note": "临界涨落"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 3,
     "note": ""
    },
    {
     "id": "polymers",
     "name": "聚合物物理",
     "weight": 2,
     "note": "玻璃化与相分离"
    },
    {
     "id": "self-assembly",
     "name": "自组装",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "quantum-statistics",
   "name": "量子统计",
   "nameEn": "Quantum Statistics",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "费米-狄拉克",
    "玻色-爱因斯坦"
   ],
   "tags": [
    "统计物理",
    "量子",
    "全同粒子"
   ],
   "keywords": [
    "费米分布",
    "玻色分布",
    "化学势",
    "简并"
   ],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 量子统计\n\n## 概述\n\n量子统计把统计力学推广到**全同量子粒子**，由全同性（[[identical-particles]]）导致两类截然不同的统计：费米子服从**费米-狄拉克分布**、玻色子服从**玻色-爱因斯坦分布**。费米子受泡利原理限制，$T=0$ 时填充到费米能（金属电子气、白矮星简并压）；玻色子在低温下可大量占据基态形成**玻色-爱因斯坦凝聚**。黑体辐射（光子）、金属电子气、声子、超导都是量子统计的直接应用。\n\n## 基本概念\n\n- **费米子 / 玻色子**：半整数 / 整数自旋（[[spin]]）。\n- **占据数** $\\bar n_i$：能级 $\\varepsilon_i$ 的平均粒子数。\n- **化学势** $\\mu$：调节粒子数守恒的拉格朗日乘子。\n- **简并**：量子效应显著（$\\lambda_T^3n\\gtrsim1$）的低温/高密度区。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n费米-狄拉克（$+$）与玻色-爱因斯坦（$-$）分布：\n\n$$ \\bar n_i=\\frac{1}{e^{\\beta(\\varepsilon_i-\\mu)}\\pm1} $$\n\n经典极限（$e^{\\beta(\\varepsilon-\\mu)}\\gg1$）：两者都趋于玻尔兹曼分布 $\\bar n_i\\approx e^{-\\beta(\\varepsilon_i-\\mu)}$。\n\n**费米能**（$T=0$）：$\\varepsilon_F=\\mu(T=0)=\\frac{\\hbar^2}{2m}(3\\pi^2n)^{2/3}$。\n\n### 推导要点\n\n- **巨正则推导**：对全同粒子，巨配分函数 $\\Xi=\\prod_i\\sum_{n_i}e^{-\\beta(\\varepsilon_i-\\mu)n_i}$；费米子 $n_i=0,1$、玻色子 $n_i=0,1,2,\\dots$，求和分别得 $\\Xi=\\prod_i(1+e^{-\\beta(\\varepsilon_i-\\mu)})$ 与 $\\prod_i(1-e^{-\\beta(\\varepsilon_i-\\mu)})^{-1}$。\n- **占据数**：$\\bar n_i=-\\frac1\\beta\\frac{\\partial\\ln\\Xi}{\\partial\\varepsilon_i}$ 即得两种分布。\n- **费米能**：$T=0$ 时费米子占据 $\\varepsilon<\\varepsilon_F$ 的全部态，粒子数 $N=\\int_0^{\\varepsilon_F}g(\\varepsilon)d\\varepsilon$ 反解出 $\\varepsilon_F$。\n\n### 重要定理与推论\n\n- **泡利不相容**：费米子 $\\bar n_i\\le1$。\n- **玻色凝聚**：玻色子低温下 $\\mu\\to0$，基态占据数宏观（[[bose-einstein-condensation]]）。\n- **经典极限**：高温低密度下量子统计回到玻尔兹曼统计。\n- **简并压**：费米气体的压强在 $T=0$ 仍非零（白矮星支撑）。\n\n## 深化内容\n\n量子统计的应用遍及：**金属电子气**（[[condensed-matter-physics]] 的费米液体）、**黑体辐射**（[[blackbody-radiation]]，光子玻色气体）、**声子**（[[phonons]]）、**超导/超流**（[[superconductivity]]、[[bose-einstein-condensation]]）。白矮星与中子星的简并压（[[compact-objects]]）是量子统计的天体应用。延伸阅读可参考 Pathria《Statistical Mechanics》、Kittel《Thermal Physics》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[identical-particles]]/[[spin]]（自旋-统计）、[[statistical-mechanics]]（框架）。\n- 应用：[[blackbody-radiation]]（光子）、[[condensed-matter-physics]]（电子气、费米液体）、[[superconductivity]]、[[bose-einstein-condensation]]。\n\n## 前置知识\n\n- [[statistical-mechanics]]、[[identical-particles]]、[[ensembles]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 5,
     "note": "光子气体是玻色系统"
    },
    {
     "id": "bose-einstein-condensation",
     "name": "玻色-爱因斯坦凝聚",
     "weight": 5,
     "note": "玻色分布"
    },
    {
     "id": "identical-particles",
     "name": "全同粒子",
     "weight": 5,
     "note": "全同性是量子统计的前提"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "量子统计力学"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 4,
     "note": "电子气体"
    },
    {
     "id": "spin",
     "name": "自旋",
     "weight": 4,
     "note": "自旋-统计"
    },
    {
     "id": "compact-objects",
     "name": "致密天体",
     "weight": 3,
     "note": "简并压"
    },
    {
     "id": "ensembles",
     "name": "系综理论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "ideal-gas",
     "name": "理想气体",
     "weight": 3,
     "note": "量子修正"
    },
    {
     "id": "superconductivity",
     "name": "超导电性",
     "weight": 3,
     "note": "玻色-爱因斯坦凝聚"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  },
  {
   "id": "statistical-mechanics",
   "name": "统计力学",
   "nameEn": "Statistical Mechanics",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "统计物理"
   ],
   "tags": [
    "统计物理",
    "微观",
    "系综"
   ],
   "keywords": [
    "系综",
    "配分函数",
    "玻尔兹曼因子"
   ],
   "size": 354,
   "degree": 33,
   "pos": {
    "x": -5,
    "y": 40,
    "z": 0
   },
   "fixed": false,
   "body": "# 统计力学\n\n## 概述\n\n统计力学从微观粒子的运动规律出发，用**概率与系综**导出宏观热力学。其核心桥梁是**玻尔兹曼公式** $S=k_B\\ln\\Omega$（熵 = 微观态数的对数）与**配分函数** $Z$——一切热力学量都可由 $Z$ 通过微分得到。统计力学解释了热力学的微观起源，并推广到量子系统（量子统计）、涨落与相变。它是连接微观物理（力学、量子力学）与宏观现象（热、相变、输运）的枢纽，也是现代凝聚态、软物质、生物物理的共同语言。\n\n## 基本概念\n\n- **微观态 / 宏观态**：系统的精确状态 / 由宏观变量标定的状态集合。\n- **系综**：大量相同系统的假想集合，宏观量是系综平均。\n- **玻尔兹曼因子**：$e^{-\\beta E}$，$\\beta=1/(k_BT)$。\n- **配分函数**：$Z=\\sum_n e^{-\\beta E_n}$，统计力学的核心量。\n- **玻尔兹曼熵**：$S=k_B\\ln\\Omega$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n正则系综的概率分布：\n\n$$ p_n=\\frac{e^{-\\beta E_n}}{Z},\\qquad Z=\\sum_n e^{-\\beta E_n},\\qquad \\beta=\\frac{1}{k_BT} $$\n\n自由能与配分函数：\n\n$$ F=-k_BT\\ln Z $$\n\n玻尔兹曼熵：\n\n$$ S=k_B\\ln\\Omega $$\n\n### 推导要点\n\n- **玻尔兹曼分布**：在约束 $\\sum p_n=1$、$\\sum p_nE_n=\\langle E\\rangle$ 下极大化吉布斯熵 $-\\sum p_n\\ln p_n$，用拉格朗日乘子得 $p_n\\propto e^{-\\beta E_n}$。\n- **自由能-配分函数关系**：由 $F=U-TS$ 与 $\\langle E\\rangle=-\\partial\\ln Z/\\partial\\beta$、$S=k_B(\\ln Z+\\beta\\langle E\\rangle)$ 联立得 $F=-k_BT\\ln Z$。\n- **等概率假设**：微正则系综中每个可达微观态等概率（刘维尔定理 + 各态历经假设）。\n\n### 重要定理与推论\n\n- **能量均分定理**：每个二次自由度贡献 $\\frac12k_BT$（理想气体 $U=\\frac32Nk_BT$）。\n- **涨落-耗散定理**：平衡涨落与线性响应（[[fluctuation-theory]]）相联系。\n- **热力学极限的系综等价**：微正则/正则/巨正则在大 $N$ 下等价。\n- **配分函数的可分解性**：独立子系统 $Z=Z_1Z_2$，能量/自由能可加。\n\n## 深化内容\n\n统计力学推广到量子系统给出**量子统计**（[[quantum-statistics]]：费米-狄拉克、玻色-爱因斯坦），解释金属电子气、黑体辐射、BEC。**相变理论**（[[phase-transitions]]、[[ising-model]]、[[renormalization]]）与**非平衡统计**（[[boltzmann-equation]]、[[nonequilibrium-thermodynamics]]）是前沿。延伸阅读可参考 Pathria《Statistical Mechanics》、Kardar《Statistical Physics of Particles》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[thermodynamics]]（目标）、[[ensembles]]（方法）、[[probability-theory]]（语言）、[[ideal-gas]]（模型）。\n- 量子化：[[quantum-statistics]]（费米/玻色）、[[density-matrix]]（量子系综）。\n- 推广：[[fluctuation-theory]]（涨落）、[[phase-transitions]]（临界现象）、[[nonequilibrium-thermodynamics]]（非平衡）。\n\n## 前置知识\n\n- [[probability-theory]]、[[calculus]]、[[hamiltonian-mechanics]]",
   "supersededBy": [],
   "supersedes": [
    {
     "id": "thermodynamics",
     "name": "热力学"
    }
   ],
   "links": [
    {
     "id": "ensembles",
     "name": "系综理论",
     "weight": 5,
     "note": "系综理论"
    },
    {
     "id": "entropy-information",
     "name": "熵与信息",
     "weight": 5,
     "note": "玻尔兹曼熵"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 5,
     "note": "涨落"
    },
    {
     "id": "ideal-gas",
     "name": "理想气体",
     "weight": 5,
     "note": "基本模型"
    },
    {
     "id": "ising-model",
     "name": "伊辛模型",
     "weight": 5,
     "note": "统计力学重要模型"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 5,
     "note": "相变与临界现象"
    },
    {
     "id": "polymers",
     "name": "聚合物物理",
     "weight": 5,
     "note": "构象统计"
    },
    {
     "id": "probability-theory",
     "name": "概率论",
     "weight": 5,
     "note": "统计语言"
    },
    {
     "id": "quantum-statistics",
     "name": "量子统计",
     "weight": 5,
     "note": "量子统计"
    },
    {
     "id": "soft-matter",
     "name": "软物质物理",
     "weight": 5,
     "note": "软物质与熵驱动现象"
    },
    {
     "id": "biophysics",
     "name": "生物物理",
     "weight": 4,
     "note": "生物系统统计"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 4,
     "note": "统计处理"
    },
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程",
     "weight": 4,
     "note": "动力学"
    },
    {
     "id": "colloids",
     "name": "胶体",
     "weight": 4,
     "note": "统计描述"
    },
    {
     "id": "critical-phenomena",
     "name": "临界现象",
     "weight": 4,
     "note": ""
    },
    {
     "id": "debye-screening",
     "name": "德拜屏蔽",
     "weight": 4,
     "note": "玻尔兹曼分布"
    },
    {
     "id": "density-matrix",
     "name": "密度矩阵",
     "weight": 4,
     "note": "量子系综"
    },
    {
     "id": "hamiltonian-mechanics",
     "name": "哈密顿力学",
     "weight": 4,
     "note": "相空间"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 4,
     "note": "热传导的统计描述"
    },
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 4,
     "note": ""
    },
    {
     "id": "molecular-biophysics",
     "name": "分子生物物理",
     "weight": 4,
     "note": "构象统计与折叠"
    },
    {
     "id": "nonequilibrium-thermodynamics",
     "name": "非平衡热力学",
     "weight": 4,
     "note": ""
    },
    {
     "id": "path-integral",
     "name": "路径积分",
     "weight": 4,
     "note": "虚时路径积分与配分函数"
    },
    {
     "id": "transport-theory",
     "name": "输运理论",
     "weight": 4,
     "note": "输运理论的统计基础"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "lasers",
     "name": "激光",
     "weight": 3,
     "note": "玻尔兹曼分布与粒子数反转"
    },
    {
     "id": "neuroscience-physics",
     "name": "神经科学物理",
     "weight": 3,
     "note": "网络统计"
    },
    {
     "id": "self-assembly",
     "name": "自组装",
     "weight": 3,
     "note": "熵驱动"
    },
    {
     "id": "molecular-physics",
     "name": "分子物理",
     "weight": 2,
     "note": "分子统计"
    }
   ],
   "softLinks": [
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 3,
     "note": ""
    },
    {
     "id": "plasma-physics",
     "name": "等离子体物理",
     "weight": 3,
     "note": "分布函数与统计"
    },
    {
     "id": "quantum-mechanics",
     "name": "量子力学",
     "weight": 3,
     "note": "量子统计"
    }
   ],
   "supersedeLinks": [
    {
     "id": "thermodynamics",
     "name": "热力学",
     "weight": 5,
     "note": "宏观热力学的微观基础"
    }
   ]
  },
  {
   "id": "thermodynamics",
   "name": "热力学",
   "nameEn": "Thermodynamics",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "热学",
    "热力学定律"
   ],
   "tags": [
    "热学",
    "宏观",
    "状态函数"
   ],
   "keywords": [
    "热力学定律",
    "熵",
    "自由能",
    "卡诺循环",
    "麦克斯韦关系"
   ],
   "size": 184,
   "degree": 17,
   "pos": {
    "x": -20,
    "y": 40,
    "z": 0
   },
   "fixed": false,
   "body": "# 热力学\n\n## 概述\n\n热力学以少数几条**宏观经验定律**描述热现象，不依赖微观模型，因而具有普适性与可靠性。它以**状态函数**（内能 $U$、熵 $S$、焓 $H$、自由能 $F$、吉布斯函数 $G$）刻画系统平衡态，用**热力学势**与**麦克斯韦关系**统一计算各类热力学量。热力学的核心是第二定律（熵增原理）与由此建立的**可逆过程理论**（卡诺循环给出热机效率上限）。热力学是统计力学的宏观结论，也是化学、材料、工程的基础。\n\n## 基本概念\n\n- **状态函数**：只依赖状态、与路径无关的量（$U,S,H,F,G$）。\n- **温度 / 熵**：第零定律定义温度；第二定律定义熵。\n- **热力学势**：$F=U-TS$（亥姆霍兹）、$G=H-TS$（吉布斯）。\n- **准静态 / 可逆过程**：缓慢、可逆的理想化过程。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n**四大定律**：\n\n- 第零定律：热平衡的传递性（温度存在）。\n- 第一定律（能量守恒）：$dU=\\delta Q+\\delta W$。\n- 第二定律（熵增）：$dS\\ge\\frac{\\delta Q}{T}$（克劳修斯），或开尔文表述\"不能从单一热源吸热全部转化为功\"。\n- 第三定律：$T\\to0$ 时 $S\\to0$。\n\n**热力学恒等式与麦克斯韦关系**（例）：\n\n$$ dF=-S\\,dT-p\\,dV,\\qquad \\Big(\\frac{\\partial S}{\\partial V}\\Big)_T=\\Big(\\frac{\\partial p}{\\partial T}\\Big)_V $$\n\n### 推导要点\n\n- **麦克斯韦关系**：由热力学势的全微分形式（如 $dF=-SdT-pdV$），利用混合偏导相等 $\\partial^2F/\\partial T\\partial V=\\partial^2F/\\partial V\\partial T$ 得到。\n- **卡诺效率**：可逆卡诺循环的效率 $\\eta=1-T_c/T_h$，只依赖两热源温度。\n- **熵的克劳修斯不等式**：$\\oint\\delta Q/T\\le0$（等号对应可逆过程），是第二定律的数学表述。\n\n### 重要定理与推论\n\n- **卡诺定理**：所有工作在相同热源间的可逆热机效率相同且最大。\n- **热力学势的判据**：等温等容下 $F$ 极小、等温等压 $G$ 极小对应平衡态。\n- **相平衡条件**：两相共存时 $T,p,\\mu$ 相等（[[phase-transitions]]）。\n- **熵增原理**：孤立系统熵不减。\n\n## 深化内容\n\n热力学的**微观起源**由[[statistical-mechanics]] 给出：玻尔兹曼熵 $S=k_B\\ln\\Omega$ 把熵与微观态数联系。**非平衡热力学**（[[nonequilibrium-thermodynamics]]）用熵产生率推广到不可逆过程。热力学与信息（兰道尔原理、[[entropy-information]]）和黑洞（[[black-holes]] 的贝肯斯坦-霍金熵）有深刻联系。延伸阅读可参考 Callen《Thermodynamics and an Introduction to Thermostatistics》、费米《热力学》、朗道《统计物理学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[statistical-mechanics]]（微观基础）、[[entropy-information]]、[[phase-transitions]]（相平衡）。\n- 应用：[[heat-conduction]]（传热）、[[blackbody-radiation]]（热辐射）、热机与制冷。\n\n## 上位替代\n\n- 统计力学提供微观起源并扩展到平衡/非平衡宏观描述（[[statistical-mechanics]]、[[nonequilibrium-thermodynamics]]）。\n\n## 前置知识\n\n- [[calculus]]、[[statistical-mechanics]]",
   "supersededBy": [
    {
     "id": "statistical-mechanics",
     "name": "统计力学"
    }
   ],
   "supersedes": [],
   "links": [
    {
     "id": "entropy-information",
     "name": "熵与信息",
     "weight": 5,
     "note": "熵的概念"
    },
    {
     "id": "ensembles",
     "name": "系综理论",
     "weight": 4,
     "note": "输出热力学量"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 4,
     "note": "传热"
    },
    {
     "id": "ideal-gas",
     "name": "理想气体",
     "weight": 4,
     "note": "宏观状态方程"
    },
    {
     "id": "nonequilibrium-thermodynamics",
     "name": "非平衡热力学",
     "weight": 4,
     "note": "平衡热力学的推广"
    },
    {
     "id": "phase-transitions",
     "name": "相变与临界现象",
     "weight": 4,
     "note": "相变的热力学描述"
    },
    {
     "id": "atmospheric-physics",
     "name": "大气物理",
     "weight": 3,
     "note": "湿空气热力学"
    },
    {
     "id": "black-holes",
     "name": "黑洞",
     "weight": 3,
     "note": "黑洞热力学"
    },
    {
     "id": "blackbody-radiation",
     "name": "黑体辐射",
     "weight": 3,
     "note": "热辐射"
    },
    {
     "id": "climate-physics",
     "name": "气候物理",
     "weight": 3,
     "note": "能量平衡"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 3,
     "note": "涨落与热力学量的关联"
    },
    {
     "id": "geophysics",
     "name": "地球与大气物理",
     "weight": 3,
     "note": "辐射与热平衡"
    },
    {
     "id": "information-theory",
     "name": "信息论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 3,
     "note": ""
    },
    {
     "id": "stellar-structure",
     "name": "恒星结构",
     "weight": 3,
     "note": "能量输运与状态方程"
    },
    {
     "id": "conservation-laws",
     "name": "守恒定律",
     "weight": 2,
     "note": ""
    }
   ],
   "softLinks": [],
   "supersedeLinks": [
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 5,
     "note": "微观基础"
    }
   ]
  },
  {
   "id": "transport-theory",
   "name": "输运理论",
   "nameEn": "Transport Theory",
   "domain": "statistical-mechanics",
   "domainName": "统计物理与热力学",
   "color": "#2ecc71",
   "aliases": [
    "输运过程",
    "输运系数"
   ],
   "tags": [
    "统计物理",
    "输运",
    "非平衡"
   ],
   "keywords": [
    "电导率",
    "热导率",
    "黏滞",
    "扩散",
    "昂萨格"
   ],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 输运理论\n\n## 概述\n\n输运理论研究非平衡系统中物理量（电荷、能量、动量、粒子数）的流动，即系统对**梯度**（温度梯度、电势梯度、密度梯度、速度梯度）的响应。线性响应区由两个普适原理统一：**昂萨格倒易关系**（交叉系数的对称性）与**涨落-耗散定理**（输运系数与平衡涨落的联系）。输运系数——电导率、热导率、黏度、扩散系数——由[[boltzmann-equation]] 微观推导，是固体物理、半导体、流体与软物质的核心。\n\n## 基本概念\n\n- **流与力**：广义流 $\\vec J$ 与广义力 $\\vec X$（梯度）。\n- **输运系数**：电导 $\\sigma$、热导 $\\kappa$、黏度 $\\eta$、扩散 $D$。\n- **线性响应**：$\\vec J=L\\vec X$（$L$ 为输运系数矩阵）。\n- **昂萨格系数**：$L_{ij}$，满足倒易关系 $L_{ij}=L_{ji}$。\n\n## 核心内容\n\n### 基本定律 / 方程\n\n扩散定律（菲克）：\n\n$$ \\vec J=-D\\nabla n $$\n\n热传导（傅里叶）：\n\n$$ \\vec q=-\\kappa\\nabla T $$\n\n**昂萨格倒易关系**：\n\n$$ L_{ij}=L_{ji} $$\n\n**涨落-耗散定理**：\n\n$$ \\sigma(\\omega)=\\frac{1}{k_BT}\\int_0^\\infty\\langle J(0)J(t)\\rangle e^{i\\omega t}dt $$\n\n### 推导要点\n\n- **德鲁德模型**：电子在电场中加速、碰撞弛豫 $\\tau$，得电导率 $\\sigma=ne^2\\tau/m$。\n- **气体输运系数**：由 [[kinetic-theory]] 的平均自由程理论 $\\eta=\\frac13nm\\bar v\\lambda$。\n- **昂萨格倒易关系**：由微观可逆性（时间反演对称）证明交叉系数对称。\n\n### 重要定理与推论\n\n- **爱因斯坦关系**：$D/\\mu=k_BT/q$（扩散系数与迁移率的联系）。\n- **维德曼-弗朗兹定律**：金属中 $\\kappa/(\\sigma T)=$ 常数（洛伦兹数）。\n- **涨落-耗散定理**：噪声（涨落）与耗散（输运系数）互为表里。\n- **霍尔效应**：磁场下的横向输运（[[semiconductors]]）。\n\n## 深化内容\n\n输运理论的应用遍及 [[semiconductors]]（电子/空穴输运）、[[condensed-matter-physics]]（费米液体、超导）、[[heat-conduction]]（声子热导）。量子输运（弹道输运、朗道-贝特格公式）在介观物理中重要。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kardar《Statistical Physics of Fields》、朗道《物理动力学》。\n\n## 与其他知识的联系\n\n- 紧密相关：[[boltzmann-equation]]（微观基础）、[[kinetic-theory]]、[[fluctuation-theory]]（涨落-耗散）、[[heat-conduction]]。\n- 固体：[[condensed-matter-physics]]、[[semiconductors]]（电子/空穴输运）。\n- 基础：[[nonequilibrium-thermodynamics]]。\n\n## 前置知识\n\n- [[kinetic-theory]]、[[boltzmann-equation]]、[[fluctuation-theory]]",
   "supersededBy": [],
   "supersedes": [],
   "links": [
    {
     "id": "boltzmann-equation",
     "name": "玻尔兹曼方程",
     "weight": 5,
     "note": "输运系数的动力学推导"
    },
    {
     "id": "heat-conduction",
     "name": "热传导与扩散",
     "weight": 5,
     "note": "热传导"
    },
    {
     "id": "fluctuation-theory",
     "name": "涨落理论",
     "weight": 4,
     "note": "涨落-耗散定理"
    },
    {
     "id": "kinetic-theory",
     "name": "分子运动论",
     "weight": 4,
     "note": "气体输运"
    },
    {
     "id": "nonequilibrium-thermodynamics",
     "name": "非平衡热力学",
     "weight": 4,
     "note": "输运与熵产生"
    },
    {
     "id": "statistical-mechanics",
     "name": "统计力学",
     "weight": 4,
     "note": "输运理论是统计力学的核心内容"
    },
    {
     "id": "condensed-matter-physics",
     "name": "凝聚态物理",
     "weight": 3,
     "note": "固体输运"
    },
    {
     "id": "semiconductors",
     "name": "半导体",
     "weight": 3,
     "note": "电子输运"
    }
   ],
   "softLinks": [],
   "supersedeLinks": []
  }
 ],
 "links": [
  {
   "source": "astrophysics",
   "target": "stellar-structure",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "恒星内部结构",
    "天体物理核心"
   ]
  },
  {
   "source": "astrophysics",
   "target": "stellar-evolution",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "恒星演化",
    "核心主题"
   ]
  },
  {
   "source": "astrophysics",
   "target": "compact-objects",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "致密天体",
    "天体物理核心"
   ]
  },
  {
   "source": "astrophysics",
   "target": "galaxies",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "星系",
    "天体物理对象"
   ]
  },
  {
   "source": "astrophysics",
   "target": "interstellar-medium",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "星际介质",
    "恒星形成背景"
   ]
  },
  {
   "source": "astrophysics",
   "target": "cosmology",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "宇宙大尺度背景",
    "大尺度结构与恒星"
   ]
  },
  {
   "source": "astrophysics",
   "target": "general-relativity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "引力理论",
    "强引力天体应用"
   ]
  },
  {
   "source": "astrophysics",
   "target": "nuclear-fusion",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "恒星能量来源"
   ]
  },
  {
   "source": "astrophysics",
   "target": "plasma-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "恒星内部等离子体"
   ]
  },
  {
   "source": "astrophysics",
   "target": "electromagnetic-radiation",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "观测辐射"
   ]
  },
  {
   "source": "black-holes",
   "target": "compact-objects",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "黑洞是最终致密态",
    "致密天体终极态"
   ]
  },
  {
   "source": "compact-objects",
   "target": "general-relativity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "强引力"
   ]
  },
  {
   "source": "compact-objects",
   "target": "stellar-evolution",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "演化终点",
    "演化终点残骸"
   ]
  },
  {
   "source": "compact-objects",
   "target": "supernovae",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "形成机制",
    "残骸形成"
   ]
  },
  {
   "source": "compact-objects",
   "target": "quantum-statistics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "简并压"
   ]
  },
  {
   "source": "cosmology",
   "target": "galaxies",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "大尺度结构"
   ]
  },
  {
   "source": "galaxies",
   "target": "interstellar-medium",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "星际气体与恒星形成",
    "星系组分"
   ]
  },
  {
   "source": "galaxies",
   "target": "general-relativity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "引力动力学"
   ]
  },
  {
   "source": "galaxies",
   "target": "stellar-evolution",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "恒星族"
   ]
  },
  {
   "source": "interstellar-medium",
   "target": "plasma-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "电离氢区"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "interstellar-medium",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "观测谱线"
   ]
  },
  {
   "source": "interstellar-medium",
   "target": "stellar-structure",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "stellar-evolution",
   "target": "stellar-structure",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "演化由结构方程决定",
    "结构决定演化"
   ]
  },
  {
   "source": "stellar-evolution",
   "target": "supernovae",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "大质量星终点",
    "大质量星终点"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "stellar-evolution",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "各阶段的核燃料"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "stellar-structure",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "核心能源"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "stellar-structure",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "流体静力学平衡"
   ]
  },
  {
   "source": "stellar-structure",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "能量输运与状态方程"
   ]
  },
  {
   "source": "plasma-physics",
   "target": "stellar-structure",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "恒星内部等离子体"
   ]
  },
  {
   "source": "nuclear-physics",
   "target": "supernovae",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "重元素核合成"
   ]
  },
  {
   "source": "gravitational-waves",
   "target": "supernovae",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "核心坍缩引力波"
   ]
  },
  {
   "source": "astrophysics",
   "target": "supernovae",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "atomic-molecular-optics",
   "target": "atomic-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "原子层次",
    "AMO 基础"
   ]
  },
  {
   "source": "atomic-molecular-optics",
   "target": "molecular-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "分子层次",
    "AMO 基础"
   ]
  },
  {
   "source": "atomic-molecular-optics",
   "target": "laser-cooling",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "原子冷却与俘获",
    "AMO 核心技术"
   ]
  },
  {
   "source": "atomic-molecular-optics",
   "target": "ultracold-atoms",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "超冷原子",
    "AMO 前沿"
   ]
  },
  {
   "source": "atomic-molecular-optics",
   "target": "quantum-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光与物质量子相互作用"
   ]
  },
  {
   "source": "atomic-molecular-optics",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础"
   ]
  },
  {
   "source": "atomic-molecular-optics",
   "target": "lasers",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "激光工具"
   ]
  },
  {
   "source": "atomic-physics",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础"
   ]
  },
  {
   "source": "atomic-physics",
   "target": "hydrogen-atom",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "精确可解原型"
   ]
  },
  {
   "source": "atomic-physics",
   "target": "spin",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "精细/超精细结构"
   ]
  },
  {
   "source": "atomic-physics",
   "target": "qed",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "兰姆位移"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "atomic-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "atomic-physics",
   "target": "ultracold-atoms",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "超冷原子属原子物理应用",
    "超冷原子属原子物理应用"
   ]
  },
  {
   "source": "laser-cooling",
   "target": "ultracold-atoms",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "冷却到超低温",
    "冷却手段"
   ]
  },
  {
   "source": "laser-cooling",
   "target": "lasers",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "工具"
   ]
  },
  {
   "source": "laser-cooling",
   "target": "quantum-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光子动量转移",
    "光-原子动量交换"
   ]
  },
  {
   "source": "atomic-physics",
   "target": "laser-cooling",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "能级与跃迁"
   ]
  },
  {
   "source": "laser-cooling",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "atomic-physics",
   "target": "molecular-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "由原子组成分子"
   ]
  },
  {
   "source": "molecular-physics",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础"
   ]
  },
  {
   "source": "molecular-biophysics",
   "target": "molecular-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "生物大分子",
    "分子能级"
   ]
  },
  {
   "source": "molecular-physics",
   "target": "statistical-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "分子统计"
   ]
  },
  {
   "source": "bose-einstein-condensation",
   "target": "ultracold-atoms",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻色凝聚"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "ultracold-atoms",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子相干"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "ultracold-atoms",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "冷原子量子模拟"
   ]
  },
  {
   "source": "biophysics",
   "target": "molecular-biophysics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "分子层次",
    "分子层次"
   ]
  },
  {
   "source": "biophysics",
   "target": "cell-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "细胞层次",
    "细胞层次"
   ]
  },
  {
   "source": "biophysics",
   "target": "neuroscience-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "神经系统",
    "神经系统层次"
   ]
  },
  {
   "source": "biophysics",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "统计方法",
    "生物系统统计"
   ]
  },
  {
   "source": "biophysics",
   "target": "information-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "信息处理"
   ]
  },
  {
   "source": "biophysics",
   "target": "soft-matter",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "软物质背景"
   ]
  },
  {
   "source": "cell-mechanics",
   "target": "continuum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "弹性与流变"
   ]
  },
  {
   "source": "cell-mechanics",
   "target": "soft-matter",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "软材料性质"
   ]
  },
  {
   "source": "cell-mechanics",
   "target": "fluid-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "细胞微流体"
   ]
  },
  {
   "source": "molecular-biophysics",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "构象统计与折叠"
   ]
  },
  {
   "source": "molecular-biophysics",
   "target": "self-assembly",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "膜与组装",
    "生物膜与蛋白质组装"
   ]
  },
  {
   "source": "information-theory",
   "target": "neuroscience-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "神经信息编码"
   ]
  },
  {
   "source": "differential-equations",
   "target": "neuroscience-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "神经动力学方程"
   ]
  },
  {
   "source": "neuroscience-physics",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "网络统计"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "neuroscience-physics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "神经振荡"
   ]
  },
  {
   "source": "canonical-transformations",
   "target": "hamiltonian-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "正则变换是哈密顿力学的核心工具",
    "正则变换保持辛结构"
   ]
  },
  {
   "source": "canonical-transformations",
   "target": "poisson-brackets",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "泊松括号在正则变换下不变",
    "正则不变量的判据"
   ]
  },
  {
   "source": "canonical-transformations",
   "target": "hamilton-jacobi-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "目标是把系统变换到作用-角变量",
    "找使新哈密顿量为零的变换"
   ]
  },
  {
   "source": "canonical-transformations",
   "target": "chaos-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "可积性判别"
   ]
  },
  {
   "source": "canonical-transformations",
   "target": "quantum-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "central-force-motion",
   "target": "conservation-laws",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "有心力下角动量守恒",
    "有心力问题大量使用守恒律"
   ]
  },
  {
   "source": "central-force-motion",
   "target": "newtonian-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "万有引力是牛顿力学的核心应用"
   ]
  },
  {
   "source": "central-force-motion",
   "target": "hamiltonian-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "central-force-motion",
   "target": "special-functions",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "central-force-motion",
   "target": "cosmology",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "天体轨道"
   ]
  },
  {
   "source": "black-holes",
   "target": "central-force-motion",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "广义相对论修正轨道"
   ]
  },
  {
   "source": "central-force-motion",
   "target": "quantum-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "氢原子是量子的开普勒问题"
   ]
  },
  {
   "source": "central-force-motion",
   "target": "hydrogen-atom",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "经典对应"
   ]
  },
  {
   "source": "central-force-motion",
   "target": "hamilton-jacobi-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "分离变量解开普勒问题"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "非线性常微分方程",
    "非线性 ODE 与混沌"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "hamiltonian-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "可积与不可积系统",
    "相空间结构"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "turbulence",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "流体湍流的动力学",
    "确定性混沌"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "probability-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "chaos-theory",
   "target": "poisson-brackets",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "conservation-laws",
   "target": "newtonian-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "牛顿定律蕴含守恒律",
    "牛顿第三定律蕴含动量守恒"
   ]
  },
  {
   "source": "conservation-laws",
   "target": "group-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "诺特定理联系对称性与守恒",
    "诺特定理联系对称性与守恒量"
   ]
  },
  {
   "source": "conservation-laws",
   "target": "lagrangian-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "诺特定理在分析力学中自然呈现",
    "诺特定理从对称性推出守恒量"
   ]
  },
  {
   "source": "conservation-laws",
   "target": "special-relativity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "相对论下能量动量统一为四维矢量",
    "能量动量四矢量"
   ]
  },
  {
   "source": "conservation-laws",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "守恒量对应量子数"
   ]
  },
  {
   "source": "conservation-laws",
   "target": "thermodynamics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "hamilton-jacobi-theory",
   "target": "hamiltonian-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "由正则变换推导出",
    "哈密顿-雅可比方程"
   ]
  },
  {
   "source": "hamilton-jacobi-theory",
   "target": "path-integral",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "经典作用量是路径积分的相位",
    "经典作用量是相位"
   ]
  },
  {
   "source": "hamilton-jacobi-theory",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "半经典极限"
   ]
  },
  {
   "source": "hamilton-jacobi-theory",
   "target": "variational-calculus",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "lagrangian-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "由拉格朗日形式经勒让德变换得到",
    "由拉格朗日形式经勒让德变换得到哈密顿形式"
   ]
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "newtonian-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "三种经典表述互相等价",
    "哈密顿力学由牛顿力学经拉格朗日形式发展而来"
   ]
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "poisson-brackets",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "泊松括号是哈密顿力学的代数语言",
    "泊松括号是哈密顿力学的代数语言"
   ]
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": true,
   "soft": false,
   "notes": [
    "正则量子化的出发点",
    "正则量子化来源"
   ]
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "系综理论以相空间为基础",
    "相空间"
   ]
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "tensor-calculus",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "辛几何表述"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "lagrangian-mechanics",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "拉格朗日力学与牛顿力学在物理上等价，是后者的一般化表述",
    "拉格朗日力学是牛顿力学的等价重写，更便于处理约束"
   ]
  },
  {
   "source": "lagrangian-mechanics",
   "target": "variational-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "最小作用量原理是变分法的直接应用",
    "最小作用量原理直接应用变分法"
   ]
  },
  {
   "source": "calculus",
   "target": "lagrangian-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "lagrangian-mechanics",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": true,
   "soft": false,
   "notes": [
    "拉格朗日密度形式是量子场论的出发点"
   ]
  },
  {
   "source": "lagrangian-mechanics",
   "target": "special-relativity",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "newtonian-mechanics",
   "target": "vector-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "牛顿力学的矢量表述依赖矢量微积分",
    "经典力学的矢量表述"
   ]
  },
  {
   "source": "calculus",
   "target": "newtonian-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "微积分是运动学与动力学的数学语言",
    "经典力学的数学语言"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "rigid-body-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "刚体力学是牛顿力学对质点系的推广",
    "刚体力学是牛顿力学对质点系的推广"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "wave-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "波动是力学系统的集体运动",
    "波动是力学系统的集体运动"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "special-relativity",
   "weight": 4,
   "supersede": true,
   "soft": false,
   "notes": [
    "高速情形下由狭义相对论取代",
    "低速极限"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": true,
   "soft": true,
   "notes": [
    "微观尺度由量子力学取代"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "newtonian-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "连续介质力学是牛顿力学对流体系统的推广",
    "力学基础"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "non-inertial-frames",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "牛顿定律只在惯性系成立"
   ]
  },
  {
   "source": "non-inertial-frames",
   "target": "special-relativity",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "惯性系的相对论定义"
   ]
  },
  {
   "source": "equivalence-principle",
   "target": "non-inertial-frames",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "引力与惯性力的等价",
    "惯性力"
   ]
  },
  {
   "source": "non-inertial-frames",
   "target": "rigid-body-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "fluid-mechanics",
   "target": "non-inertial-frames",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "旋转流体",
    "旋转流体"
   ]
  },
  {
   "source": "poisson-brackets",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "正则量子化把泊松括号提升为对易子"
   ]
  },
  {
   "source": "group-theory",
   "target": "poisson-brackets",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "泊松括号构成李代数"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "poisson-brackets",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "角动量对易子",
    "经典对应"
   ]
  },
  {
   "source": "hamilton-jacobi-theory",
   "target": "poisson-brackets",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "rigid-body-mechanics",
   "target": "tensor-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "惯量张量"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "rigid-body-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "经典角动量与量子角动量的对应"
   ]
  },
  {
   "source": "hamiltonian-mechanics",
   "target": "rigid-body-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "group-theory",
   "target": "rigid-body-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "欧拉角与旋转群"
   ]
  },
  {
   "source": "rigid-body-mechanics",
   "target": "vibration-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "rigid-body-mechanics",
   "target": "vector-calculus",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "differential-equations",
   "target": "vibration-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "运动方程是线性常微分方程",
    "振子系统归结为线性 ODE"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "vibration-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "简正模即本征值问题",
    "简正模即本征值问题"
   ]
  },
  {
   "source": "linear-algebra",
   "target": "vibration-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "矩阵对角化求简正坐标",
    "简正坐标归结为矩阵对角化"
   ]
  },
  {
   "source": "newtonian-mechanics",
   "target": "vibration-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-harmonic-oscillator",
   "target": "vibration-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子谐振子",
    "经典对应"
   ]
  },
  {
   "source": "vibration-theory",
   "target": "wave-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "连续极限给出波动方程",
    "连续极限下的简正模"
   ]
  },
  {
   "source": "acoustics",
   "target": "vibration-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "声振动",
    "振动与声"
   ]
  },
  {
   "source": "phonons",
   "target": "vibration-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "晶格振动量子化为声子",
    "经典晶格振动"
   ]
  },
  {
   "source": "partial-differential-equations",
   "target": "wave-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "波动方程是标准双曲型 PDE"
   ]
  },
  {
   "source": "fourier-analysis",
   "target": "wave-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "波动用频谱描述"
   ]
  },
  {
   "source": "acoustics",
   "target": "wave-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "声波是机械波",
    "机械波"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "wave-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁波是横波，无介质"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "wave-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "物质波"
   ]
  },
  {
   "source": "optics",
   "target": "wave-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "波动光学"
   ]
  },
  {
   "source": "band-theory",
   "target": "condensed-matter-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "固体电子结构核心",
    "固体电子结构"
   ]
  },
  {
   "source": "band-theory",
   "target": "semiconductors",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "能带决定导电性",
    "能带结构基础"
   ]
  },
  {
   "source": "band-theory",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "周期性势"
   ]
  },
  {
   "source": "band-theory",
   "target": "crystallography",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "倒格子与周期结构",
    "周期性结构"
   ]
  },
  {
   "source": "band-theory",
   "target": "eigenvalue-problems",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "布洛赫本征值问题",
    "布洛赫本征值问题"
   ]
  },
  {
   "source": "band-theory",
   "target": "topological-materials",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "带拓扑",
    "能带拓扑"
   ]
  },
  {
   "source": "band-theory",
   "target": "superconductivity",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "aharonov-bohm-effect",
   "target": "berry-phase",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "AB效应是贝里相位的特例",
    "几何相位的推广"
   ]
  },
  {
   "source": "berry-phase",
   "target": "topological-materials",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "拓扑不变量来自贝里相位",
    "贝里相位与陈数"
   ]
  },
  {
   "source": "berry-phase",
   "target": "condensed-matter-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "贝里相位是凝聚态物理的核心概念",
    "贝里相位是凝聚态核心概念"
   ]
  },
  {
   "source": "berry-phase",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "绝热定理"
   ]
  },
  {
   "source": "berry-phase",
   "target": "gauge-field-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "berry-phase",
   "target": "quantum-tunneling",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "berry-phase",
   "target": "superconductivity",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "bose-einstein-condensation",
   "target": "quantum-statistics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻色分布"
   ]
  },
  {
   "source": "bose-einstein-condensation",
   "target": "superconductivity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "库珀对凝聚类似"
   ]
  },
  {
   "source": "bose-einstein-condensation",
   "target": "condensed-matter-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "宏观量子现象"
   ]
  },
  {
   "source": "bose-einstein-condensation",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "bose-einstein-condensation",
   "target": "phase-transitions",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "condensed-matter-physics",
   "target": "superconductivity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "重要量子相",
    "凝聚态重要量子相"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "topological-materials",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "拓扑物态",
    "凝聚态前沿"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "crystallography",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "晶体结构",
    "晶体是凝聚态结构基础"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": true,
   "notes": [
    "微观基础"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "quantum-statistics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "电子气体",
    "电子气体"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "second-quantization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "多体方法",
    "多体问题"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "phase-transitions",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "相变"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "phonons",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "晶格振动",
    "晶格动力学"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "semiconductors",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "应用",
    "学科背景"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "crystallography",
   "target": "group-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "空间群对称性",
    "空间群与晶体对称性"
   ]
  },
  {
   "source": "crystallography",
   "target": "electromagnetic-waves",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "X射线衍射"
   ]
  },
  {
   "source": "crystallography",
   "target": "phonons",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "晶格动力学"
   ]
  },
  {
   "source": "crystallography",
   "target": "topology",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "phonons",
   "target": "quantum-harmonic-oscillator",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "模式量子化",
    "晶格振动量子化"
   ]
  },
  {
   "source": "heat-conduction",
   "target": "phonons",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "晶格热导"
   ]
  },
  {
   "source": "phonons",
   "target": "second-quantization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "产生湮灭算符"
   ]
  },
  {
   "source": "phonons",
   "target": "superconductivity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "声子媒介的库珀配对",
    "声子媒介配对"
   ]
  },
  {
   "source": "semiconductors",
   "target": "transport-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "载流子输运",
    "电子输运"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "semiconductors",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "optics",
   "target": "semiconductors",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "光电器件"
   ]
  },
  {
   "source": "quantum-statistics",
   "target": "superconductivity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻色凝聚",
    "玻色-爱因斯坦凝聚"
   ]
  },
  {
   "source": "spontaneous-symmetry-breaking",
   "target": "superconductivity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范对称性破缺",
    "戈德斯通模式在超导中的吸收"
   ]
  },
  {
   "source": "quantum-tunneling",
   "target": "superconductivity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "约瑟夫森效应",
    "约瑟夫森结"
   ]
  },
  {
   "source": "superconductivity",
   "target": "topological-materials",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "拓扑超导",
    "拓扑超导与马约拉纳费米子"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "superconductivity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "topological-materials",
   "target": "topology",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "数学基础",
    "拓扑不变量刻画物态"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "topological-materials",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "拓扑量子比特",
    "拓扑量子比特"
   ]
  },
  {
   "source": "cosmology",
   "target": "general-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论框架",
    "宇宙学"
   ]
  },
  {
   "source": "cosmology",
   "target": "einstein-field-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "弗里德曼方程",
    "弗里德曼方程"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "cosmology",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "宇宙微波背景",
    "宇宙微波背景辐射"
   ]
  },
  {
   "source": "cosmology",
   "target": "particle-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "早期宇宙粒子物理",
    "早期宇宙"
   ]
  },
  {
   "source": "cosmology",
   "target": "special-relativity",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "cosmology",
   "target": "gravitational-waves",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "原初引力波",
    "原初引力波"
   ]
  },
  {
   "source": "cosmology",
   "target": "nuclear-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "原初核合成",
    "原初核合成"
   ]
  },
  {
   "source": "cosmology",
   "target": "nuclear-fusion",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "恒星能量来源",
    "恒星能量来源"
   ]
  },
  {
   "source": "boundary-value-problems",
   "target": "electrostatics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "静电边值问题",
    "泊松/拉普拉斯方程求解"
   ]
  },
  {
   "source": "boundary-value-problems",
   "target": "partial-differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "拉普拉斯/泊松方程"
   ]
  },
  {
   "source": "boundary-value-problems",
   "target": "separation-of-variables",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "主要求解方法"
   ]
  },
  {
   "source": "boundary-value-problems",
   "target": "green-function",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "格林函数法"
   ]
  },
  {
   "source": "boundary-value-problems",
   "target": "mathematical-physics-methods",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "boundary-value-problems",
   "target": "special-functions",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "不同坐标系的函数族"
   ]
  },
  {
   "source": "boundary-value-problems",
   "target": "complex-analysis",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "二维保角映射"
   ]
  },
  {
   "source": "circuits",
   "target": "electrostatics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "电容"
   ]
  },
  {
   "source": "circuits",
   "target": "magnetostatics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "电感"
   ]
  },
  {
   "source": "circuits",
   "target": "electromagnetic-induction",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "电感与互感",
    "变压器与发电机原理"
   ]
  },
  {
   "source": "circuits",
   "target": "differential-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "电路方程"
   ]
  },
  {
   "source": "circuits",
   "target": "electromagnetic-waves",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "交流电路与传输线"
   ]
  },
  {
   "source": "circuits",
   "target": "electromagnetic-media",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "electromagnetic-induction",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "法拉第定律是麦克斯韦方程组的一环",
    "法拉第定律是其中一环"
   ]
  },
  {
   "source": "electromagnetic-induction",
   "target": "lorentz-force",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "动生电动势的来源",
    "动生电动势"
   ]
  },
  {
   "source": "electromagnetic-induction",
   "target": "magnetostatics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "时变磁场耦合电与磁"
   ]
  },
  {
   "source": "electromagnetic-induction",
   "target": "waveguides-resonators",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "electromagnetic-media",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "介质中的麦克斯韦方程组"
   ]
  },
  {
   "source": "electromagnetic-media",
   "target": "electromagnetic-waves",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "介质中波的传播",
    "介质中的传播"
   ]
  },
  {
   "source": "electromagnetic-media",
   "target": "electrostatics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "electromagnetic-media",
   "target": "magnetostatics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "electromagnetic-media",
   "target": "optics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "折射与色散",
    "折射与色散"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "electromagnetic-media",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "electromagnetic-potentials",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "势是方程组的简化表述"
   ]
  },
  {
   "source": "electromagnetic-potentials",
   "target": "magnetostatics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "矢势"
   ]
  },
  {
   "source": "electromagnetic-potentials",
   "target": "electrostatics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "标势"
   ]
  },
  {
   "source": "electromagnetic-potentials",
   "target": "gauge-field-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范自由度的物理诠释",
    "U(1) 规范场的原型"
   ]
  },
  {
   "source": "aharonov-bohm-effect",
   "target": "electromagnetic-potentials",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "势的物理效应",
    "势的物理意义"
   ]
  },
  {
   "source": "electromagnetic-potentials",
   "target": "relativistic-electrodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "四矢势",
    "四矢势"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "辐射由时变源产生"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "electromagnetic-waves",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "辐射场的波动本质",
    "波的产生"
   ]
  },
  {
   "source": "electromagnetic-potentials",
   "target": "electromagnetic-radiation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "推迟势"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "spherical-harmonics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "多极展开",
    "多极展开"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "qed",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子化辐射"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "quantum-optics",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "electromagnetic-waves",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁波由麦克斯韦方程组预言",
    "方程组预言电磁波"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "optics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "光是电磁波",
    "光的电磁本质"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "waveguides-resonators",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "受限电磁波",
    "波导是受限的电磁波"
   ]
  },
  {
   "source": "complex-analysis",
   "target": "electromagnetic-waves",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "复振幅",
    "复振幅与波阻抗"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "special-relativity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光速不变",
    "光速不变"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "fourier-analysis",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "频谱分析",
    "信号频谱分析"
   ]
  },
  {
   "source": "electrostatics",
   "target": "vector-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "高斯定理与梯度"
   ]
  },
  {
   "source": "electrostatics",
   "target": "magnetostatics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "静电与静磁的对偶",
    "静磁与静电对偶"
   ]
  },
  {
   "source": "electrostatics",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "静电场是麦克斯韦方程组的高斯定律特例",
    "静电是麦克斯韦方程组的高斯定律情形"
   ]
  },
  {
   "source": "electrostatics",
   "target": "green-function",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "点源格林函数",
    "泊松方程格林函数"
   ]
  },
  {
   "source": "complex-analysis",
   "target": "electrostatics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "二维保角映射"
   ]
  },
  {
   "source": "electrostatics",
   "target": "multipole-expansion",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "静电势的多极展开"
   ]
  },
  {
   "source": "electrostatics",
   "target": "lorentz-force",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "电场力部分"
   ]
  },
  {
   "source": "lorentz-force",
   "target": "magnetostatics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "磁场力部分",
    "磁场对运动电荷的作用"
   ]
  },
  {
   "source": "lorentz-force",
   "target": "maxwell-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "与麦克斯韦方程组共同构成电磁学",
    "电磁力定律与方程组并列"
   ]
  },
  {
   "source": "lorentz-force",
   "target": "special-relativity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "洛伦兹协变形式"
   ]
  },
  {
   "source": "magnetostatics",
   "target": "maxwell-equations",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "稳恒电流下的麦克斯韦方程组",
    "静磁是稳恒电流情形"
   ]
  },
  {
   "source": "magnetostatics",
   "target": "vector-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "旋度与环路定理"
   ]
  },
  {
   "source": "magnetostatics",
   "target": "special-relativity",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "磁场是电场的相对论效应"
   ]
  },
  {
   "source": "magnetostatics",
   "target": "superconductivity",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "迈斯纳效应"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "vector-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "微分形式的数学语言",
    "麦克斯韦方程组是矢量微积分的典型应用"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "maxwell-equations",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁场是 U(1) 规范场"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "special-relativity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "洛伦兹协变形式"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "relativistic-electrodynamics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "方程组的协变形式"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "量子化为 QED"
   ]
  },
  {
   "source": "multipole-expansion",
   "target": "spherical-harmonics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "球谐函数作为展开基"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "multipole-expansion",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "辐射多极"
   ]
  },
  {
   "source": "multipole-expansion",
   "target": "special-functions",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "multipole-expansion",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁跃迁的多极选择定则"
   ]
  },
  {
   "source": "relativistic-electrodynamics",
   "target": "special-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "洛伦兹协变性",
    "协变电动力学"
   ]
  },
  {
   "source": "relativistic-electrodynamics",
   "target": "tensor-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "张量语言"
   ]
  },
  {
   "source": "lorentz-force",
   "target": "relativistic-electrodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "四维力"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "relativistic-electrodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "maxwell-equations",
   "target": "waveguides-resonators",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "boundary-value-problems",
   "target": "waveguides-resonators",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "边界条件确定模式"
   ]
  },
  {
   "source": "separation-of-variables",
   "target": "waveguides-resonators",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "optics",
   "target": "waveguides-resonators",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "光纤与集成光学"
   ]
  },
  {
   "source": "lasers",
   "target": "waveguides-resonators",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "谐振腔",
    "谐振腔"
   ]
  },
  {
   "source": "acoustics",
   "target": "fluid-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "声波是流体中的压缩波",
    "流体中的波"
   ]
  },
  {
   "source": "acoustics",
   "target": "partial-differential-equations",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "acoustics",
   "target": "fourier-analysis",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "频谱"
   ]
  },
  {
   "source": "acoustics",
   "target": "electromagnetic-waves",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "多普勒效应类比"
   ]
  },
  {
   "source": "continuum-mechanics",
   "target": "fluid-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "流体是连续介质的特例",
    "连续介质力学分支"
   ]
  },
  {
   "source": "continuum-mechanics",
   "target": "vector-calculus",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "场与梯度"
   ]
  },
  {
   "source": "continuum-mechanics",
   "target": "tensor-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "应力应变张量"
   ]
  },
  {
   "source": "continuum-mechanics",
   "target": "partial-differential-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "continuum-mechanics",
   "target": "newtonian-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "continuum-mechanics",
   "target": "wave-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "弹性波"
   ]
  },
  {
   "source": "continuum-mechanics",
   "target": "variational-calculus",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "最小势能原理"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "partial-differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "方程类型",
    "纳维-斯托克斯方程"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "turbulence",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "湍流",
    "流体力学的核心难题"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "vector-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "场描述",
    "流场描述用散度与旋度"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "fluid-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "湍流与混沌"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "heat-conduction",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "对流"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "plasma-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "导电流体的等离子体描述",
    "流体近似"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "magnetohydrodynamics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "磁流体力学是流体+电磁的耦合",
    "流体方程"
   ]
  },
  {
   "source": "partial-differential-equations",
   "target": "turbulence",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "fluctuation-theory",
   "target": "turbulence",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "随机统计"
   ]
  },
  {
   "source": "probability-theory",
   "target": "turbulence",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "atmospheric-physics",
   "target": "geophysics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "地球系统分支",
    "大气物理"
   ]
  },
  {
   "source": "atmospheric-physics",
   "target": "fluid-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "大气流体"
   ]
  },
  {
   "source": "atmospheric-physics",
   "target": "ocean-dynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "海气相互作用",
    "海气相互作用"
   ]
  },
  {
   "source": "atmospheric-physics",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "湿空气热力学"
   ]
  },
  {
   "source": "atmospheric-physics",
   "target": "turbulence",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "边界层湍流"
   ]
  },
  {
   "source": "atmospheric-physics",
   "target": "non-inertial-frames",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "科里奥利效应"
   ]
  },
  {
   "source": "climate-physics",
   "target": "geophysics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "地球系统分支",
    "气候物理"
   ]
  },
  {
   "source": "atmospheric-physics",
   "target": "climate-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "大气过程"
   ]
  },
  {
   "source": "climate-physics",
   "target": "ocean-dynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "海洋过程",
    "海洋-大气耦合"
   ]
  },
  {
   "source": "climate-physics",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "能量平衡"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "climate-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "辐射平衡"
   ]
  },
  {
   "source": "chaos-theory",
   "target": "climate-physics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "气候非线性"
   ]
  },
  {
   "source": "geophysics",
   "target": "ocean-dynamics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "海洋动力学",
    "地球系统分支"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "geophysics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "流体力学基础"
   ]
  },
  {
   "source": "geophysics",
   "target": "turbulence",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "大气海洋湍流"
   ]
  },
  {
   "source": "geophysics",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "辐射与热平衡"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "ocean-dynamics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "流体方程"
   ]
  },
  {
   "source": "non-inertial-frames",
   "target": "ocean-dynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "科里奥利力主导"
   ]
  },
  {
   "source": "ocean-dynamics",
   "target": "turbulence",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "海洋湍流"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "linear-algebra",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "有限维本征值问题即矩阵对角化",
    "本征值问题是线性代数在数学物理中的核心应用"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "special-functions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "本征函数族即特殊函数",
    "特殊函数是斯图姆-刘维尔问题的本征函数"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "separation-of-variables",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "分离变量归结为本征值问题"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "mathematical-physics-methods",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "斯图姆-刘维尔本征值问题"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "定态薛定谔方程即本征值问题"
   ]
  },
  {
   "source": "green-function",
   "target": "partial-differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "线性非齐次 PDE 的通解方法",
    "格林函数法求非齐次 PDE"
   ]
  },
  {
   "source": "green-function",
   "target": "mathematical-physics-methods",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "格林函数法"
   ]
  },
  {
   "source": "green-function",
   "target": "path-integral",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "传播子即含时格林函数",
    "传播子是含时格林函数"
   ]
  },
  {
   "source": "green-function",
   "target": "scattering-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "李普曼-施温格方程",
    "李普曼-施温格方程"
   ]
  },
  {
   "source": "green-function",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "green-function",
   "target": "heat-conduction",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "热传导方程格林函数"
   ]
  },
  {
   "source": "fourier-analysis",
   "target": "integral-transforms",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "傅里叶变换是积分变换的核心成员",
    "傅里叶变换是积分变换的一种"
   ]
  },
  {
   "source": "complex-analysis",
   "target": "integral-transforms",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "拉普拉斯变换的解析延拓与反演"
   ]
  },
  {
   "source": "differential-equations",
   "target": "integral-transforms",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "把微分方程化为代数方程"
   ]
  },
  {
   "source": "integral-transforms",
   "target": "mathematical-physics-methods",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "傅里叶/拉普拉斯变换法"
   ]
  },
  {
   "source": "integral-transforms",
   "target": "partial-differential-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "integral-transforms",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "位置-动量表象变换"
   ]
  },
  {
   "source": "mathematical-physics-methods",
   "target": "partial-differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "数理方法的研究对象",
    "数理方法的核心研究对象"
   ]
  },
  {
   "source": "mathematical-physics-methods",
   "target": "special-functions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "分离变量所得本征函数"
   ]
  },
  {
   "source": "mathematical-physics-methods",
   "target": "spherical-harmonics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "球谐函数是核心工具",
    "球谐函数是数学物理方法的核心工具"
   ]
  },
  {
   "source": "mathematical-physics-methods",
   "target": "separation-of-variables",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "数理方法的核心技术之一"
   ]
  },
  {
   "source": "mathematical-physics-methods",
   "target": "vector-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "complex-analysis",
   "target": "mathematical-physics-methods",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "fourier-analysis",
   "target": "mathematical-physics-methods",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "mathematical-physics-methods",
   "target": "schrodinger-equation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "mathematical-physics-methods",
   "target": "maxwell-equations",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "heat-conduction",
   "target": "mathematical-physics-methods",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "求解方法"
   ]
  },
  {
   "source": "mathematical-physics-methods",
   "target": "variational-calculus",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "separation-of-variables",
   "target": "special-functions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "坐标系决定所得特殊函数族"
   ]
  },
  {
   "source": "partial-differential-equations",
   "target": "separation-of-variables",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "schrodinger-equation",
   "target": "separation-of-variables",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "定态问题即分离变量"
   ]
  },
  {
   "source": "separation-of-variables",
   "target": "spherical-harmonics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "special-functions",
   "target": "spherical-harmonics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "球谐函数是特殊函数的重要成员",
    "球谐函数是特殊函数的重要成员"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "spherical-harmonics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "球谐函数是角动量的本征函数",
    "本征函数"
   ]
  },
  {
   "source": "hydrogen-atom",
   "target": "spherical-harmonics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "氢原子角向部分",
    "角动量本征函数"
   ]
  },
  {
   "source": "calculus",
   "target": "linear-algebra",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "多元微积分的自然延伸与工具",
    "多元微积分与线性代数共同构成数学分析的基础"
   ]
  },
  {
   "source": "calculus",
   "target": "differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "微分方程是微积分的直接应用",
    "微分方程由微积分发展而来"
   ]
  },
  {
   "source": "calculus",
   "target": "vector-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "矢量微积分把微积分推广到场",
    "矢量分析是微积分在矢量场中的推广"
   ]
  },
  {
   "source": "calculus",
   "target": "complex-analysis",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "复分析是微积分在复数域的自然推广"
   ]
  },
  {
   "source": "calculus",
   "target": "fourier-analysis",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "级数与积分在调和分析中的推广",
    "级数与积分理论是其基础"
   ]
  },
  {
   "source": "calculus",
   "target": "variational-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "泛函分析意义上的微积分推广",
    "变分法是微积分极值思想的推广"
   ]
  },
  {
   "source": "calculus",
   "target": "mathematical-physics-methods",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "complex-analysis",
   "target": "special-functions",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "留数法求特殊函数积分",
    "留数法计算特殊函数积分"
   ]
  },
  {
   "source": "complex-analysis",
   "target": "fourier-analysis",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "拉普拉斯变换用复平面分析"
   ]
  },
  {
   "source": "complex-analysis",
   "target": "quantum-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "differential-equations",
   "target": "partial-differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "偏微分方程是 ODE 向多变量情形的推广",
    "常微分方程是 PDE 的特例（分离变量后）"
   ]
  },
  {
   "source": "differential-equations",
   "target": "linear-algebra",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "线性方程组用矩阵方法求解",
    "常系数线性微分方程组用矩阵指数求解"
   ]
  },
  {
   "source": "differential-equations",
   "target": "newtonian-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "牛顿第二定律即二阶常微分方程"
   ]
  },
  {
   "source": "differential-equations",
   "target": "special-functions",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "differential-equations",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "differential-geometry",
   "target": "tensor-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "黎曼几何以张量分析为计算语言",
    "黎曼几何以张量分析为语言"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "general-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "引力几何化为弯曲时空",
    "数学语言"
   ]
  },
  {
   "source": "calculus",
   "target": "differential-geometry",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "differential-geometry",
   "target": "topology",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "流形概念来源于拓扑",
    "流形是带拓扑结构的对象"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "gauge-field-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "纤维丛与规范联络",
    "纤维丛与联络"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "hamiltonian-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "相空间的辛结构与几何化"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "string-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "卡拉比-丘流形"
   ]
  },
  {
   "source": "fourier-analysis",
   "target": "partial-differential-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "线性 PDE 的标准解法",
    "傅里叶方法求解线性 PDE"
   ]
  },
  {
   "source": "fourier-analysis",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "动量与位置表象互为傅里叶对偶"
   ]
  },
  {
   "source": "fourier-analysis",
   "target": "optics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "夫琅禾费衍射即空间傅里叶变换"
   ]
  },
  {
   "source": "group-theory",
   "target": "linear-algebra",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "表示论基于线性代数",
    "线性变换构成一般线性群"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "group-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "旋转群 SO(3) 与角动量",
    "旋转群 SO(3) 的表示"
   ]
  },
  {
   "source": "group-theory",
   "target": "standard-model",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范群 SU(3)×SU(2)×U(1)",
    "规范群表示"
   ]
  },
  {
   "source": "group-theory",
   "target": "special-functions",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "information-theory",
   "target": "probability-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "信息论以概率论为基础",
    "熵与信息的联系"
   ]
  },
  {
   "source": "entropy-information",
   "target": "information-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "熵的统计与信息两种诠释",
    "香农熵"
   ]
  },
  {
   "source": "information-theory",
   "target": "quantum-information",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子信息是信息论的量子推广",
    "经典信息论的推广"
   ]
  },
  {
   "source": "information-theory",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "information-theory",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "linear-algebra",
   "target": "tensor-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "张量可视为多重线性映射的推广",
    "张量是多重线性代数的推广"
   ]
  },
  {
   "source": "linear-algebra",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学态空间是希尔伯特空间，算符是线性算子",
    "态空间与算符"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "partial-differential-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "maxwell-equations",
   "target": "partial-differential-equations",
   "weight": 4,
   "supersede": false,
   "soft": true,
   "notes": [
    "波动方程/亥姆霍兹方程"
   ]
  },
  {
   "source": "partial-differential-equations",
   "target": "schrodinger-equation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "数学类型"
   ]
  },
  {
   "source": "heat-conduction",
   "target": "partial-differential-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "抛物型方程"
   ]
  },
  {
   "source": "probability-theory",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "统计物理以概率论为语言",
    "统计语言"
   ]
  },
  {
   "source": "fluctuation-theory",
   "target": "probability-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "涨落与随机过程",
    "随机过程"
   ]
  },
  {
   "source": "probability-theory",
   "target": "quantum-measurement",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "波函数的概率诠释"
   ]
  },
  {
   "source": "probability-theory",
   "target": "quantum-computing",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "probability-theory",
   "target": "set-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "概率的公理化基础",
    "测度论基础"
   ]
  },
  {
   "source": "kinetic-theory",
   "target": "probability-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "calculus",
   "target": "set-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "实数系的严格基础"
   ]
  },
  {
   "source": "linear-algebra",
   "target": "set-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "set-theory",
   "target": "topology",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "拓扑学建立于集合论之上",
    "拓扑空间定义在集合上"
   ]
  },
  {
   "source": "group-theory",
   "target": "set-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "hydrogen-atom",
   "target": "special-functions",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "氢原子波函数含拉盖尔/球谐函数",
    "径向解含拉盖尔函数"
   ]
  },
  {
   "source": "quantum-harmonic-oscillator",
   "target": "special-functions",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "厄米多项式",
    "厄米多项式"
   ]
  },
  {
   "source": "partial-differential-equations",
   "target": "special-functions",
   "weight": 4,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "electromagnetic-waves",
   "target": "special-functions",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "贝塞尔函数用于柱坐标"
   ]
  },
  {
   "source": "tensor-calculus",
   "target": "vector-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "矢量分析是张量分析的特例",
    "矢量分析是张量分析在三维欧氏空间的退化情形"
   ]
  },
  {
   "source": "general-relativity",
   "target": "tensor-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "爱因斯坦场方程是张量方程",
    "计算工具"
   ]
  },
  {
   "source": "special-relativity",
   "target": "tensor-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "洛伦兹协变表述",
    "四维张量"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "tensor-calculus",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "string-theory",
   "target": "topology",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "calculus",
   "target": "topology",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "连续性的推广"
   ]
  },
  {
   "source": "general-relativity",
   "target": "variational-calculus",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "测地线与爱因斯坦场方程由变分原理导出"
   ]
  },
  {
   "source": "qm-variational-method",
   "target": "variational-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学中用于近似基态",
    "变分原理"
   ]
  },
  {
   "source": "partial-differential-equations",
   "target": "variational-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "弱解与能量泛函"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "vector-calculus",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "微分形式统一了梯度/散度/旋度"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "nuclear-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "核心过程",
    "放射性衰变"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "quantum-tunneling",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "α 衰变是隧穿效应",
    "α 衰变即势垒隧穿"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "衰变规律的量子起源"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "standard-model",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "β 衰变由弱相互作用驱动"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "nuclear-structure",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "衰变反映结构",
    "衰变反映结构"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "probability-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "指数衰变规律"
   ]
  },
  {
   "source": "nuclear-fission",
   "target": "nuclear-reactions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "裂变是一类核反应",
    "裂变是核反应"
   ]
  },
  {
   "source": "nuclear-fission",
   "target": "nuclear-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "核裂变"
   ]
  },
  {
   "source": "nuclear-fission",
   "target": "nuclear-structure",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "液滴模型解释裂变"
   ]
  },
  {
   "source": "nuclear-decay",
   "target": "nuclear-fission",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "裂变产物继续衰变"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "nuclear-reactions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "聚变是一类核反应",
    "聚变是核反应"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "nuclear-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "核聚变"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "plasma-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "聚变燃料是高温等离子体"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "plasma-confinement",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "磁约束实现聚变",
    "受控聚变的实现途径"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "quantum-tunneling",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "库仑势垒隧穿"
   ]
  },
  {
   "source": "nuclear-fusion",
   "target": "nuclear-structure",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "nuclear-models",
   "target": "nuclear-structure",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "描述核结构的模型",
    "结构模型"
   ]
  },
  {
   "source": "nuclear-models",
   "target": "nuclear-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "核模型"
   ]
  },
  {
   "source": "nuclear-models",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "壳模型的量子基础"
   ]
  },
  {
   "source": "nuclear-models",
   "target": "standard-model",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "底层为QCD"
   ]
  },
  {
   "source": "nuclear-models",
   "target": "superconductivity",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "对关联类比BCS"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "nuclear-models",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "壳模型角动量"
   ]
  },
  {
   "source": "nuclear-physics",
   "target": "nuclear-structure",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "原子核的结构",
    "学科核心"
   ]
  },
  {
   "source": "nuclear-physics",
   "target": "nuclear-reactions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "核反应",
    "核心过程"
   ]
  },
  {
   "source": "nuclear-physics",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "微观理论基础",
    "量子力学的多体应用"
   ]
  },
  {
   "source": "nuclear-physics",
   "target": "standard-model",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "强相互作用(QCD)是核力的基本描述"
   ]
  },
  {
   "source": "elementary-particles",
   "target": "nuclear-physics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "核子由夸克组成"
   ]
  },
  {
   "source": "nuclear-physics",
   "target": "scattering-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "核散射实验方法"
   ]
  },
  {
   "source": "nuclear-reactions",
   "target": "scattering-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "散射与截面"
   ]
  },
  {
   "source": "nuclear-reactions",
   "target": "nuclear-structure",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "nuclear-reactions",
   "target": "standard-model",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "nuclear-structure",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子多体问题"
   ]
  },
  {
   "source": "identical-particles",
   "target": "nuclear-structure",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "核子是全同费米子"
   ]
  },
  {
   "source": "nuclear-structure",
   "target": "spin",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "核自旋"
   ]
  },
  {
   "source": "geometric-optics",
   "target": "optics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "光学分支",
    "光的直线传播近似"
   ]
  },
  {
   "source": "geometric-optics",
   "target": "wave-optics",
   "weight": 4,
   "supersede": true,
   "soft": false,
   "notes": [
    "波动极限",
    "几何光学是极限"
   ]
  },
  {
   "source": "geometric-optics",
   "target": "variational-calculus",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "费马原理"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "geometric-optics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "geometric-optics",
   "target": "lasers",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "光束传播"
   ]
  },
  {
   "source": "lasers",
   "target": "quantum-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光场量子性质",
    "相干光源"
   ]
  },
  {
   "source": "lasers",
   "target": "optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "应用领域",
    "相干光源"
   ]
  },
  {
   "source": "lasers",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻尔兹曼分布与粒子数反转"
   ]
  },
  {
   "source": "lasers",
   "target": "quantum-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "受激辐射的量子基础"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "lasers",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "optics",
   "target": "wave-optics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "干涉衍射",
    "光学分支"
   ]
  },
  {
   "source": "optics",
   "target": "quantum-optics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "光的量子理论",
    "光学分支"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "optics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "quantum-mechanics",
   "target": "quantum-optics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础"
   ]
  },
  {
   "source": "qed",
   "target": "quantum-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光与物质相互作用"
   ]
  },
  {
   "source": "quantum-harmonic-oscillator",
   "target": "quantum-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光场模式量子化"
   ]
  },
  {
   "source": "quantum-information",
   "target": "quantum-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "光子量子信息"
   ]
  },
  {
   "source": "entanglement",
   "target": "quantum-optics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "atomic-physics",
   "target": "quantum-optics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "光与原子相互作用"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "wave-optics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "光的波动本质"
   ]
  },
  {
   "source": "fourier-analysis",
   "target": "wave-optics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "夫琅禾费衍射即傅里叶变换"
   ]
  },
  {
   "source": "electromagnetic-media",
   "target": "wave-optics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "折射偏振"
   ]
  },
  {
   "source": "elementary-particles",
   "target": "standard-model",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "粒子清单的理论框架",
    "粒子清单"
   ]
  },
  {
   "source": "elementary-particles",
   "target": "particle-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "学科对象",
    "粒子分类"
   ]
  },
  {
   "source": "elementary-particles",
   "target": "quantum-field-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "elementary-particles",
   "target": "spin",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "自旋决定费米/玻色"
   ]
  },
  {
   "source": "elementary-particles",
   "target": "identical-particles",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "elementary-particles",
   "target": "spontaneous-symmetry-breaking",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "希格斯玻色子"
   ]
  },
  {
   "source": "particle-physics",
   "target": "standard-model",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论框架",
    "粒子物理的理论框架"
   ]
  },
  {
   "source": "particle-physics",
   "target": "quantum-field-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "particle-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "计算工具"
   ]
  },
  {
   "source": "particle-physics",
   "target": "scattering-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "实验方法"
   ]
  },
  {
   "source": "particle-physics",
   "target": "string-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "超越标准模型"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "standard-model",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范群 SU(3)×SU(2)×U(1)",
    "规范群 SU(3)×SU(2)×U(1)"
   ]
  },
  {
   "source": "quantum-field-theory",
   "target": "standard-model",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础",
    "粒子物理的场论框架"
   ]
  },
  {
   "source": "spontaneous-symmetry-breaking",
   "target": "standard-model",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "电弱对称性破缺",
    "质量起源"
   ]
  },
  {
   "source": "renormalization",
   "target": "standard-model",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "可重整化",
    "可重整化性"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "standard-model",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "计算"
   ]
  },
  {
   "source": "cosmology",
   "target": "standard-model",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "早期宇宙物理"
   ]
  },
  {
   "source": "debye-screening",
   "target": "plasma-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "等离子体的基本特征",
    "等离子体准中性"
   ]
  },
  {
   "source": "debye-screening",
   "target": "electrostatics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "屏蔽势"
   ]
  },
  {
   "source": "debye-screening",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻尔兹曼分布"
   ]
  },
  {
   "source": "debye-screening",
   "target": "plasma-oscillations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "准中性背景"
   ]
  },
  {
   "source": "magnetohydrodynamics",
   "target": "plasma-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "磁化等离子体的流体描述",
    "磁化等离子体的流体描述"
   ]
  },
  {
   "source": "magnetohydrodynamics",
   "target": "maxwell-equations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁场"
   ]
  },
  {
   "source": "magnetohydrodynamics",
   "target": "turbulence",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "MHD 湍流"
   ]
  },
  {
   "source": "magnetohydrodynamics",
   "target": "plasma-confinement",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "聚变平衡",
    "平衡与稳定性"
   ]
  },
  {
   "source": "plasma-confinement",
   "target": "plasma-physics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "等离子体基础",
    "磁约束"
   ]
  },
  {
   "source": "plasma-confinement",
   "target": "plasma-oscillations",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "加热与波"
   ]
  },
  {
   "source": "plasma-oscillations",
   "target": "plasma-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "集体行为",
    "集体振荡"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "plasma-oscillations",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "等离子体中的波"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "plasma-oscillations",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁场"
   ]
  },
  {
   "source": "electromagnetic-radiation",
   "target": "plasma-oscillations",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "maxwell-equations",
   "target": "plasma-physics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁场方程"
   ]
  },
  {
   "source": "plasma-physics",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "分布函数与统计"
   ]
  },
  {
   "source": "plasma-physics",
   "target": "turbulence",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "等离子体湍流"
   ]
  },
  {
   "source": "electromagnetic-waves",
   "target": "plasma-physics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "等离子体中的波"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "quantum-field-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "场论微扰计算工具",
    "计算方法"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "qed",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "应用范例",
    "计算方法"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "scattering-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "散射振幅",
    "场论散射振幅"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "path-integral",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "微扰展开来源"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "renormalization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "圈图与发散",
    "圈图发散"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "quantum-field-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "场论框架",
    "规范场论"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "group-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范群"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "spontaneous-symmetry-breaking",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "质量起源",
    "规范场获得质量"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "qed",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "阿贝尔情形",
    "U(1) 规范理论"
   ]
  },
  {
   "source": "qed",
   "target": "quantum-field-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "电磁相互作用的场论",
    "第一个成功的量子场论"
   ]
  },
  {
   "source": "maxwell-equations",
   "target": "qed",
   "weight": 4,
   "supersede": true,
   "soft": false,
   "notes": [
    "经典极限"
   ]
  },
  {
   "source": "hydrogen-atom",
   "target": "qed",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "兰姆位移",
    "兰姆位移"
   ]
  },
  {
   "source": "qed",
   "target": "special-relativity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "相对论量子力学"
   ]
  },
  {
   "source": "qed",
   "target": "spin",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "狄拉克方程导出自旋"
   ]
  },
  {
   "source": "path-integral",
   "target": "quantum-field-theory",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "表述工具",
    "场论的核心表述"
   ]
  },
  {
   "source": "quantum-field-theory",
   "target": "second-quantization",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "技术桥梁",
    "场量子化的起点"
   ]
  },
  {
   "source": "quantum-field-theory",
   "target": "renormalization",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论自洽性",
    "场论自洽性"
   ]
  },
  {
   "source": "quantum-field-theory",
   "target": "spontaneous-symmetry-breaking",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "质量起源"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "凝聚态场论"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": true,
   "soft": true,
   "notes": [
    "单粒子极限"
   ]
  },
  {
   "source": "special-relativity",
   "target": "quantum-field-theory",
   "weight": 4,
   "supersede": true,
   "soft": false,
   "notes": [
    "洛伦兹协变"
   ]
  },
  {
   "source": "quantum-field-theory",
   "target": "string-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "场论的一般化"
   ]
  },
  {
   "source": "qed",
   "target": "renormalization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "原始应用"
   ]
  },
  {
   "source": "critical-phenomena",
   "target": "renormalization",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "重正化群用于临界现象",
    "重正化群解释临界现象"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "renormalization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "重正化群"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "spontaneous-symmetry-breaking",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "凝聚态类比"
   ]
  },
  {
   "source": "group-theory",
   "target": "spontaneous-symmetry-breaking",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "general-relativity",
   "target": "string-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "目标之一是量子引力"
   ]
  },
  {
   "source": "black-holes",
   "target": "string-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "黑洞熵的微观计数",
    "量子引力研究"
   ]
  },
  {
   "source": "gauge-field-theory",
   "target": "string-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "对偶性"
   ]
  },
  {
   "source": "quantum-gravity",
   "target": "string-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子引力候选",
    "弦理论是主要候选"
   ]
  },
  {
   "source": "loop-quantum-gravity",
   "target": "quantum-gravity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子引力候选",
    "圈量子引力是另一候选"
   ]
  },
  {
   "source": "general-relativity",
   "target": "loop-quantum-gravity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "待量子化理论"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "loop-quantum-gravity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "联络与变量"
   ]
  },
  {
   "source": "loop-quantum-gravity",
   "target": "string-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "另一候选"
   ]
  },
  {
   "source": "group-theory",
   "target": "loop-quantum-gravity",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范群表示"
   ]
  },
  {
   "source": "general-relativity",
   "target": "quantum-gravity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "待量子化的引力",
    "待与量子力学统一"
   ]
  },
  {
   "source": "quantum-field-theory",
   "target": "quantum-gravity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子化框架"
   ]
  },
  {
   "source": "black-holes",
   "target": "quantum-gravity",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "黑洞信息悖论",
    "黑洞信息悖论"
   ]
  },
  {
   "source": "cosmology",
   "target": "quantum-gravity",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "宇宙早期"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "quantum-information",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论框架",
    "应用"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "物理基础"
   ]
  },
  {
   "source": "entanglement",
   "target": "quantum-computing",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "纠缠资源"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "quantum-error-correction",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "容错计算",
    "容错计算的基础"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "quantum-measurement",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "退相干",
    "退相干是量子计算的主要障碍"
   ]
  },
  {
   "source": "quantum-computing",
   "target": "spin",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子比特实现",
    "量子比特的物理实现"
   ]
  },
  {
   "source": "quantum-cryptography",
   "target": "quantum-information",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论框架",
    "应用"
   ]
  },
  {
   "source": "entanglement",
   "target": "quantum-cryptography",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "纠缠密钥分发"
   ]
  },
  {
   "source": "bell-inequalities",
   "target": "quantum-cryptography",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "安全证明"
   ]
  },
  {
   "source": "quantum-cryptography",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "不可克隆定理"
   ]
  },
  {
   "source": "information-theory",
   "target": "quantum-cryptography",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-error-correction",
   "target": "quantum-information",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论框架",
    "应用"
   ]
  },
  {
   "source": "quantum-error-correction",
   "target": "quantum-measurement",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "退相干与测量"
   ]
  },
  {
   "source": "density-matrix",
   "target": "quantum-error-correction",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-information",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础"
   ]
  },
  {
   "source": "entanglement",
   "target": "quantum-information",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "纠缠是核心资源",
    "纠缠是量子资源"
   ]
  },
  {
   "source": "density-matrix",
   "target": "quantum-information",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子态表示",
    "量子态分辨"
   ]
  },
  {
   "source": "bell-inequalities",
   "target": "quantum-information",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "aharonov-bohm-effect",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子干涉实验"
   ]
  },
  {
   "source": "aharonov-bohm-effect",
   "target": "gauge-field-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "规范原理"
   ]
  },
  {
   "source": "aharonov-bohm-effect",
   "target": "topological-materials",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "拓扑相"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "角动量是量子力学的核心可观察量"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "spin",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "自旋是内禀角动量",
    "自旋是角动量理论的一部分"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "hydrogen-atom",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "轨道角动量",
    "角向波函数"
   ]
  },
  {
   "source": "angular-momentum-qm",
   "target": "identical-particles",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "bell-inequalities",
   "target": "entanglement",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "纠缠态违反贝尔不等式"
   ]
  },
  {
   "source": "bell-inequalities",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学的非定域性"
   ]
  },
  {
   "source": "bell-inequalities",
   "target": "quantum-measurement",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "bell-inequalities",
   "target": "probability-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "隐变量与局部因果"
   ]
  },
  {
   "source": "density-matrix",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "混合态的完整描述"
   ]
  },
  {
   "source": "density-matrix",
   "target": "entanglement",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "约化密度矩阵度量纠缠",
    "约化密度矩阵与纠缠度量"
   ]
  },
  {
   "source": "density-matrix",
   "target": "quantum-measurement",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "退相干",
    "退相干的数学描述"
   ]
  },
  {
   "source": "density-matrix",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "密度算符与量子统计",
    "量子系综"
   ]
  },
  {
   "source": "density-matrix",
   "target": "operators-and-measurement",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "混合态与测量"
   ]
  },
  {
   "source": "entanglement",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子理论的推论"
   ]
  },
  {
   "source": "entanglement",
   "target": "quantum-measurement",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "测量与纠缠",
    "测量装置与被测系统的纠缠"
   ]
  },
  {
   "source": "aharonov-bohm-effect",
   "target": "entanglement",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "hydrogen-atom",
   "target": "schrodinger-equation",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "精确求解的典范",
    "精确可解的重要例子"
   ]
  },
  {
   "source": "hydrogen-atom",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "hydrogen-atom",
   "target": "perturbation-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "精细结构与超精细结构",
    "精细结构等修正"
   ]
  },
  {
   "source": "identical-particles",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "多体量子力学"
   ]
  },
  {
   "source": "identical-particles",
   "target": "spin",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "自旋-统计联系",
    "自旋-统计定理"
   ]
  },
  {
   "source": "identical-particles",
   "target": "quantum-statistics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻色/费米分布",
    "全同性是量子统计的前提"
   ]
  },
  {
   "source": "identical-particles",
   "target": "second-quantization",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "场量子化描述多体系统",
    "天然处理全同粒子"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "identical-particles",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "matrix-mechanics",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "与波动力学等价的表述",
    "海森堡表述"
   ]
  },
  {
   "source": "linear-algebra",
   "target": "matrix-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "矩阵方法"
   ]
  },
  {
   "source": "matrix-mechanics",
   "target": "poisson-brackets",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "对易子对应"
   ]
  },
  {
   "source": "matrix-mechanics",
   "target": "schrodinger-equation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "两种表述等价"
   ]
  },
  {
   "source": "operators-and-measurement",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学的公设体系",
    "测量理论"
   ]
  },
  {
   "source": "linear-algebra",
   "target": "operators-and-measurement",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "厄米算符与谱分解"
   ]
  },
  {
   "source": "operators-and-measurement",
   "target": "quantum-measurement",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "测量的动力学问题",
    "投影测量公设"
   ]
  },
  {
   "source": "entanglement",
   "target": "operators-and-measurement",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "operators-and-measurement",
   "target": "schrodinger-equation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "演化与测量互补",
    "算符形式"
   ]
  },
  {
   "source": "path-integral",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学的费曼表述",
    "费曼路径积分表述"
   ]
  },
  {
   "source": "path-integral",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "虚时路径积分与配分函数"
   ]
  },
  {
   "source": "path-integral",
   "target": "variational-calculus",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "perturbation-theory",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学的主要近似方法"
   ]
  },
  {
   "source": "perturbation-theory",
   "target": "schrodinger-equation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "perturbation-theory",
   "target": "scattering-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻恩近似"
   ]
  },
  {
   "source": "perturbation-theory",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "场论微扰展开"
   ]
  },
  {
   "source": "feynman-diagrams",
   "target": "perturbation-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "微扰论的图形化"
   ]
  },
  {
   "source": "qm-variational-method",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "求基态的近似方法"
   ]
  },
  {
   "source": "perturbation-theory",
   "target": "qm-variational-method",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "另一种近似方法"
   ]
  },
  {
   "source": "hydrogen-atom",
   "target": "qm-variational-method",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "qm-variational-method",
   "target": "schrodinger-equation",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-harmonic-oscillator",
   "target": "schrodinger-equation",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "精确可解模型"
   ]
  },
  {
   "source": "quantum-harmonic-oscillator",
   "target": "quantum-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-harmonic-oscillator",
   "target": "second-quantization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "产生湮灭算符",
    "模式量子化"
   ]
  },
  {
   "source": "quantum-measurement",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "测量问题是量子力学的核心疑难",
    "退相干与测量问题"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "schrodinger-equation",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子力学的基本方程",
    "量子力学的基本方程"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "spin",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-mechanics",
   "target": "second-quantization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "多体量子力学的表述"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "量子统计"
   ]
  },
  {
   "source": "quantum-tunneling",
   "target": "schrodinger-equation",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "隧穿由波动性产生"
   ]
  },
  {
   "source": "quantum-mechanics",
   "target": "quantum-tunneling",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "quantum-mechanics",
   "target": "scattering-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子散射理论"
   ]
  },
  {
   "source": "scattering-theory",
   "target": "standard-model",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "粒子物理中的散射实验"
   ]
  },
  {
   "source": "eigenvalue-problems",
   "target": "schrodinger-equation",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "定态即本征值问题"
   ]
  },
  {
   "source": "schrodinger-equation",
   "target": "wave-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "物质波"
   ]
  },
  {
   "source": "special-relativity",
   "target": "spin",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "狄拉克方程导出自旋"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "spin",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "磁性"
   ]
  },
  {
   "source": "black-holes",
   "target": "general-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "引力坍缩的极端解",
    "极端引力"
   ]
  },
  {
   "source": "black-holes",
   "target": "einstein-field-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "施瓦西解",
    "施瓦西解"
   ]
  },
  {
   "source": "black-holes",
   "target": "gravitational-waves",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "并合辐射",
    "并合事件"
   ]
  },
  {
   "source": "black-holes",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "黑洞热力学"
   ]
  },
  {
   "source": "black-holes",
   "target": "quantum-field-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "霍金辐射"
   ]
  },
  {
   "source": "black-holes",
   "target": "entropy-information",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "黑洞熵",
    "黑洞熵"
   ]
  },
  {
   "source": "black-holes",
   "target": "cosmology",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "einstein-field-equations",
   "target": "general-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "广义相对论的核心方程",
    "核心方程"
   ]
  },
  {
   "source": "einstein-field-equations",
   "target": "tensor-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "张量方程"
   ]
  },
  {
   "source": "differential-geometry",
   "target": "einstein-field-equations",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "曲率"
   ]
  },
  {
   "source": "einstein-field-equations",
   "target": "gravitational-waves",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "弱场线性化解",
    "弱场线性化解"
   ]
  },
  {
   "source": "einstein-field-equations",
   "target": "variational-calculus",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "爱因斯坦-希尔伯特作用量"
   ]
  },
  {
   "source": "equivalence-principle",
   "target": "general-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "广义相对论的出发点",
    "出发点"
   ]
  },
  {
   "source": "equivalence-principle",
   "target": "newtonian-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "惯性质量等于引力质量"
   ]
  },
  {
   "source": "special-relativity",
   "target": "general-relativity",
   "weight": 4,
   "supersede": true,
   "soft": false,
   "notes": [
    "平直时空极限",
    "推广到引力"
   ]
  },
  {
   "source": "general-relativity",
   "target": "gravitational-waves",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "引力波",
    "预言来源"
   ]
  },
  {
   "source": "central-force-motion",
   "target": "general-relativity",
   "weight": 3,
   "supersede": true,
   "soft": false,
   "notes": [
    "轨道修正"
   ]
  },
  {
   "source": "gravitational-waves",
   "target": "wave-mechanics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "波动一般理论"
   ]
  },
  {
   "source": "minkowski-spacetime",
   "target": "special-relativity",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "狭义相对论的几何表述",
    "四维时空"
   ]
  },
  {
   "source": "general-relativity",
   "target": "minkowski-spacetime",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "弯曲时空的平直极限"
   ]
  },
  {
   "source": "minkowski-spacetime",
   "target": "tensor-calculus",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "洛伦兹张量"
   ]
  },
  {
   "source": "minkowski-spacetime",
   "target": "relativistic-electrodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "四维电磁场"
   ]
  },
  {
   "source": "colloids",
   "target": "soft-matter",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "软物质核心",
    "胶体"
   ]
  },
  {
   "source": "colloids",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "统计描述"
   ]
  },
  {
   "source": "colloids",
   "target": "fluctuation-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "布朗运动"
   ]
  },
  {
   "source": "colloids",
   "target": "fluid-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "悬浮液流体"
   ]
  },
  {
   "source": "colloids",
   "target": "electrostatics",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "双电层"
   ]
  },
  {
   "source": "liquid-crystals",
   "target": "soft-matter",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "软物质核心",
    "液晶"
   ]
  },
  {
   "source": "liquid-crystals",
   "target": "phase-transitions",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "相变与序"
   ]
  },
  {
   "source": "liquid-crystals",
   "target": "optics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "双折射与显示"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "liquid-crystals",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "取向序"
   ]
  },
  {
   "source": "polymers",
   "target": "soft-matter",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "软物质核心",
    "聚合物物理"
   ]
  },
  {
   "source": "polymers",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "构象统计"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "polymers",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻璃化与相分离"
   ]
  },
  {
   "source": "polymers",
   "target": "probability-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "随机行走模型"
   ]
  },
  {
   "source": "self-assembly",
   "target": "soft-matter",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "软物质核心现象",
    "自组装"
   ]
  },
  {
   "source": "self-assembly",
   "target": "statistical-mechanics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "熵驱动"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "self-assembly",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "soft-matter",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "理论基础",
    "软物质与熵驱动现象"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "soft-matter",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "相变"
   ]
  },
  {
   "source": "fluid-mechanics",
   "target": "soft-matter",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "软物质流体"
   ]
  },
  {
   "source": "continuum-mechanics",
   "target": "soft-matter",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": [
    "流变学"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "quantum-statistics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "光子气体是玻色系统",
    "光子气体是玻色系统"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "统计处理"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "quantum-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "普朗克量子假设揭开量子力学序幕"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "electromagnetic-waves",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "辐射场"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "lasers",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "kinetic-theory",
   "target": "boltzmann-equation",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "动力学基础",
    "动力学方程"
   ]
  },
  {
   "source": "boltzmann-equation",
   "target": "transport-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "输运系数的推导",
    "输运系数的动力学推导"
   ]
  },
  {
   "source": "boltzmann-equation",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "动力学"
   ]
  },
  {
   "source": "boltzmann-equation",
   "target": "nonequilibrium-thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "微观动力学"
   ]
  },
  {
   "source": "boltzmann-equation",
   "target": "fluctuation-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "critical-phenomena",
   "target": "phase-transitions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "连续相变在临界点的行为",
    "临界行为"
   ]
  },
  {
   "source": "critical-phenomena",
   "target": "fluctuation-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "临界涨落",
    "临界点涨落发散"
   ]
  },
  {
   "source": "critical-phenomena",
   "target": "ising-model",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "原型模型"
   ]
  },
  {
   "source": "critical-phenomena",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "ensembles",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "统计力学的基本方法",
    "系综理论"
   ]
  },
  {
   "source": "ensembles",
   "target": "thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "输出热力学量"
   ]
  },
  {
   "source": "ensembles",
   "target": "ideal-gas",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "各系综下的计算"
   ]
  },
  {
   "source": "ensembles",
   "target": "quantum-statistics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "ensembles",
   "target": "probability-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "entropy-information",
   "target": "thermodynamics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "熵是热力学的核心量",
    "熵的概念"
   ]
  },
  {
   "source": "entropy-information",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "玻尔兹曼熵"
   ]
  },
  {
   "source": "density-matrix",
   "target": "entropy-information",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "冯诺依曼熵"
   ]
  },
  {
   "source": "entropy-information",
   "target": "quantum-information",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "fluctuation-theory",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "平衡涨落",
    "涨落"
   ]
  },
  {
   "source": "fluctuation-theory",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "涨落与热力学量的关联"
   ]
  },
  {
   "source": "fluctuation-theory",
   "target": "quantum-measurement",
   "weight": 2,
   "supersede": false,
   "soft": true,
   "notes": []
  },
  {
   "source": "fluctuation-theory",
   "target": "transport-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "涨落-耗散",
    "涨落-耗散定理"
   ]
  },
  {
   "source": "fluctuation-theory",
   "target": "phase-transitions",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "临界涨落"
   ]
  },
  {
   "source": "heat-conduction",
   "target": "transport-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "输运过程",
    "热传导"
   ]
  },
  {
   "source": "heat-conduction",
   "target": "thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "热传导是热力学过程",
    "传热"
   ]
  },
  {
   "source": "heat-conduction",
   "target": "kinetic-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "微观机制"
   ]
  },
  {
   "source": "heat-conduction",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "热传导与扩散是统计力学内容",
    "热传导的统计描述"
   ]
  },
  {
   "source": "fluctuation-theory",
   "target": "heat-conduction",
   "weight": 3,
   "supersede": false,
   "soft": true,
   "notes": [
    "随机行走"
   ]
  },
  {
   "source": "ideal-gas",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "最简单的统计力学模型",
    "基本模型"
   ]
  },
  {
   "source": "ideal-gas",
   "target": "thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "宏观状态方程"
   ]
  },
  {
   "source": "ideal-gas",
   "target": "kinetic-theory",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "分子运动论",
    "气体动理论的对象"
   ]
  },
  {
   "source": "ideal-gas",
   "target": "quantum-statistics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子修正"
   ]
  },
  {
   "source": "boltzmann-equation",
   "target": "ideal-gas",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "ising-model",
   "target": "phase-transitions",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "相变的原型模型",
    "相变的原型模型"
   ]
  },
  {
   "source": "ising-model",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "统计力学重要模型"
   ]
  },
  {
   "source": "ising-model",
   "target": "renormalization",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "重正化群研究其临界行为"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "ising-model",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "磁性模型"
   ]
  },
  {
   "source": "ising-model",
   "target": "probability-theory",
   "weight": 2,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "kinetic-theory",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "kinetic-theory",
   "target": "transport-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "气体输运"
   ]
  },
  {
   "source": "kinetic-theory",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "nonequilibrium-thermodynamics",
   "target": "thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "平衡热力学的推广"
   ]
  },
  {
   "source": "nonequilibrium-thermodynamics",
   "target": "transport-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "输运与熵产生"
   ]
  },
  {
   "source": "fluctuation-theory",
   "target": "nonequilibrium-thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "涨落与线性响应"
   ]
  },
  {
   "source": "nonequilibrium-thermodynamics",
   "target": "statistical-mechanics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": []
  },
  {
   "source": "phase-transitions",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "相变的统计基础",
    "相变与临界现象"
   ]
  },
  {
   "source": "phase-transitions",
   "target": "thermodynamics",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "相平衡与热力学势",
    "相变的热力学描述"
   ]
  },
  {
   "source": "quantum-statistics",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": false,
   "soft": false,
   "notes": [
    "量子统计力学",
    "量子统计"
   ]
  },
  {
   "source": "quantum-statistics",
   "target": "spin",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "自旋-统计"
   ]
  },
  {
   "source": "thermodynamics",
   "target": "statistical-mechanics",
   "weight": 5,
   "supersede": true,
   "soft": false,
   "notes": [
    "宏观热力学的微观基础",
    "微观基础"
   ]
  },
  {
   "source": "statistical-mechanics",
   "target": "transport-theory",
   "weight": 4,
   "supersede": false,
   "soft": false,
   "notes": [
    "输运理论的统计基础",
    "输运理论是统计力学的核心内容"
   ]
  },
  {
   "source": "blackbody-radiation",
   "target": "thermodynamics",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "热辐射"
   ]
  },
  {
   "source": "condensed-matter-physics",
   "target": "transport-theory",
   "weight": 3,
   "supersede": false,
   "soft": false,
   "notes": [
    "固体输运"
   ]
  }
 ],
 "search": [
  {
   "id": "astrophysics",
   "name": "天体物理",
   "nameEn": "Astrophysics",
   "aliases": [
    "天体物理学"
   ],
   "tags": [
    "天体物理",
    "恒星",
    "星系"
   ],
   "keywords": [
    "恒星",
    "星系",
    "星际介质",
    "致密天体"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "compact-objects",
   "name": "致密天体",
   "nameEn": "Compact Objects",
   "aliases": [
    "白矮星",
    "中子星",
    "致密星"
   ],
   "tags": [
    "天体物理",
    "致密天体",
    "简并"
   ],
   "keywords": [
    "白矮星",
    "中子星",
    "钱德拉塞卡极限",
    "简并压"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "galaxies",
   "name": "星系",
   "nameEn": "Galaxies",
   "aliases": [
    "星系动力学"
   ],
   "tags": [
    "天体物理",
    "星系",
    "引力"
   ],
   "keywords": [
    "星系",
    "旋涡星系",
    "椭圆星系",
    "旋转曲线"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "interstellar-medium",
   "name": "星际介质",
   "nameEn": "Interstellar Medium",
   "aliases": [
    "ISM"
   ],
   "tags": [
    "天体物理",
    "星际介质",
    "气体"
   ],
   "keywords": [
    "星际气体",
    "星际尘埃",
    "恒星形成",
    "电离"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "stellar-evolution",
   "name": "恒星演化",
   "nameEn": "Stellar Evolution",
   "aliases": [
    "恒星生命周期"
   ],
   "tags": [
    "天体物理",
    "恒星",
    "演化"
   ],
   "keywords": [
    "赫罗图",
    "主序星",
    "红巨星",
    "白矮星"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "stellar-structure",
   "name": "恒星结构",
   "nameEn": "Stellar Structure",
   "aliases": [
    "恒星内部结构"
   ],
   "tags": [
    "天体物理",
    "恒星",
    "结构"
   ],
   "keywords": [
    "流体静力学平衡",
    "质量-光度关系",
    "能量输运"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "supernovae",
   "name": "超新星",
   "nameEn": "Supernovae",
   "aliases": [
    "超新星爆发"
   ],
   "tags": [
    "天体物理",
    "超新星",
    "恒星死亡"
   ],
   "keywords": [
    "Ia型",
    "核心坍缩",
    "重元素合成",
    "光变曲线"
   ],
   "domainName": "天体物理"
  },
  {
   "id": "atomic-molecular-optics",
   "name": "原子分子光学物理",
   "nameEn": "Atomic, Molecular and Optical Physics",
   "aliases": [
    "AMO物理"
   ],
   "tags": [
    "原子物理",
    "分子物理",
    "光学",
    "精密测量"
   ],
   "keywords": [
    "原子",
    "分子",
    "激光",
    "精密测量"
   ],
   "domainName": "原子分子光学"
  },
  {
   "id": "atomic-physics",
   "name": "原子物理",
   "nameEn": "Atomic Physics",
   "aliases": [
    "原子结构"
   ],
   "tags": [
    "原子",
    "能级",
    "光谱"
   ],
   "keywords": [
    "精细结构",
    "超精细结构",
    "能级",
    "电子组态"
   ],
   "domainName": "原子分子光学"
  },
  {
   "id": "laser-cooling",
   "name": "激光冷却",
   "nameEn": "Laser Cooling",
   "aliases": [
    "多普勒冷却"
   ],
   "tags": [
    "原子",
    "冷却",
    "激光"
   ],
   "keywords": [
    "多普勒冷却",
    "磁光阱",
    "光学黏胶"
   ],
   "domainName": "原子分子光学"
  },
  {
   "id": "molecular-physics",
   "name": "分子物理",
   "nameEn": "Molecular Physics",
   "aliases": [
    "分子光谱"
   ],
   "tags": [
    "分子",
    "能级",
    "光谱"
   ],
   "keywords": [
    "玻恩-奥本海默近似",
    "振动能级",
    "转动能级"
   ],
   "domainName": "原子分子光学"
  },
  {
   "id": "ultracold-atoms",
   "name": "超冷原子",
   "nameEn": "Ultracold Atoms",
   "aliases": [
    "超冷原子气体"
   ],
   "tags": [
    "原子",
    "超冷",
    "量子模拟"
   ],
   "keywords": [
    "玻色-爱因斯坦凝聚",
    "光晶格",
    "量子模拟"
   ],
   "domainName": "原子分子光学"
  },
  {
   "id": "biophysics",
   "name": "生物物理",
   "nameEn": "Biophysics",
   "aliases": [
    "生物物理学"
   ],
   "tags": [
    "生物物理",
    "分子",
    "细胞"
   ],
   "keywords": [
    "分子机器",
    "细胞",
    "神经",
    "统计物理方法"
   ],
   "domainName": "生物物理"
  },
  {
   "id": "cell-mechanics",
   "name": "细胞力学",
   "nameEn": "Cell Mechanics",
   "aliases": [
    "细胞力学",
    "细胞骨架"
   ],
   "tags": [
    "生物物理",
    "细胞",
    "力学"
   ],
   "keywords": [
    "细胞骨架",
    "膜张力",
    "迁移",
    "黏附"
   ],
   "domainName": "生物物理"
  },
  {
   "id": "molecular-biophysics",
   "name": "分子生物物理",
   "nameEn": "Molecular Biophysics",
   "aliases": [
    "生物大分子物理"
   ],
   "tags": [
    "生物物理",
    "分子",
    "蛋白质"
   ],
   "keywords": [
    "蛋白质折叠",
    "DNA",
    "单分子",
    "分子马达"
   ],
   "domainName": "生物物理"
  },
  {
   "id": "neuroscience-physics",
   "name": "神经科学物理",
   "nameEn": "Physics of Neuroscience",
   "aliases": [
    "神经物理学"
   ],
   "tags": [
    "生物物理",
    "神经",
    "动力学"
   ],
   "keywords": [
    "动作电位",
    "霍奇金-赫胥黎模型",
    "神经网络"
   ],
   "domainName": "生物物理"
  },
  {
   "id": "canonical-transformations",
   "name": "正则变换",
   "nameEn": "Canonical Transformations",
   "aliases": [
    "正则变换理论"
   ],
   "tags": [
    "力学",
    "相空间",
    "辛结构"
   ],
   "keywords": [
    "生成函数",
    "辛条件",
    "正则不变量"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "central-force-motion",
   "name": "有心力运动与开普勒问题",
   "nameEn": "Central Force Motion & Kepler Problem",
   "aliases": [
    "开普勒问题",
    "二体问题"
   ],
   "tags": [
    "力学",
    "引力",
    "轨道"
   ],
   "keywords": [
    "有效势",
    "轨道方程",
    "比奈公式",
    "开普勒定律"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "chaos-theory",
   "name": "混沌理论",
   "nameEn": "Chaos Theory",
   "aliases": [
    "非线性动力学",
    "确定性混沌"
   ],
   "tags": [
    "力学",
    "非线性",
    "动力学"
   ],
   "keywords": [
    "李雅普诺夫指数",
    "奇怪吸引子",
    "对初值敏感",
    "分岔"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "conservation-laws",
   "name": "守恒定律",
   "nameEn": "Conservation Laws",
   "aliases": [
    "守恒量",
    "诺特定理"
   ],
   "tags": [
    "力学",
    "守恒",
    "对称性"
   ],
   "keywords": [
    "动量守恒",
    "角动量守恒",
    "能量守恒",
    "对称性",
    "诺特定理"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "hamilton-jacobi-theory",
   "name": "哈密顿-雅可比理论",
   "nameEn": "Hamilton-Jacobi Theory",
   "aliases": [
    "HJ理论"
   ],
   "tags": [
    "力学",
    "方法",
    "作用量"
   ],
   "keywords": [
    "哈密顿-雅可比方程",
    "作用-角变量",
    "主函数"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "hamiltonian-mechanics",
   "name": "哈密顿力学",
   "nameEn": "Hamiltonian Mechanics",
   "aliases": [
    "哈密顿方程",
    "正则方程"
   ],
   "tags": [
    "力学",
    "相空间",
    "辛结构"
   ],
   "keywords": [
    "哈密顿量",
    "相空间",
    "正则方程",
    "泊松括号"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "lagrangian-mechanics",
   "name": "拉格朗日力学",
   "nameEn": "Lagrangian Mechanics",
   "aliases": [
    "分析力学",
    "拉格朗日方程"
   ],
   "tags": [
    "力学",
    "约束",
    "广义坐标",
    "最小作用量"
   ],
   "keywords": [
    "拉格朗日量",
    "广义坐标",
    "约束",
    "最小作用量原理",
    "广义动量"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "newtonian-mechanics",
   "name": "牛顿力学",
   "nameEn": "Newtonian Mechanics",
   "aliases": [
    "经典力学",
    "牛顿定律",
    "牛顿三定律"
   ],
   "tags": [
    "力学",
    "质点",
    "运动学",
    "动力学",
    "惯性系"
   ],
   "keywords": [
    "力",
    "加速度",
    "惯性",
    "动量",
    "能量",
    "角动量"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "non-inertial-frames",
   "name": "非惯性参考系",
   "nameEn": "Non-inertial Reference Frames",
   "aliases": [
    "惯性力",
    "科里奥利力"
   ],
   "tags": [
    "力学",
    "参考系",
    "惯性力"
   ],
   "keywords": [
    "离心力",
    "科里奥利力",
    "惯性系",
    "转动参考系"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "poisson-brackets",
   "name": "泊松括号",
   "nameEn": "Poisson Brackets",
   "aliases": [
    "泊松括号代数"
   ],
   "tags": [
    "力学",
    "代数结构",
    "对易子"
   ],
   "keywords": [
    "对易关系",
    "李代数",
    "辛结构",
    "正则量子化"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "rigid-body-mechanics",
   "name": "刚体力学",
   "nameEn": "Rigid Body Mechanics",
   "aliases": [
    "刚体运动"
   ],
   "tags": [
    "力学",
    "刚体",
    "转动"
   ],
   "keywords": [
    "转动惯量",
    "惯量张量",
    "欧拉方程",
    "角速度",
    "欧拉角"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "vibration-theory",
   "name": "振动与简正模",
   "nameEn": "Vibration Theory and Normal Modes",
   "aliases": [
    "小振动",
    "简正模式"
   ],
   "tags": [
    "力学",
    "振动",
    "简正模"
   ],
   "keywords": [
    "简正坐标",
    "谐振子",
    "耦合振子",
    "频谱",
    "本征值"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "wave-mechanics",
   "name": "波动与波动方程",
   "nameEn": "Waves and Wave Equations",
   "aliases": [
    "机械波",
    "波动"
   ],
   "tags": [
    "力学",
    "波动",
    "传播"
   ],
   "keywords": [
    "波动方程",
    "色散",
    "干涉",
    "衍射",
    "相速度",
    "群速度"
   ],
   "domainName": "经典力学"
  },
  {
   "id": "band-theory",
   "name": "能带理论",
   "nameEn": "Band Theory",
   "aliases": [
    "能带",
    "布洛赫定理"
   ],
   "tags": [
    "凝聚态",
    "电子结构",
    "能带"
   ],
   "keywords": [
    "布洛赫定理",
    "费米面",
    "带隙"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "berry-phase",
   "name": "贝里相位",
   "nameEn": "Berry Phase",
   "aliases": [
    "几何相位",
    "贝里曲率"
   ],
   "tags": [
    "量子",
    "几何相位",
    "拓扑"
   ],
   "keywords": [
    "绝热演化",
    "贝里曲率",
    "陈数"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "bose-einstein-condensation",
   "name": "玻色-爱因斯坦凝聚",
   "nameEn": "Bose-Einstein Condensation",
   "aliases": [
    "BEC",
    "玻色凝聚"
   ],
   "tags": [
    "凝聚态",
    "玻色子",
    "低温"
   ],
   "keywords": [
    "临界温度",
    "凝聚",
    "超流体"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "condensed-matter-physics",
   "name": "凝聚态物理",
   "nameEn": "Condensed Matter Physics",
   "aliases": [
    "固体物理",
    "凝聚态"
   ],
   "tags": [
    "凝聚态",
    "多体",
    "材料"
   ],
   "keywords": [
    "多体问题",
    "对称性破缺",
    "准粒子",
    "相变"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "crystallography",
   "name": "晶体学",
   "nameEn": "Crystallography",
   "aliases": [
    "晶体结构",
    "空间群"
   ],
   "tags": [
    "凝聚态",
    "晶体",
    "对称性"
   ],
   "keywords": [
    "布拉维格子",
    "空间群",
    "倒格子",
    "布拉格衍射"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "phonons",
   "name": "声子",
   "nameEn": "Phonons",
   "aliases": [
    "晶格振动量子化"
   ],
   "tags": [
    "凝聚态",
    "振动",
    "准粒子"
   ],
   "keywords": [
    "声子",
    "色散关系",
    "德拜模型",
    "热容"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "semiconductors",
   "name": "半导体",
   "nameEn": "Semiconductors",
   "aliases": [
    "半导体物理",
    "晶体管"
   ],
   "tags": [
    "凝聚态",
    "半导体",
    "器件"
   ],
   "keywords": [
    "带隙",
    "掺杂",
    "pn结",
    "载流子"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "superconductivity",
   "name": "超导电性",
   "nameEn": "Superconductivity",
   "aliases": [
    "超导",
    "BCS理论"
   ],
   "tags": [
    "凝聚态",
    "超导",
    "量子相"
   ],
   "keywords": [
    "库珀对",
    "BCS理论",
    "迈斯纳效应",
    "约瑟夫森效应"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "topological-materials",
   "name": "拓扑物态",
   "nameEn": "Topological Materials",
   "aliases": [
    "拓扑绝缘体",
    "拓扑超导"
   ],
   "tags": [
    "凝聚态",
    "拓扑",
    "量子霍尔"
   ],
   "keywords": [
    "陈数",
    "表面态",
    "拓扑不变量"
   ],
   "domainName": "凝聚态物理"
  },
  {
   "id": "cosmology",
   "name": "宇宙学",
   "nameEn": "Cosmology",
   "aliases": [
    "宇宙学",
    "宇宙演化"
   ],
   "tags": [
    "宇宙学",
    "宇宙",
    "膨胀"
   ],
   "keywords": [
    "弗里德曼方程",
    "宇宙微波背景",
    "暗物质",
    "暗能量"
   ],
   "domainName": "天体与宇宙学"
  },
  {
   "id": "boundary-value-problems",
   "name": "边值问题",
   "nameEn": "Boundary Value Problems",
   "aliases": [
    "静电边值问题"
   ],
   "tags": [
    "电磁学",
    "方法",
    "边界条件"
   ],
   "keywords": [
    "镜像法",
    "分离变量",
    "唯一性定理"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "circuits",
   "name": "电路理论",
   "nameEn": "Circuit Theory",
   "aliases": [
    "电路",
    "电磁振荡"
   ],
   "tags": [
    "电磁学",
    "电路",
    "振荡"
   ],
   "keywords": [
    "基尔霍夫定律",
    "RLC电路",
    "复阻抗",
    "谐振"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "electromagnetic-induction",
   "name": "电磁感应",
   "nameEn": "Electromagnetic Induction",
   "aliases": [
    "法拉第定律",
    "感应电动势"
   ],
   "tags": [
    "电磁学",
    "感应",
    "时变场"
   ],
   "keywords": [
    "法拉第定律",
    "楞次定律",
    "互感",
    "自感"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "electromagnetic-media",
   "name": "介质中的电磁场",
   "nameEn": "Electromagnetic Fields in Media",
   "aliases": [
    "电介质",
    "磁介质"
   ],
   "tags": [
    "电磁学",
    "介质",
    "极化"
   ],
   "keywords": [
    "极化强度",
    "磁化强度",
    "D场",
    "H场",
    "本构关系"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "electromagnetic-potentials",
   "name": "电磁势与规范",
   "nameEn": "Electromagnetic Potentials & Gauge",
   "aliases": [
    "矢势",
    "标势",
    "规范变换"
   ],
   "tags": [
    "电磁学",
    "势",
    "规范"
   ],
   "keywords": [
    "矢势 A",
    "标势 phi",
    "洛伦兹规范",
    "库仑规范"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "electromagnetic-radiation",
   "name": "电磁辐射",
   "nameEn": "Electromagnetic Radiation",
   "aliases": [
    "辐射",
    "偶极辐射"
   ],
   "tags": [
    "电磁学",
    "辐射",
    "能量"
   ],
   "keywords": [
    "推迟势",
    "偶极辐射",
    "坡印廷矢量",
    "辐射功率",
    "拉莫尔公式"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "electromagnetic-waves",
   "name": "电磁波",
   "nameEn": "Electromagnetic Waves",
   "aliases": [
    "电磁辐射波",
    "波动光学"
   ],
   "tags": [
    "电磁学",
    "波动",
    "光"
   ],
   "keywords": [
    "平面波",
    "偏振",
    "色散",
    "波阻抗",
    "坡印廷矢量"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "electrostatics",
   "name": "静电学",
   "nameEn": "Electrostatics",
   "aliases": [
    "静电场",
    "库仑定律"
   ],
   "tags": [
    "电磁学",
    "电场",
    "静电"
   ],
   "keywords": [
    "库仑定律",
    "高斯定律",
    "电势",
    "泊松方程"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "lorentz-force",
   "name": "洛伦兹力",
   "nameEn": "Lorentz Force",
   "aliases": [
    "电磁力"
   ],
   "tags": [
    "电磁学",
    "力",
    "电荷运动"
   ],
   "keywords": [
    "电场力",
    "磁场力",
    "霍尔效应",
    "回旋运动"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "magnetostatics",
   "name": "磁静学",
   "nameEn": "Magnetostatics",
   "aliases": [
    "静磁场",
    "安培定律"
   ],
   "tags": [
    "电磁学",
    "磁场",
    "稳恒电流"
   ],
   "keywords": [
    "毕奥-萨伐尔定律",
    "安培环路定理",
    "矢势"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "maxwell-equations",
   "name": "麦克斯韦方程组",
   "nameEn": "Maxwell's Equations",
   "aliases": [
    "麦克斯韦方程",
    "电磁场理论"
   ],
   "tags": [
    "电磁学",
    "场方程"
   ],
   "keywords": [
    "高斯定律",
    "法拉第定律",
    "安培-麦克斯韦定律",
    "电磁波",
    "位移电流"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "multipole-expansion",
   "name": "多极展开",
   "nameEn": "Multipole Expansion",
   "aliases": [
    "多极矩"
   ],
   "tags": [
    "电磁学",
    "展开",
    "远场"
   ],
   "keywords": [
    "单极",
    "偶极",
    "四极",
    "勒让德",
    "球谐函数"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "relativistic-electrodynamics",
   "name": "相对论电动力学",
   "nameEn": "Relativistic Electrodynamics",
   "aliases": [
    "四维电磁场"
   ],
   "tags": [
    "电磁学",
    "相对论",
    "张量"
   ],
   "keywords": [
    "电磁张量",
    "洛伦兹变换",
    "四维势"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "waveguides-resonators",
   "name": "波导与谐振腔",
   "nameEn": "Waveguides & Resonators",
   "aliases": [
    "导波",
    "谐振腔"
   ],
   "tags": [
    "电磁学",
    "导波",
    "模式"
   ],
   "keywords": [
    "TE模",
    "TM模",
    "截止频率",
    "品质因子"
   ],
   "domainName": "电动力学"
  },
  {
   "id": "acoustics",
   "name": "声学",
   "nameEn": "Acoustics",
   "aliases": [
    "声波",
    "声学"
   ],
   "tags": [
    "声学",
    "波动",
    "声音"
   ],
   "keywords": [
    "声波",
    "声压",
    "声速",
    "多普勒效应"
   ],
   "domainName": "流体与声学"
  },
  {
   "id": "continuum-mechanics",
   "name": "连续介质力学",
   "nameEn": "Continuum Mechanics",
   "aliases": [
    "连续介质",
    "弹性力学"
   ],
   "tags": [
    "力学",
    "连续介质",
    "材料"
   ],
   "keywords": [
    "应力",
    "应变",
    "本构关系",
    "弹性"
   ],
   "domainName": "流体与声学"
  },
  {
   "id": "fluid-mechanics",
   "name": "流体力学",
   "nameEn": "Fluid Mechanics",
   "aliases": [
    "流体动力学"
   ],
   "tags": [
    "流体",
    "连续介质",
    "动力学"
   ],
   "keywords": [
    "纳维-斯托克斯方程",
    "伯努利方程",
    "雷诺数"
   ],
   "domainName": "流体与声学"
  },
  {
   "id": "turbulence",
   "name": "湍流",
   "nameEn": "Turbulence",
   "aliases": [
    "湍流理论"
   ],
   "tags": [
    "流体",
    "湍流",
    "非线性"
   ],
   "keywords": [
    "雷诺数",
    "湍流级联",
    "柯尔莫哥洛夫标度"
   ],
   "domainName": "流体与声学"
  },
  {
   "id": "atmospheric-physics",
   "name": "大气物理",
   "nameEn": "Atmospheric Physics",
   "aliases": [
    "大气动力学"
   ],
   "tags": [
    "大气",
    "气象",
    "流体"
   ],
   "keywords": [
    "大气环流",
    "对流层",
    "天气系统"
   ],
   "domainName": "地球与大气物理"
  },
  {
   "id": "climate-physics",
   "name": "气候物理",
   "nameEn": "Climate Physics",
   "aliases": [
    "气候系统",
    "气候科学"
   ],
   "tags": [
    "气候",
    "辐射平衡",
    "地球系统"
   ],
   "keywords": [
    "辐射平衡",
    "温室效应",
    "气候反馈"
   ],
   "domainName": "地球与大气物理"
  },
  {
   "id": "geophysics",
   "name": "地球与大气物理",
   "nameEn": "Geophysics and Atmospheric Physics",
   "aliases": [
    "地球物理",
    "大气物理"
   ],
   "tags": [
    "地球物理",
    "大气",
    "海洋",
    "气候"
   ],
   "keywords": [
    "大气",
    "海洋",
    "气候",
    "地球系统"
   ],
   "domainName": "地球与大气物理"
  },
  {
   "id": "ocean-dynamics",
   "name": "海洋动力学",
   "nameEn": "Ocean Dynamics",
   "aliases": [
    "物理海洋学"
   ],
   "tags": [
    "海洋",
    "环流",
    "流体"
   ],
   "keywords": [
    "海洋环流",
    "温盐环流",
    "海流"
   ],
   "domainName": "地球与大气物理"
  },
  {
   "id": "eigenvalue-problems",
   "name": "本征值问题",
   "nameEn": "Eigenvalue Problems",
   "aliases": [
    "斯图姆-刘维尔理论",
    "本征值理论"
   ],
   "tags": [
    "数学",
    "线性算子",
    "谱理论"
   ],
   "keywords": [
    "本征值",
    "本征函数",
    "正交完备性"
   ],
   "domainName": "数学物理方法"
  },
  {
   "id": "green-function",
   "name": "格林函数",
   "nameEn": "Green's Functions",
   "aliases": [
    "格林函数法"
   ],
   "tags": [
    "数学",
    "方法",
    "点源",
    "线性算子"
   ],
   "keywords": [
    "点源",
    "基本解",
    "卷积",
    "传播子"
   ],
   "domainName": "数学物理方法"
  },
  {
   "id": "integral-transforms",
   "name": "积分变换",
   "nameEn": "Integral Transforms",
   "aliases": [
    "拉普拉斯变换",
    "积分变换法"
   ],
   "tags": [
    "数学",
    "方法",
    "变换"
   ],
   "keywords": [
    "傅里叶变换",
    "拉普拉斯变换",
    "卷积"
   ],
   "domainName": "数学物理方法"
  },
  {
   "id": "mathematical-physics-methods",
   "name": "数学物理方法",
   "nameEn": "Methods of Mathematical Physics",
   "aliases": [
    "数理方法",
    "数学物理方程"
   ],
   "tags": [
    "数学",
    "物理",
    "偏微分方程",
    "特殊函数"
   ],
   "keywords": [
    "分离变量法",
    "本征值问题",
    "积分变换",
    "格林函数"
   ],
   "domainName": "数学物理方法"
  },
  {
   "id": "separation-of-variables",
   "name": "分离变量法",
   "nameEn": "Separation of Variables",
   "aliases": [
    "变量分离"
   ],
   "tags": [
    "数学",
    "方法",
    "偏微分方程"
   ],
   "keywords": [
    "本征函数",
    "本征值",
    "叠加原理"
   ],
   "domainName": "数学物理方法"
  },
  {
   "id": "spherical-harmonics",
   "name": "球谐函数",
   "nameEn": "Spherical Harmonics",
   "aliases": [
    "球函数"
   ],
   "tags": [
    "数学",
    "特殊函数",
    "角动量"
   ],
   "keywords": [
    "勒让德函数",
    "角量子数",
    "球对称"
   ],
   "domainName": "数学物理方法"
  },
  {
   "id": "calculus",
   "name": "微积分",
   "nameEn": "Calculus",
   "aliases": [
    "高等数学",
    "数学分析"
   ],
   "tags": [
    "数学",
    "微分",
    "积分",
    "极限"
   ],
   "keywords": [
    "导数",
    "积分",
    "极限",
    "级数",
    "泰勒"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "complex-analysis",
   "name": "复变函数",
   "nameEn": "Complex Analysis",
   "aliases": [
    "复分析"
   ],
   "tags": [
    "数学",
    "复数",
    "解析函数"
   ],
   "keywords": [
    "柯西积分",
    "留数",
    "解析延拓",
    "保角映射"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "differential-equations",
   "name": "常微分方程",
   "nameEn": "Ordinary Differential Equations",
   "aliases": [
    "ODE"
   ],
   "tags": [
    "数学",
    "微分方程",
    "动力系统"
   ],
   "keywords": [
    "初值问题",
    "相空间",
    "稳定性",
    "常系数",
    "矩阵指数"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "differential-geometry",
   "name": "微分几何",
   "nameEn": "Differential Geometry",
   "aliases": [
    "黎曼几何",
    "流形"
   ],
   "tags": [
    "数学",
    "几何",
    "流形"
   ],
   "keywords": [
    "流形",
    "切空间",
    "黎曼度量",
    "测地线",
    "曲率"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "fourier-analysis",
   "name": "傅里叶分析",
   "nameEn": "Fourier Analysis",
   "aliases": [
    "傅里叶变换",
    "傅里叶级数"
   ],
   "tags": [
    "数学",
    "调和分析",
    "信号"
   ],
   "keywords": [
    "傅里叶级数",
    "傅里叶变换",
    "频谱",
    "卷积"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "group-theory",
   "name": "群论",
   "nameEn": "Group Theory",
   "aliases": [
    "对称性",
    "李群"
   ],
   "tags": [
    "数学",
    "对称性",
    "群表示"
   ],
   "keywords": [
    "群",
    "表示论",
    "李群",
    "对称变换",
    "不可约表示"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "information-theory",
   "name": "信息论",
   "nameEn": "Information Theory",
   "aliases": [
    "香农信息论"
   ],
   "tags": [
    "数学",
    "信息",
    "熵"
   ],
   "keywords": [
    "香农熵",
    "互信息",
    "信道容量",
    "KL散度"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "linear-algebra",
   "name": "线性代数",
   "nameEn": "Linear Algebra",
   "aliases": [
    "矩阵论",
    "线性空间"
   ],
   "tags": [
    "数学",
    "矩阵",
    "线性空间",
    "特征值"
   ],
   "keywords": [
    "向量空间",
    "矩阵",
    "行列式",
    "特征值",
    "内积"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "partial-differential-equations",
   "name": "偏微分方程",
   "nameEn": "Partial Differential Equations",
   "aliases": [
    "PDE"
   ],
   "tags": [
    "数学",
    "偏微分方程",
    "数学物理"
   ],
   "keywords": [
    "波动方程",
    "热传导方程",
    "拉普拉斯方程",
    "定解条件"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "probability-theory",
   "name": "概率论",
   "nameEn": "Probability Theory",
   "aliases": [
    "概率"
   ],
   "tags": [
    "数学",
    "概率",
    "随机"
   ],
   "keywords": [
    "随机变量",
    "分布",
    "期望",
    "大数定律",
    "中心极限定理"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "set-theory",
   "name": "集合论与数学基础",
   "nameEn": "Set Theory and Foundations",
   "aliases": [
    "数学基础",
    "公理化集合论"
   ],
   "tags": [
    "数学",
    "逻辑",
    "集合"
   ],
   "keywords": [
    "集合",
    "映射",
    "基数",
    "序数",
    "公理"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "special-functions",
   "name": "特殊函数",
   "nameEn": "Special Functions",
   "aliases": [
    "正交多项式"
   ],
   "tags": [
    "数学",
    "特殊函数",
    "数学物理"
   ],
   "keywords": [
    "勒让德函数",
    "贝塞尔函数",
    "厄米函数",
    "正交性",
    "超几何函数"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "tensor-calculus",
   "name": "张量分析",
   "nameEn": "Tensor Calculus",
   "aliases": [
    "张量",
    "里奇微积分"
   ],
   "tags": [
    "数学",
    "张量",
    "黎曼几何",
    "广义相对论"
   ],
   "keywords": [
    "协变指标",
    "逆变指标",
    "克里斯托费尔符号",
    "协变导数"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "topology",
   "name": "拓扑学",
   "nameEn": "Topology",
   "aliases": [
    "拓扑",
    "点集拓扑"
   ],
   "tags": [
    "数学",
    "拓扑",
    "流形"
   ],
   "keywords": [
    "开集",
    "连续映射",
    "同胚",
    "紧致性",
    "同伦",
    "同调"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "variational-calculus",
   "name": "变分法",
   "nameEn": "Calculus of Variations",
   "aliases": [
    "泛函极值",
    "变分原理"
   ],
   "tags": [
    "数学",
    "泛函",
    "极值"
   ],
   "keywords": [
    "欧拉-拉格朗日方程",
    "泛函",
    "极值",
    "最小作用量"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "vector-calculus",
   "name": "矢量分析",
   "nameEn": "Vector Calculus",
   "aliases": [
    "矢量场论",
    "向量微积分"
   ],
   "tags": [
    "数学",
    "矢量",
    "场论",
    "梯度"
   ],
   "keywords": [
    "梯度",
    "散度",
    "旋度",
    "通量",
    "环量",
    "亥姆霍兹分解"
   ],
   "domainName": "数学基础"
  },
  {
   "id": "nuclear-decay",
   "name": "放射性衰变",
   "nameEn": "Radioactive Decay",
   "aliases": [
    "放射衰变",
    "衰变"
   ],
   "tags": [
    "核物理",
    "衰变",
    "放射性"
   ],
   "keywords": [
    "半衰期",
    "阿尔法衰变",
    "贝塔衰变",
    "伽马衰变"
   ],
   "domainName": "核物理"
  },
  {
   "id": "nuclear-fission",
   "name": "核裂变",
   "nameEn": "Nuclear Fission",
   "aliases": [
    "裂变",
    "原子核裂变"
   ],
   "tags": [
    "核物理",
    "裂变",
    "核能"
   ],
   "keywords": [
    "链式反应",
    "裂变产物",
    "临界质量"
   ],
   "domainName": "核物理"
  },
  {
   "id": "nuclear-fusion",
   "name": "核聚变",
   "nameEn": "Nuclear Fusion",
   "aliases": [
    "聚变",
    "热核聚变"
   ],
   "tags": [
    "核物理",
    "聚变",
    "能源"
   ],
   "keywords": [
    "氘氚聚变",
    "托卡马克",
    "恒星能量"
   ],
   "domainName": "核物理"
  },
  {
   "id": "nuclear-models",
   "name": "核模型",
   "nameEn": "Nuclear Models",
   "aliases": [
    "壳模型",
    "液滴模型"
   ],
   "tags": [
    "核物理",
    "模型",
    "结构"
   ],
   "keywords": [
    "液滴模型",
    "壳模型",
    "集体模型"
   ],
   "domainName": "核物理"
  },
  {
   "id": "nuclear-physics",
   "name": "核物理",
   "nameEn": "Nuclear Physics",
   "aliases": [
    "原子核物理"
   ],
   "tags": [
    "核物理",
    "原子核",
    "强相互作用"
   ],
   "keywords": [
    "原子核",
    "核力",
    "质量亏损",
    "结合能"
   ],
   "domainName": "核物理"
  },
  {
   "id": "nuclear-reactions",
   "name": "核反应",
   "nameEn": "Nuclear Reactions",
   "aliases": [
    "核反应过程"
   ],
   "tags": [
    "核物理",
    "反应",
    "截面"
   ],
   "keywords": [
    "反应截面",
    "反应能",
    "复合核"
   ],
   "domainName": "核物理"
  },
  {
   "id": "nuclear-structure",
   "name": "原子核结构",
   "nameEn": "Nuclear Structure",
   "aliases": [
    "核结构"
   ],
   "tags": [
    "核物理",
    "原子核",
    "结构"
   ],
   "keywords": [
    "壳结构",
    "幻数",
    "形变",
    "激发态"
   ],
   "domainName": "核物理"
  },
  {
   "id": "geometric-optics",
   "name": "几何光学",
   "nameEn": "Geometric Optics",
   "aliases": [
    "射线光学"
   ],
   "tags": [
    "光学",
    "射线",
    "成像"
   ],
   "keywords": [
    "费马原理",
    "斯涅尔定律",
    "透镜成像"
   ],
   "domainName": "光学"
  },
  {
   "id": "lasers",
   "name": "激光",
   "nameEn": "Lasers",
   "aliases": [
    "激光器",
    "受激辐射"
   ],
   "tags": [
    "光学",
    "光源",
    "相干"
   ],
   "keywords": [
    "受激辐射",
    "粒子数反转",
    "谐振腔",
    "相干光"
   ],
   "domainName": "光学"
  },
  {
   "id": "optics",
   "name": "光学",
   "nameEn": "Optics",
   "aliases": [
    "光学",
    "光物理"
   ],
   "tags": [
    "光学",
    "光",
    "波动"
   ],
   "keywords": [
    "几何光学",
    "波动光学",
    "光子"
   ],
   "domainName": "光学"
  },
  {
   "id": "quantum-optics",
   "name": "量子光学",
   "nameEn": "Quantum Optics",
   "aliases": [
    "光量子理论",
    "光子统计"
   ],
   "tags": [
    "光学",
    "量子",
    "光子"
   ],
   "keywords": [
    "光子",
    "相干态",
    "压缩光",
    "腔量子电动力学"
   ],
   "domainName": "光学"
  },
  {
   "id": "wave-optics",
   "name": "波动光学",
   "nameEn": "Wave Optics",
   "aliases": [
    "物理光学"
   ],
   "tags": [
    "光学",
    "波动",
    "干涉衍射"
   ],
   "keywords": [
    "惠更斯原理",
    "干涉",
    "衍射",
    "偏振"
   ],
   "domainName": "光学"
  },
  {
   "id": "elementary-particles",
   "name": "基本粒子",
   "nameEn": "Elementary Particles",
   "aliases": [
    "粒子分类",
    "费米子",
    "玻色子"
   ],
   "tags": [
    "粒子物理",
    "分类",
    "标准模型"
   ],
   "keywords": [
    "夸克",
    "轻子",
    "规范玻色子",
    "希格斯玻色子"
   ],
   "domainName": "粒子物理"
  },
  {
   "id": "particle-physics",
   "name": "粒子物理",
   "nameEn": "Particle Physics",
   "aliases": [
    "高能物理",
    "基本粒子"
   ],
   "tags": [
    "粒子物理",
    "加速器",
    "标准模型"
   ],
   "keywords": [
    "标准模型",
    "探测器",
    "散射截面"
   ],
   "domainName": "粒子物理"
  },
  {
   "id": "standard-model",
   "name": "粒子物理标准模型",
   "nameEn": "Standard Model of Particle Physics",
   "aliases": [
    "标准模型",
    "SM"
   ],
   "tags": [
    "粒子物理",
    "规范场论",
    "统一理论"
   ],
   "keywords": [
    "电弱统一",
    "量子色动力学",
    "希格斯机制"
   ],
   "domainName": "粒子物理"
  },
  {
   "id": "debye-screening",
   "name": "德拜屏蔽",
   "nameEn": "Debye Screening",
   "aliases": [
    "德拜长度",
    "屏蔽效应"
   ],
   "tags": [
    "等离子体",
    "屏蔽",
    "准中性"
   ],
   "keywords": [
    "德拜长度",
    "准中性",
    "屏蔽势"
   ],
   "domainName": "等离子体物理"
  },
  {
   "id": "magnetohydrodynamics",
   "name": "磁流体力学",
   "nameEn": "Magnetohydrodynamics",
   "aliases": [
    "MHD"
   ],
   "tags": [
    "等离子体",
    "磁流体",
    "流体"
   ],
   "keywords": [
    "阿尔文波",
    "磁冻结",
    "磁雷诺数"
   ],
   "domainName": "等离子体物理"
  },
  {
   "id": "plasma-confinement",
   "name": "磁约束聚变",
   "nameEn": "Magnetic Confinement Fusion",
   "aliases": [
    "托卡马克",
    "磁约束"
   ],
   "tags": [
    "等离子体",
    "聚变",
    "约束"
   ],
   "keywords": [
    "托卡马克",
    "磁场约束",
    "劳森判据"
   ],
   "domainName": "等离子体物理"
  },
  {
   "id": "plasma-oscillations",
   "name": "等离子体振荡",
   "nameEn": "Plasma Oscillations",
   "aliases": [
    "朗缪尔波"
   ],
   "tags": [
    "等离子体",
    "振荡",
    "波"
   ],
   "keywords": [
    "朗缪尔频率",
    "等离子体频率",
    "集体振荡"
   ],
   "domainName": "等离子体物理"
  },
  {
   "id": "plasma-physics",
   "name": "等离子体物理",
   "nameEn": "Plasma Physics",
   "aliases": [
    "等离子体"
   ],
   "tags": [
    "等离子体",
    "电磁",
    "电离气体"
   ],
   "keywords": [
    "等离子体",
    "电离",
    "德拜屏蔽",
    "集体行为"
   ],
   "domainName": "等离子体物理"
  },
  {
   "id": "feynman-diagrams",
   "name": "费曼图",
   "nameEn": "Feynman Diagrams",
   "aliases": [
    "费曼规则",
    "费曼图展开"
   ],
   "tags": [
    "量子场论",
    "计算",
    "图形"
   ],
   "keywords": [
    "传播子",
    "顶点",
    "散射振幅"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "gauge-field-theory",
   "name": "规范场论",
   "nameEn": "Gauge Field Theory",
   "aliases": [
    "规范理论",
    "杨-米尔斯理论"
   ],
   "tags": [
    "量子场论",
    "规范",
    "对称性"
   ],
   "keywords": [
    "局域对称",
    "杨-米尔斯",
    "联络",
    "流"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "qed",
   "name": "量子电动力学",
   "nameEn": "Quantum Electrodynamics",
   "aliases": [
    "QED"
   ],
   "tags": [
    "量子场论",
    "电磁",
    "规范"
   ],
   "keywords": [
    "狄拉克方程",
    "兰姆位移",
    "反常磁矩",
    "费曼图"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "quantum-field-theory",
   "name": "量子场论",
   "nameEn": "Quantum Field Theory",
   "aliases": [
    "QFT",
    "场论"
   ],
   "tags": [
    "量子场论",
    "相对论量子力学",
    "多粒子"
   ],
   "keywords": [
    "量子化",
    "费曼图",
    "重整化",
    "粒子产生湮灭"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "renormalization",
   "name": "重整化",
   "nameEn": "Renormalization",
   "aliases": [
    "重整化群",
    "重整化理论"
   ],
   "tags": [
    "量子场论",
    "方法",
    "发散"
   ],
   "keywords": [
    "紫外发散",
    "重整化群",
    "跑动耦合常数",
    "普适性"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "spontaneous-symmetry-breaking",
   "name": "自发对称破缺与希格斯机制",
   "nameEn": "Spontaneous Symmetry Breaking & Higgs Mechanism",
   "aliases": [
    "希格斯机制",
    "对称性自发破缺"
   ],
   "tags": [
    "量子场论",
    "对称性",
    "质量起源"
   ],
   "keywords": [
    "戈德斯通定理",
    "希格斯玻色子",
    "电弱统一"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "string-theory",
   "name": "弦理论",
   "nameEn": "String Theory",
   "aliases": [
    "超弦理论"
   ],
   "tags": [
    "量子引力",
    "弦",
    "统一理论"
   ],
   "keywords": [
    "超弦",
    "额外维度",
    "对偶性",
    "卡拉比-丘流形"
   ],
   "domainName": "量子场论"
  },
  {
   "id": "loop-quantum-gravity",
   "name": "圈量子引力",
   "nameEn": "Loop Quantum Gravity",
   "aliases": [
    "LQG",
    "圈量子引力理论"
   ],
   "tags": [
    "量子引力",
    "时空",
    "几何"
   ],
   "keywords": [
    "自旋网络",
    "面积量子化",
    "背景无关"
   ],
   "domainName": "量子引力"
  },
  {
   "id": "quantum-gravity",
   "name": "量子引力",
   "nameEn": "Quantum Gravity",
   "aliases": [
    "量子引力理论"
   ],
   "tags": [
    "量子引力",
    "引力",
    "量子场论"
   ],
   "keywords": [
    "普朗克尺度",
    "引力量子化",
    "黑洞信息"
   ],
   "domainName": "量子引力"
  },
  {
   "id": "quantum-computing",
   "name": "量子计算",
   "nameEn": "Quantum Computing",
   "aliases": [
    "量子计算机",
    "量子算法"
   ],
   "tags": [
    "量子信息",
    "计算",
    "算法"
   ],
   "keywords": [
    "量子比特",
    "量子门",
    "叠加",
    "纠缠"
   ],
   "domainName": "量子信息"
  },
  {
   "id": "quantum-cryptography",
   "name": "量子密码学",
   "nameEn": "Quantum Cryptography",
   "aliases": [
    "量子密钥分发",
    "QKD"
   ],
   "tags": [
    "量子信息",
    "密码",
    "安全"
   ],
   "keywords": [
    "BB84",
    "量子密钥分发",
    "不可克隆定理"
   ],
   "domainName": "量子信息"
  },
  {
   "id": "quantum-error-correction",
   "name": "量子纠错",
   "nameEn": "Quantum Error Correction",
   "aliases": [
    "量子纠错码",
    "QEC"
   ],
   "tags": [
    "量子信息",
    "容错",
    "纠错"
   ],
   "keywords": [
    "表面码",
    "稳定子码",
    "容错阈值"
   ],
   "domainName": "量子信息"
  },
  {
   "id": "quantum-information",
   "name": "量子信息",
   "nameEn": "Quantum Information",
   "aliases": [
    "量子信息科学"
   ],
   "tags": [
    "量子信息",
    "纠缠",
    "资源"
   ],
   "keywords": [
    "量子比特",
    "纠缠",
    "冯诺依曼熵",
    "量子信道"
   ],
   "domainName": "量子信息"
  },
  {
   "id": "aharonov-bohm-effect",
   "name": "阿哈罗诺夫-玻姆效应",
   "nameEn": "Aharonov-Bohm Effect",
   "aliases": [
    "AB效应"
   ],
   "tags": [
    "量子",
    "规范势",
    "相位"
   ],
   "keywords": [
    "矢势",
    "几何相位",
    "规范不变"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "angular-momentum-qm",
   "name": "量子角动量理论",
   "nameEn": "Quantum Angular Momentum",
   "aliases": [
    "角动量算符",
    "角动量耦合"
   ],
   "tags": [
    "量子",
    "角动量",
    "对称性"
   ],
   "keywords": [
    "对易子",
    "升降算符",
    "CG系数",
    "旋转群"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "bell-inequalities",
   "name": "贝尔不等式",
   "nameEn": "Bell Inequalities",
   "aliases": [
    "贝尔定理",
    "CHSH"
   ],
   "tags": [
    "量子",
    "非定域性",
    "隐变量"
   ],
   "keywords": [
    "贝尔定理",
    "CHSH不等式",
    "隐变量理论"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "density-matrix",
   "name": "密度矩阵",
   "nameEn": "Density Matrix",
   "aliases": [
    "密度算符",
    "混合态"
   ],
   "tags": [
    "量子",
    "混合态",
    "统计"
   ],
   "keywords": [
    "密度算符",
    "约化密度矩阵",
    "纯度",
    "冯诺依曼熵"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "entanglement",
   "name": "量子纠缠",
   "nameEn": "Quantum Entanglement",
   "aliases": [
    "纠缠态",
    "EPR"
   ],
   "tags": [
    "量子",
    "纠缠",
    "非局域"
   ],
   "keywords": [
    "EPR悖论",
    "贝尔不等式",
    "非局域关联"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "hydrogen-atom",
   "name": "氢原子",
   "nameEn": "Hydrogen Atom",
   "aliases": [
    "氢原子结构",
    "库仑势"
   ],
   "tags": [
    "量子",
    "原子",
    "库仑场"
   ],
   "keywords": [
    "玻尔模型",
    "量子数",
    "能级",
    "精细结构"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "identical-particles",
   "name": "全同粒子",
   "nameEn": "Identical Particles",
   "aliases": [
    "量子统计",
    "泡利不相容"
   ],
   "tags": [
    "量子",
    "全同粒子",
    "对称性"
   ],
   "keywords": [
    "玻色子",
    "费米子",
    "泡利不相容",
    "交换对称"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "matrix-mechanics",
   "name": "矩阵力学",
   "nameEn": "Matrix Mechanics",
   "aliases": [
    "海森堡表象",
    "矩阵表述"
   ],
   "tags": [
    "量子",
    "海森堡",
    "矩阵"
   ],
   "keywords": [
    "海森堡方程",
    "对易子",
    "运动常数"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "operators-and-measurement",
   "name": "算符与测量",
   "nameEn": "Operators & Measurement",
   "aliases": [
    "量子测量公设",
    "可观测算符"
   ],
   "tags": [
    "量子",
    "算符",
    "测量"
   ],
   "keywords": [
    "厄米算符",
    "本征值",
    "玻恩规则",
    "投影测量",
    "谱分解"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "path-integral",
   "name": "路径积分",
   "nameEn": "Path Integral",
   "aliases": [
    "费曼路径积分",
    "传播子"
   ],
   "tags": [
    "量子",
    "方法",
    "传播子"
   ],
   "keywords": [
    "传播子",
    "配分函数",
    "相位因子"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "perturbation-theory",
   "name": "量子微扰论",
   "nameEn": "Perturbation Theory",
   "aliases": [
    "微扰论",
    "简并微扰"
   ],
   "tags": [
    "量子",
    "近似方法",
    "微扰"
   ],
   "keywords": [
    "非简并微扰",
    "简并微扰",
    "费米黄金规则"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "qm-variational-method",
   "name": "量子变分法",
   "nameEn": "Variational Method (Quantum)",
   "aliases": [
    "变分近似",
    "瑞利-里兹法"
   ],
   "tags": [
    "量子",
    "近似方法",
    "变分"
   ],
   "keywords": [
    "试探波函数",
    "基态能量",
    "期望值"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "quantum-harmonic-oscillator",
   "name": "量子谐振子",
   "nameEn": "Quantum Harmonic Oscillator",
   "aliases": [
    "谐振子",
    "升降算符"
   ],
   "tags": [
    "量子",
    "谐振子",
    "精确可解"
   ],
   "keywords": [
    "升降算符",
    "零点能",
    "声子",
    "相干态"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "quantum-measurement",
   "name": "量子测量与退相干",
   "nameEn": "Quantum Measurement & Decoherence",
   "aliases": [
    "测量问题",
    "退相干"
   ],
   "tags": [
    "量子",
    "测量",
    "退相干"
   ],
   "keywords": [
    "坍缩",
    "退相干",
    "环境耦合",
    "投影假设"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "quantum-mechanics",
   "name": "量子力学",
   "nameEn": "Quantum Mechanics",
   "aliases": [
    "量子理论",
    "波动力学"
   ],
   "tags": [
    "量子",
    "波函数",
    "测量"
   ],
   "keywords": [
    "波函数",
    "算符",
    "测量",
    "对易子",
    "不确定性"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "quantum-tunneling",
   "name": "量子隧穿",
   "nameEn": "Quantum Tunneling",
   "aliases": [
    "隧穿效应"
   ],
   "tags": [
    "量子",
    "隧穿",
    "势垒"
   ],
   "keywords": [
    "透射系数",
    "WKB近似",
    "扫描隧道显微镜"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "scattering-theory",
   "name": "散射理论",
   "nameEn": "Scattering Theory",
   "aliases": [
    "量子散射",
    "碰撞理论"
   ],
   "tags": [
    "量子",
    "散射",
    "截面"
   ],
   "keywords": [
    "散射振幅",
    "微分散射截面",
    "相移",
    "玻恩近似"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "schrodinger-equation",
   "name": "薛定谔方程",
   "nameEn": "Schrödinger Equation",
   "aliases": [
    "含时薛定谔方程",
    "定态薛定谔方程"
   ],
   "tags": [
    "量子",
    "波函数",
    "方程"
   ],
   "keywords": [
    "哈密顿量",
    "定态",
    "本征值",
    "演化算符",
    "概率流"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "second-quantization",
   "name": "二次量子化",
   "nameEn": "Second Quantization",
   "aliases": [
    "产生湮灭算符",
    "占据数表示"
   ],
   "tags": [
    "量子",
    "多体",
    "场量子化"
   ],
   "keywords": [
    "产生算符",
    "湮灭算符",
    "对易子",
    "Fock空间"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "spin",
   "name": "自旋",
   "nameEn": "Spin",
   "aliases": [
    "自旋角动量",
    "泡利矩阵"
   ],
   "tags": [
    "量子",
    "自旋",
    "粒子内禀"
   ],
   "keywords": [
    "泡利矩阵",
    "自旋1/2",
    "塞曼效应"
   ],
   "domainName": "量子力学"
  },
  {
   "id": "black-holes",
   "name": "黑洞",
   "nameEn": "Black Holes",
   "aliases": [
    "黑洞物理",
    "施瓦西黑洞"
   ],
   "tags": [
    "相对论",
    "引力",
    "黑洞"
   ],
   "keywords": [
    "事件视界",
    "奇点",
    "霍金辐射"
   ],
   "domainName": "相对论"
  },
  {
   "id": "einstein-field-equations",
   "name": "爱因斯坦场方程",
   "nameEn": "Einstein Field Equations",
   "aliases": [
    "场方程",
    "引力方程"
   ],
   "tags": [
    "相对论",
    "引力",
    "方程"
   ],
   "keywords": [
    "里奇张量",
    "能量动量张量",
    "宇宙学常数"
   ],
   "domainName": "相对论"
  },
  {
   "id": "equivalence-principle",
   "name": "等效原理",
   "nameEn": "Equivalence Principle",
   "aliases": [
    "爱因斯坦电梯"
   ],
   "tags": [
    "相对论",
    "引力",
    "惯性质量"
   ],
   "keywords": [
    "惯性质量",
    "引力质量",
    "局部惯性系"
   ],
   "domainName": "相对论"
  },
  {
   "id": "general-relativity",
   "name": "广义相对论",
   "nameEn": "General Relativity",
   "aliases": [
    "广义相对论",
    "GR"
   ],
   "tags": [
    "相对论",
    "引力",
    "时空"
   ],
   "keywords": [
    "等效原理",
    "场方程",
    "弯曲时空",
    "测地线"
   ],
   "domainName": "相对论"
  },
  {
   "id": "gravitational-waves",
   "name": "引力波",
   "nameEn": "Gravitational Waves",
   "aliases": [
    "引力辐射"
   ],
   "tags": [
    "相对论",
    "引力",
    "波动"
   ],
   "keywords": [
    "横波",
    "极化",
    "引力波探测器",
    "四极辐射"
   ],
   "domainName": "相对论"
  },
  {
   "id": "minkowski-spacetime",
   "name": "闵可夫斯基时空",
   "nameEn": "Minkowski Spacetime",
   "aliases": [
    "四维时空",
    "时空几何"
   ],
   "tags": [
    "相对论",
    "时空",
    "几何"
   ],
   "keywords": [
    "线元",
    "类时",
    "类光",
    "固有时"
   ],
   "domainName": "相对论"
  },
  {
   "id": "special-relativity",
   "name": "狭义相对论",
   "nameEn": "Special Relativity",
   "aliases": [
    "相对论",
    "洛伦兹变换"
   ],
   "tags": [
    "相对论",
    "时空",
    "光速"
   ],
   "keywords": [
    "洛伦兹变换",
    "时间膨胀",
    "长度收缩",
    "E=mc2"
   ],
   "domainName": "相对论"
  },
  {
   "id": "colloids",
   "name": "胶体",
   "nameEn": "Colloids",
   "aliases": [
    "胶体物理",
    "胶体悬浮液"
   ],
   "tags": [
    "软物质",
    "胶体",
    "悬浮"
   ],
   "keywords": [
    "布朗运动",
    "胶体晶体",
    "双电层"
   ],
   "domainName": "软物质物理"
  },
  {
   "id": "liquid-crystals",
   "name": "液晶",
   "nameEn": "Liquid Crystals",
   "aliases": [
    "液晶相"
   ],
   "tags": [
    "软物质",
    "液晶",
    "序"
   ],
   "keywords": [
    "向列相",
    "近晶相",
    "取向序"
   ],
   "domainName": "软物质物理"
  },
  {
   "id": "polymers",
   "name": "聚合物物理",
   "nameEn": "Polymer Physics",
   "aliases": [
    "高分子物理"
   ],
   "tags": [
    "软物质",
    "聚合物",
    "高分子"
   ],
   "keywords": [
    "随机行走",
    "熵弹性",
    "玻璃化转变"
   ],
   "domainName": "软物质物理"
  },
  {
   "id": "self-assembly",
   "name": "自组装",
   "nameEn": "Self-Assembly",
   "aliases": [
    "分子自组装"
   ],
   "tags": [
    "软物质",
    "自组装",
    "生物膜"
   ],
   "keywords": [
    "胶束",
    "脂质双分子层",
    "两亲分子"
   ],
   "domainName": "软物质物理"
  },
  {
   "id": "soft-matter",
   "name": "软物质物理",
   "nameEn": "Soft Matter Physics",
   "aliases": [
    "软物质"
   ],
   "tags": [
    "软物质",
    "聚合物",
    "胶体",
    "液晶"
   ],
   "keywords": [
    "聚合物",
    "胶体",
    "液晶",
    "自组装"
   ],
   "domainName": "软物质物理"
  },
  {
   "id": "blackbody-radiation",
   "name": "黑体辐射",
   "nameEn": "Blackbody Radiation",
   "aliases": [
    "黑体",
    "普朗克定律"
   ],
   "tags": [
    "统计物理",
    "辐射",
    "量子起源"
   ],
   "keywords": [
    "普朗克公式",
    "维恩位移",
    "斯蒂芬-玻尔兹曼定律",
    "紫外灾变"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "boltzmann-equation",
   "name": "玻尔兹曼方程",
   "nameEn": "Boltzmann Equation",
   "aliases": [
    "玻尔兹曼输运方程"
   ],
   "tags": [
    "统计物理",
    "动力学",
    "输运"
   ],
   "keywords": [
    "分布函数",
    "碰撞项",
    "H定理"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "critical-phenomena",
   "name": "临界现象",
   "nameEn": "Critical Phenomena",
   "aliases": [
    "临界现象理论",
    "临界指数"
   ],
   "tags": [
    "统计物理",
    "临界",
    "标度"
   ],
   "keywords": [
    "临界指数",
    "标度律",
    "普适类",
    "关联长度"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "ensembles",
   "name": "系综理论",
   "nameEn": "Ensembles",
   "aliases": [
    "系综",
    "正则系综",
    "巨正则系综"
   ],
   "tags": [
    "统计物理",
    "系综",
    "方法"
   ],
   "keywords": [
    "微正则系综",
    "正则系综",
    "巨正则系综",
    "配分函数"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "entropy-information",
   "name": "熵与信息",
   "nameEn": "Entropy & Information",
   "aliases": [
    "信息熵"
   ],
   "tags": [
    "统计物理",
    "信息",
    "熵"
   ],
   "keywords": [
    "玻尔兹曼熵",
    "香农熵",
    "兰道尔原理"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "fluctuation-theory",
   "name": "涨落理论",
   "nameEn": "Fluctuation Theory",
   "aliases": [
    "涨落",
    "布朗运动",
    "随机过程"
   ],
   "tags": [
    "统计物理",
    "涨落",
    "随机"
   ],
   "keywords": [
    "涨落耗散定理",
    "布朗运动",
    "朗之万方程",
    "相关函数"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "heat-conduction",
   "name": "热传导与扩散",
   "nameEn": "Heat Conduction & Diffusion",
   "aliases": [
    "热扩散",
    "扩散方程"
   ],
   "tags": [
    "统计物理",
    "输运",
    "扩散"
   ],
   "keywords": [
    "热传导方程",
    "扩散方程",
    "热导率"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "ideal-gas",
   "name": "理想气体",
   "nameEn": "Ideal Gas",
   "aliases": [
    "理想气体模型"
   ],
   "tags": [
    "统计物理",
    "模型",
    "气体"
   ],
   "keywords": [
    "状态方程",
    "麦克斯韦分布",
    "配分函数"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "ising-model",
   "name": "伊辛模型",
   "nameEn": "Ising Model",
   "aliases": [
    "Ising模型"
   ],
   "tags": [
    "统计物理",
    "模型",
    "自旋格点"
   ],
   "keywords": [
    "自旋",
    "相变",
    "平均场",
    "精确解"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "kinetic-theory",
   "name": "分子运动论",
   "nameEn": "Kinetic Theory",
   "aliases": [
    "气体动理论"
   ],
   "tags": [
    "统计物理",
    "分子",
    "微观"
   ],
   "keywords": [
    "平均自由程",
    "碰撞",
    "输运系数"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "nonequilibrium-thermodynamics",
   "name": "非平衡热力学",
   "nameEn": "Non-equilibrium Thermodynamics",
   "aliases": [
    "不可逆热力学"
   ],
   "tags": [
    "统计物理",
    "非平衡",
    "不可逆"
   ],
   "keywords": [
    "熵产生",
    "昂萨格关系",
    "线性响应"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "phase-transitions",
   "name": "相变与临界现象",
   "nameEn": "Phase Transitions & Critical Phenomena",
   "aliases": [
    "相变",
    "临界点"
   ],
   "tags": [
    "统计物理",
    "相变",
    "临界"
   ],
   "keywords": [
    "序参量",
    "一级相变",
    "二级相变",
    "临界指数"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "quantum-statistics",
   "name": "量子统计",
   "nameEn": "Quantum Statistics",
   "aliases": [
    "费米-狄拉克",
    "玻色-爱因斯坦"
   ],
   "tags": [
    "统计物理",
    "量子",
    "全同粒子"
   ],
   "keywords": [
    "费米分布",
    "玻色分布",
    "化学势",
    "简并"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "statistical-mechanics",
   "name": "统计力学",
   "nameEn": "Statistical Mechanics",
   "aliases": [
    "统计物理"
   ],
   "tags": [
    "统计物理",
    "微观",
    "系综"
   ],
   "keywords": [
    "系综",
    "配分函数",
    "玻尔兹曼因子"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "thermodynamics",
   "name": "热力学",
   "nameEn": "Thermodynamics",
   "aliases": [
    "热学",
    "热力学定律"
   ],
   "tags": [
    "热学",
    "宏观",
    "状态函数"
   ],
   "keywords": [
    "热力学定律",
    "熵",
    "自由能",
    "卡诺循环",
    "麦克斯韦关系"
   ],
   "domainName": "统计物理与热力学"
  },
  {
   "id": "transport-theory",
   "name": "输运理论",
   "nameEn": "Transport Theory",
   "aliases": [
    "输运过程",
    "输运系数"
   ],
   "tags": [
    "统计物理",
    "输运",
    "非平衡"
   ],
   "keywords": [
    "电导率",
    "热导率",
    "黏滞",
    "扩散",
    "昂萨格"
   ],
   "domainName": "统计物理与热力学"
  }
 ]
};
