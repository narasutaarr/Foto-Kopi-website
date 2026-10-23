import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedMenu from './components/FeaturedMenu'
import BrandStory from './components/BrandStory'
import Marquee from './components/Marquee'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>
      <Navbar />
      <main id="konten">
        <Hero />
        <FeaturedMenu />
        <BrandStory />
        <Marquee />
        <VisitUs />
      </main>
      <Footer />
    </>
  )
}
