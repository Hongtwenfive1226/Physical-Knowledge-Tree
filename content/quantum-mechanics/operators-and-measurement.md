---
id: operators-and-measurement
name: 算符与测量
name_en: Operators & Measurement
domain: quantum-mechanics
aliases: [量子测量公设, 可观测算符]
tags: [量子, 算符, 测量]
keywords: [厄米算符, 本征值, 玻恩规则, 投影测量, 谱分解]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 量子力学的公设体系}
  - {id: linear-algebra, weight: 5, note: 厄米算符与谱分解}
  - {id: quantum-measurement, weight: 5, note: 测量的动力学问题}
  - {id: density-matrix, weight: 4, note: 混合态与测量}
  - {id: entanglement, weight: 3}
  - {id: schrodinger-equation, weight: 4, note: 演化与测量互补}
superseded_by: []
supersedes: []
---
# 算符与测量

## 概述

量子力学中，每个可观测物理量 $A$ 对应一个**厄米（自伴）算符** $\hat A$；其本征值 $\{a_n\}$ 就是测量可能得到的结果，本征矢构成正交完备基。**测量公设**给出概率（玻恩规则）与测量后的态（投影坍缩）。非对易算符不能同时具有确定值，由此产生不确定性原理。谱分解 $\hat A=\sum_n a_n|a_n\rangle\langle a_n|$ 与概率诠释共同构成量子测量的数学核心，也是量子信息论的起点。

## 基本概念

- **厄米算符**：$\hat A^\dagger=\hat A$，本征值为实数、本征矢正交完备。
- **谱分解**：$\hat A=\sum_n a_n|a_n\rangle\langle a_n|$。
- **期望值**：$\langle A\rangle=\langle\psi|\hat A|\psi\rangle$。
- **投影测量**：测得 $a_n$ 后态坍缩为 $|a_n\rangle$。
- **相容可观测量**：$[\hat A,\hat B]=0$ 时可同时对角化、同时测量。

## 核心内容

### 基本定律 / 方程

**测量公设（玻恩规则）**：

$$ P(a_n)=|\langle a_n|\psi\rangle|^2 $$

**期望值与方差**：

$$ \langle A\rangle=\langle\psi|\hat A|\psi\rangle,\qquad (\Delta A)^2=\langle\hat A^2\rangle-\langle\hat A\rangle^2 $$

**投影坍缩**：测量后 $\psi\to\hat P_n\psi/\|\hat P_n\psi\|$，$\hat P_n=|a_n\rangle\langle a_n|$。

### 推导要点

- **本征值实数性**：由 $\hat A|a\rangle=a|a\rangle$ 取内积 $\langle a|\hat A|a\rangle=a\langle a|a\rangle$，用厄米性 $\langle a|\hat A|a\rangle=\langle a|\hat A|a\rangle^*$ 得 $a=a^*$。
- **本征矢正交性**：$(\hat A-a_1)|a_1\rangle=0$、$(\hat A-a_2)|a_2\rangle=0$，取内积相减得 $(a_1-a_2)\langle a_1|a_2\rangle=0$。
- **不确定性原理**：对 $\hat A-\langle A\rangle$ 与 $\hat B-\langle B\rangle$ 用施瓦茨不等式（见 [[quantum-mechanics]]）。

### 重要定理与推论

- **谱定理**：厄米算符可谱分解，本征矢完备（[[linear-algebra]] 谱理论的无限维推广）。
- **不确定性关系**：$[\hat A,\hat B]=i\hbar\hat C\Rightarrow\Delta A\Delta B\ge\frac{\hbar}{2}|\langle C\rangle|$。
- **同时测量条件**：$\hat A,\hat B$ 相容（对易）⟺ 可同时取确定值。
- **测量改变状态**：投影测量是非幺正过程（坍缩），区别于薛定谔演化。

## 深化内容

广义测量由**POVM（正算子值测度）**描述，包含 POVM、广义测量与弱测量。测量的动力学解释由**退相干**给出（[[quantum-measurement]]）：系统与环境纠缠使干涉项消失。混合态测量用 [[density-matrix]] 描述。测量与信息的联系是 [[quantum-information]] 的基础（无克隆定理、量子信道）。延伸阅读可参考 Sakurai《现代量子力学》、Nielsen & Chuang《量子计算与量子信息》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]（公设）、[[linear-algebra]]（谱理论）。
- 测量问题：[[quantum-measurement]]（坍缩与退相干）、[[density-matrix]]（混合态）。
- 关联：[[entanglement]]（非局域关联）、[[quantum-information]]。

## 前置知识

- [[linear-algebra]]、[[quantum-mechanics]]
