export default function SpongeSoakSelection({ state, dispatch }) {
    const soakOptions = [
      { label: "Analcolica", value: "analcolica" },
      { label: "Alcolica", value: "alcolica" },
    ];
  
    const handleChange = (e) => {
      dispatch({ type: "SET_SPONGE_SOAK", payload: e.target.value });
    };
  
    const isDisabled = state.product !== "torta" || state.cakeType !== "classica";
  
    return (
      <div className={`rounded-xl p-4 ${isDisabled ? "opacity-50 cursor-not-allowed" : "bg-primary-500"}`}>
        <h3 className="font-semibold mb-3 text-black">Bagna del Pan di Spagna</h3>
        <div className="grid gap-y-3 gap-x-6">
          {soakOptions.map((option) => (
            <div key={option.value} className="flex items-center justify-between text-black">
              <label htmlFor={option.value} className="text-base">
                {option.label}
              </label>
              <input
                id={option.value}
                type="radio"
                name="spongeSoak"
                value={option.value}
                onChange={handleChange}
                checked={state.spongeSoak === option.value}
                disabled={isDisabled}
                className="w-4 h-4 accent-text-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  