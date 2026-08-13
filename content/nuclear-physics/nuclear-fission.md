---
id: nuclear-fission
name: 核裂变
name_en: Nuclear Fission
domain: nuclear-physics
aliases: [裂变, 原子核裂变]
tags: [核物理, 裂变, 核能]
keywords: [链式反应, 裂变产物, 临界质量]
updated: 2026-08-13
links:
  - {id: nuclear-reactions, weight: 5, note: 裂变是一类核反应}
  - {id: nuclear-physics, weight: 4}
  - {id: nuclear-structure, weight: 3, note: 液滴模型解释裂变}
  - {id: nuclear-decay, weight: 3, note: 裂变产物继续衰变}
superseded_by: []
supersedes: []
---
# 核裂变

## 概述

核裂变是重核（如 $^{235}$U）吸收中子后**分裂为两个中等质量核**并放出能量与中子的过程，每次裂变释放约 200 MeV 能量与数个中子。释放的中子可引发更多裂变，形成**链式反应**（需 $\nu>1$）。**临界质量**是维持链式反应的最小燃料质量。裂变是核电站与核武器的能量来源，也是人类首次大规模利用核能的途径。

## 基本概念

- **裂变产物**：分裂成的中等质量核。
- **链式反应**：中子引发的自持裂变。
- **临界质量 / 临界态**：链式反应恰好自持的条件。
- **裂变能**：约 200 MeV/裂变。
- **慢化剂 / 控制棒**：反应堆的关键组件。

## 核心内容

### 基本定律 / 方程

裂变反应：

$$ {}^{235}\mathrm{U}+n\to{}^{236}\mathrm{U}^*\to\text{裂变产物}+\nu n+\sim200\,\mathrm{MeV} $$

链式反应条件（中子倍增因子 $k$）：

$$ k=\frac{\text{下一代中子数}}{\text{上一代中子数}},\qquad k\ge1\ \text{自持} $$

### 推导要点

- **裂变的能量来源**：重核结合能较低（$B/A$ 曲线），分裂成中等核释放能量（[[nuclear-models]] 液滴模型的库仑-表面竞争）。
- **链式反应**：$\nu\sim2.5$ 个中子/裂变，若至少一个引发下一裂变则自持。
- **临界质量**：使中子泄漏与吸收不足以阻止链式反应的质量。

### 重要定理与推论

- **链式反应与临界**：$k=1$ 临界、$k>1$ 超临界（爆炸）、$k<1$ 次临界。
- **裂变产物放射性**：产物继续 [[nuclear-decay]]（β 衰变）。
- **核电站**：受控链式反应（压水堆、沸水堆）。
- **核武器**：非受控超临界链式反应。

## 深化内容

核裂变是 [[nuclear-reactions]] 的重要应用，其理论基于液滴模型（[[nuclear-models]]）；裂变产物衰变（[[nuclear-decay]]）与核废料处理是重要问题。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Lilley《Nuclear Physics》、Bodansky《Nuclear Energy》。

## 与其他知识的联系

- 紧密相关：[[nuclear-reactions]]、[[nuclear-physics]]。
- 理论基础：液滴模型（[[nuclear-models]]）解释重核不稳定性；裂变产物经 [[nuclear-decay]] 进一步衰变。
- 应用：核电站与核武器等核能利用。

## 前置知识

- [[nuclear-reactions]]、[[nuclear-models]]、[[nuclear-decay]]
