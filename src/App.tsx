import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { AddReferralPage } from './pages/AddReferralPage';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProjectsPage } from './pages/ProjectsPage';
import { ReferralsPage } from './pages/ReferralsPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/referrals" element={<ReferralsPage />} />
        <Route path="/add" element={<AddReferralPage />} />
      </Routes>
      <footer className="footer">
        <div className="container">CryptoRef © 2026</div>
      </footer>
    </>
  );
}