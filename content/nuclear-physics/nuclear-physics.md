---
id: nuclear-physics
name: 核物理
name_en: Nuclear Physics
domain: nuclear-physics
aliases: [原子核物理]
tags: [核物理, 原子核, 强相互作用]
keywords: [原子核, 核力, 质量亏损, 结合能]
updated: 2026-08-13
links:
  - {id: nuclear-structure, weight: 5, note: 原子核的结构}
  - {id: nuclear-decay, weight: 5, note: 放射性衰变}
  - {id: nuclear-reactions, weight: 5, note: 核反应}
  - {id: nuclear-models, weight: 4, note: 核模型}
  - {id: nuclear-fission, weight: 4, note: 核裂变}
  - {id: nuclear-fusion, weight: 4, note: 核聚变}
  - {id: quantum-mechanics, weight: 5, note: 微观理论基础}
  - {id: standard-model, weight: 3, note: 强相互作用(QCD)是核力的基本描述}
  - {id: elementary-particles, weight: 3, note: 核子由夸克组成}
  - {id: scattering-theory, weight: 3, note: 核散射实验方法}
  - {id: cosmology, weight: 2, note: 原初核合成}
superseded_by: []
supersedes: []
pos: {x: 15, y: 55, z: 0}
---
# 核物理

## 概述

核物理研究**原子核**的结构、性质与相互作用。原子核由 $Z$ 个质子与 $N$ 个中子（统称核子）组成，质量数 $A=Z+N$。核子由**强相互作用**（核力，其基本描述是 QCD）束缚，核的**结合能**来自质量亏损。核物理连接三个尺度：量子多体问题（核子尺度）、夸克-胶子（QCD 尺度）、以及天体（恒星核合成、中子星）。应用包括核能（裂变/聚变）、核医学（放射治疗、PET）、放射性测年与核天体物理。

## 基本概念

- **核子 / 质量数**：质子、中子；$A=Z+N$。
- **结合能**：$B=(Zm_p+Nm_n-M_{\mathrm{核}})c^2$。
- **质量亏损**：结合能对应的质量减少。
- **同位素 / 同量异位素**：同 $Z$ 不同 $N$ / 同 $A$ 不同 $Z,N$。
- **核半径**：$R=r_0A^{1/3}$，$r_0\approx1.2$ fm。

## 核心内容

### 基本定律 / 方程

结合能与半经验质量公式（魏茨泽克/贝特）：

$$ B=a_VA-a_SA^{2/3}-a_C\frac{Z(Z-1)}{A^{1/3}}-a_A\frac{(N-Z)^2}{A}+\delta(A,Z) $$

各物理项：体积项（饱和性）、表面项、库仑项、对称能项、配对项。

### 推导要点

- **液滴模型**：把核视为带电液滴，逐项估计结合能（体积、表面、库仑、对称、配对）。
- **质量亏损**：$E=mc^2$，结合能由核子质量之和与核质量之差给出。
- **核力性质**：短程（$\sim1$ fm）、饱和性、与电荷无关（近似）。

### 重要定理与推论

- **结合能曲线**：$B/A\sim8$ MeV，$^{56}$Fe 附近最稳定。
- **稳定岛**：中子/质子比对稳定核的约束。
- **核力饱和性**：每个核子只与邻近核子作用（结合能 $\propto A$）。
- **对称能**：$N=Z$ 最稳定（轻核），重核需 $N>Z$。

## 深化内容

核物理连接 [[quantum-mechanics]]（多体）、[[standard-model]]（QCD 核力）、[[elementary-particles]]（夸克结构）、[[scattering-theory]]（核散射实验）。核天体物理（[[cosmology]] 的原初核合成、[[supernovae]] 的重元素合成）是重要交叉。延伸阅读可参考 Krane《Introductory Nuclear Physics》、Wong《Introductory Nuclear Physics》、Bohr & Mottelson《Nuclear Structure》。

## 与其他知识的联系

- 紧密相关：[[nuclear-structure]]、[[nuclear-decay]]、[[nuclear-reactions]]、[[quantum-mechanics]]。
- 基础理论：核力是 [[standard-model]] 中强相互作用的低能体现，核子由夸克组成（[[elementary-particles]]）。
- 实验方法：[[scattering-theory]]；应用：[[nuclear-fission]]/[[nuclear-fusion]]（能源）、[[cosmology]]（原初核合成）。

## 前置知识

- [[quantum-mechanics]]、[[scattering-theory]]、[[standard-model]]
