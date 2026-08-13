---
id: minkowski-spacetime
name: 闵可夫斯基时空
name_en: Minkowski Spacetime
domain: relativity
aliases: [四维时空, 时空几何]
tags: [相对论, 时空, 几何]
keywords: [线元, 类时, 类光, 固有时]
updated: 2026-08-13
links:
  - {id: special-relativity, weight: 5, note: 狭义相对论的几何表述}
  - {id: general-relativity, weight: 4, note: 弯曲时空的平直极限}
  - {id: tensor-calculus, weight: 5, note: 洛伦兹张量}
  - {id: relativistic-electrodynamics, weight: 4, note: 四维电磁场}
superseded_by: []
supersedes: []
---
# 闵可夫斯基时空

## 概述

闵可夫斯基（1908）把狭义相对论表述为**四维时空几何**：把时间与空间统一为四维时空中的坐标，洛伦兹变换成为时空的"伪转动"，不变的是**时空间隔**。这一几何化揭示了狭义相对论的本质结构——因果结构由光锥决定、不同惯性系只是时空的坐标选择。闵可夫斯基时空是广义相对论（弯曲时空）的平直极限，也是相对论量子场论的舞台。

## 基本概念

- **事件 / 四矢量**：$x^\mu=(ct,x,y,z)$。
- **闵可夫斯基度规**：$\eta_{\mu\nu}=\mathrm{diag}(-1,1,1,1)$。
- **时空间隔**：$ds^2=\eta_{\mu\nu}dx^\mu dx^\nu$。
- **类时 / 类光 / 类空**：$ds^2<0$ / $=0$ / $>0$。
- **固有时**：$d\tau=\sqrt{-ds^2}/c$。

## 核心内容

### 基本定律 / 方程

线元：

$$ ds^2=-c^2dt^2+dx^2+dy^2+dz^2=\eta_{\mu\nu}dx^\mu dx^\nu $$

间隔分类与因果结构：

- 类时 $ds^2<0$：因果关联（光锥内）。
- 类光 $ds^2=0$：光传播（光锥）。
- 类空 $ds^2>0$：无因果关联。

洛伦兹变换保持 $ds^2$ 不变（[[special-relativity]]），构成**庞加莱群**（洛伦兹变换 + 平移）。

### 推导要点

- **度规不变性**：洛伦兹变换的定义即"保持 $ds^2=\eta_{\mu\nu}dx^\mu dx^\nu$ 不变"的线性变换。
- **固有时**：随粒子运动时 $d\vec x=\vec v dt$，$ds^2=-c^2dt^2(1-v^2/c^2)=-c^2d\tau^2$，得 $d\tau=dt/\gamma$。
- **因果结构**：类时间隔可由单一惯性系内的信号连接，类空间隔则不能（同时性的相对性）。

### 重要定理与推论

- **光锥与因果**：事件只能影响光锥内的未来事件。
- **洛伦兹不变性**：物理量按洛伦兹张量/标量变换。
- **庞加莱群**：时空的对称群（平移 + 旋转 + boost）。
- **平直极限**：$\eta_{\mu\nu}$ 是广义相对论度规 $g_{\mu\nu}$ 的平直极限（[[general-relativity]]）。

## 深化内容

闵可夫斯基时空是[[relativistic-electrodynamics]]（电磁张量）与[[quantum-field-theory]]（场的舞台）的基础。因果结构与光锥在现代物理（量子场论的局域性）中至关重要。延伸阅读可参考 Taylor & Wheeler《Spacetime Physics》、Schutz《A First Course in General Relativity》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[special-relativity]]（物理内容）、[[tensor-calculus]]（四维张量语言）。
- 推广：[[general-relativity]] 中 $\eta_{\mu\nu}$ 被弯曲度规 $g_{\mu\nu}$ 取代。
- 电磁：[[relativistic-electrodynamics]] 的电磁张量定义在闵可夫斯基时空。

## 前置知识

- [[special-relativity]]、[[tensor-calculus]]、[[linear-algebra]]
