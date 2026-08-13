---
id: einstein-field-equations
name: 爱因斯坦场方程
name_en: Einstein Field Equations
domain: relativity
aliases: [场方程, 引力方程]
tags: [相对论, 引力, 方程]
keywords: [里奇张量, 能量动量张量, 宇宙学常数]
updated: 2026-08-13
links:
  - {id: general-relativity, weight: 5, note: 广义相对论的核心方程}
  - {id: tensor-calculus, weight: 5, note: 张量方程}
  - {id: differential-geometry, weight: 5, note: 曲率}
  - {id: black-holes, weight: 4, note: 施瓦西解}
  - {id: cosmology, weight: 5, note: 弗里德曼方程}
  - {id: gravitational-waves, weight: 4, note: 弱场线性化解}
  - {id: variational-calculus, weight: 2, note: 爱因斯坦-希尔伯特作用量}
superseded_by: []
supersedes: []
---
# 爱因斯坦场方程

## 概述

爱因斯坦场方程（1915）是广义相对论的核心：它把**时空几何**（爱因斯坦张量 $G_{\mu\nu}$）与**物质能量**（能量-动量张量 $T_{\mu\nu}$）联系为

$$ G_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu} $$

即"物质告诉时空如何弯曲，时空告诉物质如何运动"。场方程由**爱因斯坦-希尔伯特作用量**对度规变分得到，其精确解——施瓦西解（黑洞）、克尔解、FLRW 解（宇宙）——是广义相对论与天体物理的基石。

## 基本概念

- **里奇张量** $R_{\mu\nu}$、**标量曲率** $R$：曲率的缩并。
- **爱因斯坦张量**：$G_{\mu\nu}=R_{\mu\nu}-\frac12Rg_{\mu\nu}$。
- **能量-动量张量** $T_{\mu\nu}$：物质的能量密度、动量流、应力。
- **宇宙学常数** $\Lambda$：真空能量密度。
- **比安基恒等式**：$\nabla_\mu G^{\mu\nu}=0$（几何自动满足）。

## 核心内容

### 基本定律 / 方程

**爱因斯坦场方程**（含宇宙学常数）：

$$ R_{\mu\nu}-\frac12Rg_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu} $$

**爱因斯坦-希尔伯特作用量**：

$$ S=\frac{c^4}{16\pi G}\int R\sqrt{-g}\,d^4x+\int\mathcal L_m\sqrt{-g}\,d^4x $$

**守恒律**：$\nabla_\mu T^{\mu\nu}=0$（能量动量守恒，由比安基恒等式保证）。

### 推导要点

- **作用量变分**：对爱因斯坦-希尔伯特作用量关于度规变分，$\delta\int R\sqrt{-g}\,d^4x=\int(R_{\mu\nu}-\frac12Rg_{\mu\nu})\delta g^{\mu\nu}\sqrt{-g}\,d^4x$，与物质项变分比较得场方程。
- **守恒的几何保证**：$\nabla_\mu G^{\mu\nu}=0$（比安基恒等式）⇒ $\nabla_\mu T^{\mu\nu}=0$。
- **弱场极限**：$g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ 线性化，得 $\nabla^2\Phi=4\pi G\rho$（牛顿引力）。

### 重要定理与推论

- **施瓦西解**：球对称真空解，描述黑洞（[[black-holes]]）。
- **FLRW 解**：均匀各向同性解，给出宇宙学弗里德曼方程（[[cosmology]]）。
- **引力波**：场方程的线性化波动解（[[gravitational-waves]]）。
- **守恒与测地线**：$\nabla_\mu T^{\mu\nu}=0$ 蕴含自由粒子沿测地线运动。

## 深化内容

场方程的精确解与物理：施瓦西/克尔/克尔-纽曼黑洞、FLRW 宇宙、引力波。**宇宙学常数** $\Lambda$ 与暗能量（[[cosmology]]）对应。场方程的非线性使其难以求解，数值相对论（引力波模拟）是前沿。量子化场方程通向[[quantum-gravity]]。延伸阅读可参考 Schutz《A First Course in General Relativity》、Carroll《Spacetime and Geometry》、Wald《General Relativity》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[general-relativity]]、[[tensor-calculus]]/[[differential-geometry]]（数学）、[[black-holes]]、[[cosmology]]。
- 弱场极限：牛顿引力泊松方程 $\nabla^2\Phi=4\pi G\rho$。
- 线性化：[[gravitational-waves]]。

## 前置知识

- [[tensor-calculus]]、[[differential-geometry]]、[[general-relativity]]
