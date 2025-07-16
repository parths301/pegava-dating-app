export interface QuestionnaireResponse {
  questionId: number;
  question: string;
  answer: string;
}

export interface UserQuestionnaire {
  userId: string;
  responses: QuestionnaireResponse[];
  completedAt: Date;
}

export const PERSONALITY_QUESTIONS = [
  "What's your idea of a perfect first date?",
  "How do you handle conflict in relationships?",
  "What role does humor play in your life?",
  "Describe your ideal weekend.",
  "What's the most important quality you look for in a partner?",
  "How do you show affection to someone you care about?",
  "What's your biggest passion or hobby?",
  "How do you handle stress and difficult situations?",
  "What does loyalty mean to you in a relationship?",
  "Describe your communication style.",
  "What's your perspective on work-life balance?",
  "How do you like to celebrate special moments?",
  "What values are most important to you in life?",
] as const;