---
id: quantum-computing
name: 量子计算
name_en: Quantum Computing
domain: quantum-information
aliases: [量子计算机, 量子算法]
tags: [量子信息, 计算, 算法]
keywords: [量子比特, 量子门, 叠加, 纠缠]
updated: 2026-08-13
links:
  - {id: quantum-information, weight: 5, note: 理论框架}
  - {id: quantum-mechanics, weight: 5, note: 物理基础}
  - {id: entanglement, weight: 4, note: 纠缠资源}
  - {id: quantum-error-correction, weight: 5, note: 容错计算}
  - {id: quantum-measurement, weight: 3, note: 退相干}
  - {id: spin, weight: 3, note: 量子比特实现}
  - {id: topological-materials, weight: 2, note: 拓扑量子比特}
superseded_by: []
supersedes: []
---
# 量子计算

## 概述

量子计算利用量子比特的**叠加与纠缠**实现并行计算，对某些问题提供经典计算机无法企及的加速。基本操作是**量子门**（酉变换），可组成通用门集。著名量子算法：**Shor 算法**（大数分解，$O(\log^3N)$）威胁 RSA 加密、**Grover 算法**（无序搜索，$O(\sqrt N)$）。物理实现平台包括超导、离子阱、光量子、冷原子与拓扑量子比特。主要障碍是**退相干**，需 [[quantum-error-correction]] 实现容错。

## 基本概念

- **量子比特**：$|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$。
- **量子门**：哈达玛 $H$、相位、CNOT、Toffoli 等酉门。
- **通用门集**：可近似任意酉变换的有限门集。
- **量子并行**：叠加态同时编码多个经典输入。
- **退相干**：量子比特与环境的耦合。

## 核心内容

### 基本定律 / 方程

量子态与量子门（布洛赫球表示）：

$$ |\psi\rangle=\cos\frac\theta2|0\rangle+e^{i\phi}\sin\frac\theta2|1\rangle $$

哈达玛门与 CNOT 门：

$$ H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad \mathrm{CNOT}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix} $$

**Shor 算法复杂度**：$O(\log^3N)$ vs 经典亚指数；**Grover**：$O(\sqrt N)$。

### 推导要点

- **量子并行**：对 $n$ 量子比特施加 $H^{\otimes n}$，同时作用到 $2^n$ 个基态。
- **Shor 算法**：把大数分解化为求周期，用**量子傅里叶变换（QFT）** 提取周期（[[fourier-analysis]]）。
- **Grover 算法**：振幅放大，把目标态振幅以 $O(\sqrt N)$ 步放大到近 1。

### 重要定理与推论

- **通用性**：有限门集（H、T、CNOT）可近似任意酉变换（Solovay-Kitaev）。
- **量子加速**：Shor（分解）、Grover（搜索）展示指数/二次加速。
- **容错阈值定理**：门错误率低于阈值时容错计算可行（[[quantum-error-correction]]）。
- **不可克隆与计算**：未知量子态不可复制（[[quantum-information]]）。

## 深化内容

量子计算的物理平台与 [[spin]]（自旋比特）、[[superconductivity]]（超导比特）、[[quantum-optics]]（光子）、[[topological-materials]]（拓扑比特）交叉；退相干由 [[quantum-measurement]] 与 [[quantum-error-correction]] 处理。**量子优越性**（2019 谷歌）已实验展示。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Preskill《Lecture Notes》、Mermin《Quantum Computer Science》。

## 与其他知识的联系

- 紧密相关：[[quantum-information]]、[[quantum-error-correction]]、[[entanglement]]。
- 物理平台：[[spin]]（自旋比特）、[[superconductivity]]（超导比特）、[[quantum-optics]]（光子）、[[topological-materials]]（拓扑比特）。
- 挑战：[[quantum-measurement]]（退相干）。

## 前置知识

- [[quantum-information]]、[[linear-algebra]]、[[entanglement]]
