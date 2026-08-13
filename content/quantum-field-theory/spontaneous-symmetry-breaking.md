---
id: spontaneous-symmetry-breaking
name: 自发对称破缺与希格斯机制
name_en: Spontaneous Symmetry Breaking & Higgs Mechanism
domain: quantum-field-theory
aliases: [希格斯机制, 对称性自发破缺]
tags: [量子场论, 对称性, 质量起源]
keywords: [戈德斯通定理, 希格斯玻色子, 电弱统一]
updated: 2026-08-13
links:
  - {id: standard-model, weight: 5, note: 质量起源}
  - {id: gauge-field-theory, weight: 5, note: 规范场获得质量}
  - {id: phase-transitions, weight: 4, note: 凝聚态类比}
  - {id: superconductivity, weight: 3, note: 戈德斯通模式在超导中的吸收}
  - {id: quantum-field-theory, weight: 4}
  - {id: group-theory, weight: 3}
superseded_by: []
supersedes: []
---
# 自发对称破缺与希格斯机制

## 概述

自发对称破缺指**拉格朗日量具有对称性，而真空（基态）不保持它**——对称性是"隐藏"而非"缺失"的。**戈德斯通定理**：每个破缺的连续对称性对应一个无质量戈德斯通玻色子。**希格斯机制**：当破缺的是规范对称时，戈德斯通玻色子被规范场"吃掉"而成为其纵向分量，规范玻色子获得质量。希格斯机制解释了 $W^\pm,Z$ 玻色子与费米子的质量起源（[[standard-model]]），2012 年 LHC 发现希格斯玻色子证实之。

## 基本概念

- **真空（基态）**：场的最低能态。
- **墨西哥帽势**：$V(\phi)=-\mu^2\phi^2+\lambda\phi^4$，极小在 $|\phi|=\mu/\sqrt{2\lambda}\neq0$。
- **戈德斯通玻色子**：自发破缺产生的无质量模。
- **希格斯场 / 玻色子**：破缺机制的标量场及其量子。

## 核心内容

### 基本定律 / 方程

墨西哥帽势与真空：

$$ V(\phi)=-\mu^2\phi^2+\lambda\phi^4,\qquad \langle\phi\rangle=\frac{v}{\sqrt2}=\frac{\mu}{\sqrt{2\lambda}} $$

对称性破缺后展开 $\phi=(v+h)e^{i\theta/v}$：$h$ 有质量、$\theta$ 是无质量戈德斯通模。

**希格斯机制**：规范场通过 $|D_\mu\phi|^2$ 获得质量：

$$ m_A=g\langle\phi\rangle=gv $$

### 推导要点

- **真空选择**：$\phi$ 在复平面沿圆 $|\phi|=v$ 取极小，真空选择其中一个方向（破缺 $U(1)$ 对称）。
- **戈德斯通定理**：沿真空圆（势能平坦方向）的激发无质量（径向激发有质量）。
- **希格斯机制**：用规范变换"吃掉"$\theta$ 模（幺正规范），它成为规范场的纵向分量，规范场获得质量 $m_A=gv$。

### 重要定理与推论

- **戈德斯通定理**：连续对称性自发破缺 → 无质量玻色子。
- **希格斯机制**：规范对称性破缺 → 规范玻色子有质量。
- **电弱统一**：$W^\pm,Z$ 获得质量，光子保持无质量（[[standard-model]]）。
- **凝聚态类比**：超导的安德森-希格斯机制（[[superconductivity]]）。

## 深化内容

自发对称破缺是 [[standard-model]]（电弱统一）与 [[phase-transitions]]（对称性破缺相变）的核心，联系 [[group-theory]]（真空的对称群）。希格斯玻色子的发现（2012）是粒子物理的里程碑。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Griffiths《Introduction to Elementary Particles》、朗道《统计物理学》（有序相）。

## 与其他知识的联系

- 紧密相关：[[standard-model]]（电弱统一）、[[gauge-field-theory]]、[[phase-transitions]]（对称性破缺的凝聚态类似物）。
- 凝聚态对应：[[superconductivity]]（安德森-希格斯机制）。

## 前置知识

- [[quantum-field-theory]]、[[gauge-field-theory]]、[[group-theory]]
