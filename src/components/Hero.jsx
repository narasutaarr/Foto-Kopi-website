import Photo from './Photo'
import { PHOTOS } from '../data'

// Titik poligon bintang untuk badge harga (dihitung sekali, tidak perlu string panjang).
const starPoints = (spikes, outer, inner, center = 50) =>
  Array.from({ length: spikes * 2 }, (_, i) => {
    const radius = i % 2 ? inner : outer
    const angle = (Math.PI / spikes) * i - Math.PI / 2
    return `${(center + radius * Math.cos(angle)).toFixed(2)},${(center + radius * Math.sin(angle)).toFixed(2)}`
  }).join(' ')

const BURST = starPoints(14, 47, 38)

const TITLE_LINES = ['Seduh.', 'Potret.', 'Nikmati.']

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">Kedai kopi independen di bekas tempat nongkrong</p>

          <h1 id="hero-title" className="hero__title">
            {TITLE_LINES.map((line, index) => (
              <span key={line} className="hero__line" style={{ '--i': index }}>
                <span>{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero__lead">
            Biji disangrai kecil-kecilan, diseduh per cangkir, dan disajikan di ruangan yang
            beberapa tahun lalu dipakai untuk foto kenangan.
          </p>

          <div className="hero__cta">
            <a className="btn" href="#menu">
              Lihat menu
            </a>
            <a className="btn btn--ghost" href="#kunjungi">
              Cari lokasi
            </a>
          </div>

          <ul className="hero__facts">
            <li>
              <strong>07-02</strong>
              Jam buka
            </li>
            <li>
              <strong>12</strong>
              Biji lokal
            </li>
            <li>
              <strong>36</strong>
              Resep, satu rol
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__sun" aria-hidden="true" />

          <div className="hero__arch">
            <Photo
              id={PHOTOS.hero}
              alt="Secangkir kopi dengan latte art di atas meja"
              widths={[600, 900, 1300]}
              sizes="(max-width: 980px) 90vw, 45vw"
              priority
            />
          </div>

          <figure className="polaroid">
            <div className="polaroid__img">
              <Photo
                id={PHOTOS.beans}
                alt="Biji kopi sangrai di dalam cangkir"
                widths={[300, 500, 700]}
                sizes="(max-width: 980px) 40vw, 18vw"
              />
            </div>
            <figcaption>Biji bulan ini, sangrai medium</figcaption>
          </figure>

          <div className="stamp" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="stamp-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
              </defs>
              <text className="stamp__text" textLength="224" lengthAdjust="spacing">
                <textPath href="#stamp-circle">TEMPAT NONGKRONG 2023 • KEDAI KOPI 2026 •</textPath>
              </text>
              <circle cx="50" cy="50" r="20" fill="var(--orange)" />
              <ellipse cx="50" cy="50" rx="10" ry="14" fill="var(--black)" transform="rotate(35 50 50)" />
              <path d="M44 62c8-8 4-16 12-24" stroke="var(--orange)" strokeWidth="2.5" fill="none" />
            </svg>
          </div>

          <div className="burst">
            <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
              <polygon
                points={BURST}
                fill="var(--orange)"
                stroke="var(--black)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
            <p className="burst__text">
              <span>Hari ini</span>
              <strong>Rp 28K</strong>
              <span>Es kopi susu</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
