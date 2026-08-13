---
id: semiconductors
name: 半导体
name_en: Semiconductors
domain: condensed-matter
aliases: [半导体物理, 晶体管]
tags: [凝聚态, 半导体, 器件]
keywords: [带隙, 掺杂, pn结, 载流子]
updated: 2026-08-13
links:
  - {id: band-theory, weight: 5, note: 能带结构基础}
  - {id: condensed-matter-physics, weight: 5, note: 学科背景}
  - {id: transport-theory, weight: 3, note: 载流子输运}
  - {id: quantum-mechanics, weight: 3}
  - {id: optics, weight: 2, note: 光电器件}
superseded_by: []
supersedes: []
---
# 半导体

## 概述

半导体是带隙适中（约 $0.1\sim3\,\mathrm{eV}$）的晶体，介于金属与绝缘体之间，是现代电子学的物质基础。其导电性可由**掺杂**（施主/受主杂质）大幅调控，这是所有电子器件的关键。**p-n 结**的整流特性（二极管方程）是晶体管、集成电路的核心；光电器件（LED、激光二极管、太阳能电池）利用光与载流子的相互转换。半导体物理支撑了整个信息技术与光电子产业。

## 基本概念

- **带隙** $E_g$：价带顶与导带底的能量差。
- **本征 / 掺杂半导体**：无杂质 / 施主（n 型）、受主（p 型）。
- **载流子**：电子与空穴。
- **费米能级**：化学势。
- **p-n 结**：p 型与 n 型半导体的界面。

## 核心内容

### 基本定律 / 方程

载流子浓度（本征）：

$$ n_i=\sqrt{N_cN_v}\,e^{-E_g/2k_BT} $$

**质量作用定律**：$np=n_i^2$。

**二极管方程**（p-n 结）：

$$ I=I_s\big(e^{eV/k_BT}-1\big) $$

### 推导要点

- **载流子浓度**：导带电子 $n=N_ce^{-(E_c-E_F)/k_BT}$，本征时 $n=p=n_i$。
- **p-n 结整流**：耗尽区建立内建势垒，正向偏压降低势垒、反向升高，得二极管方程。
- **掺杂控制**：施主杂质在带隙内引入浅能级，控制 $n$ 或 $p$。

### 重要定理与推论

- **二极管整流**：p-n 结的单向导电性。
- **晶体管原理**：场效应/双极晶体管的开关与放大。
- **光生载流子与发光**：光伏效应（太阳能电池）与复合发光（LED、激光二极管）。
- **量子器件**：量子阱、量子点（低维半导体）。

## 深化内容

半导体物理连接 [[band-theory]]、[[transport-theory]]（载流子输运、霍尔效应）与 [[optics]]（光电器件）。现代前沿包括二维材料（石墨烯）、宽禁带半导体（GaN、SiC）与量子器件。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Sze《Physics of Semiconductor Devices》、Kittel《固体物理导论》。

## 与其他知识的联系

- 紧密相关：[[band-theory]]（能带）、[[condensed-matter-physics]]、[[transport-theory]]（载流子输运）。
- 光电子：[[optics]]、[[lasers]]、[[quantum-optics]]。

## 前置知识

- [[band-theory]]、[[quantum-statistics]]、[[transport-theory]]
