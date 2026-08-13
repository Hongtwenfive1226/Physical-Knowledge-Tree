---
id: identical-particles
name: 全同粒子
name_en: Identical Particles
domain: quantum-mechanics
aliases: [量子统计, 泡利不相容]
tags: [量子, 全同粒子, 对称性]
keywords: [玻色子, 费米子, 泡利不相容, 交换对称]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 5, note: 多体量子力学}
  - {id: spin, weight: 5, note: 自旋-统计联系}
  - {id: quantum-statistics, weight: 5, note: 玻色/费米分布}
  - {id: second-quantization, weight: 4, note: 场量子化描述多体系统}
  - {id: condensed-matter-physics, weight: 3}
  - {id: angular-momentum-qm, weight: 3}
superseded_by: []
supersedes: []
---
# 全同粒子

## 概述

量子力学中，同类粒子（电子、光子、原子）**原则上不可区分**——交换任意两个全同粒子不产生新的物理状态。这要求多粒子波函数满足**交换对称性**：玻色子（整数自旋）交换对称，费米子（半整数自旋）交换反对称。费米子的反对称性导致**泡利不相容原理**（原子壳层结构、电子简并压），玻色子的对称性导致玻色-爱因斯坦凝聚与激光。自旋与统计的联系由**自旋-统计定理**（相对论量子场论证明）给出。

## 基本概念

- **全同性**：同类粒子不可区分。
- **交换对称 / 反对称**：$\psi(\cdots,\vec r_i,\cdots,\vec r_j,\cdots)=\pm\psi(\cdots,\vec r_j,\cdots,\vec r_i,\cdots)$。
- **玻色子 / 费米子**：整数 / 半整数自旋。
- **Slater 行列式**：费米子多体波函数的反对称化形式。

## 核心内容

### 基本定律 / 方程

两粒子交换对称：

$$ \psi(\vec r_1,\vec r_2)=\pm\psi(\vec r_2,\vec r_1) $$

费米子的 Slater 行列式：

$$ \Psi(\vec r_1,\dots,\vec r_N)=\frac1{\sqrt{N!}}\det\big[\psi_i(\vec r_j)\big] $$

**泡利不相容原理**：两个费米子不能占据同一单粒子态。

### 推导要点

- **交换算符的对称性**：交换算符 $\hat P_{12}$ 满足 $\hat P_{12}^2=1$，本征值为 $\pm1$；因粒子不可区分，$[\hat H,\hat P]=0$，波函数必须是其本征态。
- **自旋-统计定理**：相对论量子场论中，因果性（类空对易/反对易）要求整数自旋场用对易子（玻色）、半整数自旋场用反对易子（费米）。
- **Slater 行列式的反对称性**：交换两行（两粒子）行列式变号，天然满足反对称；两个粒子同态时行列式为零（泡利原理）。

### 重要定理与推论

- **泡利不相容原理**：费米子不占据同一量子态，决定原子壳层结构与元素周期表。
- **交换相互作用**：全同性引起交换能（无经典对应，如铁磁性的海森堡交换）。
- **玻色凝聚**：玻色子可大量占据基态，低温下形成玻色-爱因斯坦凝聚（[[bose-einstein-condensation]]）。
- **自旋-统计联系**：粒子分类由自旋决定（[[spin]]）。

## 深化内容

全同粒子的系统处理由**二次量子化**（[[second-quantization]]）给出：产生/湮灭算符自动实现对称化，Fock 空间是描述全同粒子的自然框架。量子统计（费米-狄拉克 / 玻色-爱因斯坦分布，见 [[quantum-statistics]]）直接来自全同性。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[spin]]（自旋-统计）、[[quantum-statistics]]（费米/玻色分布）、[[second-quantization]]。
- 应用：[[condensed-matter-physics]]（电子气、超导）、[[particle-physics]]、[[bose-einstein-condensation]]。

## 前置知识

- [[quantum-mechanics]]、[[spin]]、[[linear-algebra]]
