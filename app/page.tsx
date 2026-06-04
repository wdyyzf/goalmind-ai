import Link from 'next/link';
import { matches6_3, matches6_5, modelStats, newsItems, execRecord } from '@/lib/data';
import MatchCard from '@/components/MatchCard';

const colorClass = (c?: string) => {
  if (c === 'emerald') return 'var(--accent-emerald)';
  if (c === 'gold') return 'var(--accent-gold)';
  if (c === 'amber') return 'var(--accent-amber)';
  if (c === 'crimson') return 'var(--accent-crimson)';
  return 'var(--text-primary)';
};

export default function HomePage() {
  // 合并历史（6月2-3日 已完赛）+ 今日（6月5日 12场预测）
  const allMatches = [...matches6_3, ...matches6_5];
  const upcoming = matches6_5.filter(m => m.status === 'upcoming');
  const finished = allMatches.filter(m => m.status === 'finished');

  return (
    <div>
      {/* Hero */}
      <div className="gradient-border glow mb-8 p-8" style={{ background: 'var(--gradient-dark)' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-gold)' }}></span>
          <span className="text-[11px] font-semibold tracking-wide" style={{ color: 'var(--accent-gold)' }}>6月5日 · 国际比赛日 12 场预测</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl leading-tight mb-3">
          AI 透明化 + 副业小试水 = <span className="gradient-text">月入几千的稳健路径</span>
        </h1>
        <p className="text-[15px] mb-6 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          每日 1 注 2串1 · 200 元额度 · 主动放弃率 {'>'}80% · 12 条补丁完全透明 · 历史复盘全公开
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link href="/side" className="btn-primary no-underline">立即跟单 →</Link>
          <Link href="/model" className="btn-ghost no-underline">查看模型 v3.0</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {modelStats.map((s, i) => (
          <div key={i} className="card" style={{ padding: '20px' }}>
            <div className="text-[11px] uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            <div className="metric text-3xl font-bold" style={{ color: colorClass(s.color) }}>{s.value}</div>
            <div className="text-[11px] mt-1.5" style={{ color: 'var(--text-muted)' }}>
              {i === 3 ? '→ 目标 65% (副业)' : '22场样本'}
            </div>
          </div>
        ))}
      </div>

      {/* Matches + Side Hustle */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-bold text-lg m-0">今日预测 · {allMatches.length} 场（6月5日 {matches6_5.length} 场）</h2>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{finished.length} 场已完成 · {upcoming.length} 场未开赛</span>
          </div>
          <div className="flex gap-2 mb-5 flex-wrap">
            <button className="btn-ghost text-[11px]" style={{ padding: '6px 12px', background: 'rgba(212, 175, 55, 0.1)', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>★★★★+ (5)</button>
            <button className="btn-ghost text-[11px]" style={{ padding: '6px 12px' }}>★★★ (3)</button>
            <button className="btn-ghost text-[11px]" style={{ padding: '6px 12px' }}>主动放弃 (4)</button>
          </div>
          <div className="scroll-x">
            <div className="flex gap-3 pb-2" style={{ minWidth: 'max-content' }}>
              {allMatches.map(m => <MatchCard key={m.id} match={m} compact />)}
            </div>
          </div>
        </div>

        <div className="card" style={{ background: 'linear-gradient(180deg, var(--bg-elevated) 0%, rgba(212, 175, 55, 0.04) 100%)', borderColor: 'var(--accent-gold)' }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-gold)', animation: 'pulse 1.5s infinite' }}></div>
            <span className="text-[11px] font-bold tracking-wide" style={{ color: 'var(--accent-gold)' }}>副业小试水 · 今日套餐</span>
          </div>
          <h3 className="font-display font-bold text-base mb-1 mt-0">2串1 · 每日1注 200元</h3>
          <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>A 场失败 · 套餐首日亏损 200元</p>

          {execRecord.signals.map(s => (
            <div key={s.id} className="p-3 rounded-lg mb-3" style={{ background: 'var(--bg-secondary)' }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{s.id} 场</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: s.outcome === 'LOSS' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(212, 175, 55, 0.2)', color: s.outcome === 'LOSS' ? '#FCA5A5' : 'var(--accent-gold)' }}>
                  {s.outcome === 'LOSS' ? '已结束 · 让球负' : s.outcome === 'pending' ? '18:00 开赛' : '已结束'}
                </span>
              </div>
              <div className="text-[13px] font-semibold">{s.match}</div>
              <div className="text-[11px] mt-1" style={{ color: s.outcome === 'LOSS' ? 'var(--accent-crimson)' : 'var(--accent-gold)' }}>{s.note}</div>
            </div>
          ))}

          <Link href="/side" className="btn-primary w-full block text-center no-underline">查看 6月3日执行追踪</Link>
        </div>
      </div>

      {/* News + Model Updates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-display font-bold text-base mb-4">模型动态</h2>
          <div className="flex flex-col gap-3">
            <div className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent-emerald)' }}>
              <div className="text-[11px] font-semibold mb-1" style={{ color: 'var(--accent-emerald)' }}>PATCH G · 已应用</div>
              <div className="text-[13px]">跨大洲对决精确化（南美vs中北美 = 近半球 +1档）</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent-emerald)' }}>
              <div className="text-[11px] font-semibold mb-1" style={{ color: 'var(--accent-emerald)' }}>PATCH H · 已应用</div>
              <div className="text-[13px]">主队大规模轮换 + 下半场发力（连续5场验证）</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent-gold)' }}>
              <div className="text-[11px] font-semibold mb-1" style={{ color: 'var(--accent-gold)' }}>v3.0 Micro+ 200套餐 · 生效</div>
              <div className="text-[13px]">副业小试水 · 每日1注2串1 · 主动放弃率 &gt;80%</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: '3px solid var(--accent-crimson)' }}>
              <div className="text-[11px] font-semibold mb-1" style={{ color: 'var(--accent-crimson)' }}>首日失败 · A 场未中</div>
              <div className="text-[13px]">荷兰 2-2 苏格兰 · 模型未识别"2021年同场地同比分"</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="font-display font-bold text-base mb-4">今日新闻</h2>
          <div className="flex flex-col gap-3">
            {newsItems.map((n, i) => (
              <div key={i} className="pb-3" style={{ borderBottom: i < newsItems.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div className="text-[11px] mb-1" style={{ color: 'var(--text-muted)' }}>{n.date} · {n.source}</div>
                <div className="text-[13px] font-medium leading-relaxed">{n.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
