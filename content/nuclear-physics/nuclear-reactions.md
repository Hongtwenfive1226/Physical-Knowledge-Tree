---
id: nuclear-reactions
name: 核反应
name_en: Nuclear Reactions
domain: nuclear-physics
aliases: [核反应过程]
tags: [核物理, 反应, 截面]
keywords: [反应截面, 反应能, 复合核]
updated: 2026-08-13
links:
  - {id: nuclear-physics, weight: 5, note: 核心过程}
  - {id: scattering-theory, weight: 4, note: 散射与截面}
  - {id: nuclear-fission, weight: 4, note: 裂变是核反应}
  - {id: nuclear-fusion, weight: 4, note: 聚变是核反应}
  - {id: nuclear-structure, weight: 3}
  - {id: standard-model, weight: 2}
superseded_by: []
supersedes: []
---
# 核反应

## 概述

核反应是核子或原子核与靶核碰撞引发的核转变，一般形式 $a+A\to B+b$（或 $A(a,b)B$）。反应由**反应能 $Q$ 值**表征（$Q>0$ 放能、$Q<0$ 吸能），定量描述用**截面** $\sigma$。主要机制：**复合核模型**（入射粒子被吸收形成复合核后衰变）、**直接反应**（单次碰撞）、**共振反应**。核反应是 [[nuclear-fission]] 与 [[nuclear-fusion]] 的共同框架，也是核合成的途径。

## 基本概念

- **反应能（Q 值）**：$Q=(m_a+m_A-m_B-m_b)c^2$。
- **截面** $\sigma$：反应概率（面积量纲）。
- **复合核**：中间态的激发核。
- **共振**：截面在特定能量的峰。
- **守恒律**：能量、动量、电荷、核子数守恒。

## 核心内容

### 基本定律 / 方程

反应能与截面：

$$ Q=(m_a+m_A-m_B-m_b)c^2,\qquad \sigma=\frac{\text{反应率}}{\text{入射通量}} $$

**布莱特-维格纳共振**：

$$ \sigma(E)\propto\frac{1}{(E-E_0)^2+\Gamma^2/4} $$

### 推导要点

- **Q 值**：由质能关系 $E=mc^2$，反应前后质量差转化为动能。
- **复合核**：入射粒子与靶核合并为激发复合核，再衰变（玻尔模型）。
- **共振**：复合核激发态对应截面峰。

### 重要定理与推论

- **核子数、电荷守恒**：反应前后 $A$、$Z$ 守恒。
- **截面与反应机制**：复合核、直接、共振三种机制。
- **卢瑟福散射**：$\alpha$ 粒子散射（[[scattering-theory]] 的应用）。
- **核合成**：恒星中的核反应（[[nuclear-fusion]]、[[cosmology]]）。

## 深化内容

核反应是 [[nuclear-fission]]、[[nuclear-fusion]]、核合成的框架，与 [[scattering-theory]]（截面计算）直接相关。重离子反应、散裂反应是前沿。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Lilley《Nuclear Physics》、Satchler《Introduction to Nuclear Reactions》。

## 与其他知识的联系

- 紧密相关：[[nuclear-physics]]、[[scattering-theory]]（截面与散射振幅）。
- 关联：[[nuclear-fission]]/[[nuclear-fusion]]（两类最重要的反应）、[[nuclear-structure]]。

## 前置知识

- [[nuclear-physics]]、[[scattering-theory]]、[[quantum-mechanics]]
