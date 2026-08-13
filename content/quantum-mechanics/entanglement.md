---
id: entanglement
name: 量子纠缠
name_en: Quantum Entanglement
domain: quantum-mechanics
aliases: [纠缠态, EPR]
tags: [量子, 纠缠, 非局域]
keywords: [EPR悖论, 贝尔不等式, 非局域关联]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 量子理论的推论}
  - {id: density-matrix, weight: 5, note: 约化密度矩阵与纠缠度量}
  - {id: quantum-information, weight: 5, note: 纠缠是量子资源}
  - {id: quantum-measurement, weight: 4, note: 测量与纠缠}
  - {id: aharonov-bohm-effect, weight: 2}
  - {id: bell-inequalities, weight: 4}
  - {id: quantum-cryptography, weight: 3}
superseded_by: []
supersedes: []
---
# 量子纠缠

## 概述

纠缠是复合量子系统**不能分解为各子系统直积态**的关联，是量子力学最本质、最"非经典"的特征。典型纠缠态是贝尔态 $|\Phi^+\rangle=(|00\rangle+|11\rangle)/\sqrt2$：对其中一个粒子测量会瞬间决定另一个的结果，即使两粒子空间分离。纠缠关联**违反贝尔不等式**（[[bell-inequalities]]），排除定域隐变量理论，确立量子非定域性。纠缠是量子信息处理的核心资源（量子计算、量子密钥分发、量子隐形传态）。

## 基本概念

- **纠缠态**：不能写成直积态的复合态。
- **贝尔态**：四个最大纠缠双比特态 $|\Phi^\pm\rangle$、$|\Psi^\pm\rangle$。
- **施密特分解**：$|\psi\rangle=\sum_i\sqrt{\lambda_i}|i_A\rangle|i_B\rangle$。
- **纠缠熵**：$E(|\psi\rangle)=S(\rho_A)=-\sum_i\lambda_i\ln\lambda_i$。
- **可分态 / 纠缠态**：可写/不可写为 $\sum p_i\rho_A^i\otimes\rho_B^i$。

## 核心内容

### 基本定律 / 方程

贝尔态（四个最大纠缠态）：

$$ |\Phi^\pm\rangle=\frac{|00\rangle\pm|11\rangle}{\sqrt2},\qquad |\Psi^\pm\rangle=\frac{|01\rangle\pm|10\rangle}{\sqrt2} $$

施密特分解：

$$ |\psi_{AB}\rangle=\sum_i\sqrt{\lambda_i}\,|i_A\rangle|i_B\rangle $$

纠缠熵：

$$ E(|\psi\rangle)=S(\rho_A)=-\sum_i\lambda_i\ln\lambda_i $$

### 推导要点

- **纠缠判据**：若 $|\psi\rangle=|\psi_A\rangle\otimes|\psi_B\rangle$，则约化密度矩阵是纯态（$\mathrm{tr}\rho_A^2=1$）；贝尔态约化后 $\rho_A=\mathbb I/2$（最大混合），故高度纠缠。
- **施密特分解**：对 $|\psi_{AB}\rangle$ 的矩阵做 SVD，得到单指标求和（[[linear-algebra]] 的奇异值分解）。
- **贝尔不等式违反**：对 $|\Phi^+\rangle$，CHSH 关联 $S=2\sqrt2>2$（见 [[bell-inequalities]]）。

### 重要定理与推论

- **非定域性**：纠缠关联不能由定域隐变量解释（贝尔定理）。
- **不可克隆定理**：纠缠态未知态不可精确复制（量子密码的安全基础）。
- **纠缠蒸馏与稀释**：纠缠可作为可操作的资源（[[quantum-information]]）。
- **单配性**：纠缠不可随意共享（monogamy of entanglement）。

## 深化内容

纠缠是量子信息论的资源理论核心：[[quantum-cryptography]]（BB84/E91）、量子隐形传态、[[quantum-computing]] 的加速都依赖纠缠。纠缠的度量（纠缠熵、并发度、纠缠生成熵）与**多体纠缠**是活跃研究领域。退相干（[[quantum-measurement]]）破坏纠缠，是量子计算的主要挑战。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Sakurai《现代量子力学》、Preskill《Lecture Notes》。

## 与其他知识的联系

- 紧密相关：[[density-matrix]]（纠缠度量）、[[quantum-information]]（资源理论）、[[bell-inequalities]]（验证）。
- 应用：[[quantum-cryptography]]（量子密钥分发）、[[quantum-computing]]、量子隐形传态。
- 基础：[[quantum-mechanics]]、[[operators-and-measurement]]。

## 前置知识

- [[density-matrix]]、[[linear-algebra]]、[[quantum-mechanics]]
