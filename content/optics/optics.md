---
id: optics
name: 光学
name_en: Optics
domain: optics
aliases: [光学, 光物理]
tags: [光学, 光, 波动]
keywords: [几何光学, 波动光学, 光子]
updated: 2026-08-13
links:
  - {id: electromagnetic-waves, weight: 5, note: 光的电磁本质}
  - {id: geometric-optics, weight: 5, note: 光的直线传播近似}
  - {id: wave-optics, weight: 5, note: 干涉衍射}
  - {id: quantum-optics, weight: 4, note: 光的量子理论}
  - {id: lasers, weight: 4, note: 相干光源}
  - {id: maxwell-equations, weight: 3}
  - {id: electromagnetic-media, weight: 3, note: 折射与色散}
  - {id: wave-mechanics, weight: 3}
superseded_by: []
supersedes: []
pos: {x: 5, y: 55, z: 0}
---
# 光学

## 概述

光学研究光的产生、传播、探测及其与物质的相互作用。光具有**波粒二象性**：既是电磁波（频率 $10^{14}\sim10^{16}$ Hz，由 [[maxwell-equations]] 描述），又是光子流（由 [[quantum-optics]] 描述）。光学按近似层次分为三大分支：**几何光学**（光线近似，成像）、**波动光学**（干涉、衍射、偏振）、**量子光学**（光子统计、相干态）。光速 $c\approx3\times10^8$ m/s，折射率 $n=c/v$ 描述介质中传播。

## 基本概念

- **光速 / 折射率**：$c$、$n=c/v$。
- **波长 / 频率**：可见光 $\lambda\sim400\sim700$ nm。
- **光线 / 波前**：几何光学的射线、波动光学的等相面。
- **光子**：光的量子（能量 $h\nu$）。
- **相干性**：时间/空间相干，干涉的前提。

## 核心内容

### 基本定律 / 方程

三大分支的核心关系：

- **几何光学**：斯涅尔定律 $n_1\sin\theta_1=n_2\sin\theta_2$。
- **波动光学**：干涉强度 $I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta$。
- **量子光学**：光子能量 $E=h\nu$，相干态描述激光。

### 推导要点

- **几何光学是波动光学的短波极限**：$\lambda\to0$ 时惠更斯原理退化为光线传播。
- **干涉来自叠加原理**：两列波相位差 $\delta$ 决定相长/相消。
- **光子能量**：$E=h\nu$（普朗克-爱因斯坦关系），是 [[blackbody-radiation]] 与光电效应的基础。

### 重要定理与推论

- **光的电磁本质**：光速 $c=1/\sqrt{\mu_0\varepsilon_0}$（[[maxwell-equations]]）。
- **干涉、衍射、偏振**：波动性的三大表现。
- **衍射极限**：$\theta\approx1.22\lambda/D$（光学分辨率的极限）。
- **波粒二象性**：光既是波又是粒子（[[quantum-optics]]）。

## 深化内容

光学连接 [[electromagnetic-waves]]、[[quantum-optics]]、[[fourier-analysis]]（衍射 = 傅里叶变换）；应用遍及成像、通信、激光、光谱与量子信息（[[quantum-information]]）。延伸阅读可参考 Born & Wolf《Principles of Optics》、Hecht《Optics》、Griffiths《电动力学导论》（光作为电磁波）。

## 与其他知识的联系

- 紧密相关：[[electromagnetic-waves]]（本质）、[[geometric-optics]]/[[wave-optics]]（分支）、[[quantum-optics]]（量子）、[[lasers]]（光源）。
- 基础：[[maxwell-equations]]、[[electromagnetic-media]]、[[fourier-analysis]]（衍射计算）。

## 前置知识

- [[electromagnetic-waves]]、[[wave-mechanics]]、[[maxwell-equations]]
