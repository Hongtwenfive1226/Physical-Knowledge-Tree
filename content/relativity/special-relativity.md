---
id: special-relativity
name: 狭义相对论
name_en: Special Relativity
domain: relativity
aliases: [相对论, 洛伦兹变换]
tags: [相对论, 时空, 光速]
keywords: [洛伦兹变换, 时间膨胀, 长度收缩, E=mc2]
updated: 2026-08-13
links:
  - {id: minkowski-spacetime, weight: 5, note: 四维时空}
  - {id: newtonian-mechanics, weight: 4, note: 低速极限}
  - {id: electromagnetic-waves, weight: 4, note: 光速不变}
  - {id: relativistic-electrodynamics, weight: 5, note: 协变电动力学}
  - {id: general-relativity, weight: 4, note: 推广到引力}
  - {id: tensor-calculus, weight: 4, note: 四维张量}
  - {id: qed, weight: 3, note: 相对论量子力学}
  - {id: conservation-laws, weight: 3, note: 能量动量四矢量}
superseded_by: [general-relativity]
supersedes: [newtonian-mechanics]
pos: {x: 40, y: 0, z: 0}
---
# 狭义相对论

## 概述

狭义相对论（爱因斯坦，1905）建立在两条公设上：**相对性原理**（物理定律在所有惯性系中形式相同）与**光速不变原理**（真空光速与光源/观察者运动无关）。由此导出洛伦兹变换取代伽利略变换，彻底改变了绝对时空观。其推论——时间膨胀、长度收缩、同时性的相对性、质能关系 $E=mc^2$——已被粒子物理（寿命延长）、核能、GPS 等高精度验证。狭义相对论是广义相对论（含引力）与量子场论的基础。

## 基本概念

- **惯性系**：牛顿定律成立的参考系。
- **洛伦兹因子**：$\gamma=1/\sqrt{1-v^2/c^2}$。
- **事件 / 时空坐标**：$(ct,x,y,z)$。
- **四矢量**：四维动量 $p^\mu=(E/c,\vec p)$。
- **原时**：随粒子运动的时钟的时间 $d\tau=dt/\gamma$。

## 核心内容

### 基本定律 / 方程

**洛伦兹变换**（沿 $x$ 轴）：

$$ x'=\gamma(x-vt),\qquad t'=\gamma\Big(t-\frac{vx}{c^2}\Big),\qquad \gamma=\frac1{\sqrt{1-v^2/c^2}} $$

**时间膨胀 / 长度收缩**：

$$ \Delta t=\gamma\Delta t_0,\qquad L=\frac{L_0}{\gamma} $$

**质能关系与能量-动量关系**：

$$ E=mc^2=\gamma m_0c^2,\qquad E^2=(pc)^2+(m_0c^2)^2 $$

### 推导要点

- **洛伦兹变换**：由光速不变（光锥 $x^2-c^2t^2=0$ 不变）与线性变换要求，解出洛伦兹变换；低速极限 $v\ll c$ 回到伽利略变换。
- **时间膨胀**：运动时钟的光在往返中走过更长路径，$\Delta t=2d/(c\sqrt{1-v^2/c^2})=\gamma\cdot2d/c$。
- **质能关系**：由四维动量的相对论定义 $p^\mu=m_0u^\mu$，能量 $E=p^0c=\gamma m_0c^2$，静止能量 $E_0=m_0c^2$。

### 重要定理与推论

- **同时性的相对性**：不同惯性系对"同时"的判断不同。
- **速度合成公式**：$u=(u'+v)/(1+u'v/c^2)$，不超光速。
- **相对论多普勒效应**与**质能等价** $E=mc^2$。
- **能量动量守恒**：$p^\mu$ 在碰撞中守恒，是[[conservation-laws]] 的相对论形式。

## 深化内容

狭义相对论的几何表述是[[minkowski-spacetime]]（闵可夫斯基时空），洛伦兹变换是四维时空的"旋转"。电磁学的协变形式（[[relativistic-electrodynamics]]）统一了 $\vec E,\vec B$。相对论量子力学（狄拉克方程）导出自旋与反粒子（[[quantum-field-theory]]）。延伸阅读可参考 Taylor & Wheeler《Spacetime Physics》、朗道《场论》、Einstein 原始论文。

## 与其他知识的联系

- 紧密相关：[[minkowski-spacetime]]（几何表述）、[[relativistic-electrodynamics]]（电磁协变）、[[tensor-calculus]]。
- 量子：狄拉克方程（[[quantum-field-theory]]）。
- 上位替代：[[general-relativity]]（含引力）；低速极限 [[newtonian-mechanics]]。

## 上位替代

- 包含引力的推广是 [[general-relativity]]；低速极限回到 [[newtonian-mechanics]]。

## 前置知识

- [[newtonian-mechanics]]、[[calculus]]、[[electromagnetic-waves]]
