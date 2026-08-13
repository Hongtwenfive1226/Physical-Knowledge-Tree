---
id: polymers
name: 聚合物物理
name_en: Polymer Physics
domain: soft-matter
aliases: [高分子物理]
tags: [软物质, 聚合物, 高分子]
keywords: [随机行走, 熵弹性, 玻璃化转变]
updated: 2026-08-13
links:
  - {id: soft-matter, weight: 5, note: 软物质核心}
  - {id: statistical-mechanics, weight: 5, note: 构象统计}
  - {id: phase-transitions, weight: 2, note: 玻璃化与相分离}
  - {id: probability-theory, weight: 3, note: 随机行走模型}
superseded_by: []
supersedes: []
---
# 聚合物物理

## 概述

聚合物是**长链大分子**（由重复单元共价连接），其物理性质由**链构象**决定。理想链可视为**随机行走**（自由连接链），均方末端距 $\langle R^2\rangle=Nl^2$。**熵弹性**是聚合物最独特的性质：拉伸链减少构象数、产生熵回复力（橡皮弹性的来源）。真实链有**排除体积**（自避行走），溶液行为由弗洛里理论描述。聚合物的**玻璃化转变**与相分离是重要现象。

## 基本概念

- **链构象**：聚合物的空间形态。
- **理想链 / 随机行走**：自由连接链模型。
- **熵弹性**：拉伸链的熵回复力。
- **排除体积**：链段间的体积排斥（膨胀链）。
- **玻璃化转变** $T_g$：聚合物的玻璃-橡胶转变。

## 核心内容

### 基本定律 / 方程

理想链均方末端距：

$$ \langle R^2\rangle=Nl^2 $$

熵弹性（橡皮回复力）：

$$ f=\frac{3k_BT}{Nl^2}R $$

### 推导要点

- **随机行走**：$N$ 步随机行走的均方位移 $\langle R^2\rangle=Nl^2$（[[probability-theory]]）。
- **熵弹性**：构象数 $\Omega(R)$ 决定自由能 $F=-k_BT\ln\Omega$，拉伸减少 $\Omega$、产生回复力。
- **排除体积**：真实链的自避行走，弗洛里指数 $\nu\approx3/5$（膨胀链）。

### 重要定理与推论

- **熵弹性**：橡皮弹性的分子起源（不是能量、是熵）。
- **弗洛里理论**：聚合物的标度指数。
- **玻璃化转变**：聚合物的动力学冻结。
- **聚合物的标度性**：不同链长共享标度律。

## 深化内容

聚合物物理是 [[soft-matter]] 的核心，连接 [[statistical-mechanics]]（构象统计）、[[probability-theory]]（随机行走）、[[phase-transitions]]（玻璃化/相分离）。延伸阅读可参考 de Gennes《Scaling Concepts in Polymer Physics》、Doi《Introduction to Polymer Physics》、Rubinstein & Colby《Polymer Physics》。

## 与其他知识的联系

- 紧密相关：[[soft-matter]]、[[statistical-mechanics]]（构象统计）。
- 关联：[[probability-theory]]（随机行走模型）、[[phase-transitions]]（玻璃化/相分离）。

## 前置知识

- [[statistical-mechanics]]、[[probability-theory]]、[[soft-matter]]
