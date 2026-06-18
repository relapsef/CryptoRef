import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { topUsers } from '../utils/stats';

interface HomeProps {
  setPage: (page: 'projects' | 'add') => void;
  openProject: (projectId: string) => void;
}

export function Home({ setPage, openProject }: HomeProps) {
  return (
    <>
      <Hero setPage={setPage} />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div>
              <h2>🔥 Популярные проекты</h2>
              <p>Проекты, где уже можно оставлять и искать рефки.</p>
            </div>
          </div>
          <div className="grid">
            {projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="section-title">
              <div>
                <h2>🏆 Топ рефоводы</h2>
                <p>Чем больше лайков и переходов, тем выше пользователь в рейтинге.</p>
              </div>
            </div>
            <div className="rank">
              {topUsers.slice(0, 5).map((user, index) => (
                <div className="rank-row" key={user.user}>
                  <strong>#{index + 1} {user.user}</strong>
                  <span className="muted">{user.referrals} рефок • {user.likes} лайков • {user.clicks} переходов</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
