---
id: black-holes
name: 黑洞
name_en: Black Holes
domain: relativity
aliases: [黑洞物理, 施瓦西黑洞]
tags: [相对论, 引力, 黑洞]
keywords: [事件视界, 奇点, 霍金辐射]
updated: 2026-08-13
links:
  - {id: general-relativity, weight: 5, note: 引力坍缩的极端解}
  - {id: einstein-field-equations, weight: 5, note: 施瓦西解}
  - {id: gravitational-waves, weight: 4, note: 并合辐射}
  - {id: thermodynamics, weight: 3, note: 黑洞热力学}
  - {id: quantum-field-theory, weight: 3, note: 霍金辐射}
  - {id: entropy-information, weight: 3, note: 黑洞熵}
  - {id: cosmology, weight: 2}
  - {id: string-theory, weight: 2, note: 量子引力研究}
  - {id: quantum-gravity, weight: 3, note: 黑洞信息悖论}
  - {id: compact-objects, weight: 2, note: 致密天体终极态}
superseded_by: []
supersedes: []
---
# 黑洞

## 概述

黑洞是广义相对论预言的**引力坍缩终极态**：物质坍缩到某半径内后，形成连光都无法逃逸的时空区域，其边界是**事件视界**。施瓦西解（球对称真空解）给出施瓦西半径 $r_s=2GM/c^2$，内部有曲率发散的**奇点**。黑洞由三个参数完全刻画（**无毛定理**）：质量、电荷、角动量。黑洞热力学与霍金辐射把广义相对论、量子场论与热力学联系起来，是量子引力研究的核心。

## 基本概念

- **事件视界**：$r=r_s$，内部信号无法逃出。
- **施瓦西半径**：$r_s=2GM/c^2$。
- **奇点**：曲率发散的时空点。
- **无毛定理**：黑洞由 $M,Q,J$ 三参数完全决定。
- **霍金辐射**：黑洞的半经典热辐射。

## 核心内容

### 基本定律 / 方程

**施瓦西度规**：

$$ ds^2=-\Big(1-\frac{2GM}{c^2r}\Big)c^2dt^2+\Big(1-\frac{2GM}{c^2r}\Big)^{-1}dr^2+r^2d\Omega^2 $$

**施瓦西半径**：

$$ r_s=\frac{2GM}{c^2} $$

**贝肯斯坦-霍金熵与霍金温度**：

$$ S=\frac{k_Bc^3A}{4G\hbar},\qquad T_H=\frac{\hbar c^3}{8\pi GMk_B} $$

### 推导要点

- **施瓦西解**：对球对称静态真空场方程求解，得施瓦西度规；$r=r_s$ 是坐标奇点（非物理）、$r=0$ 是真奇点。
- **事件视界的逃逸速度**：由逃逸速度 $v_{\mathrm{esc}}=\sqrt{2GM/r}=c$ 得 $r_s=2GM/c^2$（与牛顿类比，精确解巧合一致）。
- **霍金辐射**：视界附近的量子场产生粒子对，负能粒子落入黑洞、正能粒子逃逸，得热谱 $T_H=\hbar c^3/(8\pi GMk_B)$。

### 重要定理与推论

- **无毛定理**：黑洞由 $M,Q,J$ 唯一决定。
- **黑洞热力学四定律**：面积定理（面积不减）、温度-表面引力类比等。
- **霍金辐射与蒸发**：黑洞以 $T_H$ 辐射，最终蒸发（小质量黑洞温度更高）。
- **黑洞信息悖论**：蒸发后信息是否丢失（[[quantum-gravity]] 的核心问题）。

## 深化内容

黑洞的天体物理证据：[[gravitational-waves]]（LIGO 双黑洞并合）、事件视界望远镜（M87*、Sgr A* 成像）。黑洞熵、霍金辐射与信息悖论连接 [[quantum-field-theory]]、[[entropy-information]] 与 [[string-theory]]。延伸阅读可参考 Carroll《Spacetime and Geometry》、Wald《General Relativity》、Hawking & Ellis《The Large Scale Structure of Space-Time》。

## 与其他知识的联系

- 紧密相关：[[general-relativity]]、[[einstein-field-equations]]（施瓦西/克尔解）。
- 观测：[[gravitational-waves]]（并合）、[[compact-objects]]。
- 理论：[[entropy-information]]（信息悖论）、[[quantum-field-theory]]（霍金辐射）、[[string-theory]]/[[quantum-gravity]]。

## 前置知识

- [[general-relativity]]、[[einstein-field-equations]]、[[tensor-calculus]]
