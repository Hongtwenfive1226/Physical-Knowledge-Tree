---
id: angular-momentum-qm
name: 量子角动量理论
name_en: Quantum Angular Momentum
domain: quantum-mechanics
aliases: [角动量算符, 角动量耦合]
tags: [量子, 角动量, 对称性]
keywords: [对易子, 升降算符, CG系数, 旋转群]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 角动量是量子力学的核心可观察量}
  - {id: group-theory, weight: 5, note: 旋转群 SO(3) 的表示}
  - {id: spin, weight: 5, note: 自旋是内禀角动量}
  - {id: hydrogen-atom, weight: 4, note: 轨道角动量}
  - {id: spherical-harmonics, weight: 5, note: 本征函数}
  - {id: identical-particles, weight: 3}
  - {id: poisson-brackets, weight: 3, note: 经典对应}
superseded_by: []
supersedes: []
---
# 量子角动量理论

## 概述

角动量是量子力学的核心可观察量，其代数结构完全由**对易关系** $[\hat J_i,\hat J_j]=i\hbar\epsilon_{ijk}\hat J_k$ 决定——这正对应旋转群 $SO(3)$（及 $SU(2)$）的**李代数**。由对易关系可完全解出角动量的本征谱：$\hat J^2$ 的本征值为 $\hbar^2j(j+1)$（$j$ 取整数或半整数），$\hat J_z$ 的本征值为 $\hbar m$（$m=-j,\dots,j$）。角动量理论统一了轨道角动量（$j$ 整数）、自旋（$j$ 半整数）与角动量耦合（CG 系数），是原子结构、分子光谱与粒子物理的共同语言。

## 基本概念

- **角动量算符**：$\hat J_x,\hat J_y,\hat J_z$，满足 $[\hat J_i,\hat J_j]=i\hbar\epsilon_{ijk}\hat J_k$。
- **升降算符**：$\hat J_\pm=\hat J_x\pm i\hat J_y$。
- **本征态**：$|j,m\rangle$。
- **CG 系数**：$C^{JM}_{j_1m_1j_2m_2}=\langle j_1j_2;JM|j_1m_1;j_2m_2\rangle$。
- **卡西米尔算符**：$\hat J^2=\hat J_x^2+\hat J_y^2+\hat J_z^2$。

## 核心内容

### 基本定律 / 方程

对易关系与本征值：

$$ [\hat J_i,\hat J_j]=i\hbar\epsilon_{ijk}\hat J_k,\qquad \hat J^2|j,m\rangle=\hbar^2j(j+1)|j,m\rangle,\quad \hat J_z|j,m\rangle=\hbar m|j,m\rangle $$

升降算符的作用：

$$ \hat J_\pm|j,m\rangle=\hbar\sqrt{(j\mp m)(j\pm m+1)}\,|j,m\pm1\rangle $$

**角动量耦合**：

$$ |j_1j_2;JM\rangle=\sum_{m_1m_2}C^{JM}_{j_1m_1j_2m_2}|j_1m_1\rangle|j_2m_2\rangle $$

### 推导要点

- **本征值谱**：由 $[\hat J_z,\hat J_\pm]=\pm\hbar\hat J_\pm$，$\hat J_\pm|j,m\rangle\propto|j,m\pm1\rangle$；因 $m$ 有上下界（$\hat J^2-\hat J_z^2\ge0$），要求 $m$ 从 $j$ 到 $-j$ 整数步进，故 $j$ 为整数或半整数，且 $\hat J^2$ 本征值为 $j(j+1)\hbar^2$。
- **升降算符系数**：由归一化 $|\hat J_\pm|j,m\rangle|^2=\langle j,m|\hat J_\mp\hat J_\pm|j,m\rangle$ 用 $\hat J_\mp\hat J_\pm=\hat J^2-\hat J_z^2\mp\hbar\hat J_z$ 计算。
- **CG 系数**：由两角动量的直积空间 $\{|j_1m_1\rangle|j_2m_2\rangle\}$ 到总角动量基的幺正变换给出。

### 重要定理与推论

- **角动量的量子化**：$j$ 取 $0,\frac12,1,\frac32,\dots$，$m$ 取 $-j,\dots,j$ 共 $2j+1$ 个值。
- **$SO(3)$ 与 $SU(2)$ 的表示**：$j$ 标注不可约表示，半整数表示只属于 $SU(2)$（自旋）。
- **维格纳-埃卡特定理**：角动量矩阵元分解为 CG 系数 × 约化矩阵元。
- **选择定则**：电偶极跃迁 $\Delta l=\pm1$、$\Delta m=0,\pm1$。

## 深化内容

角动量理论是[[group-theory]] 表示论的最典型应用：$SU(2)$ 的双值表示（自旋）覆盖 $SO(3)$，是自旋与费米子的几何根源。角动量耦合（CG 系数、$6j$/$9j$ 符号）用于原子光谱（LS 耦合）、核物理（核壳模型）。轨道角动量本征函数即 [[spherical-harmonics]]。延伸阅读可参考 Sakurai《现代量子力学》、朗道《量子力学（非相对论）》、Edmonds《Angular Momentum in Quantum Mechanics》。

## 与其他知识的联系

- 紧密相关：[[spin]]（内禀角动量）、[[group-theory]]（表示论）、[[spherical-harmonics]]（轨道角动量本征函数）。
- 应用：[[hydrogen-atom]]（原子结构）、[[identical-particles]]（全同粒子统计）、光谱学。
- 经典对应：[[poisson-brackets]]（角动量对易子的来源）。

## 前置知识

- [[linear-algebra]]、[[group-theory]]、[[quantum-mechanics]]
