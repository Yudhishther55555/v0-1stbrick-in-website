import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import USP from "@/components/usp"
import Pricing from "@/components/pricing"
import Software from "@/components/software"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <USP />
      <Software />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
