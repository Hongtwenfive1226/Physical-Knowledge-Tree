---
id: quantum-tunneling
name: 量子隧穿
name_en: Quantum Tunneling
domain: quantum-mechanics
aliases: [隧穿效应]
tags: [量子, 隧穿, 势垒]
keywords: [透射系数, WKB近似, 扫描隧道显微镜]
updated: 2026-08-13
links:
  - {id: schrodinger-equation, weight: 5, note: 隧穿由波动性产生}
  - {id: quantum-mechanics, weight: 4}
  - {id: superconductivity, weight: 3, note: 约瑟夫森结}
  - {id: nuclear-decay, weight: 4, note: α 衰变即势垒隧穿}
superseded_by: []
supersedes: []
---
# 量子隧穿

## 概述

量子隧穿是粒子**穿过经典禁区**（势垒 $V>E$ 的区域）的现象，无经典对应，是量子波动性的直接体现。对有限高势垒，透射系数指数衰减，由 **WKB 近似**给出。隧穿是许多重要物理过程的根源：$\alpha$ 衰变、扫描隧道显微镜（STM）、约瑟夫森效应、核聚变（太阳中质子隧穿库仑势垒）、闪存器件与量子点。隧穿表明波函数在禁区并非严格为零，而是指数衰减，从而在另一侧"漏出"。

## 基本概念

- **势垒**：$V(x)>E$ 的经典禁区。
- **透射系数 / 反射系数**：$T$、$R$，满足 $T+R=1$。
- **WKB 近似**：慢变势下的半经典近似。
- **隧穿时间**：粒子穿过势垒的时间（仍有争议的概念）。

## 核心内容

### 基本定律 / 方程

矩形势垒（高 $V_0$、宽 $a$）的透射系数：

$$ T=\frac{1}{1+\frac{V_0^2\sinh^2(\kappa a)}{4E(V_0-E)}},\qquad \kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar} $$

**WKB 隧穿概率**（一般势垒）：

$$ T\approx\exp\Big(-2\int_{x_1}^{x_2}\sqrt{\frac{2m(V(x)-E)}{\hbar^2}}\,dx\Big) $$

### 推导要点

- **矩形势垒**：在三个区域（入射、势垒内 $e^{\pm\kappa x}$、透射）写波函数，由波函数及其导数在边界连续，解出透射振幅。
- **WKB 近似**：在慢变势下取 $\psi\approx e^{\pm i\int k(x)dx}/\sqrt{k(x)}$，禁区 $k=i\kappa$ 得指数衰减，连接公式给出透射概率。
- **指数衰减的本质**：禁区波函数 $\sim e^{-\kappa x}$，穿透率随 $\kappa a$ 指数下降。

### 重要定理与推论

- **隧穿无经典对应**：经典粒子 $E<V$ 完全反射，量子粒子有非零透射。
- **$\alpha$ 衰变**：伽莫夫理论用隧穿解释 $\alpha$ 粒子逃逸库仑+离心势垒（见 [[nuclear-decay]]）。
- **扫描隧道显微镜**：隧穿电流 $I\propto e^{-2\kappa d}$，对针尖-样品距离 $d$ 极敏感，实现原子级成像。
- **约瑟夫森效应**：库珀对隧穿绝缘势垒（[[superconductivity]]）。

## 深化内容

隧穿的推广包括**共振隧穿**（量子阱中的透射峰）、**瞬子**（量子场论中的虚时隧穿，描述量子衰变）、**宏观量子隧穿**（超导相位隧穿）。隧穿时间与超光速争议是量子基础的有趣话题。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[schrodinger-equation]]、[[quantum-mechanics]]。
- 应用：[[nuclear-decay]]（α 衰变）、[[superconductivity]]（约瑟夫森结）、扫描隧道显微镜、闪存器件。

## 前置知识

- [[schrodinger-equation]]、[[quantum-mechanics]]、[[differential-equations]]
