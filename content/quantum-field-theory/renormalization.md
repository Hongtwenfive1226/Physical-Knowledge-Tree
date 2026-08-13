---
id: renormalization
name: 重整化
name_en: Renormalization
domain: quantum-field-theory
aliases: [重整化群, 重整化理论]
tags: [量子场论, 方法, 发散]
keywords: [紫外发散, 重整化群, 跑动耦合常数, 普适性]
updated: 2026-08-13
links:
  - {id: quantum-field-theory, weight: 5, note: 场论自洽性}
  - {id: qed, weight: 4, note: 原始应用}
  - {id: feynman-diagrams, weight: 4, note: 圈图发散}
  - {id: critical-phenomena, weight: 4, note: 重正化群用于临界现象}
  - {id: standard-model, weight: 3, note: 可重整化性}
  - {id: phase-transitions, weight: 3}
superseded_by: []
supersedes: []
---
# 重整化

## 概述

重整化处理量子场论中的**紫外发散**：圈图积分在高动量端发散，通过把发散吸收进有限个"裸参数"（质量、耦合常数、场强）中重新定义物理量，得到有限且与实验一致的预言。**重整化群（RG）方程**描述物理量（尤其耦合常数）随能量标度 $\mu$ 的"跑动"；RG 还揭示**普适性**——不同微观理论在长波极限共享相同行为（临界现象、渐近自由）。重整化是 QFT 自洽性的基石，也是凝聚态临界现象的统一理论。

## 基本概念

- **紫外发散**：圈图积分 $k\to\infty$ 的对数/幂次发散。
- **裸参数 / 物理参数**：发散参量 / 重整化后的有限值。
- **跑动耦合常数**：$g(\mu)$，随标度变化。
- **β 函数**：$\beta(g)=\mu\frac{dg}{d\mu}$。
- **普适性**：长波极限对微观细节不敏感。

## 核心内容

### 基本定律 / 方程

**重整化群方程**：

$$ \mu\frac{\partial g}{\partial\mu}=\beta(g) $$

QED 的跑动耦合（领头阶）：

$$ \alpha(\mu)=\frac{\alpha(\mu_0)}{1-\frac{2\alpha(\mu_0)}{3\pi}\ln\frac{\mu}{\mu_0}} $$

### 推导要点

- **正规化**：引入截断（截断动量 $\Lambda$、维数正规化 $d=4-\epsilon$）使发散有限。
- **重整化方案**：把发散项吸收进抵消项（counterterm），物理量在 $\Lambda\to\infty$ 下有限。
- **RG 方程**：要求物理量不依赖重正化标度 $\mu$（$\frac{d}{d\mu}(\text{物理量})=0$），导出 $\beta$ 函数。

### 重要定理与推论

- **可重整化性**：只有有限个发散类型的理论可重整化（如 QED、标准模型）。
- **渐近自由**：非阿贝尔规范理论 $\beta<0$，高能耦合变弱（QCD）。
- **朗道极点**：QED 的 $\alpha$ 在高能增长（$\beta>0$）。
- **普适性与临界现象**：威尔逊 RG 解释 [[critical-phenomena]] 的普适类。

## 深化内容

重整化群是 [[quantum-field-theory]] 与 [[condensed-matter-physics]] 的共同语言：威尔逊把重整化用于 [[phase-transitions]]/[[critical-phenomena]]，K. Wilson 因此获 1982 年诺贝尔奖。渐近自由（Gross、Politzer、Wilczek，2004 诺奖）是 QCD 的核心。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Goldenfeld《Lectures on Phase Transitions》、Weinberg《The Quantum Theory of Fields》。

## 与其他知识的联系

- 紧密相关：[[quantum-field-theory]]（框架）、[[qed]]（成功案例）、[[feynman-diagrams]]（发散来源）。
- 凝聚态：[[critical-phenomena]]（威尔逊重正化群）、[[phase-transitions]]。
- 量子色动力学（[[standard-model]]）的渐近自由。

## 前置知识

- [[quantum-field-theory]]、[[feynman-diagrams]]、[[qed]]
