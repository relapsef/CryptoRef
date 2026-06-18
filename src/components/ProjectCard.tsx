import type { Project } from '../types';
import { getProjectStats } from '../utils/stats';

interface ProjectCardProps {
  project: Project;
  onOpen: (projectId: string) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const stats = getProjectStats(project.id);

  return (
    <article className="card" onClick={() => onOpen(project.id)}>
      <div className="card-top">
        <div className="project-logo">{project.logo}</div>
        <span className="status">{project.status === 'active' ? 'Активен' : project.status}</span>
      </div>
      <h3>{project.name}</h3>
      <div className="muted">{project.short}</div>
      <p>{project.description}</p>
      <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="card-footer">
        <span>🔥 {stats.referrals} рефок</span>
        <span>👥 {stats.users} юзеров</span>
        <span>👍 {stats.likes}</span>
      </div>
    </article>
  );
}
