---
id: boltzmann-equation
name: 玻尔兹曼方程
name_en: Boltzmann Equation
domain: statistical-mechanics
aliases: [玻尔兹曼输运方程]
tags: [统计物理, 动力学, 输运]
keywords: [分布函数, 碰撞项, H定理]
updated: 2026-08-13
links:
  - {id: kinetic-theory, weight: 4, note: 动力学基础}
  - {id: transport-theory, weight: 5, note: 输运系数的推导}
  - {id: statistical-mechanics, weight: 4}
  - {id: nonequilibrium-thermodynamics, weight: 3}
  - {id: fluctuation-theory, weight: 2}
superseded_by: []
supersedes: [kinetic-theory]
---
# 玻尔兹曼方程

## 概述

玻尔兹曼方程是**非平衡统计力学**的基本方程，描述单粒子分布函数 $f(\vec r,\vec v,t)$ 在相空间中的演化。左端是漂移项（自由运动 + 外力），右端是**碰撞项**（二体碰撞的散射积分）。**H 定理**证明 $H=\int f\ln f\,d\vec v$ 单调不增，为熵增与宏观不可逆性提供微观基础。线性化（弛豫时间近似）后可直接计算输运系数，矩展开则导出流体力学方程——玻尔兹曼方程是连接微观碰撞与宏观流体/输运的桥梁。

## 基本概念

- **分布函数**：$f(\vec r,\vec v,t)$，$\int f\,d^3v=n(\vec r,t)$。
- **碰撞项**：$(\partial f/\partial t)_{\mathrm{coll}}$，二体碰撞散射积分。
- **H 函数**：$H=\int f\ln f\,d\vec v$。
- **弛豫时间近似**：$(\partial f/\partial t)_{\mathrm{coll}}\approx-(f-f_0)/\tau$。

## 核心内容

### 基本定律 / 方程

**玻尔兹曼方程**：

$$ \frac{\partial f}{\partial t}+\vec v\cdot\nabla f+\frac{\vec F}{m}\cdot\nabla_v f=\Big(\frac{\partial f}{\partial t}\Big)_{\mathrm{coll}} $$

碰撞项（二体碰撞积分）：

$$ \Big(\frac{\partial f}{\partial t}\Big)_{\mathrm{coll}}=\int d^3v_2\int d\Omega\,|v_1-v_2|\frac{d\sigma}{d\Omega}\big[f_1'f_2'-f_1f_2\big] $$

**H 定理**：

$$ \frac{dH}{dt}\le0 $$

### 推导要点

- **漂移项**：沿相空间轨迹 $f$ 守恒（刘维尔定理），$\frac{df}{dt}=\frac{\partial f}{\partial t}+\vec v\cdot\nabla f+\frac{\vec F}{m}\cdot\nabla_vf=0$；碰撞改变 $f$，故右侧加碰撞项。
- **H 定理**：由碰撞项的对称性证明 $\frac{dH}{dt}=-\int\frac12[f_1'f_2'-f_1f_2]\ln\frac{f_1'f_2'}{f_1f_2}\,d\mu\le0$（被积函数非负）。
- **弛豫时间近似**：把复杂碰撞项简化为向平衡分布 $f_0$ 的指数弛豫，便于求输运系数。

### 重要定理与推论

- **H 定理**：$H$ 单调不增，平衡态（麦克斯韦-玻尔兹曼分布）时取最小值。
- **细致平衡**：碰撞使 $f$ 趋向平衡分布。
- **输运系数**：弛豫时间近似下 $\eta\sim n\bar v\lambda$、$\sigma\sim ne^2\tau/m$。
- **流体极限**：矩方程（质量、动量、能量）在长波极限给出欧拉/纳维-斯托克斯方程。

## 深化内容

玻尔兹曼方程是[[transport-theory]] 与 [[nonequilibrium-thermodynamics]] 的微观基础；量子推广有玻尔兹曼-朗道方程（费米液体）、量子玻尔兹曼方程。等离子体物理中的弗拉索夫方程是其无碰撞极限。延伸阅读可参考 Kardar《Statistical Physics of Fields》、Huang《Statistical Mechanics》、朗道《物理动力学》。

## 与其他知识的联系

- 紧密相关：[[transport-theory]]（输运系数）、[[kinetic-theory]]（物理背景）。
- 非平衡：[[nonequilibrium-thermodynamics]]、[[fluctuation-theory]]。
- 推广：流体力学（矩展开）、[[plasma-physics]]（弗拉索夫方程）。

## 前置知识

- [[kinetic-theory]]、[[statistical-mechanics]]、[[probability-theory]]
