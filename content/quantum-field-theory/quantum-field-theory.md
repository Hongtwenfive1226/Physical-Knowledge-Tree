---
id: quantum-field-theory
name: 量子场论
name_en: Quantum Field Theory
domain: quantum-field-theory
aliases: [QFT, 场论]
tags: [量子场论, 相对论量子力学, 多粒子]
keywords: [量子化, 费曼图, 重整化, 粒子产生湮灭]
updated: 2026-08-13
links:
  - {id: qed, weight: 5, note: 第一个成功的量子场论}
  - {id: standard-model, weight: 5, note: 粒子物理的场论框架}
  - {id: path-integral, weight: 5, note: 表述工具}
  - {id: second-quantization, weight: 4, note: 技术桥梁}
  - {id: feynman-diagrams, weight: 5, note: 计算方法}
  - {id: renormalization, weight: 5, note: 理论自洽性}
  - {id: gauge-field-theory, weight: 5, note: 规范场论}
  - {id: spontaneous-symmetry-breaking, weight: 4, note: 质量起源}
  - {id: condensed-matter-physics, weight: 3, note: 凝聚态场论}
  - {id: quantum-mechanics, weight: 3, note: 单粒子极限}
  - {id: special-relativity, weight: 4, note: 洛伦兹协变}
  - {id: string-theory, weight: 3}
supersedes: [quantum-mechanics, path-integral, special-relativity]
superseded_by: []
pos: {x: 45, y: 35, z: 0}
---
# 量子场论

## 概述

量子场论（QFT）统一了**相对论**与**量子力学**，是描述基本粒子与规范相互作用的现代理论框架。其核心观念：基本客体不是"粒子"而是"场"，粒子只是量子化场的激发态；场的量子化使**粒子可产生与湮灭**（正反粒子对、光子发射）。数学上以**路径积分**（生成泛函）为表述，以**费曼图**做微扰计算，以**重整化**处理紫外发散。规范场论描述电磁/弱/强相互作用，自发对称破缺（希格斯机制）赋予粒子质量。QFT 是[[standard-model]] 的理论基础。

## 基本概念

- **场算符** $\phi(x)$：时空各点的量子算符。
- **产生/湮灭算符**：场的傅里叶展开系数。
- **生成泛函** $Z[J]$：关联函数的母函数。
- **规范场 / 规范协变导数**：局域对称性要求的场。
- **真空 / 激发态**：场的基态与粒子态。

## 核心内容

### 基本定律 / 方程

标量场的克莱因-戈登拉格朗日量与路径积分：

$$ \mathcal L=\frac12(\partial_\mu\phi)^2-\frac12m^2\phi^2-\frac{\lambda}{4!}\phi^4,\qquad Z[J]=\int\mathcal D\phi\,e^{i\int(\mathcal L+J\phi)d^4x} $$

狄拉克场（费米子）拉格朗日量：

$$ \mathcal L=\bar\psi(i\gamma^\mu\partial_\mu-m)\psi $$

### 推导要点

- **正则量子化**：把场 $\phi$ 与共轭动量 $\pi$ 提升为算符，施加对易关系 $[\phi,\pi]=i\hbar\delta$，场的傅里叶系数成为产生/湮灭算符（[[second-quantization]]）。
- **微扰展开**：对相互作用项按 $\lambda$ 展开，费曼图逐阶计算（[[feynman-diagrams]]）。
- **重整化**：吸收无穷大进裸参数，得到有限物理量（[[renormalization]]）。

### 重要定理与推论

- **自旋-统计定理**：整数自旋=玻色子、半整数=费米子（[[identical-particles]]）。
- **CPT 定理**：任何洛伦兹不变定域理论在 CPT 联合反演下不变。
- **戈德斯通定理**：连续对称性自发破缺产生无质量戈德斯通玻色子。
- **场的激发即粒子**：真空 $\phi$ 激发态对应粒子，光子/声子都是场量子。

## 深化内容

QFT 的应用遍及 [[standard-model]]、[[condensed-matter-physics]]（凝聚态场论）、[[quantum-information]]。其未解问题包括量子引力（[[quantum-gravity]]）、强耦合 QCD、宇宙学常数问题。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Schwartz《Quantum Field Theory and the Standard Model》、Weinberg《The Quantum Theory of Fields》。

## 与其他知识的联系

- 紧密相关：[[qed]]、[[standard-model]]、[[gauge-field-theory]]、[[feynman-diagrams]]、[[renormalization]]。
- 数学：[[path-integral]]、[[second-quantization]]、[[group-theory]]、[[special-relativity]]。
- 上位替代：单粒子量子力学与经典场论都是其极限。

## 上位替代

- 目前尚无更普适理论完全替代之（候选：[[string-theory]]）。

## 前置知识

- [[quantum-mechanics]]、[[special-relativity]]、[[path-integral]]
