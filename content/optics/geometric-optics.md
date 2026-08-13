---
id: geometric-optics
name: 几何光学
name_en: Geometric Optics
domain: optics
aliases: [射线光学]
tags: [光学, 射线, 成像]
keywords: [费马原理, 斯涅尔定律, 透镜成像]
updated: 2026-08-13
links:
  - {id: optics, weight: 5, note: 光学分支}
  - {id: wave-optics, weight: 4, note: 波动极限}
  - {id: variational-calculus, weight: 4, note: 费马原理}
  - {id: electromagnetic-waves, weight: 2}
  - {id: lasers, weight: 2, note: 光束传播}
superseded_by: [wave-optics]
supersedes: []
---
# 几何光学

## 概述

几何光学在**波长远小于障碍物/孔径**的极限下用**光线**（射线）描述光的传播，是设计透镜、望远镜、显微镜等成像系统的框架。其三条基本定律——直线传播、反射定律、折射定律（斯涅尔定律）——都可从更根本的**费马原理**（光沿光程取极值的路径传播）导出。成像由**高斯光学**（近轴近似）描述，给出薄透镜公式与放大率。几何光学是波动光学在 $\lambda\to0$ 的极限。

## 基本概念

- **光线**：光的传播方向。
- **光程**：$n\,s$（几何长度 × 折射率）。
- **折射率**：$n=c/v$。
- **物距 / 像距 / 焦距**：$u$、$v$、$f$。
- **近轴近似**：小角近似 $\sin\theta\approx\theta$。

## 核心内容

### 基本定律 / 方程

反射与折射定律：

$$ \theta_i=\theta_r,\qquad n_1\sin\theta_1=n_2\sin\theta_2 $$

**费马原理**：

$$ \delta\int n\,ds=0 $$

**薄透镜公式（高斯光学）**：

$$ \frac1f=\frac1u+\frac1v,\qquad M=-\frac vu $$

### 推导要点

- **斯涅尔定律**：由费马原理对光程求变分，或由惠更斯原理构造折射波前。
- **薄透镜公式**：对球面折射逐面应用斯涅尔定律，近轴近似下得到。
- **费马原理**：[[variational-calculus]] 的直接应用（光程泛函的极值）。

### 重要定理与推论

- **费马原理**：反射、折射、直线传播都是光程极值的结果。
- **全内反射**：$n_1>n_2$ 且 $\theta_1>\theta_c=\arcsin(n_2/n_1)$ 时发生（光纤基础）。
- **成像关系**：透镜、球面镜的物像关系。
- **像差**：球差、色差等偏离理想成像。

## 深化内容

几何光学是 [[wave-optics]] 的短波极限；费马原理与[[variational-calculus]]（最小作用量）同源，且与量子力学的[[path-integral]]（相位稳定）有深刻类比。应用：望远镜、显微镜、相机、[[lasers]] 光束。延伸阅读可参考 Hecht《Optics》、Born & Wolf《Principles of Optics》、赵凯华《光学》。

## 与其他知识的联系

- 紧密相关：[[optics]]（分支）、[[wave-optics]]（波动修正，其上位形式）、[[variational-calculus]]（费马原理）。
- 应用：望远镜、显微镜、相机设计、[[lasers]] 光束。

## 前置知识

- [[optics]]、[[variational-calculus]]、[[electromagnetic-waves]]
