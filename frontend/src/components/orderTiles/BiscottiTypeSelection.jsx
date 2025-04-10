export default function BiscottiTypeSelection({ state, dispatch }) {
    const options = [
      {
        label: "Biscotti con stampa",
        value: "stampa",
        image: "/printedb.jpg",
        hint: "Porzioni di 12 in 12 – 3,50€ cad",
      },
      {
        label: "Biscotti decorati in pasta di zucchero",
        value: "decorati",
        image: "/decobis.jpg",
        hint: "Minimo 10 – 3,50€ cad",
      },
    ];
  
    const handleChange = (value) => {
      dispatch({ type: "SET_BISCOTTI_TIPO", payload: value });
    };
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = state.biscottiTipo === opt.value;
          return (
            <label key={opt.value} className="cursor-pointer space-y-2">
              <input
                type="radio"
                name="biscottiTipo"
                value={opt.value}
                checked={isSelected}
                onChange={() => handleChange(opt.value)}
                className="hidden"
              />
              <div
                className={`rounded-xl overflow-hidden border-2 transition ${
                  isSelected ? "border-text-500 ring-2 ring-text-500" : "border-gray-300"
                }`}
              >
                <img
                  src={opt.image}
                  alt={opt.label}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-black font-semibold">{opt.label}</p>
              <p className="text-sm text-gray-700">{opt.hint}</p>
            </label>
          );
        })}
      </div>
    );
  }
  