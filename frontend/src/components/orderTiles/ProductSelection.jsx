export default function ProductSelection({ state, dispatch }) {
    const productOptions = [
      { label: "Torta", value: "torta" },
      { label: "Creamtart", value: "creamtart" },
      { label: "Muffin", value: "muffin" },
      { label: "Cakepop", value: "cakepop" },
      { label: "Biscotti", value: "biscotti" },
      { label: "Bento", value: "bento" },
    ];
  
    const handleChange = (e) => {
      dispatch({ type: "SET_PRODUCT", payload: e.target.value });
    };
  
    return (
      <div className="bg-primary-500 rounded-xl p-4">
        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
          {productOptions.map((option) => (
            <label
              key={option.value}
              htmlFor={option.value}
              className="flex items-center justify-between text-black cursor-pointer">
              <span className="text-base">{option.label}</span>
              <input
                id={option.value}
                type="radio"
                name="product"
                value={option.value}
                checked={state.product === option.value}
                onChange={handleChange}
                className="w-4 h-4 accent-text-500"
              />

            </label>
          ))}
        </div>
      </div>
    );
  }
  