---
id: molecular-physics
name: 分子物理
name_en: Molecular Physics
domain: atomic-molecular-optics
aliases: [分子光谱]
tags: [分子, 能级, 光谱]
keywords: [玻恩-奥本海默近似, 振动能级, 转动能级]
updated: 2026-08-13
links:
  - {id: atomic-molecular-optics, weight: 5, note: AMO 基础}
  - {id: atomic-physics, weight: 4, note: 由原子组成分子}
  - {id: quantum-mechanics, weight: 5, note: 理论基础}
  - {id: molecular-biophysics, weight: 3, note: 生物大分子}
  - {id: statistical-mechanics, weight: 2, note: 分子统计}
superseded_by: []
supersedes: []
---
# 分子物理

## 概述

分子物理研究分子的**结构、能级与光谱**。核心近似是**玻恩-奥本海默近似**：因电子远轻于核，电子运动与核运动可分离（电子绝热跟随核）。分子能级分解为电子、振动、转动三部分，能量尺度依次递减。振动（红外）与转动（微波）能级反映核骨架，电子跃迁在紫外/可见光。分子光谱是化学分析、遥感、天体分子探测与激光化学的工具。

## 基本概念

- **玻恩-奥本海默近似**：电子-核运动分离。
- **振动能级**：$E_v=\hbar\omega(v+1/2)$。
- **转动能级**：$E_J=BJ(J+1)$。
- **电子能级**：分子轨道。
- **振转光谱**：振动带中的转动结构。

## 核心内容

### 基本定律 / 方程

分子能级分解：

$$ E=E_{\mathrm{电子}}+E_{\mathrm{振动}}+E_{\mathrm{转动}} $$

刚性转子转动能级与振动能级：

$$ E_J=\frac{\hbar^2}{2I}J(J+1),\qquad E_v=\hbar\omega\Big(v+\frac12\Big) $$

### 推导要点

- **玻恩-奥本海默近似**：电子质量 $\ll$ 核质量，绝热分离电子与核运动。
- **刚性转子**：双原子分子的转动（$I$ 为转动惯量）。
- **简谐振动**：核间势的二次近似（[[vibration-theory]]）。

### 重要定理与推论

- **电子-振动-转动分离**：分子能级的三级结构。
- **分子光谱**：振动（红外）、转动（微波）、电子（紫外/可见）。
- **选择定则**：$\Delta J=\pm1$（转动）、$\Delta v=\pm1$（谐振动）。
- **分子结构测定**：由转动光谱得键长（转动惯量）。

## 深化内容

分子物理连接 [[atomic-physics]]（原子组成分子）、[[quantum-mechanics]]（玻恩-奥本海默）、[[molecular-biophysics]]（生物大分子）、[[statistical-mechanics]]（分子配分函数）。延伸阅读可参考 Atkins & Friedman《Molecular Quantum Mechanics》、Demtröder《Molecular Physics》、Bernath《Spectra of Atoms and Molecules》。

## 与其他知识的联系

- 紧密相关：[[atomic-physics]]（原子组成分子）、[[quantum-mechanics]]（玻恩-奥本海默近似）。
- 关联：[[molecular-biophysics]]（生物大分子）、[[statistical-mechanics]]（分子配分函数）。

## 前置知识

- [[quantum-mechanics]]、[[atomic-physics]]、[[vibration-theory]]
