const extrasOptions = [
    { label: "Cioccolato (2 pezzi) - 1,50€", value: "cioccolato" },
    { label: "Fiori eduli - 5€", value: "fiori_eduli" },
    { label: "Macaron (1 pezzo) - 2€", value: "macaron" },
    { label: "Frutti di bosco (5 pezzi) - 2€", value: "frutti_bosco" },
    { label: "Oreo (3 pezzi) - 1€", value: "oreo" },
  ];
  
  export default function CreamtartExtrasSelection({ state, dispatch }) {
    const toggleExtra = (value) => {
      dispatch({ type: "TOGGLE_CREAMTART_EXTRA", value });
    };
  
    return (
      <div className="flex flex-col gap-4 text-black">
        <label className="text-sm font-medium">Vuoi aggiungere qualcosa?</label>
  
        <div className="flex flex-col gap-2">
          {extrasOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={state.creamtartExtras?.includes(option.value)}
                onChange={() => toggleExtra(option.value)}
                className="w-4 h-4 accent-text-500"
              />
              {option.label}
            </label>
          ))}
        </div>
  
        <div className="text-sm text-gray-700 space-y-1">
          <p>Fragole, meringhe e marshmallow sono già inclusi</p>
          <p>Il numero dei pezzi varia in base alle porzioni</p>
          <p>I prezzi si intendono ogni 10 porzioni</p>
        </div>
      </div>
    );
  }
  