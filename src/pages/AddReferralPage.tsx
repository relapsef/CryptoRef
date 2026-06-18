import { projects } from '../data/projects';

export function AddReferralPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="panel" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="section-title">
            <div>
              <h2>Добавить рефку</h2>
              <p>Пока это демо-форма. Чтобы реально сохранять данные, подключи Airtable, Supabase или Firebase.</p>
            </div>
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Демо: форма работает, но данные пока не сохраняются.');
            }}
          >
            <select required defaultValue="">
              <option value="" disabled>Выбери проект</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
            <input required placeholder="Твой ник" />
            <input placeholder="Telegram / Twitter" />
            <input required placeholder="Название рефки" />
            <input required placeholder="Реферальная ссылка" type="url" />
            <textarea required placeholder="Короткое описание: что за проект, что делать, есть ли бонус" />
            <button className="btn primary" type="submit">Отправить на модерацию</button>
          </form>
        </div>
      </div>
    </section>
  );
}
