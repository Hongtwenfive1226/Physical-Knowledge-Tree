# 贡献指南（Contributing）

欢迎为「中文物理知识树」贡献内容或代码。请先阅读：

- **[`skills/physics-knowledge-tree/SKILL.md`](skills/physics-knowledge-tree/SKILL.md)** —— 节点/内容的完整编辑规范（必读）
- **[`AGENTS.md`](AGENTS.md)** —— 本仓库的 AI/协作约定

## 贡献知识内容

知识树的数据源是 `content/**/*.md`（每个知识点一个 Markdown 文件，YAML front-matter 记录元数据，正文用 KaTeX 公式）。

1. **先搜索**，避免重复节点：用名称/别名在 `content/` 中检索。
2. 按 [SKILL.md](skills/physics-knowledge-tree/SKILL.md) 的模板新建或修改节点。
3. 本地校验：

   ```bash
   python build.py        # 要求 0 警告
   ```

4. 在 `logs/YYYY-MM-DD.md` 追加当日编辑日志（新增/修改节点、连接、说明）。
5. 打开 `site/index.html` 预览效果。

> CI 会在每次 Push/PR 时自动运行 `build.py`，存在警告即失败。

## 贡献网站代码

网站位于 `site/`（纯静态、离线可用），前端使用 Three.js / 3d-force-graph / force-graph / marked / KaTeX（均已本地化到 `site/js/vendor/`）。改完请：

- 用浏览器在 `site/index.html` 自测；
- 无需构建步骤（`site/data/graph.js` 已随仓库提交；内容改动后需运行 `python build.py` 重新生成）。

## 提交信息规范

- 用简洁、描述性的提交信息，说明"为什么"而非"改了什么"。
- 示例：`feat: 新增挑战模式` / `content: 扩充数学基础节点` / `fix: 修复知识树布局`。

## 报告问题

- 内容错误/缺失 → 按上述流程直接提交修改，或开 Issue 说明节点与问题。
- 网站 Bug → 在 Issue 中描述复现步骤与浏览器环境。
