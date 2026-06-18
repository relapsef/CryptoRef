import { ArrowLeft } from 'lucide-react';
import { ReferralCard } from '../components/ReferralCard';
import { projects } from '../data/projects';
import { referrals } from '../data/referrals';
import { getProjectStats } from '../utils/stats';

interface ProjectDetailProps {
  projectId: string;
  back: () => void;
  addReferral: () => void;
}

export function ProjectDetail({ projectId, back, addReferral }: ProjectDetailProps) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return null;

  const stats = getProjectStats(project.id);
  const projectReferrals = referrals
    .filter((ref) => ref.projectId === project.id)
    .sort((a, b) => b.likes - a.likes);

  return (
    <section className="section">
      <div className="container">
        <button className="btn" onClick={back}><ArrowLeft size={16} /> Назад</button>
        <div className="panel" style={{ marginTop: 18 }}>
          <div className="card-top">
            <div>
              <div className="project-logo">{project.logo}</div>
              <h1 style={{ fontSize: 52, margin: '18px 0 10px' }}>{project.name}</h1>
              <p className="muted" style={{ maxWidth: 760 }}>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
            <button className="btn primary" onClick={addReferral}>Добавить рефку</button>
          </div>
          <div className="stats" style={{ maxWidth: 'none' }}>
            <div className="stat"><strong>{stats.referrals}</strong><span>рефок</span></div>
            <div className="stat"><strong>{stats.users}</strong><span>пользователей</span></div>
            <div className="stat"><strong>{stats.likes}</strong><span>лайков</span></div>
          </div>
        </div>

        <div className="section-title" style={{ marginTop: 34 }}>
          <div>
            <h2>Рефки пользователей</h2>
            <p>Сортировка по лайкам. Позже можно подключить реальные лайки и авторизацию.</p>
          </div>
        </div>

        {projectReferrals.length ? projectReferrals.map((ref) => <ReferralCard key={ref.id} referral={ref} />) : (
          <div className="panel">
            <h3>Рефок пока нет</h3>
            <p className="muted">Будь первым, кто добавит ссылку под этот проект.</p>
            <button className="btn primary" onClick={addReferral}>Добавить рефку</button>
          </div>
        )}
      </div>
    </section>
  );
}
