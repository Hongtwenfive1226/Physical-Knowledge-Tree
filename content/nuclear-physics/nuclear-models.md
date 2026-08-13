---
id: nuclear-models
name: 核模型
name_en: Nuclear Models
domain: nuclear-physics
aliases: [壳模型, 液滴模型]
tags: [核物理, 模型, 结构]
keywords: [液滴模型, 壳模型, 集体模型]
updated: 2026-08-13
links:
  - {id: nuclear-structure, weight: 5, note: 描述核结构的模型}
  - {id: nuclear-physics, weight: 4}
  - {id: quantum-mechanics, weight: 4, note: 壳模型的量子基础}
  - {id: standard-model, weight: 3, note: 底层为QCD}
  - {id: superconductivity, weight: 2, note: 对关联类比BCS}
  - {id: angular-momentum-qm, weight: 3, note: 壳模型角动量}
superseded_by: []
supersedes: []
---
# 核模型

## 概述

核模型是对核结构的**近似描述**，因为核力复杂、核是多体系统，无法精确求解。三大互补模型：**液滴模型**（把核视为带电液滴，解释结合能与裂变）、**壳模型**（核子在平均场中占据单粒子能级，解释幻数与自旋-宇称）、**集体模型**（玻尔-莫特森，结合单粒子与集体转动/振动，解释形变核）。各模型适用于不同观测量，共同构成核结构理论的近似框架。

## 基本概念

- **液滴模型**：结合能公式、裂变势垒。
- **壳模型**：平均场、单粒子能级、幻数。
- **集体模型**：形变、转动带、振动谱。
- **对关联**：核子配对（BCS 类比）。

## 核心内容

### 基本定律 / 方程

液滴模型的结合能（魏茨泽克公式）：

$$ B=a_VA-a_SA^{2/3}-a_C\frac{Z(Z-1)}{A^{1/3}}-a_A\frac{(N-Z)^2}{A}+\delta $$

壳模型单粒子哈密顿量（含自旋-轨道）：

$$ \hat H=\frac{\hat p^2}{2m}+V(r)+\hat{\vec l}\cdot\hat{\vec s}\,f(r) $$

集体模型转动能：$E_J=\frac{\hbar^2}{2\mathcal I}J(J+1)$。

### 推导要点

- **液滴模型**：从宏观能量（体积、表面、库仑、对称、配对）拟合结合能。
- **壳模型**：求解平均场单粒子能级，加自旋-轨道项得幻数。
- **集体模型**：形变核的整体转动/振动作为集体自由度。

### 重要定理与推论

- **液滴模型解释裂变**：重核的库仑能与表面能竞争导致裂变势垒（[[nuclear-fission]]）。
- **壳模型解释幻数**：壳层闭合处特别稳定（[[nuclear-structure]]）。
- **集体模型解释转动带**：形变核的 $J(J+1)$ 转动谱。
- **对关联**：BCS 类比的核子配对（[[superconductivity]]）。

## 深化内容

核模型的底层是 [[standard-model]] 的 QCD（核力）；壳模型连接 [[angular-momentum-qm]]；对关联类比 [[superconductivity]]。现代核结构计算用大规模壳模型、密度泛函。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Bohr & Mottelson《Nuclear Structure》、Casten《Nuclear Structure from a Simple Perspective》。

## 与其他知识的联系

- 紧密相关：[[nuclear-structure]]、[[nuclear-physics]]。
- 基础：[[quantum-mechanics]]（平均场）、[[angular-momentum-qm]]（角动量耦合）、[[superconductivity]]（对关联类比）。
- 底层理论：核力来自 [[standard-model]] 的 QCD。

## 前置知识

- [[nuclear-structure]]、[[quantum-mechanics]]、[[angular-momentum-qm]]
