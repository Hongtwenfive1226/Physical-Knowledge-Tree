---
id: nuclear-decay
name: 放射性衰变
name_en: Radioactive Decay
domain: nuclear-physics
aliases: [放射衰变, 衰变]
tags: [核物理, 衰变, 放射性]
keywords: [半衰期, 阿尔法衰变, 贝塔衰变, 伽马衰变]
updated: 2026-08-13
links:
  - {id: nuclear-physics, weight: 5, note: 核心过程}
  - {id: quantum-tunneling, weight: 5, note: α 衰变是隧穿效应}
  - {id: quantum-mechanics, weight: 4, note: 衰变规律的量子起源}
  - {id: standard-model, weight: 3, note: β 衰变由弱相互作用驱动}
  - {id: nuclear-structure, weight: 3, note: 衰变反映结构}
  - {id: probability-theory, weight: 3, note: 指数衰变规律}
superseded_by: []
supersedes: []
---
# 放射性衰变

## 概述

放射性衰变是不稳定原子核自发转变为其他核并放出辐射的过程，遵循**指数规律**（衰变是随机的量子过程）。三种主要模式：**α 衰变**（放氦核，由量子隧穿解释）、**β 衰变**（核子互变放电子/正电子与中微子，由弱相互作用驱动）、**γ 衰变**（激发态退激放光子，由电磁相互作用驱动）。放射性衰变是核医学、放射性测年（碳-14）、核能工业的基础。

## 基本概念

- **衰变常数** $\lambda$：单位时间衰变概率。
- **半衰期** $t_{1/2}=\ln2/\lambda$。
- **α / β / γ 衰变**：三种模式。
- **活度**：$A=\lambda N$（每秒衰变数）。
- **衰变链**：多代衰变序列。

## 核心内容

### 基本定律 / 方程

**指数衰变定律**：

$$ N(t)=N_0e^{-\lambda t},\qquad t_{1/2}=\frac{\ln2}{\lambda} $$

**α 衰变的伽莫夫公式**（隧穿概率）：

$$ T\approx\exp\Big(-2\int_{r_1}^{r_2}\sqrt{\frac{2m(V(r)-E)}{\hbar^2}}dr\Big) $$

**β 衰变**：$n\to p+e^-+\bar\nu_e$（弱相互作用，[[standard-model]]）。

### 推导要点

- **指数规律**：每个核以常数概率 $\lambda$ 衰变，$dN=-\lambda Ndt$ 积分得指数衰减（[[probability-theory]] 的泊松过程）。
- **α 衰变**：α 粒子隧穿库仑+离心势垒（伽莫夫模型，[[quantum-tunneling]]）。
- **β 衰变**：弱相互作用的 $W^\pm$ 交换，中微子带走能量（费米理论）。

### 重要定理与推论

- **指数衰减与半衰期**：$t_{1/2}$ 与核数目无关。
- **α 衰变能谱分立**：α 粒子能量离散（两体衰变）。
- **β 衰变能谱连续**：三体衰变，中微子分享能量（中微子存在的证据）。
- **选择定则**：角动量、宇称守恒决定衰变模式。

## 深化内容

放射性衰变连接 [[quantum-tunneling]]（α 衰变）、[[standard-model]]（β 衰变弱作用）、[[probability-theory]]（指数规律）。应用：放射性测年（$^{14}$C）、核医学（PET、放疗）、核能。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Lilley《Nuclear Physics》、费米《Nuclear Physics》。

## 与其他知识的联系

- 紧密相关：[[nuclear-physics]]、[[quantum-tunneling]]（α 衰变机制）、[[quantum-mechanics]]。
- 相互作用：[[standard-model]]（β 衰变的弱作用、γ 衰变的电磁作用）。
- 数学：[[probability-theory]]（指数衰变与半衰期）。

## 前置知识

- [[nuclear-physics]]、[[quantum-tunneling]]、[[standard-model]]
