---
id: magnetostatics
name: 磁静学
name_en: Magnetostatics
domain: electrodynamics
aliases: [静磁场, 安培定律]
tags: [电磁学, 磁场, 稳恒电流]
keywords: [毕奥-萨伐尔定律, 安培环路定理, 矢势]
updated: 2026-08-13
links:
  - {id: electrostatics, weight: 5, note: 静磁与静电对偶}
  - {id: maxwell-equations, weight: 5, note: 稳恒电流下的麦克斯韦方程组}
  - {id: lorentz-force, weight: 4, note: 磁场对运动电荷的作用}
  - {id: vector-calculus, weight: 5, note: 旋度与环路定理}
  - {id: electromagnetic-induction, weight: 4, note: 时变磁场耦合电与磁}
  - {id: special-relativity, weight: 3, note: 磁场是电场的相对论效应}
  - {id: superconductivity, weight: 3, note: 迈斯纳效应}
superseded_by: [maxwell-equations]
supersedes: []
---
# 磁静学

## 概述

磁静学研究**稳恒电流**产生的磁场。其出发点是**毕奥-萨伐尔定律**（或等价地**安培环路定理**）。磁场是**无源**的（$\nabla\cdot\vec B=0$，不存在磁单极），故可引入**矢势** $\vec A$（$\vec B=\nabla\times\vec A$）。磁静学与静电学构成优美的**对偶**（$\vec E$ 对 $\vec B$、$\phi$ 对 $\vec A$、$\rho$ 对 $\vec J$）。更深层的理解来自相对论：磁场本质上是运动参照系中电场的洛伦兹变换结果，电与磁是电磁场的两个侧面。

## 基本概念

- **磁场** $\vec B$：对运动电荷施洛伦兹力 $\vec F=q\vec v\times\vec B$。
- **磁通量**：$\Phi_B=\int\vec B\cdot d\vec S$。
- **矢势** $\vec A$：$\vec B=\nabla\times\vec A$；规范自由度 $\vec A\to\vec A+\nabla\lambda$。
- **磁化强度 / 磁场强度**：$\vec M$、$\vec H=\vec B/\mu_0-\vec M$。

## 核心内容

### 基本定律 / 方程

**毕奥-萨伐尔定律**：

$$ \vec B(\vec r)=\frac{\mu_0}{4\pi}\int\frac{\vec J(\vec r')\times\hat{\mathcal R}}{\mathcal R^2}d\tau' $$

**安培环路定理**（微分与积分形式）：

$$ \nabla\times\vec B=\mu_0\vec J,\qquad \oint\vec B\cdot d\vec l=\mu_0 I_{\mathrm{encl}} $$

**磁场的无源性**：

$$ \nabla\cdot\vec B=0 $$

### 推导要点

- **矢势与安培定律的联系**：由 $\vec B=\nabla\times\vec A$ 与库仑规范 $\nabla\cdot\vec A=0$，代入 $\nabla\times\vec B=\mu_0\vec J$ 得 $\nabla^2\vec A=-\mu_0\vec J$（与静电泊松方程同构）。
- **毕奥-萨伐尔 $\Leftrightarrow$ 安培定律**：对直导线的磁场由安培定理直接积分，对一般分布由毕奥-萨伐尔叠加。
- **无源性的含义**：$\nabla\cdot\vec B=0$ 意味着磁感线闭合（无磁单极），等价于 $\oint\vec B\cdot d\vec S=0$。

### 重要定理与推论

- **安培定律的适用条件**：只适用于稳恒电流（无位移电流），由麦克斯韦修正后推广到时变场。
- **矢势的规范自由度**：$\vec A$ 可加任意梯度而不改变 $\vec B$（见 [[electromagnetic-potentials]]）。
- **静磁对偶**：$\rho\leftrightarrow\vec J$、$\phi\leftrightarrow\vec A$、$\nabla\cdot\vec E\leftrightarrow\nabla\times\vec B$。
- **磁偶极与磁矩**：小电流环的远场为磁偶极场 $\vec m=I\vec S$。

## 深化内容

磁场的**相对论本质**：在运动电荷参照系中，纯电场经洛伦兹变换产生磁场项（见 [[special-relativity]] 与 [[relativistic-electrodynamics]]），电与磁统一于电磁张量 $F_{\mu\nu}$。磁介质理论（抗磁/顺磁/铁磁）解释物质的磁性。**迈斯纳效应**（[[superconductivity]]）表明超导体完全排斥磁场。**阿哈罗诺夫-玻姆效应**（[[aharonov-bohm-effect]]）揭示矢势的量子可观测性。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、费曼《物理学讲义》第二卷。

## 与其他知识的联系

- 紧密相关：[[electrostatics]]（对偶）、[[lorentz-force]]、[[vector-calculus]]、[[electromagnetic-potentials]]。
- 相对论：[[special-relativity]]（磁场是电场的相对论效应）、[[relativistic-electrodynamics]]。
- 时变耦合：[[electromagnetic-induction]] 使磁场与电场耦合，导向完整 [[maxwell-equations]]。

## 上位替代

- 含时变化的磁场需用完整 [[maxwell-equations]] 描述。

## 前置知识

- [[vector-calculus]]、[[electrostatics]]
