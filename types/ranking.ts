export interface RankingItem {
  rank?: number;
  studentName?: string;
  score?: number;
  subject?: string;
  class?: string;
  [key: string]: unknown;
}

export type RankingType = 0 | 1 | 2;
