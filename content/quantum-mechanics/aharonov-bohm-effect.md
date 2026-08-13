---
id: aharonov-bohm-effect
name: 阿哈罗诺夫-玻姆效应
name_en: Aharonov-Bohm Effect
domain: quantum-mechanics
aliases: [AB效应]
tags: [量子, 规范势, 相位]
keywords: [矢势, 几何相位, 规范不变]
updated: 2026-08-13
links:
  - {id: electromagnetic-potentials, weight: 5, note: 势的物理意义}
  - {id: quantum-mechanics, weight: 5, note: 量子干涉实验}
  - {id: gauge-field-theory, weight: 3, note: 规范原理}
  - {id: berry-phase, weight: 4, note: 几何相位的推广}
  - {id: topological-materials, weight: 3, note: 拓扑相}
superseded_by: []
supersedes: []
---
# 阿哈罗诺夫-玻姆效应

## 概述

阿哈罗诺夫-玻姆效应（AB 效应，1959）表明：即使电子经过的区域 $\vec E=\vec B=0$（磁场完全限制在螺线管内），**矢势 $\vec A$ 仍通过量子相位影响干涉条纹**。两路电子获得的相位差正比于矢势的环路积分（即磁通量）。这一效应证明电磁势不只是数学工具、而是具有可观测物理效应的量，并深刻揭示了**几何相位**与规范结构的物理意义——是贝里相位、拓扑物态与规范场论思想的源头。

## 基本概念

- **磁通量**：$\Phi_B=\int\vec B\cdot d\vec S$。
- **矢势环路积分**：$\oint\vec A\cdot d\vec l=\Phi_B$（斯托克斯定理）。
- **几何相位**：只依赖路径（环路）的相位。
- **规范不变性**：物理效应依赖 $\Phi_B$（规范不变量），而非 $\vec A$ 的规范选择。

## 核心内容

### 基本定律 / 方程

AB 相位差：

$$ \Delta\phi=\frac{q}{\hbar}\oint\vec A\cdot d\vec l=\frac{q\Phi_B}{\hbar} $$

干涉条纹移动：

$$ \Delta x=\frac{q\Phi_B}{h}\cdot\frac{\lambda L}{d} $$

### 推导要点

- **相位累积**：带电粒子在矢势中累积相位 $e^{iq\int\vec A\cdot d\vec l/\hbar}$；两路绕螺线管一周的相位差即 $\Delta\phi=q\Phi_B/\hbar$。
- **$\vec B=0$ 但 $\vec A\neq0$**：螺线管外 $\vec B=0$，但 $\vec A\neq0$（$\nabla\times\vec A=0$ 但 $\vec A$ 非零，因 $\oint\vec A\cdot d\vec l=\Phi_B$）。
- **规范不变性**：$\Phi_B$ 是规范不变量，相位差可观测、不依赖规范选择。

### 重要定理与推论

- **势的物理实在性**：$\vec A$（而非只有 $\vec E,\vec B$）有可观测效应。
- **拓扑性**：相位只依赖磁通 $\Phi_B$（整体量），与电子路径的细节无关。
- **量子化条件**：超导环中 $\Phi_B$ 量子化为 $h/2e$ 的整数倍（磁通量子化）。
- **规范场论的意义**：局域规范对称性与可观测相位的关系。

## 深化内容

AB 效应是**贝里相位**（[[berry-phase]]）的原型：参数空间闭环上的几何相位。它与 [[topological-materials]]（拓扑绝缘体的类似效应）、磁通量子化、以及 [[gauge-field-theory]] 的规范原理直接相关。AB 效应已在电子双缝（螺线管）、超导环、介观环等实验中确认。延伸阅读可参考 Griffiths《电动力学导论》、Sakurai《现代量子力学》、Aharonov & Bohm 原始论文。

## 与其他知识的联系

- 紧密相关：[[electromagnetic-potentials]]（势的物理意义）、[[quantum-mechanics]]（干涉）。
- 推广：[[berry-phase]]（几何相位）、[[topological-materials]]（拓扑绝缘体）、[[gauge-field-theory]]（规范原理）。

## 前置知识

- [[electromagnetic-potentials]]、[[quantum-mechanics]]
