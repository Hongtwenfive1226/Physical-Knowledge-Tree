---
id: atmospheric-physics
name: 大气物理
name_en: Atmospheric Physics
domain: geophysics
aliases: [大气动力学]
tags: [大气, 气象, 流体]
keywords: [大气环流, 对流层, 天气系统]
updated: 2026-08-13
links:
  - {id: geophysics, weight: 5, note: 地球系统分支}
  - {id: fluid-mechanics, weight: 4, note: 大气流体}
  - {id: ocean-dynamics, weight: 3, note: 海气相互作用}
  - {id: thermodynamics, weight: 3, note: 湿空气热力学}
  - {id: turbulence, weight: 3, note: 边界层湍流}
  - {id: non-inertial-frames, weight: 2, note: 科里奥利效应}
superseded_by: []
supersedes: []
---
# 大气物理

## 概述

大气物理研究大气的**组成、分层结构与动力学**。大气分层（对流层、平流层、中间层、热层）由温度廓线决定；对流层的天气系统（气旋、锋面）由**斜压不稳定**驱动；大尺度大气环流由太阳辐射差异与地球旋转（科里奥利力）共同决定。气象预报用**数值天气模式**求解大气流体方程（原始方程组）。湿空气热力学、云微物理与辐射传输是重要子领域。

## 基本概念

- **大气分层**：对流层、平流层等。
- **大气环流**：哈德莱、费雷尔、极地环流。
- **天气系统**：气旋、锋面。
- **斜压不稳定**：中纬度天气系统之源。
- **科里奥利力**：地球旋转效应（[[non-inertial-frames]]）。

## 核心内容

### 基本定律 / 方程

地转风（大尺度平衡）：

$$ \vec v_g=\frac1{\rho f}\hat z\times\nabla p $$

静力学平衡：

$$ \frac{\partial p}{\partial z}=-\rho g $$

### 推导要点

- **地转平衡**：压强梯度力与科里奥利力平衡（[[fluid-mechanics]] + [[non-inertial-frames]]）。
- **大气环流**：赤道加热、极地冷却驱动的热力环流。
- **斜压不稳定**：水平温度梯度的势能转化为气旋动能。

### 重要定理与推论

- **地转风**：大尺度风与等压线平行。
- **热成风**：水平温度梯度导致风随高度变化。
- **大气环流三圈结构**：哈德莱/费雷尔/极地环流。
- **数值天气预报**：求解原始方程组。

## 深化内容

大气物理是 [[geophysics]]、[[fluid-mechanics]]、[[thermodynamics]]（湿空气）、[[turbulence]]（边界层）的应用。延伸阅读可参考 Holton《An Introduction to Dynamic Meteorology》、Vallis《Atmospheric and Oceanic Fluid Dynamics》、Wallace & Hobbs《Atmospheric Science》。

## 与其他知识的联系

- 紧密相关：[[geophysics]]、[[fluid-mechanics]]（大气流体）。
- 关联：[[thermodynamics]]（湿空气）、[[turbulence]]（边界层）、[[non-inertial-frames]]（科里奥利力）。

## 前置知识

- [[fluid-mechanics]]、[[thermodynamics]]、[[geophysics]]
