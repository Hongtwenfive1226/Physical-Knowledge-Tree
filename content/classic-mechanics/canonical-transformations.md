---
id: canonical-transformations
name: 正则变换
name_en: Canonical Transformations
domain: classic-mechanics
aliases: [正则变换理论]
tags: [力学, 相空间, 辛结构]
keywords: [生成函数, 辛条件, 正则不变量]
updated: 2026-08-13
links:
  - {id: hamiltonian-mechanics, weight: 5, note: 正则变换是哈密顿力学的核心工具}
  - {id: poisson-brackets, weight: 5, note: 泊松括号在正则变换下不变}
  - {id: hamilton-jacobi-theory, weight: 5, note: 目标是把系统变换到作用-角变量}
  - {id: chaos-theory, weight: 2}
  - {id: quantum-mechanics, weight: 2}
superseded_by: []
supersedes: []
---
# 正则变换

## 概述

正则变换是相空间 $(q,p)\to(Q,P)$ 中**保持哈密顿方程形式不变**的坐标变换，是哈密顿力学的核心工具。其数学本质是**保辛变换**（保持辛形式 $\sum dq_i\wedge dp_i$）。正则变换的价值在于：通过选择合适的变换，可以把难以求解的哈密顿系统化为可解系统（如循环坐标、作用-角变量），这正是[[hamilton-jacobi-theory]] 的策略。正则变换由**生成函数**系统描述。

## 基本概念

- **辛结构**：$\omega=\sum dq_i\wedge dp_i$；正则变换保持 $\omega$ 不变。
- **生成函数**：四种类型 $F_1(q,Q,t)$、$F_2(q,P,t)$、$F_3(p,Q,t)$、$F_4(p,P,t)$。
- **新哈密顿量**：$K=H+\partial F/\partial t$。
- **正则不变量**：泊松括号、相空间体积（刘维尔定理）在正则变换下不变。

## 核心内容

### 基本定律 / 方程

第二类生成函数 $F_2(q,P,t)$ 给出的变换：

$$ p_i=\frac{\partial F_2}{\partial q_i},\qquad Q_i=\frac{\partial F_2}{\partial P_i},\qquad K=H+\frac{\partial F_2}{\partial t} $$

正则变换的**辛条件**（直接判据）：

$$ \{Q_i,Q_j\}=0,\quad \{P_i,P_j\}=0,\quad \{Q_i,P_j\}=\delta_{ij} $$

### 推导要点

- **生成函数来源**：要求变换保持作用量的差为全微分 $\sum p_idq_i-\sum P_idQ_i+(K-H)dt=dF$，由此 $F$ 的各偏导给出变换关系。
- **辛条件等价**：正则变换保持泊松括号不变 $\{f,g\}_{q,p}=\{f,g\}_{Q,P}$；对基本变量取括号即得辛条件。
- **无穷小正则变换**：取 $F_2=q_iP_i+\epsilon G(q,P,t)$，得 $\delta q_i=\epsilon\frac{\partial G}{\partial p_i}$、$\delta p_i=-\epsilon\frac{\partial G}{\partial q_i}$，$G$ 即生成函数。

### 重要定理与推论

- **对称性与守恒**：若无穷小正则变换由 $G$ 生成且使 $H$ 不变，则 $G$ 是运动积分（诺特定理的哈密顿表述）。
- **刘维尔定理**：正则变换保持相空间体积元 $d^np\,d^nq$。
- **四类生成函数**：通过勒让德变换相互转换，可覆盖各种变换（如 $q\to p$ 交换）。

## 深化内容

正则变换的现代视角是**辛几何**：相空间是辛流形，正则变换是辛同胚，无穷小辛变换对应哈密顿向量场。**作用-角变量**（[[hamilton-jacobi-theory]]）是完全可积系统的标准坐标。正则变换在量子力学中对应**幺正变换**（表象变换）。延伸阅读可参考朗道《力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。

## 与其他知识的联系

- 紧密相关：[[hamiltonian-mechanics]]、[[poisson-brackets]]、[[hamilton-jacobi-theory]]。
- 现代视角：辛几何（[[differential-geometry]]）、[[quantum-mechanics]]（幺正变换）。

## 前置知识

- [[hamiltonian-mechanics]]、[[poisson-brackets]]
