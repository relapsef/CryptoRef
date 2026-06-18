import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetail } from './pages/ProjectDetail';
import { ReferralsPage } from './pages/ReferralsPage';
import { AddReferralPage } from './pages/AddReferralPage';

type Page = 'home' | 'projects' | 'referrals' | 'add' | 'project';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string>('ink');

  const openProject = (projectId: string) => {
    setSelectedProject(projectId);
    setPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header page={page === 'project' ? 'projects' : page} setPage={setPage} />
      {page === 'home' && <Home setPage={setPage} openProject={openProject} />}
      {page === 'projects' && <ProjectsPage openProject={openProject} />}
      {page === 'project' && <ProjectDetail projectId={selectedProject} back={() => setPage('projects')} addReferral={() => setPage('add')} />}
      {page === 'referrals' && <ReferralsPage />}
      {page === 'add' && <AddReferralPage />}
      <footer className="footer">
        <div className="container">CryptoRef — сделано для крипто-комьюнити. MVP без backend, данные лежат в src/data.</div>
      </footer>
    </>
  );
}
