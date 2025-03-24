export default function TypeSelection({ state, dispatch }) {
    const typeOptions = [
      { label: "Classica", value: "classica" },
      { label: "Da Forno", value: "forno" },
      { label: "A Piani", value: "piani" },
    ];
  
    const handleChange = (e) => {
      dispatch({ type: "SET_CAKE_TYPE", payload: e.target.value });
    };
  
    const isDisabled = state.product !== "torta";
  
    return (
      <div className={`rounded-xl p-4 ${isDisabled ? "opacity-50 cursor-not-allowed" : "bg-primary-500"}`}>
        <div className="grid gap-y-3 gap-x-6">
          {typeOptions.map((option) => (
            <div key={option.value} className="flex items-center justify-between text-black">
              <label htmlFor={option.value} className="text-base">
                {option.label}
              </label>
              <input
                id={option.value}
                type="radio"
                name="cakeType"
                value={option.value}
                onChange={handleChange}
                checked={state.cakeType === option.value}
                disabled={isDisabled}
                className="w-4 h-4 accent-text-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  