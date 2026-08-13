---
id: maxwell-equations
name: 麦克斯韦方程组
name_en: Maxwell's Equations
domain: electrodynamics
aliases: [麦克斯韦方程, 电磁场理论]
tags: [电磁学, 场方程]
keywords: [高斯定律, 法拉第定律, 安培-麦克斯韦定律, 电磁波, 位移电流]
updated: 2026-08-13
links:
  - {id: electrostatics, weight: 5, note: 静电是麦克斯韦方程组的高斯定律情形}
  - {id: magnetostatics, weight: 5, note: 静磁是稳恒电流情形}
  - {id: electromagnetic-waves, weight: 5, note: 方程组预言电磁波}
  - {id: electromagnetic-induction, weight: 5, note: 法拉第定律是其中一环}
  - {id: lorentz-force, weight: 4, note: 电磁力定律与方程组并列}
  - {id: vector-calculus, weight: 5, note: 微分形式的数学语言}
  - {id: gauge-field-theory, weight: 3, note: 电磁场是 U(1) 规范场}
  - {id: special-relativity, weight: 4, note: 洛伦兹协变形式}
  - {id: relativistic-electrodynamics, weight: 4}
  - {id: quantum-field-theory, weight: 3, note: 量子化为 QED}
  - {id: electromagnetic-media, weight: 4}
superseded_by: [qed]
supersedes: [electrostatics, magnetostatics, electromagnetic-induction]
pos: {x: 20, y: 0, z: 0}
---
# 麦克斯韦方程组

## 概述

麦克斯韦方程组统一了电与磁，是经典电磁学（乃至全部经典场论）的基石。麦克斯韦在 1865 年把高斯定律、法拉第定律、安培定律整合为一组自洽的场方程，关键的创新是加入**位移电流** $\varepsilon_0\partial\vec E/\partial t$，从而预言了**电磁波**并以光速传播——把光学纳入电磁学。方程组具有洛伦兹协变性，是狭义相对论的直接动因；其量子化给出量子电动力学（QED）。

## 基本概念

- **电荷密度 / 电流密度**：$\rho$、$\vec J$，满足连续性方程 $\partial\rho/\partial t+\nabla\cdot\vec J=0$。
- **位移电流**：$\vec J_d=\varepsilon_0\partial\vec E/\partial t$，非电荷流动的"等效电流"。
- **电磁场**：$\vec E$（电场）、$\vec B$（磁场）；真空常数 $\varepsilon_0$、$\mu_0$。

## 核心内容

### 基本定律 / 方程

微分形式（SI 单位）：

$$ \nabla\cdot\vec E=\frac{\rho}{\varepsilon_0},\qquad \nabla\cdot\vec B=0 $$

$$ \nabla\times\vec E=-\frac{\partial\vec B}{\partial t},\qquad \nabla\times\vec B=\mu_0\vec J+\mu_0\varepsilon_0\frac{\partial\vec E}{\partial t} $$

真空无源情形，$\vec E,\vec B$ 均满足波动方程：

$$ \Big(\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}\Big)\vec E=0,\qquad c=\frac{1}{\sqrt{\mu_0\varepsilon_0}} $$

### 推导要点

- **位移电流的引入**：对安培定律取散度 $\nabla\cdot(\nabla\times\vec B)=0=\mu_0\nabla\cdot\vec J$，与连续性方程 $\nabla\cdot\vec J=-\partial\rho/\partial t$ 矛盾；加入 $\varepsilon_0\partial\vec E/\partial t$ 后用高斯定律消去 $\partial\rho/\partial t$ 即自洽。
- **电磁波的预言**：真空无源时对 $\nabla\times\vec E=-\partial\vec B/\partial t$ 再取旋度，用 $\nabla\times\vec B=\mu_0\varepsilon_0\partial\vec E/\partial t$ 得波动方程，波速 $c=1/\sqrt{\mu_0\varepsilon_0}$（与光速吻合）。
- **电荷守恒**：对高斯定律取时间导数 + 安培定律取散度，得到连续性方程。

### 重要定理与推论

- **电荷守恒**：连续性方程是方程组的必然推论。
- **电磁波存在**：$\vec E,\vec B$ 相互激发、以光速传播的横波。
- **边界条件**：跨介质界面时 $\vec E_\parallel,\vec B_\perp$ 连续（无面电荷/电流时）。
- **规范自由度**：$\phi,\vec A$ 可做规范变换而不改变 $\vec E,\vec B$（见 [[electromagnetic-potentials]]）。

## 深化内容

麦克斯韦方程组具有**洛伦兹协变性**（见 [[relativistic-electrodynamics]]）：$\vec E,\vec B$ 统一为电磁张量 $F_{\mu\nu}$，方程组压缩为 $\partial_\mu F^{\mu\nu}=\mu_0J^\nu$。作为 $U(1)$ **规范场**（[[gauge-field-theory]]），它是规范场论的原型。量子化后得到 **QED**（[[qed]]），预言光子并精确到 $10^{-12}$。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[electromagnetic-waves]]、[[electromagnetic-induction]]、[[electrostatics]]/[[magnetostatics]]（退化情形）、[[vector-calculus]]。
- 相对论：[[special-relativity]] 中 $\vec E,\vec B$ 统一为 $F_{\mu\nu}$；[[relativistic-electrodynamics]]。
- 量子化：[[quantum-field-theory]] → [[qed]]。

## 上位替代

- 经典电磁场是量子场论中电磁场（光子场）的经典极限：[[qed]]。

## 前置知识

- [[vector-calculus]]、[[calculus]]、[[electrostatics]]、[[magnetostatics]]
