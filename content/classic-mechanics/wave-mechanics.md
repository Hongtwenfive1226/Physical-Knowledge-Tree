---
id: wave-mechanics
name: 波动与波动方程
name_en: Waves and Wave Equations
domain: classic-mechanics
aliases: [机械波, 波动]
tags: [力学, 波动, 传播]
keywords: [波动方程, 色散, 干涉, 衍射, 相速度, 群速度]
updated: 2026-08-13
links:
  - {id: partial-differential-equations, weight: 5, note: 波动方程是标准双曲型 PDE}
  - {id: vibration-theory, weight: 4, note: 连续极限下的简正模}
  - {id: newtonian-mechanics, weight: 3, note: 波动是力学系统的集体运动}
  - {id: fourier-analysis, weight: 4, note: 波动用频谱描述}
  - {id: acoustics, weight: 5, note: 声波是机械波}
  - {id: electromagnetic-waves, weight: 4, note: 电磁波是横波，无介质}
  - {id: quantum-mechanics, weight: 3, note: 物质波}
  - {id: optics, weight: 4, note: 波动光学}
superseded_by: []
supersedes: []
---
# 波动与波动方程

## 概述

波动是**扰动在空间中的传播**，由双曲型的波动方程描述。波是能量与动量传播的载体，叠加原理导致**干涉**与**衍射**。波分为机械波（需介质：声、水波、弦波）与电磁波（无介质）。波的概念贯通经典与量子：量子力学把波粒二象性表达为**物质波**（德布罗意），薛定谔方程即物质波的"波动方程"。波动与[[vibration-theory]] 一脉相承——连续介质极限下，简正模过渡为行波。

## 基本概念

- **波动方程**：$\frac{\partial^2u}{\partial t^2}=c^2\nabla^2u$，$c$ 为波速。
- **平面波**：$u=A\cos(\vec k\cdot\vec r-\omega t)$；波矢 $\vec k$、角频率 $\omega$、波长 $\lambda=2\pi/k$。
- **色散关系**：$\omega=\omega(k)$；非色散（$\omega=ck$）与色散介质。
- **相速度 / 群速度**：$v_p=\omega/k$、$v_g=d\omega/dk$。
- **横波 / 纵波**：位移垂直/平行于传播方向。

## 核心内容

### 基本定律 / 方程

波动方程：

$$ \frac{\partial^2u}{\partial t^2}=c^2\nabla^2u $$

平面波解与色散关系：

$$ u(\vec r,t)=Ae^{i(\vec k\cdot\vec r-\omega t)},\qquad \omega=\omega(k) $$

**波动方程的导出**（弦）：横向位移满足 $\frac{\partial^2y}{\partial t^2}=\frac{T}{\mu}\frac{\partial^2y}{\partial x^2}$，波速 $c=\sqrt{T/\mu}$。

### 推导要点

- **弦波动方程**：对弦元段用牛顿第二定律，张力竖直分量差 $\approx T\frac{\partial^2y}{\partial x^2}\Delta x$，质量 $\mu\Delta x$，即得波动方程。
- **通解（达朗贝尔解）**：$u(x,t)=f(x-ct)+g(x+ct)$，两列反向行波的叠加。
- **色散关系来源**：把平面波代入方程，得 $\omega$ 与 $k$ 的关系（如浅水波 $\omega^2=gk\tanh(kh)$）。

### 重要定理与推论

- **叠加原理**：线性波动方程解的线性组合仍是解（干涉、衍射的基础）。
- **波的叠加与拍**：同向两列相近频率波叠加产生"拍" $\omega_1-\omega_2$。
- **驻波**：两列反向行波叠加形成节点/腹点，是[[vibration-theory]] 简正模的连续版本。
- **多普勒效应**：波源与观察者相对运动引起频率变化。
- **波的能量**：能量密度与振幅平方成正比 $\propto A^2\omega^2$。

## 深化内容

波的观念贯穿物理：**声学**（[[acoustics]]）、**光学**（[[optics]]，惠更斯原理、干涉衍射）、**电磁波**（[[electromagnetic-waves]]，麦克斯韦方程的解）、以及**量子力学**的**物质波**（[[schrodinger-equation]]）。非线性波动引出孤子、激波等（[[fluid-mechanics]] 中的水波）。延伸阅读可参考 Crawford《Waves》、French《Vibrations and Waves》、朗道《连续介质力学》。

## 与其他知识的联系

- 紧密相关：[[acoustics]]（声波）、[[optics]]（光的波动性）、[[vibration-theory]]（简正模）。
- 数学：[[partial-differential-equations]]、[[fourier-analysis]]（频谱）。
- 横向联系：[[electromagnetic-waves]]（电磁波动）、[[schrodinger-equation]]（物质波方程）。

## 前置知识

- [[partial-differential-equations]]、[[fourier-analysis]]、[[vibration-theory]]
