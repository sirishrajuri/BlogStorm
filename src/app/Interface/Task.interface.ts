export interface Task {
    user_id:string;
    createdAt?: string;
    timeTaken?:string;
    question: string;
    wordCount?: number;
    modelUsed: string;
    blogContent: string;
    status: 'Creating' | 'Failed' | 'Pushed-to-WP' | 'Completed';
  }