---
id: crystallography
name: 晶体学
name_en: Crystallography
domain: condensed-matter
aliases: [晶体结构, 空间群]
tags: [凝聚态, 晶体, 对称性]
keywords: [布拉维格子, 空间群, 倒格子, 布拉格衍射]
updated: 2026-08-13
links:
  - {id: condensed-matter-physics, weight: 5, note: 晶体是凝聚态结构基础}
  - {id: group-theory, weight: 5, note: 空间群对称性}
  - {id: band-theory, weight: 4, note: 周期性结构}
  - {id: electromagnetic-waves, weight: 2, note: X射线衍射}
  - {id: phonons, weight: 3, note: 晶格动力学}
  - {id: topology, weight: 2}
superseded_by: []
supersedes: []
---
# 晶体学

## 概述

晶体学研究原子/分子**周期性排列**的晶体结构，是固体物理与材料科学的几何基础。晶体 = **布拉维格子** + **基元**，其对称性由**空间群**（230 种）完整分类。**倒格子**（动量空间的周期结构）与**布拉格条件**使 X 射线衍射成为测定晶体结构的标准工具。晶体学为 [[band-theory]]（能带）、[[phonons]]（声子）与拓扑物态提供周期结构背景。

## 基本概念

- **布拉维格子**：14 种周期点阵（7 晶系）。
- **原胞 / 单胞**：最小重复单元 / 常规重复单元。
- **空间群**：晶体对称操作群（230 种）。
- **倒格子**：动量空间的周期结构。
- **米勒指数** $(hkl)$：晶面标记。

## 核心内容

### 基本定律 / 方程

**布拉格条件**（X 射线衍射）：

$$ 2d\sin\theta=n\lambda $$

倒格子关系：

$$ \vec a_i\cdot\vec b_j=2\pi\delta_{ij},\qquad \vec b_1=2\pi\frac{\vec a_2\times\vec a_3}{\vec a_1\cdot(\vec a_2\times\vec a_3)} $$

### 推导要点

- **布拉格条件**：相邻晶面反射的光程差 $2d\sin\theta$ 为波长整数倍时相长干涉。
- **倒格子**：对正格子做傅里叶变换，周期结构在动量空间对应倒格点。
- **空间群分类**：平移（格子）+ 点群（旋转/反射）+ 螺旋轴/滑移面组合成 230 种空间群（[[group-theory]]）。

### 重要定理与推论

- **劳厄条件 / 布拉格条件**：衍射峰位置给出晶面间距。
- **平移对称性**：周期结构决定能带与声子的 $k$ 空间周期（[[band-theory]]、[[phonons]]）。
- **对称性与物理性质**：晶体的点群决定张量性质（光学、弹性、压电）。
- **结构测定**：X 射线/中子/电子衍射测定晶体结构。

## 深化内容

晶体学是 [[band-theory]]、[[phonons]]、[[topological-materials]] 的结构基础；准晶（非周期但有序）与拓扑晶体学是前沿。延伸阅读可参考 Ashcroft & Mermin《Solid State Physics》、Kittel《固体物理导论》、Glazer《The Structures of Crystals》。

## 与其他知识的联系

- 紧密相关：[[group-theory]]（空间群）、[[condensed-matter-physics]]、[[band-theory]]/[[phonons]]（周期结构）。
- 技术：X 射线衍射（[[electromagnetic-waves]]）。

## 前置知识

- [[group-theory]]、[[linear-algebra]]、[[condensed-matter-physics]]
