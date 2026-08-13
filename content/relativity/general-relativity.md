---
id: general-relativity
name: 广义相对论
name_en: General Relativity
domain: relativity
aliases: [广义相对论, GR]
tags: [相对论, 引力, 时空]
keywords: [等效原理, 场方程, 弯曲时空, 测地线]
updated: 2026-08-13
links:
  - {id: equivalence-principle, weight: 5, note: 出发点}
  - {id: einstein-field-equations, weight: 5, note: 核心方程}
  - {id: differential-geometry, weight: 5, note: 数学语言}
  - {id: tensor-calculus, weight: 5, note: 计算工具}
  - {id: special-relativity, weight: 4, note: 平直时空极限}
  - {id: black-holes, weight: 5, note: 极端引力}
  - {id: gravitational-waves, weight: 4, note: 引力波}
  - {id: cosmology, weight: 5, note: 宇宙学}
  - {id: central-force-motion, weight: 3, note: 轨道修正}
  - {id: astrophysics, weight: 3, note: 强引力天体应用}
  - {id: quantum-gravity, weight: 3, note: 待与量子力学统一}
supersedes: [newtonian-mechanics, special-relativity, central-force-motion]
superseded_by: []
pos: {x: 55, y: -15, z: 0}
---
# 广义相对论

## 概述

广义相对论（爱因斯坦，1915）是引力的几何理论：引力不是"力"，而是**时空弯曲**的表现。由**等效原理**出发（引力与加速参考系局部不可区分），引力场被等同于时空度规 $g_{\mu\nu}$，自由粒子沿弯曲时空的**测地线**运动，物质能量-动量张量 $T_{\mu\nu}$ 通过**爱因斯坦场方程**决定时空曲率。广义相对论已通过水星近日点进动、光线偏折、引力红移、引力波（LIGO 2015）、黑洞成像（EHT 2019）等精确验证。

## 基本概念

- **等效原理**：引力与惯性力局部不可区分。
- **度规** $g_{\mu\nu}$：时空几何，线元 $ds^2=g_{\mu\nu}dx^\mu dx^\nu$。
- **测地线**：弯曲时空中的"直线"（自由落体轨迹）。
- **曲率**：黎曼张量、里奇张量、标量曲率。
- **能量-动量张量** $T_{\mu\nu}$：物质的能量、动量、应力。

## 核心内容

### 基本定律 / 方程

**爱因斯坦场方程**：

$$ G_{\mu\nu}=R_{\mu\nu}-\frac12Rg_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu} $$

**测地线方程**：

$$ \frac{d^2x^\mu}{d\tau^2}+\Gamma^\mu_{\rho\sigma}\frac{dx^\rho}{d\tau}\frac{dx^\sigma}{d\tau}=0 $$

**弱场极限**（牛顿泊松方程）：

$$ \nabla^2\Phi=4\pi G\rho $$

### 推导要点

- **测地线方程**：由弧长泛函 $S=\int ds$ 的变分（[[variational-calculus]]）导出，克里斯托费尔符号由度规给出。
- **场方程的作用量**：爱因斯坦-希尔伯特作用量 $S=\int R\sqrt{-g}\,d^4x$，对其变分得到 $G_{\mu\nu}$。
- **弱场极限**：$g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$，线性化场方程给出泊松方程，把牛顿引力作为弱场近似。

### 重要定理与推论

- **等效原理**：[[equivalence-principle]]（爱因斯坦电梯）。
- **三大经典检验**：水星近日点进动、光线偏折、引力红移。
- **引力波**：场方程的线性化解（[[gravitational-waves]]）。
- **黑洞**：施瓦西/克尔解（[[black-holes]]）。

## 深化内容

广义相对论的解包括：施瓦西解（球对称）、克尔解（旋转黑洞）、FLRW 度规（[[cosmology]]）。**引力波**（[[gravitational-waves]]）打开引力波天文学；**黑洞**（[[black-holes]]）与信息悖论、霍金辐射连接量子引力（[[quantum-gravity]]）。广义相对论的量子化是当代理论物理的核心未解问题。延伸阅读可参考 Schutz《A First Course in General Relativity》、Carroll《Spacetime and Geometry》、Wald《General Relativity》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[equivalence-principle]]、[[einstein-field-equations]]、[[black-holes]]、[[cosmology]]。
- 数学：[[differential-geometry]]（黎曼几何）、[[tensor-calculus]]。
- 极限：低速弱场 [[newtonian-mechanics]]；无引力 [[special-relativity]]。
- 观测：[[gravitational-waves]]（LIGO）、[[astrophysics]]（强引力天体）。

## 前置知识

- [[special-relativity]]、[[tensor-calculus]]、[[differential-geometry]]
