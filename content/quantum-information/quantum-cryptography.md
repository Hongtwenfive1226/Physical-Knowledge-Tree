---
id: quantum-cryptography
name: 量子密码学
name_en: Quantum Cryptography
domain: quantum-information
aliases: [量子密钥分发, QKD]
tags: [量子信息, 密码, 安全]
keywords: [BB84, 量子密钥分发, 不可克隆定理]
updated: 2026-08-13
links:
  - {id: quantum-information, weight: 5, note: 理论框架}
  - {id: entanglement, weight: 4, note: 纠缠密钥分发}
  - {id: bell-inequalities, weight: 3, note: 安全证明}
  - {id: quantum-mechanics, weight: 4, note: 不可克隆定理}
  - {id: information-theory, weight: 3}
superseded_by: []
supersedes: []
---
# 量子密码学

## 概述

量子密码学利用量子力学原理（**不可克隆定理**与**测量坍缩**）保证通信的**无条件安全**。核心是**量子密钥分发（QKD）**：BB84 协议用量子比特编码密钥，窃听必然扰动量子态而被发现；E91 协议用纠缠对分发密钥，安全性由贝尔不等式验证。QKD 已在光纤与卫星（墨子号）实现，是量子信息最早走向实用的方向之一。

## 基本概念

- **量子密钥分发（QKD）**：用量子信道分发安全密钥。
- **BB84 协议**：四态（两组正交基）编码。
- **E91 协议**：基于纠缠对的 QKD。
- **不可克隆定理**：未知量子态不可复制。
- **窃听检测**：窃听引入误码率升高。

## 核心内容

### 基本定律 / 方程

BB84 编码（两组基 $\{0/1\}$、$\{+/-$（对角）$\}$）；窃听引入误码率，检测概率：

$$ P(\text{窃听被发现})\to1\quad(\text{密钥足够长}) $$

**不可克隆定理**（安全基础）：

$$ \nexists\,U:\ U|\psi\rangle|0\rangle=|\psi\rangle|\psi\rangle\ \ \forall|\psi\rangle $$

### 推导要点

- **不可克隆定理**：由量子力学线性性证明（[[quantum-information]]）。
- **BB84 窃听检测**：窃听者不知发送方用的基，随机测量会扰动态；双方公开部分比特比对误码率，误码率异常升高即发现窃听。
- **E91 协议**：纠缠对关联违反贝尔不等式（[[bell-inequalities]]），窃听破坏纠缠被检测。

### 重要定理与推论

- **无条件安全性**：QKD 的安全性基于物理定律而非计算复杂度。
- **不可克隆定理**：量子密码安全的基石。
- **隐私放大 / 纠错**：从原始密钥提取安全密钥的标准步骤。
- **设备无关 QKD**：基于贝尔不等式、不依赖设备可信度。

## 深化内容

量子密码学是 [[quantum-information]]、[[entanglement]]、[[bell-inequalities]] 的应用；后量子密码（抗量子计算攻击的经典密码）是互补方向。QKD 的实际部署（光纤、卫星、网络）在快速发展。延伸阅读可参考 Nielsen & Chuang《量子计算与量子信息》、Bennett & Brassard 原始论文、Gisin《Quantum Cryptography》。

## 与其他知识的联系

- 紧密相关：[[quantum-information]]、[[entanglement]]、[[quantum-mechanics]]（不可克隆）。
- 安全基础：[[bell-inequalities]]、[[information-theory]]。

## 前置知识

- [[quantum-information]]、[[entanglement]]、[[bell-inequalities]]
