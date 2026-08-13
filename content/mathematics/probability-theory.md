---
id: probability-theory
name: 概率论
name_en: Probability Theory
domain: mathematics
aliases: [概率]
tags: [数学, 概率, 随机]
keywords: [随机变量, 分布, 期望, 大数定律, 中心极限定理]
updated: 2026-08-13
links:
  - {id: statistical-mechanics, weight: 5, note: 统计物理以概率论为语言}
  - {id: fluctuation-theory, weight: 4, note: 涨落与随机过程}
  - {id: quantum-measurement, weight: 4, note: 波函数的概率诠释}
  - {id: information-theory, weight: 4, note: 熵与信息的联系}
  - {id: quantum-computing, weight: 2}
  - {id: set-theory, weight: 3, note: 概率的公理化基础}
  - {id: kinetic-theory, weight: 3}
superseded_by: []
supersedes: []
---
# 概率论

## 概述

概率论研究随机现象的数量规律，是统计物理、量子力学、信号与信息的数学基础。其公理化体系由柯尔莫哥洛夫建立于测度论之上。两条极限定理是物理的支柱：**大数定律**保证大量独立试验的平均趋于期望（宏观量可测性——温度、压强的统计意义），**中心极限定理**保证大量独立随机变量之和近似正态（涨落与误差的普适性来源）。随机过程（马尔可夫过程、布朗运动）描述随时间演化的随机系统。

## 基本概念

- **概率空间**：$(\Omega,\mathcal F,P)$，$\Omega$ 为样本空间、$\mathcal F$ 为事件域、$P$ 为概率测度。
- **随机变量**：$\Omega\to\mathbb R$ 的可测函数；**分布函数** $F(x)=P(X\le x)$。
- **期望与方差**：$\mathbb E[X]=\int x\,dF$，$\mathrm{Var}(X)=\mathbb E[X^2]-(\mathbb E X)^2$。
- **独立性**：$P(A\cap B)=P(A)P(B)$；独立随机变量、独立同分布（i.i.d.）序列。

## 核心内容

### 基本定律 / 方程

**贝叶斯公式**：

$$ P(A|B)=\frac{P(B|A)P(A)}{P(B)} $$

**切比雪夫不等式**（大数定律的工具）：

$$ P\big(|X-\mu|\ge\varepsilon\big)\le\frac{\mathrm{Var}(X)}{\varepsilon^2} $$

**中心极限定理**：对 i.i.d. 序列 $X_i$（均值 $\mu$、方差 $\sigma^2$），

$$ \frac{\bar X_n-\mu}{\sigma/\sqrt n}\xrightarrow{d}\mathcal N(0,1) $$

### 推导要点

- **大数定律**：由切比雪夫不等式，$P(|\bar X_n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)\to0$，得依概率收敛。
- **中心极限定理（特征函数法）**：标准化和的特征函数 $\varphi(t)=(1-\frac{t^2}{2n}+o(\frac1n))^n\to e^{-t^2/2}$，对应正态分布。
- **贝叶斯公式**：由条件概率定义与 $P(A)P(B|A)=P(B)P(A|B)$ 直接得到。

### 重要定理与推论

- **强大数定律**：$\bar X_n\to\mu$ 几乎必然。
- **正态分布的性质**：误差、涨落的普适分布，$\int e^{-x^2/2\sigma^2}dx=\sqrt{2\pi}\sigma$。
- **条件期望与鞅**：最优预测、停止时间，是随机过程与金融数学的工具。
- **泊松分布与指数分布**：稀有事件计数、等待时间。

## 深化内容

概率论的严格化是**测度论**（勒贝格积分、$L^p$ 空间），使随机变量、期望、收敛概念统一于积分论。**随机过程**（马尔可夫链、布朗运动、鞅、随机微分方程）是涨落理论、金融与粒子输运的基础。**大偏差理论**刻画罕见事件概率的指数衰减。延伸阅读可参考 Feller《概率论及其应用》、Durrett《Probability》、Grimmett & Stirzaker《Probability and Random Processes》。

## 与其他知识的联系

- 紧密相关：[[statistical-mechanics]]（系综理论）、[[fluctuation-theory]]（涨落）、[[information-theory]]（香农熵）。
- 相关：[[quantum-measurement]]（测量结果的概率性）、[[kinetic-theory]]。
- 基础：[[set-theory]]、[[calculus]]。

## 前置知识

- [[set-theory]]、[[calculus]]
