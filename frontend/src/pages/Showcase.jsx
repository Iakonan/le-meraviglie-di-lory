import { useState, useEffect, useLayoutEffect } from "react";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ShowcaseCard from "../components/ShowcaseCard";
import { FaCaretRight, FaCaretLeft, FaTimes } from "react-icons/fa";
import { fetchShowcase } from "../api";

export default function Showcase() {
    const [showcaseItems, setShowcaseItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Stato per la modale
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Recupera i dati dal backend
    useEffect(() => {
        fetchShowcase()
            .then((data) => {
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setShowcaseItems(sortedData);
            })
            .catch((error) => console.error("Errore nel recupero dei dati:", error));
    }, []);

    const totalPages = Math.ceil(showcaseItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = showcaseItems.slice(startIndex, startIndex + itemsPerPage);

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

    // Apri la modale con animazione
    const openModal = (item) => {
        setSelectedItem(item);
        setTimeout(() => {
            setIsModalVisible(true);
        }, 50);
    };

    // Chiudi la modale con transizione fluida
    const closeModal = () => {
        setIsModalVisible(false);
        setTimeout(() => {
            setSelectedItem(null);
        }, 300); // Attendi il completamento dell'animazione
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

            {/* Grid di immagini */}
            <section className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {displayedItems.map((item) => (
                    <div key={item.id} onClick={() => openModal(item)} className="cursor-pointer">
                        <ShowcaseCard image={item.image} description={item.description} price={item.price} />
                    </div>
                ))}
            </section>

            {/* Controlli Paginazione */}
            <div className="flex justify-center items-center gap-4 mt-6 mb-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-secondary-500 text-white rounded-md shadow-md hover:bg-text-500 transition ${
                        currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
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
                    className={`px-4 py-2 bg-secondary-500 text-white rounded-md shadow-md hover:bg-text-500 transition ${
                        currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    <FaCaretRight />
                </button>
            </div>

            {/* Modale con transizione fluida */}
            {selectedItem && (
                <div 
                    className={`fixed inset-0 bg-trasparent bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 ${
                        isModalVisible ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeModal} 
                >
                    <div 
                        className={`m-5 bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative transform transition-transform duration-300 ${
                            isModalVisible ? "scale-100" : "scale-90"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="absolute top-2 right-2 text-gray-700 hover:text-black" onClick={closeModal}>
                            <FaTimes size={24} />
                        </button>
                        <img src={selectedItem.image} alt={selectedItem.description} className="w-full h-auto rounded-lg mb-4" />
                        <hr className="text-secondary-500 mb-2" />
                        <h2 className="text-2xl font-bold text-black">{selectedItem.description}</h2>
                        <p className="text-xl text-gray-800 mt-2">Prezzo: €{selectedItem.price}</p>
                    </div>
                </div>
            )}

            {/* Sezione Newsletter e Footer */}
            <div className="w-full">
                <Newsletter />
                <Footer />
            </div>
        </div>
    );
}
