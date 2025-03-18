import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

export default function OrderForm() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    event_date: "",
    cake_type: "",
    shape: "",
    portions: "",
    flavor: "",
    theme: "",
    decorations: "",
    image_url: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Prezzi base delle torte
  const basePrices = {
    classica: 20,
    decorata: 18,
    creamtart: 10,
    muffin: 15,
    cakepop: 50,
    biscotti: 25,
  };

  // Prezzi extra per decorazioni
  const decorationPrices = {
    "": 0,
    "2d": 5,
    "3d": 10,
  };

  // Forme disponibili per ogni tipo di torta
  const availableShapes = {
    classica: ["tonda", "cuore", "quadrato", "rettangolo"],
    decorata: ["tonda", "quadrato"],
    creamtart: ["rettangolo"],
    muffin: ["tonda"],
    cakepop: ["tonda", "quadrato"],
    biscotti: ["tonda", "rettangolo"],
  };

  // 🎛 Gestione degli input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔄 Avanza allo step successivo
  const nextStep = () => {
    if (formStep < formSteps.length - 1) {
      setFormStep((prev) => prev + 1);
    }
  };

  // ⬅️ Torna allo step precedente
  const prevStep = () => {
    if (formStep > 0) {
      setFormStep((prev) => prev - 1);
    }
  };

  // 💰 Calcolo prezzo dinamico
  const calculatePrice = () => {
    const basePrice = basePrices[formData.cake_type] || 0;
    const extraDecoration = decorationPrices[formData.decorations] || 0;
    const portionFactor = formData.portions ? parseInt(formData.portions) * 0.5 : 0;
    return basePrice + extraDecoration + portionFactor;
  };

  // 🚀 Invia ordine al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, price: calculatePrice() }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmissionMessage("✅ Ordine inviato con successo!");
        setFormData({
          event_date: "",
          cake_type: "",
          shape: "",
          portions: "",
          flavor: "",
          theme: "",
          decorations: "",
          image_url: "",
        });
        setFormStep(0);
      } else {
        setSubmissionMessage("❌ Errore nell'invio dell'ordine.");
      }
    } catch (error) {
      console.error("Errore nell'invio dell'ordine:", error);
      setSubmissionMessage("❌ Errore di connessione.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ⏳ Passaggi del form con riepilogo COMPLETO
  const formSteps = [
    { label: "📅 Data Evento", component: <input type="date" name="event_date" value={formData.event_date} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required /> },
    {
      label: "Tipo di Torta",
      component: (
        <select name="cake_type" value={formData.cake_type} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" required>
          <option value="">-- Seleziona --</option>
          {Object.keys(basePrices).map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)} (€{basePrices[type]})
            </option>
          ))}
        </select>
      ),
    },
    {
      label: "Forma della Torta",
      component: (
        <select name="shape" value={formData.shape} onChange={handleChange} className="w-full p-2 border rounded-md mb-4">
          <option value="">-- Seleziona --</option>
          {(availableShapes[formData.cake_type] || []).map((shape) => (
            <option key={shape} value={shape}>
              {shape.charAt(0).toUpperCase() + shape.slice(1)}
            </option>
          ))}
        </select>
      ),
    },
    { label: "Numero Porzioni", component: <input type="number" name="portions" min="1" max="50" value={formData.portions} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" /> },
    {
      label: "Gusto",
      component: (
        <select name="flavor" value={formData.flavor} onChange={handleChange} className="w-full p-2 border rounded-md mb-4">
          <option value="">-- Seleziona --</option>
          <option value="cioccolato">Cioccolato</option>
          <option value="vaniglia">Vaniglia</option>
          <option value="fragola">Fragola</option>
          <option value="pistacchio">Pistacchio</option>
        </select>
      ),
    },
    { label: "Tema", component: <input type="text" name="theme" maxLength="20" value={formData.theme} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" /> },
    {
      label: "Decorazioni",
      component: (
        <select name="decorations" value={formData.decorations} onChange={handleChange} className="w-full p-2 border rounded-md mb-4">
          <option value="">-- Nessuna --</option>
          <option value="3d">3D</option>
          <option value="2d">2D</option>
        </select>
      ),
    },
    { label: "Immagine di riferimento (URL)", component: <input type="url" name="image_url" value={formData.image_url} onChange={handleChange} className="w-full p-2 border rounded-md mb-4" /> },
    {
      label: "Riepilogo Ordine",
      component: (
        <div className="text-left bg-gray-100 p-4 rounded-md">
          <p><strong>Data Evento:</strong> {formData.event_date}</p>
          <p><strong>Tipo di Torta:</strong> {formData.cake_type}</p>
          <p><strong>Forma:</strong> {formData.shape}</p>
          <p><strong>Porzioni:</strong> {formData.portions}</p>
          <p><strong>Gusto:</strong> {formData.flavor}</p>
          <p><strong>Tema:</strong> {formData.theme}</p>
          <p><strong>Decorazioni:</strong> {formData.decorations}</p>
          <p><strong>Immagine:</strong> {formData.image_url ? <a href={formData.image_url} target="_blank" rel="noopener noreferrer">🔗 Vedi immagine</a> : "Nessuna"}</p>
          <p className="text-xl font-bold mt-2">Prezzo Totale: €{calculatePrice().toFixed(2)}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-primary-500">
      <Sidebar />
      <div className="md:bg-secondary-500 h-10"></div>
      <main className="flex-grow p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">🎂 Ordina la tua torta</h1>
        <form className="bg-white p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">{formSteps[formStep].label}</h2>
          {formSteps[formStep].component}
          {/* 🔄 Navigazione */}
          <div className="flex justify-between mt-6">
                <button
                type="button"
                onClick={prevStep}
                disabled={formStep === 0}
                className={`px-4 py-2 rounded-md ${formStep === 0 ? "bg-gray-300" : "bg-secondary-500 text-white hover:bg-text-500"} transition`}
                >
                <FaCaretLeft />
                </button>
                {formStep < formSteps.length - 1 ? (
                <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-text-500 transition"
                >
                <FaCaretRight />
                </button>
                ) : (
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-text-500 transition">
                    Invia
                </button>
                )}
          </div>
        </form>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

