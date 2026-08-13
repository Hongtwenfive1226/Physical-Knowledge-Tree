---
id: spin
name: 自旋
name_en: Spin
domain: quantum-mechanics
aliases: [自旋角动量, 泡利矩阵]
tags: [量子, 自旋, 粒子内禀]
keywords: [泡利矩阵, 自旋1/2, 塞曼效应]
updated: 2026-08-13
links:
  - {id: angular-momentum-qm, weight: 5, note: 自旋是角动量理论的一部分}
  - {id: quantum-mechanics, weight: 4}
  - {id: identical-particles, weight: 5, note: 自旋-统计定理}
  - {id: special-relativity, weight: 3, note: 狄拉克方程导出自旋}
  - {id: quantum-computing, weight: 4, note: 量子比特的物理实现}
  - {id: condensed-matter-physics, weight: 3, note: 磁性}
superseded_by: []
supersedes: []
---
# 自旋

## 概述

自旋是粒子的**内禀角动量**，无经典对应（无法用"绕轴自转"解释）。自旋 $1/2$ 系统由**泡利矩阵**描述，其态是二维希尔伯特空间中的矢量。自旋满足角动量对易关系但取**半整数值**。**自旋-统计定理**把自旋与统计联系：半整数自旋→费米子、整数自旋→玻色子。自旋是量子比特（[[quantum-computing]]）最自然的物理实现，也是原子精细结构、磁性、NMR/MRI 与量子信息的基础。

## 基本概念

- **自旋算符**：$\hat S_x,\hat S_y,\hat S_z$，满足 $[\hat S_i,\hat S_j]=i\hbar\epsilon_{ijk}\hat S_k$。
- **泡利矩阵**：$\sigma_x,\sigma_y,\sigma_z$，满足 $\sigma_i\sigma_j=\delta_{ij}+i\epsilon_{ijk}\sigma_k$。
- **自旋态**：$|0\rangle$（自旋上）、$|1\rangle$（自旋下），布洛赫球描述。
- **磁矩**：$\vec\mu=\gamma\vec S$，$\gamma$ 为旋磁比（电子 $\gamma\approx-e/m_e$）。

## 核心内容

### 基本定律 / 方程

自旋 $1/2$ 算符（泡利矩阵）：

$$ \hat{\vec S}=\frac{\hbar}{2}\vec\sigma,\qquad \sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\ \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\ \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix} $$

**磁场中的自旋哈密顿量**（塞曼）：

$$ \hat H=-\vec\mu\cdot\vec B=-\gamma\vec S\cdot\vec B $$

### 推导要点

- **自旋的表示**：$j=1/2$ 是 $SU(2)$ 的二维不可约表示，生成元即 $\vec\sigma/2$（见 [[angular-momentum-qm]]）。
- **塞曼效应**：取 $\vec B=B\hat z$，$H=-\gamma BS_z$，本征值 $\mp\gamma\hbar B/2$，能级劈裂。
- **自旋进动**：态在磁场中的演化 $|\psi(t)\rangle=e^{i\gamma Bt\sigma_z/2}|\psi(0)\rangle$，自旋绕 $B$ 轴进动。

### 重要定理与推论

- **泡利矩阵代数**：$\{\sigma_i,\sigma_j\}=2\delta_{ij}$、$[\sigma_i,\sigma_j]=2i\epsilon_{ijk}\sigma_k$、$\sigma_i^2=1$、$\mathrm{tr}\,\sigma_i=0$。
- **自旋-统计定理**：自旋决定玻色/费米统计（[[identical-particles]]）。
- **自旋-轨道耦合**：$\vec L\cdot\vec S$ 导致原子精细结构（[[perturbation-theory]]）。
- **自旋态是量子比特**：$|0\rangle,|1\rangle$ 是 [[quantum-computing]] 的基本单元。

## 深化内容

自旋的**相对论起源**：狄拉克方程自然导出自旋 $1/2$ 与反常磁矩（[[quantum-field-theory]]、[[qed]]）。自旋耦合（LS、JJ）决定原子/分子能级；自旋电子学（自旋电子器件）、核磁共振（NMR）与磁共振成像（MRI）是重要应用。**贝尔态与纠缠**（[[entanglement]]）常以自旋实现。延伸阅读可参考 Sakurai《现代量子力学》、Griffiths《量子力学概论》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[angular-momentum-qm]]、[[identical-particles]]（泡利不相容）。
- 相对论起源：[[quantum-field-theory]] 的狄拉克方程、[[qed]]（反常磁矩）。
- 应用：[[quantum-computing]]（量子比特）、[[condensed-matter-physics]]（磁性）、NMR/MRI。

## 前置知识

- [[angular-momentum-qm]]、[[quantum-mechanics]]、[[linear-algebra]]
