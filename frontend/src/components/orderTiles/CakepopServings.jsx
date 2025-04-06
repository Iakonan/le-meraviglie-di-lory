export default function CakepopServings({ state, dispatch }) {
    const isValid = (val) => {
      const n = parseInt(val, 10);
      return n % 10 === 0 && n >= 10 && n <= 100;
    };
  
    return (
      <div className="flex flex-col gap-2 text-black">
        <input
          type="number"
          min={10}
          step={10}
          value={state.servings}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "servings",
              value: e.target.value,
            })
          }
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          placeholder="Es: 20, 30..."
        />
        <span className="text-sm text-gray-700">
          📌 I CakePop si ordinano in multipli di 10
        </span>
        {!isValid(state.servings) && state.servings && (
          <span className="text-sm text-red-600">
            ⚠️ Inserisci un numero multiplo di 10 tra 10 e 100
          </span>
        )}
      </div>
    );
  }
  