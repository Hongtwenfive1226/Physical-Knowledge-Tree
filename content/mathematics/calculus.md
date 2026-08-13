---
id: calculus
name: 微积分
name_en: Calculus
domain: mathematics
aliases: [高等数学, 数学分析]
tags: [数学, 微分, 积分, 极限]
keywords: [导数, 积分, 极限, 级数, 泰勒]
updated: 2026-08-13
links:
  - {id: linear-algebra, weight: 4, note: 多元微积分的自然延伸与工具}
  - {id: differential-equations, weight: 5, note: 微分方程是微积分的直接应用}
  - {id: vector-calculus, weight: 5, note: 矢量微积分把微积分推广到场}
  - {id: complex-analysis, weight: 3}
  - {id: fourier-analysis, weight: 4, note: 级数与积分在调和分析中的推广}
  - {id: newtonian-mechanics, weight: 4, note: 经典力学的数学语言}
  - {id: variational-calculus, weight: 4, note: 泛函分析意义上的微积分推广}
  - {id: mathematical-physics-methods, weight: 4}
superseded_by: []
supersedes: []
pos: {x: 0, y: -40, z: 0}
---
# 微积分

## 概述

微积分研究函数的**变化率**（微分）与**累积量**（积分）及其互逆关系，是近代数学与全部定量科学（尤其是物理学）的共同语言。牛顿与莱布尼茨在 17 世纪各自独立建立微积分，后经柯西、魏尔斯特拉斯、黎曼等人以 $\varepsilon$-$\delta$ 语言严格化，奠定现代分析的基石。其思想核心可概括为两点：以**极限**精确刻画"无限接近"，以及**微积分基本定理**揭示微分与积分互为逆运算。

## 基本概念

- **极限**：$\lim_{x\to a}f(x)=L$ 表示当 $x$ 无限接近 $a$（但不必等于 $a$）时 $f(x)$ 无限接近 $L$；严格定义用 $\varepsilon$-$\delta$ 语言。
- **连续**：$f$ 在 $a$ 处连续 $\iff \lim_{x\to a}f(x)=f(a)$。
- **导数**：函数在某点的瞬时变化率

$$ f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h} $$

- **微分**：$df = f'(x)\,dx$，是函数增量的线性主部。
- **定积分**：黎曼和的极限 $\int_a^b f(x)\,dx = \lim_{\|P\|\to0}\sum_i f(x_i^*)\Delta x_i$，几何上是有符号面积。
- **原函数**：若 $F'=f$，则 $F$ 称为 $f$ 的原函数。

## 核心内容

### 基本定律 / 方程

导数基本运算法则：

$$ (f\pm g)'=f'\pm g',\qquad (fg)'=f'g+fg',\qquad \Big(\frac{f}{g}\Big)'=\frac{f'g-fg'}{g^2} $$

复合函数求导的**链式法则**：

$$ \frac{\mathrm d}{\mathrm dx}f\big(g(x)\big)=f'\big(g(x)\big)\,g'(x) $$

**微积分基本定理**（牛顿-莱布尼茨公式）：

$$ \int_a^b f(x)\,\mathrm dx = F(b)-F(a),\qquad F'=f $$

其第一部分断言"变上限积分"是原函数：

$$ \frac{\mathrm d}{\mathrm dx}\int_a^x f(t)\,\mathrm dt = f(x) $$

### 推导要点

- **链式法则**：由差分比恒等式 $\dfrac{\Delta f}{\Delta x}=\dfrac{\Delta f}{\Delta u}\cdot\dfrac{\Delta u}{\Delta x}$ 取极限得到。
- **微积分基本定理**：对分割 $a=x_0<\dots<x_n=b$ 用拉格朗日中值定理逐段有 $F(x_i)-F(x_{i-1})=f(c_i)\Delta x_i$，求和后令 $\|P\|\to0$ 即得 $\int_a^b f=F(b)-F(a)$。
- **泰勒公式**：光滑函数在 $a$ 点展开为多项式加余项

$$ f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x) $$

余项 $R_n$ 有拉格朗日型与积分型两种表示。

### 重要定理与推论

- **微分中值定理**（拉格朗日）：存在 $c\in(a,b)$ 使 $f'(c)=\dfrac{f(b)-f(a)}{b-a}$；推论——导数处处为零则函数为常数。
- **泰勒公式**：函数在一点的 $n$ 阶多项式逼近，是物理中"小量展开"与数值近似的总框架。
- **洛必达法则**：对 $\frac00$、$\frac\infty\infty$ 型不定式，在条件满足时 $\lim f/g=\lim f'/g'$。
- **换元积分** $\int f(g(x))g'(x)\,dx=\int f(u)\,du$ 与**分部积分** $\int u\,dv=uv-\int v\,du$，是积分计算的两大引擎。
- **广义积分**：无穷区间或无界函数积分的收敛性，是傅里叶变换、拉普拉斯变换的前提。

## 深化内容

微积分的严格化发展为**实分析**（$\varepsilon$-$\delta$ 极限、一致连续、紧性、一致收敛），函数空间 $C[a,b]$、$L^p$ 的完备性（巴拿赫空间）成为泛函分析的开端。**勒贝格积分**把黎曼积分推广到可测函数，使极限与积分可交换（控制收敛定理），是概率论、调和分析与量子力学（希尔伯特空间 $L^2$）的严格基础。多元微积分进一步引出格林、高斯、斯托克斯公式，由**微分形式**统一为 $\int_{\partial\Omega}\omega=\int_\Omega d\omega$。延伸阅读可参考卓里奇《数学分析》、Apostol《Mathematical Analysis》、Spivak《Calculus》。

## 与其他知识的联系

- 紧密相关：[[differential-equations]]（物理定律的标准表达）、[[vector-calculus]]（微积分到场论的推广）。
- 相关：[[fourier-analysis]] 与 [[complex-analysis]]（级数/积分理论的自然延伸）、[[variational-calculus]]（极值问题推广到泛函）。
- 应用：[[newtonian-mechanics]]（运动方程）、[[electrostatics]]（高斯定律积分形式）、[[quantum-mechanics]]（概率归一与期望）都以微积分为语言。

## 前置知识

- [[set-theory]]（实数系与极限的严格基础）
