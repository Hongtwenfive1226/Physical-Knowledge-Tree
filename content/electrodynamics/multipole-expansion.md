---
id: multipole-expansion
name: 多极展开
name_en: Multipole Expansion
domain: electrodynamics
aliases: [多极矩]
tags: [电磁学, 展开, 远场]
keywords: [单极, 偶极, 四极, 勒让德, 球谐函数]
updated: 2026-08-13
links:
  - {id: electrostatics, weight: 4, note: 静电势的多极展开}
  - {id: spherical-harmonics, weight: 5, note: 球谐函数作为展开基}
  - {id: electromagnetic-radiation, weight: 4, note: 辐射多极}
  - {id: special-functions, weight: 4}
  - {id: quantum-mechanics, weight: 3, note: 电磁跃迁的多极选择定则}
superseded_by: []
supersedes: []
---
# 多极展开

## 概述

多极展开把远处电荷/电流分布的场按**多极矩**逐级展开：单极（总电荷）、偶极（$\vec p$）、四极（$Q_{ij}$）…… 当观测距离远大于源尺寸时，级数迅速收敛，前几项即给出场的良好近似。多极展开是静电势远场、辐射问题（偶极/四极辐射）与量子跃迁选择定则的统一数学框架，也是"一个复杂分布的场在远处看像什么"的系统回答。

## 基本概念

- **单极矩**：总电荷 $Q=\int\rho\,d\tau$。
- **电偶极矩**：$\vec p=\int\vec r'\rho\,d\tau'$。
- **电四极矩**：$Q_{ij}=\int(3r'_ir'_j-r'^2\delta_{ij})\rho\,d\tau'$。
- **磁偶极矩**：$\vec m=\frac12\int\vec r'\times\vec J\,d\tau'$。
- **展开参数**：$r'/r\ll1$（源远小于距离）。

## 核心内容

### 基本定律 / 方程

静电势的多极展开：

$$ \phi(\vec r)=\frac1{4\pi\varepsilon_0}\Big[\frac{Q}{r}+\frac{\vec p\cdot\hat r}{r^2}+\frac1{2r^3}\sum_{ij}Q_{ij}\hat r_i\hat r_j+\cdots\Big] $$

球谐函数展开（系统形式）：

$$ \frac1{|\vec r-\vec r'|}=\sum_{l=0}^{\infty}\sum_{m=-l}^{l}\frac{4\pi}{2l+1}\frac{r_<^l}{r_>^{l+1}}Y_{lm}(\hat r)Y_{lm}^*(\hat r') $$

### 推导要点

- **泰勒展开法**：把 $1/|\vec r-\vec r'|$ 对 $\vec r'$ 在原点展开，逐阶整理系数即得多极矩。
- **勒让德展开**：$1/|\vec r-\vec r'|=\sum_l\frac{r_<^l}{r_>^{l+1}}P_l(\cos\gamma)$，再由加法公式展开为球谐函数。
- **辐射多极**：对推迟势做同样的远场展开，$l$ 阶多极辐射功率按 $(\omega a/c)^{2l}$ 标度。

### 重要定理与推论

- **偶极项主导**：中性系统（$Q=0$）远场由偶极主导。
- **唯一性**：给定多极矩，远场唯一确定。
- **辐射选择定则**：量子跃迁的电偶极（E1）、磁偶极（M1）、电四极（E2）对应不同角动量/宇称选择定则（[[quantum-mechanics]]）。
- **坐标系无关性**：最低阶非零多极矩与原点选择无关。

## 深化内容

多极展开用于**分子/原子**（范德瓦尔斯力、分子光谱）、**核物理**（核四极矩反映核形变）、**引力波**（质量四极矩辐射）与**天线阵列**。辐射多极的角分布由球谐函数决定，功率逐阶递减。延伸阅读可参考 Griffiths《电动力学导论》、Jackson《Classical Electrodynamics》、朗道《场论》。

## 与其他知识的联系

- 紧密相关：[[spherical-harmonics]]（基函数）、[[electrostatics]]/[[electromagnetic-radiation]]（应用）、[[special-functions]]。
- 量子：[[quantum-mechanics]] 中跃迁概率的多极展开决定选择定则。

## 前置知识

- [[spherical-harmonics]]、[[special-functions]]、[[electrostatics]]
