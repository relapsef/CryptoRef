import { useMemo, useState } from 'react';
import { ReferralCard } from '../components/ReferralCard';
import { projects } from '../data/projects';
import { referrals } from '../data/referrals';

type Sort = 'popular' | 'new' | 'likes';

export function ReferralsPage() {
  const [sort, setSort] = useState<Sort>('popular');

  const list = useMemo(() => {
    const copy = [...referrals];
    if (sort === 'new') return copy.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    if (sort === 'likes') return copy.sort((a, b) => b.likes - a.likes);
    return copy.sort((a, b) => b.likes + b.clicks - (a.likes + a.clicks));
  }, [sort]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Все рефералки</h2>
            <p>Единая лента ссылок по всем проектам.</p>
          </div>
          <div className="actions">
            <button className={`btn ${sort === 'popular' ? 'primary' : ''}`} onClick={() => setSort('popular')}>🔥 Популярные</button>
            <button className={`btn ${sort === 'new' ? 'primary' : ''}`} onClick={() => setSort('new')}>🆕 Новые</button>
            <button className={`btn ${sort === 'likes' ? 'primary' : ''}`} onClick={() => setSort('likes')}>👍 По лайкам</button>
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
