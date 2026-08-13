---
id: scattering-theory
name: 散射理论
name_en: Scattering Theory
domain: quantum-mechanics
aliases: [量子散射, 碰撞理论]
tags: [量子, 散射, 截面]
keywords: [散射振幅, 微分散射截面, 相移, 玻恩近似]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 量子散射理论}
  - {id: perturbation-theory, weight: 4, note: 玻恩近似}
  - {id: green-function, weight: 4, note: 李普曼-施温格方程}
  - {id: standard-model, weight: 2, note: 粒子物理中的散射实验}
  - {id: feynman-diagrams, weight: 3, note: 场论散射振幅}
superseded_by: []
supersedes: []
---
# 散射理论

## 概述

散射理论从散射实验（粒子被势/靶散射后）提取**相互作用**信息，是量子力学与粒子物理、原子核物理、凝聚态物理的实验核心。其框架：入射平面波 $e^{ikz}$ 被势散射后，远场波函数为"平面波 + 出射球面波"，球面波的系数即**散射振幅** $f(\theta,\phi)$，其模方给出**微分散射截面**。分波法（相移分析）处理球对称势，玻恩近似处理弱势，李普曼-施温格方程用格林函数形式化整个理论。

## 基本概念

- **散射振幅**：$f(\theta,\phi)$，球面波系数。
- **微分散射截面**：$\frac{d\sigma}{d\Omega}=|f|^2$；总截面 $\sigma=\int|f|^2d\Omega$。
- **相移** $\delta_l$：散射势对第 $l$ 分波的相位改变。
- **动量转移**：$\vec q=\vec k-\vec k'$，$q=2k\sin(\theta/2)$。

## 核心内容

### 基本定律 / 方程

渐近波函数：

$$ \psi(\vec r)\xrightarrow{r\to\infty}e^{ikz}+f(\theta,\phi)\frac{e^{ikr}}{r} $$

**分波法**（球对称势）：

$$ f(\theta)=\frac1k\sum_{l=0}^{\infty}(2l+1)e^{i\delta_l}\sin\delta_l\,P_l(\cos\theta),\qquad \sigma=\frac{4\pi}{k^2}\sum_l(2l+1)\sin^2\delta_l $$

**玻恩近似**：

$$ f(\theta)\approx-\frac{m}{2\pi\hbar^2}\int e^{-i\vec q\cdot\vec r}V(\vec r)\,d^3r $$

### 推导要点

- **分波展开**：把 $\psi$ 按 $P_l(\cos\theta)$ 展开，每分波径向方程在无穷远处为 $R_l\sim\sin(kr-l\pi/2+\delta_l)/r$，与自由解比较相位差即 $\delta_l$。
- **玻恩近似**：用格林函数写出积分方程 $\psi=\phi_0+\int GV\psi$，对弱势取一次迭代（用 $\phi_0$ 替换积分中的 $\psi$），得玻恩近似。
- **李普曼-施温格方程**：$\psi_k=\phi_k+\hat G_0V\psi_k$，其中 $\hat G_0=(E-H_0+i\epsilon)^{-1}$ 是自由格林函数（[[green-function]]）。

### 重要定理与推论

- **光学定理**：$\sigma_{\mathrm{tot}}=\frac{4\pi}{k}\mathrm{Im}\,f(0)$（总截面与向前散射振幅虚部联系，概率守恒）。
- **相移的意义**：吸引势 $\delta_l>0$（相位超前）、排斥势 $\delta_l<0$。
- **低能散射**：只有 $l=0$（s 波）贡献，$\sigma\to4\pi a^2$（散射长度 $a$）。
- **玻恩近似的适用**：弱势/高能（$|V|\ll\hbar^2/ma^2$）。

## 深化内容

散射理论推广到**量子场论**：散射振幅由[[feynman-diagrams]] 计算（S 矩阵），是 [[particle-physics]] 与 [[standard-model]] 验证的基础。共振散射（布莱特-维格纳）、多体散射、库仑散射（卢瑟福公式的量子形式）是重要扩展。延伸阅读可参考 Sakurai《现代量子力学》、Griffiths《量子力学概论》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[green-function]]（李普曼-施温格方程）、[[perturbation-theory]]（玻恩级数）。
- 场论推广：[[feynman-diagrams]]（S 矩阵）、[[particle-physics]]、[[standard-model]]。

## 前置知识

- [[quantum-mechanics]]、[[green-function]]、[[special-functions]]
