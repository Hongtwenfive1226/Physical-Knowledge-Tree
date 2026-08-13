---
id: circuits
name: 电路理论
name_en: Circuit Theory
domain: electrodynamics
aliases: [电路, 电磁振荡]
tags: [电磁学, 电路, 振荡]
keywords: [基尔霍夫定律, RLC电路, 复阻抗, 谐振]
updated: 2026-08-13
links:
  - {id: electrostatics, weight: 3, note: 电容}
  - {id: magnetostatics, weight: 3, note: 电感}
  - {id: electromagnetic-induction, weight: 4, note: 电感与互感}
  - {id: differential-equations, weight: 4, note: 电路方程}
  - {id: electromagnetic-waves, weight: 3, note: 交流电路与传输线}
  - {id: electromagnetic-media, weight: 2}
superseded_by: []
supersedes: []
---
# 电路理论

## 概述

电路理论把电磁场方程在**集总参数**近似下化为代数/常微分方程，是电子学、信号处理与实验物理的基本工具。核心是**基尔霍夫定律**（电流节点守恒、电压环路守恒）结合元件方程（欧姆定律、电容、电感）。交流稳态用**复阻抗**分析，$RLC$ 谐振电路给出自然频率与品质因数。电路理论是麦克斯韦方程在"器件尺度远小于波长"时的近似，传输线理论则把它推广到分布式系统。

## 基本概念

- **元件**：电阻 $R$（$V=IR$）、电容 $C$（$I=C\,dV/dt$）、电感 $L$（$V=L\,dI/dt$）。
- **基尔霍夫电流定律（KCL）**：节点电流和为零。
- **基尔霍夫电压定律（KVL）**：环路电压和为零。
- **复阻抗**：$Z_R=R$、$Z_C=1/(i\omega C)$、$Z_L=i\omega L$。
- **品质因数**：$Q=\omega_0/\Delta\omega$。

## 核心内容

### 基本定律 / 方程

**基尔霍夫定律**：

$$ \sum_k I_k=0\quad(\text{KCL}),\qquad \sum_k V_k=0\quad(\text{KVL}) $$

**RLC 串联电路**：

$$ L\frac{d^2Q}{dt^2}+R\frac{dQ}{dt}+\frac{Q}{C}=V(t) $$

自然频率与品质因数：

$$ \omega_0=\frac1{\sqrt{LC}},\qquad Q=\frac1R\sqrt{\frac LC} $$

### 推导要点

- **KCL/KVL 的来源**：KCL 是电荷守恒（$\nabla\cdot\vec J=-\partial\rho/\partial t$）在节点上的体现；KVL 是静场无旋性 $\oint\vec E\cdot d\vec l=0$ 在回路上的体现。
- **复阻抗法**：对正弦稳态 $V,I\propto e^{i\omega t}$，$d/dt\to i\omega$，微分方程化为代数方程，复数幅值比即阻抗。
- **谐振条件**：$RLC$ 电路中 $Z_L+Z_C=0$ 即 $\omega=\omega_0$，电流幅值最大（串联谐振）。

### 重要定理与推论

- **戴维南 / 诺顿定理**：任意线性二端网络可等效为电压源+电阻 / 电流源+电阻。
- **叠加原理**：线性电路的各独立源贡献可叠加。
- **谐振与滤波**：$RLC$ 电路的频率选择性——低通、高通、带通滤波。
- **阻抗匹配**：负载与源阻抗共轭匹配时功率传输最大。

## 深化内容

电路理论推广到**传输线**（当器件尺度与波长可比）：分布参数方程导出波动方程与特征阻抗。**有源电路**（放大器、振荡器）与**非线性电路**（整流、混频）是电子学核心。电路理论还与**信号处理**（滤波器设计）、[[quantum-information]]（超导量子比特的电路 QED）交叉。延伸阅读可参考 Horowitz & Hill《电子学》、Pozar《Microwave Engineering》、Feynman《物理学讲义》第二卷。

## 与其他知识的联系

- 紧密相关：[[electromagnetic-induction]]（电感）、[[differential-equations]]（瞬态）、[[electromagnetic-waves]]（传输线）。
- 应用：实验电子学、滤波器设计、[[superconductivity]]（超导电路）。

## 前置知识

- [[electrostatics]]、[[magnetostatics]]、[[differential-equations]]
