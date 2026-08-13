---
id: quantum-measurement
name: 量子测量与退相干
name_en: Quantum Measurement & Decoherence
domain: quantum-mechanics
aliases: [测量问题, 退相干]
tags: [量子, 测量, 退相干]
keywords: [坍缩, 退相干, 环境耦合, 投影假设]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 测量问题是量子力学的核心疑难}
  - {id: operators-and-measurement, weight: 5, note: 投影测量公设}
  - {id: density-matrix, weight: 5, note: 退相干的数学描述}
  - {id: entanglement, weight: 4, note: 测量装置与被测系统的纠缠}
  - {id: quantum-computing, weight: 3, note: 退相干是量子计算的主要障碍}
superseded_by: []
supersedes: []
---
# 量子测量与退相干

## 概述

量子测量的核心疑难在于：薛定谔方程给出**幺正、可逆**的演化，而测量导致波函数"**坍缩**"（非幺正、不可逆、概率性）。**投影测量公设**给出概率（玻恩规则）与坍缩后的态，但"坍缩何时、如何发生"是测量问题。**退相干理论**（泽赫、祖雷克）给出最有力的物理解释：系统与环境的不可避免纠缠使干涉项在约化密度矩阵中消失，从而涌现经典行为——但诠释层面的根本问题仍未完全解决。

## 基本概念

- **投影测量**：测量 $\hat A$ 得到 $a_n$ 后态坍缩为 $|a_n\rangle$。
- **坍缩（波包缩减）**：测量的非幺正过程。
- **退相干**：环境纠缠导致的相干性丢失。
- **量子达尔文主义**：环境"记录"经典信息。
- **诠释**：哥本哈根、多世界、隐变量、量子贝叶斯主义等。

## 核心内容

### 基本定律 / 方程

投影测量公设：

$$ P(a_n)=|\langle a_n|\psi\rangle|^2,\qquad |\psi\rangle\xrightarrow{\text{测得}a_n}|a_n\rangle $$

**退相干**（系统-环境复合体的幺正演化 → 约化密度矩阵对角化）：

$$ \rho_{SA}=|\psi\rangle\langle\psi|\otimes|\epsilon\rangle\langle\epsilon|\xrightarrow{U}\sum_k p_k|k\rangle\langle k|\otimes\rho_{E,k} $$

从而 $\rho_A=\mathrm{tr}_E\rho_{SA}=\sum_k p_k|k\rangle\langle k|$（对角，无干涉项）。

### 推导要点

- **退相干的机制**：系统与环境的相互作用 $H_{SE}$ 使系统本征态 $|k\rangle$ 与环境态 $|\epsilon_k\rangle$ 纠缠，环境态近乎正交 $\langle\epsilon_k|\epsilon_j\rangle\approx\delta_{kj}$；对 $\rho_A$ 取偏迹后非对角元 $\langle k|\rho_A|j\rangle\propto\langle\epsilon_j|\epsilon_k\rangle\to0$。
- **退相干时间**：宏观物体与环境强耦合，退相干极快（$\sim10^{-20}$s），因此宏观叠加态不可见。
- **坍缩 vs 幺正演化**：投影公设是额外假设，退相干说明"为什么看起来像坍缩"。

### 重要定理与推论

- **退相干解释经典涌现**：宏观物体的经典性来自环境纠缠。
- **量子达尔文主义**：环境冗余记录的信息使不同观察者看到一致的经典结果。
- **退相干是量子计算的障碍**：量子比特与环境耦合丢失相干（[[quantum-computing]]），需 [[quantum-error-correction]]。
- **测量问题仍未完全解决**：退相干解释"表观坍缩"，但"单一结果的确定"仍需诠释。

## 深化内容

测量问题与量子诠释（哥本哈根、多世界、德布罗意-玻姆隐变量、量子贝叶斯主义）是量子基础的前沿。**弱测量与弱值**（Aharonov）扩展测量概念。**量子芝诺/反芝诺效应**表明频繁测量抑制/加速演化。退相干理论是 [[quantum-error-correction]] 与容错量子计算的前提。延伸阅读可参考 Zurek《Decoherence and the Transition from Quantum to Classical》、Nielsen & Chuang《量子计算与量子信息》、Sakurai《现代量子力学》。

## 与其他知识的联系

- 紧密相关：[[operators-and-measurement]]（投影公设）、[[density-matrix]]（数学）、[[entanglement]]。
- 应用与挑战：[[quantum-computing]] 的退相干误差、[[quantum-error-correction]]。

## 前置知识

- [[density-matrix]]、[[operators-and-measurement]]、[[entanglement]]
