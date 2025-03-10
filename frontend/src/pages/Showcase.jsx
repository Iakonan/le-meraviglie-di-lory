import { useState, useLayoutEffect } from "react";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ShowcaseCard from "../components/ShowcaseCard";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

export default function Showcase() {
    const showcaseItems = [
        { id: 1, image: "/cake1.jpg", description: "Torta Frozen", price: "40.00" },
        { id: 2, image: "/cake2.jpg", description: "Torta Compleanno", price: "50.00" },
        { id: 3, image: "/cake3.jpeg", description: "Torta Battesimo", price: "55.00" },
        { id: 4, image: "/cake4.jpeg", description: "Torta Anniversario", price: "60.00" },
        { id: 5, image: "/cake5.jpeg", description: "Torta Cioccolato", price: "45.00" },
        { id: 6, image: "/cake6.jpeg", description: "Torta Red Velvet", price: "50.00" },
        { id: 7, image: "/cake7.jpeg", description: "Torta Frutta", price: "55.00" },
        { id: 8, image: "/cake8.jpeg", description: "Torta Elegante", price: "60.00" },
        { id: 9, image: "/cake9.jpeg", description: "Torta Nuziale", price: "70.00" },
        { id: 10, image: "/cake10.jpeg", description: "Torta Unicorn", price: "65.00" },
        { id: 11, image: "/cake11.jpeg", description: "Torta Arcobaleno", price: "55.00" },
        { id: 12, image: "/cake12.jpeg", description: "Torta Rosa", price: "50.00" },
        { id: 13, image: "/cake13.jpeg", description: "Torta Classica", price: "45.00" },
        { id: 14, image: "/cake14.jpeg", description: "Torta Speciale", price: "60.00" },
        { id: 15, image: "/cake15.jpeg", description: "Torta Golosa", price: "70.00" },
    ];

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(showcaseItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = showcaseItems.slice(startIndex, startIndex + itemsPerPage);

    // 🔹 Scroll in cima alla pagina quando si cambia pagina
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="relative min-h-screen bg-primary-500 flex flex-col items-center">
            <Sidebar />

            {/* Header con titolo e descrizione */}
            <header className="text-center py-12 w-full px-20 bg-secondary-500 mb-5">
                <h1 className="text-4xl font-bold text-black">Vetrina</h1>
                <p className="text-lg text-black mt-2">
                    Scopri alcune delle nostre creazioni e lasciati ispirare per la tua torta perfetta!
                </p>
            </header>

            {/* Grid di immagini con tre colonne su desktop */}
            <section className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">


                {displayedItems.map((item) => (
                    <ShowcaseCard key={item.id} image={item.image} description={item.description} price={item.price} />
                ))}
            </section>



            {/* Controlli Paginazione */}
            <div className="flex justify-center items-center gap-4 mt-6 mb-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-secondary-500 text-white rounded-md shadow-md hover:bg-text-500 transition ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    <FaCaretLeft />
                </button>
                <span className="text-black font-semibold">
                    Pagina {currentPage} di {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-secondary-500 text-white rounded-md shadow-md hover:bg-text-500 transition ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    <FaCaretRight />
                </button>
            </div>

            {/* 🔹 Sezione separata per Newsletter e Footer per larghezza completa */}
            <div className="w-full">
                <Newsletter />
                <Footer />
            </div>
        </div>
    );
}
