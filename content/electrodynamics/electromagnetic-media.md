---
id: electromagnetic-media
name: 介质中的电磁场
name_en: Electromagnetic Fields in Media
domain: electrodynamics
aliases: [电介质, 磁介质]
tags: [电磁学, 介质, 极化]
keywords: [极化强度, 磁化强度, D场, H场, 本构关系]
updated: 2026-08-13
links:
  - {id: maxwell-equations, weight: 5, note: 介质中的麦克斯韦方程组}
  - {id: electromagnetic-waves, weight: 4, note: 介质中波的传播}
  - {id: electrostatics, weight: 3}
  - {id: magnetostatics, weight: 3}
  - {id: optics, weight: 3, note: 折射与色散}
  - {id: condensed-matter-physics, weight: 2}
superseded_by: []
supersedes: []
---
# 介质中的电磁场

## 概述

介质中的电磁场把**束缚电荷与束缚电流**的响应归入宏观辅助场：极化强度 $\vec P$（电偶极密度）与磁化强度 $\vec M$（磁偶极密度），由此定义电位移 $\vec D=\varepsilon_0\vec E+\vec P$ 与磁场强度 $\vec H=\vec B/\mu_0-\vec M$。介质中的麦克斯韦方程组只用**自由**电荷/电流 $\rho_f,\vec J_f$。线性介质的本构关系 $\vec D=\varepsilon\vec E$、$\vec B=\mu\vec H$ 使介质效应归结为介电常数与磁导率，直接给出折射率与光速的介质修正。

## 基本概念

- **极化强度**：$\vec P$，单位体积电偶极矩；束缚电荷 $\rho_b=-\nabla\cdot\vec P$、$\sigma_b=\vec P\cdot\hat n$。
- **磁化强度**：$\vec M$，单位体积磁偶极矩；束缚电流 $\vec J_b=\nabla\times\vec M$。
- **电位移 / 磁场强度**：$\vec D$、$\vec H$。
- **本构关系**：线性各向同性介质 $\vec D=\varepsilon\vec E$、$\vec B=\mu\vec H$；$\varepsilon_r=\varepsilon/\varepsilon_0$、$\mu_r=\mu/\mu_0$。

## 核心内容

### 基本定律 / 方程

介质中的麦克斯韦方程组：

$$ \nabla\cdot\vec D=\rho_f,\qquad \nabla\cdot\vec B=0 $$

$$ \nabla\times\vec E=-\frac{\partial\vec B}{\partial t},\qquad \nabla\times\vec H=\vec J_f+\frac{\partial\vec D}{\partial t} $$

边界条件（无面自由电荷/电流）：

$$ D_{1\perp}-D_{2\perp}=\sigma_f,\quad B_{1\perp}=B_{2\perp},\quad E_{1\parallel}=E_{2\parallel},\quad H_{1\parallel}-H_{2\parallel}=\vec K_f\times\hat n $$

### 推导要点

- **束缚电荷/电流**：把介质视为大量微小偶极的集合，$\rho_b=-\nabla\cdot\vec P$ 由偶极场的叠加得到；磁化电流 $\vec J_b=\nabla\times\vec M$ 同理。
- **介质方程**：把 $\vec E,\vec B$ 的麦克斯韦方程按自由/束缚源拆分，束缚部分吸收进 $\vec D,\vec H$ 即得介质形式。
- **边界条件**：对界面取高斯面/安培回路，令厚度趋于零得到法向/切向跳变。

### 重要定理与推论

- **折射率**：线性介质中光速 $v=1/\sqrt{\mu\varepsilon}$，折射率 $n=\sqrt{\mu_r\varepsilon_r}\approx\sqrt{\varepsilon_r}$（非磁介质）。
- **界面折射与反射**：法向 $\vec D$ 连续、切向 $\vec E$ 连续给出斯涅尔定律与菲涅尔公式。
- **色散与损耗**：复介电常数 $\varepsilon=\varepsilon'+i\varepsilon''$ 刻画色散（实部）与吸收（虚部）。
- **铁电 / 铁磁**：$\vec P,\vec M$ 与 $\vec E,\vec B$ 非线性、有滞回，对应 [[condensed-matter-physics]] 的有序相。

## 深化内容

介质的微观响应由**克拉默斯-克朗尼希关系**（因果性约束实部虚部）联系；**色散理论**（洛伦兹振子模型）给出 $\varepsilon(\omega)$ 的频率依赖，是 [[optics]] 折射色散与 [[condensed-matter-physics]] 光吸收的基础。非线性介质给出倍频、光整流等非线性光学。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、Born & Wolf《Principles of Optics》。

## 与其他知识的联系

- 紧密相关：[[maxwell-equations]]（介质形式）、[[electromagnetic-waves]]（传播/折射/色散）。
- 应用：[[optics]]（折射率、菲涅尔公式）、[[condensed-matter-physics]]（铁电/铁磁）、光纤技术。

## 前置知识

- [[maxwell-equations]]、[[electrostatics]]、[[magnetostatics]]
