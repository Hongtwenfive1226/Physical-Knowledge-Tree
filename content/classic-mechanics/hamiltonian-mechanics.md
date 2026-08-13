---
id: hamiltonian-mechanics
name: 哈密顿力学
name_en: Hamiltonian Mechanics
domain: classic-mechanics
aliases: [哈密顿方程, 正则方程]
tags: [力学, 相空间, 辛结构]
keywords: [哈密顿量, 相空间, 正则方程, 泊松括号]
updated: 2026-08-13
links:
  - {id: lagrangian-mechanics, weight: 5, note: 由拉格朗日形式经勒让德变换得到}
  - {id: newtonian-mechanics, weight: 5, note: 三种经典表述互相等价}
  - {id: poisson-brackets, weight: 5, note: 泊松括号是哈密顿力学的代数语言}
  - {id: canonical-transformations, weight: 4, note: 正则变换保持辛结构}
  - {id: hamilton-jacobi-theory, weight: 4, note: 哈密顿-雅可比方程}
  - {id: quantum-mechanics, weight: 4, note: 正则量子化的出发点}
  - {id: statistical-mechanics, weight: 4, note: 系综理论以相空间为基础}
  - {id: chaos-theory, weight: 3, note: 相空间结构}
  - {id: tensor-calculus, weight: 3, note: 辛几何表述}
superseded_by: [quantum-mechanics]
supersedes: []
pos: {x: -15, y: -10, z: 0}
---
# 哈密顿力学

## 概述

哈密顿力学是经典力学的第三种（最对称的）表述：以广义坐标 $q_i$ 与**共轭动量** $p_i$ 为独立变量，用单一标量函数 **哈密顿量** $H(q,p,t)$ 生成动力学。系统的演化在 $2n$ 维**相空间**中进行，由一阶的**正则方程**描述。哈密顿形式因其"坐标-动量对称"的结构，成为**正则量子化**（把 $q,p$ 提升为算符）与**统计力学**（相空间测度）的出发点，也是现代动力系统与辛几何研究的对象。

## 基本概念

- **共轭动量**：$p_i=\partial L/\partial\dot q_i$。
- **哈密顿量**：$H(q,p,t)=\sum_i p_i\dot q_i-L$（经勒让德变换由 $L$ 得到）；不显含时间时等于总能量。
- **相空间**：以 $(q_i,p_i)$ 为坐标的 $2n$ 维空间，系统状态即相空间中的点。
- **泊松括号**：$\{f,g\}=\sum_i\big(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i}-\frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\big)$。
- **辛结构**：相空间上的反对称双线性形式 $\omega=\sum dq_i\wedge dp_i$。

## 核心内容

### 基本定律 / 方程

**哈密顿正则方程**：

$$ \dot q_i=\frac{\partial H}{\partial p_i},\qquad \dot p_i=-\frac{\partial H}{\partial q_i} $$

**泊松括号形式的运动方程**：

$$ \frac{df}{dt}=\{f,H\}+\frac{\partial f}{\partial t} $$

**刘维尔定理**：相空间体积在演化下不变（相流不可压缩）。

### 推导要点

- **勒让德变换**：由 $H=\sum p_i\dot q_i-L$ 取全微分 $dH=\sum(\dot q_i\,dp_i-\dot p_i\,dq_i)-\frac{\partial L}{\partial t}dt$，与 $dH=\sum(\frac{\partial H}{\partial p_i}dp_i+\frac{\partial H}{\partial q_i}dq_i)+\frac{\partial H}{\partial t}dt$ 比较系数即得正则方程。
- **运动方程**：$\dot f=\sum(\frac{\partial f}{\partial q_i}\dot q_i+\frac{\partial f}{\partial p_i}\dot p_i)+\frac{\partial f}{\partial t}$，代入正则方程即 $\{f,H\}+\frac{\partial f}{\partial t}$。
- **刘维尔定理**：相流的雅可比行列式满足 $d(\det J)/dt=(\det J)\,\mathrm{div}\,\dot{\vec x}$，而哈密顿流的散度为零。

### 重要定理与推论

- **能量守恒**：$\dot H=\partial H/\partial t$，$H$ 不显含时间时守恒。
- **循环坐标**：$H$ 不含 $q_k$ 时 $p_k$ 守恒（与拉格朗日形式一致）。
- **刘维尔定理**：相空间体积（测度）不变，是统计力学等概率假设的基础。
- **正则量子化的桥梁**：$\{q_i,p_j\}=\delta_{ij}$ 提升为 $[\hat q_i,\hat p_j]=i\hbar\delta_{ij}$。

## 深化内容

哈密顿力学的几何化是**辛几何**：相空间是辛流形，正则变换是辛同胚，泊松括号是辛结构的代数体现。**刘维尔-阿诺德定理**刻画完全可积系统（作用-角变量）。哈密顿形式是[[statistical-mechanics]]（刘维尔测度、系综）与[[chaos-theory]]（KAM 理论）的共同语言，并经**正则量子化**通向[[quantum-mechanics]]。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。

## 与其他知识的联系

- 紧密相关：[[lagrangian-mechanics]]（勒让德变换来源）、[[poisson-brackets]]、[[canonical-transformations]]、[[hamilton-jacobi-theory]]。
- 量子化：[[quantum-mechanics]] 的正则量子化把泊松括号提升为对易子 $\{\cdot,\cdot\}\to-i[\cdot,\cdot]/\hbar$。
- 统计：[[statistical-mechanics]] 的相空间体积与系综；[[chaos-theory]] 的相空间动力学。
- 几何：[[tensor-calculus]] / [[differential-geometry]] 的辛几何。

## 上位替代

- 单粒子哈密顿力学是 [[quantum-mechanics]] 的经典极限；多粒子/场的量子化走向 [[quantum-field-theory]]。

## 前置知识

- [[lagrangian-mechanics]]、[[calculus]]、[[linear-algebra]]
