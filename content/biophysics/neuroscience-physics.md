---
id: neuroscience-physics
name: 神经科学物理
name_en: Physics of Neuroscience
domain: biophysics
aliases: [神经物理学]
tags: [生物物理, 神经, 动力学]
keywords: [动作电位, 霍奇金-赫胥黎模型, 神经网络]
updated: 2026-08-13
links:
  - {id: biophysics, weight: 5, note: 神经系统层次}
  - {id: information-theory, weight: 4, note: 神经信息编码}
  - {id: differential-equations, weight: 4, note: 神经动力学方程}
  - {id: statistical-mechanics, weight: 3, note: 网络统计}
  - {id: chaos-theory, weight: 2, note: 神经振荡}
superseded_by: []
supersedes: []
---
# 神经科学物理

## 概述

神经科学物理用**物理与数学方法**研究神经系统的信号产生与动力学。**动作电位**（神经脉冲）由**霍奇金-赫胥黎方程**描述——电压门控离子通道的电导变化驱动膜电位的快速上升与回落。神经网络模型（整合-发放神经元、吸引子网络）研究信息编码、记忆与振荡。神经科学物理连接 [[differential-equations]]（动力学）、[[information-theory]]（信息编码）与 [[statistical-mechanics]]（网络统计）。

## 基本概念

- **动作电位**：神经元膜电位的快速脉冲。
- **离子通道**：电压门控的 Na/K 通道。
- **霍奇金-赫胥黎模型**：动作电位的动力学方程。
- **突触 / 神经网络**：神经元间的连接。
- **神经编码**：脉冲序列编码信息。

## 核心内容

### 基本定律 / 方程

霍奇金-赫胥黎方程：

$$ C_m\frac{dV}{dt}=-\sum_iI_i+I_{\mathrm{ext}}=-\bar g_{\mathrm{Na}}m^3h(V-V_{\mathrm{Na}})-\bar g_{\mathrm{K}}n^4(V-V_{\mathrm{K}})-g_L(V-V_L)+I_{\mathrm{ext}} $$

### 推导要点

- **动作电位的机制**：Na 通道快速开放（去极化）、K 通道延迟开放（复极化）。
- **HH 方程**：用门控变量 $m,h,n$ 描述通道开闭概率，拟合实验数据（[[differential-equations]]）。
- **整合-发放模型**：简化神经元模型（膜电位积分到阈值发放）。

### 重要定理与推论

- **动作电位的全或无**：阈值以上全幅发放。
- **不应期**：发放后的短暂不敏感期。
- **神经编码**：脉冲频率/时序编码信息（[[information-theory]]）。
- **神经振荡与同步**：网络集体动力学（[[chaos-theory]]）。

## 深化内容

神经科学物理连接 [[biophysics]]、[[information-theory]]（编码）、[[differential-equations]]（动力学）、[[statistical-mechanics]]（网络统计）、[[chaos-theory]]（振荡同步）。延伸阅读可参考 Dayan & Abbott《Theoretical Neuroscience》、Koch《Biophysics of Computation》、Izhikevich《Dynamical Systems in Neuroscience》。

## 与其他知识的联系

- 紧密相关：[[biophysics]]、[[information-theory]]（神经编码）、[[differential-equations]]（动力学）。
- 关联：[[statistical-mechanics]]（网络统计）、[[chaos-theory]]（振荡与同步）。

## 前置知识

- [[differential-equations]]、[[biophysics]]、[[information-theory]]
