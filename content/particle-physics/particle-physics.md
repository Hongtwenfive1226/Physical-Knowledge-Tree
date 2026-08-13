---
id: particle-physics
name: 粒子物理
name_en: Particle Physics
domain: particle-physics
aliases: [高能物理, 基本粒子]
tags: [粒子物理, 加速器, 标准模型]
keywords: [标准模型, 探测器, 散射截面]
updated: 2026-08-13
links:
  - {id: standard-model, weight: 5, note: 理论框架}
  - {id: elementary-particles, weight: 5, note: 粒子分类}
  - {id: quantum-field-theory, weight: 5, note: 理论基础}
  - {id: feynman-diagrams, weight: 4, note: 计算工具}
  - {id: scattering-theory, weight: 3, note: 实验方法}
  - {id: cosmology, weight: 3, note: 早期宇宙}
  - {id: string-theory, weight: 2, note: 超越标准模型}
superseded_by: []
supersedes: []
---
# 粒子物理

## 概述

粒子物理（高能物理）研究物质的最基本构成与基本相互作用，其理论框架是**标准模型**（[[standard-model]]）。实验方法：用**加速器**把粒子加速到高能碰撞，用**探测器**记录产物，测量**散射截面**与**衰变宽度**，与理论预言（费曼图计算）比较。粒子物理不仅揭示微观规律，还连接宇宙学（早期宇宙、暗物质、原初核合成），并持续寻找超越标准模型的新物理（超对称、暗物质、中微子质量）。

## 基本概念

- **散射截面** $\sigma$：反应概率的度量（面积量纲）。
- **亮度** $\mathcal L$：加速器单位面积粒子流。
- **衰变宽度 / 寿命**：$\Gamma$、$\tau=\hbar/\Gamma$。
- **共振**：中间态粒子（如 $Z$ 玻色子共振）。
- **事例 / 探测器**：碰撞事件的记录。

## 核心内容

### 基本定律 / 方程

截面与实验测量：

$$ \sigma=\frac{N}{\mathcal L\,\epsilon} $$

（$N$ 为事例数、$\epsilon$ 为探测效率）。

**共振截面**（布莱特-维格纳）：

$$ \sigma(E)\propto\frac{1}{(E-M)^2+\Gamma^2/4} $$

### 推导要点

- **截面计算**：由散射振幅 $\mathcal M$（[[feynman-diagrams]]）经 $d\sigma\propto|\mathcal M|^2 d\Pi$ 积分得到。
- **共振峰**：中间态粒子产生共振，截面在 $E=M$ 处达峰、宽度 $\Gamma$。
- **亮度的意义**：截面 = 事例率 / 亮度，把理论可算量与实验可测量联系。

### 重要定理与推论

- **标准模型检验**：对撞机实验（LEP、Tevatron、LHC）精确验证 [[standard-model]]。
- **粒子发现**：$W^\pm,Z$（1983）、顶夸克（1995）、希格斯玻色子（2012）。
- **守恒律**：能量、动量、电荷、重子数、轻子数守恒（选择定则）。
- **超越标准模型**：暗物质、中微子质量、超对称是当前前沿。

## 深化内容

粒子物理与 [[cosmology]]（早期宇宙、暗物质）、[[nuclear-physics]]（重离子对撞、夸克胶子等离子体）交叉。实验技术（加速器、探测器、数据分析）是物理与工程的结合。延伸阅读可参考 Griffiths《Introduction to Elementary Particles》、Halzen & Martin《Quarks and Leptons》、Particle Data Group《Review of Particle Physics》。

## 与其他知识的联系

- 紧密相关：[[standard-model]]、[[elementary-particles]]、[[quantum-field-theory]]。
- 工具：[[feynman-diagrams]]、[[scattering-theory]]。
- 交叉：[[cosmology]]（天体粒子物理）、[[condensed-matter-physics]]（探测器材料）。

## 前置知识

- [[quantum-field-theory]]、[[scattering-theory]]、[[standard-model]]
