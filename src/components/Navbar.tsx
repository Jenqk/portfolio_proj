import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Главная', to: '/' },
  { label: 'Портфолио', to: '/portfolio' },
  { label: 'Обо мне', to: '/about' },
  { label: 'Услуги', to: '/services' },
  { label: 'Контакты', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300"
        style={{
          background: menuOpen ? 'transparent' : (scrolled ? 'rgba(255,255,255,0.97)' : 'transparent'),
          backdropFilter: scrolled && !menuOpen ? 'blur(8px)' : 'none',
          boxShadow: scrolled && !menuOpen ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <Link
          to="/"
          className="font-bold text-sm tracking-widest uppercase leading-tight"
          style={{ color: menuOpen ? '#1A1A1A' : (scrolled ? '#1A1A1A' : '#1A1A1A'), fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
        >
          KATKOVA<br />PHOTO
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 items-end p-2 z-50"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          style={{ minWidth: 44, minHeight: 44, justifyContent: 'center' }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="5" x2="19" y2="19" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <>
              <span className="block h-px bg-current w-6 transition-all" style={{ color: '#1A1A1A' }} />
              <span className="block h-px bg-current w-6 transition-all" style={{ color: '#1A1A1A' }} />
              <span className="block h-px bg-current w-6 transition-all" style={{ color: '#1A1A1A' }} />
            </>
          )}
        </button>
      </header>
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: '#C9A96E' }}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-4xl md:text-5xl font-bold transition-opacity duration-200 hover:opacity-70"
              style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A', letterSpacing: '-0.01em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
