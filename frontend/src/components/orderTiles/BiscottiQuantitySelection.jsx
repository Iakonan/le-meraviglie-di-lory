export default function BiscottiQuantitySelection({ state, dispatch }) {
    const isStampa = state.biscottiTipo === "stampa";
    const val = parseInt(state.biscottiQuantita, 10);
  
    const isValid = isStampa
      ? val % 12 === 0 && val >= 12
      : val >= 10 && val <= 100;
  
    return (
      <div className="flex flex-col gap-2 text-black">
        <label className="text-sm font-medium">
          Quanti biscotti desideri?
        </label>
        <input
          type="number"
          min={isStampa ? 12 : 10}
          step={isStampa ? 12 : 1}
          value={state.biscottiQuantita}
          onChange={(e) =>
            dispatch({
              type: "SET_BISCOTTI_QUANTITA",
              payload: e.target.value,
            })
          }
          className="w-1/2 p-2 border border-gray-300 rounded-md"
        />
        {!isValid && state.biscottiQuantita && (
          <span className="text-sm text-red-600">
            {isStampa
              ? "Inserisci un multiplo di 12 (minimo 12)"
              : "Inserisci almeno 10 e massimo 100 biscotti"}
          </span>
        )}
      </div>
    );
  }
  