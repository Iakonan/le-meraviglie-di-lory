export default function CakeVariantSelection({ state, dispatch }) {
    const cakeVariants = [
      {
        label: "Bassa",
        value: "bassa",
        image: "/productorder1.jpg",
        hint: "",
      },
      {
        label: "Alta",
        value: "alta",
        image: "/highcake.jpg",
        hint: "Con base in polistirolo",
      },
      {
        label: "A Piani",
        value: "piani",
        image: "/layercake.jpg",
        hint: "Minimo 3kg - Massimo 9kg",
      },
      {
        label: "Bento",
        value: "bento",
        image: "/bentocake.jpg",
        hint: "2–5 porzioni",
      },
    ];
  
    const handleChange = (value) => {
      dispatch({ type: "SET_CAKE_VARIANT", payload: value });
    };
  
    return (
      <div className="bg-primary-500 rounded-xl p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {cakeVariants.map((variant) => {
            const isSelected = state.cakeVariant === variant.value;
            return (
              <label key={variant.value} className="cursor-pointer flex flex-col items-center text-center">
                <input
                  type="radio"
                  name="cakeVariant"
                  value={variant.value}
                  checked={isSelected}
                  onChange={() => handleChange(variant.value)}
                  className="hidden"
                />
                <div
                  className={`w-[120px] h-[120px] rounded-lg border-2 overflow-hidden transition ${
                    isSelected ? "border-text-500 ring-2 ring-text-500" : "border-gray-300 hover:border-text-500"
                  }`}
                >
                  <img
                    src={variant.image}
                    alt={variant.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-1 text-black font-medium">{variant.label}</span>
                {variant.hint && <span className="text-xs text-gray-600">{variant.hint}</span>}
              </label>
            );
          })}
        </div>
      </div>
    );
  }
  