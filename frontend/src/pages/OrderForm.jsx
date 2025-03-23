import { useReducer } from "react";
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

  return (
    <div className="relative min-h-screen bg-primary-500 flex flex-col items-center">
      <Sidebar />

      {/* Header */}
      <header className="text-center py-12 w-full px-20 bg-secondary-500 mb-5">
        <h1 className="text-4xl font-bold text-black">Ordina la tua creazione personalizzata</h1>
        <p className="text-lg text-black mt-2">Segui i passaggi per completare il tuo ordine</p>
      </header>

      {/* Contenitore principale */}
      <main className="w-full flex flex-col md:flex-row gap-6 px-8 mb-16">
        {/* Colonna immagine a sinistra */}
        <div className="w-full md:w-1/4 flex justify-center items-start">
          <img
            src="/ordercake.jpg"
            alt="Anteprima torta"
            className="rounded-xl shadow-lg w-full max-w-xs"
          />
        </div>

        {/* Colonna form a destra */}
        <div className="w-full md:w-3/4 bg-secondary-500 rounded-xl p-6 grid grid-cols-4 gap-4">
          <ProductSelection state={state} dispatch={dispatch} />
          <TypeSelection state={state} dispatch={dispatch} />
          <LayersSelection state={state} dispatch={dispatch} />
          <SpongeFlavorSelection state={state} dispatch={dispatch} />
          <SpongeSoakSelection state={state} dispatch={dispatch} />
          <CreamSelection state={state} dispatch={dispatch} />
          <ExtraSelection state={state} dispatch={dispatch} />
          <ThemeSelection state={state} dispatch={dispatch} />
          <CreamColorSelection state={state} dispatch={dispatch} />
        </div>
      </main>

      {/* Footer e newsletter */}
      <div className="w-full">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
