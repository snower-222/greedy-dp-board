import React, { useState } from "react";

// 刷题数据列表
const problems = [
  { id: 121, name: "买卖一次", greedy: true, level: "⭐️⭐️" },
  { id: 122, name: "买卖无限次", greedy: true, level: "⭐️⭐️" },
  { id: 123, name: "最多两次", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 188, name: "最多k次", greedy: false, level: "⭐️⭐️⭐️⭐️" },
  { id: 309, name: "含冷冻期", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 714, name: "含手续费", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 53, name: "最大子数组和", greedy: true, level: "⭐️⭐️" },
  { id: 55, name: "跳跃游戏 I", greedy: true, level: "⭐️⭐️" },
  { id: 45, name: "跳跃游戏 II", greedy: true, level: "⭐️⭐️⭐️" },
  { id: 134, name: "加油站", greedy: true, level: "⭐️⭐️⭐️" }
];

export default function App() {
  const [done, setDone] = useState(new Set());
  const [search, setSearch] = useState("");

  // 勾选/取消勾选某题
  const toggle = (id) => {
    const newSet = new Set(done);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setDone(newSet);
  };

  // 搜索过滤
  const filtered = problems.filter((p) =>
    `${p.id} ${p.name}`.includes(search)
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>📘 刷题记录面板：贪心 vs 动态规划</h1>

      <input
        type="text"
        placeholder="🔍 输入题号或关键词筛选"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          margin: "1rem 0",
          width: "100%",
          fontSize: "1rem",
          boxSizing: "border-box"
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((p) => (
          <li key={p.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "0.75rem",
            marginBottom: "0.75rem",
            backgroundColor: done.has(p.id) ? "#e8f5e9" : "#f9f9f9",
            transition: "all 0.2s"
          }}>
            <label style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={done.has(p.id)}
                onChange={() => toggle(p.id)}
              />
              <div>
                <strong>#{p.id}</strong> {p.name} — 贪心：{p.greedy ? "✅" : "❌"} ｜ 难度：{p.level}
              </div>
            </label>
          </li>
        ))}
      </ul>

      <hr />
      <p style={{ fontStyle: "italic" }}>
        ✅ 已完成：{done.size} / {problems.length}
      </p>
    </div>
  );
}
