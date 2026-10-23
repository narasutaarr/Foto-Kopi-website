import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from '../data'

function LogoMark() {
  return (
    <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="18" fill="var(--orange)" stroke="var(--black)" strokeWidth="3" />
      <circle cx="20" cy="20" r="9" fill="var(--black)" />
      <path d="M20 11a9 9 0 0 1 0 18z" fill="var(--cream)" />
      <circle cx="20" cy="20" r="3" fill="var(--orange)" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="logo" href="#top" aria-label="FOTO KOPI, kembali ke atas" onClick={close}>
          <LogoMark />
          <span>
            FOTO <span className="logo__alt">KOPI</span>
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav__bars" aria-hidden="true" />
        </button>

        <nav id="nav-panel" className={`nav__panel ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--sm" href="#kunjungi" onClick={close}>
            Kunjungi kami
          </a>
        </nav>
      </div>
    </header>
  )
}
