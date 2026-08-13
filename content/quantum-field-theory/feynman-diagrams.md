---
id: feynman-diagrams
name: 费曼图
name_en: Feynman Diagrams
domain: quantum-field-theory
aliases: [费曼规则, 费曼图展开]
tags: [量子场论, 计算, 图形]
keywords: [传播子, 顶点, 散射振幅]
updated: 2026-08-13
links:
  - {id: quantum-field-theory, weight: 5, note: 场论微扰计算工具}
  - {id: qed, weight: 4, note: 应用范例}
  - {id: scattering-theory, weight: 4, note: 散射振幅}
  - {id: path-integral, weight: 4, note: 微扰展开来源}
  - {id: renormalization, weight: 4, note: 圈图与发散}
  - {id: standard-model, weight: 4}
superseded_by: []
supersedes: []
---
# 费曼图

## 概述

费曼图把量子场论的**微扰展开图形化**，是计算散射振幅与关联函数的标准工具。图的每个元素对应数学对象：外线=外粒子、内线=传播子、顶点=相互作用；由**费曼规则**把图翻译为积分表达式。图按**圈数**（$\hbar$ 幂次）组织微扰级数：树图（无圈）对应经典/领头阶，圈图对应量子修正（常含紫外发散，由 [[renormalization]] 处理）。费曼图使复杂计算高度系统化，是粒子物理与凝聚态理论共用的语言。

## 基本概念

- **传播子**：内线，粒子的动量空间传播函数。
- **顶点**：相互作用点（如 QED 的 $-ie\gamma^\mu$）。
- **树图 / 圈图**：无圈 / 含圈的图。
- **费曼规则**：图 ↔ 积分表达式的对应。
- **散射截面**：由振幅 $\mathcal M$ 计算。

## 核心内容

### 基本定律 / 方程

散射振幅的费曼图展开（示意）：

$$ \mathcal M=\sum_{\text{图}}\int\prod_{\text{内线}}\frac{i}{k^2-m^2+i\epsilon}\prod_{\text{顶点}}(-ig)\prod(2\pi)^4\delta^{(4)}(\sum k) $$

**圈数-$\hbar$ 对应**：$L$ 圈图正比于 $\hbar^{L}$。

### 推导要点

- **微扰展开**：生成泛函 $Z[J]$ 对耦合常数展开，维克定理把关联函数分解为传播子的积（[[path-integral]]）。
- **费曼规则**：由拉格朗日量直接读出——每个场对应线、每个相互作用项对应顶点。
- **动量守恒**：每个顶点有 $\delta^{(4)}$ 保证动量守恒。

### 重要定理与推论

- **圈数组织微扰论**：树图→经典，圈图→量子修正。
- **紫外发散**：圈图的高动量积分发散（[[renormalization]]）。
- **截面计算**：$\sigma\propto\int|\mathcal M|^2 d\Pi$，是 [[particle-physics]] 实验分析的基础。
- **图形化因子**：对称因子、组合因子由图的对称性决定。

## 深化内容

费曼图是 [[qed]]、[[standard-model]] 一切散射计算的核心工具；关联函数、有效作用量（圈展开）、重正化群（[[renormalization]]）都以它为基础。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Griffiths《Introduction to Elementary Particles》、Weinberg《The Quantum Theory of Fields》。

## 与其他知识的联系

- 紧密相关：[[quantum-field-theory]]、[[qed]]、[[renormalization]]（圈图）、[[scattering-theory]]。
- 应用：[[standard-model]] 的交叉截面计算、[[particle-physics]] 实验分析。

## 前置知识

- [[quantum-field-theory]]、[[path-integral]]、[[scattering-theory]]
