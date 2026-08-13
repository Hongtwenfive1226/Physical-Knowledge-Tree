---
id: boundary-value-problems
name: 边值问题
name_en: Boundary Value Problems
domain: electrodynamics
aliases: [静电边值问题]
tags: [电磁学, 方法, 边界条件]
keywords: [镜像法, 分离变量, 唯一性定理]
updated: 2026-08-13
links:
  - {id: electrostatics, weight: 5, note: 静电边值问题}
  - {id: partial-differential-equations, weight: 5, note: 拉普拉斯/泊松方程}
  - {id: separation-of-variables, weight: 4, note: 主要求解方法}
  - {id: green-function, weight: 4, note: 格林函数法}
  - {id: mathematical-physics-methods, weight: 4}
  - {id: special-functions, weight: 3, note: 不同坐标系的函数族}
  - {id: complex-analysis, weight: 2, note: 二维保角映射}
superseded_by: []
supersedes: []
---
# 边值问题

## 概述

边值问题是在给定**边界条件**下求解场方程（拉普拉斯方程 $\nabla^2\phi=0$ 或泊松方程 $\nabla^2\phi=-\rho/\varepsilon_0$）的数学问题，是静电学与数学物理方法的核心内容。其理论基础是**唯一性定理**：给定边界条件（狄利克雷型给定 $\phi$、诺伊曼型给定法向导数），解唯一。求解方法包括分离变量法、镜像法、格林函数法与数值方法，覆盖了从简单几何到复杂工程的广泛情形。

## 基本概念

- **狄利克雷条件**：边界上给定 $\phi$。
- **诺伊曼条件**：边界上给定 $\partial\phi/\partial n$。
- **拉普拉斯 / 泊松方程**：无源 / 有源区域。
- **格林函数**：点源的场，满足 $\nabla^2G=-\delta$。

## 核心内容

### 基本定律 / 方程

**拉普拉斯方程**（无源区域）：

$$ \nabla^2\phi=0 $$

**泊松方程**（有源区域）：

$$ \nabla^2\phi=-\frac{\rho}{\varepsilon_0} $$

**唯一性定理**：给定闭区域边界上的 $\phi$（或 $\partial\phi/\partial n$），泊松方程的解唯一。

### 推导要点

- **唯一性定理**：设 $\phi_1,\phi_2$ 是两个解，令 $U=\phi_1-\phi_2$，则 $\nabla^2U=0$；由格林第一恒等式 $\int(\nabla U)^2d\tau=\oint U\frac{\partial U}{\partial n}da=0$（边界上 $U=0$ 或 $\partial U/\partial n=0$），得 $U=\text{const}$，即解唯一。
- **镜像法**：用边界外的"假想电荷"取代导体边界，使边界条件（等势面）自动满足，从而把边值问题化为点电荷叠加。
- **分离变量法**：把 $\phi$ 写成各坐标函数之积，拉普拉斯方程化为常微分方程（本征值问题），解用 [[special-functions]] 展开。

### 重要定理与推论

- **唯一性定理**：保证了各种近似解的可靠性（只要满足方程+边界，就是唯一解）。
- **镜像法的适用**：平面/球面/柱面导体（点电荷-导体面、导体球）。
- **级数展开**：不同坐标系对应不同函数族——球坐标球谐函数、柱坐标贝塞尔函数。
- **数值方法**：有限差分/有限元（松弛迭代、雅可比/高斯-赛德尔迭代）。

## 深化内容

边值问题的格林函数法（[[green-function]]）把非齐次方程解写为 $u=\int G\rho$；二维问题可用**保角映射**（[[complex-analysis]]）化复杂边界为简单边界。数值方法（有限元、矩量法）是工程电磁场的通用工具。边值问题也出现在热传导、扩散、量子定态（[[schrodinger-equation]]）等同类椭圆/抛物型方程。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Arfken《Mathematical Methods for Physicists》。

## 与其他知识的联系

- 紧密相关：[[electrostatics]]（物理背景）、[[partial-differential-equations]]/[[mathematical-physics-methods]]（数学）、[[separation-of-variables]]/[[green-function]]/[[special-functions]]（工具）。
- 应用：导体与电容、[[waveguides-resonators]]、天线、扩散与热传导（同类方程）。

## 前置知识

- [[partial-differential-equations]]、[[electrostatics]]、[[mathematical-physics-methods]]
