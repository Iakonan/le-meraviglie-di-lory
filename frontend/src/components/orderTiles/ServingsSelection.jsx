import React from "react";

export default function ServingsSelection({ state, dispatch }) {
  const { cakeVariant, servings } = state;

  const getRange = () => {
    switch (cakeVariant) {
      case "bassa":
      case "alta":
        return { min: 6, max: 20 };
      case "piani":
        return { min: 30, max: 90 };
      case "bento":
        return null; // gestione speciale
      default:
        return null;
    }
  };

  const range = getRange();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-semibold">Quante porzioni desideri?</label>

      {cakeVariant === "bento" ? (
        <div className="flex gap-4">
          {[2, 5].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="servings"
                value={val}
                checked={servings === val}
                onChange={() =>
                  dispatch({ type: "SET_FIELD", field: "servings", value: val })
                }
              />
              {val} porzioni
            </label>
          ))}
        </div>
      ) : (
        <input
          type="number"
          min={range?.min}
          max={range?.max}
          value={servings}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "servings", value: e.target.value })
          }
          className="p-2 rounded-md border border-gray-300 w-32"
        />
      )}
      {cakeVariant !== "bento" && servings && ( // mostra solo se ha digitato qualcosa
        <span className="text-sm text-red-600">
            {parseInt(servings, 10) < range.min || parseInt(servings, 10) > range.max
            ? `⚠️ Le porzioni devono essere tra ${range.min} e ${range.max}.`
            : ""}
        </span>
        )}


      <span className="text-sm text-black">
        📌 Ogni porzione equivale a circa 100g di prodotto.
      </span>
    </div>
  );
}
