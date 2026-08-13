---
id: qm-variational-method
name: 量子变分法
name_en: Variational Method (Quantum)
domain: quantum-mechanics
aliases: [变分近似, 瑞利-里兹法]
tags: [量子, 近似方法, 变分]
keywords: [试探波函数, 基态能量, 期望值]
updated: 2026-08-13
links:
  - {id: variational-calculus, weight: 4, note: 变分原理}
  - {id: quantum-mechanics, weight: 5, note: 求基态的近似方法}
  - {id: perturbation-theory, weight: 4, note: 另一种近似方法}
  - {id: hydrogen-atom, weight: 2}
  - {id: schrodinger-equation, weight: 3}
superseded_by: []
supersedes: []
---
# 量子变分法

## 概述

变分法是求量子系统**基态**（及低激发态）近似解的重要方法，基于一个简单的能量不等式：对任意归一化试探波函数，其能量期望值 $\langle\psi|\hat H|\psi\rangle$ 恒**大于等于**基态能量 $E_0$。因此可以构造含变分参数的试探波函数，通过**极小化**能量期望值得到 $E_0$ 的上界与近似波函数。变分法特别适用于**微扰法失效的强关联系统**（如原子、分子、多体问题），是现代电子结构计算（哈特里-福克、密度泛函）的基石。

## 基本概念

- **试探波函数**：$|\psi(\lambda_1,\lambda_2,\dots)\rangle$，含可调参数。
- **能量泛函**：$E(\lambda)=\langle\psi(\lambda)|\hat H|\psi(\lambda)\rangle$。
- **变分原理**：$E_0\le E(\lambda)$，等号当且仅当 $\psi$ 为精确基态。
- **瑞利-里兹法**：在有限基 $\{|\phi_i\rangle\}$ 上展开，化为矩阵本征值问题。

## 核心内容

### 基本定律 / 方程

**变分原理**：

$$ E_0\le\frac{\langle\psi|\hat H|\psi\rangle}{\langle\psi|\psi\rangle} $$

**极小化条件**：

$$ \frac{\partial E(\lambda)}{\partial\lambda_i}=0 $$

**瑞利-里兹法**（有限基展开 $\psi=\sum_i c_i\phi_i$）：

$$ \sum_j H_{ij}c_j=E\,S_{ij}c_j,\qquad H_{ij}=\langle\phi_i|\hat H|\phi_j\rangle,\ S_{ij}=\langle\phi_i|\phi_j\rangle $$

### 推导要点

- **变分原理**：把 $\psi$ 在 $\hat H$ 的本征基展开 $\psi=\sum_n c_n|n\rangle$，则 $\langle\hat H\rangle=\sum_n|c_n|^2E_n\ge E_0\sum_n|c_n|^2=E_0$。
- **极小化**：对能量泛函求关于变分参数的偏导并令其为零。
- **瑞利-里兹**：把能量泛函在有限基上的极值问题化为广义本征值问题 $Hc=ESc$。

### 重要定理与推论

- **变分上界**：变分能量恒为基态能量的上界，参数越多越接近精确值。
- **与微扰互补**：微扰适合小耦合，变分适合强关联（如氦原子基态）。
- **激发态推广**：在正交于低能态的约束下变分，可近似激发态。
- **海利-费曼定理**：$\partial E/\partial\lambda=\langle\partial H/\partial\lambda\rangle$（能量对参数求导）。

## 深化内容

变分法是**多体理论**的核心：哈特里-福克近似（Slater 行列式试探）、密度泛函理论（以电子密度为变量，Hohenberg-Kohn + Kohn-Sham）是量子化学与 [[condensed-matter-physics]] 的标准工具。**量子蒙特卡洛**把变分与随机抽样结合。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、Szabo & Ostlund《Modern Quantum Chemistry》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[variational-calculus]]（数学原理）。
- 互补：[[perturbation-theory]]（微扰适用小耦合，变分适用强耦合）。
- 应用：[[hydrogen-atom]]（精确解作检验）、[[condensed-matter-physics]]（哈特里-福克/密度泛函）。

## 前置知识

- [[quantum-mechanics]]、[[variational-calculus]]、[[linear-algebra]]
