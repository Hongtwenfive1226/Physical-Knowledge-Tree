---
id: berry-phase
name: 贝里相位
name_en: Berry Phase
domain: condensed-matter
aliases: [几何相位, 贝里曲率]
tags: [量子, 几何相位, 拓扑]
keywords: [绝热演化, 贝里曲率, 陈数]
updated: 2026-08-13
links:
  - {id: aharonov-bohm-effect, weight: 4, note: AB效应是贝里相位的特例}
  - {id: topological-materials, weight: 5, note: 拓扑不变量来自贝里相位}
  - {id: condensed-matter-physics, weight: 4, note: 贝里相位是凝聚态物理的核心概念}
  - {id: quantum-mechanics, weight: 4, note: 绝热定理}
  - {id: gauge-field-theory, weight: 2}
  - {id: quantum-tunneling, weight: 2}
  - {id: superconductivity, weight: 2}
superseded_by: []
supersedes: []
---
# 贝里相位

## 概述

贝里相位（1984）指出：量子系统在参数空间中沿闭合路径**绝热演化**时，波函数除动力学相位外还获得一个**几何相位**，它只依赖路径的几何（不变换规范、不依赖演化快慢）。贝里相位对应参数空间上的**贝里联络/曲率**（一种规范场），其环路积分给出**拓扑不变量**（如陈数）。贝里相位统一了阿哈罗诺夫-玻姆效应、量子霍尔效应、拓扑绝缘体与分子几何相位，是现代量子理论的核心概念。

## 基本概念

- **贝里联络**：$\vec A_n=i\langle n|\nabla_{\vec R}n\rangle$。
- **贝里曲率**：$\Omega_n=\nabla_{\vec R}\times\vec A_n$。
- **贝里相位**：$\gamma_n=\oint\vec A_n\cdot d\vec R$。
- **陈数**：贝里曲率的布里渊区积分。
- **绝热定理**：慢变参数下系统保持在瞬时本征态。

## 核心内容

### 基本定律 / 方程

**贝里相位**：

$$ \gamma_n=i\oint\langle n|\nabla_{\vec R}n\rangle\cdot d\vec R=\int\Omega_n\,d\vec S $$

贝里曲率与陈数：

$$ \Omega_n=\nabla_{\vec R}\times\big(i\langle n|\nabla_{\vec R}n\rangle\big),\qquad C=\frac1{2\pi}\sum_n\int_{\mathrm{BZ}}\Omega_n d^2k $$

### 推导要点

- **绝热定理**：参数 $\vec R(t)$ 缓慢变化，系统保持在瞬时本征态 $|n(\vec R)\rangle$，波函数为 $|\psi(t)\rangle=e^{-i\int E_ndt}e^{i\gamma_n}|n\rangle$。
- **几何相位**：把 $i\langle n|\partial_t n\rangle$ 的环路积分改写为参数空间环路积分，得 $\gamma_n$（与时间参数化无关）。
- **规范结构**：$|n\rangle\to e^{i\chi}|n\rangle$ 时 $\vec A_n\to\vec A_n-\nabla\chi$（规范变换），$\gamma_n$ 规范不变（模 $2\pi$）。

### 重要定理与推论

- **贝里相位是几何量**：只依赖路径，与演化快慢无关。
- **AB 效应是贝里相位的特例**：矢势环路积分（[[aharonov-bohm-effect]]）。
- **陈数拓扑不变量**：整数量子霍尔电导 $\sigma_{xy}=Ce^2/h$（[[topological-materials]]）。
- **绝热近似的修正**：贝里相位是绝热展开的一阶（动力学相 + 几何相）。

## 深化内容

贝里相位是 [[topological-materials]]（陈数、$Z_2$ 指标）、[[gauge-field-theory]]（联络与曲率的几何）与 [[quantum-computing]]（几何相位量子门）的共同基础。分子系统中的圆锥交叉（几何相位）也是其应用。延伸阅读可参考 Berry 原始论文、Sakurai《现代量子力学》、Xiao, Chang & Niu《Berry phase effects on electronic properties》。

## 与其他知识的联系

- 紧密相关：[[topological-materials]]（量子霍尔、拓扑绝缘体）、[[aharonov-bohm-effect]]（原型）。
- 基础：[[quantum-mechanics]]（绝热演化）、[[differential-geometry]]（联络与曲率）。
- 应用：[[quantum-computing]]（几何相位量子计算）、分子光谱（几何相位）。

## 前置知识

- [[quantum-mechanics]]、[[aharonov-bohm-effect]]、[[topological-materials]]
