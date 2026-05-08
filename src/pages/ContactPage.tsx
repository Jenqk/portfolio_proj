import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgPlaceholder from '../components/ImgPlaceholder';
import type { ToastMessage } from '../App';

type Props = {
  addToast: (text: string, type?: ToastMessage['type']) => void;
};

const shootTypes = [
  'Свадебная съёмка',
  'Портретная съёмка',
  'Семейная съёмка',
  'Коммерческая съёмка',
  'Репортажная съёмка',
  'Детская съёмка',
  'Другое',
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  shootType: string;
  preferredDate: string;
  message: string;
  consent: boolean;
};

export default function ContactPage({ addToast }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    shootType: '',
    preferredDate: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.email.trim()) e.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Некорректный email';
    if (!form.shootType) e.shootType = 'Выберите тип съёмки';
    if (!form.message.trim()) e.message = 'Введите сообщение';
    if (!form.consent) e.consent = 'Необходимо согласие';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    addToast('Ваша заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.', 'success');
    setForm({ name: '', email: '', phone: '', shootType: '', preferredDate: '', message: '', consent: false });
    setErrors({});
    setSubmitting(false);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full border-b py-2 text-sm outline-none transition-colors bg-transparent ${
      errors[field] ? 'border-red-400' : 'border-gray-300 focus:border-amber-400'
    }`;

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

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Свяжитесь со мной
        </h1>
        <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Готова ответить на ваши вопросы и обсудить детали съёмки. Заполните форму или напишите напрямую в мессенджер.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 max-w-md mx-auto">
          <a href="https://t.me" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-all"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
          >
            Подписаться в телеграм
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded text-sm font-medium text-white text-center transition-all"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
          >
            Подписаться в ВК
          </a>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Отправить сообщение на почту
          </h3>
          <a
            href="mailto:Katkova68@gmail.com"
            className="inline-block px-8 py-3 rounded text-sm font-medium text-white transition-all"
            style={{ backgroundColor: '#C9A96E', fontFamily: 'Inter, sans-serif' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'}
          >
            Отправить письмо
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Администратор сайта
            </h2>
            <div className="space-y-3 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>Каткова Эльвира Викторовна</p>
              <p>Email: <a href="mailto:Katkova68@gmail.com" className="hover:underline" style={{ color: '#C9A96E' }}>Katkova68@gmail.com</a></p>
              <p>Телефон: +7 (999) 999-999-99</p>
              <p>Москва, Россия</p>
              <p>Работаю по всей России</p>
              <p>Выезд за рубеж по договорённости</p>
              <p>Время ответа: до 24 часов</p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Отправить заявку
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <input
                  type="text"
                  placeholder="Имя *"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  className={inputClass('name')}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  className={inputClass('email')}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  className={inputClass('phone')}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <select
                  value={form.shootType}
                  onChange={e => setForm(p => ({ ...p, shootType: e.target.value }))}
                  className={`${inputClass('shootType')} bg-transparent`}
                  style={{ fontFamily: 'Inter, sans-serif', color: form.shootType ? '#1A1A1A' : '#9CA3AF' }}
                >
                  <option value="" disabled>Тип съёмки *</option>
                  {shootTypes.map(t => (
                    <option key={t} value={t} style={{ color: '#1A1A1A' }}>{t}</option>
                  ))}
                </select>
                {errors.shootType && <p className="text-red-500 text-xs mt-1">{errors.shootType}</p>}
              </div>

              <div>
                <input
                  type="date"
                  placeholder="Желаемая дата съёмки"
                  value={form.preferredDate}
                  onChange={e => setForm(p => ({ ...p, preferredDate: e.target.value }))}
                  className={inputClass('preferredDate')}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <textarea
                  placeholder="Ваше сообщение *"
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  rows={4}
                  className={`${inputClass('message')} resize-none`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div>
                <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={e => setForm(p => ({ ...p, consent: e.target.checked }))}
                    className="mt-0.5 flex-shrink-0 accent-amber-500"
                  />
                  <span>
                    Я даю согласие на обработку персональных данных в соответствии с условиями{' '}
                    <Link to="/privacy" className="underline hover:text-amber-600 transition-colors">политики конфиденциальности</Link>
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3 rounded text-sm font-medium text-white transition-all duration-200 flex items-center gap-2"
                  style={{
                    backgroundColor: submitting ? '#D3D3D3' : '#C9A96E',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLElement).style.backgroundColor = '#B8945D'; }}
                  onMouseLeave={e => { if (!submitting) (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'; }}
                >
                  {submitting && (
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="30 70"/>
                    </svg>
                  )}
                  {submitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
