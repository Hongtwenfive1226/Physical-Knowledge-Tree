---
id: non-inertial-frames
name: 非惯性参考系
name_en: Non-inertial Reference Frames
domain: classic-mechanics
aliases: [惯性力, 科里奥利力]
tags: [力学, 参考系, 惯性力]
keywords: [离心力, 科里奥利力, 惯性系, 转动参考系]
updated: 2026-08-13
links:
  - {id: newtonian-mechanics, weight: 5, note: 牛顿定律只在惯性系成立}
  - {id: special-relativity, weight: 2, note: 惯性系的相对论定义}
  - {id: equivalence-principle, weight: 3, note: 引力与惯性力的等价}
  - {id: rigid-body-mechanics, weight: 2}
  - {id: fluid-mechanics, weight: 2, note: 旋转流体}
superseded_by: []
supersedes: []
---
# 非惯性参考系

## 概述

牛顿运动定律只在**惯性系**中成立。在加速或转动的**非惯性系**中，为维持 $F=ma$ 的形式，须引入**惯性力**（虚拟力）。匀速转动系中会出现**离心力**与**科里奥利力**。非惯性系分析在物理中至关重要：地球本身是转动系（傅科摆、信风、弹道偏转），而爱因斯坦正是从"引力与惯性力不可区分"（等效原理）出发建立了广义相对论。

## 基本概念

- **惯性系 / 非惯性系**：牛顿定律成立 / 不成立的参考系。
- **惯性力（虚拟力）**：由参考系加速引起、无施力物体的力。
- **离心力**：$-\vec\omega\times(\vec\omega\times\vec r)$。
- **科里奥利力**：$-2m\,\vec\omega\times\vec v_{\mathrm{rel}}$。

## 核心内容

### 基本定律 / 方程

转动系中的加速度关系：

$$ \vec a_{\mathrm{abs}}=\vec a_{\mathrm{rel}}+\vec\alpha\times\vec r+\vec\omega\times(\vec\omega\times\vec r)+2\vec\omega\times\vec v_{\mathrm{rel}} $$

相应惯性力：

$$ \vec F_{\mathrm{inertial}}=-m\vec\alpha\times\vec r - m\vec\omega\times(\vec\omega\times\vec r) - 2m\vec\omega\times\vec v_{\mathrm{rel}} $$

（三项依次为欧拉力、离心力、科里奥利力）。

### 推导要点

- **转动系求导关系**：对随转动系旋转的矢量 $\vec A$，$\frac{d\vec A}{dt}\big|_{\text{空间}}=\frac{d\vec A}{dt}\big|_{\text{转动}}+\vec\omega\times\vec A$。
- **加速度关系**：把 $\vec r$ 的绝对速度写为 $\vec v_{\mathrm{abs}}=\vec v_{\mathrm{rel}}+\vec\omega\times\vec r$，再对时间求导（再次用求导关系），即得含离心与科里奥利项的加速度公式。
- **科里奥利力的几何**：科里奥利加速度 $2\vec\omega\times\vec v$ 垂直于 $\vec\omega$ 与 $\vec v$，只改变方向不改变速率。

### 重要定理与推论

- **傅科摆**：摆面以角速度 $\omega\sin\varphi$ 旋转（$\varphi$ 为纬度），是地球自转的直接证据。
- **科里奥利效应**：北半球运动物体向右偏（信风、洋流、弹道偏转）。
- **离心力与重力**：地球上的"有效重力" $g_{\mathrm{eff}}=g-\omega^2r\cos^2\varphi$ 略小于引力。
- **等效原理的雏形**：均匀加速系与均匀引力场中的力学实验不可区分。

## 深化内容

非惯性系分析是通向**广义相对论**的关键一步：[[equivalence-principle]]（爱因斯坦电梯）正是"引力与惯性力局部不可区分"的陈述，由此引力被几何化为时空弯曲。旋转系与**旋转流体**（[[fluid-mechanics]]，如罗斯贝数、地球物理流体）密切相关。惯性力的引入也提醒"参考系"本身是物理描述的一部分。延伸阅读可参考朗道《力学》、Fowles《Analytical Mechanics》、Kleppner & Kolenkow《An Introduction to Mechanics》。

## 与其他知识的联系

- 紧密相关：[[newtonian-mechanics]]（惯性系定义）、[[rigid-body-mechanics]]（转动）。
- 引力：[[equivalence-principle]] 建立在"引力与惯性力不可区分"之上，是 [[general-relativity]] 的出发点。
- 应用：[[fluid-mechanics]]（旋转流体、地转）、[[atmospheric-physics]]（科里奥利效应）。

## 前置知识

- [[newtonian-mechanics]]、[[vector-calculus]]
