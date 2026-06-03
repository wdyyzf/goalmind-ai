import { execRecord } from '@/lib/data';

const rules = [
  { i: '①', t: '每日 1 注 2串1', d: '硬上限 = 200 元 · 不追注不超额' },
  { i: '②', t: '2 场都需 ★★★★+', d: '拒绝"中 1 场不算赢"风险' },
  { i: '③', t: '跨赛事+跨方向', d: '避免系统性风险（同赛事同方向）' },
  { i: '④', t: '赔率 2.5-4 倍', d: '合理回报 · 避免高赔陷阱' },
  { i: '⑤', t: '找不到 P0+P1 → 当日不押', d: '200 元保留到次日 · 拒绝"凑 2 串 1"' },
];

const antiHuman = [
  { i: '🔴', t: '连输 2 天', d: '第 3 天强制休息 3 天（不只是第 3 天休息）' },
  { i: '🟡', t: '连赢 3 天', d: '第 4 天降级为观察模式（避免过度自信）' },
  { i: '🟠', t: '周回撤 > 5%', d: '强制降级为观察' },
  { i: '🔴', t: '月回撤 > 15%', d: '强制降级 + 模型重审' },
];

export default function SidePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display font-extrabold text-3xl mb-2">副业小试水套餐</h1>
        <p className="text-[15px]" style={{ color: 'var(--text-secondary)' }}>
          每日 1 注 2串1 · 200 元额度 · 主动放弃率 &gt;80% · 副业小试水专属
        </p>
      </div>

      <div className="card mb-6" style={{ background: 'linear-gradient(180deg, var(--bg-elevated) 0%, rgba(212, 175, 55, 0.04) 100%)' }}>
        <h2 className="font-display font-bold text-base mb-4">核心规则 · 5 大不变量</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rules.map((r, i) => (
            <div key={i} className="p-3.5 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent-gold)' }}>
              <div className="text-[12px] font-semibold mb-1" style={{ color: 'var(--accent-gold)' }}>{r.i} {r.t}</div>
              <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{r.d}</div>
            </div>
          ))}
          <div className="p-3.5 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent-gold)', gridColumn: '1 / -1' }}>
            <div className="text-[12px] font-semibold mb-1" style={{ color: 'var(--accent-gold)' }}>{rules[4].i} {rules[4].t}</div>
            <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{rules[4].d}</div>
          </div>
        </div>
      </div>

      <div className="card mb-6" style={{ borderColor: 'var(--accent-crimson)' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-base m-0">6月3日 · 套餐首日</h2>
          <span className="tag" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#FCA5A5' }}>亏损 200元</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {execRecord.signals.map(s => (
            <div key={s.id} className="p-4 rounded-lg" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--line)', opacity: s.outcome === 'pending' ? 0.6 : 1 }}>
              <div className="text-[11px] mb-1.5" style={{ color: 'var(--text-muted)' }}>{s.id} 场 · 02:45</div>
              <div className="text-[14px] font-semibold mb-1">{s.match}</div>
              <div className="text-[12px] mb-2" style={{ color: 'var(--text-secondary)' }}>★★★★ 让球胜</div>
              <div className="flex justify-between items-center py-2" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                <div>
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>预测</div>
                  <div className="text-[12px] font-semibold">{s.id === 'A' ? '荷兰胜 85%' : '印尼胜 85%'}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>实际</div>
                  <div className="text-[12px] font-semibold" style={{ color: s.outcome === 'LOSS' ? 'var(--accent-crimson)' : 'var(--accent-amber)' }}>
                    {s.outcome === 'LOSS' ? '2-2 ❌' : '未开赛'}
                  </div>
                </div>
              </div>
              <div className="text-[10px] mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.note}</div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-lg" style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '3px solid var(--accent-crimson)' }}>
          <div className="text-[13px] font-semibold mb-1.5" style={{ color: 'var(--accent-crimson)' }}>模型复盘 · 关键洞察</div>
          <div className="text-[12px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            ① <strong>荷兰近期状态不佳</strong>（欧洲杯 1-2 负英格兰）—— 友谊赛 + 主力轮换 = 不可预测<br />
            ② <strong>"近 4 次 vs 苏全胜"数据过时</strong>—— 2021 年 6 月 3 日同场地荷兰 2-2 苏格兰（3 年前数据）模型未识别<br />
            ③ <strong>友谊赛 + 主力轮换</strong>—— 即使有主场优势 + 强阵容，主力不首发时结果不可预测<br />
            ④ <strong>2串1的固有风险</strong>—— "中1场不算赢" → 首日即失败
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="font-display font-bold text-base mb-4">资金管理 · 副业小试水专属</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: '200', u: '元', l: '每日额度（硬上限）', c: 'var(--accent-gold)' },
            { v: '1.5', u: '%', l: '单注上限（10万本金）', c: 'var(--accent-emerald)' },
            { v: '15', u: '%', l: '月回撤上限（触发降级）', c: 'var(--accent-crimson)' },
          ].map((m, i) => (
            <div key={i} className="p-4 rounded-lg text-center" style={{ background: 'var(--bg-secondary)' }}>
              <div className="metric text-2xl font-bold" style={{ color: m.c }}>{m.v}<span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>{m.u}</span></div>
              <div className="text-[11px] mt-1" style={{ color: 'var(--text-muted)' }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ background: 'linear-gradient(180deg, var(--bg-elevated) 0%, rgba(239, 68, 68, 0.04) 100%)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
        <h2 className="font-display font-bold text-base mb-4" style={{ color: 'var(--accent-crimson)' }}>反人性规则 · 强制保护</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {antiHuman.map((r, i) => (
            <div key={i} className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
              <div className="text-[12px] font-semibold mb-1">{r.i} {r.t}</div>
              <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{r.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
