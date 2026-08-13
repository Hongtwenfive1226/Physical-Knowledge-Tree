---
id: plasma-confinement
name: 磁约束聚变
name_en: Magnetic Confinement Fusion
domain: plasma-physics
aliases: [托卡马克, 磁约束]
tags: [等离子体, 聚变, 约束]
keywords: [托卡马克, 磁场约束, 劳森判据]
updated: 2026-08-13
links:
  - {id: nuclear-fusion, weight: 5, note: 受控聚变的实现途径}
  - {id: magnetohydrodynamics, weight: 4, note: 平衡与稳定性}
  - {id: plasma-physics, weight: 4, note: 等离子体基础}
  - {id: plasma-oscillations, weight: 2, note: 加热与波}
superseded_by: []
supersedes: []
---
# 磁约束聚变

## 概述

磁约束聚变用**磁场约束高温等离子体**以实现自持核聚变（[[nuclear-fusion]]），是受控聚变发电的主要途径。主要装置是**托卡马克**（环形装置）：环向磁场 + 等离子体电流产生的极向磁场形成**闭合螺旋磁面**，把高温等离子体约束在环形区域。聚变条件由**劳森判据**给出；目标是 $Q>1$（输出能量超过输入）。ITER 是国际合作托卡马克实验堆。

## 基本概念

- **托卡马克**：环形磁约束装置。
- **闭合磁面**：磁场线的环形缠绕。
- **劳森判据**：$nT\tau_E$ 自持条件。
- **能量增益因子** $Q$：聚变功率/加热功率。
- **等离子体电流 / 纵场**：托卡马克的两大磁场。

## 核心内容

### 基本定律 / 方程

劳森判据（D-T）：

$$ nT\tau_E>3\times10^{21}\,\mathrm{keV\,s\,m^{-3}} $$

磁流体平衡：

$$ \nabla p=\vec J\times\vec B $$

### 推导要点

- **磁约束原理**：带电粒子绕磁力线回旋（[[lorentz-force]]），磁场约束等离子体。
- **托卡马克磁场**：环向场约束 + 极向场（等离子体电流产生）形成螺旋磁面。
- **劳森判据**：聚变功率与损失功率平衡的自持条件。

### 重要定理与推论

- **磁约束**：闭合磁面约束等离子体。
- **劳森判据**：聚变自持的密度-温度-约束时间条件。
- **等离子体加热**：欧姆加热、中性束、射频（[[plasma-oscillations]] 相关的波加热）。
- **MHD 稳定性**：托卡马克的平衡与稳定性（[[magnetohydrodynamics]]）。

## 深化内容

磁约束聚变是 [[nuclear-fusion]]、[[magnetohydrodynamics]]、[[plasma-physics]] 的综合应用；ITER、托卡马克的仿星器（替代方案）是前沿。惯性约束（激光聚变，NIF）是另一途径。延伸阅读可参考 Freidberg《Plasma Physics and Fusion Energy》、Wesson《Tokamaks》、陈骝《等离子体物理学导论》。

## 与其他知识的联系

- 紧密相关：[[nuclear-fusion]]（目标）、[[magnetohydrodynamics]]（平衡/稳定性）、[[plasma-physics]]（基础）。
- 关联：[[plasma-oscillations]]（射频加热）。

## 前置知识

- [[plasma-physics]]、[[magnetohydrodynamics]]、[[nuclear-fusion]]
