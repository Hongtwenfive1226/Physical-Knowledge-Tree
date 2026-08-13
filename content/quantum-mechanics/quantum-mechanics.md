---
id: quantum-mechanics
name: 量子力学
name_en: Quantum Mechanics
domain: quantum-mechanics
aliases: [量子理论, 波动力学]
tags: [量子, 波函数, 测量]
keywords: [波函数, 算符, 测量, 对易子, 不确定性]
updated: 2026-08-13
links:
  - {id: schrodinger-equation, weight: 5, note: 量子力学的基本方程}
  - {id: operators-and-measurement, weight: 5, note: 测量理论}
  - {id: hamiltonian-mechanics, weight: 4, note: 正则量子化来源}
  - {id: angular-momentum-qm, weight: 4}
  - {id: spin, weight: 4}
  - {id: path-integral, weight: 4, note: 费曼路径积分表述}
  - {id: matrix-mechanics, weight: 4, note: 海森堡表述}
  - {id: entanglement, weight: 4}
  - {id: quantum-measurement, weight: 4, note: 退相干与测量问题}
  - {id: linear-algebra, weight: 5, note: 态空间与算符}
  - {id: second-quantization, weight: 3}
  - {id: statistical-mechanics, weight: 3, note: 量子统计}
  - {id: nuclear-physics, weight: 3, note: 量子力学的多体应用}
superseded_by: [quantum-field-theory]
supersedes: [newtonian-mechanics]
pos: {x: 30, y: 20, z: 0}
---
# 量子力学

## 概述

量子力学描述微观（原子及更小）尺度系统的规律，是 20 世纪最成功的物理理论之一。它以**波函数**（态矢）与**算符**为核心：系统状态属于希尔伯特空间，可观测物理量对应厄米算符，测量结果只能是其本征值，概率由**玻恩规则** $P(a)=|\langle a|\psi\rangle|^2$ 给出。量子力学于 1925–26 年由海森堡（矩阵力学）、薛定谔（波动力学）、玻恩、狄拉克等人建立，其预言（能谱、氢原子、反粒子、纠缠）已被实验精确验证。

## 基本概念

- **态矢 / 波函数**：$|\psi\rangle$、$\psi(\vec r)=\langle\vec r|\psi\rangle$。
- **希尔伯特空间**：完备内积空间，态矢的数学空间。
- **算符 / 厄米算符**：可观测量对应线性厄米（自伴）算符。
- **本征值 / 本征矢**：$\hat A|a\rangle=a|a\rangle$，测量值即本征值。
- **叠加原理**：$|\psi\rangle=\sum c_n|n\rangle$，各分量的概率为 $|c_n|^2$。

## 核心内容

### 基本定律 / 方程

**基本对易关系**：

$$ [\hat x,\hat p]=i\hbar $$

**海森堡不确定性原理**：

$$ \Delta A\,\Delta B\ge\frac12|\langle[\hat A,\hat B]\rangle|,\qquad \Delta x\,\Delta p\ge\frac{\hbar}{2} $$

**薛定谔方程**（演化）：

$$ i\hbar\frac{\partial}{\partial t}|\psi\rangle=\hat H|\psi\rangle $$

### 推导要点

- **正则量子化**：把经典泊松括号提升为对易子 $\{x,p\}=1\to[\hat x,\hat p]=i\hbar$（见 [[poisson-brackets]]、[[hamiltonian-mechanics]]）。
- **不确定性原理**：由施瓦茨不等式 $|\langle u|u\rangle||\langle v|v\rangle|\ge|\langle u|v\rangle|^2$ 应用于 $\hat A-\langle A\rangle$ 与 $\hat B-\langle B\rangle$，结合对易子即得。
- **玻恩规则**：概率诠释由实验（干涉、测量统计）确立，是量子力学公设之一。

### 重要定理与推论

- **五条公设**：态矢、可观测量、测量、演化（薛定谔方程）、全同粒子对称性。
- **能级量子化**：束缚态能量离散（原子光谱、谐振子）。
- **隧穿与干涉**：波函数的波动性导致隧穿与干涉。
- **经典对应**：$\hbar\to0$ 或大量子数下回到经典力学（对应原理）。

## 深化内容

量子力学的数学形式是**希尔伯特空间上的谱理论**（[[linear-algebra]] 的无限维推广）。三种表述——薛定谔（态演化）、海森堡（[[matrix-mechanics]]，算符演化）、费曼（[[path-integral]]）——物理等价。诠释问题（哥本哈根、多世界、退相干）见 [[quantum-measurement]]。相对论化与多粒子推广走向 [[quantum-field-theory]]。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、Shankar《量子力学原理》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[schrodinger-equation]]、[[operators-and-measurement]]、[[angular-momentum-qm]]、[[spin]]。
- 数学基础：[[linear-algebra]]（态空间与算符）、[[fourier-analysis]]（表象变换）。
- 表述：[[matrix-mechanics]]、[[path-integral]]。
- 关联：[[entanglement]]、[[quantum-measurement]]、[[density-matrix]]。

## 上位替代

- 经典极限：$\hbar\to0$（大量子数）回到 [[newtonian-mechanics]]。
- 相对论量子力学与多粒子系统由 [[quantum-field-theory]] 取代。

## 前置知识

- [[linear-algebra]]、[[calculus]]、[[hamiltonian-mechanics]]
