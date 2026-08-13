---
id: critical-phenomena
name: 临界现象
name_en: Critical Phenomena
domain: statistical-mechanics
aliases: [临界现象理论, 临界指数]
tags: [统计物理, 临界, 标度]
keywords: [临界指数, 标度律, 普适类, 关联长度]
updated: 2026-08-13
links:
  - {id: phase-transitions, weight: 5, note: 连续相变在临界点的行为}
  - {id: renormalization, weight: 5, note: 重正化群解释临界现象}
  - {id: fluctuation-theory, weight: 4, note: 临界涨落}
  - {id: ising-model, weight: 4, note: 原型模型}
  - {id: statistical-mechanics, weight: 4}
superseded_by: [renormalization]
supersedes: []
---
# 临界现象

## 概述

临界现象是连续相变**临界点附近**的奇异行为：关联长度 $\xi$ 发散、涨落放大、热力学量呈**幂律**奇异。临界行为由一组**临界指数**（$\alpha,\beta,\gamma,\delta,\nu$）刻画，它们满足标度关系，且只依赖空间维度与序参量对称性——即**普适类**。重正化群从理论上解释了普适性：临界点对应重整化变换的不动点，标度不变性直接给出幂律。

## 基本概念

- **约化温度**：$t=(T-T_c)/T_c$。
- **临界指数**：$\alpha$（比热）、$\beta$（序参量）、$\gamma$（磁化率）、$\nu$（关联长度）、$\eta$（关联函数）。
- **关联长度** $\xi\sim|t|^{-\nu}$。
- **普适类**：共享相同临界指数与标度函数的系统集合。

## 核心内容

### 基本定律 / 方程

临界幂律：

$$ C\sim|t|^{-\alpha},\qquad M\sim|t|^\beta,\qquad \chi\sim|t|^{-\gamma},\qquad \xi\sim|t|^{-\nu} $$

关联函数（临界点）：

$$ G(r)\sim\frac{e^{-r/\xi}}{r^{d-2+\eta}},\qquad \xi\to\infty\ \Rightarrow\ G(r)\sim\frac1{r^{d-2+\eta}} $$

**标度关系**：

$$ \alpha+2\beta+\gamma=2,\qquad \gamma=\nu(2-\eta),\qquad \nu d=2-\alpha $$

### 推导要点

- **标度假设**：自由能奇异部分满足标度形式 $f_s(t,h)=b^{-d}f_s(b^{y_t}t,b^{y_h}h)$，由此导出临界指数的标度关系。
- **重正化群的思想**：逐步粗粒化（积分掉短波涨落），临界点在标度变换下的不动点给出幂律与指数。
- **高斯近似失效**：关联长度发散时涨落不可忽略，平均场（朗道）理论在 $d<4$ 失效。

### 重要定理与推论

- **普适性**：临界指数只依赖维度与对称性，与微观细节无关。
- **标度律**：临界指数不独立，满足标度关系（只有两个独立指数）。
- **上临界维度**：$d>d_c=4$ 时平均场理论成立，$d<4$ 需重正化群。
- **二维伊辛精确值**：$\alpha=0,\beta=1/8,\gamma=7/4,\nu=1$（昂萨格解）。

## 深化内容

临界现象由**重正化群**（[[renormalization]]，威尔逊 1971）系统解决，是理论物理的里程碑。应用遍及超流/超导相变、液晶、聚合物、宇宙早期相变与量子相变。延伸阅读可参考 Goldenfeld《Lectures on Phase Transitions》、Kardar《Statistical Physics of Fields》、Wilson 原始论文。

## 与其他知识的联系

- 紧密相关：[[phase-transitions]]、[[renormalization]]（解释）、[[ising-model]]、[[fluctuation-theory]]。
- 应用：超流体/超导相变、聚合物、宇宙早期相变。

## 前置知识

- [[phase-transitions]]、[[ising-model]]、[[statistical-mechanics]]
