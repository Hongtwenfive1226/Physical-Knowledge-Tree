---
id: band-theory
name: 能带理论
name_en: Band Theory
domain: condensed-matter
aliases: [能带, 布洛赫定理]
tags: [凝聚态, 电子结构, 能带]
keywords: [布洛赫定理, 费米面, 带隙]
updated: 2026-08-13
links:
  - {id: condensed-matter-physics, weight: 5, note: 固体电子结构核心}
  - {id: semiconductors, weight: 5, note: 能带决定导电性}
  - {id: quantum-mechanics, weight: 4, note: 周期性势}
  - {id: crystallography, weight: 4, note: 倒格子与周期结构}
  - {id: eigenvalue-problems, weight: 3, note: 布洛赫本征值问题}
  - {id: topological-materials, weight: 4, note: 带拓扑}
  - {id: superconductivity, weight: 2}
superseded_by: []
supersedes: []
---
# 能带理论

## 概述

能带理论用**周期势**中的量子力学描述固体电子，是理解金属、半导体、绝缘体导电性的核心理论。**布洛赫定理**给出周期势中波函数的形式——布洛赫波（平面波调制周期函数），本征值 $E_n(\vec k)$ 构成**能带**。能带间是否存在**带隙**及其大小决定固体的电学分类：金属（部分填充带）、半导体（满带+小带隙）、绝缘体（满带+大带隙）。**费米面**刻画金属电子的动量空间边界，是输运与磁性的关键对象。

## 基本概念

- **布洛赫波**：$\psi_{\vec k}=e^{i\vec k\cdot\vec r}u_{\vec k}(\vec r)$。
- **布里渊区**：倒格子的原胞（$\vec k$ 空间）。
- **能带 / 带隙**：$E_n(\vec k)$、$E_g$。
- **费米面 / 费米能**：$E_F$ 处的 $\vec k$ 空间等能面。
- **有效质量**：$m^*=\hbar^2/(\partial^2E/\partial k^2)$。

## 核心内容

### 基本定律 / 方程

**布洛赫定理**：

$$ \psi_{\vec k}(\vec r)=e^{i\vec k\cdot\vec r}u_{\vec k}(\vec r),\qquad u_{\vec k}(\vec r+\vec R)=u_{\vec k}(\vec r) $$

自由电子近似与近自由电子近似：能隙 $E_g=2|V_G|$（在布里渊区边界由周期势打开）。

**有效质量**：

$$ m^*=\hbar^2\Big(\frac{\partial^2E}{\partial k^2}\Big)^{-1} $$

### 推导要点

- **布洛赫定理**：由平移对称性，$T_{\vec R}\psi=e^{i\vec k\cdot\vec R}\psi$，故波函数为布洛赫波。
- **近自由电子**：在布里渊区边界，周期势混合简并的平面波，打开能隙 $E_g=2|V_G|$。
- **紧束缚近似**：由原子轨道线性组合，能带宽度与交叠积分相关。

### 重要定理与推论

- **导体/绝缘体分类**：费米面是否存在、带隙大小决定导电性。
- **金属、半导体、绝缘体**：费米面在能带内 / 满带+小带隙 / 满带+大带隙。
- **有效质量理论**：带边电子可用有效质量描述（[[semiconductors]]）。
- **能带拓扑**：能带的贝里曲率给出拓扑不变量（[[topological-materials]]）。

## 深化内容

能带理论是 [[semiconductors]]、[[topological-materials]]（陈数、$Z_2$ 指标）、[[crystallography]] 的基础。现代电子结构计算用密度泛函理论（DFT）。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Simon《The Oxford Solid State Basics》。

## 与其他知识的联系

- 紧密相关：[[condensed-matter-physics]]、[[semiconductors]]、[[crystallography]]（倒空间）。
- 基础：[[quantum-mechanics]]（周期势）、[[eigenvalue-problems]]、[[group-theory]]（空间群表示）。
- 前沿：[[topological-materials]]（能带拓扑不变量）。

## 前置知识

- [[quantum-mechanics]]、[[crystallography]]、[[eigenvalue-problems]]
