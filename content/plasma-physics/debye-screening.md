---
id: debye-screening
name: 德拜屏蔽
name_en: Debye Screening
domain: plasma-physics
aliases: [德拜长度, 屏蔽效应]
tags: [等离子体, 屏蔽, 准中性]
keywords: [德拜长度, 准中性, 屏蔽势]
updated: 2026-08-13
links:
  - {id: plasma-physics, weight: 5, note: 等离子体的基本特征}
  - {id: electrostatics, weight: 4, note: 屏蔽势}
  - {id: statistical-mechanics, weight: 4, note: 玻尔兹曼分布}
  - {id: plasma-oscillations, weight: 3}
superseded_by: []
supersedes: []
---
# 德拜屏蔽

## 概述

德拜屏蔽是等离子体**屏蔽外电荷**的集体现象：点电荷在等离子体中的势不再是裸库仑势，而是指数衰减的**汤川势**，屏蔽特征尺度为**德拜长度** $\lambda_D$。在大于 $\lambda_D$ 的尺度上，等离子体表现为**准中性**（宏观电中性）。德拜屏蔽是等离子体的定义性特征——只有系统尺度 $L\gg\lambda_D$ 时才称得上等离子体。它与 [[plasma-oscillations]]（集体振荡）共同构成等离子体"集体行为"的图像。

## 基本概念

- **德拜长度**：$\lambda_D=\sqrt{\varepsilon_0k_BT_e/n_ee^2}$。
- **准中性**：$L\gg\lambda_D$ 时宏观电中性。
- **屏蔽势（汤川势）**：$e^{-r/\lambda_D}/r$。
- **德拜球**：半径 $\lambda_D$ 的球（含大量粒子，$n\lambda_D^3\gg1$）。

## 核心内容

### 基本定律 / 方程

屏蔽势：

$$ \phi(r)=\frac{q}{4\pi\varepsilon_0r}e^{-r/\lambda_D} $$

德拜长度：

$$ \lambda_D=\sqrt{\frac{\varepsilon_0k_BT_e}{n_ee^2}} $$

### 推导要点

- **泊松方程 + 玻尔兹曼分布**：电子密度 $n_e=n_0e^{e\phi/k_BT_e}$，线性化 $\nabla^2\phi=\frac{e(n_e-n_i)}{\varepsilon_0}\approx\frac{e^2n_0}{\varepsilon_0k_BT_e}\phi$，解得汤川势。
- **准中性条件**：$L\gg\lambda_D$ 时电荷分离被屏蔽，宏观中性。
- **等离子体参数**：$n\lambda_D^3\gg1$（德拜球内粒子多，集体行为显著）。

### 重要定理与推论

- **汤川屏蔽**：库仑势被指数屏蔽（与 [[electrostatics]] 的裸库仑势对比）。
- **准中性**：等离子体宏观电中性的根源。
- **德拜长度标度**：$\lambda_D\propto\sqrt{T_e/n_e}$（高温、低密度屏蔽更远）。
- **等离子体的判据**：$L\gg\lambda_D$、$n\lambda_D^3\gg1$。

## 深化内容

德拜屏蔽是 [[plasma-physics]] 的基础，与 [[plasma-oscillations]] 构成集体行为；类似屏蔽也出现在电解质、半导体（[[semiconductors]]）。延伸阅读可参考 陈骝《等离子体物理学导论》、Goldston & Rutherford《Introduction to Plasma Physics》。

## 与其他知识的联系

- 紧密相关：[[plasma-physics]]（基本性质）、[[electrostatics]]（屏蔽势）、[[statistical-mechanics]]（玻尔兹曼分布）。
- 关联：[[plasma-oscillations]]（同一物理图像下的集体行为）。

## 前置知识

- [[electrostatics]]、[[statistical-mechanics]]、[[plasma-physics]]
