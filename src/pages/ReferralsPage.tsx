import { useMemo, useState } from 'react';
import { ReferralCard } from '../components/ReferralCard';
import { projects } from '../data/projects';
import { getAllReferrals } from '../utils/storage';

type Sort = 'popular' | 'new' | 'likes';

export function ReferralsPage() {
  const [sort, setSort] = useState<Sort>('popular');

  const list = useMemo(() => {
    const copy = [...getAllReferrals()];
    if (sort === 'new') return copy.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    if (sort === 'likes') return copy.sort((a, b) => b.likes - a.likes);
    return copy.sort((a, b) => b.likes + b.clicks - (a.likes + a.clicks));
  }, [sort]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>All Referrals</h2>
            <p>A single feed of referral links across all projects.</p>
          </div>
          <div className="actions">
            <button className={`btn ${sort === 'popular' ? 'primary' : ''}`} onClick={() => setSort('popular')}>🔥 Popular</button>
            <button className={`btn ${sort === 'new' ? 'primary' : ''}`} onClick={() => setSort('new')}>🆕 New</button>
            <button className={`btn ${sort === 'likes' ? 'primary' : ''}`} onClick={() => setSort('likes')}>👍 Top Liked</button>
          </div>
        </div>

        {list.map((ref) => {
          const project = projects.find((item) => item.id === ref.projectId);
          return (
            <div key={ref.id}>
              <div className="muted" style={{ margin: '0 0 8px 6px' }}>
                {project?.logo} {project?.name}
              </div>
              <ReferralCard referral={ref} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
