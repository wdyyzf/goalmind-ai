import { patches, modelStats } from '@/lib/data';

const colorClass = (c?: string) => {
  if (c === 'emerald') return 'var(--accent-emerald)';
  if (c === 'gold') return 'var(--accent-gold)';
  if (c === 'amber') return 'var(--accent-amber)';
  if (c === 'crimson') return 'var(--accent-crimson)';
  return 'var(--text-primary)';
};

const priorityMeta = {
  P0: { color: 'var(--accent-emerald)', bg: 'rgba(16, 185, 129, 0.05)', border: 'rgba(16, 185, 129, 0.2)', label: '基础规则' },
  P1: { color: 'var(--accent-gold)', bg: 'rgba(212, 175, 55, 0.05)', border: 'rgba(212, 175, 55, 0.2)', label: '实力规则' },
  P2: { color: 'var(--accent-amber)', bg: 'rgba(245, 158, 11, 0.05)', border: 'rgba(245, 158, 11, 0.2)', label: '修正规则' },
  P3: { color: 'var(--accent-blue)', bg: 'rgba(59, 130, 246, 0.05)', border: 'rgba(59, 130, 246, 0.2)', label: '区间规则' },
};

const grouped = {
  P0: patches.filter(p => p.priority === 'P0'),
  P1: patches.filter(p => p.priority === 'P1'),
  P2: patches.filter(p => p.priority === 'P2'),
  P3: patches.filter(p => p.priority === 'P3'),
};

export default function ModelPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display font-extrabold text-3xl mb-2">模型解读</h1>
        <p className="text-[15px]" style={{ color: 'var(--text-secondary)' }}>
          v3.0 Micro+ 200套餐 · 12 条补丁按 P0-P3 优先级 · 历史复盘全公开
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {modelStats.map((s, i) => (
          <div key={i} className="card text-center" style={{ padding: '24px 20px' }}>
            <div className="metric text-4xl font-bold" style={{ color: colorClass(s.color) }}>{s.value}</div>
            <div className="text-[11px] mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card mb-6">
        <h2 className="font-display font-bold text-base mb-4">12 条补丁 · 按 P0-P3 优先级树</h2>
        {(['P0', 'P1', 'P2', 'P3'] as const).map(p => {
          const meta = priorityMeta[p];
          return (
            <div key={p} className="mb-4 p-4 rounded-lg last:mb-0" style={{ background: meta.bg, border: `1px solid ${meta.border}` }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="px-2.5 py-1 rounded text-[11px] font-bold" style={{ background: meta.color, color: p === 'P1' ? '#0A0F1E' : '#fff' }}>{p}</div>
                <span className="text-[14px] font-bold">{meta.label}（{grouped[p].length} 条）</span>
                <span className="ml-auto text-[11px]" style={{ color: 'var(--text-muted)' }}>{p === 'P0' ? '最高优先级 · 必应用' : p === 'P1' ? '次级 · 精细化' : '叠加应用'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[12px]">
                {grouped[p].map(patch => (
                  <div key={patch.id} className="px-3 py-2 rounded" style={{ background: 'var(--bg-secondary)' }}>
                    <span className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{patch.id}</span> · {patch.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <h2 className="font-display font-bold text-base mb-4">模型演进日志</h2>
        <div className="flex flex-col gap-3">
          {[
            { v: 'v3.0 Micro+ 200套餐', d: '2026-06-03', c: 'var(--accent-gold)', t: '副业小试水场景 · 每日1注2串1 · 200元 · 主动放弃率>80%' },
            { v: 'v3.0 Micro · 自我审核', d: '2026-06-02', c: 'var(--accent-emerald)', t: '12 条补丁体系 · 拒绝预测硬阈值 · RAKE 风险调整' },
            { v: '补丁 H · 主队下半场发力', d: '2026-06-02', c: 'var(--accent-emerald)', t: '连续 5 场验证（德国/挪威/哥伦比亚/加拿大/即将观察）' },
            { v: '补丁 G · 跨大洲精确化', d: '2026-06-02', c: 'var(--accent-emerald)', t: '南美vs中北美 = 近半球+1档（不再是跨大洲-1档）' },
          ].map((e, i) => (
            <div key={i} className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)', borderLeft: `3px solid ${e.c}` }}>
              <div className="flex justify-between items-center mb-1">
                <div className="text-[13px] font-semibold">{e.v}</div>
                <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{e.d}</div>
              </div>
              <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{e.t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
