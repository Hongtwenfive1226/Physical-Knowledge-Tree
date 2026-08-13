---
id: rigid-body-mechanics
name: 刚体力学
name_en: Rigid Body Mechanics
domain: classic-mechanics
aliases: [刚体运动]
tags: [力学, 刚体, 转动]
keywords: [转动惯量, 惯量张量, 欧拉方程, 角速度, 欧拉角]
updated: 2026-08-13
links:
  - {id: newtonian-mechanics, weight: 4, note: 刚体力学是牛顿力学对质点系的推广}
  - {id: tensor-calculus, weight: 4, note: 惯量张量}
  - {id: angular-momentum-qm, weight: 2, note: 经典角动量与量子角动量的对应}
  - {id: hamiltonian-mechanics, weight: 3}
  - {id: group-theory, weight: 3, note: 欧拉角与旋转群}
  - {id: vibration-theory, weight: 2}
  - {id: vector-calculus, weight: 3}
superseded_by: []
supersedes: []
---
# 刚体力学

## 概述

刚体力学研究**形状与相对位置不变的质点系**（刚体）的运动。刚体的任意运动可分解为**平动**（质心运动）与**转动**（绕质心的旋转）。转动由角速度 $\vec\omega$ 与**惯量张量** $\hat I$ 描述；惯量张量是转动惯量在任意轴上的推广，其主轴系中的**欧拉动力学方程**是刚体转动的核心。刚体力学是理解陀螺、地球进动、卫星姿态的基础，其角动量结构也直接对应量子力学的角动量理论。

## 基本概念

- **刚体**：质点间距离不变的质点系，自由度 6（3 平动 + 3 转动）。
- **质心**：$\vec R=\frac1M\sum m_i\vec r_i$。
- **转动惯量**：$I=\sum m_i r_{\perp i}^2$；**惯量张量** $I_{jk}=\sum m_i(\delta_{jk}r_i^2-r_{ij}r_{ik})$。
- **角速度** $\vec\omega$：刚体的瞬时转动轴与速率。
- **欧拉角** $(\phi,\theta,\psi)$：三维转动的参数化（另可用四元数）。

## 核心内容

### 基本定律 / 方程

角动量与惯量张量：

$$ \vec L = \hat I\cdot\vec\omega $$

**欧拉动力学方程**（刚体主轴系中）：

$$ I_i\dot\omega_i + \epsilon_{ijk}\,\omega_j\,I_k\omega_k = M_i $$

**欧拉运动学方程**（角速度与欧拉角变化率的关系，自由刚体情形）。

质心运动由 $M\ddot{\vec R}=\vec F^{\mathrm{ext}}$ 决定（[[newtonian-mechanics]] 的质心定理）。

### 推导要点

- **角动量**：$\vec L=\sum m_i\vec r_i\times(\vec\omega\times\vec r_i)=\sum m_i(r_i^2\vec\omega-\vec r_i(\vec r_i\cdot\vec\omega))$，分量形式即 $L_j=\sum_k I_{jk}\omega_k$。
- **欧拉方程**：在主轴系中 $\vec L=(I_1\omega_1,I_2\omega_2,I_3\omega_3)$，由 $\frac{d\vec L}{dt}\big|_{\text{空间}}=\frac{d\vec L}{dt}\big|_{\text{刚体}}+\vec\omega\times\vec L=\vec M$ 展开即得。
- **主轴化**：惯量张量是实对称张量，可正交对角化（[[eigenvalue-problems]]），主轴是特征方向。

### 重要定理与推论

- **平行轴定理**：$I=I_{\mathrm{cm}}+Md^2$（对平行轴）。
- **对称刚体**：惯量椭球关于旋转对称（$I_1=I_2$），自由运动是自转 + 进动的叠加。
- **欧拉定理**：任意刚体运动可视为瞬时绕某轴的转动。
- **陀螺进动**：受外力矩的对称陀螺，其自转轴绕竖直轴缓慢进动。

## 深化内容

自由刚体的运动（欧拉-潘索运动）展示**进动、章动**；对称陀螺、重陀螺的动力学是经典力学的经典难题。现代姿态描述用**四元数**（避免欧拉角的奇异性）与**李群 SO(3)**。刚体角动量的泊松括号结构 $\{L_i,L_j\}=\epsilon_{ijk}L_k$ 直接对应量子角动量的对易关系（[[angular-momentum-qm]]）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Featherstone《Rigid Body Dynamics Algorithms》。

## 与其他知识的联系

- 紧密相关：[[newtonian-mechanics]]（质心运动）、[[tensor-calculus]]（惯量张量）、[[group-theory]]（欧拉角与 SO(3)）。
- 相关：[[eigenvalue-problems]]（主轴化）、[[hamiltonian-mechanics]]。
- 量子对应：[[angular-momentum-qm]]。

## 前置知识

- [[newtonian-mechanics]]、[[vector-calculus]]、[[linear-algebra]]
