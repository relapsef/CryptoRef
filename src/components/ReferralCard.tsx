import { ExternalLink, ThumbsUp } from 'lucide-react';
import type { Referral } from '../types';

export function ReferralCard({ referral }: { referral: Referral }) {
  return (
    <div className="ref-card">
      <div className="ref-head">
        <div>
          <h3>{referral.title} {referral.verified && <span className="tag">проверено</span>}</h3>
          <div className="ref-meta">от {referral.user} {referral.telegram ? `• ${referral.telegram}` : ''} • {referral.createdAt}</div>
        </div>
        <div className="ref-meta">👁 {referral.clicks} • 👍 {referral.likes}</div>
      </div>
      <p>{referral.description}</p>
      <div className="actions" style={{ justifyContent: 'flex-start' }}>
        <a className="btn primary" href={referral.link} target="_blank" rel="noreferrer">Перейти <ExternalLink size={16} /></a>
        <button className="btn"><ThumbsUp size={16} /> Лайк</button>
      </div>
    </div>
  );
}
