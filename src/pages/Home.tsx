import BookCatalog from '../component/BookList/BookCatalogue/BookCatalogue'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import SubscriptionPage from '../component/Subscription/SubscriptionPage'
import HeroSection from './../component/Herosection/Herosection'

export default function Home() {
  return (
    <section>
        <Navbar />
        <div>
            <HeroSection title="Bienvenue à BiblioSphere"
                description="Le livre, au-delà du simple plaisir de lire, 
          est un compagnon précieux dans la lutte contre l’illettrisme 
          et un outil puissant pour le développement global de l’individu, 
          tant sur le plan intellectuel que personnel.Il favorise l'acquisition 
          de connaissances, stimule la pensée critique et enrichit 
          la compréhension du monde, contribuant ainsi à l'épanouissement de 
          l'esprit et à la construction d'une société éclairée."
                buttonText="Visiter le Bibliothèque"
                imageUrl="./../public/images/imageHerosection.png" />

        <BookCatalog />
        <SubscriptionPage />
        <Footer />

        </div>
    </section>
  )
}
