---
id: poisson-brackets
name: 泊松括号
name_en: Poisson Brackets
domain: classic-mechanics
aliases: [泊松括号代数]
tags: [力学, 代数结构, 对易子]
keywords: [对易关系, 李代数, 辛结构, 正则量子化]
updated: 2026-08-13
links:
  - {id: hamiltonian-mechanics, weight: 5, note: 泊松括号是哈密顿力学的代数语言}
  - {id: canonical-transformations, weight: 5, note: 正则不变量的判据}
  - {id: quantum-mechanics, weight: 5, note: 正则量子化把泊松括号提升为对易子}
  - {id: group-theory, weight: 3, note: 泊松括号构成李代数}
  - {id: angular-momentum-qm, weight: 3, note: 角动量对易子}
  - {id: hamilton-jacobi-theory, weight: 2}
superseded_by: [quantum-mechanics]
supersedes: []
---
# 泊松括号

## 概述

泊松括号是定义在相空间函数上的**二元代数运算**，是哈密顿力学的代数语言：动力学方程、守恒量判据、正则变换判据都用它统一表述。它赋予相空间函数一个**李代数**结构，使其成为辛几何的代数体现。泊松括号最重要的意义在于它提供了**正则量子化**的桥梁——把经典泊松括号 $\{f,g\}$ 提升为量子对易子 $[f,g]/i\hbar$，从而由经典力学直接过渡到量子力学。

## 基本概念

- **泊松括号**：

$$ \{f,g\}=\sum_i\Big(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i}-\frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\Big) $$

- **基本括号**：$\{q_i,p_j\}=\delta_{ij}$，$\{q_i,q_j\}=\{p_i,p_j\}=0$。
- **运动积分**：与 $H$ 泊松括号为零（且不显含时间）的函数。

## 核心内容

### 基本定律 / 方程

运动方程：

$$ \frac{df}{dt}=\{f,H\}+\frac{\partial f}{\partial t} $$

**性质**（使相空间函数构成李代数）：

- 反对称：$\{f,g\}=-\{g,f\}$
- 双线性：$\{af+bg,h\}=a\{f,h\}+b\{g,h\}$
- 莱布尼茨律：$\{fg,h\}=f\{g,h\}+\{f,h\}g$
- 雅可比恒等式：$\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}=0$

### 推导要点

- **运动方程**：把 $\dot f=\sum(\frac{\partial f}{\partial q_i}\dot q_i+\frac{\partial f}{\partial p_i}\dot p_i)$ 代入哈密顿正则方程，即得 $\{f,H\}+\frac{\partial f}{\partial t}$。
- **雅可比恒等式**：直接对定义展开，交叉项相互抵消（等价于相空间辛形式 $d\omega=0$）。
- **守恒判据**：$f$ 不显含时间且 $\{f,H\}=0$，则 $f$ 是运动积分。

### 重要定理与推论

- **泊松定理**：两个运动积分的泊松括号仍是运动积分（雅可比恒等式的推论）。
- **角动量代数**：$\{L_i,L_j\}=\epsilon_{ijk}L_k$，角动量分量构成 $SO(3)$ 李代数。
- **正则量子化**：

$$ \{f,g\}\;\longrightarrow\;\frac{1}{i\hbar}[\hat f,\hat g] $$

基本括号对应 $[\hat q_i,\hat p_j]=i\hbar\delta_{ij}$（海森堡对易关系）。

## 深化内容

泊松括号的几何本质是**辛流形**上的泊松结构；其退化情形（含约束系统）需引入**狄拉克括号**。正则量子化中泊松括号→对易子（或对反对称费米子情形→反对易子）是量子力学的核心对应原理之一（狄拉克量子化条件）。泊松括号也是无穷小生成元与对称性（诺特定理）的载体。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Dirac《Lectures on Quantum Mechanics》。

## 与其他知识的联系

- 紧密相关：[[hamiltonian-mechanics]]（运动方程）、[[canonical-transformations]]（正则不变性）、[[group-theory]]（李代数结构）。
- 量子化：[[quantum-mechanics]]（正则量子化，见上）。
- 角动量：[[angular-momentum-qm]]。

## 上位替代

- 量子理论中经典泊松括号被量子对易子取代（正则量子化），走向 [[quantum-mechanics]]。

## 前置知识

- [[hamiltonian-mechanics]]、[[calculus]]
