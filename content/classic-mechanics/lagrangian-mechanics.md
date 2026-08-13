---
id: lagrangian-mechanics
name: 拉格朗日力学
name_en: Lagrangian Mechanics
domain: classic-mechanics
aliases: [分析力学, 拉格朗日方程]
tags: [力学, 约束, 广义坐标, 最小作用量]
keywords: [拉格朗日量, 广义坐标, 约束, 最小作用量原理, 广义动量]
updated: 2026-08-13
links:
  - {id: newtonian-mechanics, weight: 5, note: 拉格朗日力学与牛顿力学在物理上等价，是后者的一般化表述}
  - {id: hamiltonian-mechanics, weight: 5, note: 由拉格朗日形式经勒让德变换得到哈密顿形式}
  - {id: variational-calculus, weight: 5, note: 最小作用量原理是变分法的直接应用}
  - {id: conservation-laws, weight: 4, note: 诺特定理从对称性推出守恒量}
  - {id: calculus, weight: 3}
  - {id: quantum-field-theory, weight: 3, note: 拉格朗日密度形式是量子场论的出发点}
  - {id: special-relativity, weight: 2}
supersedes: [newtonian-mechanics]
superseded_by: [quantum-field-theory]
pos: {x: -15, y: 10, z: 0}
---
# 拉格朗日力学

## 概述

拉格朗日力学是经典力学的**分析形式**：以广义坐标描述系统，以拉格朗日量 $L=T-V$ 为核心，由**最小作用量原理**统一导出运动方程。它的优势在于：采用任意广义坐标自动满足约束（无需解约束反力）、对多自由度与复杂约束系统极其高效、且以标量 $L$ 取代矢量力，为对称性分析（诺特定理）与量子化提供了自然语言。拉格朗日力学与牛顿力学在物理上完全等价，却是通往哈密顿力学、量子场论的必经之路。

## 基本概念

- **广义坐标** $q_i$：一组足以确定系统位形的独立参数（数目 = 自由度）。
- **广义速度** $\dot q_i$；**拉格朗日量** $L(q,\dot q,t)=T-V$。
- **作用量**：$S=\int_{t_1}^{t_2}L\,dt$，沿路径的泛函。
- **广义动量**：$p_i=\partial L/\partial\dot q_i$。
- **循环坐标**：$L$ 不显含的 $q_k$，对应广义动量守恒。
- **完整约束 / 非完整约束**：可表为 $f(q,t)=0$ / 不可（需乘子或另法处理）。

## 核心内容

### 基本定律 / 方程

**最小作用量原理**（哈密顿原理）：真实运动使作用量取驻值 $\delta S=0$。

**欧拉-拉格朗日方程**：

$$ \frac{\mathrm d}{\mathrm dt}\frac{\partial L}{\partial\dot q_i}-\frac{\partial L}{\partial q_i}=0 $$

**广义动量与循环坐标**：

$$ \frac{\partial L}{\partial q_k}=0 \;\Rightarrow\; p_k=\frac{\partial L}{\partial\dot q_k}=\mathrm{const} $$

### 推导要点

- **由达朗贝尔原理到拉格朗日方程**：从牛顿第二定律 + 虚功原理（约束反力做虚功为零）出发，把 $\vec F_i-\dot{\vec p}_i$ 投影到广义坐标上，经偏导恒等式 $\frac{\partial\vec r_i}{\partial q_j}=\frac{\partial\dot{\vec r}_i}{\partial\dot q_j}$、$\frac{d}{dt}\frac{\partial\vec r_i}{\partial q_j}=\frac{\partial\dot{\vec r}_i}{\partial q_j}$ 整理，即得拉格朗日方程。
- **由变分原理**：$\delta S=\int\big(\frac{\partial L}{\partial q}\delta q+\frac{\partial L}{\partial\dot q}\delta\dot q\big)dt$，对第二项分部积分，用 $\delta q$ 在端点为零，得欧拉-拉格朗日方程（见 [[variational-calculus]]）。
- **规范自由度**：$L$ 可加时间全导数 $L'=L+\frac{dF(q,t)}{dt}$ 而不改变运动方程。

### 重要定理与推论

- **诺特定理**：每个连续对称性对应守恒量（见 [[conservation-laws]]）——时间平移→能量、空间平移→动量、旋转→角动量。
- **能量函数**：$h=\sum_i\dot q_i\frac{\partial L}{\partial\dot q_i}-L$，当 $L$ 不显含时间时守恒（常等于 $T+V$）。
- **与牛顿力学的等价性**：取 $q_i$ 为直角坐标，$L=\tfrac12m\dot r^2-V$，拉格朗日方程即 $\vec F=m\vec a$。

## 深化内容

拉格朗日框架是**现代理论物理的通用起点**：相对论粒子的作用量、广义相对论的爱因斯坦-希尔伯特作用量、以及**量子场论的拉格朗日密度**都源于此。在量子力学中，最小作用量原理经**路径积分**（[[path-integral]]）推广——所有路径以 $e^{iS/\hbar}$ 贡献。规范对称性、自发破缺等场论概念也在拉格朗日语言中表述。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Landau & Lifshitz《Mechanics》。

## 与其他知识的联系

- 紧密相关：[[newtonian-mechanics]]（等价形式）、[[hamiltonian-mechanics]]（勒让德变换得到）、[[variational-calculus]]（数学基础）。
- 相关：[[conservation-laws]]（诺特定理）、[[rigid-body-mechanics]]。
- 更远：[[quantum-field-theory]]（拉格朗日密度）、[[path-integral]]（作用量的量子推广）、[[general-relativity]]（测地线作用量）。

## 上位替代

- 对微观/高速系统，单粒子拉格朗日形式被 [[quantum-field-theory]] 的场论拉格朗日密度取代；经典作用量在量子力学中以 [[path-integral]] 推广。

## 前置知识

- [[variational-calculus]]、[[calculus]]、[[linear-algebra]]
