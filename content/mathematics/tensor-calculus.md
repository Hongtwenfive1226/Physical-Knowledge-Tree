---
id: tensor-calculus
name: 张量分析
name_en: Tensor Calculus
domain: mathematics
aliases: [张量, 里奇微积分]
tags: [数学, 张量, 黎曼几何, 广义相对论]
keywords: [协变指标, 逆变指标, 克里斯托费尔符号, 协变导数]
updated: 2026-08-13
links:
  - {id: linear-algebra, weight: 4, note: 张量是多重线性代数的推广}
  - {id: vector-calculus, weight: 4, note: 矢量分析是张量分析的特例}
  - {id: differential-geometry, weight: 5, note: 黎曼几何以张量分析为语言}
  - {id: general-relativity, weight: 5, note: 爱因斯坦场方程是张量方程}
  - {id: special-relativity, weight: 4, note: 洛伦兹协变表述}
  - {id: continuum-mechanics, weight: 3}
  - {id: fluid-mechanics, weight: 3}
superseded_by: []
supersedes: []
---
# 张量分析

## 概述

张量分析在（可弯曲的）坐标系统中研究张量场及其微分运算，是广义相对论与连续介质力学的计算语言。其核心问题是：如何在坐标变换下保持物理规律的**协变性**（形式不变）。为此引入协变导数、克里斯托费尔符号与曲率张量。张量指标分协变（下）与逆变（上）两类，由度规张量升降；爱因斯坦求和约定（重复指标自动求和）简化书写。

## 基本概念

- **张量**：在坐标变换 $x'^\mu=x'^\mu(x)$ 下按指标规律变换的多重线性对象；如逆变矢量 $V'^\mu=\frac{\partial x'^\mu}{\partial x^\nu}V^\nu$。
- **度规张量** $g_{\mu\nu}$：定义线元 $ds^2=g_{\mu\nu}dx^\mu dx^\nu$，用于升降指标 $V_\mu=g_{\mu\nu}V^\nu$。
- **克里斯托费尔符号**：$\Gamma^\lambda_{\mu\nu}=\frac12 g^{\lambda\sigma}(\partial_\mu g_{\nu\sigma}+\partial_\nu g_{\mu\sigma}-\partial_\sigma g_{\mu\nu})$，本身不是张量。
- **协变导数**：$\nabla_\mu V^\nu=\partial_\mu V^\nu+\Gamma^\nu_{\mu\lambda}V^\lambda$，对协变指标则为减号。

## 核心内容

### 基本定律 / 方程

协变导数（矢量的两个指标类型）：

$$ \nabla_\mu V^\nu=\partial_\mu V^\nu+\Gamma^\nu_{\mu\lambda}V^\lambda,\qquad \nabla_\mu V_\nu=\partial_\mu V_\nu-\Gamma^\lambda_{\mu\nu}V_\lambda $$

**黎曼曲率张量**：

$$ R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho_{\nu\sigma}-\partial_\nu\Gamma^\rho_{\mu\sigma}+\Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma}-\Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma} $$

**里奇张量** $R_{\mu\nu}=R^\lambda{}_{\mu\lambda\nu}$ 与**标量曲率** $R=g^{\mu\nu}R_{\mu\nu}$。

### 推导要点

- **协变导数的构造**：要求 $\nabla_\mu V^\nu$ 是张量（变换正确）且 $\nabla_\mu g_{\nu\sigma}=0$（度规相容），由此唯一确定 $\Gamma$ 的表达式。
- **曲率张量**：计算协变导数的对易子 $[\nabla_\mu,\nabla_\nu]V^\rho$，结果只依赖 $V^\rho$ 本身（系数即曲率张量）——曲率度量协变导数不可交换的程度。
- **测地线**：沿曲线平行移动切矢，$\frac{du^\mu}{d\tau}+\Gamma^\mu_{\rho\sigma}u^\rho u^\sigma=0$。

### 重要定理与推论

- **对称性与恒等式**：$R_{\mu\nu\rho\sigma}$ 满足反对称、交换对称与**比安基恒等式** $\nabla_{[\lambda}R_{\mu\nu]\rho\sigma}=0$，后者导出 $\nabla_\mu G^{\mu\nu}=0$（爱因斯坦张量守恒）。
- **坐标协变性**：张量方程在任意坐标变换下形式不变，是广义相对论的基本要求。
- **平直空间退化**：欧氏空间中 $\Gamma=0$，协变导数退化为偏导数，张量分析退化为[[vector-calculus]]。

## 深化内容

张量分析的现代形式是**微分几何**与**纤维丛**：联络是主丛上的规范场，曲率是联络的场强，这一观点统一了引力（列维-奇维塔联络）与规范场论（杨-米尔斯联络）。**微分形式**提供坐标无关的外微分运算。**旋量**是洛伦兹群的另一类表示，用于相对论量子力学。延伸阅读可参考 Schutz《A First Course in General Relativity》、Carroll《Spacetime and Geometry》、Landau & Lifshitz《The Classical Theory of Fields》。

## 与其他知识的联系

- 紧密相关：[[general-relativity]] 的场方程 $G_{\mu\nu}=8\pi GT_{\mu\nu}/c^4$ 是张量方程；[[differential-geometry]] 提供几何基础。
- 相关：[[special-relativity]]（洛伦兹张量）、[[continuum-mechanics]]（应力/应变张量）、[[fluid-mechanics]]。
- 退化：[[vector-calculus]] 是平直欧氏空间的特殊形式。

## 前置知识

- [[linear-algebra]]、[[calculus]]、[[differential-geometry]]
