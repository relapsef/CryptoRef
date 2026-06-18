import { useMemo, useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function ProjectsPage({ openProject }: { openProject: (projectId: string) => void }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return projects;
    return projects.filter((project) =>
      [project.name, project.short, project.category, project.description, ...project.tags].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Все проекты</h2>
            <p>Выбирай проект и смотри рефки пользователей.</p>
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск проекта..." style={{ maxWidth: 360 }} />
        </div>
        <div className="grid">
          {filtered.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}
        </div>
      </div>
    </section>
  );
}
