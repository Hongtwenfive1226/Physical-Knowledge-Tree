---
id: nuclear-fusion
name: 核聚变
name_en: Nuclear Fusion
domain: nuclear-physics
aliases: [聚变, 热核聚变]
tags: [核物理, 聚变, 能源]
keywords: [氘氚聚变, 托卡马克, 恒星能量]
updated: 2026-08-13
links:
  - {id: nuclear-reactions, weight: 5, note: 聚变是一类核反应}
  - {id: nuclear-physics, weight: 4}
  - {id: plasma-physics, weight: 4, note: 聚变燃料是高温等离子体}
  - {id: plasma-confinement, weight: 5, note: 磁约束实现聚变}
  - {id: cosmology, weight: 2, note: 恒星能量来源}
  - {id: quantum-tunneling, weight: 3, note: 库仑势垒隧穿}
  - {id: nuclear-structure, weight: 2}
superseded_by: []
supersedes: []
---
# 核聚变

## 概述

核聚变是**轻核结合成较重核**并释放能量的过程，是恒星能量的来源，也是受控聚变发电的目标。氘-氚聚变反应放出 17.6 MeV 能量。轻核带正电荷，需克服**库仑势垒**（辅以量子隧穿），因此要求约 $10^8$ K 的高温，燃料处于**等离子体**态。**劳森判据** $n\tau_E$ 给出自持聚变（点火）条件。受控聚变的主要途径是磁约束（托卡马克，[[plasma-confinement]]）与惯性约束。

## 基本概念

- **氘-氚（D-T）聚变**：能量最易释放的反应。
- **库仑势垒 / 隧穿**：聚变需克服的障碍与机制。
- **等离子体**：聚变燃料的高温态。
- **劳森判据**：$n\tau_E$ 自持条件。
- **磁约束 / 惯性约束**：两种聚变途径。

## 核心内容

### 基本定律 / 方程

氘-氚聚变：

$$ {}^{2}\mathrm H+{}^{3}\mathrm H\to{}^{4}\mathrm{He}+n+17.6\,\mathrm{MeV} $$

**劳森判据**（D-T 自持）：

$$ n\tau_E>10^{20}\,\mathrm{s\,m^{-3}} $$

（$n$ 为密度、$\tau_E$ 为能量约束时间）。

### 推导要点

- **聚变能量**：由 $B/A$ 曲线，轻核结合能随 $A$ 增大而增大，聚变释放能量（[[nuclear-reactions]]）。
- **隧穿**：高温下质子以一定概率隧穿库仑势垒（[[quantum-tunneling]]）。
- **劳森判据**：聚变功率超过损失功率的自持条件。

### 重要定理与推论

- **恒星能量**：质子-质子链与 CNO 循环（[[cosmology]]、[[astrophysics]]）。
- **聚变比裂变更高效**：单位质量能量更大、产物更清洁。
- **磁约束托卡马克**：ITER 等受控聚变实验（[[plasma-confinement]]）。
- **惯性约束**：激光聚变（NIF）。

## 深化内容

核聚变连接 [[plasma-physics]]（高温等离子体）、[[plasma-confinement]]（磁约束）、[[quantum-tunneling]]（势垒隧穿）与 [[cosmology]]（恒星核合成）。受控聚变是能源领域的长期目标。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Freidberg《Plasma Physics and Fusion Energy》、陈骝《等离子体物理学导论》。

## 与其他知识的联系

- 紧密相关：[[nuclear-reactions]]、[[plasma-physics]]（高温燃料）、[[plasma-confinement]]（磁约束托卡马克）。
- 机制：[[quantum-tunneling]]（库仑势垒）、[[cosmology]]（恒星核合成）。

## 前置知识

- [[nuclear-reactions]]、[[plasma-physics]]、[[quantum-tunneling]]
