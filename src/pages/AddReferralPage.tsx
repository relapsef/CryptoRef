import { projects } from '../data/projects';

export function AddReferralPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="panel" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="section-title">
            <div>
              <h2>Submit a Referral Link</h2>
              <p>This is a demo form. To save data for real, connect Supabase, Airtable, or Firebase.</p>
            </div>
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Demo: the form works, but data is not saved yet.');
            }}
          >
            <select required defaultValue="">
              <option value="" disabled>Select a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
            <input required placeholder="Your username" />
            <input placeholder="Telegram / Twitter" />
            <input required placeholder="Ref link title" />
            <input required placeholder="Referral link" type="url" />
            <textarea required placeholder="Short description: what's the project, what to do, any bonus?" />
            <button className="btn primary" type="submit">Submit for Review</button>
          </form>
        </div>
      </div>
    </section>
  );
}
