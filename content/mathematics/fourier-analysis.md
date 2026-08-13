---
id: fourier-analysis
name: 傅里叶分析
name_en: Fourier Analysis
domain: mathematics
aliases: [傅里叶变换, 傅里叶级数]
tags: [数学, 调和分析, 信号]
keywords: [傅里叶级数, 傅里叶变换, 频谱, 卷积]
updated: 2026-08-13
links:
  - {id: calculus, weight: 4, note: 级数与积分理论是其基础}
  - {id: integral-transforms, weight: 5, note: 傅里叶变换是积分变换的一种}
  - {id: partial-differential-equations, weight: 4, note: 线性 PDE 的标准解法}
  - {id: electromagnetic-waves, weight: 3, note: 信号频谱分析}
  - {id: quantum-mechanics, weight: 4, note: 动量与位置表象互为傅里叶对偶}
  - {id: optics, weight: 3, note: 夫琅禾费衍射即空间傅里叶变换}
  - {id: mathematical-physics-methods, weight: 4}
superseded_by: []
supersedes: []
---
# 傅里叶分析

## 概述

傅里叶分析把任意（足够好的）函数分解为简谐振荡（平面波）的叠加，是"频谱"观念的数学基础。周期函数用**傅里叶级数**展开，非周期函数用**傅里叶变换**展开；两者由周期趋于无穷的极限联系。傅里叶分析在物理中的地位无可替代：它把微分方程化为代数方程（线性系统分析）、给出位置-动量表象对偶（量子力学）、并把衍射、色散、滤波等现象统一到频域视角。

## 基本概念

- **傅里叶系数**：周期函数在正交基 $\{e^{inx}\}$ 上的投影

$$ c_n=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx $$

- **傅里叶变换对**：

$$ \hat f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,dx,\qquad f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)e^{ikx}\,dk $$

- **卷积**：$(f*g)(x)=\int f(y)g(x-y)\,dy$，描述线性系统的叠加。
- **频谱**：$\hat f(k)$ 刻画各频率分量的幅度/相位。

## 核心内容

### 基本定律 / 方程

傅里叶级数（指数形式）：

$$ f(x)=\sum_{n=-\infty}^{\infty}c_n e^{inx},\qquad c_n=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx $$

傅里叶变换（正/逆）：

$$ \hat f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,dx,\qquad f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)e^{ikx}\,dk $$

**帕塞瓦尔定理**（能量守恒于频域）：

$$ \int_{-\infty}^{\infty}|f(x)|^2\,dx = \frac{1}{2\pi}\int_{-\infty}^{\infty}|\hat f(k)|^2\,dk $$

### 推导要点

- **系数的正交性**：由 $\int_{-\pi}^{\pi}e^{i(m-n)x}dx=2\pi\delta_{mn}$，两边乘 $e^{-imx}$ 积分即得 $c_m$。
- **变换的极限来源**：令周期 $L\to\infty$、$n/L\to k$，傅里叶级数的求和过渡为积分，得到变换对。
- **卷积定理**：把 $\widehat{f*g}=\int\int f(y)g(x-y)e^{-ikx}dxdy$ 换元 $u=x-y$ 分解为两个一维积分，得 $\widehat{f*g}=\hat f\,\hat g$。

### 重要定理与推论

- **卷积定理**：$\widehat{f*g}=\hat f\,\hat g$，时域卷积对应频域乘积，是滤波器设计的基石。
- **微分 → 乘法**：$\widehat{f'}=ik\hat f$，把微分方程化为代数方程。
- **不确定性关系**：$\Delta x\,\Delta k\ge 1/2$（信号时宽与带宽不可同时任意小）。
- **狄拉克梳与采样定理**：均匀采样的傅里叶变换是频谱的周期复制（奈奎斯特采样定理）。

## 深化内容

傅里叶分析的一般化是**调和分析**：在群与齐性空间上定义卷积与变换（如 $L^2(\mathbb R)$ 上的傅里叶变换、局部紧群上的庞特里亚金对偶）。**分布（广义函数）理论**把傅里叶变换推广到缓增分布，使 $\delta$ 函数、平面波等严格化。**快速傅里叶变换（FFT）**把计算复杂度从 $O(N^2)$ 降到 $O(N\log N)$，是数值信号处理的基础。延伸阅读可参考 Stein & Shakarchi《Fourier Analysis》、Bracewell《The Fourier Transform and Its Applications》。

## 与其他知识的联系

- 紧密相关：[[integral-transforms]]（统一傅里叶/拉普拉斯变换）、[[partial-differential-equations]]（频谱展开求解）。
- 物理应用：[[quantum-mechanics]]（位置-动量表象对偶，$\Delta x\Delta p$ 不确定关系）、[[optics]]（衍射）、[[electromagnetic-waves]]（频域色散）。
- 相关：[[mathematical-physics-methods]]。

## 前置知识

- [[calculus]]、[[complex-analysis]]
