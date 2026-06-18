import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { globalStats } from '../utils/stats';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <div className="badge"><Sparkles size={18} /> Crypto projects & referral links hub</div>
        <h1>Find the best <span className="gradient">referral links</span> for airdrops & testnets</h1>
        <p>We collect up-to-date referral links for Ink, Citrea, Monad, Arc, RAX and more. Add your ref link, get clicks and climb the leaderboard.</p>
        <div className="actions">
          <button className="btn primary" onClick={() => navigate('/projects')}>Browse Projects</button>
          <button className="btn" onClick={() => navigate('/add')}>Add Ref Link</button>
        </div>
        <div className="stats">
          <div className="stat"><strong>{globalStats.referrals}+</strong><span>referral links</span></div>
          <div className="stat"><strong>{globalStats.users}+</strong><span>active users</span></div>
          <div className="stat"><strong>{globalStats.projects}+</strong><span>drop projects</span></div>
        </div>
      </div>
    </section>
  );
}
