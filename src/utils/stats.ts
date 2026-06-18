import { projects } from '../data/projects';
import { referrals } from '../data/referrals';

export const getProjectReferrals = (projectId: string) =>
  referrals.filter((ref) => ref.projectId === projectId);

export const getProjectStats = (projectId: string) => {
  const list = getProjectReferrals(projectId);
  const users = new Set(list.map((ref) => ref.user));
  return {
    referrals: list.length,
    users: users.size,
    likes: list.reduce((sum, ref) => sum + ref.likes, 0),
    clicks: list.reduce((sum, ref) => sum + ref.clicks, 0),
  };
};

export const globalStats = {
  projects: projects.length,
  referrals: referrals.length,
  users: new Set(referrals.map((ref) => ref.user)).size,
  likes: referrals.reduce((sum, ref) => sum + ref.likes, 0),
};

export const topUsers = Array.from(
  referrals
    .reduce((map, ref) => {
      const current = map.get(ref.user) ?? {
        user: ref.user,
        referrals: 0,
        likes: 0,
        clicks: 0,
      };
      current.referrals += 1;
      current.likes += ref.likes;
      current.clicks += ref.clicks;
      map.set(ref.user, current);
      return map;
    }, new Map<string, { user: string; referrals: number; likes: number; clicks: number }>())
    .values()
).sort((a, b) => b.likes + b.clicks - (a.likes + a.clicks));
