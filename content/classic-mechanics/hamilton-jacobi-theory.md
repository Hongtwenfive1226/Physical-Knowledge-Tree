---
id: hamilton-jacobi-theory
name: 哈密顿-雅可比理论
name_en: Hamilton-Jacobi Theory
domain: classic-mechanics
aliases: [HJ理论]
tags: [力学, 方法, 作用量]
keywords: [哈密顿-雅可比方程, 作用-角变量, 主函数]
updated: 2026-08-13
links:
  - {id: hamiltonian-mechanics, weight: 5, note: 由正则变换推导出}
  - {id: canonical-transformations, weight: 5, note: 找使新哈密顿量为零的变换}
  - {id: path-integral, weight: 4, note: 经典作用量是路径积分的相位}
  - {id: quantum-mechanics, weight: 3, note: 半经典极限}
  - {id: central-force-motion, weight: 3, note: 分离变量解开普勒问题}
  - {id: variational-calculus, weight: 3}
superseded_by: []
supersedes: []
---
# 哈密顿-雅可比理论

## 概述

哈密顿-雅可比（HJ）理论寻找一个正则变换，使新哈密顿量恒为零，从而把动力学化为"平凡"问题。这归结为关于**主函数** $S$ 的一阶偏微分方程——哈密顿-雅可比方程。主函数 $S$ 就是经典作用量，因此 HJ 理论是经典力学与量子力学（[[path-integral]] 的相位、半经典近似）之间的直接桥梁。对可分离系统，HJ 方程可变量分离，给出**作用-角变量**，是求解可积系统与半经典量子化（玻尔-索末菲）的标准框架。

## 基本概念

- **主函数（哈密顿特征函数）** $S(q,P,t)$：使 $K=0$ 的正则变换生成函数。
- **哈密顿-雅可比方程**：$H(q,\partial S/\partial q,t)+\partial S/\partial t=0$。
- **作用变量** $J_i=\frac1{2\pi}\oint p_i\,dq_i$；**角变量** $\theta_i$。
- **可分离性**：$S$ 可写成各坐标函数之和。

## 核心内容

### 基本定律 / 方程

**哈密顿-雅可比方程**：

$$ H\Big(q_i,\frac{\partial S}{\partial q_i},t\Big)+\frac{\partial S}{\partial t}=0 $$

分离变量（$H$ 不显含 $t$）：

$$ S(q,t)=W(q)-Et,\qquad H\Big(q_i,\frac{\partial W}{\partial q_i}\Big)=E $$

**作用-角变量**（周期运动）：

$$ J_i=\frac{1}{2\pi}\oint p_i\,dq_i,\qquad \omega_i=\frac{\partial H}{\partial J_i} $$

### 推导要点

- **HJ 方程的来源**：取第二类生成函数 $F_2=S(q,P,t)$ 并要求 $K=0$，由 $K=H+\partial S/\partial t=0$、$p_i=\partial S/\partial q_i$ 即得 HJ 方程。
- **主函数即作用量**：沿真实路径 $dS=\sum p_idq_i-Hdt=Ldt$，故 $S=\int Ldt$。
- **分离变量**：对可分离系统 $W=\sum W_i(q_i)$，HJ 方程化为若干常微分方程，分离常数即守恒量。

### 重要定理与推论

- **运动方程平凡化**：在 $K=0$ 的坐标中，$Q,P$ 均为常数，动力学退化。
- **玻尔-索末菲量子化**：$J=\oint p\,dq=nh$（半经典条件），是旧量子论与 WKB 的雏形。
- **几何光学类比**：$S$ 是波的相位，HJ 方程是波动方程在短波极限（$|\nabla S|^2=n^2$，程函方程）的近似。

## 深化内容

HJ 理论是量子力学的"半经典门户"：主函数 $S$ 作为**路径积分**的相位 $e^{iS/\hbar}$（[[path-integral]]），在 $\hbar\to0$ 极限下回到经典。WKB 近似直接建立于 $S/\hbar$ 的展开。作用-角变量是[[chaos-theory]] 中可积性（KAM 理论）的语言。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。

## 与其他知识的联系

- 紧密相关：[[canonical-transformations]]、[[hamiltonian-mechanics]]、[[central-force-motion]]（分离变量）。
- 量子联系：[[path-integral]]（相位 $e^{iS/\hbar}$）、[[quantum-mechanics]]（半经典极限）。

## 前置知识

- [[variational-calculus]]、[[partial-differential-equations]]、[[hamiltonian-mechanics]]
