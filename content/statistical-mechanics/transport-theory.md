---
id: transport-theory
name: 输运理论
name_en: Transport Theory
domain: statistical-mechanics
aliases: [输运过程, 输运系数]
tags: [统计物理, 输运, 非平衡]
keywords: [电导率, 热导率, 黏滞, 扩散, 昂萨格]
updated: 2026-08-13
links:
  - {id: boltzmann-equation, weight: 5, note: 输运系数的动力学推导}
  - {id: kinetic-theory, weight: 4, note: 气体输运}
  - {id: fluctuation-theory, weight: 4, note: 涨落-耗散定理}
  - {id: nonequilibrium-thermodynamics, weight: 4}
  - {id: statistical-mechanics, weight: 4, note: 输运理论是统计力学的核心内容}
  - {id: condensed-matter-physics, weight: 3, note: 固体输运}
  - {id: heat-conduction, weight: 4, note: 热传导}
  - {id: semiconductors, weight: 2, note: 电子输运}
superseded_by: []
supersedes: []
---
# 输运理论

## 概述

输运理论研究非平衡系统中物理量（电荷、能量、动量、粒子数）的流动，即系统对**梯度**（温度梯度、电势梯度、密度梯度、速度梯度）的响应。线性响应区由两个普适原理统一：**昂萨格倒易关系**（交叉系数的对称性）与**涨落-耗散定理**（输运系数与平衡涨落的联系）。输运系数——电导率、热导率、黏度、扩散系数——由[[boltzmann-equation]] 微观推导，是固体物理、半导体、流体与软物质的核心。

## 基本概念

- **流与力**：广义流 $\vec J$ 与广义力 $\vec X$（梯度）。
- **输运系数**：电导 $\sigma$、热导 $\kappa$、黏度 $\eta$、扩散 $D$。
- **线性响应**：$\vec J=L\vec X$（$L$ 为输运系数矩阵）。
- **昂萨格系数**：$L_{ij}$，满足倒易关系 $L_{ij}=L_{ji}$。

## 核心内容

### 基本定律 / 方程

扩散定律（菲克）：

$$ \vec J=-D\nabla n $$

热传导（傅里叶）：

$$ \vec q=-\kappa\nabla T $$

**昂萨格倒易关系**：

$$ L_{ij}=L_{ji} $$

**涨落-耗散定理**：

$$ \sigma(\omega)=\frac{1}{k_BT}\int_0^\infty\langle J(0)J(t)\rangle e^{i\omega t}dt $$

### 推导要点

- **德鲁德模型**：电子在电场中加速、碰撞弛豫 $\tau$，得电导率 $\sigma=ne^2\tau/m$。
- **气体输运系数**：由 [[kinetic-theory]] 的平均自由程理论 $\eta=\frac13nm\bar v\lambda$。
- **昂萨格倒易关系**：由微观可逆性（时间反演对称）证明交叉系数对称。

### 重要定理与推论

- **爱因斯坦关系**：$D/\mu=k_BT/q$（扩散系数与迁移率的联系）。
- **维德曼-弗朗兹定律**：金属中 $\kappa/(\sigma T)=$ 常数（洛伦兹数）。
- **涨落-耗散定理**：噪声（涨落）与耗散（输运系数）互为表里。
- **霍尔效应**：磁场下的横向输运（[[semiconductors]]）。

## 深化内容

输运理论的应用遍及 [[semiconductors]]（电子/空穴输运）、[[condensed-matter-physics]]（费米液体、超导）、[[heat-conduction]]（声子热导）。量子输运（弹道输运、朗道-贝特格公式）在介观物理中重要。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kardar《Statistical Physics of Fields》、朗道《物理动力学》。

## 与其他知识的联系

- 紧密相关：[[boltzmann-equation]]（微观基础）、[[kinetic-theory]]、[[fluctuation-theory]]（涨落-耗散）、[[heat-conduction]]。
- 固体：[[condensed-matter-physics]]、[[semiconductors]]（电子/空穴输运）。
- 基础：[[nonequilibrium-thermodynamics]]。

## 前置知识

- [[kinetic-theory]]、[[boltzmann-equation]]、[[fluctuation-theory]]
