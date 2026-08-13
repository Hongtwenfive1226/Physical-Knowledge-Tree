---
id: gauge-field-theory
name: 规范场论
name_en: Gauge Field Theory
domain: quantum-field-theory
aliases: [规范理论, 杨-米尔斯理论]
tags: [量子场论, 规范, 对称性]
keywords: [局域对称, 杨-米尔斯, 联络, 流]
updated: 2026-08-13
links:
  - {id: quantum-field-theory, weight: 5, note: 场论框架}
  - {id: standard-model, weight: 5, note: 规范群 SU(3)×SU(2)×U(1)}
  - {id: group-theory, weight: 5, note: 规范群}
  - {id: electromagnetic-potentials, weight: 4, note: U(1) 规范场的原型}
  - {id: differential-geometry, weight: 4, note: 纤维丛与联络}
  - {id: spontaneous-symmetry-breaking, weight: 4, note: 质量起源}
  - {id: qed, weight: 4, note: 阿贝尔情形}
superseded_by: []
supersedes: []
---
# 规范场论

## 概述

规范场论基于**局域规范对称性**：要求理论在**依赖时空点**的规范群变换下不变，就必须引入规范场（联络）与**规范协变导数**。电磁学（$U(1)$）是阿贝尔原型；**杨-米尔斯理论**（1954）把规范原理推广到非阿贝尔群（$SU(N)$），规范场获得自相互作用。规范场论统一了三种基本相互作用——电磁（$U(1)$）、弱（$SU(2)$）、强（$SU(3)$），是[[standard-model]] 的理论框架，也是现代物理的核心思想。

## 基本概念

- **规范群**：$U(1)$、$SU(2)$、$SU(3)$ 等李群。
- **规范协变导数**：$D_\mu=\partial_\mu-igA_\mu^aT^a$。
- **规范场** $A_\mu^a$：对应规范群的生成元。
- **场强张量**：$F_{\mu\nu}^a=\partial_\mu A_\nu^a-\partial_\nu A_\mu^a+gf^{abc}A_\mu^bA_\nu^c$。
- **纤维丛 / 联络**：规范场的几何解释。

## 核心内容

### 基本定律 / 方程

规范协变导数与场强：

$$ D_\mu=\partial_\mu-igA_\mu^aT^a,\qquad F_{\mu\nu}^a=\partial_\mu A_\nu^a-\partial_\nu A_\mu^a+gf^{abc}A_\mu^bA_\nu^c $$

**杨-米尔斯拉格朗日量**：

$$ \mathcal L=-\frac14F_{\mu\nu}^aF^{a\mu\nu} $$

（$f^{abc}$ 为结构常数，非阿贝尔项 $gf^{abc}A_\mu^bA_\nu^c$ 导致规范场自相互作用。）

### 推导要点

- **规范原理**：要求 $\psi\to e^{ig\Lambda^aT^a}\psi$ 不变，普通导数 $\partial_\mu$ 需替换为协变导数 $D_\mu$，从而引入规范场 $A_\mu^a$，其变换规律 $A_\mu\to A_\mu+\partial_\mu\Lambda+ig[A_\mu,\Lambda]$ 保证 $D_\mu\psi$ 协变。
- **非阿贝尔性**：$f^{abc}\neq0$ 使场强含 $A\wedge A$ 项，规范场自相互作用（三场、四场顶角）。
- **几何解释**：规范场是主丛上的联络，场强是曲率（[[differential-geometry]]）。

### 重要定理与推论

- **规范原理 ⇒ 相互作用**：局域对称性强制相互作用的存在与形式。
- **渐近自由**：$SU(3)$ 规范理论（QCD）的高能耦合变弱（[[renormalization]]）。
- **禁闭**：非阿贝尔规范理论的低能强耦合（夸克禁闭）。
- **希格斯机制**：规范对称性自发破缺赋予规范玻色子质量（[[spontaneous-symmetry-breaking]]）。

## 深化内容

规范场论是 [[standard-model]] 的核心：$SU(3)\times SU(2)\times U(1)$。其数学框架是**纤维丛与特征类**（[[differential-geometry]]、[[topology]]），拓扑量子数（瞬子、磁单极）有深刻物理。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Weinberg《The Quantum Theory of Fields》、Nakahara《Geometry, Topology and Physics》。

## 与其他知识的联系

- 紧密相关：[[standard-model]]（规范群）、[[group-theory]]（表示）、[[differential-geometry]]（纤维丛语言）。
- 原型：[[electromagnetic-potentials]] 与 [[qed]]（阿贝尔规范）。
- 质量起源：[[spontaneous-symmetry-breaking]]（希格斯机制）。

## 前置知识

- [[quantum-field-theory]]、[[group-theory]]、[[differential-geometry]]
