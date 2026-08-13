---
id: stellar-structure
name: 恒星结构
name_en: Stellar Structure
domain: astrophysics
aliases: [恒星内部结构]
tags: [天体物理, 恒星, 结构]
keywords: [流体静力学平衡, 质量-光度关系, 能量输运]
updated: 2026-08-13
links:
  - {id: astrophysics, weight: 5, note: 天体物理核心}
  - {id: stellar-evolution, weight: 5, note: 结构决定演化}
  - {id: nuclear-fusion, weight: 4, note: 核心能源}
  - {id: fluid-mechanics, weight: 3, note: 流体静力学平衡}
  - {id: thermodynamics, weight: 3, note: 能量输运与状态方程}
  - {id: plasma-physics, weight: 2, note: 恒星内部等离子体}
superseded_by: []
supersedes: []
---
# 恒星结构

## 概述

恒星结构由**四个一阶微分方程**（恒星结构方程）描述：流体静力学平衡、质量连续性、能量产生、能量输运，加上**状态方程**封闭系统。主序星处于流体静力学平衡——引力被压强梯度支撑，能量由核心核聚变提供并经辐射/对流输运到表面。恒星结构方程是理解恒星演化（[[stellar-evolution]]）与质量-光度关系的基础。

## 基本概念

- **流体静力学平衡**：引力与压强梯度平衡。
- **质量-光度关系**：$L\propto M^{3\sim4}$（主序）。
- **能量输运**：辐射 / 对流。
- **状态方程**：理想气体 / 简并 / 辐射压。
- **不透明度**：辐射输运的关键参数。

## 核心内容

### 基本定律 / 方程

恒星结构方程（四个）：

$$ \frac{dP}{dr}=-\frac{GM(r)\rho}{r^2},\qquad \frac{dM}{dr}=4\pi r^2\rho $$

$$ \frac{dL}{dr}=4\pi r^2\rho\varepsilon,\qquad \frac{dT}{dr}=\begin{cases}-\frac{3\kappa\rho L}{16\pi ac r^2T^3} & \text{(辐射)}\\ -\frac{\gamma-1}{\gamma}\frac{T}{P}\frac{dP}{dr} & \text{(对流)}\end{cases} $$

### 推导要点

- **静力学平衡**：引力与压强梯度力平衡（[[fluid-mechanics]]）。
- **能量输运**：辐射扩散方程（光子平均自由程 $\sim1/\kappa\rho$）。
- **状态方程**：理想气体 $P=\rho k_BT/\mu m_H$（主序恒星）。

### 重要定理与推论

- **质量-光度关系**：$L\propto M^3$（太阳附近主序）。
- **主序的性质**：核心氢聚变，$T_c\sim10^7$ K。
- **维里定理**：恒星内能 = -1/2 引力势能。
- **简并与辐射压**：白矮星简并、大质量星辐射压。

## 深化内容

恒星结构连接 [[fluid-mechanics]]（静力学）、[[thermodynamics]]（状态方程、输运）、[[nuclear-fusion]]（能源）、[[plasma-physics]]（恒星内部）。恒星结构方程数值求解（恒星演化模型）是标准工具。延伸阅读可参考 Kippenhahn《Stellar Structure and Evolution》、Carroll & Ostlie《An Introduction to Modern Astrophysics》。

## 与其他知识的联系

- 紧密相关：[[stellar-evolution]]、[[astrophysics]]、[[nuclear-fusion]]（能源）。
- 物理基础：[[fluid-mechanics]]（静力学平衡）、[[thermodynamics]]（状态方程与输运）、[[plasma-physics]]（恒星内部等离子体）。

## 前置知识

- [[fluid-mechanics]]、[[thermodynamics]]、[[nuclear-fusion]]
