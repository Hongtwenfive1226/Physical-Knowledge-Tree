---
id: blackbody-radiation
name: 黑体辐射
name_en: Blackbody Radiation
domain: statistical-mechanics
aliases: [黑体, 普朗克定律]
tags: [统计物理, 辐射, 量子起源]
keywords: [普朗克公式, 维恩位移, 斯蒂芬-玻尔兹曼定律, 紫外灾变]
updated: 2026-08-13
links:
  - {id: quantum-statistics, weight: 5, note: 光子气体是玻色系统}
  - {id: statistical-mechanics, weight: 4, note: 统计处理}
  - {id: quantum-mechanics, weight: 5, note: 普朗克量子假设揭开量子力学序幕}
  - {id: electromagnetic-waves, weight: 3, note: 辐射场}
  - {id: cosmology, weight: 3, note: 宇宙微波背景辐射}
  - {id: lasers, weight: 2}
superseded_by: []
supersedes: []
---
# 黑体辐射

## 概述

黑体辐射是处于**热平衡**的电磁辐射场。经典物理用能量均分给出瑞利-金斯公式，在紫外端发散（"紫外灾变"）。普朗克（1900）引入能量量子化假设 $E=h\nu$，得到与实验完全吻合的**普朗克公式**，由此揭开量子力学的序幕。黑体辐射的现代理解：光子是玻色子，服从玻色-爱因斯坦统计（[[quantum-statistics]]），辐射谱完全由温度决定。

## 基本概念

- **黑体**：完全吸收并发射所有频率辐射的理想体。
- **谱能量密度**：$u(\nu,T)$，单位体积单位频率的能量。
- **光子气体**：$\mu=0$ 的玻色气体。
- **维恩位移 / 斯蒂芬-玻尔兹曼定律**：谱峰位置与总能量的温度依赖。

## 核心内容

### 基本定律 / 方程

**普朗克公式**：

$$ u(\nu,T)=\frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/k_BT}-1} $$

**维恩位移定律**：$\lambda_{\max}T=b\approx2.898\times10^{-3}\,\mathrm{m\,K}$。

**斯蒂芬-玻尔兹曼定律**：

$$ U=\frac{4\sigma}{c}T^4,\qquad \sigma=\frac{2\pi^5k_B^4}{15h^3c^2} $$

### 推导要点

- **态密度**：电磁场模式数 $g(\nu)d\nu=8\pi\nu^2d\nu/c^3$（计入两个偏振）。
- **玻色占据**：每个模式光子数 $\bar n=1/(e^{h\nu/k_BT}-1)$（$\mu=0$ 的玻色-爱因斯坦分布），能量密度 $u=g(\nu)\bar n\,h\nu$。
- **紫外灾变**：经典能量均分给每个模式 $k_BT$，则 $u\propto\nu^2$ 发散；量子化使高频模式占据被指数压低。

### 重要定理与推论

- **普朗克公式的统一**：高频（$h\nu\gg k_BT$）回到维恩公式、低频（$h\nu\ll k_BT$）回到瑞利-金斯公式。
- **维恩位移定律**：温度升高谱峰蓝移。
- **斯蒂芬-玻尔兹曼定律**：总能量 $\propto T^4$。
- **宇宙微波背景**：$2.7\,\mathrm K$ 的黑体谱（[[cosmology]] 大爆炸的遗迹）。

## 深化内容

黑体辐射是量子力学的起源：普朗克常数 $h$ 由此引入。光子统计的**玻色本质**（[[quantum-statistics]]）解释了自发辐射与受激辐射（[[lasers]] 的基础）。宇宙微波背景辐射（[[cosmology]]）是宇宙中最精确的黑体谱。延伸阅读可参考 Pathria《Statistical Mechanics》、Kittel《Thermal Physics》、朗道《统计物理学》。

## 与其他知识的联系

- 紧密相关：[[quantum-statistics]]（光子气体）、[[quantum-mechanics]]（量子化起源）、[[statistical-mechanics]]。
- 宇宙学：[[cosmology]] 的宇宙微波背景辐射（2.7 K）。
- 应用：[[lasers]]、热成像。

## 前置知识

- [[statistical-mechanics]]、[[quantum-statistics]]、[[electromagnetic-waves]]
