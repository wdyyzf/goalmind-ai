import type { Match } from '@/lib/types';

interface MatchCardProps {
  match: Match;
  compact?: boolean;
}

const confidenceClass = (c: number) => {
  if (c >= 5) return 'confidence-5';
  if (c === 4) return 'confidence-4';
  if (c === 3) return 'confidence-3';
  if (c === 2) return 'confidence-2';
  if (c === 1) return 'confidence-1';
  return 'confidence-abandon';
};

const statusLabel = (status: string) => {
  if (status === 'finished') return '已结束';
  if (status === 'live') return '进行中';
  if (status === 'upcoming') return '未开赛';
  return '已取消';
};

const actualHit = (m: Match) => {
  if (!m.actual) return null;
  if (m.actual.directionHit === null || m.actual.directionHit === undefined) return null;
  return m.actual.directionHit;
};

export default function MatchCard({ match, compact = false }: MatchCardProps) {
  const hit = actualHit(match);
  const isLoss = hit === false;
  const isWin = hit === true;

  return (
    <div className={`match-card ${match.highlight ? 'highlight' : ''} ${isLoss ? 'opacity-60' : ''}`} style={{ minWidth: compact ? '280px' : 'auto' }}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-[11px] mb-1" style={{ color: 'var(--text-muted)' }}>
            {match.date} {match.time} {isWin && '✓'} {isLoss && '✗'}
          </div>
          <div className="font-display font-semibold text-[15px]">{match.home}</div>
          <div className="text-[11px]" style={{ color: 'var(--text-muted)', margin: '2px 0 6px' }}>vs {match.away}</div>
        </div>
        <div className={`tag ${confidenceClass(match.prediction.confidence)}`}>
          {'★'.repeat(match.prediction.confidence)}
        </div>
      </div>
      <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid var(--line)' }}>
        <div>
          <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>预测</div>
          <div
            className="font-semibold text-[13px]"
            style={{ color: hit === null ? 'var(--accent-gold)' : hit ? 'var(--accent-emerald)' : 'var(--accent-crimson)' }}
          >
            {match.status === 'finished' && match.score
              ? `${match.score.home}-${match.score.away} ${hit ? '✓' : '✗'}`
              : match.prediction.direction}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>让球</div>
          <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{match.prediction.asian}</div>
        </div>
      </div>
      {match.liveWarning && (
        <div className="mt-3 text-[10px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {match.liveWarning}
        </div>
      )}
    </div>
  );
}
