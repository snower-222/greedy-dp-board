// 可交互刷题看板：贪心 vs 动态规划
// 使用 React + Tailwind CSS 构建

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const problems = [
  { id: 121, name: "买卖一次", type: "股票交易", greedy: true, level: "⭐️⭐️" },
  { id: 122, name: "买卖无限次", type: "股票交易", greedy: true, level: "⭐️⭐️" },
  { id: 123, name: "最多两次", type: "股票交易", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 188, name: "最多 k 次", type: "股票交易", greedy: false, level: "⭐️⭐️⭐️⭐️" },
  { id: 309, name: "含冷冻期", type: "股票交易", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 714, name: "含手续费", type: "股票交易", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 53,  name: "最大子数组和", type: "数组", greedy: true, level: "⭐️⭐️" },
  { id: 55,  name: "跳跃游戏 I", type: "数组", greedy: true, level: "⭐️⭐️" },
  { id: 45,  name: "跳跃游戏 II", type: "数组", greedy: true, level: "⭐️⭐️⭐️" },
  { id: 134, name: "加油站", type: "数组", greedy: true, level: "⭐️⭐️⭐️" },
  { id: 763, name: "划分字母区间", type: "序列划分", greedy: true, level: "⭐️⭐️" },
  { id: 435, name: "无重叠区间", type: "区间调度", greedy: true, level: "⭐️⭐️⭐️" },
  { id: 322, name: "最少硬币数", type: "零钱问题", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 518, name: "零钱组合数", type: "零钱问题", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 300, name: "最长上升子序列", type: "LIS", greedy: false, level: "⭐️⭐️⭐️" },
  { id: 354, name: "俄罗斯套娃信封", type: "LIS 类变形", greedy: "部分", level: "⭐️⭐️⭐️" },
  { id: 452, name: "引爆气球", type: "区间类", greedy: true, level: "⭐️⭐️⭐️" }
];

export default function ProblemBoard() {
  const [done, setDone] = useState(new Set());
  const [filter, setFilter] = useState("");

  const toggle = (id) => {
    const newSet = new Set(done);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setDone(newSet);
  };

  const filtered = problems.filter(p =>
    p.name.includes(filter) || p.type.includes(filter) || String(p.id).includes(filter)
  );

  return (
    <div className="p-4 space-y-4">
      <Input placeholder="搜索题号或关键词..." value={filter} onChange={e => setFilter(e.target.value)} />
      <ScrollArea className="h-[70vh] pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <Card key={p.id} className="flex items-center gap-2 p-3">
              <Checkbox checked={done.has(p.id)} onCheckedChange={() => toggle(p.id)} />
              <CardContent className="flex flex-col">
                <div className="font-bold">#{p.id} {p.name}</div>
                <div className="text-sm text-muted-foreground">类型：{p.type}</div>
                <div className="text-sm">贪心可行：{p.greedy === true ? "✅" : (p.greedy === false ? "❌" : "⚠️ 部分")}</div>
                <div className="text-sm">推荐等级：{p.level}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div className="text-right text-sm text-muted-foreground">
        已完成：{done.size} / {problems.length}
      </div>
    </div>
  );
}
