import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import ConfirmModal from "../components/ConfirmModal"; // Importiamo la modale generica

export default function DashboardGallery() {
  const [images, setImages] = useState([
    { id: 1, url: "/gallery1.jpg", description: "Torta Frozen" },
    { id: 2, url: "/gallery2.jpg", description: "Torta Compleanno" },
  ]);

  const [newImage, setNewImage] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  const handleAddImage = () => {
    if (newImage && newDescription.trim() !== "") {
      const newImageObj = {
        id: images.length + 1,
        url: URL.createObjectURL(newImage),
        description: newDescription,
      };
      setImages([...images, newImageObj]);
      setNewImage(null);
      setNewDescription("");
    }
  };

  const confirmDelete = () => {
    if (imageToDelete !== null) {
      setImages(images.filter(image => image.id !== imageToDelete));
      setImageToDelete(null);
      setIsModalOpen(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">🖼️ Gestione Gallery</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">📤 Aggiungi una Nuova Immagine</h2>
        <input
          type="file"
          accept="image/*"
          className="block w-full border border-gray-300 p-2 rounded-md mb-3"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Descrizione breve"
          className="block w-full border border-gray-300 p-2 rounded-md mb-3"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button
          onClick={handleAddImage}
          className="bg-secondary-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-text-500 transition"
          disabled={!newImage || newDescription.trim() === ""}
        >
          Aggiungi Immagine
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white p-4 rounded-lg shadow-md relative">
            <img src={image.url} alt={image.description} className="w-full h-48 object-cover rounded-md" />
            <p className="mt-2 text-sm text-gray-700">{image.description}</p>
            <button
              onClick={() => {
                setImageToDelete(image.id);
                setIsModalOpen(true);
              }}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-md shadow-md hover:bg-red-600 transition"
            >
              Elimina
            </button>
          </div>
        ))}
      </div>

      {/* Modale di conferma eliminazione */}
      <ConfirmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={confirmDelete} />
    </DashboardLayout>
  );
}
