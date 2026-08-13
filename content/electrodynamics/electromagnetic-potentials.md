---
id: electromagnetic-potentials
name: 电磁势与规范
name_en: Electromagnetic Potentials & Gauge
domain: electrodynamics
aliases: [矢势, 标势, 规范变换]
tags: [电磁学, 势, 规范]
keywords: [矢势 A, 标势 phi, 洛伦兹规范, 库仑规范]
updated: 2026-08-13
links:
  - {id: maxwell-equations, weight: 5, note: 势是方程组的简化表述}
  - {id: magnetostatics, weight: 4, note: 矢势}
  - {id: electrostatics, weight: 4, note: 标势}
  - {id: gauge-field-theory, weight: 4, note: 规范自由度的物理诠释}
  - {id: aharonov-bohm-effect, weight: 4, note: 势的物理效应}
  - {id: relativistic-electrodynamics, weight: 4, note: 四矢势}
superseded_by: []
supersedes: []
---
# 电磁势与规范

## 概述

电磁场可用**标势** $\phi$ 与**矢势** $\vec A$ 描述，从而把麦克斯韦方程组（四个一阶方程）化为更简洁的势方程。势不是唯一的——**规范变换**不改变物理场 $\vec E,\vec B$。这一"规范自由度"看似是数学冗余，却有深刻物理意义：**阿哈罗诺夫-玻姆效应**证明势（的相位）本身可观测，而规范对称性正是现代规范场论（$U(1)$、杨-米尔斯）的原型。

## 基本概念

- **标势 / 矢势**：$\phi$、$\vec A$。
- **规范变换**：$\phi\to\phi-\partial\Lambda/\partial t$、$\vec A\to\vec A+\nabla\Lambda$。
- **库仑规范**：$\nabla\cdot\vec A=0$。
- **洛伦兹规范**：$\nabla\cdot\vec A+\frac1{c^2}\frac{\partial\phi}{\partial t}=0$。

## 核心内容

### 基本定律 / 方程

势与场的关系：

$$ \vec E=-\nabla\phi-\frac{\partial\vec A}{\partial t},\qquad \vec B=\nabla\times\vec A $$

洛伦兹规范下的达朗贝尔方程：

$$ \Big(\nabla^2-\frac1{c^2}\frac{\partial^2}{\partial t^2}\Big)\phi=-\frac{\rho}{\varepsilon_0},\qquad \Big(\nabla^2-\frac1{c^2}\frac{\partial^2}{\partial t^2}\Big)\vec A=-\mu_0\vec J $$

### 推导要点

- **矢势的存在性**：由 $\nabla\cdot\vec B=0$，可用旋度表示 $\vec B=\nabla\times\vec A$；由 $\nabla\times(\vec E+\partial\vec A/\partial t)=0$，可用梯度表示 $\vec E+\partial\vec A/\partial t=-\nabla\phi$。
- **达朗贝尔方程**：把 $\vec E,\vec B$ 用势表示后代入麦克斯韦方程组，选取洛伦兹规范即得（$\phi,\vec A$ 解耦为两个达朗贝尔方程）。
- **规范不变性**：$\nabla\times\nabla\Lambda=0$、$\nabla(\partial\Lambda/\partial t)-\partial(\nabla\Lambda)/\partial t=0$，故 $\vec E,\vec B$ 在规范变换下不变。

### 重要定理与推论

- **规范自由度**：势不唯一，但 $\vec E,\vec B$ 唯一（规范不变性）。
- **库仑规范的物理**：标势即瞬时库仑势，矢势满足无源条件。
- **洛伦兹规范的协变性**：适合相对论表述，四矢势 $A^\mu=(\phi/c,\vec A)$。
- **阿哈罗诺夫-玻姆效应**：矢势在 $\vec B=0$ 区域仍影响量子相位（见 [[aharonov-bohm-effect]]）。

## 深化内容

规范对称性是现代理论物理的核心：电磁场是 $U(1)$ **规范场**（[[gauge-field-theory]]），规范变换推广为局域对称性，矢势即联络、电磁张量即曲率（纤维丛语言）。阿哈罗诺夫-玻姆效应与贝里相位（[[berry-phase]]）都源于势的几何意义。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[maxwell-equations]]、[[relativistic-electrodynamics]]（四矢势 $A^\mu$）、[[magnetostatics]]/[[electrostatics]]。
- 量子效应：[[aharonov-bohm-effect]]；规范理论：[[gauge-field-theory]]。

## 前置知识

- [[maxwell-equations]]、[[vector-calculus]]
