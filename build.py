#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文物理知识树 —— 构建脚本
职责：
  1. 扫描 content/**/*.md，解析 YAML front-matter 与 markdown 正文
  2. 校验：id 唯一性、链接目标存在性、领域定义、weight 越界、[[wiki]] 引用等
  3. 计算节点体积、连接可视化剪枝（max_visual_degree）、上位替代关系
  4. 生成 site/data/graph.js（浏览器直接可用的图数据 + 搜索索引）
用法：
  python build.py            # 正常构建
  python build.py --quiet    # 仅输出错误与警告
"""

import datetime
import glob
import json
import os
import re
import sys

try:
    import yaml
except ImportError:
    print("[错误] 需要 PyYAML：pip install pyyaml")
    sys.exit(1)

ROOT = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(ROOT, "content")
OUT_DIR = os.path.join(ROOT, "site", "data")
OUT_FILE = os.path.join(OUT_DIR, "graph.js")
LOGS_DIR = os.path.join(ROOT, "logs")
BUILD_LOG = os.path.join(LOGS_DIR, "build.log")

WIKI_RE = re.compile(r"\[\[([a-z0-9][a-z0-9-]*)(?:\|([^\]\n]+))?\]\]")


def wiki_ids(text):
    """提取 [[id]] / [[id|别名]] 中的 id"""
    return [m[0] for m in WIKI_RE.findall(text)]


warnings = []
errors = []


def warn(msg):
    warnings.append(msg)


def err(msg):
    errors.append(msg)


# ---------------------------------------------------------------- 元数据
def load_meta():
    meta_path = os.path.join(CONTENT_DIR, "_meta.yaml")
    with open(meta_path, "r", encoding="utf-8") as f:
        meta = yaml.safe_load(f) or {}
    domains = meta.get("domains", {})
    # 规范化领域表
    normalized = {}
    for did, d in domains.items():
        d = d or {}
        normalized[did] = {
            "name": d.get("name", did),
            "color": d.get("color", "#888888"),
            "cloud_alpha": float(d.get("cloud_alpha", 0.08)),
            "cloud_r": float(d.get("cloud_r", 1.0)),
        }
    meta["domains"] = normalized
    return meta


# ---------------------------------------------------------------- 节点解析
def parse_md_file(path):
    """返回 (frontmatter, body) 或抛异常"""
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---"):
        raise ValueError("缺少 YAML front-matter 分隔符 '---'")
    parts = text.split("---", 2)
    if len(parts) < 3:
        raise ValueError("YAML front-matter 未正确闭合（需要两组 '---'）")
    fm_text, body = parts[1], parts[2]
    fm = yaml.safe_load(fm_text) or {}
    return fm, body


def collect_node_files():
    files = []
    for p in glob.glob(os.path.join(CONTENT_DIR, "**", "*.md"), recursive=True):
        rel = os.path.relpath(p, CONTENT_DIR)
        if os.path.basename(p).startswith("_"):
            continue
        files.append((rel, p))
    return files


# ---------------------------------------------------------------- 主流程
def main():
    quiet = "--quiet" in sys.argv
    meta = load_meta()
    domains = meta["domains"]
    max_visual_degree = int(meta.get("max_visual_degree", 8))

    nodes_by_id = {}  # id -> node dict (raw)
    file_of = {}  # id -> rel path
    order = []  # 保持文件顺序

    for rel, path in collect_node_files():
        try:
            fm, body = parse_md_file(path)
        except ValueError as e:
            err(f"[{rel}] 解析失败：{e}")
            continue

        nid = str(fm.get("id", "")).strip()
        name = str(fm.get("name", "")).strip()
        if not nid:
            err(f"[{rel}] 缺少必需的 id")
            continue
        if not name:
            warn(f"[{rel}] 缺少 name，使用 id='{nid}'")
            name = nid

        if nid in nodes_by_id:
            err(f"[{rel}] 重复 id '{nid}'（另一个在 {file_of[nid]}）")
            continue

        domain = str(fm.get("domain", "")).strip() or "unassigned"
        if domain not in domains:
            warn(f"[{rel}] 领域 '{domain}' 未在 _meta.yaml 中定义，将使用默认灰色")
            domains.setdefault(
                domain,
                {
                    "name": domain,
                    "color": "#888888",
                    "cloud_alpha": 0.08,
                    "cloud_r": 1.0,
                },
            )

        # 规范化 links
        links = []
        for lk in fm.get("links", []) or []:
            if not isinstance(lk, dict):
                warn(f"[{rel}] links 条目应为字典，跳过：{lk}")
                continue
            lid = str(lk.get("id", "")).strip()
            if not lid:
                warn(f"[{rel}] links 中存在缺少 id 的条目，跳过")
                continue
            try:
                w = int(lk.get("weight", 3))
            except (TypeError, ValueError):
                w = 3
            if not (1 <= w <= 5):
                warn(f"[{rel}] -> {lid} weight={w} 越界(1~5)，已截断")
                w = max(1, min(5, w))
            links.append(
                {
                    "id": lid,
                    "weight": w,
                    "note": str(lk.get("note", "")).strip(),
                }
            )

        # 规范化 superseded_by / supersedes
        def norm_ids(field):
            vals = fm.get(field, []) or []
            if isinstance(vals, str):
                vals = [vals]
            return [str(v).strip() for v in vals if str(v).strip()]

        superseded_by = norm_ids("superseded_by")
        supersedes = norm_ids("supersedes")

        aliases = [
            str(a).strip() for a in (fm.get("aliases", []) or []) if str(a).strip()
        ]
        tags = [str(t).strip() for t in (fm.get("tags", []) or []) if str(t).strip()]
        keywords = [
            str(k).strip() for k in (fm.get("keywords", []) or []) if str(k).strip()
        ]

        pos = fm.get("pos")
        fixed = bool(fm.get("fixed", False))
        size = fm.get("size")

        node = {
            "id": nid,
            "name": name,
            "name_en": str(fm.get("name_en", "")).strip(),
            "domain": domain,
            "aliases": aliases,
            "tags": tags,
            "keywords": keywords,
            "updated": str(fm.get("updated", "")).strip(),
            "pos": pos,
            "fixed": fixed,
            "size_override": size,
            "links": links,
            "superseded_by": superseded_by,
            "supersedes": supersedes,
            "body": body.strip(),
            "wiki_refs": wiki_ids(body),
            "file": rel,
        }
        nodes_by_id[nid] = node
        file_of[nid] = rel
        order.append(nid)

    if errors:
        print("=" * 60)
        print("构建中止：存在无法修复的错误")
        for e in errors:
            print("  [错误]", e)
        sys.exit(1)

    # ---- 校验 wiki 引用与 superseded 目标 ----
    for nid in order:
        node = nodes_by_id[nid]
        for ref in node["wiki_refs"]:
            if ref not in nodes_by_id:
                warn(f"[{node['file']}] [[{ref}]] 引用了不存在的节点")
        for tid in node["superseded_by"] + node["supersedes"]:
            if tid not in nodes_by_id:
                warn(f"[{node['file']}] 上位/下位关系指向不存在的节点 '{tid}'")

    # ---- 构建无向边 ----
    edges = {}  # (a,b) sorted -> dict
    for nid in order:
        node = nodes_by_id[nid]
        for lk in node["links"]:
            tid = lk["id"]
            if tid not in nodes_by_id:
                warn(f"[{node['file']}] link 指向不存在的节点 '{tid}'，已忽略")
                continue
            if tid == nid:
                warn(f"[{node['file']}] link 指向自身 '{nid}'，已忽略")
                continue
            key = tuple(sorted((nid, tid)))
            e = edges.setdefault(key, {"weight": 0, "notes": {}, "supersede": False})
            if lk["weight"] > e["weight"]:
                e["weight"] = lk["weight"]
            if lk["note"]:
                e["notes"].setdefault(tid if tid == nid else nid, lk["note"])

    # 上位替代边（新→旧 与 旧→新 双向写入，以旧→新为准）
    supersede_edges = {}
    for nid in order:
        node = nodes_by_id[nid]
        for tid in node["superseded_by"]:
            if tid not in nodes_by_id:
                continue
            key = tuple(sorted((nid, tid)))
            supersede_edges[key] = (nid, tid)  # source=被替代者, target=上位版本
        for tid in node["supersedes"]:
            if tid not in nodes_by_id:
                continue
            key = tuple(sorted((nid, tid)))
            supersede_edges[key] = (tid, nid)

    # 普通边若同时是 supersede 边，标记为 supersede
    for key in supersede_edges:
        if key in edges:
            edges[key]["supersede"] = True

    # ---- 可视化剪枝（度数管理）----
    # 每个节点：按 weight 排序其邻居，取 top-N 作为该节点的"可视邻域"
    visual_sets = {nid: set() for nid in order}
    for nid in order:
        node = nodes_by_id[nid]
        neighbors = []
        for (a, b), e in edges.items():
            if a == nid:
                neighbors.append((b, e["weight"]))
            elif b == nid:
                neighbors.append((a, e["weight"]))
        neighbors.sort(key=lambda t: -t[1])
        for tid, _ in neighbors[:max_visual_degree]:
            visual_sets[nid].add(tid)

    edge_visual = {}
    for (a, b), e in edges.items():
        visual = (a in visual_sets[b]) or (b in visual_sets[a])
        edge_visual[(a, b)] = visual

    # ---- 节点体积（重要度）----
    # 依据：连接数 + 被引用数 + 作为上位版本被引用数
    ref_count = {nid: 0 for nid in order}
    superseded_to_count = {nid: 0 for nid in order}
    for (a, b), e in edges.items():
        if not e["supersede"]:
            ref_count[a] += 1
            ref_count[b] += 1
    for old, new in supersede_edges.values():
        superseded_to_count[new] += 1

    # ---- 组装输出 ----
    out_nodes = []
    for nid in order:
        node = nodes_by_id[nid]
        domain = domains[node["domain"]]

        # 邻居列表（可视 + 软连接），全部排序
        neigh = []
        for (a, b), e in edges.items():
            other = b if a == nid else (a if b == nid else None)
            if other is None:
                continue
            neigh.append(
                {
                    "id": other,
                    "weight": e["weight"],
                    "supersede": e["supersede"],
                    "note": e["notes"].get(nid, e["notes"].get(other, "")),
                    "visual": edge_visual[(a, b)],
                }
            )
        neigh.sort(key=lambda t: (-t["weight"], t["id"]))

        links_out = [x for x in neigh if x["visual"] and not x["supersede"]]
        soft_out = [x for x in neigh if not x["visual"] and not x["supersede"]]
        supersede_out = [x for x in neigh if x["supersede"]]

        degree = len(neigh)
        if node["size_override"] is not None:
            size = float(node["size_override"])
        else:
            size = round(
                18 + 6 * degree + 4 * ref_count[nid] + 10 * superseded_to_count[nid], 1
            )

        out_nodes.append(
            {
                "id": nid,
                "name": node["name"],
                "nameEn": node["name_en"],
                "domain": node["domain"],
                "domainName": domain["name"],
                "color": domain["color"],
                "aliases": node["aliases"],
                "tags": node["tags"],
                "keywords": node["keywords"],
                "size": size,
                "degree": degree,
                "pos": node["pos"],
                "fixed": node["fixed"],
                "body": node["body"],
                "supersededBy": [
                    {"id": t, "name": nodes_by_id[t]["name"]}
                    for t in node["superseded_by"]
                    if t in nodes_by_id
                ],
                "supersedes": [
                    {"id": t, "name": nodes_by_id[t]["name"]}
                    for t in node["supersedes"]
                    if t in nodes_by_id
                ],
                "links": [
                    {
                        "id": x["id"],
                        "name": nodes_by_id[x["id"]]["name"],
                        "weight": x["weight"],
                        "note": x["note"],
                    }
                    for x in links_out
                ],
                "softLinks": [
                    {
                        "id": x["id"],
                        "name": nodes_by_id[x["id"]]["name"],
                        "weight": x["weight"],
                        "note": x["note"],
                    }
                    for x in soft_out
                ],
                "supersedeLinks": [
                    {
                        "id": x["id"],
                        "name": nodes_by_id[x["id"]]["name"],
                        "weight": x["weight"],
                        "note": x["note"],
                    }
                    for x in supersede_out
                ],
            }
        )

    out_links = []
    for (a, b), e in edges.items():
        # 普通边：无向；supersede 边：有向（source=被替代, target=上位）
        if e["supersede"]:
            src, tgt = supersede_edges[(a, b)]
        else:
            src, tgt = a, b
        out_links.append(
            {
                "source": src,
                "target": tgt,
                "weight": e["weight"],
                "supersede": e["supersede"],
                "soft": not edge_visual[(a, b)],
                "notes": list(e["notes"].values()),
            }
        )

    search_entries = [
        {
            "id": n["id"],
            "name": n["name"],
            "nameEn": n["nameEn"],
            "aliases": n["aliases"],
            "tags": n["tags"],
            "keywords": n["keywords"],
            "domainName": n["domainName"],
        }
        for n in out_nodes
    ]

    graph = {
        "meta": {
            "site": meta.get("site", {}),
            "domains": {
                k: {
                    "name": v["name"],
                    "color": v["color"],
                    "cloud_alpha": v["cloud_alpha"],
                    "cloud_r": v["cloud_r"],
                }
                for k, v in domains.items()
            },
            "max_visual_degree": max_visual_degree,
            "link_weight_semantics": meta.get("link_weight_semantics", {}),
        },
        "nodes": out_nodes,
        "links": out_links,
        "search": search_entries,
    }

    os.makedirs(OUT_DIR, exist_ok=True)
    payload = json.dumps(graph, ensure_ascii=False, indent=1)
    with open(OUT_FILE, "w", encoding="utf-8") as f:
        f.write(
            "/* 由 build.py 自动生成，请勿手动修改。修改 content/ 后重新运行 python build.py */\n"
        )
        f.write("window.PHYSICS_GRAPH = ")
        f.write(payload)
        f.write(";\n")

    # ---- 输出统计与警告 ----
    n_visual = sum(1 for l in out_links if not l["soft"])
    n_soft = sum(1 for l in out_links if l["soft"])
    n_sup = sum(1 for l in out_links if l["supersede"])

    lines = []
    lines.append("=" * 60)
    lines.append(f"构建完成  {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append(f"  节点数      : {len(out_nodes)}")
    lines.append(
        f"  边数(普通)  : {n_visual + n_soft}（可视 {n_visual} / 软连接 {n_soft}）"
    )
    lines.append(f"  上位替代边  : {n_sup}")
    lines.append(f"  输出文件    : {os.path.relpath(OUT_FILE, ROOT)}")
    if warnings:
        lines.append(f"  警告数      : {len(warnings)}")
        for w in warnings:
            lines.append(f"    [警告] {w}")
    else:
        lines.append("  无警告")
    lines.append("=" * 60)
    report = "\n".join(lines)
    print(report)

    os.makedirs(LOGS_DIR, exist_ok=True)
    with open(BUILD_LOG, "a", encoding="utf-8") as f:
        f.write(report + "\n")

    if not quiet:
        # 领域分布
        dist = {}
        for n in out_nodes:
            dist[n["domainName"]] = dist.get(n["domainName"], 0) + 1
        print("\n领域分布：")
        for k, v in sorted(dist.items(), key=lambda t: -t[1]):
            print(f"  {k:<18} {v:>4}")


if __name__ == "__main__":
    main()
