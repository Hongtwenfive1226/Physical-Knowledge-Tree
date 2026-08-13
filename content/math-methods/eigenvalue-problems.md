---
id: eigenvalue-problems
name: 本征值问题
name_en: Eigenvalue Problems
domain: math-methods
aliases: [斯图姆-刘维尔理论, 本征值理论]
tags: [数学, 线性算子, 谱理论]
keywords: [本征值, 本征函数, 正交完备性]
updated: 2026-08-13
links:
  - {id: linear-algebra, weight: 5, note: 有限维本征值问题即矩阵对角化}
  - {id: special-functions, weight: 5, note: 本征函数族即特殊函数}
  - {id: separation-of-variables, weight: 5}
  - {id: mathematical-physics-methods, weight: 5}
  - {id: quantum-mechanics, weight: 4, note: 定态薛定谔方程即本征值问题}
  - {id: vibration-theory, weight: 4, note: 简正模即本征值问题}
  - {id: band-theory, weight: 3, note: 布洛赫本征值问题}
superseded_by: []
supersedes: []
---
# 本征值问题

## 概述

本征值问题研究线性算子 $L\psi=\lambda\psi$ 的解，是数学物理方法的核心理论。**斯图姆-刘维尔理论**保证：在适当边界条件下，本征值是离散实数，本征函数族 $\{\psi_n\}$ 关于权函数**正交完备**，因而任意函数可做**广义傅里叶展开**。有限维情形归结为矩阵对角化（[[linear-algebra]]），无限维情形发展为泛函分析的谱理论。量子力学的定态方程、振动简正模、能带理论都是本征值问题的直接实例。

## 基本概念

- **本征值 / 本征函数**：$L\psi_n=\lambda_n\psi_n$ 的 $\lambda_n$、$\psi_n$。
- **斯图姆-刘维尔方程**：$\frac{d}{dx}\big[p(x)y'\big]+[\lambda w(x)-q(x)]y=0$。
- **权函数** $w(x)$、**正交性**、**完备性**。
- **谱**：本征值的集合。

## 核心内容

### 基本定律 / 方程

本征值问题与广义傅里叶展开：

$$ L\psi_n=\lambda_n\psi_n,\qquad f(x)=\sum_n c_n\psi_n(x),\quad c_n=\frac{\langle\psi_n,f\rangle}{\langle\psi_n,\psi_n\rangle} $$

正交性：

$$ \int_a^b w(x)\psi_n(x)\psi_m(x)dx=0\quad(n\ne m) $$

### 推导要点

- **正交性**：斯图姆-刘维尔算符在权 $w$ 下自伴，不同本征值的本征函数自动正交。
- **完备性**：本征函数族构成 $L^2_w$ 的完备基（可证展开收敛）。
- **瑞利商**：$\lambda=\frac{\int(\psi L\psi)dx}{\int\psi^2dx}$，用于变分近似（瑞利-里兹法）。

### 重要定理与推论

- **斯图姆-刘维尔定理**：本征值离散实数、本征函数正交完备。
- **本征函数展开**：广义傅里叶级数（[[special-functions]] 的应用）。
- **量子能谱**：定态薛定谔方程本征值即能级（[[quantum-mechanics]]）。
- **简正模 / 能带**：[[vibration-theory]]、[[band-theory]] 的本征值问题。

## 深化内容

本征值问题是[[linear-algebra]] 谱理论的无限维推广（自伴算符、希尔伯特空间），连接 [[separation-of-variables]]、[[special-functions]] 与 [[variational-calculus]]（瑞利-里兹法）。量子力学的测量公设（[[operators-and-measurement]]）正是本征值问题。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Courant & Hilbert《Methods of Mathematical Physics》、Sturm-Liouville 理论。

## 与其他知识的联系

- 紧密相关：[[special-functions]]（本征函数库）、[[separation-of-variables]]（构造途径）、[[linear-algebra]]（有限维基础）。
- 物理：[[quantum-mechanics]]（定态方程与能谱）、[[vibration-theory]]（简正模）、[[band-theory]]（能带）。
- 方法：[[mathematical-physics-methods]]、[[variational-calculus]]（瑞利-里兹法）。

## 前置知识

- [[linear-algebra]]、[[differential-equations]]、[[special-functions]]
