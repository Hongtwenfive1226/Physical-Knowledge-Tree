# 中文物理知识树 · Physics Knowledge Tree

一个面向**物理专业学生**的可交互中文物理/数学知识图谱：以"四大力学"（经典力学、电动力学、量子力学、统计物理与热力学）为主干，覆盖 **22 个领域、164 个知识点节点**，每个节点都包含教材级的正文（概述 / 基本概念 / 核心内容·定律·推导·定理 / 深化内容 / 教材参考）。

网站是**纯静态、完全离线可用**的 3D 交互应用：克隆仓库后双击 `site/index.html` 即可使用，无需服务器、无需构建。

![static](https://img.shields.io/badge/static-纯静态%20离线-green)
![license](https://img.shields.io/badge/license-GPL--3.0-blue)
![nodes](https://img.shields.io/badge/nodes-164-blue)
![build](https://img.shields.io/badge/build-0%20warnings-green)

> 🌐 在线预览（若已启用 GitHub Pages）：`https://<用户名>.github.io/<仓库名>/`
>
> 部署方式见下文"GitHub Pages"。

---

## ✨ 特性

- **3D 力导向图**：节点间距反映关系紧密程度（weight 越大越近）；同领域节点自动聚成半透明彩色云团（允许重叠）；**单击**高亮相连节点与路径，**双击**进入节点；标签默认显示、字号可调。
- **2D 局部平面视图**：双击进入节点后以其为中心 2D 展示；间距可调、节点可自由拖动（释放后固定）、"重置布局"复位。
- **节点详情**：Markdown + **KaTeX 公式**渲染；"上位替代"横幅（如 牛顿力学 → 狭义相对论 / 量子力学）；相关知识按紧密程度排序，一键跳转。
- **搜索**：按名称 / 英文名 / 别名 / 标签 / 关键词模糊检索。
- **树状学习图**：左侧缩进树记录访问路径；按相关度自动挂载、支持拖拽整理；可命名保存、森林载入（`localStorage` 长期保存）。
- **挑战模式**：以 2D 图可视化"已搭建框架"——把随机出现的子节点（仅显示名称）挂到正确的父节点；挂对自动补全连线；宽松/严格判定可选、答错逐级提示、支持搜索连接与数字键快捷选择、全程计时。
- **领域体系**：22 个领域、22 种配色、可逐域显隐。

## 🚀 快速开始

1. **本地使用**：双击打开 `site/index.html`（离线可用）。
2. **操作**：3D 图滚轮缩放、拖拽旋转；单击高亮、双击进入节点；顶部搜索框检索；顶栏切换"学习树 / 挑战模式 / 领域图例"。
3. **重新构建**（改过 `content/` 后）：

   ```bash
   python build.py          # 需要 Python3 + PyYAML，要求 0 警告
   ```

## 📁 目录结构

```
physics-knowledge-tree/
├── site/                     # 可视化网站（静态，可直接部署/打开 index.html）
│   ├── index.html
│   ├── css/style.css
│   ├── js/                   # 应用代码 + 本地化 vendor（three / force-graph / marked / katex）
│   └── data/graph.js         # 由 build.py 生成（已提交，勿手改）
├── content/                  # 知识树源文件（唯一数据源）
│   ├── _meta.yaml            # 领域定义、颜色、云图与可视化参数
│   └── <domain>/*.md         # 每知识点一个文件（YAML front-matter + KaTeX 正文）
├── build.py                  # 构建脚本：解析 / 校验 / 生成 graph.js
├── logs/                     # 每次编辑的日志
├── skills/physics-knowledge-tree/SKILL.md   # 指导 AI 编辑知识树的规范
├── AGENTS.md                 # AI 协作约定
├── CONTRIBUTING.md           # 贡献指南
└── LICENSE                   # GPL-3.0
```

## 🧰 技术栈

- **可视化**：three.js(r160) + 3d-force-graph + force-graph(2D)——全部本地化，离线可用。
- **公式**：KaTeX（含全部字体，本地化）。
- **数据管线**：Python 3 + PyYAML（`build.py` 解析 `content/` → `site/data/graph.js`）。

## ✏️ 编辑知识树

- 完整编辑规范见 [`skills/physics-knowledge-tree/SKILL.md`](skills/physics-knowledge-tree/SKILL.md)（节点模板、weight 语义、上位替代成对、内容扩充标准）。
- 每个知识点是一个 Markdown 文件：YAML front-matter 存元数据（`id/name/domain/links/superseded_by/…`），正文用 KaTeX 公式。
- 每次编辑后：运行 `python build.py`（**0 警告**）+ 在 `logs/YYYY-MM-DD.md` 追加日志。
- 详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 🤖 CI / GitHub Actions

- **Build Check**（`.github/workflows/build.yml`）：每次 Push / PR 自动运行 `python build.py`，存在警告即失败，保证内容质量。
- **Pages 部署**（`.github/workflows/pages.yml`）：推送到 `main` 后自动重新生成 `site/data/graph.js` 并把 `site/` 部署为 GitHub Pages。

### GitHub Pages 启用步骤

1. 把仓库推送到 GitHub。
2. 进入仓库 **Settings → Pages**，在"Build and deployment"中把 **Source 选为 "GitHub Actions"**。
3. 推送到 `main` 后，Pages 工作流会自动部署；在线地址为 `https://<用户名>.github.io/<仓库名>/`。

## 📊 当前规模

- **节点 164** · 连接 721（可视 674 / 软连接 47）· 上位替代边 19 · 领域 22
- 领域：数学基础、数学物理方法、经典力学、电动力学、量子力学、统计物理与热力学、相对论、量子场论、粒子物理、凝聚态物理、量子信息、光学、流体与声学、核物理、等离子体物理、天体物理、原子分子光学、软物质物理、生物物理、地球与大气物理、量子引力、天体与宇宙学

（以 `python build.py` 最新输出为准）

## 📄 许可证

[GPL-3.0](LICENSE) © 2026 Physics Knowledge Tree contributors
