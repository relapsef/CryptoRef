import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div>
              <h2>🔥 Популярные проекты</h2>
              <p>Проекты, где уже можно оставлять и искать рефки.</p>
            </div>
          </div>
          <div className="grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}