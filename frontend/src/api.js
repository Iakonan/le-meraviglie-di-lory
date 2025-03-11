const API_BASE_URL = "http://localhost:8000/api";

// Funzione helper per gestire le risposte dell'API
const handleApiResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Errore sconosciuto nell'API");
  }
  return response.json();
};

// Recupera tutte le immagini della vetrina
export const fetchShowcase = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/showcase`);
    return handleApiResponse(response);
  } catch (error) {
    console.error("Errore nel recupero delle immagini:", error.message);
    throw error;
  }
};

// Aggiunge un'immagine alla vetrina con controllo formati
export const addShowcaseImage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/showcase`, {
      method: "POST",
      body: formData,
    });
    return handleApiResponse(response);
  } catch (error) {
    console.error("Errore nell'aggiunta dell'immagine:", error.message);
    throw error;
  }
};

// Elimina un'immagine dalla vetrina
export const deleteShowcaseImage = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/showcase/${id}`, {
      method: "DELETE",
    });
    return handleApiResponse(response);
  } catch (error) {
    console.error("Errore nell'eliminazione dell'immagine:", error.message);
    throw error;
  }
};
