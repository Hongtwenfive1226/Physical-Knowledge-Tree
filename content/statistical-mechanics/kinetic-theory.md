---
id: kinetic-theory
name: 分子运动论
name_en: Kinetic Theory
domain: statistical-mechanics
aliases: [气体动理论]
tags: [统计物理, 分子, 微观]
keywords: [平均自由程, 碰撞, 输运系数]
updated: 2026-08-13
links:
  - {id: ideal-gas, weight: 5, note: 气体动理论的对象}
  - {id: boltzmann-equation, weight: 5, note: 动力学方程}
  - {id: statistical-mechanics, weight: 4}
  - {id: probability-theory, weight: 3}
  - {id: transport-theory, weight: 3}
  - {id: thermodynamics, weight: 3}
superseded_by: [boltzmann-equation]
supersedes: []
---
# 分子运动论

## 概述

分子运动论把气体视为大量分子**无规则热运动**的集合，从微观碰撞出发导出宏观性质。其核心成果：压强源于分子对器壁的动量传递，温度是分子平均平动动能的量度，**平均自由程**决定输运现象（黏滞、热传导、扩散）的大小。分子运动论在 19 世纪由克劳修斯、麦克斯韦、玻尔兹曼建立，为热力学提供了第一个微观模型，是统计力学与气体动力学的前身。

## 基本概念

- **平均平动动能**：$\frac12m\overline{v^2}=\frac32k_BT$。
- **平均自由程**：$\lambda=\frac1{\sqrt2\,n\sigma}$（$\sigma$ 为碰撞截面）。
- **碰撞频率**：$Z=\sqrt2\,n\sigma\bar v$。
- **输运系数**：黏度 $\eta$、热导率 $\kappa$、扩散系数 $D$。

## 核心内容

### 基本定律 / 方程

压强（动量传递）：

$$ P=\frac13nm\overline{v^2}=nk_BT $$

平均自由程：

$$ \lambda=\frac1{\sqrt2\,n\sigma} $$

输运系数（简单平均自由程理论）：

$$ \eta=\frac13nm\bar v\lambda,\qquad \kappa=\frac13nm\bar v\lambda c_V,\qquad D=\frac13\bar v\lambda $$

### 推导要点

- **压强公式**：计算单位时间撞在单位面积器壁上的分子动量变化，对麦克斯韦分布平均得 $P=\frac13nm\overline{v^2}$。
- **平均自由程**：在分子参考系中，其他分子以相对速率 $\sqrt2\bar v$ 运动，单位时间扫过体积 $\sqrt2\bar v\sigma$，故碰撞频率 $Z=\sqrt2n\sigma\bar v$，$\lambda=\bar v/Z$。
- **输运系数**：跨越平均自由程的分子把其来源处的动量/能量/粒子数带到另一侧，梯度导致净输运。

### 重要定理与推论

- **温度与动能的联系**：$T$ 正比于分子平均平动动能。
- **麦克斯韦-玻尔兹曼分布**：速率分布（[[ideal-gas]]）。
- **输运与温度的关系**：$\eta,\kappa\propto\sqrt T$（理想气体，与压强无关）。
- **扩散与黏滞的类比**：三类输运系数共享 $\frac13\bar v\lambda$ 结构。

## 深化内容

分子运动论的系统化是**玻尔兹曼方程**（[[boltzmann-equation]]）：用单粒子分布函数 $f(\vec r,\vec v,t)$ 描述演化，碰撞项给出输运系数与 $H$ 定理（熵增的微观起源）。分子运动论是[[transport-theory]] 与 [[nonequilibrium-thermodynamics]] 的基础。延伸阅读可参考 Feynman《物理学讲义》第一卷、Reif《Fundamentals of Statistical and Thermal Physics》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[ideal-gas]]（模型）、[[boltzmann-equation]]（动力学方程）、[[transport-theory]]（输运系数）。
- 基础：[[statistical-mechanics]]、[[probability-theory]]。

## 上位替代

- 由 [[boltzmann-equation]] 与统计力学更一般地取代。

## 前置知识

- [[ideal-gas]]、[[probability-theory]]、[[statistical-mechanics]]
