---
id: green-function
name: 格林函数
name_en: Green's Functions
domain: math-methods
aliases: [格林函数法]
tags: [数学, 方法, 点源, 线性算子]
keywords: [点源, 基本解, 卷积, 传播子]
updated: 2026-08-13
links:
  - {id: partial-differential-equations, weight: 5, note: 线性非齐次 PDE 的通解方法}
  - {id: mathematical-physics-methods, weight: 5}
  - {id: electrostatics, weight: 4, note: 泊松方程格林函数}
  - {id: path-integral, weight: 4, note: 传播子即含时格林函数}
  - {id: scattering-theory, weight: 4, note: 李普曼-施温格方程}
  - {id: quantum-field-theory, weight: 3}
  - {id: heat-conduction, weight: 3, note: 热传导方程格林函数}
superseded_by: []
supersedes: []
---
# 格林函数

## 概述

格林函数是线性微分算子对**点源**的响应（基本解），是求解非齐次线性方程的统一方法。对线性方程 $Lu=f$，解就是"各点源的响应按源的强度叠加"：

$$ u(x)=\int G(x,x')f(x')dx' $$

格林函数由 $LG(x,x')=\delta(x-x')$ 加边界条件确定。格林函数在物理中无处不在：静电学的点电荷势（$1/r$）、量子力学的传播子、热传导的热核、散射理论的李普曼-施温格核，都是格林函数。

## 基本概念

- **点源**：$\delta$ 函数。
- **格林函数**：$LG(x,x')=\delta(x-x')$ 的解。
- **卷积叠加**：$u=G*f$。
- **传播子**：含时格林函数（量子力学 $e^{-iHt/\hbar}$）。
- **格林算符**：$(E-H_0)^{-1}$。

## 核心内容

### 基本定律 / 方程

格林函数定义：

$$ L_xG(x,x')=\delta(x-x') $$

解的卷积表示：

$$ u(x)=\int G(x,x')f(x')dx' $$

静电学格林函数（泊松方程基本解）：

$$ \nabla^2G=-\delta(\vec r-\vec r'),\qquad G(\vec r,\vec r')=\frac{1}{4\pi|\vec r-\vec r'|} $$

### 推导要点

- **基本解的来源**：对泊松方程，球对称解 $\nabla^2G=0\ (r\ne0)$ 得 $G=C/r$，由 $\int\nabla^2G\,d\tau=-1$（高斯定理）定出 $C=1/4\pi$。
- **叠加原理**：$L\big(\int Gf\big)=\int(LG)f=\int\delta f=f$。
- **本征展开**：$G(x,x')=\sum_n\frac{\psi_n(x)\psi_n^*(x')}{\lambda_n}$（用本征函数展开 $\delta$）。

### 重要定理与推论

- **格林函数的对称性**：$G(x,x')=G(x',x)$（自伴算子）。
- **库仑势是格林函数**：静电点电荷势即泊松方程基本解（[[electrostatics]]）。
- **传播子是含时格林函数**：量子力学 [[path-integral]] 的传播子、场论传播子。
- **李普曼-施温格方程**：散射理论的格林算符表述（[[scattering-theory]]）。

## 深化内容

格林函数是[[mathematical-physics-methods]]、[[boundary-value-problems]]、[[quantum-field-theory]]（传播子、费曼图）、[[scattering-theory]] 的共同工具。镜像格林函数、推迟/超前格林函数分别对应不同边界条件与因果性。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Jackson《Classical Electrodynamics》、Mathews & Walker《Mathematical Methods of Physics》。

## 与其他知识的联系

- 紧密相关：[[electrostatics]]（库仑势）、[[path-integral]]（传播子）、[[scattering-theory]]（李普曼-施温格方程）。
- 应用：[[heat-conduction]]（热核）、[[quantum-field-theory]]（场论传播子）、[[partial-differential-equations]]。
- 方法：[[mathematical-physics-methods]]、[[integral-transforms]]（变换法求格林函数）。

## 前置知识

- [[partial-differential-equations]]、[[vector-calculus]]、[[fourier-analysis]]
