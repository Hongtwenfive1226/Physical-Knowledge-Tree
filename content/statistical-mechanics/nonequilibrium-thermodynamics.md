---
id: nonequilibrium-thermodynamics
name: 非平衡热力学
name_en: Non-equilibrium Thermodynamics
domain: statistical-mechanics
aliases: [不可逆热力学]
tags: [统计物理, 非平衡, 不可逆]
keywords: [熵产生, 昂萨格关系, 线性响应]
updated: 2026-08-13
links:
  - {id: thermodynamics, weight: 4, note: 平衡热力学的推广}
  - {id: transport-theory, weight: 4, note: 输运与熵产生}
  - {id: boltzmann-equation, weight: 4, note: 微观动力学}
  - {id: fluctuation-theory, weight: 4, note: 涨落与线性响应}
  - {id: statistical-mechanics, weight: 4}
superseded_by: []
supersedes: []
---
# 非平衡热力学

## 概述

非平衡热力学把热力学推广到**偏离平衡**的系统，研究不可逆过程（输运、化学反应、耗散）的宏观规律。核心概念是**熵产生率**：把流 $\vec J$ 与对应的热力学力 $\vec X$（梯度、化学亲和势）联系起来，熵产生率为 $\vec J\cdot\vec X$。**昂萨格倒易关系**给出交叉输运系数的对称性，**涨落-耗散定理**把输运系数与平衡涨落联系。非平衡热力学是输运理论、生物过程、化学动力学与自组织的宏观框架。

## 基本概念

- **熵产生率**：$\sigma=\frac{dS_{\mathrm{irr}}}{dt}\ge0$。
- **流与力**：广义流 $J_i$ 与广义力 $X_i$。
- **线性唯象关系**：$J_i=\sum_j L_{ij}X_j$。
- **昂萨格系数**：$L_{ij}$，满足倒易关系。
- **远离平衡 / 耗散结构**：非线性区的自组织。

## 核心内容

### 基本定律 / 方程

**熵产生率**：

$$ \frac{dS}{dt}=\int\sum_i J_iX_i\,dV\ge0 $$

**线性唯象关系**：

$$ J_i=\sum_j L_{ij}X_j $$

**昂萨格倒易关系**：

$$ L_{ij}=L_{ji} $$

### 推导要点

- **熵产生**：把熵变分解为可逆部分与不可逆部分，不可逆部分由流与力的乘积给出（热流 $\vec q/T$、物质流 $\vec J_i$ 与化学势梯度）。
- **昂萨格倒易关系**：由微观可逆性（时间反演对称）与平衡涨落的对称性证明。
- **熵增原理的推广**：第二定律要求熵产生率非负，即 $\sum L_{ij}X_iX_j\ge0$（$L$ 正定）。

### 重要定理与推论

- **昂萨格倒易关系**：热电效应（塞贝克/珀尔帖）的对称性。
- **最小熵产生原理**：近平衡线性区，稳态对应最小熵产生。
- **涨落-耗散定理**：输运系数与平衡涨落的关系（[[fluctuation-theory]]）。
- **耗散结构**：远离平衡时，熵产生可驱动自组织（普里高津）。

## 深化内容

非平衡热力学是[[transport-theory]]、[[boltzmann-equation]] 的宏观框架，并应用于生物物理（主动输运、新陈代谢）、化学反应网络与气候系统（[[climate-physics]]）。**远离平衡**的耗散结构与 [[chaos-theory]] 相关。延伸阅读可参考 Prigogine《Introduction to Thermodynamics of Irreversible Processes》、de Groot & Mazur《Non-Equilibrium Thermodynamics》、Kardar《Statistical Physics of Fields》。

## 与其他知识的联系

- 紧密相关：[[transport-theory]]（输运）、[[fluctuation-theory]]（线性响应）、[[boltzmann-equation]]（微观基础）。
- 非线性区：[[chaos-theory]]、耗散结构（自组织）。

## 前置知识

- [[thermodynamics]]、[[transport-theory]]、[[fluctuation-theory]]
