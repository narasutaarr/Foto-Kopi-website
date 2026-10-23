import Photo from './Photo'
import Reveal from './Reveal'
import { MENU, whatsappLink } from '../data'

const rupiah = (value) => `Rp ${value.toLocaleString('id-ID')}`

export default function FeaturedMenu() {
  return (
    <section id="menu" className="menu" aria-labelledby="menu-title">
      <div className="container">
        <Reveal as="header" className="section-head">
          <h2 id="menu-title" className="display">
            Empat seduhan andalan.
          </h2>
          <p>
            Tidak ada daftar menu sepanjang novel. Sedikit pilihan, diracik serius, dan layak
            difoto. Tapi diminum dulu, ya. Anjayyy, wkwkwk.
          </p>
        </Reveal>

        <ul className="menu__grid">
          {MENU.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 90}>
              <article className="card">
                <div className="card__media">
                  <div className="card__photo">
                    <Photo
                      id={item.photo}
                      alt={item.alt}
                      widths={[360, 560, 800]}
                      sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 22vw"
                    />
                  </div>
                  <p className="price">
                    <span className="sr-only">Harga {rupiah(item.price)}</span>
                    <span aria-hidden="true">
                      {item.price / 1000}
                      <sup>K</sup>
                    </span>
                  </p>
                </div>

                <div className="card__body">
                  <p className="card__tag">{item.tag}</p>
                  <h3 className="card__name">{item.name}</h3>
                  <p className="card__desc">{item.desc}</p>
                  <a
                    className="btn btn--sm btn--block"
                    href={whatsappLink(`Halo FOTO KOPI, saya mau pesan ${item.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pesan lewat WhatsApp
                    <span className="sr-only"> untuk {item.name} (tab baru)</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
