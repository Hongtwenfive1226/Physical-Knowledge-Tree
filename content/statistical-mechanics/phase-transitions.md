---
id: phase-transitions
name: 相变与临界现象
name_en: Phase Transitions & Critical Phenomena
domain: statistical-mechanics
aliases: [相变, 临界点]
tags: [统计物理, 相变, 临界]
keywords: [序参量, 一级相变, 二级相变, 临界指数]
updated: 2026-08-13
links:
  - {id: statistical-mechanics, weight: 5, note: 相变的统计基础}
  - {id: ising-model, weight: 5, note: 相变的原型模型}
  - {id: thermodynamics, weight: 4, note: 相平衡与热力学势}
  - {id: critical-phenomena, weight: 5, note: 临界行为}
  - {id: fluctuation-theory, weight: 3, note: 临界涨落}
  - {id: renormalization, weight: 4, note: 重正化群}
superseded_by: []
supersedes: []
---
# 相变与临界现象

## 概述

相变是物质宏观状态（相）之间的转变，是统计力学最深刻的现象之一。按热力学势（吉布斯自由能）的奇异性分类：**一级相变**（潜热、序参量跃变，如汽-液、固-液）与**二级（连续）相变**（序参量连续、比热发散，如铁磁-顺磁、超流）。相变用**序参量**刻画有序程度，临界点附近由**临界指数**描述幂律奇异行为；临界点涨落发散、关联长度趋于无穷，普适性由**重正化群**解释。

## 基本概念

- **序参量**：刻画有序度的量（磁化 $M$、密度差 $\Delta\rho$、超流波函数）。
- **一级 / 二级相变**：序参量跃变 / 连续、潜热有无。
- **临界点**：二级相变发生的温度 $T_c$。
- **临界指数**：$\alpha,\beta,\gamma,\delta,\nu$ 等幂律指数。
- **关联长度** $\xi$：涨落的空间尺度。

## 核心内容

### 基本定律 / 方程

相平衡条件：两相 $T,p,\mu$ 相等（克劳修斯-克拉珀龙方程）：

$$ \frac{dp}{dT}=\frac{L}{T\Delta v} $$

**朗道理论**（序参量自由能展开）：

$$ F[M]=F_0+\frac12a(T-T_c)M^2+\frac14bM^4 $$

临界行为（幂律）：

$$ M\sim(T_c-T)^\beta,\qquad \chi\sim|T-T_c|^{-\gamma},\qquad C\sim|T-T_c|^{-\alpha} $$

### 推导要点

- **相平衡**：吉布斯自由能极小 $\mu_1=\mu_2$，微分得克劳修斯-克拉珀龙方程。
- **朗道理论**：对称性允许把自由能对序参量展开到 $M^4$，极小化 $\partial F/\partial M=0$ 给出 $M\propto\sqrt{T_c-T}$（$\beta=1/2$）。
- **临界指数的实验/精确值**：朗道给出平均场指数（$\beta=1/2,\gamma=1$），与二维伊辛模型精确解（昂萨格）及实验不同，需重正化群修正。

### 重要定理与推论

- **一级相变的潜热与共存**：两相共存线、临界点结束。
- **二级相变的幂律**：临界指数满足标度关系（$\alpha+2\beta+\gamma=2$ 等）。
- **普适性**：临界指数只依赖维度与对称性，不依赖微观细节。
- **序参量的对称性破缺**：低温相的自发对称破缺（见 [[spontaneous-symmetry-breaking]]）。

## 深化内容

相变的现代理论是**重正化群**（[[renormalization]]、[[critical-phenomena]]）：威尔逊把标度变换与临界指数联系，解释普适性。应用遍及 [[superconductivity]]、[[bose-einstein-condensation]]、液晶（[[liquid-crystals]]）、宇宙早期相变。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Goldenfeld《Lectures on Phase Transitions》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[ising-model]]（理论模型）、[[critical-phenomena]]（临界行为）、[[thermodynamics]]（热力学描述）。
- 现代方法：[[renormalization]]（重正化群）、[[fluctuation-theory]]。
- 应用：[[superconductivity]]、[[bose-einstein-condensation]]、宇宙相变。

## 前置知识

- [[statistical-mechanics]]、[[thermodynamics]]、[[ensembles]]
