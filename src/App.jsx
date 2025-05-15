import React, { useState } from "react";

const problems = [
  { id: 121, name: "买卖一次", greedy: true },
  { id: 122, name: "买卖无限次", greedy: true },
  { id: 123, name: "最多两次", greedy: false },
  { id: 188, name: "最多k次", greedy: false },
  { id: 309, name: "含冷冻期", greedy: false },
  { id: 714, name: "含手续费", greedy: false },
  { id: 53, name: "最大子数组和", greedy: true },
  { id: 55, name: "跳跃游戏 I", greedy: true },
  { id: 45, name: "跳跃游戏 II", greedy: true },
  { id: 134, name: "加油站", greedy: true }
];

export default function App() {
  const [done, setDone] = useState(new Set());

  const toggle = (id) => {
    const newSet = new Set(done);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setDone(newSet);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>📘 刷题记录：贪心 vs 动态规划</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {problems.map((p) => (
          <li key={p.id} style={{ margin: "8px 0" }}>
            <label>
              <input
                type="checkbox"
                checked={done.has(p.id)}
                onChange={() => toggle(p.id)}
              />{" "}
              #{p.id} {p.name} - 贪心：{p.greedy ? "✅" : "❌"}
            </label>
          </li>
        ))}
      </ul>
      <hr />
      <p>✅ 已完成：{done.size} / {problems.length}</p>
    </div>
  );
}
