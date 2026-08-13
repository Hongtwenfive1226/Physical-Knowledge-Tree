---
id: heat-conduction
name: 热传导与扩散
name_en: Heat Conduction & Diffusion
domain: statistical-mechanics
aliases: [热扩散, 扩散方程]
tags: [统计物理, 输运, 扩散]
keywords: [热传导方程, 扩散方程, 热导率]
updated: 2026-08-13
links:
  - {id: partial-differential-equations, weight: 5, note: 抛物型方程}
  - {id: transport-theory, weight: 5, note: 输运过程}
  - {id: thermodynamics, weight: 4, note: 热传导是热力学过程}
  - {id: kinetic-theory, weight: 3, note: 微观机制}
  - {id: statistical-mechanics, weight: 4, note: 热传导与扩散是统计力学内容}
  - {id: mathematical-physics-methods, weight: 4, note: 求解方法}
  - {id: fluctuation-theory, weight: 3, note: 随机行走}
superseded_by: []
supersedes: []
---
# 热传导与扩散

## 概述

热传导与扩散是同一类**抛物型**输运过程，分别描述温度场与浓度场的弛豫。热传导由**傅里叶定律**（$\vec q=-\kappa\nabla T$）、扩散由**菲克定律**（$\vec J=-D\nabla n$）驱动，结合守恒律得到**热传导方程 / 扩散方程**。微观上，热传导由分子碰撞（气体）、声子与电子（固体）承担；扩散就是**随机行走**（布朗运动），爱因斯坦关系 $\langle r^2\rangle=6Dt$ 联系宏观扩散系数与微观随机行走。

## 基本概念

- **热导率** $\kappa$、**热扩散率** $\alpha=\kappa/(\rho c_p)$。
- **扩散系数** $D$。
- **傅里叶定律 / 菲克定律**：流正比于梯度。
- **格林函数 / 热核**：热传导方程的基本解。

## 核心内容

### 基本定律 / 方程

热传导方程：

$$ \frac{\partial T}{\partial t}=\alpha\nabla^2T,\qquad \alpha=\frac{\kappa}{\rho c_p} $$

扩散方程：

$$ \frac{\partial n}{\partial t}=D\nabla^2n $$

**爱因斯坦关系**：

$$ \langle r^2\rangle=6Dt,\qquad D=\frac{k_BT}{\gamma} $$

### 推导要点

- **热传导方程**：由能量守恒 $\rho c_p\partial T/\partial t=-\nabla\cdot\vec q$ 代入傅里叶定律 $\vec q=-\kappa\nabla T$ 得到。
- **扩散方程**：由粒子数守恒 $\partial n/\partial t=-\nabla\cdot\vec J$ 代入菲克定律得到。
- **爱因斯坦关系**：布朗粒子在随机力与摩擦下的均方位移线性增长，由涨落-耗散定理给出 $D=k_BT/\gamma$。

### 重要定理与推论

- **抛物型方程的平滑性**：热传导抹平初始的不均匀（不可逆、信息丢失）。
- **热传导方程的基本解**：高斯型热核（点源扩散）。
- **扩散的均方位移**：$\langle r^2\rangle\propto t$（正常扩散），反常扩散 $\langle r^2\rangle\propto t^\alpha$ 偏离之。
- **稳态解**：一维稳态 $T$ 线性分布（傅里叶定律）。

## 深化内容

热传导与扩散是 [[transport-theory]]、[[mathematical-physics-methods]]（分离变量、格林函数）的标准实例。固体中声子热导（[[phonons]]）与电子热导（[[condensed-matter-physics]]）有不同机制；**反常扩散**（分形介质、莱维飞行）是前沿。延伸阅读可参考 Carslaw & Jaeger《Conduction of Heat in Solids》、Kardar《Statistical Physics of Fields》、朗道《流体力学》。

## 与其他知识的联系

- 紧密相关：[[transport-theory]]（输运系数）、[[partial-differential-equations]]/[[mathematical-physics-methods]]（求解）。
- 物理机制：[[kinetic-theory]]（气体）、[[phonons]]（固体）、[[condensed-matter-physics]]。
- 涨落视角：[[fluctuation-theory]]（随机行走与布朗运动）。

## 前置知识

- [[partial-differential-equations]]、[[transport-theory]]、[[kinetic-theory]]
