---
id: vector-calculus
name: 矢量分析
name_en: Vector Calculus
domain: mathematics
aliases: [矢量场论, 向量微积分]
tags: [数学, 矢量, 场论, 梯度]
keywords: [梯度, 散度, 旋度, 通量, 环量, 亥姆霍兹分解]
updated: 2026-08-13
links:
  - {id: calculus, weight: 5, note: 矢量分析是微积分在矢量场中的推广}
  - {id: tensor-calculus, weight: 4, note: 矢量分析是张量分析在三维欧氏空间的退化情形}
  - {id: maxwell-equations, weight: 5, note: 麦克斯韦方程组是矢量微积分的典型应用}
  - {id: newtonian-mechanics, weight: 4, note: 经典力学的矢量表述}
  - {id: fluid-mechanics, weight: 4, note: 流场描述用散度与旋度}
  - {id: electrostatics, weight: 4}
  - {id: differential-geometry, weight: 3, note: 微分形式统一了梯度/散度/旋度}
  - {id: mathematical-physics-methods, weight: 4}
superseded_by: []
supersedes: []
---
# 矢量分析

## 概述

矢量分析是微积分在三维欧氏空间中**标量场**与**矢量场**上的推广，是电磁学、流体力学、引力论等场论学科的通用语言。它以三个微分算子——梯度、散度、旋度——刻画场的变化，以高斯定理与斯托克斯定理把场的局部微分性质与整体积分性质联系起来。矢量分析是整个"场论"思维的起点，麦克斯韦方程组即是其最典型的物理应用。

## 基本概念

- **标量场 / 矢量场**：空间各点赋一个标量/矢量的函数 $\phi(\vec r)$、$\vec F(\vec r)$。
- **梯度**：标量场变化最快的方向与速率

$$ \nabla\phi = \Big(\frac{\partial\phi}{\partial x},\frac{\partial\phi}{\partial y},\frac{\partial\phi}{\partial z}\Big) $$

- **散度**：矢量场在某点的"源强度"（通量体密度）

$$ \nabla\cdot\vec F = \frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z} $$

- **旋度**：矢量场在某点的"涡旋强度"（环量面密度）

$$ \nabla\times\vec F = \Big(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z},\ \frac{\partial F_x}{\partial z}-\frac{\partial F_z}{\partial x},\ \frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\Big) $$

- **拉普拉斯算子**：$\nabla^2=\nabla\cdot\nabla$，作用于标量 $\nabla^2\phi$ 或矢量（逐分量）。

## 核心内容

### 基本定律 / 方程

**高斯（散度）定理**：

$$ \oint_{\partial V}\vec F\cdot\mathrm d\vec S = \int_V \nabla\cdot\vec F\,\mathrm dV $$

**斯托克斯（旋度）定理**：

$$ \oint_{\partial S}\vec F\cdot\mathrm d\vec l = \int_S(\nabla\times\vec F)\cdot\mathrm d\vec S $$

**格林公式**（平面情形，是两者的二维统一）：

$$ \oint_{\partial D}(P\,dx+Q\,dy)=\iint_D\Big(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\Big)\,dx\,dy $$

常用算子恒等式：

$$ \nabla\times(\nabla\phi)=0,\qquad \nabla\cdot(\nabla\times\vec F)=0 $$

### 推导要点

- **高斯定理**：把体积分割为小长方体，相邻面的通量相互抵消，只剩边界的通量；每个小体元通量 $\approx(\nabla\cdot\vec F)\Delta V$，取极限即得。
- **斯托克斯定理**：把曲面分割为小面片，相邻边的环量相互抵消，只剩边界环量；每个面片环量 $\approx(\nabla\times\vec F)\cdot\Delta\vec S$。
- 两者本质上都是**微积分基本定理**在高维的推广：$\int_{\partial\Omega}\omega=\int_\Omega d\omega$。

### 重要定理与推论

- **保守场判据**：$\vec F=\nabla\phi \iff \nabla\times\vec F=0$（单连通域），此时线积分与路径无关、环路积分为零。
- **亥姆霍兹分解**：满足边界条件的矢量场可唯一分解为无旋部分与无散部分之和

$$ \vec F = -\nabla\phi + \nabla\times\vec A $$

这是静电学（$\vec E=-\nabla\phi$）与静磁学（$\vec B=\nabla\times\vec A$）的共同数学基础。
- **无散场为管形场**（通量守恒）、**无旋场为保守场**（存在势）。

## 深化内容

在弯曲空间与一般维数中，矢量分析被**张量分析与微分形式**取代：梯度/散度/旋度统一为外微分 $d$ 与 Hodge 星算子，高斯/斯托克斯定理统一为斯托克斯定理 $\int_{\partial\Omega}\omega=\int_\Omega d\omega$。曲线坐标系（柱、球坐标）下的算子表达通过尺度因子 $h_i$ 给出，是解拉普拉斯方程的起点。**亥姆霍兹-霍奇分解**把三维分解推广到任意黎曼流形上的微分形式。延伸阅读可参考 Griffiths《电动力学导论》附录、Schey《Div, Grad, Curl, and All That》、Arfken《Mathematical Methods for Physicists》。

## 与其他知识的联系

- 紧密相关：[[maxwell-equations]] 的微分形式正是散度与旋度的物理表达；[[electrostatics]] 中 $\vec E=-\nabla\phi$。
- 相关：[[fluid-mechanics]]（流线、涡量）、[[newtonian-mechanics]]（力场）。
- 更一般：[[tensor-calculus]] 与 [[differential-geometry]] 把矢量分析推广到弯曲空间（协变导数代替偏导、微分形式统一算子）。

## 前置知识

- [[calculus]]（多元微积分）
- [[linear-algebra]]（坐标变换与内积）
