---
id: bell-inequalities
name: 贝尔不等式
name_en: Bell Inequalities
domain: quantum-mechanics
aliases: [贝尔定理, CHSH]
tags: [量子, 非定域性, 隐变量]
keywords: [贝尔定理, CHSH不等式, 隐变量理论]
updated: 2026-08-13
links:
  - {id: entanglement, weight: 5, note: 纠缠态违反贝尔不等式}
  - {id: quantum-mechanics, weight: 5, note: 量子力学的非定域性}
  - {id: quantum-measurement, weight: 3}
  - {id: probability-theory, weight: 3, note: 隐变量与局部因果}
superseded_by: []
supersedes: []
---
# 贝尔不等式

## 概述

贝尔定理（1964）解决了爱因斯坦-波多尔斯基-罗森（EPR）提出的"量子力学是否不完备"问题：贝尔证明，任何满足**定域性**与**实在性**的隐变量理论都必须服从一组不等式（贝尔不等式），而量子力学对纠缠态的预言**违反**这组不等式。随后的实验（阿斯佩 1982 等）明确支持量子力学，从而排除了定域隐变量理论，确立量子关联的**非定域性**——这是量子力学基础的核心结论。

## 基本概念

- **定域实在论**：测量结果由预先存在的隐变量决定，且不受类空间隔影响。
- **关联函数**：$E(a,b)=\langle A_aB_b\rangle$。
- **CHSH 不等式**：贝尔不等式最常用的实验形式。
- **EPR 对**：纠缠粒子对，用于检验贝尔不等式。

## 核心内容

### 基本定律 / 方程

**CHSH 不等式**（定域隐变量理论的上界）：

$$ S=E(a,b)+E(a,b')+E(a',b)-E(a',b')\le2 $$

量子力学对最大纠缠态的预言：

$$ S=2\sqrt2>2 $$

### 推导要点

- **CHSH 不等式的推导**：假设存在隐变量 $\lambda$，$A_a(\lambda)=\pm1$、$B_b(\lambda)=\pm1$；由 $|A_a(B_b+B_{b'})+A_{a'}(B_b-B_{b'})|=2$ 对 $\lambda$ 平均，得 $S\le2$。
- **量子预言**：对贝尔态 $|\Phi^+\rangle$ 取合适测量方向，$E(a,b)=-\cos\theta_{ab}$，选 $\theta=\pi/4$ 组合得 $S=2\sqrt2$。
- **实验检验**：用偏振纠缠光子对（或离子、超导比特），统计相关计数，验证违反并排除定域隐变量。

### 重要定理与推论

- **贝尔定理**：量子力学与定域实在论不相容（非定域性）。
- **无信号定理**：量子非定域性不违反相对论（不能超光速传信息）。
- **EPR 问题的结论**：量子力学不完备的担忧被否定——量子关联是本质非定域的。
- **2022 年诺贝尔奖**：阿斯佩、克劳泽、塞林格因贝尔不等式实验获奖。

## 深化内容

贝尔不等式是**量子信息与量子密码**的理论基础：违反贝尔不等式可认证纠缠（设备无关量子密钥分发）。**无漏洞贝尔实验**（2015）进一步排除了探测漏洞与定域漏洞。广义的贝尔非定域性研究关联的量子界限（Tsirelson 界 $2\sqrt2$）与多体非定域性。延伸阅读可参考 Bell《Speakable and Unspeakable in Quantum Mechanics》、Nielsen & Chuang《量子计算与量子信息》。

## 与其他知识的联系

- 紧密相关：[[entanglement]]（违反不等式的态）、[[quantum-mechanics]]（理论预言）、[[quantum-measurement]]。
- 基础：[[probability-theory]]（关联函数）。

## 前置知识

- [[entanglement]]、[[probability-theory]]、[[quantum-mechanics]]
