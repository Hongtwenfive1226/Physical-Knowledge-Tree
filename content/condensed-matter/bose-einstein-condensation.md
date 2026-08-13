---
id: bose-einstein-condensation
name: 玻色-爱因斯坦凝聚
name_en: Bose-Einstein Condensation
domain: condensed-matter
aliases: [BEC, 玻色凝聚]
tags: [凝聚态, 玻色子, 低温]
keywords: [临界温度, 凝聚, 超流体]
updated: 2026-08-13
links:
  - {id: quantum-statistics, weight: 5, note: 玻色分布}
  - {id: superconductivity, weight: 3, note: 库珀对凝聚类似}
  - {id: condensed-matter-physics, weight: 4, note: 宏观量子现象}
  - {id: quantum-mechanics, weight: 3}
  - {id: phase-transitions, weight: 3}
superseded_by: []
supersedes: []
---
# 玻色-爱因斯坦凝聚

## 概述

玻色-爱因斯坦凝聚（BEC）是大量玻色子在低温下**宏观占据同一量子基态**的现象，是量子统计（[[quantum-statistics]]）最深刻的宏观量子效应。爱因斯坦 1925 年预言，1995 年在碱金属原子气体中首次实现（2001 诺奖）。BEC 展现宏观量子相干（干涉、涡旋），是超流体 $^4$He 与超导（库珀对凝聚）的物理原型，也是冷原子量子模拟与精密测量的平台。

## 基本概念

- **玻色子**：整数自旋，可占据同一态。
- **临界温度** $T_c$：凝聚发生的温度。
- **凝聚体**：宏观占据基态的粒子集合。
- **序参量**：宏观波函数 $\psi=\sqrt{n}e^{i\theta}$。
- **超流体**：无黏流动（涡旋量子化）。

## 核心内容

### 基本定律 / 方程

理想玻色气体的临界温度：

$$ T_c=\frac{2\pi\hbar^2}{mk_B}\Big(\frac{n}{\zeta(3/2)}\Big)^{2/3},\qquad \zeta(3/2)\approx2.612 $$

凝聚比例：

$$ \frac{N_0}{N}=1-\Big(\frac{T}{T_c}\Big)^{3/2}\quad(T<T_c) $$

### 推导要点

- **临界条件**：总粒子数 $N=\sum_{\vec k}1/(e^{\beta\varepsilon_{\vec k}}-1)$，当 $\mu\to0$ 时激发态能容纳的粒子数有上限 $N_{\mathrm{ex}}=V\zeta(3/2)(mk_BT/2\pi\hbar^2)^{3/2}$；低于 $T_c$ 时多余粒子凝聚到基态。
- **宏观占据**：$T<T_c$ 时基态占据数 $N_0\sim O(N)$（宏观量级）。
- **序参量**：凝聚体的宏观波函数（相位相干）。

### 重要定理与推论

- **玻色凝聚**：$T<T_c$ 时宏观占据基态。
- **宏观量子相干**：凝聚体的相位相干（干涉、原子激光）。
- **涡旋量子化**：超流的环流 $\oint\vec v\cdot d\vec l=(h/m)n$。
- **与超导/超流的关系**：库珀对凝聚（[[superconductivity]]）、$^4$He 超流是 BEC 的类似物。

## 深化内容

BEC 是 [[condensed-matter-physics]]、[[quantum-statistics]] 的宏观量子现象；冷原子 BEC 用于**量子模拟**（光晶格中的玻色-哈伯德模型）、原子干涉仪与 [[quantum-computing]]（冷原子平台）。延伸阅读可参考 Pethick & Smith《Bose-Einstein Condensation in Dilute Gases》、Pathria《Statistical Mechanics》、Pitaevskii & Stringari《Bose-Einstein Condensation》。

## 与其他知识的联系

- 紧密相关：[[quantum-statistics]]（理论）、[[condensed-matter-physics]]、[[superconductivity]]（凝聚类比）。
- 应用：量子模拟、原子干涉仪、[[quantum-computing]]（冷原子平台）。

## 前置知识

- [[quantum-statistics]]、[[statistical-mechanics]]、[[quantum-mechanics]]
