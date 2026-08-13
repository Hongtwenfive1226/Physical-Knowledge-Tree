---
id: electromagnetic-waves
name: 电磁波
name_en: Electromagnetic Waves
domain: electrodynamics
aliases: [电磁辐射波, 波动光学]
tags: [电磁学, 波动, 光]
keywords: [平面波, 偏振, 色散, 波阻抗, 坡印廷矢量]
updated: 2026-08-13
links:
  - {id: maxwell-equations, weight: 5, note: 电磁波由麦克斯韦方程组预言}
  - {id: optics, weight: 4, note: 光是电磁波}
  - {id: waveguides-resonators, weight: 4, note: 受限电磁波}
  - {id: electromagnetic-radiation, weight: 4, note: 波的产生}
  - {id: electromagnetic-media, weight: 4, note: 介质中的传播}
  - {id: complex-analysis, weight: 2, note: 复振幅}
  - {id: special-relativity, weight: 3, note: 光速不变}
  - {id: fourier-analysis, weight: 3, note: 频谱分析}
superseded_by: []
supersedes: []
---
# 电磁波

## 概述

电磁波是电磁场以波动形式在空间传播，由麦克斯韦方程组直接预言。真空中电磁波以光速 $c$ 传播，是**横波**（$\vec E\perp\vec B\perp\vec k$）。赫兹 1887 年实验证实其存在，光被确认为特定频段的电磁波——由此光学并入电磁学。电磁波携带能量（坡印廷矢量）与动量（辐射压），其频谱从无线电波延伸到 $\gamma$ 射线，构成现代通信、遥感、医学成像与光谱学的物理基础。

## 基本概念

- **平面波**：$\vec E=\vec E_0e^{i(\vec k\cdot\vec r-\omega t)}$，波矢 $\vec k$、角频率 $\omega$。
- **偏振**：$\vec E$ 的振动方向（线偏振、圆偏振、椭圆偏振）。
- **波阻抗**：$Z_0=\sqrt{\mu_0/\varepsilon_0}\approx377\,\Omega$（真空），$\vec E$ 与 $\vec H$ 振幅之比。
- **坡印廷矢量**：$\vec S=\frac1{\mu_0}\vec E\times\vec B$，能量流密度。
- **色散**：介质中波速随频率变化 $\omega=\omega(k)$。

## 核心内容

### 基本定律 / 方程

真空中的平面波关系：

$$ \vec E=\vec E_0e^{i(\vec k\cdot\vec r-\omega t)},\qquad \vec B=\frac1c\hat k\times\vec E,\qquad k=\frac{\omega}{c} $$

坡印廷矢量与能量密度：

$$ \vec S=\frac1{\mu_0}\vec E\times\vec B,\qquad u=\frac12\Big(\varepsilon_0E^2+\frac{B^2}{\mu_0}\Big) $$

平均能流（简谐波）：$\langle S\rangle=\frac12\mathrm{Re}(\vec E\times\vec H^*)$。

### 推导要点

- **波动方程的来源**：真空无源麦克斯韦方程组取旋度联立（见 [[maxwell-equations]]），得 $\nabla^2\vec E=\mu_0\varepsilon_0\ddot{\vec E}$。
- **横波性**：由 $\nabla\cdot\vec E=0$ 对平面波给出 $\vec k\cdot\vec E_0=0$（纵场分量为零）；由法拉第定律得 $\vec B=\hat k\times\vec E/c$。
- **坡印廷定理**：由 $\nabla\cdot(\vec E\times\vec H)$ 展开并代入两个旋度方程，得 $\frac{\partial u}{\partial t}+\nabla\cdot\vec S=-\vec J\cdot\vec E$（能量守恒）。

### 重要定理与推论

- **光的电磁本质**：麦克斯韦预言 $c=1/\sqrt{\mu_0\varepsilon_0}$ 与光速吻合。
- **坡印廷定理**：电磁能量守恒——场能变化 = 流入通量 + 对电荷做功。
- **辐射压**：电磁波携带动量 $\vec g=\vec S/c^2$，对表面产生压力。
- **偏振态**：两正交线偏振以相位差叠加得到圆/椭圆偏振（波动光学基础）。

## 深化内容

电磁波在介质中的传播引出**折射、色散、吸收**（[[electromagnetic-media]]）；在边界与波导中形成受限模式（[[waveguides-resonators]]）；由加速电荷产生的是**辐射**（[[electromagnetic-radiation]]）。频谱分析用[[fourier-analysis]]。电磁波的相对论协变性（光速不变）是[[special-relativity]] 的出发点。量子化后电磁波即**光子**（[[qed]]）。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Born & Wolf《Principles of Optics》。

## 与其他知识的联系

- 紧密相关：[[maxwell-equations]]（来源）、[[optics]]（光的电磁本质）、[[electromagnetic-media]]。
- 产生与传播：[[electromagnetic-radiation]]（辐射源）、[[waveguides-resonators]]（导波）。
- 数学：[[complex-analysis]]、[[fourier-analysis]]（频谱与脉冲）。
- 相对论：[[special-relativity]]（光速不变）。

## 前置知识

- [[maxwell-equations]]、[[vector-calculus]]、[[wave-mechanics]]
