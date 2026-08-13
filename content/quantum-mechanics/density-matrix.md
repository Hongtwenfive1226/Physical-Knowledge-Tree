---
id: density-matrix
name: 密度矩阵
name_en: Density Matrix
domain: quantum-mechanics
aliases: [密度算符, 混合态]
tags: [量子, 混合态, 统计]
keywords: [密度算符, 约化密度矩阵, 纯度, 冯诺依曼熵]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 混合态的完整描述}
  - {id: entanglement, weight: 5, note: 约化密度矩阵度量纠缠}
  - {id: quantum-measurement, weight: 4, note: 退相干}
  - {id: quantum-information, weight: 4, note: 量子态分辨}
  - {id: statistical-mechanics, weight: 4, note: 密度算符与量子统计}
  - {id: operators-and-measurement, weight: 4}
superseded_by: []
supersedes: []
---
# 密度矩阵

## 概述

密度矩阵（密度算符）是量子态的**最一般描述**，统一处理纯态与混合态（经典概率加权的系综）。当系统状态不完全已知或与外界关联时，必须用密度算符 $\rho$ 而非态矢描述。密度算符是量子统计力学（$\rho\propto e^{-\beta H}$）、退相干理论与量子信息论的共同语言；其约化密度矩阵与冯诺依曼熵是量子纠缠的核心工具。

## 基本概念

- **密度算符**：$\rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|$，$p_i\ge0$、$\sum_ip_i=1$。
- **纯态 / 混合态**：$\rho=|\psi\rangle\langle\psi|$（$\rho^2=\rho$）/ 一般系综。
- **纯度**：$\mathrm{tr}\rho^2\le1$，等于 1 当且仅当纯态。
- **约化密度矩阵**：$\rho_A=\mathrm{tr}_B\rho_{AB}$（对子系统 $B$ 求偏迹）。
- **冯诺依曼熵**：$S(\rho)=-\mathrm{tr}(\rho\ln\rho)$。

## 核心内容

### 基本定律 / 方程

密度算符与期望值：

$$ \rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|,\qquad \langle A\rangle=\mathrm{tr}(\rho A) $$

**刘维尔-冯诺依曼方程**（演化）：

$$ i\hbar\frac{\partial\rho}{\partial t}=[\hat H,\rho] $$

约化密度矩阵与冯诺依曼熵：

$$ \rho_A=\mathrm{tr}_B\rho_{AB},\qquad S(\rho)=-\mathrm{tr}(\rho\ln\rho) $$

### 推导要点

- **期望值**：$\langle A\rangle=\sum_ip_i\langle\psi_i|\hat A|\psi_i\rangle=\mathrm{tr}(\rho A)$（用迹的循环性）。
- **演化方程**：由薛定谔方程对 $\rho$ 求时间导数，用 $i\hbar\partial_t|\psi\rangle=\hat H|\psi\rangle$ 得 $i\hbar\dot\rho=[\hat H,\rho]$。
- **约化密度矩阵**：对复合态 $|\psi_{AB}\rangle$ 求偏迹，得到只含子系统 $A$ 信息的算符；冯诺依曼熵度量其混合程度。

### 重要定理与推论

- **纯度判据**：$\mathrm{tr}\rho^2=1\iff$ 纯态，$<1$ 为混合态。
- **演化幺正性**：纯态在幺正演化下保持纯态；混合化来自与环境的纠缠（退相干）。
- **吉布斯态**：热平衡 $\rho=e^{-\beta H}/Z$（[[statistical-mechanics]] 的量子系综）。
- **纠缠度量**：纯态纠缠度 $E(|\psi_{AB}\rangle)=S(\rho_A)$（[[entanglement]]）。

## 深化内容

密度算符是**退相干**（[[quantum-measurement]]）的数学框架：系统与环境的纠缠使 $\rho_A$ 的干涉项消失。量子信息论（[[quantum-information]]）用密度算符定义量子信道、保真度、纠缠度量。量子统计（[[quantum-statistics]]）中 $\rho$ 给出系综平均。延伸阅读可参考 Sakurai《现代量子力学》、Nielsen & Chuang《量子计算与量子信息》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[entanglement]]（约化密度矩阵）、[[quantum-measurement]]（退相干）、[[quantum-information]]。
- 统计：[[statistical-mechanics]]（量子系综）、[[quantum-statistics]]。
- 基础：[[operators-and-measurement]]。

## 前置知识

- [[linear-algebra]]、[[quantum-mechanics]]、[[operators-and-measurement]]
