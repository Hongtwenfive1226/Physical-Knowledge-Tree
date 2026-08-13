---
id: second-quantization
name: 二次量子化
name_en: Second Quantization
domain: quantum-mechanics
aliases: [产生湮灭算符, 占据数表示]
tags: [量子, 多体, 场量子化]
keywords: [产生算符, 湮灭算符, 对易子, Fock空间]
updated: 2026-08-13
links:
  - {id: quantum-mechanics, weight: 4, note: 多体量子力学的表述}
  - {id: quantum-harmonic-oscillator, weight: 4, note: 模式量子化}
  - {id: identical-particles, weight: 5, note: 天然处理全同粒子}
  - {id: quantum-field-theory, weight: 5, note: 场量子化的起点}
  - {id: condensed-matter-physics, weight: 4, note: 多体问题}
  - {id: phonons, weight: 3}
superseded_by: []
supersedes: []
---
# 二次量子化

## 概述

二次量子化把单粒子波函数"提升"为**产生/湮灭算符**，在**占据数表象**（Fock 空间）中描述多体系统。玻色子满足对易关系、费米子满足反对易关系，粒子数算符 $\hat n_i=a_i^\dagger a_i$ 的本征值即占据数。二次量子化自动实现全同粒子的交换对称性，使多体问题（电子气体、超导、声子、光子）获得简洁统一的语言，是**量子场论**与凝聚态多体理论的标准起点。

## 基本概念

- **产生/湮灭算符**：$a_i^\dagger$ 增加、$a_i$ 减少一个 $i$ 态粒子。
- **Fock 空间**：占据数态 $|n_1,n_2,\dots\rangle$ 张成的空间。
- **玻色子 / 费米子关系**：对易 $[a_i,a_j^\dagger]=\delta_{ij}$ / 反对易 $\{c_i,c_j^\dagger\}=\delta_{ij}$。
- **数算符**：$\hat n_i=a_i^\dagger a_i$；总粒子数 $\hat N=\sum_i\hat n_i$。

## 核心内容

### 基本定律 / 方程

玻色子与费米子的（反）对易关系：

$$ [a_i,a_j^\dagger]=\delta_{ij},\ [a_i,a_j]=0\quad(\text{玻色});\qquad \{c_i,c_j^\dagger\}=\delta_{ij},\ \{c_i,c_j\}=0\quad(\text{费米}) $$

占据数态与算符作用：

$$ a_i^\dagger|n_i\rangle=\sqrt{n_i+1}\,|n_i+1\rangle,\qquad a_i|n_i\rangle=\sqrt{n_i}\,|n_i-1\rangle $$

单粒子算符 / 二体算符的二次量子化形式：

$$ \hat O=\sum_{ij}\langle i|\hat o|j\rangle a_i^\dagger a_j,\qquad \hat V=\frac12\sum_{ijkl}\langle ij|V|kl\rangle a_i^\dagger a_j^\dagger a_l a_k $$

### 推导要点

- **产生/湮灭算符的来源**：把单粒子模式视为谐振子（[[quantum-harmonic-oscillator]]），占据数对应谐振子量子数，升降算符即产生/湮灭。
- **费米子的反对易**：泡利原理要求最多一个粒子，反对易关系保证 $c_i^{\dagger2}=0$（不能双占据）。
- **算符表示**：单粒子算符 $\hat O$ 作用于单粒子即 $\hat o$，二次量子化形式把多体作用推广到 Fock 空间。

### 重要定理与推论

- **自动对称化**：产生/湮灭算符的（反）对易关系自动保证玻色/费米统计。
- **泡利原理**：$c_i^{\dagger2}=0$ 是费米子反对易关系的直接结果。
- **场的量子化**：把场 $\hat\phi(\vec r)=\sum_k\phi_k(\vec r)a_k$ 用产生/湮灭展开，即 [[quantum-field-theory]] 的起点。
- **真空态**：$a_i|0\rangle=0$ 定义真空。

## 深化内容

二次量子化是**量子场论**与 [[condensed-matter-physics]] 的通用语言：[[phonons]]（晶格振动量子化）、[[superconductivity]]（BCS 库珀对）、[[quantum-optics]]（光子）、[[bose-einstein-condensation]] 都用它表述。延伸阅读可参考 Fetter & Walecka《Quantum Theory of Many-Particle Systems》、Altland & Simons《Condensed Matter Field Theory》、Peskin & Schroeder《An Introduction to QFT》。

## 与其他知识的联系

- 紧密相关：[[identical-particles]]（全同性）、[[quantum-harmonic-oscillator]]（模式量子化）、[[quantum-field-theory]]（场的正则量子化）。
- 应用：[[condensed-matter-physics]]（电子气体、超导）、[[phonons]]（声子场）、[[quantum-optics]]（光子场）。

## 前置知识

- [[quantum-harmonic-oscillator]]、[[identical-particles]]、[[linear-algebra]]
