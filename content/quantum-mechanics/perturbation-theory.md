---
id: perturbation-theory
name: 量子微扰论
name_en: Perturbation Theory
domain: quantum-mechanics
aliases: [微扰论, 简并微扰]
tags: [量子, 近似方法, 微扰]
keywords: [非简并微扰, 简并微扰, 费米黄金规则]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 量子力学的主要近似方法}
  - {id: schrodinger-equation, weight: 4}
  - {id: hydrogen-atom, weight: 4, note: 精细结构等修正}
  - {id: scattering-theory, weight: 3}
  - {id: quantum-field-theory, weight: 3, note: 场论微扰展开}
  - {id: feynman-diagrams, weight: 3, note: 微扰论的图形化}
superseded_by: []
supersedes: []
---
# 量子微扰论

## 概述

微扰论是量子力学最重要的近似方法：当哈密顿量可写为 $H=H_0+\lambda V$（$H_0$ 精确可解、$V$ 为小微扰）时，以 $H_0$ 的本征解为零级近似，逐级展开能量与态矢。分为**定态微扰**（非简并与简并）与**含时微扰**。定态微扰给出能级的逐级修正；含时微扰给出跃迁概率与**费米黄金规则**，是散射、辐射跃迁、退相干等过程的计算基础，也是量子场论微扰展开（费曼图）的雏形。

## 基本概念

- **未微扰哈密顿量** $H_0$、**微扰** $V$、**小参数** $\lambda$。
- **级数展开**：$E_n=E_n^{(0)}+\lambda E_n^{(1)}+\lambda^2E_n^{(2)}+\cdots$、$|\psi_n\rangle=|\psi_n^{(0)}\rangle+\lambda|\psi_n^{(1)}\rangle+\cdots$。
- **简并子空间**：$H_0$ 有简并本征值的子空间。
- **态密度** $\rho(E)$：费米黄金规则中的末态密度。

## 核心内容

### 基本定律 / 方程

**非简并微扰**（一阶、二阶能量修正）：

$$ E_n^{(1)}=\langle n^{(0)}|V|n^{(0)}\rangle,\qquad E_n^{(2)}=\sum_{k\ne n}\frac{|\langle k^{(0)}|V|n^{(0)}\rangle|^2}{E_n^{(0)}-E_k^{(0)}} $$

**费米黄金规则**（含时微扰）：

$$ \Gamma=\frac{2\pi}{\hbar}|\langle f|V|i\rangle|^2\,\rho(E_f) $$

### 推导要点

- **定态微扰**：把 $H=H_0+\lambda V$ 代入 $H|\psi\rangle=E|\psi\rangle$，按 $\lambda$ 幂次比较系数；由 $\langle n^{(0)}|$ 投影得一阶修正，二阶由中间态求和得到。
- **简并微扰**：在简并子空间内把 $V$ 对角化（解久期方程 $\det(V_{ij}-E^{(1)}\delta_{ij})=0$），微扰解除简并。
- **费米黄金规则**：含时微扰 $V(t)$ 的一阶跃迁振幅，在长时间极限下 $|(1-e^{i\omega t})/\omega|^2\to2\pi t\delta(\omega)$，跃迁率与时间无关。

### 重要定理与推论

- **一阶能量 = 微扰的平均值**：$E_n^{(1)}=\langle V\rangle_n$。
- **二阶能量含虚跃迁**：中间态 $k\ne n$ 的贡献，符号由能量差决定（基态二阶修正恒为负）。
- **简并的解除**：对称性微扰使简并能级劈裂（塞曼、斯塔克效应）。
- **选择定则**：$\langle f|V|i\rangle$ 为零的跃迁被禁戒（由角动量/宇称决定）。

## 深化内容

微扰论推广到**量子场论**：相互作用表象中的戴森级数与**费曼图**（[[feynman-diagrams]]）是微扰展开的图形化，重整化（[[renormalization]]）处理发散。Wigner-Brillouin 微扰、布里渊-维格纳方法、含时变分原理是更精细的变体。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]、[[hydrogen-atom]]（精细/超精细结构）、[[scattering-theory]]、[[qm-variational-method]]（另一近似方法）。
- 场论推广：[[quantum-field-theory]] 的微扰展开与 [[feynman-diagrams]]。
- 条件：$\lambda V$ 需足够小，否则用变分或非微扰方法。

## 前置知识

- [[schrodinger-equation]]、[[linear-algebra]]、[[hydrogen-atom]]
