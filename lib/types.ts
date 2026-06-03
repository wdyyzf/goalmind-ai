export type Confidence = 1 | 2 | 3 | 4 | 5;

export type MatchStatus = 'finished' | 'live' | 'upcoming' | 'canceled';

export interface Score {
  home: number;
  away: number;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  league: string;
  home: string;
  away: string;
  homeIcon: string;
  awayIcon: string;
  status: MatchStatus;
  score: Score;
  prediction: {
    direction: string;
    confidence: Confidence;
    asian: string;
    overUnder: string;
    goals: string;
  };
  actual?: {
    directionHit?: boolean | null;
    asianHit?: boolean | null;
    goalsHit?: boolean | null;
  };
  highlight?: boolean;
  liveWarning?: string;
}

export interface Patch {
  id: string;
  name: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  category: string;
  description: string;
  applied: string[];
  status: 'active' | 'deprecated' | 'testing';
  addedDate: string;
}

export interface ModelStat {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'stable';
  color?: 'emerald' | 'gold' | 'amber' | 'crimson';
}
