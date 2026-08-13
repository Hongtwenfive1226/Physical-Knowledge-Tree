---
id: ensembles
name: 系综理论
name_en: Ensembles
domain: statistical-mechanics
aliases: [系综, 正则系综, 巨正则系综]
tags: [统计物理, 系综, 方法]
keywords: [微正则系综, 正则系综, 巨正则系综, 配分函数]
updated: 2026-08-13
links:
  - {id: statistical-mechanics, weight: 5, note: 统计力学的基本方法}
  - {id: thermodynamics, weight: 4, note: 输出热力学量}
  - {id: ideal-gas, weight: 4, note: 各系综下的计算}
  - {id: quantum-statistics, weight: 3}
  - {id: probability-theory, weight: 4}
superseded_by: []
supersedes: []
---
# 系综理论

## 概述

系综是统计力学的操作框架：想象大量与系统宏观条件相同、微观状态不同的"复制品"，宏观量即系综平均。按固定量不同分为三种主要系综——**微正则**（$E,V,N$）、**正则**（$T,V,N$）、**巨正则**（$T,V,\mu$），各自对应一个特征函数（熵 $S$、自由能 $F$、巨势 $\Omega$）。在热力学极限下三者等价，具体用哪种由方便程度决定。系综理论把"算热力学量"化为"算配分函数"。

## 基本概念

- **微正则系综**：孤立系统，能量固定，等概率。
- **正则系综**：与大热库交换能量（温度固定）。
- **巨正则系综**：与热库交换能量与粒子（温度、化学势固定）。
- **配分函数**：$Z$（正则）、$\Xi$ 或 $\mathcal Z$（巨正则）。
- **化学势** $\mu$：增加一个粒子的自由能代价。

## 核心内容

### 基本定律 / 方程

三种系综的概率与配分函数：

| 系综 | 固定量 | 权重 | 特征函数 |
|---|---|---|---|
| 微正则 | $E,V,N$ | 等概率 $1/\Omega$ | $S=k_B\ln\Omega$ |
| 正则 | $T,V,N$ | $e^{-\beta E}$ | $F=-k_BT\ln Z$ |
| 巨正则 | $T,V,\mu$ | $e^{-\beta(E-\mu N)}$ | $\Omega=-k_BT\ln\Xi$ |

正则配分函数：$Z=\mathrm{tr}\,e^{-\beta H}$；巨正则：$\Xi=\sum_N z^N Z_N$（$z=e^{\beta\mu}$ 为逸度）。

### 推导要点

- **正则分布**：把系统 + 大热库视为微正则复合系统，对热库能量做泰勒展开 $\ln\Omega(E_t-E)\approx\ln\Omega(E_t)-\beta E$，得 $p(E)\propto e^{-\beta E}$。
- **巨正则分布**：同理，系统与热库交换能量和粒子，展开得 $p(N,E)\propto e^{-\beta(E-\mu N)}$。
- **热力学量的导出**：由 $F=-k_BT\ln Z$，$S=-\partial F/\partial T$、$p=-\partial F/\partial V$、$\langle N\rangle=-\partial\Omega/\partial\mu$。

### 重要定理与推论

- **系综等价**：热力学极限 $N\to\infty$ 下三系综给出相同的热力学量（涨落相对量级 $1/\sqrt N$）。
- **能量涨落**：正则系综中 $\frac{\langle(\Delta E)^2\rangle}{\langle E\rangle^2}\propto\frac1N$。
- **粒子数涨落**：巨正则系综中 $\frac{\langle(\Delta N)^2\rangle}{\langle N\rangle^2}\propto\frac1N$。
- **配分函数是枢纽**：一切热力学量由 $Z$ 的导数给出。

## 深化内容

巨正则系综是处理**量子统计**（[[quantum-statistics]]）与粒子数可变系统（化学反应、吸附、玻色凝聚）的自然框架。系综理论推广到量子情形用 [[density-matrix]]（$\rho=e^{-\beta H}/Z$）。延伸阅读可参考 Pathria《Statistical Mechanics》、Kardar《Statistical Physics of Particles》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[statistical-mechanics]]（框架）、[[thermodynamics]]（输出）、[[ideal-gas]]（计算实例）。
- 量子版：[[density-matrix]]（$\rho=e^{-\beta H}/Z$）、[[quantum-statistics]]。
- 基础：[[probability-theory]]。

## 前置知识

- [[statistical-mechanics]]、[[probability-theory]]
