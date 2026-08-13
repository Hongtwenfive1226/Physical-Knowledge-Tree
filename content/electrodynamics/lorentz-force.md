---
id: lorentz-force
name: 洛伦兹力
name_en: Lorentz Force
domain: electrodynamics
aliases: [电磁力]
tags: [电磁学, 力, 电荷运动]
keywords: [电场力, 磁场力, 霍尔效应, 回旋运动]
updated: 2026-08-13
links:
  - {id: electrostatics, weight: 4, note: 电场力部分}
  - {id: magnetostatics, weight: 4, note: 磁场力部分}
  - {id: maxwell-equations, weight: 4, note: 与麦克斯韦方程组共同构成电磁学}
  - {id: special-relativity, weight: 3, note: 洛伦兹协变形式}
  - {id: electromagnetic-induction, weight: 3, note: 动生电动势}
superseded_by: []
supersedes: []
---
# 洛伦兹力

## 概述

洛伦兹力是带电粒子在电磁场中受到的力，与麦克斯韦方程组一起构成经典电磁学的**完整内容**：方程组决定场如何由源产生与演化，洛伦兹力决定场如何作用于电荷。其电场部分可做功改变粒子动能，磁场部分恒不做功、只弯曲运动方向。洛伦兹力是加速器、质谱仪、霍尔效应、磁流体、等离子体物理的基础，其四维协变形式与狭义相对论完全一致。

## 基本概念

- **电场力**：$\vec F_E=q\vec E$，做功改变动能。
- **磁场力**：$\vec F_B=q\vec v\times\vec B$，恒与速度垂直、不做功。
- **回旋运动**：均匀磁场中带电粒子做圆周运动，回旋频率 $\omega_c=qB/m$、半径 $r=mv/(qB)$。
- **漂移**：叠加电场/梯度场时导向中心的漂移速度。

## 核心内容

### 基本定律 / 方程

**洛伦兹力**：

$$ \vec F=q\big(\vec E+\vec v\times\vec B\big) $$

运动方程：

$$ \frac{d\vec p}{dt}=q\big(\vec E+\vec v\times\vec B\big) $$

**四维力形式**（相对论）：

$$ \frac{dp^\mu}{d\tau}=qF^{\mu\nu}u_\nu $$

### 推导要点

- **磁场不做功**：功率 $P=\vec F_B\cdot\vec v=q(\vec v\times\vec B)\cdot\vec v=0$（混合积含两个 $\vec v$，为零）。
- **回旋运动**：垂直 $\vec B$ 的方程 $\dot{\vec v}=\omega_c\vec v\times\hat B$ 是匀速圆周运动，半径与频率如上。
- **回旋 + 漂移**：$\vec v=\vec v_\perp+\vec v_\parallel$，纵向匀速、横向回旋；外加 $\vec E_\perp$ 产生 $\vec E\times\vec B$ 漂移。

### 重要定理与推论

- **霍尔效应**：导体中载流子在磁场下偏转，建立横向霍尔电压 $V_H=IB/(nq\,d)$。
- **回旋加速器原理**：$\omega_c$ 与速度无关（非相对论），可用固定频率电场持续加速。
- **洛伦兹力与动生电动势**：导体切割磁感线时，洛伦兹力驱动电荷分离，是 [[electromagnetic-induction]] 动生电动势的来源。
- **相对论不变性**：洛伦兹力是四维力 $f^\mu=qF^{\mu\nu}u_\nu$ 的空间分量。

## 深化内容

洛伦兹力的相对论协变形式（[[special-relativity]]、[[relativistic-electrodynamics]]）显示电场力与磁场力是同一电磁张量 $F_{\mu\nu}$ 的不同分量，磁场力本质是运动参照系中的电场效应。在**等离子体物理**（[[plasma-physics]]）中，洛伦兹力是回旋、漂移、磁约束的基础。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Chen《等离子体物理学导论》。

## 与其他知识的联系

- 紧密相关：[[electrostatics]]/[[magnetostatics]]（力的来源）、[[maxwell-equations]]（场的演化）。
- 应用：[[electromagnetic-induction]]（动生电动势）、[[plasma-physics]]（漂移）、[[semiconductors]]（霍尔效应）。
- 相对论：[[special-relativity]]（四维力形式）。

## 前置知识

- [[electrostatics]]、[[magnetostatics]]、[[special-relativity]]
