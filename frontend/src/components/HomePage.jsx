import { Link } from "react-router-dom"; // Importiamo Link
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
                style={{ backgroundImage: `url('/loryheader.jpg')` }}
            >
                <img
                    src="/logo2.png"
                    alt="Logo Le Meraviglie di Lory"
                    className="h-36 md:h-96 ld:h-64 w-auto rounded-md"
                />
            </header>

            <div className="px-4 py-6 text-center">
                <p className="text-4xl text-font-500">
                    Dolci creazioni fatte con amore e fantasia.
                </p>
            </div>

            {/* Sezione Vetrina con bottone per vedere tutte le foto */}
            <section className="gallery w-full px-4 py-8 text-center bg-secondary-500">
                <h2 className="text-4xl font-semibold text-black">Vetrina</h2>

                <div className="mt-4 max-w-xl mx-auto">
                    <Carousel />
                </div>

                <Link to="/vetrina">
                    <button className="mt-6 bg-primary-500 text-black py-2 px-4 rounded-md shadow-md hover:bg-text-500 hover:text-white transition cursor-pointer">
                        Tutte le foto
                    </button>
                </Link>
            </section>

            <br />

            {/* Sezione per ordinare una torta */}
            <section
                className="order-section w-full min-h-[50vh] px-4 py-24 text-center bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: "url('/orderimg.jpg')" }}
            >
                <div className="bg-trasparent backdrop-blur-sm p-8 rounded-lg shadow-lg inline-block">
                    <p className="text-black mb-6 md:text-5xl">
                        Personalizza la tua torta come desideri e rendi speciale ogni occasione!
                    </p>
                    <button className="bg-secondary-500 text-white py-3 px-6 rounded-md shadow hover:bg-text-500 transition cursor-pointer">
                        ORDINA ORA LA TUA TORTA
                    </button>
                </div>
            </section>

            {/* Sezione Recensioni */}
            <section className="reviews w-full px-4 py-8 text-center">
                <h2 className="text-2xl font-semibold text-black md:text-4xl mb-4">Recensioni dei Clienti</h2>
                <Reviews />
            </section>

            <Newsletter />

            <Footer />
        </div>
    );
}
