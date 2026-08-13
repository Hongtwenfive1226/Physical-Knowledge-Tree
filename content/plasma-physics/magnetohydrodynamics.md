---
id: magnetohydrodynamics
name: 磁流体力学
name_en: Magnetohydrodynamics
domain: plasma-physics
aliases: [MHD]
tags: [等离子体, 磁流体, 流体]
keywords: [阿尔文波, 磁冻结, 磁雷诺数]
updated: 2026-08-13
links:
  - {id: plasma-physics, weight: 5, note: 磁化等离子体的流体描述}
  - {id: fluid-mechanics, weight: 5, note: 流体方程}
  - {id: maxwell-equations, weight: 4, note: 电磁场}
  - {id: turbulence, weight: 3, note: MHD 湍流}
  - {id: plasma-confinement, weight: 3, note: 聚变平衡}
superseded_by: []
supersedes: []
---
# 磁流体力学

## 概述

磁流体力学（MHD）把磁化等离子体视为**导电流体**，耦合流体方程与电磁方程（[[maxwell-equations]]），描述等离子体的大尺度集体行为。MHD 的核心效应：**磁冻结**（高磁雷诺数时磁场随流体"冻结"）、**阿尔文波**（沿磁场的横波）、以及磁场对流的洛伦兹力作用。MHD 是天体物理（太阳风、吸积盘、太阳发电机）与受控聚变（托卡马克平衡）的标准框架。

## 基本概念

- **磁雷诺数** $R_m=UL/\eta$：对流与磁扩散之比。
- **磁冻结**：$R_m\gg1$ 时磁场随流体运动。
- **阿尔文波**：沿磁场的横波。
- **磁压 / 洛伦兹力**：$\vec J\times\vec B$。
- **磁流体近似**：导电流体的单流体描述。

## 核心内容

### 基本定律 / 方程

动量方程与磁感应方程：

$$ \rho\Big(\frac{\partial\vec v}{\partial t}+\vec v\cdot\nabla\vec v\Big)=-\nabla p+\vec J\times\vec B $$

$$ \frac{\partial\vec B}{\partial t}=\nabla\times(\vec v\times\vec B)-\nabla\times(\eta\nabla\times\vec B) $$

### 推导要点

- **磁感应方程**：由法拉第定律 $\partial\vec B/\partial t=-\nabla\times\vec E$ + 欧姆定律 $\vec E=-\vec v\times\vec B+\eta\vec J$ 导出。
- **磁冻结**：忽略电阻项（$\eta\to0$），磁通量随流体元守恒（阿尔文冻结定理）。
- **阿尔文波**：磁张力提供恢复力，线性化得横波 $v_A=B/\sqrt{\mu_0\rho}$。

### 重要定理与推论

- **阿尔文冻结定理**：高磁雷诺数时磁场与流体冻结。
- **阿尔文波**：磁化等离子体的基本波模（速度 $v_A$）。
- **磁流体平衡**：$\nabla p=\vec J\times\vec B$（托卡马克平衡，[[plasma-confinement]]）。
- **太阳发电机**：MHD 对流的自激发电机（太阳磁场）。

## 深化内容

MHD 是 [[plasma-physics]] 的流体极限，连接 [[fluid-mechanics]]、[[maxwell-equations]]；应用于 [[plasma-confinement]]（聚变平衡）、[[turbulence]]（MHD 湍流）、[[cosmology]]（太阳风、吸积盘）。延伸阅读可参考 陈骝《等离子体物理学导论》、Freidberg《Ideal Magnetohydrodynamics》、Priest《Magnetohydrodynamics of the Sun》。

## 与其他知识的联系

- 紧密相关：[[fluid-mechanics]]（流体方程）、[[plasma-physics]]（等离子体）、[[maxwell-equations]]。
- 应用：[[plasma-confinement]]（托卡马克平衡）、[[turbulence]]（MHD 湍流）、[[cosmology]]（太阳风、吸积盘等天体过程）。

## 前置知识

- [[fluid-mechanics]]、[[maxwell-equations]]、[[plasma-physics]]
