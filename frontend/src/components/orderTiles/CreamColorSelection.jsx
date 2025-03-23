export default function CreamColorSelection({ state, dispatch }) {
    const colorOptions = [
      { label: "Rosa", value: "rosa", bg: "bg-pink-400" },
      { label: "Azzurro", value: "azzurro", bg: "bg-blue-400" },
      { label: "Giallo", value: "giallo", bg: "bg-yellow-300" },
      { label: "Verde", value: "verde", bg: "bg-green-400" },
      { label: "Viola", value: "viola", bg: "bg-purple-400" },
      { label: "Arancione", value: "arancione", bg: "bg-orange-400" },
      { label: "Tiffany", value: "tiffany", bg: "bg-teal-400" },
      { label: "Bianco", value: "bianco", bg: "bg-gray-200 text-black" },
      { label: "Marrone", value: "marrone", bg: "bg-amber-900" },
      { label: "Celeste", value: "celeste", bg: "bg-sky-300" },
      { label: "Rosso", value: "rosso", bg: "bg-red-400" },
      { label: "Nero", value: "nero", bg: "bg-black" },
      { label: "Lilla", value: "lilla", bg: "bg-violet-300" },
    ];
  
    const isDisabled =
      state.product !== "torta" ||
      (state.cakeType !== "classica" && state.cakeType !== "piani");
  
    const handleChange = (value) => {
      if (!isDisabled) {
        dispatch({ type: "SET_BUTTERCREAM_COLOR", payload: value });
      }
    };
  
    return (
      <div
        className={`rounded-xl p-4 col-span-4 ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "bg-primary-500"
        }`}
      >
        <h3 className="font-semibold mb-3 text-black">
          La tua torta sarà coperta di crema al burro. Scegli il colore:
        </h3>
        <div className="grid grid-cols-13 gap-4">
          {colorOptions.map((option) => {
            const isSelected = state.buttercreamColor === option.value;
            return (
              <label key={option.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="buttercreamColor"
                  value={option.value}
                  checked={isSelected}
                  onChange={() => handleChange(option.value)}
                  disabled={isDisabled}
                  className="hidden"
                />
                <div
                  className={`w-[90px] h-[90px] rounded-lg shadow-md flex items-center justify-center font-bold text-sm transition
                    ${option.bg}
                    ${isSelected ? "border-4 border-secondary-500" : "hover:opacity-80"}
                  `}
                >
                  {option.label}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
  