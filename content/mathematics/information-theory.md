---
id: information-theory
name: 信息论
name_en: Information Theory
domain: mathematics
aliases: [香农信息论]
tags: [数学, 信息, 熵]
keywords: [香农熵, 互信息, 信道容量, KL散度]
updated: 2026-08-13
links:
  - {id: probability-theory, weight: 5, note: 信息论以概率论为基础}
  - {id: entropy-information, weight: 5, note: 熵的统计与信息两种诠释}
  - {id: quantum-information, weight: 5, note: 量子信息是信息论的量子推广}
  - {id: statistical-mechanics, weight: 3}
  - {id: thermodynamics, weight: 3}
superseded_by: []
supersedes: []
---
# 信息论

## 概述

信息论由香农在 1948 年建立，用概率量化"信息"与"不确定性"。核心量是**香农熵** $H(X)$，它度量随机变量的不确定度，也等于对其最优编码所需的最小平均比特数。两条编码定理——**信源编码定理**与**信道编码定理**——分别给出无损压缩的极限与可靠通信的速率上限。香农熵在形式上与统计力学的玻尔兹曼熵一致，而**兰道尔原理**进一步把"擦除一比特信息"与"耗散 $k_BT\ln2$ 能量"联系起来，揭示信息与物理熵的深层统一。

## 基本概念

- **香农熵**：$H(X)=-\sum_x p(x)\log p(x)$（比特单位取 $\log_2$）。
- **联合熵 / 条件熵**：$H(X,Y)$、$H(X|Y)=\sum_y p(y)H(X|Y=y)$。
- **互信息**：$I(X;Y)=H(X)-H(X|Y)=H(X)+H(Y)-H(X,Y)$。
- **KL 散度**（相对熵）：$D(p\|q)=\sum_x p(x)\log\frac{p(x)}{q(x)}$，度量两个分布的距离。
- **信道**：输入→输出的条件分布 $p(y|x)$；**信道容量** $C$ 是可靠通信速率上限。

## 核心内容

### 基本定律 / 方程

**熵的链式法则**：

$$ H(X,Y)=H(X)+H(Y|X) $$

**互信息与熵的关系**：

$$ I(X;Y)=H(X)+H(Y)-H(X,Y) $$

**信道容量**（香农公式，高斯信道）：

$$ C = \frac12\log_2\Big(1+\frac{P}{N}\Big) $$

### 推导要点

- **熵的非负性与上界**：由 $-\log p\ge0$ 得 $H\ge0$；由凸性（琴生不等式）得 $H(X)\le\log|\mathcal X|$（等号当且仅当均匀分布）。
- **链式法则**：由 $p(x,y)=p(x)p(y|x)$ 与 $\log(ab)=\log a+\log b$ 展开求和得到。
- **互信息非负**：$I(X;Y)=D(p_{XY}\|p_Xp_Y)\ge0$（KL 散度非负），等号当且仅当 $X,Y$ 独立。

### 重要定理与推论

- **信源编码定理**：$n$ 个独立样本可压缩到约 $nH(X)$ 比特，且不可再少。
- **信道编码定理**：只要速率 $R<C$，就存在编码使误码率任意小；$R>C$ 则不可能。
- **数据处理不等式**：$X\to Y\to Z$ 时 $I(X;Z)\le I(X;Y)$（信息只能衰减）。
- **兰道尔原理**：擦除 1 比特至少耗散 $k_BT\ln2$ 的热量，联系信息与热力学。

## 深化内容

信息论的量子推广是**量子信息论**（[[quantum-information]]）：冯诺依曼熵 $S(\rho)=-\mathrm{tr}(\rho\ln\rho)$、量子互信息、量子信道容量、纠缠熵。**算法信息论**（柯尔莫哥洛夫复杂度）研究对象的最短描述长度。信息论还与**统计力学**、**机器学习**（交叉熵损失）深度交叉。延伸阅读可参考 Cover & Thomas《Elements of Information Theory》、MacKay《Information Theory, Inference, and Learning Algorithms》、Nielsen & Chuang《量子计算与量子信息》。

## 与其他知识的联系

- 紧密相关：[[entropy-information]]（熵的双重身份）、[[quantum-information]]（冯诺依曼熵）、[[probability-theory]]（基础）。
- 相关：[[statistical-mechanics]] / [[thermodynamics]]（物理熵）。

## 前置知识

- [[probability-theory]]
