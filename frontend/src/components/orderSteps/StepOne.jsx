import OptionCard from "./OptionCard";

export default function StepOne({ state, dispatch }) {
  return (
    <div className="flex bg-primary-500 rounded-xl overflow-hidden w-full h-[calc(100vh-300px)]">
      {/* Immagine a sinistra */}
      <div className="w-1/4 h-full flex justify-center items-center bg-white rounded-l-xl">
        <img
          src="/ordercake.jpg"
          alt="Anteprima torta"
          className="rounded-xl shadow-lg w-full h-auto max-w-[400px] object-contain"
        />
      </div>

      {/* Opzioni a destra */}
      <div className="w-3/4 h-full bg-[#C4D6CD] p-6 overflow-y-auto">
        <div className="space-y-6">

          {/* Selezione prodotto */}
          <div>
            <h3 className="font-semibold mb-2">Cosa ti serve?</h3>
            <div className="grid grid-cols-3 gap-2">
              <OptionCard label="Torta" />
              <OptionCard label="Creamtart" />
              <OptionCard label="Muffin" />
              <OptionCard label="Cakepop" />
              <OptionCard label="Biscotti" />
            </div>
          </div>

          {/* Tipo torta */}
          <div>
            <h3 className="font-semibold mb-2">Di quale tipo?</h3>
            <div className="grid grid-cols-3 gap-2">
              <OptionCard label="Classica" />
              <OptionCard label="Da Forno" />
              <OptionCard label="A Piani" />
            </div>
          </div>

          {/* Piani */}
          <div>
            <h3 className="font-semibold mb-2">Quanti piani?</h3>
            <div className="flex gap-4">
              <OptionCard label="2" />
              <OptionCard label="3" />
            </div>
          </div>

          {/* Pan di Spagna */}
          <div>
            <h3 className="font-semibold mb-2">Scegli il Pan di Spagna</h3>
            <div className="grid grid-cols-2 gap-2">
              <OptionCard label="Vaniglia" />
              <OptionCard label="Cacao" />
              <OptionCard label="Alcolico" />
              <OptionCard label="Analcolico" />
            </div>
          </div>

          {/* Crema */}
          <div>
            <h3 className="font-semibold mb-2">Crema</h3>
            <div className="grid grid-cols-2 gap-2">
              <OptionCard label="Pasticcera" />
              <OptionCard label="Cioccolato" />
              <OptionCard label="Chantilly" />
              <OptionCard label="Mascarpone" />
              <OptionCard label="Nocciola" />
              <OptionCard label="Panna Montata" />
              <OptionCard label="Pistacchio" />
            </div>
          </div>

          {/* Extra */}
          <div>
            <h3 className="font-semibold mb-2">Vuoi aggiungere altro?</h3>
            <div className="grid grid-cols-2 gap-2">
              <OptionCard label="Gocce cioccolato" />
              <OptionCard label="Nutella" />
              <OptionCard label="Oreo Sbriciolati" />
              <OptionCard label="Fragole" />
              <OptionCard label="Granella Pistacchio" />
              <OptionCard label="Granella Nocciole" />
            </div>
          </div>

          {/* Tema */}
          <div>
            <h3 className="font-semibold mb-2">Tema</h3>
            <textarea
              name="theme"
              maxLength={20}
              placeholder="Max 20 caratteri alfabetici"
              className="w-full p-2 rounded-md shadow-inner border border-gray-300"
            />
            <p className="text-sm mt-1 text-gray-700">
              ⚠️ In base al tema, alcune decorazioni verranno già incluse.
            </p>
          </div>

          {/* Colori crema al burro */}
          <div>
            <h3 className="font-semibold mb-2">
              La tua torta sarà coperta di crema al burro. Scegli il colore
            </h3>
            <div className="grid grid-cols-6 gap-2">
              {[...Array(12)].map((_, index) => (
                <OptionCard key={index} label={`Colore ${index + 1}`} />
              ))}
            </div>
          </div>

          {/* Bottone Avanti */}
          <div className="flex justify-end pt-4">
            <button className="px-6 py-2 bg-[#1C5446] text-white font-bold rounded-md hover:bg-[#154538] transition">
              AVANTI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
