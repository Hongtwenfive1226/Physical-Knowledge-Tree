---
id: electromagnetic-radiation
name: 电磁辐射
name_en: Electromagnetic Radiation
domain: electrodynamics
aliases: [辐射, 偶极辐射]
tags: [电磁学, 辐射, 能量]
keywords: [推迟势, 偶极辐射, 坡印廷矢量, 辐射功率, 拉莫尔公式]
updated: 2026-08-13
links:
  - {id: maxwell-equations, weight: 5, note: 辐射由时变源产生}
  - {id: electromagnetic-waves, weight: 5, note: 辐射场的波动本质}
  - {id: electromagnetic-potentials, weight: 4, note: 推迟势}
  - {id: spherical-harmonics, weight: 3, note: 多极展开}
  - {id: qed, weight: 2, note: 量子化辐射}
  - {id: quantum-optics, weight: 2}
superseded_by: []
supersedes: []
---
# 电磁辐射

## 概述

电磁辐射是**加速电荷**产生的电磁波。源的辐射解由**推迟势**给出——观察者在 $t$ 时刻感受到的场来自 $t_r=t-\mathcal R/c$ 时刻的源（信息以光速传播）。远场区辐射由**电偶极辐射**主导，功率由**拉莫尔公式**给出；更一般的源用**多极展开**（电偶极、磁偶极、电四极…）。辐射是天线、无线电、发光、轫致辐射与同步辐射的物理基础，量子化后对应光子发射（QED）。

## 基本概念

- **推迟时间**：$t_r=t-\mathcal R/c$。
- **推迟势**：$\phi,\vec A$ 由推迟时刻的源决定。
- **辐射区（远场）**：$r\gg\lambda$，场以 $1/r$ 衰减、横波。
- **电偶极矩**：$\vec p=\int\vec r'\rho(\vec r')d\tau'$；**辐射功率** $P$。

## 核心内容

### 基本定律 / 方程

**推迟势**：

$$ \phi(\vec r,t)=\frac1{4\pi\varepsilon_0}\int\frac{\rho(\vec r',t_r)}{\mathcal R}d\tau',\qquad \vec A(\vec r,t)=\frac{\mu_0}{4\pi}\int\frac{\vec J(\vec r',t_r)}{\mathcal R}d\tau' $$

**电偶极辐射**（远场）：

$$ \vec E=\frac{\mu_0}{4\pi}\Big[\frac{(\hat r\cdot\ddot{\vec p})\hat r-\ddot{\vec p}}{r}\Big]_{t_r},\qquad \vec B=\frac1c\hat r\times\vec E $$

**拉莫尔公式**（辐射总功率）：

$$ P=\frac{\mu_0q^2a^2}{6\pi c}=\frac{q^2a^2}{6\pi\varepsilon_0c^3} $$

### 推导要点

- **推迟势的来源**：洛伦兹规范下达朗贝尔方程 $\Box\phi=-\rho/\varepsilon_0$ 的推迟格林函数解 $G(t,\vec r)=\delta(t-\mathcal R/c)/(4\pi\mathcal R)$。
- **偶极辐射场**：远场近似下 $\vec A\approx\frac{\mu_0}{4\pi r}\dot{\vec p}(t_r)$，由 $\vec E=-\partial\vec A/\partial t$（辐射区）、$\vec B=\nabla\times\vec A$ 取保留 $1/r$ 的项。
- **拉莫尔公式**：由坡印廷矢量在球面上积分 $P=\oint\langle\vec S\rangle\cdot d\vec a$，代入偶极辐射场得到。

### 重要定理与推论

- **拉莫尔公式**：辐射功率正比于加速度平方 $P\propto a^2$——只有加速电荷才辐射。
- **辐射的角分布**（偶极）：$\frac{dP}{d\Omega}\propto\sin^2\theta$（垂直偶极轴最强）。
- **多极展开**：电四极、磁偶极辐射的功率标度更高阶（$1/c$ 的更高次），一般弱于电偶极。
- **轫致辐射 / 同步辐射**：电子被库仑场偏转 / 在磁场中回旋加速时的辐射。

## 深化内容

辐射理论的应用包括**天线理论**（半波振子、方向图）、**散射**（瑞利/米氏散射、天空蓝色）、以及**原子自发辐射**的经典对应。相对论推广给出**李纳-维谢尔势**（任意运动点电荷的严格解）。量子化后，辐射对应**光子**的发射/吸收（[[qed]]、[[quantum-optics]]），并修正了黑体辐射（普朗克）与原子寿命。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[maxwell-equations]]、[[electromagnetic-waves]]、[[electromagnetic-potentials]]（推迟势）。
- 数学：[[spherical-harmonics]]（多极展开）、[[multipole-expansion]]。
- 量子化：[[qed]]（光子发射/吸收）、[[quantum-optics]]（光的量子统计）。

## 前置知识

- [[maxwell-equations]]、[[electromagnetic-potentials]]、[[electromagnetic-waves]]
