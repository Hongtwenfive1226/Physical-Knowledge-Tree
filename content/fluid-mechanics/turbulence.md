---
id: turbulence
name: 湍流
name_en: Turbulence
domain: fluid-mechanics
aliases: [湍流理论]
tags: [流体, 湍流, 非线性]
keywords: [雷诺数, 湍流级联, 柯尔莫哥洛夫标度]
updated: 2026-08-12
links:
  - {id: fluid-mechanics, weight: 5, note: 流体力学的核心难题}
  - {id: chaos-theory, weight: 4, note: 确定性混沌}
  - {id: partial-differential-equations, weight: 3}
  - {id: fluctuation-theory, weight: 2, note: 随机统计}
  - {id: probability-theory, weight: 2}
superseded_by: []
supersedes: []
---
# 湍流

## 概述

湍流是高雷诺数下流体的混沌、多尺度运动状态。能量由大涡注入并逐级传递（**能量级联**）至黏性耗散尺度，柯尔莫哥洛夫-41 理论给出能谱标度：

$$ E(k) \propto k^{-5/3} $$

湍流仍是物理学未解难题（纳维-斯托克斯方程光滑性问题属千禧年问题）。方法包括直接数值模拟、大涡模拟、雷诺平均与统计理论。

## 与其他知识的联系

- 紧密相关：[[fluid-mechanics]]（方程）、[[chaos-theory]]（动力学本质）。
- 数学：[[partial-differential-equations]]、[[probability-theory]]、[[fluctuation-theory]]（统计）。
