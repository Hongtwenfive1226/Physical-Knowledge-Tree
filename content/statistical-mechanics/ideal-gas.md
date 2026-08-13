---
id: ideal-gas
name: 理想气体
name_en: Ideal Gas
domain: statistical-mechanics
aliases: [理想气体模型]
tags: [统计物理, 模型, 气体]
keywords: [状态方程, 麦克斯韦分布, 配分函数]
updated: 2026-08-13
links:
  - {id: statistical-mechanics, weight: 5, note: 最简单的统计力学模型}
  - {id: thermodynamics, weight: 4, note: 宏观状态方程}
  - {id: kinetic-theory, weight: 4, note: 分子运动论}
  - {id: quantum-statistics, weight: 3, note: 量子修正}
  - {id: boltzmann-equation, weight: 3}
superseded_by: []
supersedes: []
---
# 理想气体

## 概述

理想气体是忽略分子相互作用（只保留弹性碰撞）的模型，是统计力学**最简单、最完整**的可解实例：由单粒子配分函数可直接导出状态方程、内能、熵与麦克斯韦速率分布。它验证了统计力学的整套方法，并作为零级近似推广到真实气体（范德瓦尔斯）与量子气体（费米/玻色统计）。理想气体的结论（$PV=Nk_BT$、$U=\frac32Nk_BT$、能量均分）是理解一切热系统的起点。

## 基本概念

- **单粒子配分函数**：$Z_1=V(2\pi mk_BT/h^2)^{3/2}$（平动）。
- **$N$ 粒子配分函数**：$Z_N=Z_1^N/N!$（全同性修正）。
- **麦克斯韦分布**：速率的概率密度。
- **均方根速率**：$v_{\mathrm{rms}}=\sqrt{3k_BT/m}$。

## 核心内容

### 基本定律 / 方程

状态方程与内能：

$$ PV=Nk_BT,\qquad U=\frac32Nk_BT $$

**麦克斯韦速率分布**：

$$ f(v)=\Big(\frac{m}{2\pi k_BT}\Big)^{3/2}4\pi v^2e^{-mv^2/2k_BT} $$

**熵**（萨库尔-特罗德公式）：

$$ S=Nk_B\Big[\ln\Big(\frac VN\Big(\frac{4\pi mE}{3Nh^2}\Big)^{3/2}\Big)+\frac52\Big] $$

### 推导要点

- **配分函数**：单粒子能量 $\varepsilon=p^2/2m$，$Z_1=\frac1{h^3}\int e^{-\beta p^2/2m}d^3p\,d^3r=V(2\pi mk_BT/h^2)^{3/2}$。
- **状态方程**：$F=-k_BT\ln Z_N$，$P=-\partial F/\partial V=Nk_BT/V$。
- **麦克斯韦分布**：速度各分量为高斯 $\propto e^{-mv_x^2/2k_BT}$，球坐标积分（$4\pi v^2$）得速率分布。

### 重要定理与推论

- **能量均分**：每个平动自由度 $\frac12k_BT$，$U=\frac32Nk_BT$。
- **理想气体定律**：$PV=Nk_BT$，是玻意耳、查理、盖-吕萨克定律的统一。
- **绝热方程**：$PV^\gamma=\text{const}$，$\gamma=C_p/C_V=5/3$（单原子）。
- **吉布斯佯谬**：$1/N!$ 因子保证熵的可加性（全同性）。

## 深化内容

理想气体推广到**真实气体**：范德瓦尔斯方程 $(P+an^2)(V-nb)=Nk_BT$ 计入分子体积与吸引。低温/高密度下需**量子统计**（[[quantum-statistics]]）修正。理想气体也是 [[kinetic-theory]] 与 [[boltzmann-equation]] 的零级近似。延伸阅读可参考 Pathria《Statistical Mechanics》、Kittel《Thermal Physics》、费曼《物理学讲义》第一卷。

## 与其他知识的联系

- 紧密相关：[[statistical-mechanics]]（配分函数方法）、[[kinetic-theory]]（动力学）、[[thermodynamics]]（状态方程）。
- 推广：[[quantum-statistics]]（量子气体）、[[phase-transitions]]（凝结）、范德瓦尔斯气体。

## 前置知识

- [[statistical-mechanics]]、[[ensembles]]、[[calculus]]
