import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { globalStats } from '../utils/stats';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <div className="badge"><Sparkles size={18} /> База крипто-проектов и реферальных ссылок</div>
        <h1>Найди лучшие <span className="gradient">рефералки</span> для дропов и тестнетов</h1>
        <p>Собираем актуальные ссылки на Ink, Citrea, Monad, Arc, RAX и другие проекты. Добавляй свою рефку, получай переходы и поднимайся в топ.</p>
        <div className="actions">
          <button className="btn primary" onClick={() => navigate('/projects')}>Смотреть проекты</button>
          <button className="btn" onClick={() => navigate('/add')}>Добавить рефку</button>
        </div>
        <div className="stats">
          <div className="stat"><strong>{globalStats.referrals}+</strong><span>реферальных ссылок</span></div>
          <div className="stat"><strong>{globalStats.users}+</strong><span>активных пользователей</span></div>
          <div className="stat"><strong>{globalStats.projects}+</strong><span>дроп-проектов</span></div>
        </div>
      </div>
    </section>
  );
}
