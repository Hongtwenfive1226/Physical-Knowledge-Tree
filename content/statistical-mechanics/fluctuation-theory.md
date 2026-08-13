---
id: fluctuation-theory
name: 涨落理论
name_en: Fluctuation Theory
domain: statistical-mechanics
aliases: [涨落, 布朗运动, 随机过程]
tags: [统计物理, 涨落, 随机]
keywords: [涨落耗散定理, 布朗运动, 朗之万方程, 相关函数]
updated: 2026-08-13
links:
  - {id: statistical-mechanics, weight: 5, note: 平衡涨落}
  - {id: probability-theory, weight: 5, note: 随机过程}
  - {id: thermodynamics, weight: 3, note: 涨落与热力学量的关联}
  - {id: critical-phenomena, weight: 4, note: 临界点涨落发散}
  - {id: quantum-measurement, weight: 2}
  - {id: transport-theory, weight: 3, note: 涨落-耗散}
  - {id: phase-transitions, weight: 3}
superseded_by: []
supersedes: []
---
# 涨落理论

## 概述

涨落理论研究物理量在平均值附近的**随机偏离**，是统计力学与随机过程（[[probability-theory]]）的交汇。平衡涨落由热力学势的曲率决定（能量涨落 $\propto$ 比热）；**布朗运动**与**朗之万方程**描述随机力驱动的动力学；**涨落-耗散定理**（爱因斯坦、昂萨格）把平衡涨落与线性响应（耗散系数）联系起来，是非平衡统计的核心结论。临界点附近涨落发散，需要重正化群处理。

## 基本概念

- **涨落**：$\delta X=X-\langle X\rangle$；方差 $\langle(\delta X)^2\rangle$。
- **布朗运动**：微粒在流体中的随机行走。
- **朗之万方程**：含随机力的运动方程。
- **关联函数**：$\langle\delta X(t)\delta X(t')\rangle$。
- **涨落-耗散定理**：涨落（噪声）与耗散（摩擦）的联系。

## 核心内容

### 基本定律 / 方程

**能量涨落**：

$$ \overline{(\Delta E)^2}=k_BT^2C_V $$

**布朗运动（爱因斯坦关系）**：

$$ \langle x^2\rangle=2Dt,\qquad D=\frac{k_BT}{\gamma} $$

**朗之万方程**：

$$ m\frac{dv}{dt}=-\gamma v+\eta(t),\qquad \langle\eta(t)\eta(t')\rangle=2\gamma k_BT\,\delta(t-t') $$

**涨落-耗散定理**：

$$ \mathrm{Im}\,\chi(\omega)\propto\int_{-\infty}^{\infty}\langle X(0)X(t)\rangle e^{i\omega t}dt $$

### 推导要点

- **能量涨落**：由 $\langle E\rangle=-\partial\ln Z/\partial\beta$ 对 $\beta$ 求导得 $\langle(\Delta E)^2\rangle=\partial^2\ln Z/\partial\beta^2=k_BT^2C_V$。
- **爱因斯坦关系**：布朗粒子达到力平衡 $\gamma v$（摩擦）与渗透压梯度（随机力），由涨落-耗散得到 $D=k_BT/\gamma$。
- **朗之万方程**：随机力 $\eta(t)$ 满足高斯白噪声，其强度由涨落-耗散定理确定为 $2\gamma k_BT$。

### 重要定理与推论

- **涨落-耗散定理**：线性响应的耗散部分与平衡涨落的关系（噪声是耗散的"另一面"）。
- **临界涨落**：临界点附近关联长度发散，涨落增强（[[critical-phenomena]]）。
- **昂萨格倒易关系**：交叉输运系数的对称性（[[nonequilibrium-thermodynamics]]）。
- **布朗运动的均方位移**：$\langle x^2\rangle=2Dt$ 线性增长（扩散）。

## 深化内容

涨落理论是**随机过程**（[[probability-theory]]：马尔可夫、维纳、Ornstein-Uhlenbeck）与 **噪声分析** 的基础；**临界涨落**由重正化群（[[renormalization]]）处理。涨落-耗散定理推广到量子情形（量子涨落-耗散定理），与 [[quantum-measurement]] 的测量噪声相关。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Pathria《Statistical Mechanics》、Chandler《Introduction to Modern Statistical Mechanics》。

## 与其他知识的联系

- 紧密相关：[[statistical-mechanics]]、[[probability-theory]]（随机过程）、[[transport-theory]]（涨落-耗散）。
- 临界现象：[[phase-transitions]]/[[critical-phenomena]] 中涨落发散。
- 应用：噪声分析、[[quantum-measurement]]（测量噪声）。

## 前置知识

- [[statistical-mechanics]]、[[probability-theory]]
