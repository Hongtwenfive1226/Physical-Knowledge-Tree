---
id: hydrogen-atom
name: 氢原子
name_en: Hydrogen Atom
domain: quantum-mechanics
aliases: [氢原子结构, 库仑势]
tags: [量子, 原子, 库仑场]
keywords: [玻尔模型, 量子数, 能级, 精细结构]
updated: 2026-08-13
links:
  - {id: schrodinger-equation, weight: 5, note: 精确求解的典范}
  - {id: angular-momentum-qm, weight: 5, note: 角向波函数}
  - {id: spherical-harmonics, weight: 5, note: 角动量本征函数}
  - {id: central-force-motion, weight: 3, note: 经典对应}
  - {id: quantum-mechanics, weight: 4}
  - {id: special-functions, weight: 4, note: 径向解含拉盖尔函数}
  - {id: perturbation-theory, weight: 3, note: 精细结构与超精细结构}
  - {id: qed, weight: 3, note: 兰姆位移}
superseded_by: []
supersedes: []
---
# 氢原子

## 概述

氢原子是量子力学中**精确可解**的核心模型：单个电子在质子库仑势 $V=-e^2/(4\pi\varepsilon_0 r)$ 中运动。分离变量后，波函数分解为径向（拉盖尔多项式）与角向（球谐函数）之积，能级只由主量子数 $n$ 决定 $E_n\propto-1/n^2$。氢原子的精确解验证了薛定谔方程，其能级结构、精细结构、超精细结构与兰姆位移是检验量子力学与 QED 的经典标尺，也是理解一切多电子原子的起点。

## 基本概念

- **量子数**：主量子数 $n$、角量子数 $l$、磁量子数 $m$（自旋 $s=1/2$）。
- **约化质量**：$\mu=m_em_p/(m_e+m_p)$。
- **径向波函数**：$R_{nl}(r)$（连带拉盖尔多项式）；**角向**：球谐函数 $Y_{lm}$。
- **玻尔半径**：$a_0=\frac{4\pi\varepsilon_0\hbar^2}{\mu e^2}=0.529\,\mathrm{Å}$。

## 核心内容

### 基本定律 / 方程

波函数与能级：

$$ \psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_{lm}(\theta,\phi),\qquad E_n=-\frac{\mu e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac1{n^2}=-\frac{13.6\,\mathrm{eV}}{n^2} $$

径向方程：

$$ \Big[-\frac{\hbar^2}{2\mu}\frac{d^2}{dr^2}+\frac{\hbar^2l(l+1)}{2\mu r^2}-\frac{e^2}{4\pi\varepsilon_0 r}\Big]u_{nl}=E_n u_{nl},\qquad u_{nl}=rR_{nl} $$

### 推导要点

- **分离变量**：$\psi=R(r)Y_{lm}(\theta,\phi)$，角向方程给出 $Y_{lm}$（[[spherical-harmonics]]），径向方程化为含离心势 $\hbar^2l(l+1)/2\mu r^2$ 的一维问题。
- **能级量子化**：径向方程在 $r\to0,\infty$ 处要求可积，$R_{nl}$ 用拉盖尔多项式 $L^{2l+1}_{n-l-1}$ 展开，边界条件给出 $n=1,2,\dots$、$l=0,\dots,n-1$。
- **简并度**：对给定 $n$，$l=0,\dots,n-1$、$m=-l,\dots,l$ 共 $n^2$ 重简并（不计自旋）。

### 重要定理与推论

- **能级只依赖 $n$**：$E_n\propto-1/n^2$，库仑势的额外简并（$l$ 简并）源于其隐藏的"拉普拉斯-龙格-楞次"对称性。
- **光谱**：莱曼系（$n\to1$）、巴耳末系（$n\to2$），$\frac1\lambda=R(1/n_f^2-1/n_i^2)$。
- **径向概率**：最概然半径 $r=n^2a_0$，基态 $n=1$ 恰为玻尔半径。
- **经典对应**：$n\to\infty$ 时径向概率趋向开普勒轨道分布（对应原理）。

## 深化内容

高阶效应修正能级：**精细结构**（相对论 + 自旋-轨道耦合，$E_{FS}\propto\alpha^2$，见 [[perturbation-theory]]）、**超精细结构**（电子-核自旋耦合）、**兰姆位移**（QED 真空涨落，[[qed]] 的里程碑）、**塞曼/斯塔克效应**（外磁场/电场劈裂）。类氢离子与 [[condensed-matter-physics]] 的激子（等效氢原子）是直接推广。延伸阅读可参考 Griffiths《量子力学概论》、Sakurai《现代量子力学》、朗道《量子力学（非相对论）》。

## 与其他知识的联系

- 紧密相关：[[schrodinger-equation]]（方程）、[[angular-momentum-qm]]/[[spherical-harmonics]]（角向结构）、[[central-force-motion]]（经典对应）。
- 修正：[[perturbation-theory]]（精细/超精细）、[[qed]]（兰姆位移）。
- 推广：类氢离子、[[condensed-matter-physics]] 中的激子。

## 前置知识

- [[schrodinger-equation]]、[[angular-momentum-qm]]、[[special-functions]]
