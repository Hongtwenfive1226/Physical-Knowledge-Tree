---
id: integral-transforms
name: 积分变换
name_en: Integral Transforms
domain: math-methods
aliases: [拉普拉斯变换, 积分变换法]
tags: [数学, 方法, 变换]
keywords: [傅里叶变换, 拉普拉斯变换, 卷积]
updated: 2026-08-13
links:
  - {id: fourier-analysis, weight: 5, note: 傅里叶变换是积分变换的核心成员}
  - {id: complex-analysis, weight: 4, note: 拉普拉斯变换的解析延拓与反演}
  - {id: differential-equations, weight: 4, note: 把微分方程化为代数方程}
  - {id: mathematical-physics-methods, weight: 5}
  - {id: partial-differential-equations, weight: 4}
  - {id: quantum-mechanics, weight: 3, note: 位置-动量表象变换}
superseded_by: []
supersedes: []
---
# 积分变换

## 概述

积分变换把函数从"原域"映射到"变换域"，其核心价值在于把**微分运算化为代数运算**、**卷积化为乘积**，从而简化线性微分方程的求解。两种最基本变换：**傅里叶变换**（适用于全空间/稳态问题）与**拉普拉斯变换**（含衰减因子，天然适合初值问题）。在变换域中求解后，经**反演**回到原域。积分变换是信号处理、控制论、量子力学（表象变换）与数理方法的通用工具。

## 基本概念

- **傅里叶变换**：$\hat f(k)=\int f(x)e^{-ikx}dx$。
- **拉普拉斯变换**：$F(s)=\int_0^\infty f(t)e^{-st}dt$。
- **卷积定理**：$F[f*g]=\hat f\hat g$。
- **反演**：由变换域回到原域的逆变换。

## 核心内容

### 基本定律 / 方程

傅里叶变换对：

$$ \hat f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}dx,\qquad f(x)=\frac1{2\pi}\int\hat f(k)e^{ikx}dk $$

拉普拉斯变换：

$$ F(s)=\int_0^\infty f(t)e^{-st}dt $$

**微分 → 乘法**：$\widehat{f'}=ik\hat f$、$\mathcal L[f']=sF(s)-f(0)$。

**卷积定理**：$\widehat{f*g}=\hat f\,\hat g$。

### 推导要点

- **微分化乘法**：对导数做变换，分部积分消去导数，得 $ik$（傅里叶）或 $s$（拉普拉斯）因子。
- **卷积定理**：换元 $u=x-y$ 把二重积分分解为两个一维积分。
- **拉普拉斯反演**：用复平面的围道积分（布朗维奇积分，[[complex-analysis]]）。

### 重要定理与推论

- **微分方程 → 代数方程**：线性常系数方程在变换域化为代数方程。
- **卷积定理**：线性系统的响应 = 脉冲响应与输入的卷积。
- **拉普拉斯变换的初值/终值定理**：$f(0)=\lim_{s\to\infty}sF(s)$。
- **表象变换**：量子力学位置-动量表象的傅里叶对偶（[[quantum-mechanics]]）。

## 深化内容

积分变换是[[fourier-analysis]] 与 [[complex-analysis]] 的应用，用于[[differential-equations]]、[[partial-differential-equations]]（[[mathematical-physics-methods]]）、信号处理与控制论。量子力学的**表象变换**、格林函数的变换域求解都是其应用。延伸阅读可参考 Arfken《Mathematical Methods for Physicists》、Bracewell《The Fourier Transform and Its Applications》。

## 与其他知识的联系

- 紧密相关：[[fourier-analysis]]、[[mathematical-physics-methods]]、[[differential-equations]]/[[partial-differential-equations]]（求解工具）。
- 方法：[[complex-analysis]]（拉普拉斯反演）、[[green-function]]（变换域求格林函数）。
- 物理：[[quantum-mechanics]]（表象变换）。

## 前置知识

- [[calculus]]、[[complex-analysis]]、[[fourier-analysis]]
