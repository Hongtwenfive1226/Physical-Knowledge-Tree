---
id: plasma-physics
name: 等离子体物理
name_en: Plasma Physics
domain: plasma-physics
aliases: [等离子体]
tags: [等离子体, 电磁, 电离气体]
keywords: [等离子体, 电离, 德拜屏蔽, 集体行为]
updated: 2026-08-13
links:
  - {id: debye-screening, weight: 5, note: 等离子体准中性}
  - {id: plasma-oscillations, weight: 5, note: 集体振荡}
  - {id: magnetohydrodynamics, weight: 5, note: 磁化等离子体的流体描述}
  - {id: plasma-confinement, weight: 4, note: 磁约束}
  - {id: maxwell-equations, weight: 5, note: 电磁场方程}
  - {id: fluid-mechanics, weight: 4, note: 流体近似}
  - {id: statistical-mechanics, weight: 3, note: 分布函数与统计}
  - {id: turbulence, weight: 3, note: 等离子体湍流}
  - {id: electromagnetic-waves, weight: 3, note: 等离子体中的波}
superseded_by: []
supersedes: []
pos: {x: 25, y: 55, z: 0}
---
# 等离子体物理

## 概述

等离子体是**部分或完全电离的气体**（物质的第四态），由带电粒子与电磁场耦合而成，覆盖宇宙中 99% 以上的可见物质（恒星、星际介质、电离层）。其核心特征是**集体行为**：带电粒子的长程库仑作用使等离子体表现出德拜屏蔽（准中性）、集体振荡（朗缪尔波）与丰富波模。等离子体按描述层次分为：单粒子运动（漂移）、**动理学**（分布函数的弗拉索夫-玻尔兹曼方程）、**磁流体力学**（MHD 流体近似）。

## 基本概念

- **等离子体**：准中性电离气体。
- **德拜长度** $\lambda_D$：屏蔽的特征尺度（[[debye-screening]]）。
- **等离子体频率** $\omega_p$：电子集体振荡频率（[[plasma-oscillations]]）。
- **分布函数** $f(\vec r,\vec v,t)$：动理学描述。
- **磁化等离子体**：受磁场约束的等离子体（[[magnetohydrodynamics]]）。

## 核心内容

### 基本定律 / 方程

**德拜长度**与**等离子体频率**：

$$ \lambda_D=\sqrt{\frac{\varepsilon_0k_BT_e}{n_ee^2}},\qquad \omega_p=\sqrt{\frac{n_ee^2}{\varepsilon_0m_e}} $$

**弗拉索夫方程**（无碰撞动理学）：

$$ \frac{\partial f}{\partial t}+\vec v\cdot\nabla f+\frac{q}{m}(\vec E+\vec v\times\vec B)\cdot\nabla_vf=0 $$

### 推导要点

- **德拜屏蔽**：泊松方程 + 玻尔兹曼分布给出屏蔽势（[[debye-screening]]）。
- **等离子体振荡**：电子集体相对离子背景的振荡（[[plasma-oscillations]]）。
- **MHD**：对分布函数取矩（密度、动量、能量）得流体方程（[[magnetohydrodynamics]]）。

### 重要定理与推论

- **准中性**：$L\gg\lambda_D$ 时等离子体宏观电中性。
- **等离子体频率是截止频率**：$\omega<\omega_p$ 的电磁波不能传播。
- **磁约束**：磁场可约束等离子体（[[plasma-confinement]]）。
- **等离子体湍流**：非线性集体行为（[[turbulence]]）。

## 深化内容

等离子体物理连接 [[maxwell-equations]]、[[fluid-mechanics]]、[[statistical-mechanics]]，应用于受控聚变（[[plasma-confinement]]、[[nuclear-fusion]]）、空间等离子体（太阳风）、工业等离子体加工。延伸阅读可参考 陈骝《等离子体物理学导论》、Goldston & Rutherford《Introduction to Plasma Physics》、Freidberg《Plasma Physics and Fusion Energy》。

## 与其他知识的联系

- 紧密相关：[[debye-screening]]、[[plasma-oscillations]]、[[magnetohydrodynamics]]、[[maxwell-equations]]。
- 基础：[[fluid-mechanics]]（流体近似）、[[statistical-mechanics]]（分布函数）、[[electromagnetic-waves]]（波）。
- 相关：[[turbulence]]（等离子体湍流）、[[nuclear-fusion]]（聚变应用）。

## 前置知识

- [[maxwell-equations]]、[[statistical-mechanics]]、[[fluid-mechanics]]
