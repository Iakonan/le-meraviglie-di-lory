const smashOptions = [
    { value: "opzione1", image: "/smash1.jpg", label: "Opzione 1" },
    { value: "opzione2", image: "/smash2.jpg", label: "Opzione 2" },
    { value: "opzione3", image: "/smash3.jpg", label: "Opzione 3" },
    { value: "opzione4", image: "/smash4.jpg", label: "Opzione 4" },
  ];
  
  export default function SmashCakeStyleSelection({ state, dispatch }) {
    const handleSelect = (value) => {
      dispatch({ type: "SET_SMASH_OPTION", payload: value });
    };
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {smashOptions.map((option) => {
          const isSelected = state.smashOption === option.value;
          return (
            <label key={option.value} className="cursor-pointer text-center">
              <input
                type="radio"
                name="smashOption"
                value={option.value}
                checked={isSelected}
                onChange={() => handleSelect(option.value)}
                className="hidden"
              />
              <div
                className={`w-[120px] h-[120px] rounded-lg border-2 overflow-hidden transition ${
                  isSelected
                    ? "border-text-500 ring-2 ring-text-500"
                    : "border-gray-300 hover:border-text-500"
                }`}
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-black font-medium mt-1">{option.label}</span>
            </label>
          );
        })}
      </div>
    );
  }
  