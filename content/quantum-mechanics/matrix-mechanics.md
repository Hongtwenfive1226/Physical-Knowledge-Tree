---
id: matrix-mechanics
name: 矩阵力学
name_en: Matrix Mechanics
domain: quantum-mechanics
aliases: [海森堡表象, 矩阵表述]
tags: [量子, 海森堡, 矩阵]
keywords: [海森堡方程, 对易子, 运动常数]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 与波动力学等价的表述}
  - {id: linear-algebra, weight: 4, note: 矩阵方法}
  - {id: poisson-brackets, weight: 4, note: 对易子对应}
  - {id: schrodinger-equation, weight: 4, note: 两种表述等价}
superseded_by: []
supersedes: []
---
# 矩阵力学

## 概述

矩阵力学是海森堡在 1925 年建立的**第一种**量子力学表述：可观测物理量表示为矩阵（算符），态矢不随时间演化，而算符演化由**海森堡方程**描述。海森堡的出发点是"只讨论可观测量的关系"（频率、振幅），并发现位置与动量的矩阵满足对易关系 $[\hat x,\hat p]=i\hbar$。随后薛定谔的波动力学与狄拉克的变换理论证明三者等价，统一于抽象的希尔伯特空间表述。

## 基本概念

- **可观测量 → 矩阵**：每个物理量对应一个（厄米）矩阵。
- **对易关系**：$[\hat x,\hat p]=i\hbar$。
- **海森堡表象**：态固定、算符演化。
- **幺正变换**：联系不同表象（海森堡 ↔ 薛定谔）。

## 核心内容

### 基本定律 / 方程

**海森堡运动方程**：

$$ \frac{d\hat A}{dt}=\frac{i}{\hbar}[\hat H,\hat A]+\frac{\partial\hat A}{\partial t} $$

**基本对易关系**：

$$ [\hat x,\hat p]=i\hbar $$

**运动常数判据**：$[\hat H,\hat A]=0$（且不显含时间）⟹ $\hat A$ 守恒。

### 推导要点

- **海森堡方程**：由薛定谔表象演化 $\hat A_H(t)=e^{iHt/\hbar}\hat A e^{-iHt/\hbar}$ 对 $t$ 求导，得 $\frac{d\hat A_H}{dt}=\frac{i}{\hbar}[\hat H,\hat A_H]$。
- **对易关系的来源**：经典泊松括号 $\{x,p\}=1$ 经正则量子化提升为 $[\hat x,\hat p]=i\hbar$（见 [[poisson-brackets]]）。
- **与波动力学等价**：位置表象中 $\hat p=-i\hbar\nabla$，代入对易关系满足；两表象由幺正变换联系。

### 重要定理与推论

- **三种表述等价**：矩阵力学（海森堡）、波动力学（薛定谔）、路径积分（费曼）物理等价。
- **守恒量与好量子数**：$[\hat H,\hat A]=0$ 的 $\hat A$ 本征值是守恒量子数。
- **对角化与谱**：可观测量矩阵对角化给出本征值（能谱）。
- **量子化条件**：$\{f,g\}\to[f,g]/i\hbar$ 是经典到量子的桥梁。

## 深化内容

矩阵力学是现代"算符代数"观点的起点：希尔伯特空间、自伴算符、谱理论（[[linear-algebra]] 的无限维推广）是量子力学的严格数学基础。海森堡表象在量子场论、统计力学（关联函数随时间演化）中广泛使用。相互作用表象介于两者之间，是微扰论与费曼图的基础。延伸阅读可参考 Sakurai《现代量子力学》、Dirac《The Principles of Quantum Mechanics》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[schrodinger-equation]]（等价表述）、[[linear-algebra]]。
- 经典对应：对易子 $[\cdot,\cdot]/i\hbar$ 对应 [[poisson-brackets]]。

## 前置知识

- [[linear-algebra]]、[[poisson-brackets]]、[[quantum-mechanics]]
