---
id: quantum-statistics
name: 量子统计
name_en: Quantum Statistics
domain: statistical-mechanics
aliases: [费米-狄拉克, 玻色-爱因斯坦]
tags: [统计物理, 量子, 全同粒子]
keywords: [费米分布, 玻色分布, 化学势, 简并]
updated: 2026-08-13
links:
  - {id: identical-particles, weight: 5, note: 全同性是量子统计的前提}
  - {id: statistical-mechanics, weight: 5, note: 量子统计力学}
  - {id: blackbody-radiation, weight: 4, note: 光子气体是玻色系统}
  - {id: superconductivity, weight: 3, note: 玻色-爱因斯坦凝聚}
  - {id: condensed-matter-physics, weight: 3, note: 电子气体}
  - {id: spin, weight: 4, note: 自旋-统计}
  - {id: bose-einstein-condensation, weight: 4}
superseded_by: []
supersedes: []
---
# 量子统计

## 概述

量子统计把统计力学推广到**全同量子粒子**，由全同性（[[identical-particles]]）导致两类截然不同的统计：费米子服从**费米-狄拉克分布**、玻色子服从**玻色-爱因斯坦分布**。费米子受泡利原理限制，$T=0$ 时填充到费米能（金属电子气、白矮星简并压）；玻色子在低温下可大量占据基态形成**玻色-爱因斯坦凝聚**。黑体辐射（光子）、金属电子气、声子、超导都是量子统计的直接应用。

## 基本概念

- **费米子 / 玻色子**：半整数 / 整数自旋（[[spin]]）。
- **占据数** $\bar n_i$：能级 $\varepsilon_i$ 的平均粒子数。
- **化学势** $\mu$：调节粒子数守恒的拉格朗日乘子。
- **简并**：量子效应显著（$\lambda_T^3n\gtrsim1$）的低温/高密度区。

## 核心内容

### 基本定律 / 方程

费米-狄拉克（$+$）与玻色-爱因斯坦（$-$）分布：

$$ \bar n_i=\frac{1}{e^{\beta(\varepsilon_i-\mu)}\pm1} $$

经典极限（$e^{\beta(\varepsilon-\mu)}\gg1$）：两者都趋于玻尔兹曼分布 $\bar n_i\approx e^{-\beta(\varepsilon_i-\mu)}$。

**费米能**（$T=0$）：$\varepsilon_F=\mu(T=0)=\frac{\hbar^2}{2m}(3\pi^2n)^{2/3}$。

### 推导要点

- **巨正则推导**：对全同粒子，巨配分函数 $\Xi=\prod_i\sum_{n_i}e^{-\beta(\varepsilon_i-\mu)n_i}$；费米子 $n_i=0,1$、玻色子 $n_i=0,1,2,\dots$，求和分别得 $\Xi=\prod_i(1+e^{-\beta(\varepsilon_i-\mu)})$ 与 $\prod_i(1-e^{-\beta(\varepsilon_i-\mu)})^{-1}$。
- **占据数**：$\bar n_i=-\frac1\beta\frac{\partial\ln\Xi}{\partial\varepsilon_i}$ 即得两种分布。
- **费米能**：$T=0$ 时费米子占据 $\varepsilon<\varepsilon_F$ 的全部态，粒子数 $N=\int_0^{\varepsilon_F}g(\varepsilon)d\varepsilon$ 反解出 $\varepsilon_F$。

### 重要定理与推论

- **泡利不相容**：费米子 $\bar n_i\le1$。
- **玻色凝聚**：玻色子低温下 $\mu\to0$，基态占据数宏观（[[bose-einstein-condensation]]）。
- **经典极限**：高温低密度下量子统计回到玻尔兹曼统计。
- **简并压**：费米气体的压强在 $T=0$ 仍非零（白矮星支撑）。

## 深化内容

量子统计的应用遍及：**金属电子气**（[[condensed-matter-physics]] 的费米液体）、**黑体辐射**（[[blackbody-radiation]]，光子玻色气体）、**声子**（[[phonons]]）、**超导/超流**（[[superconductivity]]、[[bose-einstein-condensation]]）。白矮星与中子星的简并压（[[compact-objects]]）是量子统计的天体应用。延伸阅读可参考 Pathria《Statistical Mechanics》、Kittel《Thermal Physics》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[identical-particles]]/[[spin]]（自旋-统计）、[[statistical-mechanics]]（框架）。
- 应用：[[blackbody-radiation]]（光子）、[[condensed-matter-physics]]（电子气、费米液体）、[[superconductivity]]、[[bose-einstein-condensation]]。

## 前置知识

- [[statistical-mechanics]]、[[identical-particles]]、[[ensembles]]
