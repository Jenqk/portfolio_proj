import { Link } from 'react-router-dom';
import { reviews } from '../data/mockData';
import ImgPlaceholder from '../components/ImgPlaceholder';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < rating ? '#C9A96E' : '#D4D4D4'}>
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.635l3.455-.505z"/>
        </svg>
      ))}
    </div>
  );
}

const featuredWorks = [
  { id: 1, aspect: '4/5', colSpan: 1, rowSpan: 2 },
  { id: 2, aspect: '1/1', colSpan: 1, rowSpan: 1 },
  { id: 3, aspect: '4/5', colSpan: 1, rowSpan: 1 },
  { id: 4, aspect: '4/5', colSpan: 1, rowSpan: 1 },
  { id: 5, aspect: '1/1', colSpan: 1, rowSpan: 1 },
  { id: 6, aspect: '4/5', colSpan: 1, rowSpan: 1 },
  { id: 7, aspect: '3/4', colSpan: 1, rowSpan: 1 },
  { id: 8, aspect: '1/1', colSpan: 1, rowSpan: 1 },
  { id: 9, aspect: '4/5', colSpan: 1, rowSpan: 1 },
];

export default function AboutPage() {
  return (
    <div className="fade-in">
      <section className="relative w-full" style={{ height: '60vh', minHeight: 300 }}>
        <img src="/hero-bg.jpg" alt="Обо мне" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>Обо мне</h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="border-t border-gray-200 mb-8" />

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
            <ImgPlaceholder style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Обо мне
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Привет! Меня зовут Эльвира, я профессиональный фотограф из Москвы. Занимаюсь фотографией более 8 лет. За это время я успела поработать с сотнями клиентов и создать тысячи фотографий, каждая из которых стала частью чьей-то истории.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Моя философия проста: лучшие фотографии — это те, на которых люди выглядят как настоящие, счастливые и живые. Я не ставлю людей в неудобные позы и не создаю искусственных ситуаций — я наблюдаю и ловлю момент.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Специализируюсь на свадебной, портретной, семейной и коммерческой съёмке. Работаю в Москве и регионах.
            </p>
            <Link to="/contact">
              <button
                className="px-8 py-3 rounded text-sm font-medium text-white transition-all duration-200"
                style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
              >
                Связаться со мной
              </button>
            </Link>
          </div>
        </div>
        <div className="border-b border-gray-200 mb-12" />
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
          Избранные работы
        </h2>
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {featuredWorks.map((work) => (
            <div key={work.id} className="mb-3 md:mb-4" style={{ breakInside: 'avoid' }}>
              <ImgPlaceholder style={{ width: '100%', aspectRatio: work.aspect, borderRadius:'8px' }} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to="/portfolio">
            <button
              className="px-10 py-3 rounded text-sm font-medium text-white transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
            >
              Посмотреть портфолио
            </button>
          </Link>
          <Link to="/contact">
            <button
              className="px-10 py-3 rounded text-sm font-medium text-white transition-all duration-200"
              style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
            >
              Связаться со мной
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12 px-4" style={{ background: '#F7F7F7' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded shadow-sm">
                <StarRating rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed my-3 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{review.content}"
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{review.clientName}</p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>{review.projectType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-10 px-4">
        <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ищите больше работ в моих соцсетях
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
          <a href="https://t.me" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-colors"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}>
            Подписаться в телеграм
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-colors"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}>
            Подписаться в ВК
          </a>
        </div>
      </section>
    </div>
  );
}
