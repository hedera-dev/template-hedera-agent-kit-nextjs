export type ChatMessage = {
  type: 'human' | 'ai';
  content: string;
};

export type ChatRequest = {
  input: string;
  history: ChatMessage[];
};
