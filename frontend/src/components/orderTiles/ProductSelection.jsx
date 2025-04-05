export default function ProductSelection({ state, dispatch }) {
  const productOptions = [
    { label: "Torta", value: "torta", image: "/productorder1.jpg" },
    { label: "Torta da Forno", value: "torta_forno", image: "/productorder6.jpg" },
    { label: "Creamtart", value: "creamtart", image: "/productorder4.jpg" },
    { label: "Cakepop", value: "cakepop", image: "/productorder5.jpg" },
    { label: "Muffin", value: "muffin", image: "/productorder2.png" },
    { label: "Biscotti", value: "biscotti", image: "/productorder3.jpg" },
  ];

  const handleChange = (value) => {
    dispatch({ type: "SET_PRODUCT", payload: value });
  };

  return (
    <div className="bg-primary-500 rounded-xl p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {productOptions.map((option) => {
          const isSelected = state.product === option.value;
          return (
            <label key={option.value} className="cursor-pointer justify-items-center">
              <input
                type="radio"
                name="product"
                value={option.value}
                checked={isSelected}
                onChange={() => handleChange(option.value)}
                className="hidden"
              />
              <div
                className={`w-[100px] h-[100px] md:w-44 md:h-44 flex flex-col items-center justify-items-center rounded-lg border-2 overflow-hidden transition
                ${isSelected ? "border-text-500 ring-2 ring-text-500" : "border-gray-300 hover:border-text-500"}`}
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-black mt-1">{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
