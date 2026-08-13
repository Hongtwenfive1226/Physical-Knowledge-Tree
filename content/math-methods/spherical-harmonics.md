---
id: spherical-harmonics
name: 球谐函数
name_en: Spherical Harmonics
domain: math-methods
aliases: [球函数]
tags: [数学, 特殊函数, 角动量]
keywords: [勒让德函数, 角量子数, 球对称]
updated: 2026-08-13
links:
  - {id: special-functions, weight: 5, note: 球谐函数是特殊函数的重要成员}
  - {id: mathematical-physics-methods, weight: 5, note: 球谐函数是数学物理方法的核心工具}
  - {id: angular-momentum-qm, weight: 5, note: 球谐函数是角动量的本征函数}
  - {id: hydrogen-atom, weight: 4, note: 氢原子角向部分}
  - {id: electromagnetic-radiation, weight: 4, note: 多极展开}
  - {id: separation-of-variables, weight: 4}
  - {id: multipole-expansion, weight: 4}
superseded_by: []
supersedes: []
---
# 球谐函数

## 概述

球谐函数 $Y_{lm}(\theta,\phi)$ 是球面拉普拉斯算符 $\nabla^2_\Omega$ 的**本征函数**，构成球面上正交完备的基，是处理球对称问题（氢原子、中心力场、多极展开）的角向标准基。它们同时是**轨道角动量算符**的本征函数（$l$ 与 $m$ 分别对应角动量平方与 $z$ 分量），因此也是旋转群 $SO(3)$ 不可约表示的基。球谐函数统一了特殊函数、角动量理论与球对称边值问题。

## 基本概念

- **球面拉普拉斯算符**：$\nabla^2_\Omega$。
- **角量子数**：$l=0,1,2,\dots$、磁量子数 $m=-l,\dots,l$。
- **连带勒让德函数** $P_l^m(\cos\theta)$：$\Theta$ 方程的解。
- **正交归一**：$\int Y_{lm}^*Y_{l'm'}d\Omega=\delta_{ll'}\delta_{mm'}$。

## 核心内容

### 基本定律 / 方程

本征方程与正交性：

$$ \nabla^2_\Omega Y_{lm}=-l(l+1)Y_{lm},\qquad \int Y_{lm}^*Y_{l'm'}\,d\Omega=\delta_{ll'}\delta_{mm'} $$

显式表达式：

$$ Y_{lm}(\theta,\phi)=\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}\,P_l^m(\cos\theta)\,e^{im\phi} $$

加法公式：

$$ P_l(\cos\gamma)=\frac{4\pi}{2l+1}\sum_{m=-l}^{l}Y_{lm}^*(\hat r_1)Y_{lm}(\hat r_2) $$

### 推导要点

- **分离变量**：对球坐标拉普拉斯方程分离 $\Theta(\theta)\Phi(\phi)$，$\Phi=e^{im\phi}$、$\Theta$ 满足连带勒让德方程。
- **本征值条件**：$\Theta$ 在 $\theta=0,\pi$ 处正则要求 $l(l+1)$ 本征值、$m$ 取整数。
- **正交性**：角动量算符自伴性（或勒让德多项式正交性）给出。

### 重要定理与推论

- **角动量本征函数**：$Y_{lm}$ 是 $\hat L^2,\hat L_z$ 的共同本征函数（[[angular-momentum-qm]]）。
- **完备性**：任意球面函数可展开 $f(\theta,\phi)=\sum_{lm}c_{lm}Y_{lm}$。
- **多极展开**：$1/|\vec r-\vec r'|$ 的勒让德展开（[[multipole-expansion]]）。
- **氢原子角向**：氢原子波函数的角向部分（[[hydrogen-atom]]）。

## 深化内容

球谐函数是 $SO(3)$ 不可约表示 $D^l$ 的基，联系 [[group-theory]] 与 [[angular-momentum-qm]]。其应用遍及 [[electromagnetic-radiation]]（多极）、[[hydrogen-atom]]、分子轨道与地球物理（重力/磁场球谐分析）。自旋球谐函数推广到自旋粒子。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Sakurai《现代量子力学》、Jackson《Classical Electrodynamics》。

## 与其他知识的联系

- 紧密相关：[[angular-momentum-qm]]（本征函数）、[[hydrogen-atom]]、[[multipole-expansion]]（多极矩）。
- 应用：[[electromagnetic-radiation]]（辐射多极展开）。
- 方法：[[separation-of-variables]]、[[special-functions]]。

## 前置知识

- [[special-functions]]、[[separation-of-variables]]、[[linear-algebra]]
