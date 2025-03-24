export default function ExtraSelection({ state, dispatch }) {
    const extraOptions = [
      { label: "Gocce di cioccolato", value: "gocce_cioccolato" },
      { label: "Nutella", value: "nutella" },
      { label: "Oreo sbriciolati", value: "oreo" },
      { label: "Fragole", value: "fragole" },
      { label: "Granella di pistacchio", value: "pistacchio" },
      { label: "Granella di nocciole", value: "nocciole" },
    ];
  
    const handleChange = (e) => {
      dispatch({ type: "TOGGLE_EXTRA", value: e.target.value });
    };
  
    return (
      <div className="bg-primary-500 rounded-xl p-4">
        <div className=" gap-y-3 gap-x-6">
          {extraOptions.map((option) => (
            <div key={option.value} className="flex items-center justify-between text-black">
              <label htmlFor={option.value} className="text-base">
                {option.label}
              </label>
              <input
                id={option.value}
                type="checkbox"
                value={option.value}
                checked={state.extras.includes(option.value)}
                onChange={handleChange}
                className="w-4 h-4 accent-text-500"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  