---
id: liquid-crystals
name: 液晶
name_en: Liquid Crystals
domain: soft-matter
aliases: [液晶相]
tags: [软物质, 液晶, 序]
keywords: [向列相, 近晶相, 取向序]
updated: 2026-08-13
links:
  - {id: soft-matter, weight: 5, note: 软物质核心}
  - {id: phase-transitions, weight: 4, note: 相变与序}
  - {id: optics, weight: 3, note: 双折射与显示}
  - {id: condensed-matter-physics, weight: 2, note: 取向序}
superseded_by: []
supersedes: []
---
# 液晶

## 概述

液晶是介于**固态晶体与各向同性液体**之间的相：分子有**取向序**（长轴方向有序）但无（或弱）位置序。主要相：**向列相**（仅取向序）、**近晶相**（取向 + 层状位置序）、**胆甾相**（螺旋取向）。液晶对电场、温度响应灵敏，其**双折射**性质是平板显示（LCD）的物理基础。向列-各向同性相变可用取向序参量与朗道理论描述。

## 基本概念

- **取向序参量**：$S=\langle\frac32\cos^2\theta-\frac12\rangle$。
- **向列相 / 近晶相 / 胆甾相**：三种液晶相。
- **指向矢** $\hat n$：平均分子取向。
- **双折射**：光学的各向异性。
- **拓扑缺陷**：液晶中的缺陷（disclination）。

## 核心内容

### 基本定律 / 方程

取向序参量：

$$ S=\Big\langle\frac32\cos^2\theta-\frac12\Big\rangle $$

向列相自由能（朗道-德让理论）：

$$ F=\frac12a(T-T^*)S^2-\frac13bS^3+\frac14cS^4 $$

### 推导要点

- **序参量**：$S$ 度量取向有序（$S=0$ 各向同性、$S=1$ 完全有序）。
- **朗道理论**：自由能对 $S$ 展开（含 $S^3$ 项，导致一级相变）。
- **双折射**：液晶的各向异性折射率（[[optics]]）。

### 重要定理与推论

- **向列-各向同性相变**：一级相变（$S^3$ 项）。
- **液晶显示（LCD）**：电场改变取向、调制光（[[optics]]）。
- **拓扑缺陷**：液晶的向错（disclination）。
- **液晶的软弹性**：对微扰的大响应。

## 深化内容

液晶是 [[soft-matter]]、[[phase-transitions]]（序参量、朗道理论）、[[optics]]（双折射、显示）的交汇；拓扑缺陷连接 [[condensed-matter-physics]]。延伸阅读可参考 de Gennes & Prost《The Physics of Liquid Crystals》、Chaikin & Lubensky《Principles of Condensed Matter Physics》、Chandrasekhar《Liquid Crystals》。

## 与其他知识的联系

- 紧密相关：[[soft-matter]]、[[phase-transitions]]（序参量与相变）。
- 关联：[[optics]]（双折射、显示）、[[condensed-matter-physics]]（取向序与缺陷）。

## 前置知识

- [[phase-transitions]]、[[soft-matter]]、[[optics]]
