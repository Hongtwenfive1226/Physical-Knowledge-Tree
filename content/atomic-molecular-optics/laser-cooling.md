---
id: laser-cooling
name: 激光冷却
name_en: Laser Cooling
domain: atomic-molecular-optics
aliases: [多普勒冷却]
tags: [原子, 冷却, 激光]
keywords: [多普勒冷却, 磁光阱, 光学黏胶]
updated: 2026-08-13
links:
  - {id: atomic-molecular-optics, weight: 5, note: AMO 核心技术}
  - {id: ultracold-atoms, weight: 5, note: 冷却到超低温}
  - {id: lasers, weight: 4, note: 工具}
  - {id: quantum-optics, weight: 4, note: 光子动量转移}
  - {id: atomic-physics, weight: 3, note: 能级与跃迁}
  - {id: quantum-mechanics, weight: 3}
superseded_by: []
supersedes: []
---
# 激光冷却

## 概述

激光冷却利用**光子动量转移**减速原子：原子吸收迎面光子获得反冲动量，随后向各向同性自发辐射（净动量变化为零），净效应是持续减速（散射力/辐射压力）。**多普勒冷却**利用多普勒效应使迎面光子的吸收概率更大，冷却极限为**多普勒温度** $T_D=\hbar\Gamma/2k_B$（铷约 100 μK）。**磁光阱（MOT）**结合磁场梯度与圆偏振光实现三维冷却与俘获。激光冷却使原子达到微开尔文量级，是 [[ultracold-atoms]] 与玻色-爱因斯坦凝聚的前提（1997 诺奖）。

## 基本概念

- **散射力 / 辐射压力**：光子反冲动量传递。
- **多普勒冷却**：利用多普勒效应选择性吸收。
- **多普勒温度** $T_D=\hbar\Gamma/2k_B$：冷却极限。
- **磁光阱（MOT）**：磁场 + 光的三维俘获。
- **蒸发冷却**：进一步冷却到纳开尔文。

## 核心内容

### 基本定律 / 方程

多普勒冷却极限温度：

$$ T_D=\frac{\hbar\Gamma}{2k_B} $$

（$\Gamma$ 为激发态自然线宽。）

### 推导要点

- **散射力**：每吸收-发射一个光子，原子获得反冲动量 $\hbar k$；吸收定向、发射各向同性，净减速。
- **多普勒冷却**：原子迎着光运动时多普勒频移使吸收更有效，产生速度依赖的减速力。
- **冷却极限**：冷却与反冲加热平衡，给出 $T_D=\hbar\Gamma/2k_B$。

### 重要定理与推论

- **多普勒冷却**：达到微开尔文量级。
- **磁光阱**：三维冷却 + 俘获。
- **亚多普勒冷却**：Sisyphus 冷却等达到低于 $T_D$（反冲极限）。
- **为 BEC 铺路**：激光冷却 + 蒸发冷却实现 [[ultracold-atoms]]。

## 深化内容

激光冷却连接 [[quantum-optics]]（光子动量）、[[atomic-physics]]（能级与跃迁）、[[lasers]]（工具）；是 [[ultracold-atoms]] 与 [[bose-einstein-condensation]] 的前提。延伸阅读可参考 Metcalf & van der Straten《Laser Cooling and Trapping》、Foot《Atomic Physics》、Phillips《Laser cooling and trapping of neutral atoms》。

## 与其他知识的联系

- 紧密相关：[[ultracold-atoms]]、[[atomic-molecular-optics]]、[[quantum-optics]]（光子动量）。
- 工具：[[lasers]]、[[atomic-physics]]（能级选择）、[[quantum-mechanics]]。

## 前置知识

- [[atomic-physics]]、[[quantum-optics]]、[[lasers]]
