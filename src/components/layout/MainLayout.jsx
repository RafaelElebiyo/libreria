import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../app/config/navigation';
import { useAuth } from '../../features/auth/components/AuthProvider';

export function MainLayout({ children }) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="header">
        <div>
          <h1>Libel</h1>
          <p className="subtitle">Club de lectura para mentes curiosas</p>
        </div>
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              {item.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button type="button" className="link-button" onClick={logout}>
              Cerrar sesión
            </button>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                Registro
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">© {new Date().getFullYear()} Libel · Frontend React + Vite</footer>
    </div>
  );
}
