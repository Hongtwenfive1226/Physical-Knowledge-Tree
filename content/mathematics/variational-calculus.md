---
id: variational-calculus
name: 变分法
name_en: Calculus of Variations
domain: mathematics
aliases: [泛函极值, 变分原理]
tags: [数学, 泛函, 极值]
keywords: [欧拉-拉格朗日方程, 泛函, 极值, 最小作用量]
updated: 2026-08-13
links:
  - {id: calculus, weight: 4, note: 变分法是微积分极值思想的推广}
  - {id: lagrangian-mechanics, weight: 5, note: 最小作用量原理直接应用变分法}
  - {id: general-relativity, weight: 3, note: 测地线与爱因斯坦场方程由变分原理导出}
  - {id: mathematical-physics-methods, weight: 3}
  - {id: qm-variational-method, weight: 4, note: 量子力学中用于近似基态}
  - {id: partial-differential-equations, weight: 4, note: 弱解与能量泛函}
superseded_by: []
supersedes: []
---
# 变分法

## 概述

变分法研究**泛函**（函数到数的映射）的极值问题：不是对数求极值，而是对"整条曲线"求极值。核心结果是**欧拉-拉格朗日方程**，它把泛函极值化为微分方程。变分法在物理中的总纲是**变分原理**——把动力学（最小作用量原理）、光学（费马原理）、静力学（最小势能原理）、场论（爱因斯坦-希尔伯特作用量）统一表述为"某个泛函取极值"。它也是量子力学变分法与偏微分方程弱解理论的基础。

## 基本概念

- **泛函**：$J[y]=\int_a^b F(x,y,y')\,dx$，自变量是函数 $y(x)$。
- **变分** $\delta J$：$J[y+\varepsilon\eta]$ 对 $\varepsilon$ 的一阶导在 $\varepsilon=0$ 处的值，即泛函的"方向导数"。
- **驻点（极值）**：$\delta J=0$ 对一切容许的扰动 $\eta$（通常 $\eta(a)=\eta(b)=0$）。
- **约束极值**：附加积分约束 $\int G\,dx=\text{const}$ 时用拉格朗日乘子。

## 核心内容

### 基本定律 / 方程

**欧拉-拉格朗日方程**：泛函 $J[y]=\int_a^b F(x,y,y')\,dx$ 的极值函数满足

$$ \frac{\partial F}{\partial y}-\frac{\mathrm d}{\mathrm dx}\frac{\partial F}{\partial y'}=0 $$

**贝尔特拉米恒等式**（$F$ 不显含 $x$ 时的一阶积分）：

$$ F - y'\frac{\partial F}{\partial y'}=\mathrm{const} $$

**约束极值**：在 $\int G\,dx=c$ 下，极值由 $\widetilde F=F-\lambda G$ 的欧拉-拉格朗日方程给出。

### 推导要点

- 设 $\delta y=\varepsilon\eta$，展开

$$ J[y+\varepsilon\eta]=J[y]+\varepsilon\int_a^b\Big(\frac{\partial F}{\partial y}\eta+\frac{\partial F}{\partial y'}\eta'\Big)dx+O(\varepsilon^2) $$

对第二项分部积分，用边界条件 $\eta(a)=\eta(b)=0$，令 $\varepsilon$ 一次项为零，由 $\eta$ 任意得欧拉-拉格朗日方程。
- **贝尔特拉米恒等式**：对 $F-F'$ 求全导并利用欧拉-拉格朗日方程，得当 $F$ 不显含 $x$ 时该量为常数。

### 重要定理与推论

- **最速降线（摆线）**：$F=\sqrt{1+y'^2}/\sqrt{y}$，得摆线解。
- **测地线**：$F=\sqrt{g_{ij}\dot x^i\dot x^j}$ 给出黎曼流形上的测地线方程。
- **特征值问题的变分刻画**：瑞利商 $R[y]=\int|\nabla y|^2/\int|y|^2$ 的驻点是拉普拉斯算子的特征函数（[[eigenvalue-problems]]）。
- **充分条件**：勒让德条件 $F_{y'y'}\ge0$ 保证局部极小。

## 深化内容

变分法的发展通向**泛函分析**的弱解理论：把微分方程边值问题改写为能量泛函的极小问题，用索伯列夫空间直接法证明解的存在性。**最优控制**（庞特里亚金极大值原理、贝尔曼动态规划）把变分法推广到含控制变量的系统。量子力学的**路径积分**与变分法同源——经典路径是作用量泛函的驻点。延伸阅读可参考 Gelfand & Fomin《Calculus of Variations》、Lanczos《The Variational Principles of Mechanics》。

## 与其他知识的联系

- 紧密相关：[[lagrangian-mechanics]] 与 [[hamiltonian-mechanics]] 建立在其上；[[qm-variational-method]] 是其量子应用。
- 相关：[[general-relativity]]（测地线与场方程来自作用量变分）、[[partial-differential-equations]]（能量泛函与弱解）。
- 应用：[[optics]]（费马原理）、[[continuum-mechanics]]（最小势能原理）。

## 前置知识

- [[calculus]]、[[differential-equations]]
