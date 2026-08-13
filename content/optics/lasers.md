---
id: lasers
name: 激光
name_en: Lasers
domain: optics
aliases: [激光器, 受激辐射]
tags: [光学, 光源, 相干]
keywords: [受激辐射, 粒子数反转, 谐振腔, 相干光]
updated: 2026-08-13
links:
  - {id: quantum-optics, weight: 4, note: 光场量子性质}
  - {id: optics, weight: 4, note: 应用领域}
  - {id: waveguides-resonators, weight: 3, note: 谐振腔}
  - {id: statistical-mechanics, weight: 3, note: 玻尔兹曼分布与粒子数反转}
  - {id: quantum-mechanics, weight: 3, note: 受激辐射的量子基础}
  - {id: electromagnetic-radiation, weight: 2}
superseded_by: []
supersedes: []
---
# 激光

## 概述

激光（受激辐射光放大）基于爱因斯坦 1917 年预言的**受激辐射**：光子诱导高能级原子发射与之同频率、同相位、同方向的光子，实现相干放大。实现激光需要两个条件：**粒子数反转**（上能级布居大于下能级，需泵浦）与**光学谐振腔**（提供反馈与模式选择）。激光输出单色、相干、准直的高亮度光束，是 [[quantum-optics]] 的核心光源，广泛用于工业、医学、通信、精密测量与量子技术。

## 基本概念

- **受激辐射 / 自发辐射 / 吸收**：三种光-物质过程。
- **粒子数反转**：$N_2>N_1$（上能级布居多）。
- **增益介质 / 泵浦**：放大光的介质与能量来源。
- **谐振腔**：提供反馈与选模。
- **阈值条件**：增益超过损耗。

## 核心内容

### 基本定律 / 方程

爱因斯坦系数关系（A、B 系数）：

$$ A_{21},\quad B_{12}=B_{21},\qquad \frac{A_{21}}{B_{21}}=\frac{8\pi h\nu^3}{c^3} $$

**粒子数反转**条件（玻尔兹曼分布被打破）：

$$ N_2>N_1 $$

激光阈值（增益 = 损耗）：

$$ g_{\mathrm{th}}=\alpha+\frac1{2L}\ln\frac1{R_1R_2} $$

### 推导要点

- **爱因斯坦系数**：由热平衡（玻尔兹曼分布 + 普朗克辐射）导出 $A,B$ 系数的关系（[[statistical-mechanics]]、[[blackbody-radiation]]）。
- **粒子数反转**：泵浦把粒子抽运到上能级，打破热平衡布居（热平衡时 $N_2<N_1$）。
- **阈值**：谐振腔内往返增益需补偿损耗（镜面反射 $R$、介质损耗 $\alpha$）。

### 重要定理与推论

- **受激辐射的相干性**：受激光子与入射光子同相位（相干放大）。
- **激光的模式**：纵模（频率）与横模（高斯光束 $TEM_{00}$）。
- **单色性 / 相干性**：激光的谱线极窄（[[quantum-optics]] 的相干态近似）。
- **光束质量**：高斯光束的准直与聚焦。

## 深化内容

激光是 [[quantum-optics]] 的核心光源，与 [[waveguides-resonators]]（谐振腔）、[[electromagnetic-radiation]]（受激辐射）相关。激光冷却（[[laser-cooling]]）、光频梳（精密测量）、自由电子激光是前沿。延伸阅读可参考 Siegman《Lasers》、Svelto《Principles of Lasers》、Milonni & Eberly《Laser Physics》。

## 与其他知识的联系

- 紧密相关：[[quantum-optics]]（光场性质）、[[waveguides-resonators]]（腔）、[[optics]]。
- 原理：[[quantum-mechanics]]（受激辐射）、[[statistical-mechanics]]（粒子数布居）。

## 前置知识

- [[quantum-optics]]、[[electromagnetic-radiation]]、[[statistical-mechanics]]
