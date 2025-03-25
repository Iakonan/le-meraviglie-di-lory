export default function LayersSelection({ state, dispatch }) {
    const layerOptions = [
      { label: "2", value: "2" },
      { label: "3", value: "3" },
    ];
  
    const handleChange = (e) => {
      dispatch({ type: "SET_TIERS", payload: e.target.value });
    };
  
    const isDisabled = state.product !== "torta" || state.cakeType !== "piani";
  
    return (
      <div className={`rounded-xl p-4 ${isDisabled ? "opacity-50 cursor-not-allowed" : "bg-primary-500"}`}>
        <div className="grid gap-y-3 gap-x-6">
          {layerOptions.map((option) => (
            <div key={option.value} className="flex items-center justify-between text-black">
              <label htmlFor={option.value} className="text-base">
                {option.label}
              </label>
              <input
                id={option.value}
                type="radio"
                name="tiers"
                value={option.value}
                onChange={handleChange}
                checked={state.tiers === option.value}
                disabled={isDisabled}
                className="w-4 h-4 accent-text-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  