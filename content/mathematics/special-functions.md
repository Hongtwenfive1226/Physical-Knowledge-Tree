---
id: special-functions
name: 特殊函数
name_en: Special Functions
domain: mathematics
aliases: [正交多项式]
tags: [数学, 特殊函数, 数学物理]
keywords: [勒让德函数, 贝塞尔函数, 厄米函数, 正交性, 超几何函数]
updated: 2026-08-13
links:
  - {id: eigenvalue-problems, weight: 5, note: 特殊函数是斯图姆-刘维尔问题的本征函数}
  - {id: spherical-harmonics, weight: 5, note: 球谐函数是特殊函数的重要成员}
  - {id: hydrogen-atom, weight: 4, note: 氢原子波函数含拉盖尔/球谐函数}
  - {id: quantum-harmonic-oscillator, weight: 4, note: 厄米多项式}
  - {id: partial-differential-equations, weight: 4}
  - {id: complex-analysis, weight: 4, note: 留数法计算特殊函数积分}
  - {id: electromagnetic-waves, weight: 2, note: 贝塞尔函数用于柱坐标}
superseded_by: []
supersedes: []
---
# 特殊函数

## 概述

特殊函数是数学物理方程在特定坐标系下分离变量后得到的本征函数族：勒让德多项式 $P_l(x)$、连带勒让德函数 $P_l^m(x)$、球谐函数 $Y_{lm}$、贝塞尔函数 $J_\nu(x)$、厄米多项式 $H_n(x)$、拉盖尔多项式、以及统一它们的**超几何函数**。它们共同满足**斯图姆-刘维尔方程**，构成带权正交完备系，从而保证"广义傅里叶展开"（本征函数展开）的合法性——这是解偏微分方程与量子力学定态问题的数学基础。

## 基本概念

- **斯图姆-刘维尔方程**：$\dfrac{d}{dx}\big[p(x)y'\big]+[\lambda w(x)-q(x)]y=0$，$w$ 为权函数。
- **正交性**：$\int_a^b w(x)p_n(x)p_m(x)\,dx=0\ (n\ne m)$。
- **生成函数**：把一族正交多项式打包为一个母函数，如勒让德 $\frac1{\sqrt{1-2xt+t^2}}=\sum P_n(x)t^n$。
- **递推关系**：相邻阶之间的线性关系，是数值计算与推导的主要工具。

## 核心内容

### 基本定律 / 方程

各函数族的微分方程与正交性：

- **勒让德方程**：$(1-x^2)y''-2xy'+l(l+1)y=0$，解 $P_l(x)$，正交于 $[-1,1]$。
- **贝塞尔方程**：$x^2y''+xy'+(x^2-\nu^2)y=0$，解 $J_\nu(x)$，源于柱坐标拉普拉斯方程。
- **厄米方程**：$y''-2xy'+2ny=0$，解 $H_n(x)$，正交于 $(-\infty,\infty)$ 权 $e^{-x^2}$。
- **拉盖尔方程**：$xy''+(1-x)y'+ny=0$，解 $L_n(x)$，源于径向氢原子方程。

正交性统一表述：

$$ \int_a^b w(x)\,p_n(x)\,p_m(x)\,\mathrm dx = \delta_{nm}\|p_n\|^2 $$

### 推导要点

- **正交性来源**：斯图姆-刘维尔算符是（在权 $w$ 下）自伴的，不同本征值的本征函数自动正交（$\lambda_n-\lambda_m\neq0$ 时内积为零）。
- **生成函数展开**：把生成函数对 $t$ 泰勒展开，逐项系数即 $P_n(x)$；对生成函数求导可推得递推关系。
- **贝塞尔函数**：对柱坐标拉普拉斯方程分离变量后，径向满足贝塞尔方程，用弗罗贝尼乌斯级数法（指标方程）得到 $J_\nu(x)$ 的幂级数。

### 重要定理与推论

- **完备性**：本征函数族构成 $L^2_w$ 的完备正交基，任意函数可展开 $f=\sum c_n p_n$。
- **递推与微分公式**：如 $(2n+1)xP_n=(n+1)P_{n+1}+nP_{n-1}$、$H_n'=2nH_{n-1}$。
- **正交多项式与零点**：$n$ 阶正交多项式有 $n$ 个实零点（高斯求积节点）。
- **渐近行为**：$J_\nu(x)\sim\sqrt{2/(\pi x)}\cos(x-\nu\pi/2-\pi/4)$（$x\to\infty$）。

## 深化内容

所有"经典正交多项式"与贝塞尔函数都统一于**超几何函数** ${}_2F_1$ 与合流超几何函数 ${}_1F_1$，其积分表示、递推关系与渐近展开构成系统理论。**渐近分析**（最速下降法、鞍点法、WKB）给出大参数展开。**椭圆函数与 θ 函数**是更一般的周期/拟周期函数。现代物理中，特殊函数出现在精确可解模型（氢原子、谐振子、角动量）与可积系统。延伸阅读可参考王竹溪《特殊函数概论》、Arfken《Mathematical Methods for Physicists》、Abramowitz & Stegun《Handbook of Mathematical Functions》。

## 与其他知识的联系

- 紧密相关：[[eigenvalue-problems]] 与本征函数展开；[[spherical-harmonics]] 与 [[hydrogen-atom]]、[[angular-momentum-qm]]。
- 应用：[[quantum-harmonic-oscillator]]（厄米多项式）、[[electromagnetic-waves]]（贝塞尔函数）、[[boundary-value-problems]]。
- 方法：[[complex-analysis]]（留数）、[[integral-transforms]]。

## 前置知识

- [[calculus]]、[[differential-equations]]
