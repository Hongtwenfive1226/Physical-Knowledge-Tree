---
id: qed
name: 量子电动力学
name_en: Quantum Electrodynamics
domain: quantum-field-theory
aliases: [QED]
tags: [量子场论, 电磁, 规范]
keywords: [狄拉克方程, 兰姆位移, 反常磁矩, 费曼图]
updated: 2026-08-13
links:
  - {id: quantum-field-theory, weight: 5, note: 电磁相互作用的场论}
  - {id: maxwell-equations, weight: 4, note: 经典极限}
  - {id: feynman-diagrams, weight: 5, note: 计算方法}
  - {id: gauge-field-theory, weight: 5, note: U(1) 规范理论}
  - {id: hydrogen-atom, weight: 4, note: 兰姆位移}
  - {id: special-relativity, weight: 3}
  - {id: spin, weight: 3, note: 狄拉克方程导出自旋}
supersedes: [maxwell-equations]
superseded_by: []
---
# 量子电动力学

## 概述

量子电动力学（QED）是电磁相互作用的量子场论，是物理学史上**最精确验证的理论**（预言与实验符合到 $10^{-12}$ 量级）。它把麦克斯韦电磁场与狄拉克电子场统一为 $U(1)$ 规范场论，预言了光子、正电子、兰姆位移与反常磁矩。QED 的重整化方法（费曼、施温格、朝永、戴森，1940 年代）是现代量子场论方法论的起点，其规范结构与费曼图计算成为所有规范场论的模板。

## 基本概念

- **狄拉克场** $\psi$：电子/正电子场。
- **规范场** $A_\mu$：光子场。
- **精细结构常数** $\alpha=e^2/(4\pi\varepsilon_0\hbar c)\approx1/137$：微扰展开参数。
- **兰姆位移 / 反常磁矩**：QED 的辐射修正。

## 核心内容

### 基本定律 / 方程

QED 拉格朗日量：

$$ \mathcal L=\bar\psi(i\gamma^\mu D_\mu-m)\psi-\frac14F_{\mu\nu}F^{\mu\nu},\qquad D_\mu=\partial_\mu+ieA_\mu $$

狄拉克方程（自由电子）：

$$ (i\gamma^\mu\partial_\mu-m)\psi=0 $$

### 推导要点

- **规范原理**：要求电子场在局域 $U(1)$ 相位变换 $\psi\to e^{ie\Lambda}\psi$ 下不变，强制引入规范场 $A_\mu$（光子），即"规范对称性→相互作用"。
- **费曼图**：电子-光子顶角 $-ie\gamma^\mu$，光子传播子、电子传播子；逐阶计算散射振幅。
- **重整化**：圈图紫外发散被吸收进电荷与质量的裸参数，得到有限的 $\alpha$ 与 $m$。

### 重要定理与推论

- **电子反常磁矩**：$a_e=(g-2)/2=\alpha/2\pi+\cdots$，与实验符合 $10^{-12}$。
- **兰姆位移**：氢原子 $2S_{1/2}$ 与 $2P_{1/2}$ 的能级劈裂（真空涨落效应，[[hydrogen-atom]]）。
- **正电子预言**：狄拉克方程负能解 → 反粒子（狄拉克海）。
- **轫致辐射与康普顿散射**：QED 树图过程。

## 深化内容

QED 是 [[gauge-field-theory]] 的**阿贝尔原型**：规范原理推广到 $SU(2),SU(3)$ 即电弱、强相互作用（[[standard-model]]）。QED 的辐射修正、重正化群（[[renormalization]]）是场论标准工具。延伸阅读可参考 Peskin & Schroeder《An Introduction to QFT》、Weinberg《The Quantum Theory of Fields》、费曼《QED：光和物质的奇妙理论》。

## 与其他知识的联系

- 紧密相关：[[quantum-field-theory]]（框架）、[[gauge-field-theory]]（U(1) 规范）、[[feynman-diagrams]]。
- 检验：[[hydrogen-atom]]（兰姆位移）、[[spin]]（狄拉克方程）。
- 经典极限：[[maxwell-equations]]。

## 上位替代

- 统一弱电相互作用走向 [[standard-model]]。

## 前置知识

- [[quantum-field-theory]]、[[special-relativity]]、[[feynman-diagrams]]
