import Photo from './Photo'
import Reveal from './Reveal'
import { PHOTOS } from '../data'

const STATS = [
  { value: '2023', label: 'Tempat nongkrong setelah nugas' },
  { value: '2026', label: 'Seduhan pertama keluar, temani nugas' },
  { value: '36', label: 'Resep, sebanyak frame satu rol film' },
]

export default function BrandStory() {
  return (
    <section id="cerita" className="story" aria-labelledby="story-title">
      <div className="container story__grid">
        <Reveal as="figure" className="story__media">
          <div className="story__disc" aria-hidden="true" />
          <div className="story__photo">
            <Photo
              id={PHOTOS.then}
              alt="Dokumentasi 2023"
              widths={[480, 760, 1000]}
              sizes="(max-width: 980px) 90vw, 40vw"
            />
          </div>
          <figcaption>Meja seduh berdiri di bekas kamar gelap. Bau fixer diganti bau kopi.</figcaption>
        </Reveal>

        <div className="story__copy">
          <Reveal>
            <h2 id="story-title" className="display">
              Dari kamar gelap ke kamar seduh.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="story__lead">
              Sebelum jadi kedai kopi, ruangan sempit di sudut Kota Lama ini adalah tempat nongkrong favorit anak-anak sekitar. Tempat orang-orang biasa kumpul, cerita random, dan numpang rebahan dari sore sampai malam tanpa tahu waktu.
            </p>
            <p>
              Tahun 2026 kami mengambil alih kuncinya. Sudut yang biasa kita pakai bermain ps berubah jadi ruang seduh, tumpukan kaset game diganti rak biji kopi, dan mesin espresso sekarang berdiri persis di tempat kami dulu biasa lesehan.
            </p>
            <p>
              Kami masih percaya hal yang sama: momen bagus tidak boleh buru-buru. Kopi disangrai kecil-kecilan, diseduh per cangkir, dan disajikan selagi hangat. Cerita boleh. Minum dulu.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="story__quote">
              Kopi enak itu seperti foto bagus: butuh cahaya, waktu, dan sedikit kesabaran.
            </blockquote>
          </Reveal>

          <Reveal as="dl" className="story__stats" delay={160}>
            {STATS.map((stat) => (
              <div key={stat.value}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
