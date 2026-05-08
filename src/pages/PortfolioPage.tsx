import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, albums } from '../data/mockData';
import ImgPlaceholder from '../components/ImgPlaceholder';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? albums
    : albums.filter(a => a.category === activeCategory);

  return (
    <div className="fade-in">
      <section className="relative w-full" style={{ height: '60vh', minHeight: 320 }}>
        <img src="/hero-bg.jpg" alt="Портфолио" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>Портфолио</h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          Избранные работы из различных жанров съёмки. Нажмите на категорию для фильтрации.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="text-sm md:text-base transition-all duration-200 pb-1"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: activeCategory === cat.id ? '#C9A96E' : '#1A1A1A',
                fontWeight: activeCategory === cat.id ? '600' : '400',
                background: 'none',
                border: 'none',
                borderBottom: activeCategory === cat.id ? '2px solid #C9A96E' : '2px solid transparent',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-0">
          {filtered.map((album, i) => (
            <Link
              key={album.id}
              to={`/portfolio/${album.id}`}
              className="block mb-3 rounded md:mb-4 overflow-hidden group relative"
              style={{ breakInside: 'avoid' }}
            >
              <div className="relative overflow-hidden">
                <ImgPlaceholder
                  style={{
                    width: '100%',
                    aspectRatio: album.coverAspect === 'tall' ? '3/4' : (i % 3 === 1 ? '4/3' : '1/1'),
                    transition: 'transform 0.3s ease',
                    borderRadius:'8px',
                  }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'}}
                >
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{album.title}</p>
                  <p className="text-white/70 text-xs">{album.photos} фото · {album.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 text-center" style={{ background: '#F7F7F7' }}>
        <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ищите больше работ в моих соцсетях
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 max-w-md mx-auto">
          <a href="https://t.me" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-all"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
          >Подписаться в телеграм
          </a>
         <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-all"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
          >Подписаться в ВК
          </a>
        </div>
      </section>
    </div>
  );
}
