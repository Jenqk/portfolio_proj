import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ImgPlaceholder from '../components/ImgPlaceholder';
import type { ToastMessage } from '../App';

type Props = {
  addToast: (text: string, type?: ToastMessage['type']) => void;
};

const sliderItems = [1, 2, 3];

function HeroSection() {
  return (
    <section className="relative w-full" style={{ height: '100vh', minHeight: 480 }}>
      <img
        src="/hero-bg.jpg"
        alt="Фотостудия Эльвиры Катковой"
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
      />

      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%)' }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
          Эльвира Каткова
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em', fontSize: '13px' }}>
          Профессиональный фотограф
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

export default function HomePage({ addToast: _addToast }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, []);

  return (
    <div className="fade-in">
      <HeroSection />

      <section className="max-w-5xl mx-auto px-4 md:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <ImgPlaceholder style={{ width: '100%', aspectRatio: '4/5', borderRadius:'8px' }} />
          </div>
          <div className="flex-1 pt-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
              Эльвира Каткова — фотограф
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Я профессиональный фотограф с опытом более 8 лет. Специализируюсь на свадебной, портретной и коммерческой съёмке. Моя главная задача — создать живые и настоящие фотографии, которые отражают вашу историю.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Работаю в Москве и выезжаю в другие города. Каждая съёмка — это уникальный проект, к которому я подхожу с полной самоотдачей и вниманием к деталям.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Верю, что лучшие фотографии рождаются тогда, когда человек чувствует себя комфортно и может быть собой.
            </p>
            <Link to="/contact">
              <button
                className="px-8 py-3 rounded text-sm font-medium text-white transition-all duration-200 ripple-container"
                style={{
                  backgroundColor: '#C9A96E',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(201,169,110,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E';
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                Связаться со мной
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-4 md:py-8">
        <div className="relative overflow-hidden" style={{ background: '#D4D4D4', height: 420 }}>
          <div ref={sliderRef} className="flex h-full">
            {sliderItems.map((_, i) => (
              <div key={i} className="flex-shrink-0 w-full h-full">
                <ImgPlaceholder style={{ width: '100%', height: '100%' }} />
              </div>
            ))}
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
            aria-label="Предыдущее фото"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
            aria-label="Следующее фото"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-10 mb-10">
          <Link to="/portfolio">
            <button
              className="px-12 py-3 rounded text-sm font-medium text-white transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              Посмотреть портфолио
            </button>
          </Link>
        </div>
        <div className="text-center py-8 px-4" style={{ background: '#F7F7F7' }}>
          <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
            Ищите больше работ в моих соцсетях
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
            >
              Подписаться в телеграм
            </a>
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
            >
              Подписаться в ВК
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
