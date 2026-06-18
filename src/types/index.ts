export type ProjectStatus = 'active' | 'upcoming' | 'ended';

export interface Project {
  id: string;
  name: string;
  short: string;
  description: string;
  category: string;
  reward: string;
  funding?: string;
  logo: string;
  website: string;
  status: ProjectStatus;
  tags: string[];
}

export interface Referral {
  id: string;
  projectId: string;
  user: string;
  telegram?: string;
  title: string;
  link: string;
  description: string;
  likes: number;
  clicks: number;
  createdAt: string;
  verified?: boolean;
}
