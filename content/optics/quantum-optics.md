---
id: quantum-optics
name: 量子光学
name_en: Quantum Optics
domain: optics
aliases: [光量子理论, 光子统计]
tags: [光学, 量子, 光子]
keywords: [光子, 相干态, 压缩光, 腔量子电动力学]
updated: 2026-08-13
links:
  - {id: optics, weight: 5, note: 光学分支}
  - {id: quantum-mechanics, weight: 5, note: 理论基础}
  - {id: qed, weight: 4, note: 光与物质相互作用}
  - {id: quantum-harmonic-oscillator, weight: 4, note: 光场模式量子化}
  - {id: lasers, weight: 4, note: 相干光源}
  - {id: quantum-information, weight: 4, note: 光子量子信息}
  - {id: entanglement, weight: 3}
  - {id: laser-cooling, weight: 3, note: 光-原子动量交换}
  - {id: atomic-physics, weight: 3, note: 光与原子相互作用}
superseded_by: []
supersedes: []
---
# 量子光学

## 概述

量子光学研究**光场的量子性质**及其与物质的相互作用。光场按 [[quantum-harmonic-oscillator]] 模式量子化，光子的量子态由光子数态（Fock 态）或**相干态**描述；相干态是最接近经典光的量子态（激光近似为相干态）。量子光学揭示光子反聚束、压缩光、单光子源、纠缠光子对等纯量子现象，并发展出**腔量子电动力学（cavity QED）**，是量子信息与精密测量的实验平台。

## 基本概念

- **光子数态（Fock 态）** $|n\rangle$：确定光子数的态。
- **相干态** $|\alpha\rangle$：$a|\alpha\rangle=\alpha|\alpha\rangle$，最接近经典光。
- **压缩态**：某一正交分量涨落低于真空。
- **腔 QED**：腔中单原子与光场强耦合。
- **单光子源 / 纠缠光子对**：量子光学的资源。

## 核心内容

### 基本定律 / 方程

光场量子化与相干态：

$$ \hat H=\sum_{\vec k}\hbar\omega_{\vec k}\Big(a_{\vec k}^\dagger a_{\vec k}+\frac12\Big),\qquad |\alpha\rangle=e^{-|\alpha|^2/2}\sum_n\frac{\alpha^n}{\sqrt{n!}}|n\rangle $$

光子数分布（相干态为泊松）：

$$ P(n)=e^{-|\alpha|^2}\frac{|\alpha|^{2n}}{n!} $$

### 推导要点

- **光场量子化**：电磁场按模式展开，振幅系数提升为产生/湮灭算符（[[second-quantization]]、[[qed]]）。
- **相干态**：是湮灭算符的本征态，光子数服从泊松分布。
- **光子反聚束**：$g^{(2)}(0)<1$，单光子发射的特征（经典光不可能）。

### 重要定理与推论

- **相干态**：激光的近经典描述（相位确定）。
- **光子反聚束 / 压缩光**：纯量子现象（低于经典极限的涨落）。
- **纠缠光子对**：自发参量下转换（SPDC）产生，用于 [[quantum-information]]。
- **腔 QED**：原子-光场强耦合，用于量子门与量子模拟。

## 深化内容

量子光学是 [[quantum-information]]（光子量子比特、量子密钥分发 [[quantum-cryptography]]）、[[entanglement]]（纠缠光子）、[[qed]]（光-物质相互作用）的实验平台；[[laser-cooling]] 也基于光-原子动量交换。延伸阅读可参考 Scully & Zubairy《Quantum Optics》、Walls & Milburn《Quantum Optics》、Loudon《The Quantum Theory of Light》。

## 与其他知识的联系

- 紧密相关：[[qed]]（相互作用）、[[quantum-harmonic-oscillator]]（场量子化）、[[lasers]]（光源）。
- 应用：[[quantum-information]]（光子量子比特、量子密钥分发）、[[entanglement]]（纠缠光子）、[[laser-cooling]]。

## 前置知识

- [[quantum-mechanics]]、[[quantum-harmonic-oscillator]]、[[qed]]
