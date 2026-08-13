---
id: phonons
name: 声子
name_en: Phonons
domain: condensed-matter
aliases: [晶格振动量子化]
tags: [凝聚态, 振动, 准粒子]
keywords: [声子, 色散关系, 德拜模型, 热容]
updated: 2026-08-13
links:
  - {id: condensed-matter-physics, weight: 5, note: 晶格动力学}
  - {id: quantum-harmonic-oscillator, weight: 5, note: 模式量子化}
  - {id: vibration-theory, weight: 4, note: 经典晶格振动}
  - {id: heat-conduction, weight: 4, note: 晶格热导}
  - {id: second-quantization, weight: 4, note: 产生湮灭算符}
  - {id: superconductivity, weight: 3, note: 声子媒介的库珀配对}
  - {id: crystallography, weight: 3}
superseded_by: []
supersedes: []
---
# 声子

## 概述

声子是**晶格振动的量子化元激发**，是准粒子（玻色子）的典型例子。晶格简正模量子化后，每个模的能量为 $\hbar\omega_{\vec k}(n+1/2)$，声子数 $n$ 即振动量子数。声子的色散关系 $\omega(\vec k)$ 由晶格动力学决定（声学支/光学支），**德拜模型**用线性色散近似给出低温热容 $C_V\propto T^3$。声子是晶格热导的载体，也是超导 BCS 配对（[[superconductivity]]）的媒介，是凝聚态中"准粒子"观念的原型。

## 基本概念

- **声子**：晶格振动量子，能量 $\hbar\omega_{\vec k}$。
- **声学支 / 光学支**：长波（声速）/ 高频（原胞内相对振动）。
- **色散关系** $\omega(\vec k)$：频率-波矢关系。
- **德拜温度** $\Theta_D=\hbar\omega_D/k_B$：声子谱的特征温度。
- **德拜模型**：线性色散近似。

## 核心内容

### 基本定律 / 方程

晶格振动量子化：

$$ E_{n\vec k}=\hbar\omega_{\vec k}\Big(n+\frac12\Big) $$

**德拜热容**（低温 $T\ll\Theta_D$）：

$$ C_V=\frac{12\pi^4}{5}Nk_B\Big(\frac{T}{\Theta_D}\Big)^3 $$

高温（杜隆-珀蒂）：$C_V=3Nk_B$。

### 推导要点

- **模式量子化**：把晶格位移按简正模展开，每个模是独立的谐振子（[[vibration-theory]]、[[quantum-harmonic-oscillator]]），产生/湮灭算符（[[second-quantization]]）。
- **德拜近似**：用 $\omega=vk$ 线性色散、截止频率 $\omega_D$（态总数=3N）近似声学支。
- **热容**：对玻色分布求和 $U=\sum_{\vec k}\hbar\omega/(e^{\hbar\omega/k_BT}-1)$，低温下 $C_V\propto T^3$。

### 重要定理与推论

- **低温 $T^3$ 律**：德拜模型给出 $C_V\propto T^3$（实验吻合）。
- **高温杜隆-珀蒂**：$C_V=3Nk_B$（经典能量均分）。
- **声子-电子耦合**：声子是超导 BCS 配对的媒介（[[superconductivity]]）。
- **晶格热导**：声子输运热（[[heat-conduction]]）。

## 深化内容

声子是 [[condensed-matter-physics]] 准粒子图像的原型，与 [[second-quantization]]、[[heat-conduction]] 直接相关。声子色散的测量（中子散射、拉曼）是晶格动力学实验。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Dove《Introduction to Lattice Dynamics》。

## 与其他知识的联系

- 紧密相关：[[quantum-harmonic-oscillator]]（量子化）、[[vibration-theory]]（经典极限）、[[second-quantization]]、[[heat-conduction]]。
- 应用：[[superconductivity]]（BCS）、[[condensed-matter-physics]]、[[crystallography]]。

## 前置知识

- [[vibration-theory]]、[[quantum-harmonic-oscillator]]、[[second-quantization]]
