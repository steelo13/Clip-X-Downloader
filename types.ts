
export enum ToolCategory {
  MEDIA = 'Media Tools',
  TEXT = 'Text & Bio Tools',
  GROWTH = 'Growth & Analytics',
  DESIGN = 'Design & Visual',
  URL = 'URL & Profile',
  CREATOR = 'Creator Tools'
}

export interface ToolDefinition {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  isPopular?: boolean;
  usageSteps?: string[];
}

export interface EngagementStats {
  likes: number;
  retweets: number;
  replies: number;
  bookmarks: number;
  followers: number;
}
