---
id: entropy-information
name: 熵与信息
name_en: Entropy & Information
domain: statistical-mechanics
aliases: [信息熵]
tags: [统计物理, 信息, 熵]
keywords: [玻尔兹曼熵, 香农熵, 兰道尔原理]
updated: 2026-08-13
links:
  - {id: thermodynamics, weight: 5, note: 熵是热力学的核心量}
  - {id: statistical-mechanics, weight: 5, note: 玻尔兹曼熵}
  - {id: information-theory, weight: 5, note: 香农熵}
  - {id: density-matrix, weight: 4, note: 冯诺依曼熵}
  - {id: quantum-information, weight: 4}
  - {id: black-holes, weight: 2, note: 黑洞熵}
superseded_by: []
supersedes: []
---
# 熵与信息

## 概述

"熵"在三个看似无关的领域出现，却有相同的数学形式：热力学熵（克劳修斯）、统计熵（玻尔兹曼 $S=k_B\ln\Omega$）、信息熵（香农 $H=-\sum p_i\log p_i$）。这并非巧合——**玻尔兹曼熵**度量微观态数、**香农熵**度量不确定性，两者都是"缺失信息"的量化。**兰道尔原理**进一步揭示物理联系：擦除一比特信息至少耗散 $k_BT\ln2$ 的能量。量子版是**冯诺依曼熵** $S(\rho)=-\mathrm{tr}(\rho\ln\rho)$，是量子信息与量子统计的核心。

## 基本概念

- **玻尔兹曼熵**：$S=k_B\ln\Omega$。
- **香农熵**：$H=-\sum_i p_i\log p_i$（比特单位）。
- **冯诺依曼熵**：$S(\rho)=-\mathrm{tr}(\rho\ln\rho)$。
- **兰道尔原理**：擦除 1 比特 $\ge k_BT\ln2$ 的热耗散。
- **麦克斯韦妖**：利用信息"违反"第二定律的思想实验。

## 核心内容

### 基本定律 / 方程

玻尔兹曼熵与香农熵：

$$ S=k_B\ln\Omega,\qquad H=-\sum_i p_i\log p_i $$

冯诺依曼熵：

$$ S(\rho)=-\mathrm{tr}(\rho\ln\rho)=-\sum_i\lambda_i\ln\lambda_i $$

**兰道尔原理**：

$$ \Delta Q\ge k_BT\ln2\quad(\text{每比特}) $$

### 推导要点

- **香农熵的公理**：由连续性、可加性、极大性三条公理唯一确定 $H=-\sum p_i\log p_i$。
- **玻尔兹曼熵与香农熵的对应**：对等概率微观态 $p_i=1/\Omega$，$S=-k_B\sum p_i\ln p_i=k_B\ln\Omega$。
- **兰道尔原理**：擦除是把比特从"可能两种态"压到"确定一种态"，自由度减半，由第二定律推出最小耗散。

### 重要定理与推论

- **熵是缺失信息**：熵度量"我们对微观态的无知程度"。
- **麦克斯韦妖的解决**：妖获取信息需耗散能量（信息-热力学联系）。
- **黑洞熵**：贝肯斯坦-霍金熵 $S=A/4\ell_P^2$（[[black-holes]]），是熵的引力版本。
- **第二定律与信息的统一**：孤立系统熵增 = 信息丢失。

## 深化内容

熵与信息是[[information-theory]]、[[quantum-information]]、[[quantum-computing]] 的共同核心。**黑洞信息悖论**（[[black-holes]]）与全息原理把熵、信息与引力几何联系起来。延伸阅读可参考 Shannon《A Mathematical Theory of Communication》、Nielsen & Chuang《量子计算与量子信息》、Jaynes《Probability Theory》。

## 与其他知识的联系

- 紧密相关：[[thermodynamics]]、[[statistical-mechanics]]（经典熵）、[[information-theory]]（香农熵）、[[density-matrix]]（冯诺依曼熵）。
- 量子信息：[[quantum-information]]、[[quantum-computing]]。
- 引力：[[black-holes]]（黑洞熵）。

## 前置知识

- [[statistical-mechanics]]、[[information-theory]]、[[density-matrix]]
