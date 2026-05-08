import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { albums } from '../data/mockData';
import ImgPlaceholder from '../components/ImgPlaceholder';

// Generate photo count for album
function getPhotoCount(albumId: string) {
  const album = albums.find(a => a.id === albumId);
  return album ? album.photos : 12;
}

const aspectRatios = ['3/4', '1/1', '4/5', '3/4', '4/3', '1/1', '3/4', '4/5', '4/3', '1/1', '3/4', '4/5'];

export default function AlbumPage() {
  const { albumId } = useParams<{ albumId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const album = albums.find(a => a.id === albumId);
  const photoCount = getPhotoCount(albumId || '');
  const otherAlbums = albums.filter(a => a.id !== albumId).slice(0, 4);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevPhoto = () => setLightboxIdx(i => (i - 1 + photoCount) % photoCount);
  const nextPhoto = () => setLightboxIdx(i => (i + 1) % photoCount);

  return (
    <div className="fade-in">
      <section className="relative w-full" style={{ height: '50vh', minHeight: 280 }}>
        <img src="/hero-bg.jpg" alt={album?.title || 'Альбом'} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            {album?.title || 'Фотоальбом'}
          </h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="mb-2">
          <Link to="/portfolio" className="text-sm hover:underline" style={{ color: '#C9A96E', fontFamily: 'Inter, sans-serif' }}>
            ← Назад к портфолио
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {album?.title || 'Фотоальбом'}
        </h1>
        <p className="text-gray-500 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          {photoCount} фотографий · {album?.year || 2024}
        </p>
        <p className="text-gray-600 mb-8 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
          Серия работ из этой фотосессии. Каждый кадр рассказывает свою историю и запечатлевает особый момент.
        </p>

        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {Array.from({ length: photoCount }).map((_, i) => (
            <div
              key={i}
              className="mb-3 md:mb-4 overflow-hidden group cursor-pointer relative"
              style={{ breakInside: 'avoid' }}
              onClick={() => openLightbox(i)}
            >
              <ImgPlaceholder
                style={{
                  width: '100%',
                  aspectRatio: aspectRatios[i % aspectRatios.length],
                  transition: 'transform 0.3s ease',
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <svg className="opacity-0 group-hover:opacity-80 transition-opacity" width="32" height="32" viewBox="0 0 32 32" fill="white">
                  <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 22C10.5 26 6 21.5 6 16S10.5 6 16 6s10 4.5 10 10-4.5 10-10 10zm1-15h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm font-semibold text-gray-600 italic" style={{ fontFamily: 'Playfair Display, serif' }}>Другие фотосессии</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {otherAlbums.map(a => (
            <Link key={a.id} to={`/portfolio/${a.id}`} className="group block overflow-hidden">
              <div className="relative overflow-hidden">
                <ImgPlaceholder style={{ width: '100%', aspectRatio: '3/4' }} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <p className="text-xs mt-1.5 text-gray-600 truncate" style={{ fontFamily: 'Inter, sans-serif' }}>{a.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(13,13,13,0.95)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl w-10 h-10 flex items-center justify-center"
            onClick={closeLightbox}
            aria-label="Закрыть"
          >×</button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center"
            onClick={e => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Предыдущее"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className="max-w-3xl max-h-[80vh] w-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <ImgPlaceholder style={{ width: '100%', maxHeight: '80vh', aspectRatio: '4/3' }} />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center"
            onClick={e => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Следующее"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            {lightboxIdx + 1} / {photoCount}
          </div>
        </div>
      )}
    </div>
  );
}
