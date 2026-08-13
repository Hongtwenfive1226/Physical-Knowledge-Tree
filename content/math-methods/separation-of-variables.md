---
id: separation-of-variables
name: 分离变量法
name_en: Separation of Variables
domain: math-methods
aliases: [变量分离]
tags: [数学, 方法, 偏微分方程]
keywords: [本征函数, 本征值, 叠加原理]
updated: 2026-08-13
links:
  - {id: mathematical-physics-methods, weight: 5, note: 数理方法的核心技术之一}
  - {id: eigenvalue-problems, weight: 5, note: 分离变量归结为本征值问题}
  - {id: special-functions, weight: 5, note: 坐标系决定所得特殊函数族}
  - {id: partial-differential-equations, weight: 4}
  - {id: schrodinger-equation, weight: 4, note: 定态问题即分离变量}
  - {id: spherical-harmonics, weight: 4}
superseded_by: []
supersedes: []
---
# 分离变量法

## 概述

分离变量法是求解线性偏微分方程最基本的方法：假设解可写成**单变量函数之积**，代入方程把偏微分方程化为若干**常微分方程**（本征值问题），再由边界条件确定本征值与本征函数，最后用**叠加原理**由初/边条件定出系数。分离变量法的可行性依赖于方程的可分离性与坐标系的对称性；不同坐标系分离出不同的特殊函数族，因此它也是理解特殊函数（贝塞尔、勒让德、球谐）的自然途径。

## 基本概念

- **分离假设**：$u(x,y,z)=X(x)Y(y)Z(z)$。
- **分离常数**：分离过程中引入的常数（本征值）。
- **本征值问题**：分离后的常微分方程 + 边界条件。
- **叠加原理**：线性方程解的线性组合仍是解。

## 核心内容

### 基本定律 / 方程

三维拉普拉斯方程的分离（球坐标）：

$$ \nabla^2u=0\quad\Rightarrow\quad u=R(r)\Theta(\theta)\Phi(\phi) $$

径向、角向分离为：

$$ \frac{d^2\Phi}{d\phi^2}=-m^2\Phi,\qquad \Theta(\theta)=P_l^m(\cos\theta),\qquad R(r)=Ar^l+Br^{-l-1} $$

通解（叠加）：

$$ u(r,\theta,\phi)=\sum_{l=0}^{\infty}\sum_{m=-l}^{l}\big(A_{lm}r^l+B_{lm}r^{-l-1}\big)Y_{lm}(\theta,\phi) $$

### 推导要点

- **分离步骤**：代入 $u=R\Theta\Phi$，两边同除以 $u$，把依赖不同变量的项分离到方程两边，各等于一个常数。
- **角向方程**：$\Phi''+m^2\Phi=0$（三角函数），$\Theta$ 满足连带勒让德方程（$l(l+1)$ 本征值）。
- **系数确定**：用本征函数的正交性 $\int Y_{lm}^*Y_{l'm'}d\Omega=\delta_{ll'}\delta_{mm'}$ 定出 $A_{lm},B_{lm}$。

### 重要定理与推论

- **斯图姆-刘维尔框架**：分离变量产生的常微分方程都是斯图姆-刘维尔问题（[[eigenvalue-problems]]）。
- **坐标系的对应**：直角→三角/双曲、球→球谐、柱→贝塞尔。
- **定态薛定谔方程**：量子力学定态就是分离变量（[[schrodinger-equation]]）。
- **边界条件决定本征值**：如无限势阱 $k_n=n\pi/L$。

## 深化内容

分离变量法是 [[mathematical-physics-methods]] 的核心，用于 [[electromagnetic-waves]]（波导模式）、[[heat-conduction]]（热传导）、[[schrodinger-equation]]（定态）。不可分离系统需积分变换或格林函数。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Griffiths《电动力学导论》第三章、王竹溪《特殊函数概论》。

## 与其他知识的联系

- 紧密相关：[[eigenvalue-problems]]（本征值与本征函数）、[[special-functions]]（本征函数库）、[[spherical-harmonics]]。
- 应用：[[schrodinger-equation]]（定态问题）、[[electromagnetic-waves]]（波导模式）、[[heat-conduction]]。
- 基础：[[mathematical-physics-methods]]、[[partial-differential-equations]]。

## 前置知识

- [[partial-differential-equations]]、[[differential-equations]]、[[eigenvalue-problems]]
