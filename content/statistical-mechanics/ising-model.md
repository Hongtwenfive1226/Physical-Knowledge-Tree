---
id: ising-model
name: 伊辛模型
name_en: Ising Model
domain: statistical-mechanics
aliases: [Ising模型]
tags: [统计物理, 模型, 自旋格点]
keywords: [自旋, 相变, 平均场, 精确解]
updated: 2026-08-13
links:
  - {id: phase-transitions, weight: 5, note: 相变的原型模型}
  - {id: statistical-mechanics, weight: 5, note: 统计力学重要模型}
  - {id: renormalization, weight: 4, note: 重正化群研究其临界行为}
  - {id: condensed-matter-physics, weight: 4, note: 磁性模型}
  - {id: probability-theory, weight: 2}
  - {id: critical-phenomena, weight: 4}
superseded_by: []
supersedes: []
---
# 伊辛模型

## 概述

伊辛模型把磁体抽象为晶格上的自旋变量 $s_i=\pm1$，相邻自旋有交换相互作用，是**相变与临界现象的原型模型**。其价值在于：一维可精确求解（无相变）、二维可精确求解（昂萨格 1944，有连续相变）、高维用平均场近似，而重正化群把伊辛模型作为检验普适性的标准模型。伊辛模型尽管简单，却抓住了相变的本质——相互作用、热涨落与对称性破缺的竞争。

## 基本概念

- **自旋变量**：$s_i=\pm1$。
- **哈密顿量**：$H=-J\sum_{\langle ij\rangle}s_is_j-h\sum_is_i$（$J>0$ 铁磁）。
- **配分函数**：$Z=\sum_{\{s_i\}}e^{-\beta H}$。
- **磁化强度**：$M=\langle s_i\rangle$；**临界温度** $T_c$。

## 核心内容

### 基本定律 / 方程

哈密顿量与配分函数：

$$ H=-J\sum_{\langle ij\rangle}s_is_j-h\sum_is_i,\qquad Z=\sum_{\{s_i\}}e^{-\beta H} $$

**平均场方程**：

$$ M=\tanh\big(\beta(JzM+h)\big) $$

（$z$ 为配位数），$h=0$ 时临界温度 $k_BT_c=Jz$。

**二维精确解**（昂萨格）：临界温度

$$ \frac{k_BT_c}{J}=\frac{2}{\ln(1+\sqrt2)}\approx2.269 $$

### 推导要点

- **平均场近似**：把 $s_is_j$ 近似为 $\langle s_i\rangle s_j+s_i\langle s_j\rangle-\langle s_i\rangle\langle s_j\rangle$，忽略涨落，得到自洽方程 $M=\tanh(\beta JzM)$。
- **一维转移矩阵法**：用 $2\times2$ 转移矩阵 $T$，$Z=\mathrm{tr}\,T^N$，本征值给出无相变（$T_c=0$）。
- **二维昂萨格解**：用转移矩阵 + 李代数（洋葱交）方法精确求解，比热对数发散 $\alpha=0$。

### 重要定理与推论

- **维度决定相变**：一维无相变、二维以上有相变（朗道-佩尔斯证明一维无长程有序）。
- **平均场失效于低维**：平均场指数（$\beta=1/2$）与二维精确解（$\beta=1/8$）不符，揭示涨落的重要性。
- **普适性**：二维伊辛模型的临界指数与大量物理系统相同（[[critical-phenomena]]）。
- **自发磁化**：$T<T_c$ 时 $M\neq0$，对称性自发破缺。

## 深化内容

伊辛模型的推广：$\mathrm{XY}$ 模型（连续自旋，Kosterlitz-Thouless 相变）、海森堡模型、Potts 模型。**重正化群**（[[renormalization]]）对伊辛模型给出精确的临界指数与标度关系。伊辛模型还应用于神经网络（霍普菲尔德模型）、社会动力学、图像去噪。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Baxter《Exactly Solved Models in Statistical Mechanics》、Goldenfeld《Lectures on Phase Transitions》。

## 与其他知识的联系

- 紧密相关：[[phase-transitions]]/[[critical-phenomena]]（研究对象）、[[renormalization]]（现代求解方法）。
- 应用：[[condensed-matter-physics]]（磁学）、神经网络（霍普菲尔德模型）、社会动力学。

## 前置知识

- [[statistical-mechanics]]、[[probability-theory]]
