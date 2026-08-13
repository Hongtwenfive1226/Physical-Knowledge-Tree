---
id: geophysics
name: 地球与大气物理
name_en: Geophysics and Atmospheric Physics
domain: geophysics
aliases: [地球物理, 大气物理]
tags: [地球物理, 大气, 海洋, 气候]
keywords: [大气, 海洋, 气候, 地球系统]
updated: 2026-08-13
links:
  - {id: atmospheric-physics, weight: 5, note: 大气物理}
  - {id: ocean-dynamics, weight: 4, note: 海洋动力学}
  - {id: climate-physics, weight: 4, note: 气候物理}
  - {id: fluid-mechanics, weight: 5, note: 流体力学基础}
  - {id: turbulence, weight: 3, note: 大气海洋湍流}
  - {id: thermodynamics, weight: 3, note: 辐射与热平衡}
superseded_by: []
supersedes: []
pos: {x: -60, y: 40, z: 0}
---
# 地球与大气物理

## 概述

地球与大气物理研究**地球系统**的物理过程：大气动力学、海洋环流、气候系统与固体地球。地球系统是一个**旋转球面上的强迫耗散流体系统**，能量输入来自太阳辐射，遵循 [[fluid-mechanics]] 与 [[thermodynamics]]。核心主题：大气环流（哈德莱环流、急流）、海洋温盐环流、辐射平衡与气候反馈。这是理解气候变化、天气预报与海洋环流的物理基础。

## 基本概念

- **大气 / 海洋 / 气候**：地球系统的三个子系统。
- **大气环流 / 海洋环流**：大尺度运动。
- **辐射平衡**：太阳辐射输入与地球辐射输出。
- **气候反馈**：水汽、冰反照率、云反馈。
- **科里奥利力**：旋转地球的效应（[[non-inertial-frames]]）。

## 核心内容

### 基本定律 / 方程

行星辐射平衡（[[climate-physics]]）：

$$ S_0(1-\alpha)=4\sigma T_{\mathrm{eff}}^4 $$

地转平衡（大尺度环流）：

$$ f\hat z\times\vec v=-\frac1{\rho}\nabla p $$

（$f=2\Omega\sin\varphi$ 为科里奥利参数。）

### 推导要点

- **大气/海洋流体**：旋转球面上的流体运动（[[fluid-mechanics]] + [[non-inertial-frames]]）。
- **辐射平衡**：太阳辐射与地球辐射的平衡（[[blackbody-radiation]]）。
- **地转平衡**：压强梯度力与科里奥利力平衡。

### 重要定理与推论

- **大气环流**：哈德莱环流、费雷尔环流、急流（[[atmospheric-physics]]）。
- **海洋环流**：温盐环流、风生环流（[[ocean-dynamics]]）。
- **温室效应**：大气红外吸收（[[climate-physics]]）。
- **气候反馈**：决定气候敏感度。

## 深化内容

地球与大气物理是 [[fluid-mechanics]]、[[thermodynamics]]、[[turbulence]] 的应用，与 [[atmospheric-physics]]、[[ocean-dynamics]]、[[climate-physics]] 组成框架。延伸阅读可参考 Vallis《Atmospheric and Oceanic Fluid Dynamics》、Holton《An Introduction to Dynamic Meteorology》、Pierrehumbert《Principles of Planetary Climate》。

## 与其他知识的联系

- 紧密相关：[[atmospheric-physics]]、[[ocean-dynamics]]、[[climate-physics]]、[[fluid-mechanics]]。
- 基础：[[turbulence]]（湍流）、[[thermodynamics]]（辐射平衡）、[[non-inertial-frames]]（科里奥利力）。

## 前置知识

- [[fluid-mechanics]]、[[thermodynamics]]、[[non-inertial-frames]]
