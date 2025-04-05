export default function SpongeFlavorSelection({ state, dispatch }) {
  const spongeFlavors = [
    { label: "Vaniglia", value: "vaniglia" },
    { label: "Cacao", value: "cacao" },
  ];

  const handleChange = (e) => {
    dispatch({ type: "SET_SPONGE_FLAVOR", payload: e.target.value });
  };

  const isDisabled =
  state.product !== "torta" ||
  (state.cakeVariant !== "alta" && state.cakeVariant !== "bassa" && state.cakeVariant !== "piani");


  return (
    <div
      className={`rounded-xl p-4 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "bg-primary-500"
      }`}
    >
      <div className="grid gap-y-3 gap-x-6">
        {spongeFlavors.map((option) => (
          <div key={option.value} className="flex items-center justify-between text-black">
            <label htmlFor={option.value} className="text-base">
              {option.label}
            </label>
            <input
              id={option.value}
              type="radio"
              name="spongeFlavor"
              value={option.value}
              onChange={handleChange}
              checked={state.spongeFlavor === option.value}
              disabled={isDisabled}
              className="w-4 h-4 accent-text-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
