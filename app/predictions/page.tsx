import { matches6_5 } from '@/lib/data';

const esp = matches6_5.find(m => m.id === 'esp-irq')!;

export default function PredictionsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display font-extrabold text-3xl mb-2">预测中心</h1>
        <p className="text-[15px]" style={{ color: 'var(--text-secondary)' }}>
          6 问过滤器 · 14 条补丁完全透明 · 反对过滤器论点强制输出
        </p>
      </div>

      <div className="card mb-6">
        <h2 className="font-display font-bold text-base mb-4">6 问过滤器 · 状态（6月5日 焦点战 · 西班牙 vs 伊拉克）</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            { q: 'Q1 赔率', s: 'PASS', d: '主队支持极强无撤退', c: 'emerald' },
            { q: 'Q2 弱弱', s: 'PASS', d: '主强客弱非弱弱', c: 'emerald' },
            { q: 'Q3 置信度', s: '★★★★', d: '身价60倍优势', c: 'gold' },
            { q: 'Q4 错误', s: '⚠️', d: '补丁K 友谊赛降权', c: 'amber' },
            { q: 'Q5 元认知', s: '⚠️', d: '西班牙大面积轮换', c: 'amber' },
            { q: 'Q6 真实', s: 'PASS', d: '3源赛程验证', c: 'emerald' },
          ].map((q, i) => (
            <div key={i} className="p-4 rounded-lg" style={{ background: 'var(--bg-secondary)', borderTop: `2px solid var(--accent-${q.c})` }}>
              <div className="text-[10px] uppercase tracking-wide mb-1.5" style={{ color: 'var(--text-muted)' }}>{q.q}</div>
              <div className="text-[13px] font-semibold mb-1" style={{ color: `var(--accent-${q.c})` }}>{q.s}</div>
              <div className="text-[11px] leading-snug" style={{ color: 'var(--text-muted)' }}>{q.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="font-display font-bold text-base mb-4">西班牙 vs 伊拉克 · 06-05 03:00 · ★★★★</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div>
            <div className="text-[11px] mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>基本数据</div>
            <div className="flex flex-col gap-2 text-[13px]">
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>FIFA 排名</span><span className="font-mono">2 vs 57</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>身价差距</span><span style={{ color: 'var(--accent-gold)' }}>60 倍</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>近10场战绩</span><span>7胜3平 vs 6胜2平2负</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>场均进球</span><span className="font-mono">3.1 vs 1.1</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>场均失球</span><span className="font-mono">0.8 vs 0.7</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>历史交锋</span><span>1-0（2009联合会杯）</span></div>
            </div>
          </div>
          <div>
            <div className="text-[11px] mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>14 条补丁应用</div>
            <div className="flex flex-col gap-1.5 text-[12px]">
              {[
                { p: 'Q6', t: '赛事真实性 · 3源验证球迷屋/赛程App/OneFootball', c: 'emerald' },
                { p: 'P0-1', t: '主队战意强（西班牙世界杯前最后本土热身）', c: 'emerald' },
                { p: 'P0-3', t: '跨大洲对决-1档（欧洲 vs 亚洲 = 真跨大洲）', c: 'emerald' },
                { p: 'P0-4', t: '身价60倍差 → 让球降权（轮换+替补风险）', c: 'amber' },
                { p: 'P2-K', t: '友谊赛降权 · 西班牙大面积轮换9主力', c: 'amber' },
                { p: 'P3-13', t: '跨大洲-1档 + 厚尾场景+1档（综合）', c: 'gold' },
              ].map((p, i) => (
                <div key={i} className="px-2.5 py-1.5 rounded" style={{ background: 'var(--bg-secondary)', borderLeft: `2px solid var(--accent-${p.c})` }}>
                  <span className="font-semibold" style={{ color: `var(--accent-${p.c})` }}>{p.p} · </span>{p.t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="text-[11px] mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>反对过滤器论点（强制输出）</div>
        <div className="p-3.5 rounded-lg text-[12px] leading-relaxed" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
          ① 亚马尔+尼科·威廉姆斯伤缺 + 拉亚/梅里诺/苏比门迪/法比安欧冠决赛后休息 = 9 人轮换<br />
          ② 里亚索尔草皮条件差，伊拉克名宿指出可能影响西班牙技术流发挥<br />
          ③ 2009 联合会杯西班牙仅 1-0 小胜伊拉克 = "历史魔咒"<br />
          ④ 伊拉克时隔 40 年重返世界杯，士气高 + 阿尔诺德铁桶阵战术<br />
          ⑤ SportsMole 预测 3-0 = 第三方数据，但模型对替补阵容不放心<br />
          <strong style={{ color: 'var(--accent-gold)' }}>结论：方向主胜★★★★ 但让球放弃（轮换+让 2.5 球风险高）</strong>
        </div>
      </div>
    </div>
  );
}
