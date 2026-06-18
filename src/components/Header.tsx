import { Link2 } from 'lucide-react';

type Page = 'home' | 'projects' | 'referrals' | 'add';

interface HeaderProps {
  page: Page;
  setPage: (page: Page) => void;
}

export function Header({ page, setPage }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <button className="logo" onClick={() => setPage('home')} style={{ background: 'transparent', border: 0, color: 'white', cursor: 'pointer' }}>
          <div className="logo-icon"><Link2 size={22} /></div>
          <span>Crypto<span>Ref</span></span>
        </button>

        <nav className="nav">
          <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Главная</button>
          <button className={page === 'projects' ? 'active' : ''} onClick={() => setPage('projects')}>Проекты</button>
          <button className={page === 'referrals' ? 'active' : ''} onClick={() => setPage('referrals')}>Рефки</button>
          <button className={page === 'add' ? 'active' : ''} onClick={() => setPage('add')}>Добавить</button>
        </nav>
      </div>
    </header>
  );
}
