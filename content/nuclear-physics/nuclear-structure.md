---
id: nuclear-structure
name: 原子核结构
name_en: Nuclear Structure
domain: nuclear-physics
aliases: [核结构]
tags: [核物理, 原子核, 结构]
keywords: [壳结构, 幻数, 形变, 激发态]
updated: 2026-08-13
links:
  - {id: nuclear-physics, weight: 5, note: 学科核心}
  - {id: nuclear-models, weight: 5, note: 结构模型}
  - {id: quantum-mechanics, weight: 4, note: 量子多体问题}
  - {id: identical-particles, weight: 3, note: 核子是全同费米子}
  - {id: spin, weight: 3, note: 核自旋}
  - {id: nuclear-decay, weight: 3, note: 衰变反映结构}
superseded_by: []
supersedes: []
---
# 原子核结构

## 概述

原子核是一个**有界量子多体系统**（数十到数百个全同费米子核子），其结构由核力（短程、饱和）决定。核结构呈现三类现象：**壳结构**（幻数处特别稳定）、**集体运动**（转动、振动）、**核子配对**（对关联）。核的基态性质（自旋、宇称、磁矩、电四极矩）与激发谱（转动带、振动谱）是核结构研究的主要内容。

## 基本概念

- **幻数**：2, 8, 20, 28, 50, 82, 126（壳层闭合）。
- **核自旋 / 宇称**：基态角动量与空间反演。
- **形变**：核偏离球形（四极形变）。
- **激发态 / 转动带**：集体激发的能谱。
- **对关联**：时间反演配对核子。

## 核心内容

### 基本定律 / 方程

核半径与电荷分布：

$$ R=r_0A^{1/3},\qquad r_0\approx1.2\,\mathrm{fm} $$

壳模型单粒子能级（自旋-轨道耦合）：

$$ E_{nlj},\qquad \hat H_{\mathrm{单粒子}}=\frac{\hat p^2}{2m}+V(r)+\hat{\vec l}\cdot\hat{\vec s}\,f(r) $$

### 推导要点

- **壳结构**：核子在平均场中占据单粒子能级，自旋-轨道耦合项 $\vec l\cdot\vec s$ 给出正确的幻数序列（[[nuclear-models]] 的壳模型）。
- **集体转动**：形变核的转动能 $E_J=\frac{\hbar^2}{2\mathcal I}J(J+1)$，转动带。
- **对关联**：核子配对降低能量（超导 BCS 类比）。

### 重要定理与推论

- **幻数**：壳层闭合处结合能、稳定性异常（类似原子电子壳层）。
- **核形状**：大部分核近球形，某些核显著形变（椭球）。
- **集体谱**：振动谱（等距）、转动谱（$J(J+1)$）。
- **对关联**：偶数核更稳定（奇偶效应）。

## 深化内容

核结构理论用 [[nuclear-models]]（壳模型、集体模型）描述；对关联类比 [[superconductivity]]（BCS）。核结构通过衰变（[[nuclear-decay]]）、散射、光谱实验研究。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Bohr & Mottelson《Nuclear Structure》、Casten《Nuclear Structure from a Simple Perspective》。

## 与其他知识的联系

- 紧密相关：[[nuclear-models]]（描述方法）、[[nuclear-physics]]。
- 理论基础：[[quantum-mechanics]]（多体）、[[identical-particles]]/[[spin]]（全同费米子与自旋）。
- 关联：[[nuclear-decay]]（衰变反映结构）。

## 前置知识

- [[quantum-mechanics]]、[[angular-momentum-qm]]、[[nuclear-physics]]
