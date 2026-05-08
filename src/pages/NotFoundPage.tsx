import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#F7F7F7' }}
    >
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center py-20">
        <h1 className="font-bold mb-8" style={{ fontSize: '120px', lineHeight: 1, fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
          Ой!
        </h2>
        <p className="text-lg md:text-2xl font-bold mb-4 max-w-2xl" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
          Похоже вы попали в кадр, которого нет в финальной выкладке.
        </p>
        <p className="text-base md:text-xl font-bold mb-10" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
          Не расстраивайтесь! Вот проверенные ракурсы:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <button
              className="px-10 py-3 text-sm font-medium text-white transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              Главная
            </button>
          </Link>
          <Link to="/portfolio">
            <button
              className="px-10 py-3 text-sm font-medium text-white transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              Портфолио
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="px-10 py-3 text-sm font-medium text-white transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              Контакты
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
