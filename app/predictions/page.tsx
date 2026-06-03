import { matches6_3 } from '@/lib/data';

const ina = matches6_3.find(m => m.id === 'ina-yem')!;

export default function PredictionsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display font-extrabold text-3xl mb-2">预测中心</h1>
        <p className="text-[15px]" style={{ color: 'var(--text-secondary)' }}>
          5 问过滤器 · 12 条补丁完全透明 · 反对过滤器论点强制输出
        </p>
      </div>

      <div className="card mb-6">
        <h2 className="font-display font-bold text-base mb-4">5 问过滤器 · 状态</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { q: 'Q1 赔率', s: 'PASS', d: '无撤退信号', c: 'emerald' },
            { q: 'Q2 弱弱', s: 'PASS', d: '非弱弱对决', c: 'emerald' },
            { q: 'Q3 置信度', s: '★★★★', d: '高置信级', c: 'gold' },
            { q: 'Q4 错误', s: 'PASS', d: '无已知错误', c: 'emerald' },
            { q: 'Q5 元认知', s: 'PASS', d: '反对论点已输出', c: 'emerald' },
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
        <h2 className="font-display font-bold text-base mb-4">印尼 vs 也门 · 06-03 18:00 · ★★★★</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div>
            <div className="text-[11px] mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>基本数据</div>
            <div className="flex flex-col gap-2 text-[13px]">
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>FIFA 排名</span><span className="font-mono">150+ vs 156+</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>近期战绩</span><span>4胜2平4负 vs 1胜1平8负</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>进球数</span><span className="font-mono">14 vs 7</span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--accent-crimson)' }}>失球数</span><span className="font-mono">8 vs <strong>23</strong></span></div>
              <div className="flex justify-between"><span style={{ color: 'var(--text-muted)' }}>失球率</span><span style={{ color: 'var(--accent-crimson)' }}>也门是印尼近3倍</span></div>
            </div>
          </div>
          <div>
            <div className="text-[11px] mb-2 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>12 条补丁应用</div>
            <div className="flex flex-col gap-1.5 text-[12px]">
              {[
                { p: 'P0', t: '主队战意强 + 客队已锁定资格', c: 'emerald' },
                { p: 'P1', t: '排名差接近100位 → 厚尾+2档', c: 'emerald' },
                { p: 'P2', t: '客队进攻效率被高估 → 增加防守权重', c: 'gold' },
                { p: 'P3', t: '让球≥1.5球时厚尾场景+1档', c: 'amber' },
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
          ① 也门10场进7失23 = 极弱，但样本小可能偶然<br />
          ② 印尼vs也门历史 0-0（2014年9月）= 历史对决不一定是碾压<br />
          ③ 友谊赛属性 + 双方都无强烈战意<br />
          ④ 印尼主场送行战 + 也门可能"故意摆烂" → 进球可能偏少<br />
          <strong style={{ color: 'var(--accent-gold)' }}>结论：押注印尼方向但警惕"历史0-0"魔咒</strong>
        </div>
      </div>
    </div>
  );
}
