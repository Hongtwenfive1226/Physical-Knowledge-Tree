---
id: group-theory
name: 群论
name_en: Group Theory
domain: mathematics
aliases: [对称性, 李群]
tags: [数学, 对称性, 群表示]
keywords: [群, 表示论, 李群, 对称变换, 不可约表示]
updated: 2026-08-13
links:
  - {id: linear-algebra, weight: 3, note: 表示论基于线性代数}
  - {id: conservation-laws, weight: 4, note: 诺特定理联系对称性与守恒量}
  - {id: angular-momentum-qm, weight: 5, note: 旋转群 SO(3) 与角动量}
  - {id: standard-model, weight: 4, note: 规范群 SU(3)×SU(2)×U(1)}
  - {id: crystallography, weight: 4, note: 空间群与晶体对称性}
  - {id: special-functions, weight: 2}
superseded_by: []
supersedes: []
---
# 群论

## 概述

群论研究**对称性**的代数结构：一个群是带二元运算、满足封闭性/结合律/存在单位元/存在逆元的集合。对物理最重要的是**李群**（连续对称群，如旋转群 $SO(3)$、酉群 $SU(n)$、洛伦兹群）与**表示论**——把群元素实现为作用在向量空间上的矩阵。群论之所以是物理的核心语言，在于**诺特定理**：每个连续对称性对应一个守恒量（时间平移→能量、空间平移→动量、旋转→角动量），从而把"对称性"与"守恒律"直接联系起来。

## 基本概念

- **群**：$(G,\cdot)$ 满足四条公理；**阿贝尔群**满足交换律。
- **子群 / 正规子群 / 商群**：群的子结构；**同态**保持运算的映射。
- **李群 / 李代数**：光滑流形上的群；李代数是其单位元处的切空间，以李括号 $[X,Y]$ 为乘法。
- **表示**：群到 $GL(V)$ 的同态；**不可约表示**是无可约子空间的表示。
- **特征标**：表示的迹 $\chi(g)=\mathrm{tr}\,\rho(g)$。

## 核心内容

### 基本定律 / 方程

李代数基本关系（以 $SU(2)$/角动量为代表）：

$$ [J_i,J_j]=i\hbar\,\epsilon_{ijk}J_k $$

不可约表示的特征标正交性：

$$ \frac{1}{|G|}\sum_{g\in G}\chi^{(\alpha)}(g)^*\chi^{(\beta)}(g)=\delta_{\alpha\beta} $$

**诺特定理**：作用量在连续变换 $q\to q+\epsilon\,\delta q$ 下不变，则守恒流

$$ \partial_\mu j^\mu=0,\qquad j^\mu=\frac{\partial\mathcal L}{\partial(\partial_\mu q)}\delta q $$

### 推导要点

- **诺特定理**：把变换代入作用量，令 $\delta S=0$ 对任意区域成立，分部积分后得到连续性方程 $\partial_\mu j^\mu=0$，其空间积分给出守恒荷。
- **特征标正交性**：由表示矩阵元的大正交性定理（舒尔引理 + 不可约性）求和得到。
- **$SO(3)$ 的表示**：用生成元 $J_\pm,J_z$ 的代数关系，从最高权态递降构造 $|j,m\rangle$，得到维数 $2j+1$ 的不可约表示。

### 重要定理与推论

- **舒尔引理**：与不可约表示所有元素对易的算符必为常数倍单位矩阵（量子力学中"守恒量与哈密顿量对易"的根源）。
- **不可约表示的直和分解**：任意表示分解为不可约表示直和，特征标判定是否等价。
- **维格纳-埃卡特定理**：矩阵元分解为几何因子（CG 系数）与约化矩阵元。
- **群的正交表示**：有限群/紧李群的表示可酉化。

## 深化内容

群论的物理应用贯穿现代物理：**规范群**（$U(1)$、$SU(2)$、$SU(3)$）给出标准模型的相互作用；**晶体空间群**（230 个）分类晶体对称；**李代数的分类**（嘉当-基灵）给出 $A_n,B_n,C_n,D_n$ 与例外李代数；**表示论**决定粒子谱与选择定则。延伸阅读可参考 Georgi《Lie Algebras in Particle Physics》、Tung《Group Theory in Physics》、Hamermesh《Group Theory》。

## 与其他知识的联系

- 紧密相关：[[angular-momentum-qm]] 中 $SO(3)$ 的不可约表示给出角动量量子数；[[conservation-laws]] 来自对称性（诺特定理）。
- 应用：[[standard-model]] 的规范群、[[crystallography]] 的空间群、[[condensed-matter-physics]] 的能带对称性。
- 基础：[[linear-algebra]]（表示论）。

## 前置知识

- [[linear-algebra]]、[[set-theory]]
