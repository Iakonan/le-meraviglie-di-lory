import { useReducer, useState } from "react";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductSelection from "../components/orderTiles/ProductSelection";
import TypeSelection from "../components/orderTiles/TypeSelection";
import LayersSelection from "../components/orderTiles/LayersSelection";
import SpongeFlavorSelection from "../components/orderTiles/SpongeFlavorSelection";
import SpongeSoakSelection from "../components/orderTiles/SpongeSoakSelection";
import CreamSelection from "../components/orderTiles/CreamSelection";
import ExtraSelection from "../components/orderTiles/ExtraSelection";
import ThemeSelection from "../components/orderTiles/ThemeSelection";
import CreamColorSelection from "../components/orderTiles/CreamColorSelection";
import { initialState, orderReducer } from "../reducers/orderReducer";

export default function OrderForm() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const steps = [
    {
      message: "Ciao, ho sentito che ti serve una delle mie dolci creazioni. Sei nel posto giusto! Cominciamo!",
      component: (
        <div className="flex flex-col gap-2">
          <label htmlFor="event_date" className="text-black font-semibold">Quando ti serve?</label>
          <input
            type="date"
            id="event_date"
            name="event_date"
            value={state.event_date}
            onChange={(e) => dispatch({ type: "SET_FIELD", field: "event_date", value: e.target.value })}
            className="p-2 rounded-md border border-gray-300"
          />
          <span className="text-sm text-black">
            📌 Ti ricordo che servono almeno 3 giorni di preavviso per ogni ordine.
          </span>
        </div>
      ),
    },
    {
      message: "Di quante porzioni hai bisogno?",
      component: (
        <input
          type="number"
          min="1"
          max="99"
          value={state.portions}
          onChange={(e) => dispatch({ type: "SET_FIELD", field: "portions", value: e.target.value })}
          placeholder="Numero di porzioni"
          className="p-2 rounded-md border border-gray-300 w-1/2"
        />
      ),
    },
    {
      message: "A cosa stavi pensando?",
      component: <ProductSelection state={state} dispatch={dispatch} />,
    },
    ...(state.product === "torta"
      ? [
          {
            message: "Che tipo di torta desideri?",
            component: <TypeSelection state={state} dispatch={dispatch} />,
          },
          state.cakeType === "piani" && {
            message: "Quanti piani?",
            component: <LayersSelection state={state} dispatch={dispatch} />,
          },
          state.cakeType === "classica" && {
            message: "Gusto del pan di Spagna?",
            component: <SpongeFlavorSelection state={state} dispatch={dispatch} />,
          },
          state.cakeType === "classica" && {
            message: "Bagna alcolica o analcolica?",
            component: <SpongeSoakSelection state={state} dispatch={dispatch} />,
          },
        ].filter(Boolean)
      : []),
    ...(state.product === "torta" || state.product === "creamtart"
      ? [
          {
            message: "Quale crema preferisci?",
            component: <CreamSelection state={state} dispatch={dispatch} />,
          },
        ]
      : []),
    {
      message: "Vuoi aggiungere qualcosa in più?",
      component: <ExtraSelection state={state} dispatch={dispatch} />,
    },
    {
      message: "Qual'è il tuo evento?",
      component: <ThemeSelection state={state} dispatch={dispatch} />,
    },
    ...(state.product === "torta" &&
      (state.cakeType === "classica" || state.cakeType === "piani")
      ? [
          {
            message: "La tua torta sarà coperta di crema al burro. Scegli il colore:",
            component: <CreamColorSelection state={state} dispatch={dispatch} />,
          },
        ]
      : []),
  ];
  

  return (
    <div className="relative min-h-screen bg-order-500 flex flex-col items-center">
      <Sidebar />

      <main className="w-full max-w-4xl px-4 mt-60">
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
          <p className="text-xl font-semibold text-black">{steps[step].message}</p>
          {steps[step].component}

          {/* Navigazione */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className={`px-4 py-2 rounded-md ${
                step === 0
                  ? "bg-gray-300 text-white cursor-not-allowed"
                  : "bg-gray-300 text-white hover:bg-font-500"
              } transition`}
            >
              Indietro
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-order-500 text-white rounded-md hover:bg-font-500 transition"
              >
                Avanti
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-order-500 text-white rounded-md hover:bg-font-500 transition"
                onClick={() => alert("Prossimo step: riepilogo ordine!")}
              >
                Prosegui
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
