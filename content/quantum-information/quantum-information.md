---
id: quantum-information
name: 量子信息
name_en: Quantum Information
domain: quantum-information
aliases: [量子信息科学]
tags: [量子信息, 纠缠, 资源]
keywords: [量子比特, 纠缠, 冯诺依曼熵, 量子信道]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 理论基础}
  - {id: entanglement, weight: 5, note: 纠缠是核心资源}
  - {id: density-matrix, weight: 5, note: 量子态表示}
  - {id: information-theory, weight: 5, note: 经典信息论的推广}
  - {id: quantum-computing, weight: 5, note: 应用}
  - {id: quantum-cryptography, weight: 4, note: 应用}
  - {id: quantum-error-correction, weight: 4, note: 应用}
  - {id: bell-inequalities, weight: 3}
superseded_by: []
supersedes: []
pos: {x: 60, y: 30, z: 0}
---
# 量子信息

## 概述

量子信息研究用量子系统编码、传输与处理信息，是[[information-theory]] 的量子推广。基本单元是**量子比特** $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$（叠加态），核心资源是**叠加**与**纠缠**。量子信息论用密度算符（[[density-matrix]]）描述态、用冯诺依曼熵度量信息、用保真度度量态的距离。与经典信息的根本区别由**无克隆定理**与**贝尔非定域性**（[[bell-inequalities]]）刻画。

## 基本概念

- **量子比特**：二维希尔伯特空间的态。
- **密度算符 / 混合态**：最一般的量子态表示。
- **冯诺依曼熵**：$S(\rho)=-\mathrm{tr}(\rho\ln\rho)$。
- **保真度**：$F=\langle\psi|\rho|\psi\rangle$。
- **量子信道**：完全正定保迹映射（CPTP）。

## 核心内容

### 基本定律 / 方程

量子比特与密度算符：

$$ |\psi\rangle=\alpha|0\rangle+\beta|1\rangle,\qquad \rho=\sum_ip_i|\psi_i\rangle\langle\psi_i| $$

冯诺依曼熵：

$$ S(\rho)=-\mathrm{tr}(\rho\ln\rho) $$

**无克隆定理**：不存在酉变换 $U$ 使 $U|\psi\rangle|0\rangle=|\psi\rangle|\psi\rangle$ 对所有 $|\psi\rangle$ 成立。

### 推导要点

- **无克隆定理**：假设 $U|a\rangle|0\rangle=|a\rangle|a\rangle$、$U|b\rangle|0\rangle=|b\rangle|b\rangle$，由线性性 $U(\alpha|a\rangle+\beta|b\rangle)|0\rangle=\alpha|aa\rangle+\beta|bb\rangle\ne(\alpha|a\rangle+\beta|b\rangle)^{\otimes2}$，矛盾。
- **冯诺依曼熵**：密度算符本征值的香农熵，度量混合度。
- **贝尔非定域性**：纠缠态违反贝尔不等式（[[bell-inequalities]]）。

### 重要定理与推论

- **无克隆定理**：未知量子态不可复制（量子密码安全的基础）。
- **无删除定理 / 不可广播**：量子信息的守恒性。
- **纠缠是资源**：纠缠蒸馏、纠缠熵量化资源（[[entanglement]]）。
- **量子信道容量**：量子信息传输的速率上限。

## 深化内容

量子信息是 [[quantum-computing]]、[[quantum-cryptography]]、[[quantum-error-correction]] 的理论基础，并与 [[information-theory]]、[[density-matrix]]、[[entanglement]] 深度交叉。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Wilde《Quantum Information Theory》、Preskill《Lecture Notes》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[entanglement]]、[[density-matrix]]、[[information-theory]]。
- 应用：[[quantum-computing]]、[[quantum-cryptography]]、[[quantum-error-correction]]。

## 前置知识

- [[quantum-mechanics]]、[[density-matrix]]、[[information-theory]]
