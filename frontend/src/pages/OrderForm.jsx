import { useReducer, useState } from "react";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import ProductSelection from "../components/orderTiles/ProductSelection";
import CakeVariantSelection from "../components/orderTiles/CakeVariantSelection";
import LayersSelection from "../components/orderTiles/LayersSelection";
import SpongeFlavorSelection from "../components/orderTiles/SpongeFlavorSelection";
import SpongeSoakSelection from "../components/orderTiles/SpongeSoakSelection";
import CreamSelection from "../components/orderTiles/CreamSelection";
import ExtraSelection from "../components/orderTiles/ExtraSelection";
import CreamColorSelection from "../components/orderTiles/CreamColorSelection";
import ThemeSelection from "../components/orderTiles/ThemeSelection";
import ServingsSelection from "../components/orderTiles/ServingsSelection";
import BentoInfo from "../components/orderTiles/BentoInfo";
import FornoCakeSelection from "../components/orderTiles/FornoCakeSelection";
import CreamtartShapeInput from "../components/orderTiles/CreamtartShapeInput";
import CreamtartExtrasSelection from "../components/orderTiles/CreamtartExtrasSelection";
import CakepopIntro from "../components/orderTiles/CakepopIntro";
import CakepopServings from "../components/orderTiles/CakepopServings";
import MuffinIntro from "../components/orderTiles/MuffinIntro";
import MuffinServings from "../components/orderTiles/MuffinServings";
import MuffinFillingSelection from "../components/orderTiles/MuffinFillingSelection";

import { initialState, orderReducer } from "../reducers/orderReducer";

export default function OrderForm() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const isCurrentStepValid = () => {
    const currentComponent = steps[step].component.type?.name;

    if (currentComponent === "ServingsSelection") {
      const val = parseInt(state.servings, 10);
      switch (state.cakeVariant) {
        case "bassa":
        case "alta":
          return val >= 6 && val <= 20;
        case "piani":
          return val >= 30 && val <= 90;
        case "bento":
          return val === 2 || val === 5;
        default:
          return false;
      }
    }

    if (state.product === "cakepop" && currentComponent === "CakepopServings") {
      const val = parseInt(state.servings, 10);
      return val % 10 === 0 && val >= 10 && val <= 100;
    }

    if (state.product === "muffin" && currentComponent === "MuffinServings") {
      const val = parseInt(state.servings, 10);
      return val % 12 === 0 && val >= 12 && val <= 120;
    }

    return true;
  };

  const steps = [
    {
      message:
        "Ciao, ho sentito che ti serve una delle mie dolci creazioni. Sei nel posto giusto! Cominciamo!",
      component: (
        <div className="flex flex-col gap-2">
          <label htmlFor="event_date" className="text-black font-semibold">
            Quando ti serve?
          </label>
          <input
            type="date"
            id="event_date"
            name="event_date"
            value={state.event_date}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "event_date",
                value: e.target.value,
              })
            }
            className="p-2 rounded-md border border-gray-300"
          />
          <span className="text-sm text-black">
            📌 Ti ricordo che servono almeno 3 giorni di preavviso per ogni ordine.
          </span>
        </div>
      ),
    },
    {
      message: "A cosa stavi pensando?",
      component: <ProductSelection state={state} dispatch={dispatch} />,
    },
    state.product === "torta_forno" && {
      message: "Che torta da forno desideri?",
      component: <FornoCakeSelection state={state} dispatch={dispatch} />,
    },
    state.product === "creamtart" && {
      message: "Forma della Cream Tart",
      component: <CreamtartShapeInput state={state} dispatch={dispatch} />,
    },
    state.product === "creamtart" && {
      message: "Vuoi aggiungere qualcosa?",
      component: <CreamtartExtrasSelection state={state} dispatch={dispatch} />,
    },
    state.product === "cakepop" && {
      message: "",
      component: <CakepopIntro />,
    },
    state.product === "cakepop" && {
      message: "Quanti CakePop desideri?",
      component: <CakepopServings state={state} dispatch={dispatch} />,
    },
    state.product === "cakepop" && {
      message: "Scegli il colore della copertura:",
      component: <CreamColorSelection state={state} dispatch={dispatch} />,
    },
    state.product === "muffin" && {
      message: "",
      component: <MuffinIntro />,
    },
    state.product === "muffin" && {
      message: "Quanti Muffin desideri?",
      component: <MuffinServings state={state} dispatch={dispatch} />,
    },
    state.product === "muffin" && {
      message: "Scegli il ripieno:",
      component: <MuffinFillingSelection state={state} dispatch={dispatch} />,
    },
    state.product === "muffin" && {
      message: "Scegli il colore della crema:",
      component: <CreamColorSelection state={state} dispatch={dispatch} />,
    },
    state.product === "muffin" && {
      message: "Qual è il tema dell'evento?",
      component: <ThemeSelection state={state} dispatch={dispatch} />,
    },
    ...(state.product === "torta"
      ? [
          {
            message: "Che tipo di torta desideri?",
            component: <CakeVariantSelection state={state} dispatch={dispatch} />,
          },
          state.cakeVariant && {
            message: "Quante porzioni ti servono?",
            component: <ServingsSelection state={state} dispatch={dispatch} />,
          },
          state.cakeVariant === "bento" && {
            message: "",
            component: <BentoInfo />,
          },
          state.cakeVariant === "piani" && {
            message: "Quanti piani vuoi?",
            component: <LayersSelection state={state} dispatch={dispatch} />,
          },
          ["bassa", "alta", "piani"].includes(state.cakeVariant) && {
            message: "Che gusto deve avere il pan di Spagna?",
            component: <SpongeFlavorSelection state={state} dispatch={dispatch} />,
          },
          ["bassa", "alta", "piani"].includes(state.cakeVariant) && {
            message: "Preferisci una bagna alcolica o analcolica?",
            component: <SpongeSoakSelection state={state} dispatch={dispatch} />,
          },
          ["bassa", "alta", "piani"].includes(state.cakeVariant) && {
            message: "Quale crema preferisci?",
            component: <CreamSelection state={state} dispatch={dispatch} />,
          },
          ["bassa", "alta", "piani"].includes(state.cakeVariant) && {
            message: "Vuoi aggiungere qualcosa in più?",
            component: <ExtraSelection state={state} dispatch={dispatch} />,
          },
          ["bassa", "alta", "piani"].includes(state.cakeVariant) && {
            message: "Scegli il colore della crema al burro:",
            component: <CreamColorSelection state={state} dispatch={dispatch} />,
          },
          ["bassa", "alta", "piani", "bento"].includes(state.cakeVariant) && {
            message: "Qual è il tema dell'evento?",
            component: <ThemeSelection state={state} dispatch={dispatch} />,
          },
        ].filter(Boolean)
      : []),
  ].filter(Boolean);

  return (
    <div className="relative min-h-screen overflow-y-auto bg-order-500">
      <Sidebar />

      <div className="flex justify-center items-center min-h-screen">
        <main className="w-full max-w-4xl px-4">
          <div className="bg-primary-500 shadow-lg rounded-xl p-6 space-y-6">
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
                  disabled={!isCurrentStepValid()}
                  className={`px-4 py-2 rounded-md transition ${
                    !isCurrentStepValid()
                      ? "bg-gray-300 text-white cursor-not-allowed"
                      : "bg-order-500 text-white hover:bg-font-500"
                  }`}
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

      <Newsletter />
      <Footer />
    </div>
  );
}
