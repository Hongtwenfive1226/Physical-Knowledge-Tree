---
id: superconductivity
name: 超导电性
name_en: Superconductivity
domain: condensed-matter
aliases: [超导, BCS理论]
tags: [凝聚态, 超导, 量子相]
keywords: [库珀对, BCS理论, 迈斯纳效应, 约瑟夫森效应]
updated: 2026-08-13
links:
  - {id: condensed-matter-physics, weight: 5, note: 凝聚态重要量子相}
  - {id: phonons, weight: 4, note: 声子媒介配对}
  - {id: quantum-statistics, weight: 3, note: 玻色凝聚}
  - {id: spontaneous-symmetry-breaking, weight: 4, note: 规范对称性破缺}
  - {id: quantum-tunneling, weight: 3, note: 约瑟夫森效应}
  - {id: topological-materials, weight: 3, note: 拓扑超导}
  - {id: phase-transitions, weight: 3}
superseded_by: []
supersedes: []
---
# 超导电性

## 概述

超导是某些材料在临界温度 $T_c$ 以下呈现**零电阻**与**完全抗磁性**（迈斯纳效应）的宏观量子现象。BCS 理论（1957）给出微观机制：声子媒介的电子-电子吸引使电子配对成**库珀对**，库珀对作为玻色子凝聚，打开超导能隙。超导可用 $U(1)$ 规范对称性自发破缺描述（与希格斯机制同构）。**约瑟夫森效应**（超导结隧穿）是超导量子比特、SQUID 与精密测量的基础。

## 基本概念

- **零电阻 / 迈斯纳效应**：超导的两个基本特征。
- **库珀对**：动量和自旋相反的电子对。
- **超导能隙** $\Delta$：激发的能量阈值。
- **临界温度 / 临界磁场**：$T_c$、$H_c$。
- **约瑟夫森效应**：超导结的隧穿电流。

## 核心内容

### 基本定律 / 方程

**BCS 能隙方程**（$T=0$）：

$$ \Delta\approx2\hbar\omega_De^{-1/N(0)V} $$

**临界温度**：

$$ k_BT_c\approx1.13\hbar\omega_De^{-1/N(0)V} $$

**伦敦方程**（迈斯纳效应）：

$$ \nabla^2\vec B=\frac{\vec B}{\lambda_L^2},\qquad \lambda_L=\sqrt{\frac{m}{\mu_0n_se^2}} $$

### 推导要点

- **BCS 配对**：声子媒介的吸引力使费米面附近电子配对，变分波函数（BCS 基态）给出能隙方程。
- **迈斯纳效应**：伦敦方程 $\vec J=-\frac{n_se^2}{m}\vec A$ 结合安培定律得 $\nabla^2\vec B=\vec B/\lambda_L^2$，磁场指数衰减（完全抗磁）。
- **约瑟夫森效应**：超导结两侧相位差驱动隧穿电流 $I=I_c\sin\delta$（[[quantum-tunneling]]）。

### 重要定理与推论

- **迈斯纳效应**：超导体完全排斥磁场（完全抗磁性）。
- **磁通量子化**：超导环中磁通为 $h/2e$ 的整数倍（库珀对电荷 $2e$）。
- **约瑟夫森效应**：直流（$I_c\sin\delta$）与交流（$\omega=2eV/\hbar$）约瑟夫森效应。
- **BCS 普适比**：$2\Delta(0)/k_BT_c\approx3.53$（弱耦合）。

## 深化内容

超导是 [[spontaneous-symmetry-breaking]]（安德森-希格斯机制）的凝聚态实现。**高温超导**（铜氧化物，$T_c>77$ K）机制仍是前沿；**拓扑超导**（[[topological-materials]]）预言马约拉纳费米子。超导量子比特是 [[quantum-computing]] 的主流平台。延伸阅读可参考 Tinkham《Introduction to Superconductivity》、de Gennes《Superconductivity of Metals and Alloys》、Annett《Superconductivity, Superfluids and Condensates》。

## 与其他知识的联系

- 紧密相关：[[condensed-matter-physics]]、[[phonons]]（BCS 机制）、[[spontaneous-symmetry-breaking]]（理论框架）。
- 相关：[[bose-einstein-condensation]]（凝聚概念）、[[topological-materials]]（拓扑超导）、[[quantum-computing]]（超导量子比特）。

## 前置知识

- [[condensed-matter-physics]]、[[quantum-statistics]]、[[second-quantization]]
