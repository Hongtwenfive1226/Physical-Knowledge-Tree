---
id: condensed-matter-physics
name: 凝聚态物理
name_en: Condensed Matter Physics
domain: condensed-matter
aliases: [固体物理, 凝聚态]
tags: [凝聚态, 多体, 材料]
keywords: [多体问题, 对称性破缺, 准粒子, 相变]
updated: 2026-08-13
links:
  - {id: band-theory, weight: 5, note: 固体电子结构}
  - {id: superconductivity, weight: 5, note: 重要量子相}
  - {id: topological-materials, weight: 4, note: 拓扑物态}
  - {id: crystallography, weight: 4, note: 晶体结构}
  - {id: quantum-mechanics, weight: 4, note: 微观基础}
  - {id: quantum-statistics, weight: 4, note: 电子气体}
  - {id: second-quantization, weight: 4, note: 多体方法}
  - {id: phase-transitions, weight: 4, note: 相变}
  - {id: phonons, weight: 4, note: 晶格振动}
  - {id: berry-phase, weight: 4, note: 贝里相位是凝聚态核心概念}
  - {id: semiconductors, weight: 4, note: 应用}
  - {id: statistical-mechanics, weight: 3}
superseded_by: []
supersedes: []
pos: {x: -45, y: 35, z: 0}
---
# 凝聚态物理

## 概述

凝聚态物理研究**大量粒子（$10^{23}$）聚集**形成的固体与液体的性质，是物理学最大的分支。其核心思想是**涌现**：大量微观粒子的集体行为产生全新的宏观现象（超导、磁性、晶体序、拓扑物态），这些现象不能简单由单个粒子推断。研究主题包括电子结构（能带）、晶格振动（声子）、磁性、超导、量子相变与拓扑物态。方法上是量子多体理论（二次量子化、格林函数、平均场、密度泛函）与统计力学的结合。

## 基本概念

- **多体系统**：大量相互作用粒子的系统。
- **元激发 / 准粒子**：集体运动的量子化（声子、磁振子、等离激元）。
- **对称性破缺 / 序参量**：相变与有序相的刻画。
- **费米面 / 能带**：电子结构的基本对象。
- **拓扑不变量**：物态的拓扑分类。

## 核心内容

### 基本定律 / 方程

固体电子的能带结构（布洛赫定理，见 [[band-theory]]）：

$$ \psi_{\vec k}(\vec r)=e^{i\vec k\cdot\vec r}u_{\vec k}(\vec r),\qquad E_n(\vec k) $$

超导的 BCS 能隙（[[superconductivity]]）：

$$ \Delta\approx2\hbar\omega_De^{-1/N(0)V} $$

### 推导要点

- **能带理论**：周期势中的布洛赫波，本征值形成能带。
- **二次量子化**：多体系统用产生/湮灭算符描述（[[second-quantization]]）。
- **平均场 / DFT**：把多体问题化为单粒子有效问题（哈特里-福克、科恩-沈密度泛函）。

### 重要定理与推论

- **布洛赫定理**：周期势中的波函数形式（[[band-theory]]）。
- **声子 / 准粒子**：晶格振动的量子化（[[phonons]]）。
- **费米液体理论**：低温金属电子的准粒子图像。
- **对称性破缺与相变**：有序相由序参量刻画（[[phase-transitions]]）。

## 深化内容

现代凝聚态物理与**量子技术**深度融合：拓扑绝缘体（[[topological-materials]]）、超导量子比特（[[quantum-computing]]）、二维材料（石墨烯）。方法与 [[quantum-field-theory]]（场论格林函数）交叉。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Altland & Simons《Condensed Matter Field Theory》、Chaikin & Lubensky《Principles of Condensed Matter Physics》。

## 与其他知识的联系

- 紧密相关：[[band-theory]]、[[superconductivity]]、[[topological-materials]]、[[phonons]]、[[semiconductors]]、[[crystallography]]。
- 基础：[[quantum-mechanics]]、[[quantum-statistics]]、[[statistical-mechanics]]、[[phase-transitions]]、[[second-quantization]]。

## 前置知识

- [[quantum-mechanics]]、[[statistical-mechanics]]、[[second-quantization]]
