import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Referral } from '../types';

export function AddReferralPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    projectId: '',
    user: '',
    telegram: '',
    link: '',
    description: '',
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReferral: Referral = {
      id: `r-${Date.now()}`,
      projectId: form.projectId,
      user: form.user.trim(),
      telegram: form.telegram.trim() || undefined,
      title: `${form.user.trim()}'s ref`,
      link: form.link.trim(),
      description: form.description.trim(),
      likes: 0,
      clicks: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    const existing = JSON.parse(localStorage.getItem('cryptoref-referrals') || '[]');
    localStorage.setItem('cryptoref-referrals', JSON.stringify([newReferral, ...existing]));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container">
          <div className="panel" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 56 }}>✅</div>
            <h2>Ref link added!</h2>
            <p className="muted">Your link has been saved. Go to the project page to see it.</p>
            <div className="actions" style={{ justifyContent: 'center', marginTop: 20 }}>
              <button className="btn primary" onClick={() => navigate(`/projects/${form.projectId}`)}>
                View Project
              </button>
              <button className="btn" onClick={() => { setSubmitted(false); setForm({ projectId: '', user: '', telegram: '', link: '', description: '' }); }}>
                Add Another
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="panel" style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 6px' }}>Add Ref Link</h2>
          <p className="muted" style={{ margin: '0 0 24px' }}>Fill in the fields below — only the required ones are enough.</p>

          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Project *</label>
              <select
                required
                value={form.projectId}
                onChange={(e) => set('projectId', e.target.value)}
              >
                <option value="" disabled>Select a project</option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>{p.logo} {p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Your name / username *</label>
              <input
                required
                maxLength={32}
                placeholder="e.g. CryptoGhoul"
                value={form.user}
                onChange={(e) => set('user', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Twitter / Telegram <span className="muted">(optional)</span></label>
              <input
                maxLength={64}
                placeholder="@username"
                value={form.telegram}
                onChange={(e) => set('telegram', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Referral link *</label>
              <input
                required
                type="url"
                placeholder="https://..."
                value={form.link}
                onChange={(e) => set('link', e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">
                Short note <span className="muted">(optional, max 120 chars)</span>
              </label>
              <textarea
                maxLength={120}
                rows={3}
                placeholder="e.g. Active quests, no deposit needed"
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                style={{ minHeight: 'unset' }}
              />
              <div className="muted" style={{ fontSize: 13, textAlign: 'right', marginTop: 4 }}>
                {form.description.length}/120
              </div>
            </div>

            <button className="btn primary" type="submit">Add Link</button>
          </form>
        </div>
      </div>
    </section>
  );
}
