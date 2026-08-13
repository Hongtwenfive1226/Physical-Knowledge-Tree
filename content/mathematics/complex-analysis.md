---
id: complex-analysis
name: 复变函数
name_en: Complex Analysis
domain: mathematics
aliases: [复分析]
tags: [数学, 复数, 解析函数]
keywords: [柯西积分, 留数, 解析延拓, 保角映射]
updated: 2026-08-13
links:
  - {id: calculus, weight: 4, note: 复分析是微积分在复数域的自然推广}
  - {id: special-functions, weight: 4, note: 留数法求特殊函数积分}
  - {id: fourier-analysis, weight: 4, note: 拉普拉斯变换用复平面分析}
  - {id: integral-transforms, weight: 4}
  - {id: quantum-mechanics, weight: 2}
  - {id: electromagnetic-waves, weight: 2, note: 复振幅与波阻抗}
superseded_by: []
supersedes: []
---
# 复变函数

## 概述

复变函数研究复平面上的解析函数。解析性（可复导）远比实可导苛刻：它蕴含无穷次可导、局部展开为幂级数、以及**柯西积分定理**等一系列"刚性"性质。复分析在物理中的核心价值有二：一是**留数定理**提供计算实定积分与反常积分的统一利器；二是**保角映射**用于求解二维位势问题（静电、流体）。复变方法还是拉普拉斯变换、色散关系与量子场论围道积分的语言。

## 基本概念

- **复数** $z=x+iy$，模 $|z|$，辐角 $\arg z$，共轭 $\bar z$；欧拉公式 $e^{i\theta}=\cos\theta+i\sin\theta$。
- **解析函数**：在开集内处处可复导；等价于满足**柯西-黎曼方程** $\partial u/\partial x=\partial v/\partial y,\ \partial u/\partial y=-\partial v/\partial x$（$f=u+iv$）。
- **奇点**：可去奇点、极点（$m$ 阶）、本性奇点；解析延拓沿路径扩展定义域。
- **留数**：$f$ 在孤立奇点 $z_0$ 的洛朗展开中 $(z-z_0)^{-1}$ 项系数。

## 核心内容

### 基本定律 / 方程

**柯西积分定理**：解析函数沿闭围道积分为零

$$ \oint_\gamma f(z)\,\mathrm dz = 0 $$

**柯西积分公式**（及其导数形式）：

$$ f(z_0)=\frac{1}{2\pi i}\oint_\gamma\frac{f(z)}{z-z_0}\,dz,\qquad f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_\gamma\frac{f(z)}{(z-z_0)^{n+1}}\,dz $$

**留数定理**：

$$ \oint_\gamma f(z)\,\mathrm dz = 2\pi i\sum_{k}\mathrm{Res}(f,z_k) $$

### 推导要点

- **柯西积分定理**：对 $f\,dz=(u+iv)(dx+idy)$ 用格林公式，结合柯西-黎曼方程，被积表达式成为全微分，闭路积分为零。
- **柯西积分公式**：对 $f(z)/(z-z_0)$ 在挖去 $z_0$ 的围道用柯西定理，小圆贡献取极限 $z\to z_0$ 得到 $2\pi i f(z_0)$。
- **留数定理**：把 $f$ 展开为洛朗级数，逐项积分，只有 $-1$ 次项贡献 $2\pi i$。

### 重要定理与推论

- **解析 ⇔ 洛朗/泰勒展开**：解析函数局部等于收敛幂级数。
- **刘维尔定理**：全平面有界的整函数必为常数；由此可证**代数基本定理**。
- **留数计算实积分**：$\int_{-\infty}^{\infty}R(x)dx$ 用上半平面围道，$\int_0^{2\pi}R(\cos\theta,\sin\theta)d\theta$ 用单位圆围道。
- **儒歇定理与辐角原理**：用于根的计数。

## 深化内容

复分析通向**黎曼面**与**多值函数**的单值化（$\sqrt{z}$、$\ln z$），是弦理论、共形场论中重要工具；**共形映射**把任意单连通域共形等价于单位圆（黎曼映射定理），是二维流体与静电边值问题的标准解法。**色散关系**（克拉默斯-克朗尼希）把因果系统的实部与虚部联系起来。延伸阅读可参考阿尔福斯《复分析》、Brown & Churchill《Complex Variables》。

## 与其他知识的联系

- 紧密相关：[[integral-transforms]]（拉普拉斯变换的围道反演）、[[special-functions]]（留数法求积分）。
- 相关：[[fourier-analysis]]、[[electromagnetic-waves]]（复振幅）、[[quantum-mechanics]]（谐振子围道积分）。
- 应用：[[electrostatics]] 与 [[fluid-mechanics]] 的二维位势问题用保角映射求解。

## 前置知识

- [[calculus]]、[[set-theory]]
