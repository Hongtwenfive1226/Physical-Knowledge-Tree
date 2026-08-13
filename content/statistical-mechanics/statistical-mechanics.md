---
id: statistical-mechanics
name: 统计力学
name_en: Statistical Mechanics
domain: statistical-mechanics
aliases: [统计物理]
tags: [统计物理, 微观, 系综]
keywords: [系综, 配分函数, 玻尔兹曼因子]
updated: 2026-08-13
links:
  - {id: thermodynamics, weight: 5, note: 宏观热力学的微观基础}
  - {id: ensembles, weight: 5, note: 系综理论}
  - {id: probability-theory, weight: 5, note: 统计语言}
  - {id: hamiltonian-mechanics, weight: 4, note: 相空间}
  - {id: quantum-statistics, weight: 4, note: 量子统计}
  - {id: ideal-gas, weight: 4, note: 基本模型}
  - {id: fluctuation-theory, weight: 4, note: 涨落}
  - {id: phase-transitions, weight: 4, note: 相变与临界现象}
  - {id: boltzmann-equation, weight: 3, note: 动力学}
  - {id: transport-theory, weight: 4, note: 输运理论的统计基础}
  - {id: heat-conduction, weight: 4, note: 热传导的统计描述}
  - {id: density-matrix, weight: 3, note: 量子系综}
  - {id: quantum-mechanics, weight: 3}
  - {id: soft-matter, weight: 3, note: 软物质与熵驱动现象}
  - {id: biophysics, weight: 2, note: 生物系统统计}
superseded_by: []
supersedes: [thermodynamics]
pos: {x: -5, y: 40, z: 0}
---
# 统计力学

## 概述

统计力学从微观粒子的运动规律出发，用**概率与系综**导出宏观热力学。其核心桥梁是**玻尔兹曼公式** $S=k_B\ln\Omega$（熵 = 微观态数的对数）与**配分函数** $Z$——一切热力学量都可由 $Z$ 通过微分得到。统计力学解释了热力学的微观起源，并推广到量子系统（量子统计）、涨落与相变。它是连接微观物理（力学、量子力学）与宏观现象（热、相变、输运）的枢纽，也是现代凝聚态、软物质、生物物理的共同语言。

## 基本概念

- **微观态 / 宏观态**：系统的精确状态 / 由宏观变量标定的状态集合。
- **系综**：大量相同系统的假想集合，宏观量是系综平均。
- **玻尔兹曼因子**：$e^{-\beta E}$，$\beta=1/(k_BT)$。
- **配分函数**：$Z=\sum_n e^{-\beta E_n}$，统计力学的核心量。
- **玻尔兹曼熵**：$S=k_B\ln\Omega$。

## 核心内容

### 基本定律 / 方程

正则系综的概率分布：

$$ p_n=\frac{e^{-\beta E_n}}{Z},\qquad Z=\sum_n e^{-\beta E_n},\qquad \beta=\frac{1}{k_BT} $$

自由能与配分函数：

$$ F=-k_BT\ln Z $$

玻尔兹曼熵：

$$ S=k_B\ln\Omega $$

### 推导要点

- **玻尔兹曼分布**：在约束 $\sum p_n=1$、$\sum p_nE_n=\langle E\rangle$ 下极大化吉布斯熵 $-\sum p_n\ln p_n$，用拉格朗日乘子得 $p_n\propto e^{-\beta E_n}$。
- **自由能-配分函数关系**：由 $F=U-TS$ 与 $\langle E\rangle=-\partial\ln Z/\partial\beta$、$S=k_B(\ln Z+\beta\langle E\rangle)$ 联立得 $F=-k_BT\ln Z$。
- **等概率假设**：微正则系综中每个可达微观态等概率（刘维尔定理 + 各态历经假设）。

### 重要定理与推论

- **能量均分定理**：每个二次自由度贡献 $\frac12k_BT$（理想气体 $U=\frac32Nk_BT$）。
- **涨落-耗散定理**：平衡涨落与线性响应（[[fluctuation-theory]]）相联系。
- **热力学极限的系综等价**：微正则/正则/巨正则在大 $N$ 下等价。
- **配分函数的可分解性**：独立子系统 $Z=Z_1Z_2$，能量/自由能可加。

## 深化内容

统计力学推广到量子系统给出**量子统计**（[[quantum-statistics]]：费米-狄拉克、玻色-爱因斯坦），解释金属电子气、黑体辐射、BEC。**相变理论**（[[phase-transitions]]、[[ising-model]]、[[renormalization]]）与**非平衡统计**（[[boltzmann-equation]]、[[nonequilibrium-thermodynamics]]）是前沿。延伸阅读可参考 Pathria《Statistical Mechanics》、Kardar《Statistical Physics of Particles》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[thermodynamics]]（目标）、[[ensembles]]（方法）、[[probability-theory]]（语言）、[[ideal-gas]]（模型）。
- 量子化：[[quantum-statistics]]（费米/玻色）、[[density-matrix]]（量子系综）。
- 推广：[[fluctuation-theory]]（涨落）、[[phase-transitions]]（临界现象）、[[nonequilibrium-thermodynamics]]（非平衡）。

## 前置知识

- [[probability-theory]]、[[calculus]]、[[hamiltonian-mechanics]]
