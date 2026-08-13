---
id: standard-model
name: 粒子物理标准模型
name_en: Standard Model of Particle Physics
domain: particle-physics
aliases: [标准模型, SM]
tags: [粒子物理, 规范场论, 统一理论]
keywords: [电弱统一, 量子色动力学, 希格斯机制]
updated: 2026-08-13
links:
  - {id: particle-physics, weight: 5, note: 粒子物理的理论框架}
  - {id: elementary-particles, weight: 5, note: 粒子清单}
  - {id: gauge-field-theory, weight: 5, note: 规范群 SU(3)×SU(2)×U(1)}
  - {id: quantum-field-theory, weight: 5, note: 理论基础}
  - {id: spontaneous-symmetry-breaking, weight: 5, note: 电弱对称性破缺}
  - {id: renormalization, weight: 4, note: 可重整化}
  - {id: feynman-diagrams, weight: 4, note: 计算}
  - {id: group-theory, weight: 4, note: 规范群表示}
  - {id: cosmology, weight: 3, note: 早期宇宙物理}
superseded_by: []
supersedes: []
---
# 粒子物理标准模型

## 概述

标准模型是描述三种基本相互作用（**电磁、弱、强**）的量子场论，是粒子物理的理论框架。其规范群为

$$ SU(3)_c\times SU(2)_L\times U(1)_Y $$

其中 $SU(3)_c$ 是量子色动力学（QCD，强相互作用），$SU(2)_L\times U(1)_Y$ 经**电弱对称性破缺**（希格斯机制）统一电磁与弱相互作用。标准模型预言并解释了全部基本粒子（2012 年发现希格斯玻色子），经 LEP、LHC 等高精度实验验证，但仍未包含引力、暗物质、中微子质量与宇宙学常数问题。

## 基本概念

- **规范群**：$SU(3)_c\times SU(2)_L\times U(1)_Y$。
- **量子色动力学（QCD）**：强相互作用，胶子传递，夸克禁闭、渐近自由。
- **电弱理论**：电磁 + 弱相互作用，经希格斯机制破缺为 $U(1)_{\mathrm{em}}$。
- **希格斯机制**：$W^\pm,Z$ 与费米子质量起源。
- **可重整化性**：紫外发散可由有限参数吸收。

## 核心内容

### 基本定律 / 方程

规范群与协变导数：

$$ SU(3)_c\times SU(2)_L\times U(1)_Y,\qquad D_\mu=\partial_\mu-ig_sG_\mu^aT^a-igW_\mu^i\tau^i-ig'B_\mu Y $$

电弱对称性破缺后，$W^\pm,Z$ 获得质量：

$$ m_W=\frac12gv,\qquad m_Z=\frac12\sqrt{g^2+g'^2}\,v,\qquad v=\frac1{\sqrt{\sqrt2\,G_F}} $$

### 推导要点

- **规范原理**：要求费米子场在 $SU(3)\times SU(2)\times U(1)$ 局域对称下不变，引入规范场（胶子、$W^i$、$B$）。
- **电弱破缺**：希格斯二重态 $\Phi$ 取非零真空期望值，$SU(2)_L\times U(1)_Y\to U(1)_{\mathrm{em}}$，$W^\pm,Z$ 获得质量、光子保持无质量（[[spontaneous-symmetry-breaking]]）。
- **费米子质量**：汤川耦合 $y_f\bar\psi_L\Phi\psi_R$ 在破缺后给出 $m_f=y_fv/\sqrt2$。

### 重要定理与推论

- **渐近自由**：QCD 高能耦合变弱（[[renormalization]]，2004 诺奖）。
- **夸克禁闭**：强子内夸克不能被分离。
- **电弱统一**：电磁与弱相互作用在 $SU(2)\times U(1)$ 中统一（1979 诺奖）。
- **希格斯机制**：质量起源（2013 诺奖）。

## 深化内容

标准模型是 [[gauge-field-theory]] 与 [[quantum-field-theory]] 的最高成就，其精确检验（电弱精密测量、希格斯性质）仍在继续。未解问题：暗物质、中微子质量、强 CP 问题、层级问题，指向超越标准模型的新物理（[[string-theory]]、超对称）。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Griffiths《Introduction to Elementary Particles》、Schwartz《Quantum Field Theory and the Standard Model》。

## 与其他知识的联系

- 紧密相关：[[gauge-field-theory]]、[[quantum-field-theory]]、[[spontaneous-symmetry-breaking]]、[[elementary-particles]]、[[group-theory]]。
- 验证：[[feynman-diagrams]]、加速器实验（[[particle-physics]]）。
- 局限与超越：[[string-theory]]、[[cosmology]]。

## 前置知识

- [[gauge-field-theory]]、[[quantum-field-theory]]、[[spontaneous-symmetry-breaking]]
