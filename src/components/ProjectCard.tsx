import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';
import { getProjectStats } from '../utils/stats';

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  const stats = getProjectStats(project.id);

  return (
    <article className="card" onClick={() => navigate(`/projects/${project.id}`)}>
      <div className="card-top">
        <div className="project-logo">{project.logo}</div>
        <span className="status">{project.status === 'active' ? 'Active' : project.status}</span>
      </div>
      <h3>{project.name}</h3>
      <div className="muted">{project.short}</div>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div className="card-footer">
        <span>🔥 {stats.referrals} refs</span>
        <span>👥 {stats.users} users</span>
        <span>👍 {stats.likes}</span>
      </div>
    </article>
  );
}
