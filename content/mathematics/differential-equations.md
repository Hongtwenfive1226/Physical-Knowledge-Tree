---
id: differential-equations
name: 常微分方程
name_en: Ordinary Differential Equations
domain: mathematics
aliases: [ODE]
tags: [数学, 微分方程, 动力系统]
keywords: [初值问题, 相空间, 稳定性, 常系数, 矩阵指数]
updated: 2026-08-13
links:
  - {id: calculus, weight: 5, note: 微分方程由微积分发展而来}
  - {id: partial-differential-equations, weight: 4, note: 偏微分方程是 ODE 向多变量情形的推广}
  - {id: linear-algebra, weight: 4, note: 线性方程组用矩阵方法求解}
  - {id: newtonian-mechanics, weight: 5, note: 牛顿第二定律即二阶常微分方程}
  - {id: vibration-theory, weight: 4, note: 振子系统归结为线性 ODE}
  - {id: chaos-theory, weight: 4, note: 非线性 ODE 与混沌}
  - {id: special-functions, weight: 3}
  - {id: quantum-mechanics, weight: 3}
superseded_by: []
supersedes: []
---
# 常微分方程

## 概述

常微分方程（ODE）研究含单变量未知函数及其导数的方程，是经典力学、电路、化学反应与动力系统的数学骨架。初值问题的一般形式为

$$ \frac{\mathrm d\vec y}{\mathrm dt} = \vec f(\vec y, t),\qquad \vec y(t_0)=\vec y_0 $$

线性常系数方程可用矩阵指数 $e^{At}$ 求解，解的结构由特征值决定（增长/衰减/振荡）。对非线性系统，**相空间分析**与**稳定性理论**（李雅普诺夫方法）是刻画长期行为的基本工具。

## 基本概念

- **阶**：方程中出现的最高阶导数的阶数。
- **线性/非线性**：关于未知函数及其导数是否线性。
- **初值问题 / 边值问题**：给定初始条件或边界条件求特解。
- **通解 / 特解**：含独立积分常数的解族 / 满足定解条件的单个解。
- **相空间**：以状态变量为坐标的空间，解曲线为相轨迹。

## 核心内容

### 基本定律 / 方程

**一阶线性方程**（积分因子法）：

$$ y'+p(x)y=q(x) \;\Rightarrow\; y=e^{-\int p}\Big[\int q\,e^{\int p}\,dx+C\Big] $$

**可分离变量**：$y'=g(x)h(y) \Rightarrow \int\frac{dy}{h(y)}=\int g(x)\,dx$。

**常系数线性方程**：特征方程

$$ a_n\lambda^n+\cdots+a_0=0 $$

其根决定通解结构（实根→指数项，复根→振荡项，重根→乘幂次）。

**一阶线性方程组**（矩阵指数）：

$$ \dot{\vec x}=A\vec x \;\Rightarrow\; \vec x(t)=e^{At}\vec x_0 $$

### 推导要点

- **积分因子**：方程乘以 $\mu=e^{\int p\,dx}$ 后左端成为 $(\mu y)'$，两边积分即得通解。
- **常数变易法**：先求齐次解 $y_h$，再把常数换成函数 $u(x)$ 代入非齐次方程确定 $u$。
- **特征方程**：设 $y=e^{\lambda x}$ 代入常系数方程，得到关于 $\lambda$ 的代数方程（把微分方程化为代数问题）。
- **矩阵指数**：若 $A=PDP^{-1}$，则 $e^{At}=Pe^{Dt}P^{-1}$（$D$ 对角时逐项 $e^{\lambda_i t}$）。

### 重要定理与推论

- **存在唯一性定理**（Picard–Lindelöf）：若 $\vec f$ 对 $\vec y$ 满足利普希茨条件，则初值问题局部存在唯一解。
- **线性叠加原理**：线性齐次方程解的线性组合仍是解，通解是基本解组的线性组合。
- **二阶常系数方程**：$y''+py'+qy=0$ 的判别式 $\Delta=p^2-4q$ 分三类（过阻尼/临界/欠阻尼），直接对应[[vibration-theory]] 的阻尼振动。
- **共振**：非齐次项频率等于固有频率时解含 $t\sin\omega t$ 型增长项，振幅线性增大。

## 深化内容

现代理论把 ODE 提升为**动力系统**：相空间上的流、不动点分类（结点/焦点/鞍点）、极限环与分岔、结构稳定性，以及**混沌**（对初值敏感依赖，见 [[chaos-theory]]）。**摄动方法**（正则摄动、多重尺度、WKB）处理小参数非线性方程；**数值方法**（龙格-库塔等）是求解非解析方程的通用手段。延伸阅读可参考 Arnold《常微分方程》、Strogatz《Nonlinear Dynamics and Chaos》、Bender & Orszag《Advanced Mathematical Methods》。

## 与其他知识的联系

- 紧密相关：[[newtonian-mechanics]] 的运动方程是二阶 ODE；[[vibration-theory]] 与 [[circuits]] 用线性 ODE 描述振荡。
- 相关：[[partial-differential-equations]] 是场方程的载体；[[chaos-theory]] 研究非线性 ODE 的长期行为。
- 方法：[[linear-algebra]]（特征值/矩阵指数）、[[special-functions]]（贝塞尔/勒让德方程）。

## 前置知识

- [[calculus]]、[[linear-algebra]]
