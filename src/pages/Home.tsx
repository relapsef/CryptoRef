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
              <h2>🔥 Popular Projects</h2>
              <p>Projects where you can already browse and submit referral links.</p>
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
