// Semua konten dummy ada di sini supaya komponen tetap bersih.
// Ganti alamat, nomor WhatsApp, dan tautan sosial dengan data asli saat siap rilis.


export const BRAND = {
  name: 'FOTO KOPI',
  whatsapp: '6281200000000', // format internasional tanpa +
  phone: '0812-0000-0000',
  address: ['Jl. Kenangan No. 17', 'Kawasan Kota Lama'],
}

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jl. Kenangan No. 17, Bintaro',
)}`

export const whatsappLink = (message) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`

export const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Cerita', href: '#cerita' },
  { label: 'Kunjungi', href: '#kunjungi' },
]

// ID foto Unsplash. Komponen Photo menyusun URL-nya dan punya fallback bila gagal dimuat.
export const PHOTOS = {
  hero: 'photo-1495474472287-4d71bcdd2085',
  beans: 'photo-1447933601403-0c6688de566e',
  iced: 'photo-1517701604599-bb29b565090c',
  espresso: 'photo-1510707577719-ae7c14805e3a',
  pourOver: 'photo-1544787219-7f47ccb76574',
  latte: 'photo-1509042239860-f550ce710b93',
  then: 'Users/nrst/Downloads/foto-kopi/src/assets/20260901_180143.jpg',
  cafe: 'photo-1554118811-1e0d58224f24',
}

export const MENU = [
  {
    id: 'kopi-susu',
    name: 'Es Kopi Susu Asoy',
    desc: 'Espresso pekat, susu segar, gula aren cair. Manis mantap yang tau batas.',
    price: 25000,
    tag: 'Terlaris',
    photo: PHOTOS.iced,
    alt: 'Segelas es kopi susu dengan es batu',
  },
  {
    id: 'espresso-tonik',
    name: 'Espresso Melek',
    desc: 'Satu shot espresso, pake soda tonik dan perasan jeruk. Seger dulu, pahit belakangan.',
    price: 30000,
    tag: 'Segar',
    photo: PHOTOS.espresso,
    alt: 'Dua cangkir espresso di atas meja',
  },
  {
    id: 'v60',
    name: 'V60 Rill',
    desc: 'Best biji buat bulan ini, diseduh manual per cangkir. Mantep dah pokoknya.',
    price: 35000,
    tag: 'Seduh manual',
    photo: PHOTOS.pourOver,
    alt: 'Kopi diseduh manual dengan teko leher angsa',
  },
  {
    id: 'flat-white',
    name: 'Flat White Kane',
    desc: 'Dua shot, susu microfoam tipis, disajikan di cangkir keramik tebal.',
    price: 30000,
    tag: 'Hangat',
    photo: PHOTOS.latte,
    alt: 'Secangkir flat white dengan latte art di atas meja kayu',
  },
]

export const SLOGANS = [
  'Seduh dulu, foto kemudian',
  'Kopi pekat, kenangan lekat',
  'Disangrai kecil-kecilan',
  'Analog di hati, espresso di tangan',
  'Minum pelan-pelan',
  'Buka tiap hari sampai larut',
]

export const HOURS = [
  { days: 'Senin sampai Jumat', time: '07.00 - 02.00' },
  { days: 'Sabtu dan Minggu', time: '09.00 - 05.00' },
  { days: 'Hari libur nasional', time: '09.00 - 20.00' },
]

// URL sosial sengaja mengarah ke halaman utama platform karena akunnya dummy.
export const SOCIALS = [
  { label: 'Instagram', handle: '@narasutaaa', href: 'https://www.instagram.com/narasutaaa?mdxt=bHMyOGJmZ2ptOXZv' },
  { label: 'TikTok', handle: '@fotokopi.id', href: 'https://www.tiktok.com/' },
  {
    label: 'WhatsApp',
    handle: BRAND.phone,
    href: whatsappLink('Halo FOTO KOPI, saya mau tanya.'),
  },
]
