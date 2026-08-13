---
id: wave-optics
name: 波动光学
name_en: Wave Optics
domain: optics
aliases: [物理光学]
tags: [光学, 波动, 干涉衍射]
keywords: [惠更斯原理, 干涉, 衍射, 偏振]
updated: 2026-08-13
links:
  - {id: optics, weight: 5, note: 光学分支}
  - {id: electromagnetic-waves, weight: 5, note: 光的波动本质}
  - {id: geometric-optics, weight: 4, note: 几何光学是极限}
  - {id: fourier-analysis, weight: 4, note: 夫琅禾费衍射即傅里叶变换}
  - {id: electromagnetic-media, weight: 3, note: 折射偏振}
supersedes: [geometric-optics]
superseded_by: []
---
# 波动光学

## 概述

波动光学用波动理论解释光的**干涉、衍射与偏振**——这些现象无法由几何光学（光线）描述。核心原理是**惠更斯-菲涅尔原理**：波前每一点是次波源，次波的相干叠加给出传播。波动光学揭示了光的横波性（偏振），并给出**衍射极限**（光学分辨率的根本限制）。夫琅禾费衍射与空间**傅里叶变换**（[[fourier-analysis]]）的对应使波动光学与信号处理相通。

## 基本概念

- **惠更斯-菲涅尔原理**：次波相干叠加。
- **干涉 / 衍射**：波的叠加 / 波绕过障碍物。
- **偏振**：横波的振动方向（线、圆、椭圆偏振）。
- **相干性**：时间/空间相干（[[electromagnetic-waves]]）。
- **衍射极限**：$\theta\approx1.22\lambda/D$。

## 核心内容

### 基本定律 / 方程

双光束干涉强度：

$$ I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta $$

**杨氏双缝**干涉条纹间距：

$$ \Delta x=\frac{\lambda D}{d} $$

单缝夫琅禾费衍射的强度分布：

$$ I(\theta)=I_0\Big(\frac{\sin\beta}{\beta}\Big)^2,\qquad \beta=\frac{\pi a\sin\theta}{\lambda} $$

### 推导要点

- **杨氏双缝**：两缝到屏的光程差 $\delta=2\pi d\sin\theta/\lambda$，相长（亮纹）条件 $d\sin\theta=m\lambda$。
- **夫琅禾费衍射 = 傅里叶变换**：远场振幅是孔径函数的傅里叶变换（[[fourier-analysis]]）。
- **偏振**：由麦克斯韦方程的横波解 $\vec E\perp\vec k$ 决定。

### 重要定理与推论

- **干涉 / 衍射**：波动性的直接证据（杨氏、单缝、光栅）。
- **衍射极限**：$\theta\approx1.22\lambda/D$，光学分辨率的极限。
- **光栅方程**：$d\sin\theta=m\lambda$，光栅用于分光。
- **布儒斯特角**：$\tan\theta_B=n_2/n_1$，反射光完全偏振。

## 深化内容

波动光学是 [[optics]] 的核心；夫琅禾费衍射与[[fourier-analysis]] 对应是傅里叶光学的基石。衍射极限与 [[lasers]]、显微镜分辨（阿贝极限）相关。延伸阅读可参考 Hecht《Optics》、Born & Wolf《Principles of Optics》、Goodman《Introduction to Fourier Optics》。

## 与其他知识的联系

- 紧密相关：[[electromagnetic-waves]]（物理本质）、[[fourier-analysis]]（衍射数学）、[[optics]]。
- 上位：短波极限退化为 [[geometric-optics]]；量子层面走向 [[quantum-optics]]。

## 前置知识

- [[electromagnetic-waves]]、[[fourier-analysis]]、[[optics]]
