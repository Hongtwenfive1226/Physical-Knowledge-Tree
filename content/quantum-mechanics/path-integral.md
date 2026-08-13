---
id: path-integral
name: 路径积分
name_en: Path Integral
domain: quantum-mechanics
aliases: [费曼路径积分, 传播子]
tags: [量子, 方法, 传播子]
keywords: [传播子, 配分函数, 相位因子]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 量子力学的费曼表述}
  - {id: hamilton-jacobi-theory, weight: 4, note: 经典作用量是相位}
  - {id: green-function, weight: 4, note: 传播子是含时格林函数}
  - {id: quantum-field-theory, weight: 5, note: 场论的核心表述}
  - {id: statistical-mechanics, weight: 4, note: 虚时路径积分与配分函数}
  - {id: variational-calculus, weight: 2}
superseded_by: [quantum-field-theory]
supersedes: []
---
# 路径积分

## 概述

费曼路径积分（1948）把量子跃迁振幅表示为**所有可能路径**的贡献之和：传播子 $K=\langle x_f|e^{-iHt/\hbar}|x_i\rangle$ 写作对路径的"泛函积分"，每条路径以 $e^{iS/\hbar}$（$S$ 为经典作用量）加权。经典路径因**相位相长干涉**而主导（$\hbar\to0$ 时回到最小作用量原理），偏离路径贡献量子涨落。路径积分是量子场论与量子统计力学的核心表述，特别适合处理规范场与拓扑效应，并自然连接经典力学与量子力学。

## 基本概念

- **传播子**：$K(x_f,t_f;x_i,t_i)=\langle x_f|e^{-iH(t_f-t_i)/\hbar}|x_i\rangle$。
- **路径测度**：$\mathcal Dx(t)$，对连续路径的积分。
- **经典作用量**：$S[x]=\int L\,dt$。
- **虚时（Wick 旋转）**：$\tau=it$，把振荡相位化为指数衰减因子。

## 核心内容

### 基本定律 / 方程

**费曼路径积分**：

$$ K(x_f,t_f;x_i,t_i)=\int_{x_i}^{x_f}\mathcal Dx(t)\,e^{\frac{i}{\hbar}S[x(t)]} $$

**量子-经典对应**：$\hbar\to0$ 时由稳相近似，主导路径满足 $\delta S=0$（欧拉-拉格朗日方程，见 [[variational-calculus]]）。

**虚时配分函数**：

$$ Z=\int\mathcal Dx\,e^{-S_E[x]/\hbar} $$

### 推导要点

- **路径积分的构造**：把时间分割为 $N$ 段，插入完备性 $1=\int dx_k|x_k\rangle\langle x_k|$，每小段时间用 $\langle x_{k+1}|e^{-iH\Delta t/\hbar}|x_k\rangle\approx e^{iL\Delta t/\hbar}$，取 $N\to\infty$ 即得路径积分。
- **稳相近似**：$S$ 在经典路径处取驻值，附近相位相长；远离路径相位快速振荡相消。
- **虚时变换**：$\tau=it$ 把 $e^{iS/\hbar}$ 变为 $e^{-S_E/\hbar}$，与玻尔兹曼因子 $e^{-\beta H}$ 同构。

### 重要定理与推论

- **经典极限**：$\hbar\to0$ 回到最小作用量原理。
- **自由粒子传播子**：$K\propto e^{im(x_f-x_i)^2/2\hbar t}$（高斯型）。
- **谐振子传播子**：可用路径积分精确求解。
- **虚时与统计的等价**：量子演化与热平衡配分函数的对应。

## 深化内容

路径积分是**量子场论**（[[quantum-field-theory]]）的核心：生成泛函、微扰展开（[[feynman-diagrams]]）、规范场量子化都建立在泛函积分之上。虚时路径积分给出[[statistical-mechanics]] 的配分函数与相变（[[phase-transitions]]）研究框架。拓扑效应（瞬子、AB 效应、贝里相位）在路径积分中自然呈现。延伸阅读可参考 Feynman & Hibbs《Quantum Mechanics and Path Integrals》、Peskin & Schroeder《An Introduction to QFT》、Schulman《Techniques and Applications of Path Integration》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[green-function]]（传播子）、[[hamilton-jacobi-theory]]（经典作用量）。
- 场论：[[quantum-field-theory]] 的生成泛函、[[feynman-diagrams]]。
- 统计：虚时路径积分给出 [[statistical-mechanics]] 配分函数。

## 上位替代

- 在多粒子/场的层面由 [[quantum-field-theory]] 的泛函积分取代。

## 前置知识

- [[quantum-mechanics]]、[[variational-calculus]]、[[hamilton-jacobi-theory]]
