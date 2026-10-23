import { useState } from 'react'

const unsplash = (id, width) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`

/**
 * Foto Unsplash yang mengisi parent terdekat yang ber-position (lihat .photo di CSS).
 * Kalau gambar gagal dimuat, tampil blok bermotif dengan teks alt supaya layout tetap terbaca.
 */
export default function Photo({
  id,
  alt,
  widths = [480, 800, 1200],
  sizes = '100vw',
  priority = false,
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`photo ${className}`}>
      {failed ? (
        <span className="photo__fallback" role="img" aria-label={alt}>
          <span>{alt}</span>
        </span>
      ) : (
        <img
          src={unsplash(id, widths[1] ?? widths[0])}
          srcSet={widths.map((w) => `${unsplash(id, w)} ${w}w`).join(', ')}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
