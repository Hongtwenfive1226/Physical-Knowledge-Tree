---
id: partial-differential-equations
name: 偏微分方程
name_en: Partial Differential Equations
domain: mathematics
aliases: [PDE]
tags: [数学, 偏微分方程, 数学物理]
keywords: [波动方程, 热传导方程, 拉普拉斯方程, 定解条件]
updated: 2026-08-12
links:
  - {id: differential-equations, weight: 5, note: 常微分方程是 PDE 的特例（分离变量后）}
  - {id: mathematical-physics-methods, weight: 5, note: 数理方法的核心研究对象}
  - {id: fourier-analysis, weight: 4, note: 傅里叶方法求解线性 PDE}
  - {id: green-function, weight: 5, note: 格林函数法求非齐次 PDE}
  - {id: eigenvalue-problems, weight: 4}
  - {id: maxwell-equations, weight: 4, note: 波动方程/亥姆霍兹方程}
  - {id: schrodinger-equation, weight: 4}
  - {id: heat-conduction, weight: 4}
  - {id: fluid-mechanics, weight: 3, note: 纳维-斯托克斯方程}
superseded_by: []
supersedes: []
---
# 偏微分方程

## 概述

偏微分方程（PDE）描述含多个自变量未知函数的偏导关系，是物理场的标准数学形式。三类经典方程：

- **波动方程**（双曲型）：$\dfrac{\partial^2 u}{\partial t^2} = c^2\nabla^2 u$
- **热传导/扩散方程**（抛物型）：$\dfrac{\partial u}{\partial t} = \alpha\nabla^2 u$
- **拉普拉斯/泊松方程**（椭圆型）：$\nabla^2 u = 0$ 或 $= -\rho/\varepsilon_0$

定解条件（初值 + 边界条件）与适定性是理论的核心。分离变量法、积分变换法、格林函数法、变分法/弱解理论是主要求解路径。

## 与其他知识的联系

- 紧密相关：[[mathematical-physics-methods]] 系统研究这些方程；[[green-function]] 与 [[fourier-analysis]] 是线性 PDE 的两大求解工具。
- 物理来源：[[schrodinger-equation]]（量子）、[[maxwell-equations]]（电磁）、[[heat-conduction]]（热）、[[fluid-mechanics]]（流体）。
- 数学深化：[[eigenvalue-problems]]（斯图姆-刘维尔）、[[special-functions]]（本征函数展开）。

## 数学基础

- [[differential-equations]]、[[vector-calculus]]、[[linear-algebra]]
