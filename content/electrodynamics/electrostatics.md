---
id: electrostatics
name: 静电学
name_en: Electrostatics
domain: electrodynamics
aliases: [静电场, 库仑定律]
tags: [电磁学, 电场, 静电]
keywords: [库仑定律, 高斯定律, 电势, 泊松方程]
updated: 2026-08-13
links:
  - {id: vector-calculus, weight: 5, note: 高斯定理与梯度}
  - {id: magnetostatics, weight: 4, note: 静电与静磁的对偶}
  - {id: maxwell-equations, weight: 5, note: 静电场是麦克斯韦方程组的高斯定律特例}
  - {id: boundary-value-problems, weight: 4, note: 泊松/拉普拉斯方程求解}
  - {id: green-function, weight: 4, note: 点源格林函数}
  - {id: complex-analysis, weight: 2, note: 二维保角映射}
  - {id: multipole-expansion, weight: 4}
superseded_by: [maxwell-equations]
supersedes: []
---
# 静电学

## 概述

静电学研究**静止电荷**产生的电场。其出发点是**库仑定律**（实验定律），等价表述为**高斯定律**。静电场是**无旋**的（$\nabla\times\vec E=0$），故可引入**电势** $\phi$，使电场表达为梯度 $\vec E=-\nabla\phi$；电势满足**泊松方程**。静电学的核心是求解给定电荷分布与边界条件下的场，工具包括高斯定律（高对称）、镜像法、分离变量法与多极展开。静电学是麦克斯韦方程组在"无时变"情形的退化，也是格林函数法与边值问题的标准实例。

## 基本概念

- **电荷** $q$：电场之源，量子化为 $e=1.602\times10^{-19}\,\mathrm C$。
- **电场**：单位电荷受的力 $\vec E=\vec F/q$；**电通量** $\Phi_E=\int\vec E\cdot d\vec S$。
- **电势**：$\vec E=-\nabla\phi$，$\phi$ 差为移动单位电荷所做的功。
- **电位移**（介质中）：$\vec D=\varepsilon_0\vec E+\vec P$。

## 核心内容

### 基本定律 / 方程

**库仑定律**：

$$ \vec F=\frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}\hat r,\qquad \vec E(\vec r)=\frac{1}{4\pi\varepsilon_0}\int\frac{\rho(\vec r')\hat{\mathcal R}}{\mathcal R^2}d\tau' $$

**高斯定律**（微分与积分形式）：

$$ \nabla\cdot\vec E=\frac{\rho}{\varepsilon_0},\qquad \oint\vec E\cdot d\vec S=\frac{Q_{\mathrm{encl}}}{\varepsilon_0} $$

**电势与泊松方程**：

$$ \vec E=-\nabla\phi,\qquad \nabla^2\phi=-\frac{\rho}{\varepsilon_0} $$

### 推导要点

- **高斯定律 $\Leftrightarrow$ 库仑定律**：对点电荷，包围它的闭曲面通量为 $q/\varepsilon_0$（立体角 $4\pi$）；由叠加原理推广到任意分布。微分形式由散度定理 $\oint\vec E\cdot d\vec S=\int\nabla\cdot\vec E\,d\tau$ 得到。
- **泊松方程**：把 $\vec E=-\nabla\phi$ 代入 $\nabla\cdot\vec E=\rho/\varepsilon_0$ 即得。
- **静电能**：把电荷逐个从无穷远搬来，$W=\frac12\sum q_i\phi_i=\frac{\varepsilon_0}{2}\int E^2d\tau$（能量储存于场中）。

### 重要定理与推论

- **静电场的无旋性**：$\nabla\times\vec E=0$，故 $\oint\vec E\cdot d\vec l=0$（保守场）。
- **导体的性质**：静电平衡时导体内 $\vec E=0$、表面是等势面、电荷只分布在表面。
- **唯一性定理**：给定边界条件，泊松方程的解唯一（边值问题的理论保证）。
- **静电能**：$W=\frac12\int\rho\phi\,d\tau$ 或 $\frac{\varepsilon_0}{2}\int E^2d\tau$。

## 深化内容

静电学是**格林函数法**与**边值问题**（[[boundary-value-problems]]）的标准范例：点电荷势 $G=1/(4\pi\varepsilon_0|\vec r-\vec r'|)$ 即拉普拉斯算子的格林函数。**多极展开**（[[multipole-expansion]]）把远处场按单极、偶极、四极展开。二维静电问题可用**保角映射**（[[complex-analysis]]）求解。静电与静磁的对偶（[[magnetostatics]]）以及相对论下的电-磁统一（[[special-relativity]]）是深入理解的关键。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、费曼《物理学讲义》第二卷。

## 与其他知识的联系

- 紧密相关：[[magnetostatics]]（对偶）、[[maxwell-equations]]（一般化）、[[boundary-value-problems]]、[[green-function]]。
- 数学：[[vector-calculus]]、[[multipole-expansion]]、[[complex-analysis]]。

## 上位替代

- 随时间变化的电场由完整 [[maxwell-equations]] 描述（静电是其 $\partial/\partial t=0$ 的特例）。

## 前置知识

- [[vector-calculus]]、[[calculus]]
