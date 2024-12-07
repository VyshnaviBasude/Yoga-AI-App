export interface YogaPose {
  name: string;
  sanskritName: string;
  benefits: string[];
  videoUrl: string;
  youtuber: string;
  views: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Problem {
  id: string;
  category: string;
  description: string;
}

export interface Suggestion {
  problem: string;
  poses: YogaPose[];
}