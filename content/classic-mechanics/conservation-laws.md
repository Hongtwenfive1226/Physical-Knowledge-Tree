---
id: conservation-laws
name: 守恒定律
name_en: Conservation Laws
domain: classic-mechanics
aliases: [守恒量, 诺特定理]
tags: [力学, 守恒, 对称性]
keywords: [动量守恒, 角动量守恒, 能量守恒, 对称性, 诺特定理]
updated: 2026-08-13
links:
  - {id: newtonian-mechanics, weight: 4, note: 牛顿定律蕴含守恒律}
  - {id: group-theory, weight: 4, note: 诺特定理联系对称性与守恒}
  - {id: lagrangian-mechanics, weight: 5, note: 诺特定理在分析力学中自然呈现}
  - {id: central-force-motion, weight: 4, note: 有心力问题大量使用守恒律}
  - {id: special-relativity, weight: 3, note: 相对论下能量动量统一为四维矢量}
  - {id: quantum-mechanics, weight: 3, note: 守恒量对应量子数}
  - {id: thermodynamics, weight: 2}
superseded_by: []
supersedes: []
---
# 守恒定律

## 概述

守恒定律断言某些物理量在系统演化过程中保持不变，是物理学的最高原理之一。经典力学的三大守恒律——**动量、角动量、能量守恒**——分别对应**空间平移、旋转、时间平移**的对称性，这一深刻联系由**诺特定理**（1918）统一表述：每一个连续对称性对应一个守恒量。守恒律是求解问题的第一工具（往往可避开运动方程直接积分），并贯穿相对论、量子力学与场论。

## 基本概念

- **守恒量**：随时间不变的物理量，$\frac{dQ}{dt}=0$。
- **对称性**：使作用量（或运动方程）不变的变换。
- **连续对称 / 分立对称**：可连续参数化（平移、旋转）/ 不可（空间反演、时间反演）。
- **诺特流 / 诺特荷**：对称性对应的守恒流 $j^\mu$ 与守恒荷 $Q=\int j^0 d^3x$。

## 核心内容

### 基本定律 / 方程

三大守恒律与对应对称性：

- **动量守恒**（空间平移不变）：$\sum\vec p_i=\mathrm{const}$。
- **角动量守恒**（旋转不变）：$\vec L=\sum\vec r_i\times\vec p_i=\mathrm{const}$。
- **能量守恒**（时间平移不变）：$E=T+V=\mathrm{const}$。

**诺特定理**：作用量在 $\delta q_i=\varepsilon f_i(q,t)$ 下不变，则

$$ Q=\sum_i\frac{\partial L}{\partial\dot q_i}\,f_i - \Lambda $$

守恒（$\Lambda$ 与作用量的表面项相关）。

### 推导要点

- **循环坐标情形**：若 $L$ 不显含 $q_k$，则欧拉-拉格朗日方程给出 $\frac{d}{dt}\frac{\partial L}{\partial\dot q_k}=0$，即 $p_k$ 守恒。
- **诺特定理一般推导**：设 $q_i\to q_i+\varepsilon f_i$ 使 $\delta L=\varepsilon\frac{d\Lambda}{dt}$，计算

$$ \delta L=\sum_i\Big(\frac{\partial L}{\partial q_i}f_i+\frac{\partial L}{\partial\dot q_i}\dot f_i\Big)\varepsilon $$

用欧拉-拉格朗日方程把 $\frac{\partial L}{\partial q_i}$ 换成 $\frac{d}{dt}\frac{\partial L}{\partial\dot q_i}$，整理得 $\frac{d}{dt}\big(\sum_i\frac{\partial L}{\partial\dot q_i}f_i-\Lambda\big)=0$。
- **牛顿视角**：第三定律使内力成对抵消，直接得到动量/角动量守恒（见 [[newtonian-mechanics]]）。

### 重要定理与推论

- **诺特定理**：连续对称性 ⟺ 守恒律，是[[group-theory]] 与物理联系的枢纽。
- **对称性破缺**：系统状态可能不保持拉格朗日量的对称性（自发对称破缺，见 [[spontaneous-symmetry-breaking]]）。
- **守恒量与可积性**：$n$ 自由度系统若有 $n$ 个独立对合守恒量则完全可积（刘维尔-阿诺德定理）。

## 深化内容

守恒律的现代意义远超经典力学：在**相对论**中能量与动量合并为四维矢量 $p^\mu$（洛伦兹协变守恒）；在**量子力学**中守恒量对应与哈密顿量对易的算符，给出好量子数与选择定则（维格纳-埃卡特定理）；在**场论**中诺特定理给出连续性方程与守恒荷（电荷、弱荷、色荷）。规范对称性、拓扑荷等概念也源于对称性分析。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Hill《Symmetry and Conservation Laws》。

## 与其他知识的联系

- 紧密相关：[[group-theory]]（对称性语言）、[[lagrangian-mechanics]]（诺特定理）、[[central-force-motion]]（开普勒问题的守恒律解）。
- 推广：[[special-relativity]]（能量动量四矢量）、[[quantum-mechanics]]（守恒量对应量子数）、[[spontaneous-symmetry-breaking]]。
- 基础：[[newtonian-mechanics]]。

## 前置知识

- [[newtonian-mechanics]]、[[lagrangian-mechanics]]
