export default function MuffinServings({ state, dispatch }) {
    const isValid = (val) => {
      const n = parseInt(val, 10);
      return n % 12 === 0 && n >= 12 && n <= 120;
    };
  
    return (
      <div className="flex flex-col gap-2 text-black">
        <input
          type="number"
          min={12}
          step={12}
          value={state.servings}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "servings",
              value: e.target.value,
            })
          }
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          placeholder="Es: 24, 36..."
        />
        <span className="text-sm text-gray-700">
          📌 I muffin si ordinano in multipli di 12
        </span>
        {!isValid(state.servings) && state.servings && (
          <span className="text-sm text-red-600">
            ⚠️ Inserisci un numero multiplo di 12 tra 12 e 120
          </span>
        )}
      </div>
    );
  }
  