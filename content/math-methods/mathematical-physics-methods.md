---
id: mathematical-physics-methods
name: 数学物理方法
name_en: Methods of Mathematical Physics
domain: math-methods
aliases: [数理方法, 数学物理方程]
tags: [数学, 物理, 偏微分方程, 特殊函数]
keywords: [分离变量法, 本征值问题, 积分变换, 格林函数]
updated: 2026-08-13
links:
  - {id: partial-differential-equations, weight: 5, note: 数理方法的研究对象}
  - {id: eigenvalue-problems, weight: 5, note: 斯图姆-刘维尔本征值问题}
  - {id: green-function, weight: 5, note: 格林函数法}
  - {id: integral-transforms, weight: 4, note: 傅里叶/拉普拉斯变换法}
  - {id: special-functions, weight: 5, note: 分离变量所得本征函数}
  - {id: spherical-harmonics, weight: 5, note: 球谐函数是核心工具}
  - {id: separation-of-variables, weight: 5}
  - {id: vector-calculus, weight: 4}
  - {id: complex-analysis, weight: 4}
  - {id: fourier-analysis, weight: 4}
  - {id: schrodinger-equation, weight: 3}
  - {id: maxwell-equations, weight: 3}
  - {id: heat-conduction, weight: 3}
  - {id: variational-calculus, weight: 3}
superseded_by: []
supersedes: []
pos: {x: 0, y: -25, z: 0}
---
# 数学物理方法

## 概述

数学物理方法是沟通数学与物理的桥梁课程，系统研究三类典型偏微分方程（波动方程、热传导方程、拉普拉斯/泊松方程）的求解。其核心思想可概括为"把偏微分方程化为可解的标准问题"：**分离变量法**化为常微分方程本征值问题，**积分变换法**化为代数方程，**格林函数法**化为点源叠加。特殊函数（贝塞尔、勒让德、球谐）作为本征函数族贯穿始终。这门课是量子力学、电动力学、流体力学等一切场论课程的前置。

## 基本概念

- **三类标准方程**：波动方程（双曲）、热传导方程（抛物）、拉普拉斯方程（椭圆）。
- **定解条件**：初值条件 + 边界条件（狄利克雷/诺伊曼/混合）。
- **本征函数展开**：正交完备函数族的广义傅里叶级数。
- **格林函数**：点源的基本解。
- **特殊函数**：斯图姆-刘维尔问题的本征函数族。

## 核心内容

### 基本定律 / 方程

三类标准方程：

$$ \frac{\partial^2u}{\partial t^2}=c^2\nabla^2u,\qquad \frac{\partial u}{\partial t}=\alpha\nabla^2u,\qquad \nabla^2u=0 $$

**格林函数法**：

$$ \nabla^2G=-\delta(\vec r-\vec r'),\qquad u(\vec r)=\int G(\vec r,\vec r')\rho(\vec r')d^3r' $$

### 推导要点

- **分离变量**：设 $u=X(x)Y(y)Z(z)$，代入方程把偏微分化为常微分方程，分离常数即本征值。
- **积分变换**：对某变量做傅里叶/拉普拉斯变换，把微分化为乘法，解变换域代数方程后反演。
- **格林函数**：由 $LG=\delta$ 解出基本解，$u=G*f$ 满足 $Lu=f$（叠加原理）。

### 重要定理与推论

- **唯一性定理**：定解条件给定时解唯一（[[boundary-value-problems]]）。
- **正交完备性**：斯图姆-刘维尔本征函数族构成 $L^2_w$ 的完备正交基（[[eigenvalue-problems]]）。
- **三类方程的定性差异**：波动传播、热扩散、椭圆平衡。
- **特殊函数**：坐标系决定函数族（[[special-functions]]、[[spherical-harmonics]]）。

## 深化内容

数学物理方法的现代发展通向**泛函分析**（索伯列夫空间、弱解）、**分布理论**（$\delta$ 函数严格化）与**渐近方法**（WKB、鞍点法）。它也是 [[quantum-mechanics]]（定态方程）、[[maxwell-equations]]（边值问题）与 [[heat-conduction]] 的直接工具。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Courant & Hilbert《Methods of Mathematical Physics》、王竹溪《特殊函数概论》。

## 与其他知识的联系

- 紧密相关：[[partial-differential-equations]]（对象）、[[eigenvalue-problems]]（理论核心）、[[green-function]]、[[integral-transforms]]、[[special-functions]]（工具）。
- 物理应用：[[schrodinger-equation]]、[[maxwell-equations]]、[[heat-conduction]]、[[boundary-value-problems]]。
- 数学基础：[[vector-calculus]]、[[complex-analysis]]、[[fourier-analysis]]、[[variational-calculus]]。

## 前置知识

- [[calculus]]、[[differential-equations]]、[[vector-calculus]]、[[complex-analysis]]
