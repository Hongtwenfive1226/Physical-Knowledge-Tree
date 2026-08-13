---
id: atomic-physics
name: 原子物理
name_en: Atomic Physics
domain: atomic-molecular-optics
aliases: [原子结构]
tags: [原子, 能级, 光谱]
keywords: [精细结构, 超精细结构, 能级, 电子组态]
updated: 2026-08-13
links:
  - {id: atomic-molecular-optics, weight: 5, note: AMO 基础}
  - {id: quantum-mechanics, weight: 5, note: 理论基础}
  - {id: hydrogen-atom, weight: 4, note: 精确可解原型}
  - {id: spin, weight: 3, note: 精细/超精细结构}
  - {id: qed, weight: 2, note: 兰姆位移}
  - {id: angular-momentum-qm, weight: 3}
  - {id: ultracold-atoms, weight: 3, note: 超冷原子属原子物理应用}
superseded_by: []
supersedes: []
---
# 原子物理

## 概述

原子物理研究原子的**电子结构、能级与光谱**。电子组态由泡利原理与洪特规则决定，能级按能量尺度分层：粗结构（主量子数）、**精细结构**（自旋-轨道耦合的相对论效应）、**超精细结构**（电子与核自旋耦合）。氢原子（[[hydrogen-atom]]）是精确可解原型，其兰姆位移等 QED 修正（[[qed]]）精确计算。原子能级与跃迁是光谱学、激光物理、原子钟与精密测量的基础。

## 基本概念

- **电子组态**：电子占据的轨道。
- **精细结构**：自旋-轨道耦合（$\propto\alpha^2$）。
- **超精细结构**：电子-核自旋耦合。
- **塞曼 / 斯塔克效应**：外磁场 / 电场劈裂。
- **选择定则**：跃迁的角动量/宇称限制。

## 核心内容

### 基本定律 / 方程

类氢原子能级：

$$ E_n=-\frac{13.6\,\mathrm{eV}}{n^2} $$

精细结构（自旋-轨道 + 相对论）：

$$ E_{FS}=\frac{(Z\alpha)^2}{n^3}\Big(\frac{3}{4n}-\frac{1}{j+1/2}\Big)\frac{13.6\,\mathrm{eV}}{n^2} $$

### 推导要点

- **电子组态**：多电子原子用中心场近似，电子占据壳层（泡利原理、洪特规则）。
- **自旋-轨道耦合**：$\hat H_{SO}=\xi\vec L\cdot\vec S$，$j=l\pm1/2$ 劈裂（[[angular-momentum-qm]]、[[spin]]）。
- **超精细结构**：核自旋 $I$ 与电子角动量耦合，$F=I+J$（21 cm 线）。

### 重要定理与推论

- **精细结构**：相对论 + 自旋-轨道（[[perturbation-theory]]）。
- **超精细结构**：核磁矩与电子耦合（原子钟的基础）。
- **塞曼效应**：外磁场劈裂能级（正常/反常塞曼）。
- **兰姆位移**：QED 辐射修正（[[qed]]）。

## 深化内容

原子物理是 [[quantum-mechanics]] 的精确检验（[[hydrogen-atom]]、[[qed]]），并支撑原子钟、[[laser-cooling]]、[[quantum-information]]。延伸阅读可参考 Foot《Atomic Physics》、Bransden & Joachain《Physics of Atoms and Molecules》、Griffiths《量子力学概论》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[hydrogen-atom]]、[[angular-momentum-qm]]/[[spin]]。
- 高精度修正：[[qed]]（兰姆位移、反常磁矩）。
- 应用：原子钟、激光冷却、光谱分析。

## 前置知识

- [[quantum-mechanics]]、[[hydrogen-atom]]、[[angular-momentum-qm]]
