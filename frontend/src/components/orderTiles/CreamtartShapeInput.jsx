export default function CreamtartShapeInput({ state, dispatch }) {
    return (
      <div className="flex flex-col gap-4 text-black">
        <label className="text-sm font-medium">
          Scrivi la lettera o il numero che daranno forma alla tua Cream Tart
        </label>
        <input
          type="text"
          maxLength={3}
          value={state.creamtartShape || ""}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "creamtartShape", value: e.target.value.toUpperCase() })
          }
          placeholder="Es: A, 7, M"
          className="p-2 border border-gray-300 rounded-md w-1/2"
        />
        <span className="text-sm text-gray-700">
          Ogni cifra o carattere equivale a 10 porzioni.
        </span>
      </div>
    );
  }
  