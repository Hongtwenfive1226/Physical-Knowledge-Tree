---
id: plasma-oscillations
name: 等离子体振荡
name_en: Plasma Oscillations
domain: plasma-physics
aliases: [朗缪尔波]
tags: [等离子体, 振荡, 波]
keywords: [朗缪尔频率, 等离子体频率, 集体振荡]
updated: 2026-08-13
links:
  - {id: plasma-physics, weight: 5, note: 集体行为}
  - {id: debye-screening, weight: 4, note: 准中性背景}
  - {id: electromagnetic-waves, weight: 4, note: 等离子体中的波}
  - {id: maxwell-equations, weight: 3, note: 电磁场}
  - {id: electromagnetic-radiation, weight: 2}
superseded_by: []
supersedes: []
---
# 等离子体振荡

## 概述

等离子体振荡是电子**集体相对离子背景**的振荡，其固有频率是**等离子体（朗缪尔）频率** $\omega_p$。电子气偏离平衡后以 $\omega_p$ 振荡，对应的波（静电波）称**朗缪尔波**。等离子体频率是等离子体最重要的标度：它是电磁波传播的**截止频率**（$\omega<\omega_p$ 的电磁波被反射）。等离子体振荡与 [[debye-screening]] 共同体现等离子体的集体行为。

## 基本概念

- **等离子体频率**：$\omega_p=\sqrt{n_ee^2/\varepsilon_0m_e}$。
- **朗缪尔波**：静电振荡的波。
- **截止频率**：电磁波传播的下限。
- **热修正**：色散关系中的 $3v_{\mathrm{th}}^2k^2$ 项。

## 核心内容

### 基本定律 / 方程

等离子体频率：

$$ \omega_p=\sqrt{\frac{n_ee^2}{\varepsilon_0m_e}} $$

朗缪尔波色散关系：

$$ \omega^2=\omega_p^2+3v_{\mathrm{th}}^2k^2 $$

### 推导要点

- **振荡图像**：电子相对离子位移产生电场恢复力，电子气做简谐振荡（[[quantum-harmonic-oscillator]] 的经典类比）。
- **色散关系**：线性化连续性方程 + 动量方程 + 泊松方程，得朗缪尔波色散。
- **截止**：由电磁波色散 $\omega^2=\omega_p^2+c^2k^2$，$\omega<\omega_p$ 时 $k$ 虚（指数衰减，不能传播）。

### 重要定理与推论

- **集体振荡频率**：$\omega_p$ 只依赖密度（与温度、波矢无关，领头阶）。
- **截止现象**：$\omega<\omega_p$ 的电磁波不能穿透等离子体。
- **朗缪尔波**：静电振荡的色散。
- **电离层应用**：无线电波反射（电离层 $\omega_p$ 决定可穿透频率）。

## 深化内容

等离子体振荡是 [[plasma-physics]] 集体行为的核心，与 [[debye-screening]]、[[electromagnetic-waves]]（色散、截止）直接相关。空间等离子体（电离层）、激光等离子体中都重要。延伸阅读可参考 陈骝《等离子体物理学导论》、Goldston & Rutherford《Introduction to Plasma Physics》。

## 与其他知识的联系

- 紧密相关：[[plasma-physics]]、[[debye-screening]]（集体图像）。
- 波：[[electromagnetic-waves]]（色散与截止）、[[maxwell-equations]]。

## 前置知识

- [[plasma-physics]]、[[electromagnetic-waves]]、[[maxwell-equations]]
