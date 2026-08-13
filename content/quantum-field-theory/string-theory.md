---
id: string-theory
name: 弦理论
name_en: String Theory
domain: quantum-field-theory
aliases: [超弦理论]
tags: [量子引力, 弦, 统一理论]
keywords: [超弦, 额外维度, 对偶性, 卡拉比-丘流形]
updated: 2026-08-13
links:
  - {id: quantum-field-theory, weight: 4, note: 场论的一般化}
  - {id: general-relativity, weight: 4, note: 目标之一是量子引力}
  - {id: differential-geometry, weight: 4, note: 卡拉比-丘流形}
  - {id: black-holes, weight: 3, note: 黑洞熵的微观计数}
  - {id: gauge-field-theory, weight: 3, note: 对偶性}
  - {id: topology, weight: 2}
  - {id: quantum-gravity, weight: 4, note: 量子引力候选}
superseded_by: []
supersedes: []
---
# 弦理论

## 概述

弦理论把基本粒子替换为**一维弦**的振动模式，从而自然地把量子力学、引力与规范相互作用纳入单一框架。弦的振动谱中天然包含无质量**自旋-2 态**（引力子），因此弦理论是引力量子化的候选。理论要求额外空间维数（超弦为 10 维），额外维紧致化在**卡拉比-丘流形**上。**对偶性**（T 对偶、S 对偶）与 M 理论统一了五种超弦理论。弦理论为黑洞熵提供了微观统计解释（[[black-holes]]），并给出规范/引力的对偶（AdS/CFT），但尚无直接的实验验证。

## 基本概念

- **弦 / 世界面**：一维弦在时空扫出的二维面。
- **开弦 / 闭弦**：端点自由 / 闭合的弦。
- **引力子**：闭弦的无质量自旋-2 激发。
- **卡拉比-丘流形**：额外维紧致的流形。
- **对偶性 / M 理论**：各弦理论间的等价关系。

## 核心内容

### 基本定律 / 方程

弦的作用量（玻色弦，Nambu-Goto 或 Polyakov）：

$$ S=-\frac1{2\pi\alpha'}\int d^2\sigma\sqrt{-\det(\partial_aX^\mu\partial_bX_\mu)} $$

弦振动谱的质量公式（开弦）：

$$ M^2=\frac1{\alpha'}(N-1) $$

其中 $N$ 为振子数算符本征值、$\alpha'$ 为弦张力参数。

### 推导要点

- **弦的量子化**：对 $X^\mu(\sigma,\tau)$ 做模式展开，正则量子化；要求洛伦兹不变性 → 临界维数 $D=26$（玻色弦）/ $10$（超弦）。
- **引力子**：闭弦的无质量自旋-2 态即引力子的场论极限。
- **对偶性**：T 对偶联系大/小半径紧化，S 对偶联系弱/强耦合，M 理论在 11 维统一。

### 重要定理与推论

- **引力的自然包含**：弦谱含自旋-2 无质量态。
- **黑洞熵的微观计数**：极端黑洞熵与弦态数一致（[[black-holes]]）。
- **AdS/CFT 对偶**：引力与规范场论的全息对偶（[[gauge-field-theory]]）。
- **额外维紧致化**：真空的多样性与弦景观问题。

## 深化内容

弦理论是 [[quantum-gravity]] 的主要候选，与 [[differential-geometry]]（卡拉比-丘）、[[topology]]（镜像对称）深度交叉。AdS/CFT 对偶连接引力与 [[quantum-information]]（全息原理）。弦景观与宇宙学（多重宇宙）是前沿。延伸阅读可参考 Polchinski《String Theory》、Zwiebach《A First Course in String Theory》、Green, Schwarz & Witten《Superstring Theory》。

## 与其他知识的联系

- 紧密相关：[[quantum-field-theory]]、[[general-relativity]]（量子引力）、[[differential-geometry]]。
- 应用：[[black-holes]]（熵计算）、[[gauge-field-theory]]（AdS/CFT 对偶）、[[topology]]、[[quantum-gravity]]。

## 前置知识

- [[quantum-field-theory]]、[[general-relativity]]、[[differential-geometry]]
