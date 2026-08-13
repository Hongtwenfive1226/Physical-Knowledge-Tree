---
id: differential-geometry
name: 微分几何
name_en: Differential Geometry
domain: mathematics
aliases: [黎曼几何, 流形]
tags: [数学, 几何, 流形]
keywords: [流形, 切空间, 黎曼度量, 测地线, 曲率]
updated: 2026-08-13
links:
  - {id: tensor-calculus, weight: 5, note: 黎曼几何以张量分析为计算语言}
  - {id: general-relativity, weight: 5, note: 引力几何化为弯曲时空}
  - {id: calculus, weight: 3}
  - {id: topology, weight: 3, note: 流形概念来源于拓扑}
  - {id: gauge-field-theory, weight: 3, note: 纤维丛与规范联络}
  - {id: hamiltonian-mechanics, weight: 2, note: 相空间的辛结构与几何化}
  - {id: string-theory, weight: 2}
superseded_by: []
supersedes: []
---
# 微分几何

## 概述

微分几何用微积分研究**流形**——局部可"拉平"（同胚于欧氏空间）的几何对象。它提供坐标无关的语言，使广义相对论能把引力描述为时空的弯曲，也使规范场论能用纤维丛表述。核心对象：切空间、向量场、黎曼度量、联络、测地线与曲率。微分几何的深刻之处在于区分**内蕴**性质（只依赖度量，如高斯曲率）与**外蕴**性质（依赖嵌入方式）。

## 基本概念

- **流形**：局部同胚于 $\mathbb R^n$ 的拓扑空间，配以光滑坐标图册。
- **切空间与切丛**：流形一点处的切向量全体；向量场是切丛的截面。
- **黎曼度量**：正定对称张量 $g_{\mu\nu}$，赋予长度与角度 $ds^2=g_{\mu\nu}dx^\mu dx^\nu$。
- **联络**：规定向量沿曲线"平行移动"的规则（列维-奇维塔联络由度规唯一确定）。
- **测地线**：局部最短/最直的曲线，即加速度（协变意义下）为零。
- **曲率**：黎曼张量 $R^\rho{}_{\sigma\mu\nu}$、里奇张量 $R_{\mu\nu}$、标量曲率 $R$。

## 核心内容

### 基本定律 / 方程

**测地线方程**：

$$ \frac{\mathrm d^2 x^\mu}{\mathrm d\tau^2} + \Gamma^\mu_{\rho\sigma}\frac{\mathrm dx^\rho}{\mathrm d\tau}\frac{\mathrm dx^\sigma}{\mathrm d\tau} = 0 $$

**黎曼曲率张量**（见 [[tensor-calculus]]）与**测地偏离方程**：

$$ \frac{D^2\xi^\mu}{D\tau^2} = -R^\mu{}_{\nu\rho\sigma}u^\nu u^\rho \xi^\sigma $$

### 推导要点

- **测地线**：对弧长泛函 $\int\sqrt{g_{\mu\nu}\dot x^\mu\dot x^\nu}\,d\tau$ 用欧拉-拉格朗日方程（[[variational-calculus]]）得到测地线方程。
- **曲率的来源**：平行移动沿闭合回路后向量发生旋转，转角与回路面积之比在无穷小极限给出黎曼曲率；等价于协变导数的对易子 $[\nabla_\mu,\nabla_\nu]$。
- **测地偏离方程**：两条邻近测地线间分离矢量 $\xi^\mu$ 的二次导与曲率成正比，是"潮汐力"的几何表达。

### 重要定理与推论

- **高斯绝妙定理**：二维曲面的高斯曲率 $K$ 是内蕴量（只依赖度量，不依赖嵌入），由 $K=R/2$ 给出。
- **高斯-博内定理**：$\int_\Sigma K\,dA+\int_{\partial\Sigma}k_g\,ds=2\pi\chi(\Sigma)$，把曲率与拓扑（欧拉示性数）联系。
- **比安基恒等式**：$\nabla_{[\lambda}R_{\mu\nu]\rho\sigma}=0$，蕴含爱因斯坦张量守恒。
- **李维-奇维塔联络**：唯一无挠且度规相容的联络。

## 深化内容

微分几何的现代发展包括**纤维丛与特征类**（规范场论、拓扑量子数的数学语言）、**辛几何**（哈密顿力学的相空间）、**复几何与卡拉比-丘流形**（弦理论紧化）、以及**指标定理**（阿蒂亚-辛格，联系分析与拓扑）。这些结构使微分几何成为现代理论物理（引力、规范场、弦）的核心数学。延伸阅读可参考 do Carmo《Riemannian Geometry》、Nakahara《Geometry, Topology and Physics》、Frankel《The Geometry of Physics》。

## 与其他知识的联系

- 紧密相关：[[general-relativity]]（引力=时空几何）、[[tensor-calculus]]（计算语言）。
- 相关：[[topology]]（流形的整体结构）、[[gauge-field-theory]]（纤维丛/联络的规范理论）。
- 现代物理：[[hamiltonian-mechanics]]（辛结构）、[[string-theory]]（卡拉比-丘流形）。

## 前置知识

- [[calculus]]、[[linear-algebra]]、[[tensor-calculus]]
