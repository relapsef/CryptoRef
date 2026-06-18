import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReferralCard } from '../components/ReferralCard';
import { projects } from '../data/projects';
import { getAllReferrals } from '../utils/storage';
import { getProjectStats } from '../utils/stats';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);
  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <div className="panel">
            <h2>Project not found</h2>
            <button className="btn" onClick={() => navigate('/projects')}>
              <ArrowLeft size={16} /> Back to Projects
            </button>
          </div>
        </div>
      </section>
    );
  }

  const allReferrals = getAllReferrals();
  const stats = getProjectStats(project.id);
  const projectReferrals = allReferrals
    .filter((ref) => ref.projectId === project.id)
    .sort((a, b) => b.likes - a.likes);

  return (
    <section className="section">
      <div className="container">
        <button className="btn" onClick={() => navigate('/projects')}>
          <ArrowLeft size={16} /> Back
        </button>

        <div className="panel" style={{ marginTop: 18 }}>
          <div className="card-top">
            <div>
              <div className="project-logo">{project.logo}</div>
              <h1 style={{ fontSize: 52, margin: '18px 0 10px' }}>{project.name}</h1>
              <p className="muted" style={{ maxWidth: 760 }}>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
            <button className="btn primary" onClick={() => navigate('/add')}>
              Add Ref Link
            </button>
          </div>
          <div className="stats" style={{ maxWidth: 'none' }}>
            <div className="stat"><strong>{projectReferrals.length}</strong><span>ref links</span></div>
            <div className="stat"><strong>{stats.users}</strong><span>users</span></div>
            <div className="stat"><strong>{stats.likes}</strong><span>likes</span></div>
          </div>
        </div>

        <div className="section-title" style={{ marginTop: 34 }}>
          <div>
            <h2>Community Referrals</h2>
            <p>Sorted by likes.</p>
          </div>
        </div>

        {projectReferrals.length ? (
          projectReferrals.map((ref) => <ReferralCard key={ref.id} referral={ref} />)
        ) : (
          <div className="panel">
            <h3>No referrals yet</h3>
            <p className="muted">Be the first to add a link for this project.</p>
            <button className="btn primary" onClick={() => navigate('/add')}>Add Ref Link</button>
          </div>
        )}
      </div>
    </section>
  );
}
