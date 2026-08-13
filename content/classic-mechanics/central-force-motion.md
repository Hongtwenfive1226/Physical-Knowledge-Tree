---
id: central-force-motion
name: 有心力运动与开普勒问题
name_en: Central Force Motion & Kepler Problem
domain: classic-mechanics
aliases: [开普勒问题, 二体问题]
tags: [力学, 引力, 轨道]
keywords: [有效势, 轨道方程, 比奈公式, 开普勒定律]
updated: 2026-08-13
links:
  - {id: conservation-laws, weight: 5, note: 有心力下角动量守恒}
  - {id: newtonian-mechanics, weight: 4, note: 万有引力是牛顿力学的核心应用}
  - {id: hamiltonian-mechanics, weight: 3}
  - {id: special-functions, weight: 2}
  - {id: cosmology, weight: 2, note: 天体轨道}
  - {id: black-holes, weight: 2, note: 广义相对论修正轨道}
  - {id: quantum-mechanics, weight: 2, note: 氢原子是量子的开普勒问题}
  - {id: hydrogen-atom, weight: 3}
  - {id: hamilton-jacobi-theory, weight: 3}
superseded_by: [general-relativity]
supersedes: []
---
# 有心力运动与开普勒问题

## 概述

有心力问题研究物体在**指向固定中心**的力作用下的运动，是经典力学的核心可解问题。角动量 $\vec L=\vec r\times\vec p$ 守恒使运动局限于平面，从而把二维问题化为径向单变量问题（有效势方法）。对平方反比引力（库仑力同理），轨道是**圆锥曲线**，导出**开普勒三定律**。开普勒问题连接天体力学（行星轨道）与原子物理（玻尔模型、氢原子的量子对应），并作为散射理论与广义相对论修正（水星近日点进动）的起点。

## 基本概念

- **有心力**：$\vec F=f(r)\hat r$，只依赖径向距离且指向中心。
- **约化质量**：二体问题化为单粒子问题，$\mu=m_1m_2/(m_1+m_2)$。
- **有效势**：$V_{\mathrm{eff}}(r)=V(r)+L^2/(2\mu r^2)$，离心势项源于角动量守恒。
- **轨道方程 / 比奈公式**：以 $u=1/r$ 为变量的一阶微分方程。

## 核心内容

### 基本定律 / 方程

径向能量方程（有效势形式）：

$$ E=\frac12\mu\dot r^2+\underbrace{\frac{L^2}{2\mu r^2}+V(r)}_{V_{\mathrm{eff}}(r)} $$

**比奈公式**（轨道方程）：

$$ \frac{d^2u}{d\theta^2}+u=-\frac{\mu}{L^2u^2}f\big(\tfrac1u\big) $$

平方反比引力 $V=-k/r$ 的轨道：

$$ \frac1r=\frac{\mu k}{L^2}\big(1+e\cos\theta\big),\qquad e=\sqrt{1+\frac{2EL^2}{\mu k^2}} $$

### 推导要点

- **化为径向问题**：角动量守恒 $\dot\theta=L/(\mu r^2)$，代入能量表达式消去 $\dot\theta$ 得径向方程。
- **比奈公式**：利用 $\frac{d}{d\theta}=\frac{\dot r}{u'}$ 的链式关系，把 $r$ 关于 $t$ 的方程改写为 $u(\theta)$ 的方程。
- **轨道方程**：把 $V=-k/r$（即 $f=-k/r^2$）代入比奈公式，解得 $u=C+A\cos\theta$，改写为标准圆锥曲线。

### 重要定理与推论

- **开普勒第一定律**：行星轨道为椭圆（太阳在焦点）。
- **开普勒第二定律**：面积速度恒定 $\frac{dA}{dt}=L/(2\mu)$（角动量守恒的直接后果）。
- **开普勒第三定律**：$T^2=\frac{4\pi^2}{G(M+m)}a^3$，$T^2\propto a^3$。
- **能量-轨道对应**：$E<0$ 椭圆、$E=0$ 抛物线、$E>0$ 双曲线。

## 深化内容

平方反比有心力的散射给出**卢瑟福散射公式**（$\alpha$ 粒子实验，原子核的发现）。量子对应是**氢原子**（[[hydrogen-atom]]）：库仑势的定态薛定谔方程，能级 $E_n\propto-1/n^2$ 由量子化"轨道"给出。广义相对论对牛顿引力的修正表现为水星近日点进动（[[general-relativity]]）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Marion & Thornton《Classical Dynamics》。

## 与其他知识的联系

- 紧密相关：[[conservation-laws]]（角动量/能量守恒）、[[newtonian-mechanics]]（万有引力）。
- 量子对应：[[hydrogen-atom]] 是库仑势的量子力学问题，其能级对应经典轨道（玻尔模型）。
- 散射：卢瑟福散射；修正：[[general-relativity]]（近日点进动）。

## 上位替代

- 强引力/高速情形由 [[general-relativity]] 修正（水星近日点进动、光线偏折）。

## 前置知识

- [[newtonian-mechanics]]、[[calculus]]、[[differential-equations]]
