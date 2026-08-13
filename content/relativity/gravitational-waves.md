---
id: gravitational-waves
name: 引力波
name_en: Gravitational Waves
domain: relativity
aliases: [引力辐射]
tags: [相对论, 引力, 波动]
keywords: [横波, 极化, 引力波探测器, 四极辐射]
updated: 2026-08-13
links:
  - {id: einstein-field-equations, weight: 5, note: 弱场线性化解}
  - {id: general-relativity, weight: 5, note: 预言来源}
  - {id: black-holes, weight: 4, note: 并合事件}
  - {id: wave-mechanics, weight: 2, note: 波动一般理论}
  - {id: cosmology, weight: 2, note: 原初引力波}
superseded_by: []
supersedes: []
---
# 引力波

## 概述

引力波是**时空曲率的涟漪**，由加速的质量系统产生，以光速传播。在弱场线性化近似下，度规 $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$，微扰 $h_{\mu\nu}$ 在横向无迹（TT）规范下满足波动方程，是**横波**、有两种极化（$+$ 与 $\times$）。引力波的最低阶辐射是**四极辐射**（单极/偶极被守恒律禁戒）。2015 年 LIGO 首次直接探测双黑洞并合（GW150914），开启引力波天文学。

## 基本概念

- **微扰** $h_{\mu\nu}$：度规对平直背景的偏离。
- **横向无迹（TT）规范**：$\partial_\mu h^{\mu\nu}=0$、$h=0$、$h_{0\nu}=0$。
- **极化**：$+$ 与 $\times$ 两种模式。
- **四极公式**：引力波由质量四极矩的时间二阶导产生。

## 核心内容

### 基本定律 / 方程

线性化波动方程（TT 规范）：

$$ \Box\bar h_{\mu\nu}=0,\qquad \bar h_{\mu\nu}=h_{\mu\nu}-\frac12\eta_{\mu\nu}h $$

**四极辐射公式**（辐射功率）：

$$ P=\frac{G}{5c^5}\langle\dddot{Q}_{ij}\dddot{Q}_{ij}\rangle $$

其中 $Q_{ij}=\int\rho(3x_ix_j-r^2\delta_{ij})d^3x$ 为质量四极矩。

### 推导要点

- **线性化**：把 $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ 代入场方程，保留 $h$ 一阶，选择洛伦兹规范 $\partial_\mu\bar h^{\mu\nu}=0$ 得波动方程。
- **TT 规范**：利用剩余规范自由度消去 $h$ 的迹与 $0$ 分量，留下两个物理自由度（$+$、$\times$ 极化）。
- **四极公式**：由推迟解远场展开，最低阶非零项是四极矩（质量单极守恒、偶极为质心运动）。

### 重要定理与推论

- **横波、两极化**：引力波以 $+$、$\times$ 两种极化传播。
- **四极主导**：引力辐射最低阶是四极（无偶极辐射）。
- **引力波携带能量角动量**：双星系统因辐射引力波而旋近（脉冲双星 PSR 1913+16 的验证）。
- **引力波天文学**：并合事件（[[black-holes]]）、超新星、原初引力波（[[cosmology]]）。

## 深化内容

引力波探测（LIGO、Virgo、KAGRA、未来的 LISA）验证了广义相对论并开辟**多信使天文学**（引力波 + 电磁 + 中微子）。引力波的偏振、速度、波形检验修改引力理论。原初引力波可能携带暴胀的信息。延伸阅读可参考 Schutz《A First Course in General Relativity》、Maggiore《Gravitational Waves》、Carroll《Spacetime and Geometry》。

## 与其他知识的联系

- 紧密相关：[[einstein-field-equations]]（线性化解）、[[general-relativity]]、[[black-holes]]（并合源）。
- 源：双星并合、超新星、[[cosmology]]（原初引力波）。

## 前置知识

- [[einstein-field-equations]]、[[general-relativity]]、[[wave-mechanics]]
