---
id: vibration-theory
name: 振动与简正模
name_en: Vibration Theory and Normal Modes
domain: classic-mechanics
aliases: [小振动, 简正模式]
tags: [力学, 振动, 简正模]
keywords: [简正坐标, 谐振子, 耦合振子, 频谱, 本征值]
updated: 2026-08-13
links:
  - {id: differential-equations, weight: 5, note: 运动方程是线性常微分方程}
  - {id: eigenvalue-problems, weight: 4, note: 简正模即本征值问题}
  - {id: linear-algebra, weight: 4, note: 矩阵对角化求简正坐标}
  - {id: newtonian-mechanics, weight: 4}
  - {id: quantum-harmonic-oscillator, weight: 4, note: 量子谐振子}
  - {id: wave-mechanics, weight: 4, note: 连续极限给出波动方程}
  - {id: acoustics, weight: 4, note: 声振动}
  - {id: phonons, weight: 3, note: 晶格振动量子化为声子}
superseded_by: []
supersedes: []
---
# 振动与简正模

## 概述

振动理论研究系统在**平衡位置附近**的小幅周期运动，是经典力学通向波动、声学与量子谐振子的桥梁。核心思想是**线性化 + 简正坐标**：把耦合的多自由度振动通过坐标变换分解为若干个独立的**简正模**（normal mode），每个模以单一频率独立振动。简正模就是本征值问题，其思想贯穿晶格振动（声子）、分子振动、腔模与量子场论。

## 基本概念

- **平衡位置**：势能取极小的位形；小幅振动在其附近线性化。
- **简正坐标**：使动能与势能同时对角化的坐标 $\eta_i$。
- **简正频率 / 简正模**：本征值 $\omega_i$ 与对应本征矢量。
- **阻尼 / 受迫**：耗散力 $-\gamma\dot q$ 与外力 $F(t)$。

## 核心内容

### 基本定律 / 方程

线性化后的运动方程（$N$ 自由度）：

$$ M\ddot{\vec q} + K\vec q = 0 $$

本征值问题：

$$ K\vec Q = \omega^2 M\vec Q $$

简正坐标下的解：

$$ q_i(t)=\sum_j c_j\,Q_i^{(j)}\cos(\omega_j t+\phi_j) $$

受迫振动（简谐外力）稳态解与**共振**条件 $\omega=\omega_0$。

### 推导要点

- **线性化**：把势能展开到二阶 $V\approx V_0+\frac12\sum K_{ij}q_iq_j$，动能 $T=\frac12\sum M_{ij}\dot q_i\dot q_j$，运动方程即 $M\ddot q+Kq=0$。
- **简正坐标**：作同时对角化（对 $M$ 归一化后 $K$ 对角化），本征矢量构成新坐标 $\vec\eta$，使方程解耦为 $\ddot\eta_i+\omega_i^2\eta_i=0$。
- **阻尼与共振**：$\ddot x+\gamma\dot x+\omega_0^2x=F_0\cos\omega t$ 的稳态解振幅 $A=\frac{F_0}{\sqrt{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2}}$，$\omega\to\omega_0$ 时共振。

### 重要定理与推论

- **简正模的独立性**：能量可写成各模之和 $E=\sum_i E_i$，各模互不交换能量。
- **简并情形**：对称性导致简并频率（如正方对称的耦合振子）。
- **本征值问题的普遍性**：简正模是[[eigenvalue-problems]] 的直接实例。
- **连续极限**：$N\to\infty$ 时简正模过渡为波（[[wave-mechanics]]）。

## 深化内容

简正模思想是物理的普适工具：晶格振动量子化得到**声子**（[[phonons]]，二次量子化）；电磁场的模式量子化得到**光子**；量子谐振子的升降算符（[[quantum-harmonic-oscillator]]）即简正坐标的量子版本。简正模还用于分析分子红外/拉曼谱、结构振型与腔模。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、French《Vibrations and Waves》。

## 与其他知识的联系

- 紧密相关：[[eigenvalue-problems]] 与 [[linear-algebra]]（简正模）、[[differential-equations]]（求解）。
- 推广：连续极限 → [[wave-mechanics]]；晶格量子化 → [[phonons]]。
- 量子对应：[[quantum-harmonic-oscillator]]；声学：[[acoustics]]。

## 前置知识

- [[newtonian-mechanics]]、[[linear-algebra]]、[[differential-equations]]
