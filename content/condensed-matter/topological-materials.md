---
id: topological-materials
name: 拓扑物态
name_en: Topological Materials
domain: condensed-matter
aliases: [拓扑绝缘体, 拓扑超导]
tags: [凝聚态, 拓扑, 量子霍尔]
keywords: [陈数, 表面态, 拓扑不变量]
updated: 2026-08-13
links:
  - {id: condensed-matter-physics, weight: 5, note: 凝聚态前沿}
  - {id: berry-phase, weight: 5, note: 贝里相位与陈数}
  - {id: topology, weight: 4, note: 数学基础}
  - {id: band-theory, weight: 4, note: 能带拓扑}
  - {id: superconductivity, weight: 3, note: 拓扑超导与马约拉纳费米子}
  - {id: quantum-computing, weight: 3, note: 拓扑量子比特}
superseded_by: []
supersedes: []
---
# 拓扑物态

## 概述

拓扑物态由波函数的**全局拓扑性质**（而非局域序参量）刻画，是凝聚态物理近几十年的重大进展。第一个例子是**整数量子霍尔效应**（TKNN 不变量/陈数）；**拓扑绝缘体**的体是绝缘体、表面有受拓扑保护的无能隙边缘态。拓扑不变量（陈数、$Z_2$ 指标）由**贝里相位**积分给出，对连续微扰稳定。拓扑物态还提供容错量子计算的平台（拓扑量子比特、马约拉纳费米子）。

## 基本概念

- **拓扑不变量**：陈数 $C$、$Z_2$ 指标、绕数。
- **贝里相位 / 贝里曲率**：能带在动量空间的几何相位。
- **边缘态 / 表面态**：体-边对应关系。
- **量子霍尔电导**：$\sigma_{xy}=Ce^2/h$（量子化）。
- **马约拉纳费米子**：拓扑超导的零能模。

## 核心内容

### 基本定律 / 方程

**TKNN 陈数**（整数量子霍尔）：

$$ C=\frac1{2\pi}\sum_n\int_{\mathrm{BZ}}\Omega_n(\vec k)\,d^2k,\qquad \sigma_{xy}=\frac{e^2}{h}C $$

贝里曲率：

$$ \Omega_n(\vec k)=\nabla_{\vec k}\times\vec A_n(\vec k),\qquad \vec A_n=i\langle u_{n\vec k}|\nabla_{\vec k}u_{n\vec k}\rangle $$

### 推导要点

- **量子霍尔电导**：TKNN 用久保公式证明 $\sigma_{xy}=(e^2/h)C$，$C$ 为整数（陈数）。
- **贝里相位**：绝热演化在动量空间闭环上累积几何相位（[[berry-phase]]、[[aharonov-bohm-effect]]）。
- **体-边对应**：拓扑不变量的非平凡值对应表面/边缘的无能隙态（bulk-boundary correspondence）。

### 重要定理与推论

- **量子化霍尔电导**：$\sigma_{xy}$ 精确量子化（1985、1998 诺奖）。
- **拓扑保护**：边缘态对杂质、无序稳定（背散射被拓扑禁戒）。
- **$Z_2$ 拓扑绝缘体**：时间反演不变系统的拓扑分类。
- **马约拉纳费米子**：拓扑超导的零能模，可用于拓扑量子计算。

## 深化内容

拓扑物态连接 [[berry-phase]]、[[topology]]（同伦/同调）与 [[band-theory]]；拓扑超导与 [[superconductivity]]、[[quantum-computing]]（拓扑量子比特）交叉。量子自旋霍尔效应、外尔半金属、高阶拓扑绝缘体是前沿。延伸阅读可参考 Bernevig《Topological Insulators and Topological Superconductors》、Nakahara《Geometry, Topology and Physics》、Asbóth《A Short Course on Topological Insulators》。

## 与其他知识的联系

- 紧密相关：[[berry-phase]]（物理机制）、[[topology]]（数学）、[[band-theory]]（能带）。
- 相关：[[superconductivity]]（拓扑超导）、[[quantum-computing]]（拓扑量子计算）、[[aharonov-bohm-effect]]（相位效应）。

## 前置知识

- [[band-theory]]、[[berry-phase]]、[[topology]]
