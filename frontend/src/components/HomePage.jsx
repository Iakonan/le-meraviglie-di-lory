import Carousel from './Carousel';
import Footer from './Footer';
import Reviews from './Reviews';

export default function HomePage() {
    return (
      <div className="min-h-screen bg-rose-200 flex flex-col items-center no-underline">
        
        <header 
            className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('/hero.jpg')` }}
        >
        <img
            src="/logo.jpg"
            alt="Logo Le Meraviglie di Lory"
            className="h-36 md:h-56 ld:h-64 w-auto rounded-md shadow-lg"
        />
        </header>

        <div className="px-4 py-6 text-center">
        <p className="text-lg text-gray-700">
            Dolci creazioni fatte con amore e fantasia.
        </p>
        </div>

  
        <section className="gallery w-full px-4 py-8 text-center bg-rose-50">
            <h2 className="text-xl font-semibold text-gray-800">Galleria Torte</h2>
    
            <div className="mt-4 max-w-xl mx-auto">
                <Carousel />
            </div>

            <button className="mt-6 bg-emerald-300 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-600 transition">
                Guarda tutte le torte
            </button>
        </section>

        <section
            className="order-section w-full px-4 py-16 text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/ordercake.jpg')" }}
            >
            <div className="bg-trasparent backdrop-blur-sm p-6 rounded-lg shadow-lg inline-block">
                <h2 className="text-2xl font-semibold text-white mb-4">
                Ordina la tua torta personalizzata
                </h2>
                <p className="text-white mb-6">
                Personalizza la tua torta come desideri e rendi speciale ogni occasione!
                </p>
                <button className="bg-pink-500 text-white py-3 px-6 rounded-md shadow hover:bg-pink-600 transition">
                Ordina ora
                </button>
            </div>
        </section>



  
        <section className="reviews w-full px-4 py-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recensioni dei Clienti</h2>
                <Reviews />
        </section>
        
        <Footer />
      </div>

      
    );
  }
  