---
id: quantum-error-correction
name: 量子纠错
name_en: Quantum Error Correction
domain: quantum-information
aliases: [量子纠错码, QEC]
tags: [量子信息, 容错, 纠错]
keywords: [表面码, 稳定子码, 容错阈值]
updated: 2026-08-13
links:
  - {id: quantum-computing, weight: 5, note: 容错计算的基础}
  - {id: quantum-information, weight: 5, note: 理论框架}
  - {id: quantum-measurement, weight: 3, note: 退相干与测量}
  - {id: density-matrix, weight: 3}
superseded_by: []
supersedes: []
---
# 量子纠错

## 概述

量子纠错（QEC）克服量子比特的**退相干与门误差**，是大规模容错量子计算的前提。与经典纠错不同，量子态连续且**不可克隆**，因此用**冗余编码**（把逻辑比特编码到多个物理比特）与**稳定子码**（通过纠错测量检测误差而不破坏编码信息）。**表面码**（容错阈值约 1%）是当前主流方案。QEC 使"有噪声的量子计算机"能够可靠执行任意量子算法（阈值定理）。

## 基本概念

- **逻辑比特 / 物理比特**：被保护的量子信息 / 承载它的比特。
- **稳定子码**：用稳定子算符定义码空间。
- **纠错测量**：测量稳定子（不破坏码空间）。
- **容错阈值**：门错误率低于阈值时纠错有效。
- **表面码**：二维网格上的拓扑稳定子码。

## 核心内容

### 基本定律 / 方程

**9 比特 Shor 码**（纠正单比特翻转 + 相位错误）与**7 比特 Steane 码**（CSS 码）是早期范例。

稳定子码的**纠错条件**（Knill-Laflamme）：

$$ \langle\psi_i|E_a^\dagger E_b|\psi_j\rangle=\delta_{ij}C_{ab}\ \ \forall E_a,E_b\in\mathcal E $$

**容错阈值定理**：门错误率 $p<p_{\mathrm{th}}$（表面码 $p_{\mathrm{th}}\approx1\%$）时，可用更多物理比特任意压低逻辑错误率。

### 推导要点

- **冗余编码**：把逻辑态编码到纠缠的多比特态（如 $|0_L\rangle=(|000\rangle+|111\rangle)/\sqrt2$ 等）。
- **稳定子测量**：测量稳定子算符（如 $Z_1Z_2$、$Z_2Z_3$）检测错误，因稳定子与码空间对易而不破坏编码。
- **纠错条件**：Knill-Laflamme 条件保证可检测并纠正 $\mathcal E$ 中的错误。

### 重要定理与推论

- **阈值定理**：错误率低于阈值时容错计算可行。
- **稳定子形式**：[[group-theory]] 的阿贝尔稳定子群定义码空间。
- **表面码**：高阈值、局域测量的拓扑码，是主流实验方案。
- **退相干防护**：QEC 是量子比特抵御退相干（[[quantum-measurement]]）的主动方法。

## 深化内容

量子纠错是 [[quantum-computing]] 的核心，与 [[quantum-information]]（量子信道、容错阈值）、[[density-matrix]]（噪声模型）交叉。拓扑码与 [[topological-materials]]（马约拉纳、拓扑量子比特）相关。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Preskill《Lecture Notes》、Gottesman《Stabilizer Codes and Quantum Error Correction》。

## 与其他知识的联系

- 紧密相关：[[quantum-computing]]（目标）、[[quantum-information]]（理论）。
- 物理挑战：[[quantum-measurement]]（退相干）、[[density-matrix]]（噪声模型）。

## 前置知识

- [[quantum-information]]、[[density-matrix]]、[[quantum-computing]]
