---
id: newtonian-mechanics
name: 牛顿力学
name_en: Newtonian Mechanics
domain: classic-mechanics
aliases: [经典力学, 牛顿定律, 牛顿三定律]
tags: [力学, 质点, 运动学, 动力学, 惯性系]
keywords: [力, 加速度, 惯性, 动量, 能量, 角动量]
updated: 2026-08-13
links:
  - {id: lagrangian-mechanics, weight: 5, note: 拉格朗日力学是牛顿力学的等价重写，更便于处理约束}
  - {id: hamiltonian-mechanics, weight: 5, note: 哈密顿力学由牛顿力学经拉格朗日形式发展而来}
  - {id: vector-calculus, weight: 4, note: 牛顿力学的矢量表述依赖矢量微积分}
  - {id: calculus, weight: 4, note: 微积分是运动学与动力学的数学语言}
  - {id: conservation-laws, weight: 4, note: 牛顿第三定律蕴含动量守恒}
  - {id: rigid-body-mechanics, weight: 4, note: 刚体力学是牛顿力学对质点系的推广}
  - {id: wave-mechanics, weight: 3, note: 波动是力学系统的集体运动}
  - {id: special-relativity, weight: 4, note: 高速情形下由狭义相对论取代}
  - {id: quantum-mechanics, weight: 3, note: 微观尺度由量子力学取代}
  - {id: fluid-mechanics, weight: 2, note: 连续介质力学是牛顿力学对流体系统的推广}
superseded_by: [special-relativity, quantum-mechanics]
supersedes: []
pos: {x: -30, y: 0, z: 0}
---
# 牛顿力学

## 概述

牛顿力学研究宏观、低速（远小于光速）物体的机械运动，以牛顿三大定律为核心，是经典物理学的基石。它建立在**绝对空间与绝对时间**的假定之上：存在一类特殊的**惯性参考系**，在其中不受力（或合外力为零）的物体保持静止或匀速直线运动。牛顿力学在 17 世纪由《自然哲学的数学原理》（1687）奠基，其理论框架——力、质量、动量、能量、角动量——至今仍是整个物理学的词汇表。

## 基本概念

- **质点**：忽略大小形状、只有质量与位置的理想模型。
- **惯性系**：牛顿第一定律成立的参考系；相对惯性系做匀速直线运动的仍是惯性系。
- **力 / 质量**：力是改变运动状态的原因；质量（惯性质量）度量抵抗加速的能力。
- **动量**：$\vec p=m\vec v$；**角动量**：$\vec L=\vec r\times\vec p$。
- **动能 / 势能**：$T=\tfrac12mv^2$；保守力有势能 $V$，$E=T+V$ 为机械能。

## 核心内容

### 基本定律 / 方程

**第一定律（惯性定律）**：存在惯性系，其中物体在无外力时保持静止或匀速直线运动。

**第二定律（动力学方程）**：

$$ \vec F = \frac{\mathrm d\vec p}{\mathrm dt},\qquad \vec p=m\vec v $$

质量恒定时退化为 $\vec F=m\vec a=m\ddot{\vec r}$。

**第三定律（作用-反作用）**：

$$ \vec F_{12}=-\vec F_{21} $$

**万有引力定律**：

$$ \vec F = -G\frac{m_1m_2}{r^2}\hat r $$

### 推导要点

- **动量守恒**：对质点系，内力成对抵消（第三定律），只有外力改变总动量 $\frac{d}{dt}\sum\vec p_i=\sum\vec F_i^{\mathrm{ext}}$；外力为零时总动量守恒。
- **角动量定理**：$\frac{d\vec L}{dt}=\vec r\times\vec F=\vec\tau$（力矩），中心力下 $\vec L$ 守恒。
- **动能定理**：$\frac{d}{dt}(\tfrac12mv^2)=\vec F\cdot\vec v$，力做功等于动能增量；保守力下导出机械能守恒。

### 重要定理与推论

- **质心定理**：系统的质心运动如同全部质量集中于质心、受合外力作用：$M\ddot{\vec R}=\vec F^{\mathrm{ext}}$。
- **伽利略相对性原理**：力学规律在所有惯性系中形式相同（伽利略变换下协变），是狭义相对论的先声。
- **动量、角动量、机械能三大守恒**：分别源于空间平移、旋转、时间平移对称（见 [[conservation-laws]] 与诺特定理）。
- **开普勒三定律**：平方反比引力下的轨道运动（见 [[central-force-motion]]）。

## 深化内容

牛顿力学的绝对时空观在 20 世纪被修正：高速时由 [[special-relativity]] 取代（$v\ll c$ 是其极限），微观尺度由 [[quantum-mechanics]] 取代（大量子数下回到经典）。但作为"力学思维"的起点，牛顿力学的**决定论**框架、受力分析方法与守恒律观念仍是全部物理的基石，并直接推广为分析力学（[[lagrangian-mechanics]]、[[hamiltonian-mechanics]]）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、费曼《物理学讲义》第一卷。

## 与其他知识的联系

- 紧密相关：[[lagrangian-mechanics]] 与 [[hamiltonian-mechanics]] 是牛顿力学的两种等价形式化。
- 相关：[[rigid-body-mechanics]]（质点系推广）、[[conservation-laws]]（由对称性导出）、[[vibration-theory]]（多自由度系统）。
- 更远：[[fluid-mechanics]]（连续介质）、[[special-relativity]] / [[quantum-mechanics]]（上位替代）。

## 上位替代

- [[special-relativity]]：速度接近光速时绝对时空失效，牛顿力学是其低速极限（$v\ll c$）。
- [[quantum-mechanics]]：原子尺度由波函数与薛定谔方程描述，牛顿力学是大量子数极限下的近似。

## 前置知识

- [[calculus]]、[[vector-calculus]]、[[linear-algebra]]
