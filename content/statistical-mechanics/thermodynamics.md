---
id: thermodynamics
name: 热力学
name_en: Thermodynamics
domain: statistical-mechanics
aliases: [热学, 热力学定律]
tags: [热学, 宏观, 状态函数]
keywords: [热力学定律, 熵, 自由能, 卡诺循环, 麦克斯韦关系]
updated: 2026-08-13
links:
  - {id: statistical-mechanics, weight: 5, note: 微观基础}
  - {id: entropy-information, weight: 4, note: 熵的概念}
  - {id: heat-conduction, weight: 4, note: 传热}
  - {id: blackbody-radiation, weight: 3, note: 热辐射}
  - {id: phase-transitions, weight: 4, note: 相变的热力学描述}
superseded_by: [statistical-mechanics]
supersedes: []
pos: {x: -20, y: 40, z: 0}
---
# 热力学

## 概述

热力学以少数几条**宏观经验定律**描述热现象，不依赖微观模型，因而具有普适性与可靠性。它以**状态函数**（内能 $U$、熵 $S$、焓 $H$、自由能 $F$、吉布斯函数 $G$）刻画系统平衡态，用**热力学势**与**麦克斯韦关系**统一计算各类热力学量。热力学的核心是第二定律（熵增原理）与由此建立的**可逆过程理论**（卡诺循环给出热机效率上限）。热力学是统计力学的宏观结论，也是化学、材料、工程的基础。

## 基本概念

- **状态函数**：只依赖状态、与路径无关的量（$U,S,H,F,G$）。
- **温度 / 熵**：第零定律定义温度；第二定律定义熵。
- **热力学势**：$F=U-TS$（亥姆霍兹）、$G=H-TS$（吉布斯）。
- **准静态 / 可逆过程**：缓慢、可逆的理想化过程。

## 核心内容

### 基本定律 / 方程

**四大定律**：

- 第零定律：热平衡的传递性（温度存在）。
- 第一定律（能量守恒）：$dU=\delta Q+\delta W$。
- 第二定律（熵增）：$dS\ge\frac{\delta Q}{T}$（克劳修斯），或开尔文表述"不能从单一热源吸热全部转化为功"。
- 第三定律：$T\to0$ 时 $S\to0$。

**热力学恒等式与麦克斯韦关系**（例）：

$$ dF=-S\,dT-p\,dV,\qquad \Big(\frac{\partial S}{\partial V}\Big)_T=\Big(\frac{\partial p}{\partial T}\Big)_V $$

### 推导要点

- **麦克斯韦关系**：由热力学势的全微分形式（如 $dF=-SdT-pdV$），利用混合偏导相等 $\partial^2F/\partial T\partial V=\partial^2F/\partial V\partial T$ 得到。
- **卡诺效率**：可逆卡诺循环的效率 $\eta=1-T_c/T_h$，只依赖两热源温度。
- **熵的克劳修斯不等式**：$\oint\delta Q/T\le0$（等号对应可逆过程），是第二定律的数学表述。

### 重要定理与推论

- **卡诺定理**：所有工作在相同热源间的可逆热机效率相同且最大。
- **热力学势的判据**：等温等容下 $F$ 极小、等温等压 $G$ 极小对应平衡态。
- **相平衡条件**：两相共存时 $T,p,\mu$ 相等（[[phase-transitions]]）。
- **熵增原理**：孤立系统熵不减。

## 深化内容

热力学的**微观起源**由[[statistical-mechanics]] 给出：玻尔兹曼熵 $S=k_B\ln\Omega$ 把熵与微观态数联系。**非平衡热力学**（[[nonequilibrium-thermodynamics]]）用熵产生率推广到不可逆过程。热力学与信息（兰道尔原理、[[entropy-information]]）和黑洞（[[black-holes]] 的贝肯斯坦-霍金熵）有深刻联系。延伸阅读可参考 Callen《Thermodynamics and an Introduction to Thermostatistics》、费米《热力学》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[statistical-mechanics]]（微观基础）、[[entropy-information]]、[[phase-transitions]]（相平衡）。
- 应用：[[heat-conduction]]（传热）、[[blackbody-radiation]]（热辐射）、热机与制冷。

## 上位替代

- 统计力学提供微观起源并扩展到平衡/非平衡宏观描述（[[statistical-mechanics]]、[[nonequilibrium-thermodynamics]]）。

## 前置知识

- [[calculus]]、[[statistical-mechanics]]
