---
id: continuum-mechanics
name: 连续介质力学
name_en: Continuum Mechanics
domain: fluid-mechanics
aliases: [连续介质, 弹性力学]
tags: [力学, 连续介质, 材料]
keywords: [应力, 应变, 本构关系, 弹性]
updated: 2026-08-12
links:
  - {id: fluid-mechanics, weight: 5, note: 流体是连续介质的特例}
  - {id: vector-calculus, weight: 3, note: 场与梯度}
  - {id: tensor-calculus, weight: 5, note: 应力应变张量}
  - {id: partial-differential-equations, weight: 4}
  - {id: newtonian-mechanics, weight: 3}
  - {id: wave-mechanics, weight: 3, note: 弹性波}
  - {id: variational-calculus, weight: 3, note: 最小势能原理}
superseded_by: []
supersedes: []
---
# 连续介质力学

## 概述

连续介质力学统一处理固体（弹性/塑性）与流体，核心概念是**应力张量** $\sigma_{ij}$、**应变张量** $\epsilon_{ij}$ 与**本构关系**（如胡克定律）

$$ \sigma_{ij} = C_{ijkl}\,\epsilon_{kl} $$

平衡与运动方程由动量守恒导出（柯西方程）。弹性波（纵波/横波）在固体中传播；塑性、黏弹性、断裂是其延伸。变分原理（最小势能）是求解的数学基础。

## 与其他知识的联系

- 紧密相关：[[fluid-mechanics]]（流体分支）、[[tensor-calculus]]（张量）。
- 相关：[[wave-mechanics]]（弹性波）、[[variational-calculus]]、[[partial-differential-equations]]。
