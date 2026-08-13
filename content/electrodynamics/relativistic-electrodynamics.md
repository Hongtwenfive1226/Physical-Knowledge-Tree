---
id: relativistic-electrodynamics
name: 相对论电动力学
name_en: Relativistic Electrodynamics
domain: electrodynamics
aliases: [四维电磁场]
tags: [电磁学, 相对论, 张量]
keywords: [电磁张量, 洛伦兹变换, 四维势]
updated: 2026-08-13
links:
  - {id: special-relativity, weight: 5, note: 洛伦兹协变性}
  - {id: maxwell-equations, weight: 5, note: 方程组的协变形式}
  - {id: tensor-calculus, weight: 5, note: 张量语言}
  - {id: electromagnetic-potentials, weight: 4, note: 四矢势}
  - {id: lorentz-force, weight: 4, note: 四维力}
  - {id: gauge-field-theory, weight: 3}
superseded_by: []
supersedes: []
---
# 相对论电动力学

## 概述

相对论电动力学把电磁学写成**洛伦兹协变**的四维张量形式，揭示电磁学的内在相对论结构：$\vec E,\vec B$ 不是两个独立矢量，而是电磁张量 $F_{\mu\nu}$ 的不同分量。麦克斯韦方程组压缩为两条协变方程，洛伦兹力是四维力的空间分量。这一形式解释了"磁场是电场的相对论效应"，并成为规范场论（杨-米尔斯）的原型。

## 基本概念

- **四矢势**：$A^\mu=(\phi/c,\vec A)$。
- **电磁张量**：$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$，分量为 $\vec E,\vec B$。
- **对偶张量**：$\tilde F^{\mu\nu}=\frac12\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$。
- **四电流**：$J^\mu=(c\rho,\vec J)$。

## 核心内容

### 基本定律 / 方程

电磁张量：

$$ F_{\mu\nu}=\begin{pmatrix}0&E_x/c&E_y/c&E_z/c\\-E_x/c&0&-B_z&B_y\\-E_y/c&B_z&0&-B_x\\-E_z/c&-B_y&B_x&0\end{pmatrix} $$

麦克斯韦方程组（两条协变方程）：

$$ \partial_\mu F^{\mu\nu}=\mu_0J^\nu,\qquad \partial_\mu\tilde F^{\mu\nu}=0 $$

**洛伦兹力四维形式**：

$$ \frac{dp^\mu}{d\tau}=qF^{\mu\nu}u_\nu $$

### 推导要点

- **电磁张量的构造**：由 $\vec E=-\nabla\phi-\partial\vec A/\partial t$、$\vec B=\nabla\times\vec A$，把分量整理为 $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$。
- **两条协变方程**：非齐次麦克斯韦方程（高斯 + 安培）合并为 $\partial_\mu F^{\mu\nu}=\mu_0J^\nu$；齐次方程（无源 + 法拉第）合并为 $\partial_\mu\tilde F^{\mu\nu}=0$。
- **四维力**：洛伦兹力 $\vec F=q(\vec E+\vec v\times\vec B)$ 的分量恰为 $qF^{\mu\nu}u_\nu$ 的空间部分。

### 重要定理与推论

- **洛伦兹协变性**：方程在洛伦兹变换下形式不变（张量方程自动协变）。
- **场变换**：不同惯性系中 $\vec E,\vec B$ 互相转化（纯电场经 boost 产生磁场）。
- **两个洛伦兹不变量**：$F_{\mu\nu}F^{\mu\nu}$（$\propto B^2-E^2/c^2$）与 $F_{\mu\nu}\tilde F^{\mu\nu}$（$\propto\vec E\cdot\vec B$）。
- **规范不变性的四维形式**：$A^\mu\to A^\mu+\partial^\mu\Lambda$ 不改变 $F_{\mu\nu}$。

## 深化内容

相对论电动力学是**规范场论**（[[gauge-field-theory]]）的原型：把 $U(1)$ 整体对称推广为局域对称，强制引入规范场 $A^\mu$（即电磁场）。这一"规范原理"推广到 $SU(2),SU(3)$ 即电弱、强相互作用。电磁张量的几何解释是联络的曲率（纤维丛）。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[special-relativity]]（框架）、[[tensor-calculus]]（语言）、[[maxwell-equations]]（内容）、[[electromagnetic-potentials]]（四矢势）。
- 现代推广：[[gauge-field-theory]] 把电磁场推广为规范场。

## 前置知识

- [[tensor-calculus]]、[[special-relativity]]、[[maxwell-equations]]
