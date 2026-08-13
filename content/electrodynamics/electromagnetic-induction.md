---
id: electromagnetic-induction
name: 电磁感应
name_en: Electromagnetic Induction
domain: electrodynamics
aliases: [法拉第定律, 感应电动势]
tags: [电磁学, 感应, 时变场]
keywords: [法拉第定律, 楞次定律, 互感, 自感]
updated: 2026-08-13
links:
  - {id: maxwell-equations, weight: 5, note: 法拉第定律是麦克斯韦方程组的一环}
  - {id: lorentz-force, weight: 3, note: 动生电动势的来源}
  - {id: magnetostatics, weight: 3}
  - {id: circuits, weight: 4, note: 变压器与发电机原理}
  - {id: waveguides-resonators, weight: 2}
superseded_by: [maxwell-equations]
supersedes: []
---
# 电磁感应

## 概述

电磁感应描述**时变磁通量**在回路中产生电动势的现象，由法拉第（1831）发现、楞次确定方向。其微分形式是麦克斯韦方程组中的**法拉第方程** $\nabla\times\vec E=-\partial\vec B/\partial t$——时变磁场产生有旋的**感生电场**。电磁感应是电与磁统一的直接体现，也是发电机、变压器、电动机、电感、涡流制动与电磁炉的物理基础，标志着电力时代的开端。

## 基本概念

- **磁通量**：$\Phi_B=\int\vec B\cdot d\vec S$。
- **电动势**：$\mathcal E=\oint\vec E\cdot d\vec l$。
- **感生电动势 / 动生电动势**：由时变磁场 / 导体运动引起。
- **自感 / 互感**：$L=\Phi/I$、$M=\Phi_{12}/I_1$。
- **感生电场**：非保守场，$\nabla\times\vec E_{\mathrm{ind}}\neq0$。

## 核心内容

### 基本定律 / 方程

**法拉第定律**：

$$ \mathcal E=-\frac{d\Phi_B}{dt},\qquad \nabla\times\vec E=-\frac{\partial\vec B}{\partial t} $$

**自感与互感电动势**：

$$ \mathcal E=-L\frac{dI}{dt},\qquad \mathcal E_2=-M\frac{dI_1}{dt} $$

**电感储能**：

$$ U=\frac12 LI^2 $$

### 推导要点

- **法拉第定律的微分形式**：用斯托克斯定理把 $\oint\vec E\cdot d\vec l$ 化为面积分 $\int(\nabla\times\vec E)\cdot d\vec S$，与 $\mathcal E=-\frac{d}{dt}\int\vec B\cdot d\vec S$ 比较，得 $\nabla\times\vec E=-\partial\vec B/\partial t$。
- **动生电动势**：导体棒在磁场中运动，洛伦兹力 $q\vec v\times\vec B$ 驱动电荷分离，产生 $\mathcal E=\oint(\vec v\times\vec B)\cdot d\vec l$。
- **楞次定律**：感应电流方向反抗磁通变化（能量守恒的要求，否则可无限增能）。

### 重要定理与推论

- **楞次定律**：感应电流的磁效应反抗引起它的磁通变化。
- **感生电场非保守**：$\oint\vec E\cdot d\vec l\neq0$，与静电场本质不同。
- **变压器原理**：互感使初级线圈的能量传到次级，匝数比决定变压比 $V_2/V_1=N_2/N_1$。
- **涡流**：块状导体中的感应环流，引起焦耳热（电磁炉、涡流制动）。

## 深化内容

电磁感应是**麦克斯韦方程组**法拉第方程的内容；其反向（位移电流）由麦克斯韦补全，共同预言电磁波。自感/互感是 [[circuits]] 中 $RLC$ 电路、变压器的基础；超导中的**迈斯纳效应**与磁通量子化也源于感应。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、费曼《物理学讲义》第二卷。

## 与其他知识的联系

- 紧密相关：[[maxwell-equations]]（电磁统一）、[[circuits]]（变压器/发电机/电感）、[[lorentz-force]]（动生机制）。
- 应用：电力工业、电磁炉、涡流制动、[[waveguides-resonators]]。

## 上位替代

- 完整描述归入 [[maxwell-equations]]。

## 前置知识

- [[magnetostatics]]、[[vector-calculus]]、[[lorentz-force]]
