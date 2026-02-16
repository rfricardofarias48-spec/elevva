export interface AnalysisResult {
  candidateName: string;
  matchScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendedRole: string;
}

export interface DemoState {
  isLoading: boolean;
  result: AnalysisResult | null;
  error: string | null;
}