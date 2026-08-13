---
id: fluid-mechanics
name: 流体力学
name_en: Fluid Mechanics
domain: fluid-mechanics
aliases: [流体动力学]
tags: [流体, 连续介质, 动力学]
keywords: [纳维-斯托克斯方程, 伯努利方程, 雷诺数]
updated: 2026-08-12
links:
  - {id: continuum-mechanics, weight: 5, note: 连续介质力学分支}
  - {id: newtonian-mechanics, weight: 3, note: 力学基础}
  - {id: partial-differential-equations, weight: 5, note: 方程类型}
  - {id: turbulence, weight: 5, note: 湍流}
  - {id: acoustics, weight: 4, note: 流体中的波}
  - {id: vector-calculus, weight: 4, note: 场描述}
  - {id: chaos-theory, weight: 3, note: 湍流与混沌}
  - {id: heat-conduction, weight: 2, note: 对流}
  - {id: non-inertial-frames, weight: 2, note: 旋转流体}
  - {id: plasma-physics, weight: 3, note: 导电流体的等离子体描述}
  - {id: magnetohydrodynamics, weight: 3, note: 磁流体力学是流体+电磁的耦合}
superseded_by: []
supersedes: []
---
# 流体力学

## 概述

流体力学研究液体与气体的运动。连续介质假设下由**纳维-斯托克斯方程**描述：

$$ \rho\Big(\frac{\partial \vec v}{\partial t} + \vec v\cdot\nabla\vec v\Big) = -\nabla p + \mu\nabla^2\vec v + \rho\vec g $$

无黏（欧拉方程）与不可压缩情形有伯努利方程 $p + \frac12\rho v^2 + \rho gh = \mathrm{const}$。**雷诺数** $Re = \rho vL/\mu$ 判定层流/湍流。地球物理、工程、生物流体都依赖流体力学。

## 与其他知识的联系

- 紧密相关：[[continuum-mechanics]]（框架）、[[turbulence]]、[[partial-differential-equations]]、[[vector-calculus]]。
- 波的传播：[[acoustics]]。
- 非线性：[[chaos-theory]]（湍流）。
