import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TrustBand from './components/TrustBand/TrustBand'
import ProductOverview from './components/ProductOverview/ProductOverview'
import ProofSection from './components/ProofSection/ProofSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Categories from './components/Categories/Categories'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <ProductOverview />
        <ProofSection />
        <HowItWorks />
        <Categories />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
