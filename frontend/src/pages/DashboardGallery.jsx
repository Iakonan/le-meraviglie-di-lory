import { useState, useEffect, useLayoutEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ConfirmModal from "../components/ConfirmModal";
import ShowcaseCard from "../components/ShowcaseCard";
import { FaCaretRight, FaCaretLeft, FaTimes } from "react-icons/fa";
import { fetchShowcase, addShowcaseImage, deleteShowcaseImage } from "../api";

export default function DashboardGallery() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Paginazione
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = images.slice(startIndex, startIndex + itemsPerPage);

  // 🔄 Carica le immagini dal backend e le ordina per data di creazione
  useEffect(() => {
    fetchShowcase()
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Ordine decrescente
        setImages(sortedData);
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  // 🔹 Scroll in cima quando si cambia pagina
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // 📤 Aggiunge una nuova immagine
  const handleAddImage = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!newImage || newDescription.trim() === "" || newPrice.trim() === "") {
      setErrorMessage("Tutti i campi sono obbligatori.");
      return;
    }

    const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedFormats.includes(newImage.type)) {
      setErrorMessage("Formato immagine non valido. Usa JPEG, JPG o PNG.");
      return;
    }

    const formData = new FormData();
    formData.append("image", newImage);
    formData.append("description", newDescription);
    formData.append("price", newPrice);

    try {
      const addedImage = await addShowcaseImage(formData);
      setImages([addedImage, ...images]); // Aggiunge in cima
      setNewImage(null);
      setNewDescription("");
      setNewPrice("");
      setSuccessMessage("Immagine aggiunta con successo!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // 🗑️ Elimina un'immagine con gestione errori
  const confirmDelete = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (imageToDelete !== null) {
      try {
        await deleteShowcaseImage(imageToDelete);
        setImages(images.filter(image => image.id !== imageToDelete));
        setImageToDelete(null);
        setIsModalOpen(false);
        setSuccessMessage("Immagine eliminata con successo!");
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-black text-center mb-6">Gestione Vetrina</h1>

      {errorMessage && <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">{errorMessage}</div>}
      {successMessage && <div className="bg-green-500 text-white p-2 rounded-md text-center mb-4">{successMessage}</div>}

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:gap-4">
        <input type="file" accept="image/jpeg,image/jpg,image/png" className="border border-gray-300 p-2 rounded-md md:w-1/4 w-full"
          onChange={(e) => setNewImage(e.target.files[0])} />
        <input type="text" placeholder="Descrizione breve" className="border border-gray-300 p-2 rounded-md md:w-1/4 w-full"
          value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        <input type="number" placeholder="Prezzo (€)" className="border border-gray-300 p-2 rounded-md md:w-1/6 w-full"
          value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        <button onClick={handleAddImage} className="bg-secondary-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-text-500 transition md:w-1/6 w-full mt-2 md:mt-0"
          disabled={!newImage || newDescription.trim() === "" || newPrice.trim() === ""}>
          Aggiungi
        </button>
      </div>

      <section className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {displayedItems.map((item) => (
          <div key={item.id} className="relative">
            <ShowcaseCard image={item.image} description={item.description} price={item.price} />
            <button onClick={() => { setImageToDelete(item.id); setIsModalOpen(true); }}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600 transition">
              <FaTimes size={20} />
            </button>
          </div>
        ))}
      </section>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6 mb-6">
          <button onClick={prevPage} disabled={currentPage === 1}
            className={`px-4 py-2 bg-text-500 text-white rounded-md shadow-md hover:bg-text-500 transition ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
            <FaCaretLeft />
          </button>
          <span className="text-black font-semibold">Pagina {currentPage} di {totalPages}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-text-500 text-white rounded-md shadow-md hover:bg-text-500 transition ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}>
            <FaCaretRight />
          </button>
        </div>
      )}

      <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={confirmDelete} />
    </DashboardLayout>
  );
}
