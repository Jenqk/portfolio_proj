import { Link } from 'react-router-dom';
import { useState } from 'react';
import { services } from '../data/mockData';
import ImgPlaceholder from '../components/ImgPlaceholder';
import type { ToastMessage } from '../App';

type Props = {
  addToast: (text: string, type?: ToastMessage['type']) => void;
};

export default function ServicesPage({ addToast: _addToast }: Props) {
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  return (
    <div className="fade-in">
      <section className="relative w-full" style={{ height: '60vh', minHeight: 300 }}>
        <img src="/hero-bg.jpg" alt="Услуги" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>Услуги и цены</h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        {services.map((service, si) => (
          <div
            key={service.id}
            className={`flex flex-col ${si % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 items-start`}
          >
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {service.description}
              </p>
              <div className="flex flex-col gap-4">
                {service.plans.map(plan => (
                  <div key={plan.name} className="border border-gray-200 p-5 hover:border-amber-400 rounded transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-base" style={{ fontFamily: 'Inter, sans-serif' }}>{plan.name}</h3>
                        <p className="text-xs text-gray-500">{plan.duration}</p>
                      </div>
                      <span className="text-xl font-bold" style={{ color: '#C9A96E', fontFamily: 'Playfair Display, serif' }}>
                        {plan.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                            <path d="M2 7l3.5 3.5L12 3" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/5 flex-shrink-0">
              <ImgPlaceholder style={{ width: '100%', aspectRatio: '4/3', borderRadius:'8px'}} />
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Свяжитесь и закажите съёмку
        </h2>
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="md:w-1/3 flex-shrink-0">
            <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Заполните контактную форму и не забудьте указать контактный email для обратной связи.<br/><br/>
              Или напишите мне в Телеграм или ВК.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                className="py-3 rounded text-sm font-medium text-white text-center transition-all"
                style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}>
                Телеграм
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
                className="py-3 rounded text-sm font-medium text-white text-center transition-all"
                style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}>
                ВКонтакте
              </a>
            </div>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-amber-400 transition-colors bg-transparent"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <input
                type="text"
                placeholder="E-mail / Телефон"
                value={formData.contact}
                onChange={e => setFormData(p => ({ ...p, contact: e.target.value }))}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-amber-400 transition-colors bg-transparent"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                rows={4}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-amber-400 transition-colors bg-transparent resize-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  className="mt-0.5 flex-shrink-0 accent-amber-500"
                />
                <span>
                  Я даю согласие на обработку персональных данных в соответствии с условиями{' '}
                  <Link to="/privacy" className="underline hover:text-amber-600 transition-colors">политики конфиденциальности</Link>
                </span>
              </label>
              <div className="flex justify-end">
                <Link to="/contact">
                  <button
                    type="button"
                    className="px-8 py-3 rounded text-sm font-medium text-white transition-all"
                    style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
                  >
                    Отправить сообщение
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
