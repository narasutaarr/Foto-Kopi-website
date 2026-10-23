import { BRAND, NAV_LINKS, SOCIALS } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__blurb">
            Kedai kopi independen di bekas tongkrongan. Disangrai kecil-kecilan, diseduh pelan.
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="footer__title">Jelajahi</h2>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Ikuti kami</h2>
          <ul className="footer__list">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <span>{social.label}</span>
                  <span className="footer__handle">{social.handle}</span>
                  <span className="sr-only"> (tab baru)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bar">
        <p>
          &copy; {year} {BRAND.name}. Semua data di situs ini hanya untuk dummy project developer.
        </p>
        <a href="#top">Kembali ke atas</a>
      </div>

      <p className="footer__wordmark" aria-hidden="true">
        FOTO KOPI
      </p>
    </footer>
  )
}
