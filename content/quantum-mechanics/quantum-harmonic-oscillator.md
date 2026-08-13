---
id: quantum-harmonic-oscillator
name: 量子谐振子
name_en: Quantum Harmonic Oscillator
domain: quantum-mechanics
aliases: [谐振子, 升降算符]
tags: [量子, 谐振子, 精确可解]
keywords: [升降算符, 零点能, 声子, 相干态]
updated: 2026-08-13
links:
  - {id: schrodinger-equation, weight: 5, note: 精确可解模型}
  - {id: quantum-mechanics, weight: 4}
  - {id: vibration-theory, weight: 3, note: 经典对应}
  - {id: phonons, weight: 4, note: 晶格振动量子化}
  - {id: second-quantization, weight: 4, note: 产生湮灭算符}
  - {id: special-functions, weight: 3, note: 厄米多项式}
superseded_by: []
supersedes: []
---
# 量子谐振子

## 概述

量子谐振子是量子力学中最基本的精确可解模型，对应任意势阱在平衡点附近的二次近似。其重要性在于：能级**等距**（$E_n=\hbar\omega(n+1/2)$）、存在**零点能**、且可用**升降算符**（产生/湮灭算符）代数求解。谐振子是整个量子物理的"量子化单元"——晶格振动的**声子**、电磁场的**光子**、量子场论的自由场模式都以它为原型，升降算符语言直接通向二次量子化。

## 基本概念

- **哈密顿量**：$\hat H=\frac{\hat p^2}{2m}+\frac12m\omega^2\hat x^2$。
- **升降算符**：$\hat a=\sqrt{\frac{m\omega}{2\hbar}}(\hat x+\frac{i}{m\omega}\hat p)$、$\hat a^\dagger=(\hat a)^\dagger$，满足 $[\hat a,\hat a^\dagger]=1$。
- **数算符**：$\hat N=\hat a^\dagger\hat a$，本征值为整数 $n$。
- **零点能**：$E_0=\hbar\omega/2$，最低能态仍有量子涨落。

## 核心内容

### 基本定律 / 方程

哈密顿量与能级：

$$ \hat H=\hbar\omega\Big(\hat a^\dagger\hat a+\frac12\Big),\qquad E_n=\hbar\omega\Big(n+\frac12\Big),\ n=0,1,2,\dots $$

升降算符作用：

$$ \hat a|n\rangle=\sqrt n\,|n-1\rangle,\qquad \hat a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle $$

基态波函数：

$$ \psi_0(x)=\Big(\frac{m\omega}{\pi\hbar}\Big)^{1/4}e^{-m\omega x^2/2\hbar} $$

### 推导要点

- **升降算符法**：由 $[\hat a,\hat a^\dagger]=1$ 得 $[\hat N,\hat a^\dagger]=\hat a^\dagger$，故 $\hat a^\dagger$ 逐级抬升数本征值；因 $\hat N$ 半正定，存在基态 $\hat a|0\rangle=0$，解之得高斯波函数。
- **零点能**：$\hat a|0\rangle=0$ 给出 $\langle\hat p^2\rangle=\hbar m\omega/2$、$\langle\hat x^2\rangle=\hbar/(2m\omega)$，故 $E_0=\hbar\omega/2$。
- **波函数解**：$\psi_n(x)=H_n(\sqrt{m\omega/\hbar}\,x)e^{-m\omega x^2/2\hbar}$，$H_n$ 为厄米多项式（[[special-functions]]）。

### 重要定理与推论

- **等距能级**：$\Delta E=\hbar\omega$，是黑体辐射量子化（普朗克）的模型。
- **零点能**：$\Delta x\Delta p=\hbar/2$ 取等号（最小不确定态）。
- **升降算符的物理**：$\hat a^\dagger$ 增加一个能量量子（声子/光子）。
- **相干态**：$a|\alpha\rangle=\alpha|\alpha\rangle$，最接近经典谐振子运动的量子态。

## 深化内容

谐振子的升降算符形式直接通向**二次量子化**（[[second-quantization]]）：晶格振动量子化为[[phonons]]、电磁场量子化为[[quantum-optics]] 的光子。**相干态**（最小不确定态）是激光光场的量子描述。谐振子还是场论自由场、量子信息（连续变量）的基础。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、Cohen-Tannoudji《量子力学》。

## 与其他知识的联系

- 紧密相关：[[schrodinger-equation]]（求解）、[[second-quantization]]（产生/湮灭算符）、[[phonons]]（声子）。
- 应用：[[quantum-optics]]（光场模式）、[[quantum-field-theory]]（自由场）、[[vibration-theory]]（经典对应）。

## 前置知识

- [[schrodinger-equation]]、[[linear-algebra]]、[[special-functions]]
