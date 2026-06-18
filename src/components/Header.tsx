import { Link2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          <div className="logo-icon"><Link2 size={22} /></div>
          <span>Crypto<span>Ref</span></span>
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/referrals" className={({ isActive }) => isActive ? 'active' : ''}>Referrals</NavLink>
          <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>Add Link</NavLink>
        </nav>
      </div>
    </header>
  );
}
