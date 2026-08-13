---
id: waveguides-resonators
name: 波导与谐振腔
name_en: Waveguides & Resonators
domain: electrodynamics
aliases: [导波, 谐振腔]
tags: [电磁学, 导波, 模式]
keywords: [TE模, TM模, 截止频率, 品质因子]
updated: 2026-08-13
links:
  - {id: electromagnetic-waves, weight: 5, note: 波导是受限的电磁波}
  - {id: maxwell-equations, weight: 4}
  - {id: boundary-value-problems, weight: 4, note: 边界条件确定模式}
  - {id: separation-of-variables, weight: 3}
  - {id: optics, weight: 3, note: 光纤与集成光学}
  - {id: lasers, weight: 2, note: 谐振腔}
superseded_by: []
supersedes: []
---
# 波导与谐振腔

## 概述

波导引导电磁波沿特定方向传播；谐振腔把电磁场限制在有限体积内形成驻波模式。两者都由导体/介质边界条件决定场的**模式**（TE/TM 模）。波导中的每个模式有**截止频率** $\omega_c$：低于 $\omega_c$ 的模式指数衰减（截止），高于 $\omega_c$ 的模式传播。谐振腔的本征频率离散化，品质因子 $Q$ 刻画损耗。这些概念是微波工程、光纤、激光器与粒子加速器的物理基础。

## 基本概念

- **TE / TM 模**：横电（$E_z=0$）/ 横磁（$H_z=0$）模式。
- **截止频率** $\omega_c$：模式能否传播的阈值。
- **传播常数**：$\gamma=\alpha+i\beta$，纵向传播与衰减。
- **品质因子**：$Q=\omega\times(\text{储能}/\text{耗散功率})$。

## 核心内容

### 基本定律 / 方程

波导中的亥姆霍兹方程（分离纵向后）：

$$ \big(\nabla_t^2+\gamma^2+\omega^2\mu\varepsilon\big)\vec F_t=0 $$

矩形波导 TE/TM 模的截止波数：

$$ k_c=\sqrt{\Big(\frac{m\pi}{a}\Big)^2+\Big(\frac{n\pi}{b}\Big)^2} $$

谐振腔品质因子：

$$ Q=\frac{\omega_0}{\Delta\omega}=\frac{\omega_0\,U}{P_{\mathrm{loss}}} $$

### 推导要点

- **纵向分离**：设场为 $\vec F=\vec F_t(x,y)e^{-\gamma z}$，代入波动方程，横向部分满足亥姆霍兹方程，纵向由边界条件确定 $\gamma$。
- **截止频率**：$\gamma^2=k_c^2-\omega^2\mu\varepsilon$；当 $\omega<\omega_c=k_c/\sqrt{\mu\varepsilon}$ 时 $\gamma$ 为实数（衰减），$\omega>\omega_c$ 时 $\gamma$ 为纯虚数（传播）。
- **Q 因子**：由储能的指数衰减 $U(t)=U_0e^{-\omega_0t/Q}$ 定义，或由谱线宽度 $\Delta\omega$ 给出。

### 重要定理与推论

- **截止现象**：波导是"高通"结构，低于截止频率的波不能传播。
- **模式简并与正交性**：不同模式携带独立信息，可多路复用。
- **谐振腔的离散谱**：本征频率由腔几何决定（类比简正模）。
- **光纤的单模条件**：$V=2\pi a\,\mathrm{NA}/\lambda<2.405$ 时单模传输。

## 深化内容

波导与谐振腔是**微波工程**（矩形/圆形波导、同轴线）、**光纤通信**（介质波导、全反射导波）与**集成光子学**的基础；光学谐振腔是[[lasers]] 反馈的必要条件。粒子加速器中**射频腔**用谐振电磁场加速粒子。延伸阅读可参考 Jackson《Classical Electrodynamics》、Pozar《Microwave Engineering》、Saleh & Teich《Fundamentals of Photonics》。

## 与其他知识的联系

- 紧密相关：[[electromagnetic-waves]]（物理本质）、[[boundary-value-problems]]/[[separation-of-variables]]（模式求解）。
- 应用：[[optics]]（光纤、集成光子学）、[[lasers]]（光学谐振腔）、微波器件。

## 前置知识

- [[electromagnetic-waves]]、[[boundary-value-problems]]、[[maxwell-equations]]
