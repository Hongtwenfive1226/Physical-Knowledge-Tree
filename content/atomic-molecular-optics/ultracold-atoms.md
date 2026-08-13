---
id: ultracold-atoms
name: 超冷原子
name_en: Ultracold Atoms
domain: atomic-molecular-optics
aliases: [超冷原子气体]
tags: [原子, 超冷, 量子模拟]
keywords: [玻色-爱因斯坦凝聚, 光晶格, 量子模拟]
updated: 2026-08-13
links:
  - {id: atomic-molecular-optics, weight: 5, note: AMO 前沿}
  - {id: atomic-physics, weight: 3, note: 超冷原子属原子物理应用}
  - {id: laser-cooling, weight: 5, note: 冷却手段}
  - {id: bose-einstein-condensation, weight: 5, note: 玻色凝聚}
  - {id: quantum-mechanics, weight: 4, note: 量子相干}
  - {id: quantum-computing, weight: 2, note: 冷原子量子模拟}
superseded_by: []
supersedes: []
---
# 超冷原子

## 概述

超冷原子是温度达**纳开尔文**量级（经 [[laser-cooling]] + 蒸发冷却）的原子气体，展现出宏观量子相干性。1995 年首次实现 [[bose-einstein-condensation]]（铷、钠、锂，2001 诺奖）。**光晶格**（驻波激光形成的周期势）中的超冷原子可模拟强关联量子多体系统（玻色-哈伯德模型），是**量子模拟**的重要平台；也用于原子干涉仪、原子钟与精密测量。

## 基本概念

- **超冷原子气体**：纳开尔文原子云。
- **光晶格**：驻波激光的周期势。
- **玻色-哈伯德模型**：光晶格中超冷原子的理论模型。
- **量子模拟**：用量子系统模拟另一量子系统。
- **原子干涉仪**：基于物质波干涉的惯性/重力测量。

## 核心内容

### 基本定律 / 方程

光晶格中的玻色-哈伯德模型：

$$ H=-J\sum_{\langle ij\rangle}a_i^\dagger a_j+\frac{U}{2}\sum_i n_i(n_i-1) $$

（$J$ 为隧穿、$U$ 为格点相互作用。）

### 推导要点

- **冷却到 BEC**：激光冷却 + 蒸发冷却达到 [[bose-einstein-condensation]]。
- **光晶格**：驻波激光的周期势，原子在其中隧穿。
- **玻色-哈伯德模型**：光晶格中超冷玻色子的紧束缚模型（[[second-quantization]]）。

### 重要定理与推论

- **玻色-爱因斯坦凝聚**：宏观占据基态（[[bose-einstein-condensation]]）。
- **超流-莫特绝缘体相变**：光晶格中的量子相变。
- **量子模拟**：模拟强关联系统、拓扑模型。
- **精密测量**：原子干涉仪、原子钟。

## 深化内容

超冷原子是 [[quantum-computing]]（冷原子平台）、[[quantum-information]]、精密测量的前沿；连接 [[laser-cooling]]、[[bose-einstein-condensation]]、[[second-quantization]]。延伸阅读可参考 Pethick & Smith《Bose-Einstein Condensation in Dilute Gases》、Bloch《Ultracold quantum gases in optical lattices》、Lewenstein《Ultracold Atoms in Optical Lattices》。

## 与其他知识的联系

- 紧密相关：[[laser-cooling]]（冷却）、[[bose-einstein-condensation]]（凝聚）、[[atomic-molecular-optics]]。
- 应用：[[quantum-computing]]（量子模拟）、精密测量、[[quantum-information]]。

## 前置知识

- [[laser-cooling]]、[[bose-einstein-condensation]]、[[second-quantization]]
