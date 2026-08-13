---
id: linear-algebra
name: 线性代数
name_en: Linear Algebra
domain: mathematics
aliases: [矩阵论, 线性空间]
tags: [数学, 矩阵, 线性空间, 特征值]
keywords: [向量空间, 矩阵, 行列式, 特征值, 内积]
updated: 2026-08-13
links:
  - {id: calculus, weight: 4, note: 多元微积分与线性代数共同构成数学分析的基础}
  - {id: group-theory, weight: 3, note: 线性变换构成一般线性群}
  - {id: tensor-calculus, weight: 4, note: 张量可视为多重线性映射的推广}
  - {id: quantum-mechanics, weight: 5, note: 量子力学态空间是希尔伯特空间，算符是线性算子}
  - {id: differential-equations, weight: 4, note: 常系数线性微分方程组用矩阵指数求解}
  - {id: eigenvalue-problems, weight: 5, note: 本征值问题是线性代数在数学物理中的核心应用}
  - {id: vibration-theory, weight: 3, note: 简正坐标归结为矩阵对角化}
superseded_by: []
supersedes: []
---
# 线性代数

## 概述

线性代数研究**线性空间**（向量空间）及其上的**线性映射**，是量子力学、多元分析、微分方程与数据科学的基础语言。其对象——向量空间、矩阵、行列式、特征值——在物理中的核心地位体现为：量子态构成希尔伯特空间，可观测算符是自伴线性算子，测量值即其本征值。线性代数的"中枢定理"是**谱定理**：实对称（复厄米）矩阵可通过正交（酉）变换对角化，且特征值为实数。

## 基本概念

- **线性空间**：定义加法与数乘且满足八条公理的集合；基底与维数刻画其"大小"。
- **线性映射**：$T(\alpha u+\beta v)=\alpha T(u)+\beta T(v)$；选定基后表示为矩阵。
- **矩阵运算**：加法、数乘、乘法（对应复合）、转置 $A^T$、共轭转置 $A^\dagger$、逆 $A^{-1}$。
- **行列式** $\det A$：方阵的标量不变量，刻画体积缩放因子，且 $\det A\ne0\iff A$ 可逆。
- **特征值与特征向量**：$Av=\lambda v$ 的非零解；$\lambda$ 是特征多项式 $\det(A-\lambda I)=0$ 的根。
- **内积空间**：$\langle u,v\rangle$（复空间对第一个变量共轭线性），诱导范数 $\|v\|=\sqrt{\langle v,v\rangle}$。

## 核心内容

### 基本定律 / 方程

特征方程与对角化：

$$ Av=\lambda v \iff \det(A-\lambda I)=0,\qquad A = PDP^{-1} $$

**谱定理**（实对称/复厄米情形）：

$$ A = U\Lambda U^\dagger,\qquad U^\dagger U=I,\quad \Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n),\ \lambda_i\in\mathbb R $$

**凯莱-哈密顿定理**：方阵满足自身的特征多项式 $p(A)=0$。

### 推导要点

- **特征值问题的来源**：把微分方程组 $\dot x=Ax$ 的解设成 $x=e^{\lambda t}v$，代入得 $Av=\lambda v$。
- **谱定理（对称情形）**：用二次型 $Q(x)=x^TAx$ 在单位球上的极值法——设 $v_1$ 使 $Q$ 取极大，拉格朗日乘子给出 $Av_1=\lambda_1v_1$，在正交补上归纳即得对角化。
- **对角化的威力**：若 $A=PDP^{-1}$，则 $A^k=PD^kP^{-1}$，故 $e^{tA}=Pe^{tD}P^{-1}$ 直接给出 $\dot x=Ax$ 的解。

### 重要定理与推论

- **秩-零化度定理**：$\dim\ker T+\dim\mathrm{Im}\,T=\dim V$，是线性方程组解结构的根基。
- **逆矩阵与克拉默法则**：$A^{-1}=\mathrm{adj}(A)/\det A$。
- **正定矩阵与二次型**：$A\succ0$ 的所有特征值为正，对应多元函数极小值的判据（黑塞矩阵正定）。
- **极分解与奇异值分解（SVD）**：$A=U\Sigma V^\dagger$，是数值线性代数与现代数据方法的基石。
- **最小二乘**：超定方程 $Ax\approx b$ 的正规方程 $A^TAx=A^Tb$，是数据拟合的标准工具。

## 深化内容

无限维推广是**泛函分析**：希尔伯特空间的谱理论把"厄米矩阵对角化"推广为自伴算符的谱分解，是量子力学中位置、动量、能量算符的数学基础；线性泛函、对偶空间、紧算子、无界自伴算符构成量子力学的严格框架。**表示论**把群元素表示为线性变换（矩阵），连接线性代数与群论。SVD 与低秩近似则是现代机器学习与信息压缩的核心。延伸阅读可参考 Strang《线性代数》、Hoffman & Kunze《Linear Algebra》、Halmos《Finite-Dimensional Vector Spaces》。

## 与其他知识的联系

- 紧密相关：[[quantum-mechanics]]（态空间与算符）、[[eigenvalue-problems]]（本征值问题）。
- 相关：[[tensor-calculus]]（多重线性推广）、[[group-theory]]（表示论）、[[differential-equations]]（矩阵指数）。
- 应用：[[vibration-theory]]（简正模）、[[band-theory]]（能带）、[[quantum-information]]（量子比特与密度矩阵）。

## 前置知识

- [[set-theory]]（空间与映射的概念基础）
