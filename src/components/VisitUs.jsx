import Photo from './Photo'
import Reveal from './Reveal'
import { BRAND, HOURS, MAPS_URL, PHOTOS, whatsappLink } from '../data'

export default function VisitUs() {
  return (
    <section id="kunjungi" className="visit" aria-labelledby="visit-title">
      <div className="container visit__grid">
        <div className="visit__intro">
          <Reveal>
            <h2 id="visit-title" className="display">
              Singgah dulu, fotonya nanti.
            </h2>
            <p className="visit__text">
              Tidak perlu reservasi. Datang, ambil bangku dekat jendela, dan biarkan cahaya sore
              bekerja.
            </p>
            <div className="visit__cta">
              <a className="btn" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                Buka petunjuk arah
                <span className="sr-only"> (tab baru)</span>
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappLink('Halo FOTO KOPI, saya mau datang. Ada bangku kosong?')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya bangku kosong
                <span className="sr-only"> lewat WhatsApp (tab baru)</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="visit__photo" delay={100}>
            <Photo
              id={PHOTOS.cafe}
              alt="Interior kedai kopi yang terang dengan meja dan bangku kayu"
              widths={[480, 800, 1100]}
              sizes="(max-width: 980px) 90vw, 45vw"
            />
          </Reveal>
        </div>

        <Reveal as="aside" className="ticket" delay={120} aria-label="Alamat dan jam buka">
          <div className="ticket__head">
            <span>Tiket singgah</span>
            <span>Gratis</span>
          </div>

          <div className="ticket__body">
            <h3>Alamat</h3>
            <address>
              {BRAND.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <a href={`tel:${BRAND.phone.replace(/-/g, '')}`}>{BRAND.phone}</a>
            </address>

            <div className="ticket__perf" aria-hidden="true" />

            <h3>Jam buka</h3>
            <dl className="hours">
              {HOURS.map((row) => (
                <div key={row.days}>
                  <dt>{row.days}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>

            <div className="ticket__barcode" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
