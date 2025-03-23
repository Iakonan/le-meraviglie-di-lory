export default function CreamSelection({ state, dispatch }) {
    const creamOptions = [
      { label: "Pasticcera", value: "pasticcera" },
      { label: "Cioccolato", value: "cioccolato" },
      { label: "Chantilly", value: "chantilly" },
      { label: "Mascarpone", value: "mascarpone" },
      { label: "Nocciola", value: "nocciola" },
      { label: "Panna Montata", value: "panna_montata" },
      { label: "Pistacchio", value: "pistacchio" },
    ];
  
    const handleChange = (e) => {
      dispatch({ type: "SET_CREAM", payload: e.target.value });
    };
  
    const isDisabled = !(state.product === "torta" || state.product === "creamtart");
  
    return (
      <div className={`rounded-xl p-4 ${isDisabled ? "opacity-50 cursor-not-allowed" : "bg-primary-500"}`}>
        <h3 className="font-semibold mb-3 text-black">Scegli la crema</h3>
        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
          {creamOptions.map((option) => (
            <div key={option.value} className="flex items-center justify-between text-black">
              <label htmlFor={option.value} className="text-base">
                {option.label}
              </label>
              <input
                id={option.value}
                type="radio"
                name="cream"
                value={option.value}
                onChange={handleChange}
                checked={state.cream === option.value}
                disabled={isDisabled}
                className="w-4 h-4 accent-text-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  