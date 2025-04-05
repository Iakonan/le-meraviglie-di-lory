const options = [
    { label: "Nutella", value: "nutella" },
    { label: "Confettura di fragola", value: "fragola" },
    { label: "Confettura di albicocca", value: "albicocca" },
    { label: "Confettura di frutti di bosco", value: "frutti_bosco" },
  ];
  
  export default function MuffinFillingSelection({ state, dispatch }) {
    return (
      <div className="text-black space-y-3">
        <label className="text-sm font-medium">Scegli il ripieno del tuo Muffin:</label>
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="muffinFilling"
                value={option.value}
                checked={state.muffinFilling === option.value}
                onChange={() =>
                  dispatch({ type: "SET_FIELD", field: "muffinFilling", value: option.value })
                }
                className="w-4 h-4 accent-text-500"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  }
  