import { SLOGANS } from '../data'

function Band({ tone, items }) {
  return (
    <div className={`marquee__band marquee__band--${tone}`}>
      <div className="marquee__track">
        {/* Dua salinan identik supaya putarannya mulus; salinan kedua disembunyikan dari pembaca layar. */}
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__group" aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((slogan) => (
              <li key={slogan}>{slogan}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  const reversed = [...SLOGANS].reverse()

  return (
    <section className="marquee" aria-label="Slogan FOTO KOPI">
      <Band tone="orange" items={SLOGANS} />
      <Band tone="black" items={reversed} />
    </section>
  )
}
