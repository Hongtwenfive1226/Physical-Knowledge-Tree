---
id: schrodinger-equation
name: 薛定谔方程
name_en: Schrödinger Equation
domain: quantum-mechanics
aliases: [含时薛定谔方程, 定态薛定谔方程]
tags: [量子, 波函数, 方程]
keywords: [哈密顿量, 定态, 本征值, 演化算符, 概率流]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 量子力学的基本方程}
  - {id: operators-and-measurement, weight: 4, note: 算符形式}
  - {id: hydrogen-atom, weight: 4, note: 精确可解的重要例子}
  - {id: partial-differential-equations, weight: 4, note: 数学类型}
  - {id: eigenvalue-problems, weight: 4, note: 定态即本征值问题}
  - {id: quantum-harmonic-oscillator, weight: 4}
  - {id: quantum-tunneling, weight: 3}
  - {id: wave-mechanics, weight: 3, note: 物质波}
  - {id: mathematical-physics-methods, weight: 4}
superseded_by: []
supersedes: []
---
# 薛定谔方程

## 概述

薛定谔方程（1926）是量子力学的基本动力学方程，描述波函数随时间的幺正演化，地位相当于经典力学的牛顿第二定律。含时方程由哈密顿算符 $\hat H$ 生成；当 $\hat H$ 不显含时间时，分离变量得到**定态方程** $\hat H\psi=E\psi$，即本征值问题，其本征值给出能谱。薛定谔方程由德布罗意物质波假设启发、经正则量子化确立，其精确可解模型（谐振子、氢原子）构成了量子力学的骨架。

## 基本概念

- **波函数**：$\psi(\vec r,t)$，满足 $|\psi|^2$ 为概率密度（玻恩规则）。
- **哈密顿算符**：$\hat H=-\frac{\hbar^2}{2m}\nabla^2+V(\vec r)$。
- **定态**：能量本征态 $\psi_n$，概率密度不随时间变化。
- **演化算符**：$\hat U(t)=e^{-i\hat Ht/\hbar}$，幺正。
- **概率流**：$\vec j=\frac{\hbar}{2mi}(\psi^*\nabla\psi-\psi\nabla\psi^*)$。

## 核心内容

### 基本定律 / 方程

**含时薛定谔方程**：

$$ i\hbar\frac{\partial\psi}{\partial t}=\hat H\psi=\Big(-\frac{\hbar^2}{2m}\nabla^2+V\Big)\psi $$

**定态薛定谔方程**：

$$ \hat H\psi_n=E_n\psi_n $$

**概率守恒（连续性方程）**：

$$ \frac{\partial|\psi|^2}{\partial t}+\nabla\cdot\vec j=0 $$

### 推导要点

- **定态分离**：设 $\psi(\vec r,t)=\psi(\vec r)T(t)$，代入含时方程分离变量，得 $T=e^{-iEt/\hbar}$ 与定态方程 $\hat H\psi=E\psi$。
- **演化算符**：形式解 $\psi(t)=e^{-i\hat Ht/\hbar}\psi(0)$；$\hat H$ 厄米故 $e^{-i\hat Ht/\hbar}$ 幺正（保概率）。
- **连续性方程**：由薛定谔方程及其共轭相减，整理为 $\partial_t(\psi^*\psi)+\nabla\cdot\vec j=0$，保证总概率守恒。

### 重要定理与推论

- **幺正演化**：概率守恒，$\|\psi(t)\|=\|\psi(0)\|$。
- **能谱的本征值结构**：束缚态能量离散，散射态连续。
- **定态的稳定性**：定态概率密度不随时间变化。
- **平面波解**：自由粒子 $\psi=e^{i(\vec k\cdot\vec r-\omega t)}$，$\omega=E/\hbar$（德布罗意关系）。

## 深化内容

薛定谔方程是**波动力学**（位置表象）形式，与海森堡的[[matrix-mechanics]] 等价（表象变换）。费曼的 [[path-integral]] 从传播子角度给出另一表述。相对论化导出克莱因-戈登方程与狄拉克方程（走向 [[quantum-field-theory]]）。含时微扰、散射、退相干（[[quantum-measurement]]）都以它为出发点。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]（框架）、[[hydrogen-atom]] 与 [[quantum-harmonic-oscillator]]（可解模型）、[[eigenvalue-problems]]。
- 数学：[[partial-differential-equations]]、[[mathematical-physics-methods]]（分离变量/格林函数）。
- 物质波：由德布罗意关系 $\vec p=\hbar\vec k$ 启发（[[wave-mechanics]]）。

## 前置知识

- [[linear-algebra]]、[[partial-differential-equations]]、[[quantum-mechanics]]
