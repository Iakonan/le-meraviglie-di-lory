import Carousel from './Carousel';
import Footer from './Footer';
import Reviews from './Reviews';
import Sidebar from './Sidebar';
import Newsletter from './Newsletter';

export default function HomePage() {
    return (
      <div className="min-h-screen bg-primary-500 flex flex-col items-center no-underline">

        <Sidebar />
        
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
        <p className="text-lg text-text-500">
            Dolci creazioni fatte con amore e fantasia.
        </p>
        </div>

  
        <section className="gallery w-full px-4 py-8 text-center bg-bgcontrast-500">
            <h2 className="text-2xl font-semibold text-text-500">Galleria Torte</h2>
    
            <div className="mt-4 max-w-xl mx-auto">
                <Carousel />
            </div>

            <button className="mt-6 bg-secondary-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-text-500 transition cursor-pointer">
                Guarda tutte le torte
            </button>
        </section>

        <section
            className="order-section w-full min-h-[50vh] px-4 py-24 text-center bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: "url('/ordercake.jpg')" }}
        >
            <div className="bg-trasparent backdrop-blur-sm p-8 rounded-lg shadow-lg inline-block">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Ordina la tua torta personalizzata
                </h2>
                <p className="text-white mb-6">
                    Personalizza la tua torta come desideri e rendi speciale ogni occasione!
                </p>
                <button className="bg-secondary-500 text-white py-3 px-6 rounded-md shadow hover:bg-text-500 transition cursor-pointer">
                    Ordina ora
                </button>
            </div>
        </section>
        <section className="reviews w-full px-4 py-8 text-center">
            <h2 className="text-2xl font-semibold text-text-500 mb-4">Recensioni dei Clienti</h2>
                <Reviews />
        </section>

        <Newsletter />
        
        <Footer />
      </div>
      

      
    );
  }
  