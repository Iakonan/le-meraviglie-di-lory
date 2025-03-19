import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ChiSono() {
  return (
    <div className="relative min-h-screen bg-primary-500 flex flex-col items-center">
      <Sidebar />

      {/* Header con sfondo a tutta larghezza */}
      <header className="text-center py-12 w-full px-20 bg-secondary-500 mb-5">
        <h1 className="text-4xl font-bold text-black">Chi Sono</h1>
        <p className="text-lg text-black mt-2">
          La mia passione per la pasticceria e l'amore per i dettagli rendono ogni dolce unico!
        </p>
      </header>

      {/* Grid per testo e immagini (come pagina di giornale) */}
      <section className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-5">
        {/* Sezione 1 - Immagine a sinistra, Testo a destra */}
        <img
          src="/loryheader.jpg"
          alt="Passione per la pasticceria"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">La mia passione</h2>
          <p className="text-lg text-gray-800">
            Fin da bambina ho amato creare dolci unici. Ogni torta è un'opera d'arte, fatta con amore e cura.
          </p>
        </div>

        {/* Sezione 2 - Testo a sinistra, Immagine a destra */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredienti di qualità</h2>
          <p className="text-lg text-gray-800">
            Uso solo ingredienti selezionati per garantire il massimo della qualità e del gusto in ogni dolce.
          </p>
        </div>
        <img
          src="/loryheader.jpg"
          alt="Ingredienti di qualità"
          className="rounded-lg shadow-lg"
        />

        {/* Sezione 3 - Immagine a sinistra, Testo a destra */}
        <img
          src="/loryheader.jpg"
          alt="Esperienza nella pasticceria"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Esperienza e Creatività</h2>
          <p className="text-lg text-gray-800">
            Con anni di esperienza, realizzo dolci personalizzati per ogni occasione speciale, unendo creatività e sapore.
          </p>
        </div>

        {/* Sezione 4 - Testo a sinistra, Immagine a destra */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Perché scegliere me?</h2>
          <p className="text-lg text-gray-800">
            Ogni dolce racconta una storia unica, pensata per emozionare e sorprendere chi lo assaggia.
          </p>
        </div>
        <img
          src="/loryheader.jpg"
          alt="Torte personalizzate"
          className="rounded-lg shadow-lg"
        />
      </section>
      <section className="w-full max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Card Contatti */}
        <div className="flex justify-center">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center w-full max-w-md">
            <h2 className="text-2xl font-bold text-black mb-4">Contattami</h2>
            <p className="text-lg text-gray-800 mb-2 flex items-center justify-center gap-2">
              <FaPhone className="text-secondary-500" /> +39 333 123 4567
            </p>
            <p className="text-lg text-gray-800 mb-2 flex items-center justify-center gap-2">
              <FaEnvelope className="text-secondary-500" /> info@pasticceria.it
            </p>
            <p className="text-lg text-gray-800 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-secondary-500" /> Via dei Dolci, 10 - Milano
            </p>
          </div>
        </div>

        {/* Immagine contatto - visibile solo su Desktop */}
        <div className="hidden md:block">
          <img
            src="/logo2.png"
            alt="Contattami"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* 🔹 Sezione Newsletter e Footer (larghezza completa) */}
      <div className="w-full mt-10">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
