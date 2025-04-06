import React from "react";

const options = [
  {
    label: "Torta Tenerina",
    value: "tenerina",
    price: "28€",
    image: "/tortatenerina.jpg",
  },
  {
    label: "Torta di Mele",
    value: "mele",
    price: "28€",
    image: "/tortamele.jpg",
  },
  {
    label: "Torta Margherita",
    value: "margherita",
    price: "25€",
    image: "/tortamargherita.jpg",
  },
  {
    label: "Crostata di Frutta con Crema Pasticcera",
    value: "crostata_frutta",
    price: "35€",
    image: "/crostatcrema.jpeg",
  },
  {
    label: "Crostata con Confettura",
    value: "crostata_confettura",
    price: "28€",
    image: "/productorder6.jpg",
  },
  {
    label: "Cheesecake con Confettura",
    value: "cheesecake_confettura",
    price: "35€",
    image: "/cheesecake.jpeg",
  },
];

export default function FornoCakeSelection({ state, dispatch }) {
  const handleChange = (value) => {
    dispatch({ type: "SET_FIELD", field: "fornoCake", value });

    // reset campo confettura se non necessario
    if (
      value !== "crostata_confettura" &&
      value !== "cheesecake_confettura"
    ) {
      dispatch({ type: "SET_FIELD", field: "confettura", value: "" });
    }
  };

  return (
    <div className="flex flex-col gap-4 text-black">
      <p className="text-sm text-black">
        📌 Tutte le torte da forno sono <strong>26 cm</strong> di diametro.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {options.map((option) => {
          const isSelected = state.fornoCake === option.value;
          return (
            <label key={option.value} className="cursor-pointer text-center">
              <input
                type="radio"
                name="fornoCake"
                value={option.value}
                checked={isSelected}
                onChange={() => handleChange(option.value)}
                className="hidden"
              />
              <div
                className={`w-[100px] h-[100px] md:w-44 md:h-44 mx-auto rounded-lg border-2 overflow-hidden transition
                ${isSelected ? "border-text-500 ring-2 ring-text-500" : "border-gray-300 hover:border-text-500"}`}
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-1">
                <span className="block text-sm">{option.label}</span>
                <span className="text-xs text-gray-600">{option.price}</span>
              </div>
            </label>
          );
        })}
      </div>

      {/* Campo note per confettura */}
      {(state.fornoCake === "crostata_confettura" ||
        state.fornoCake === "cheesecake_confettura") && (
        <div className="mt-4">
          <label className="text-sm font-medium">
            Quale confettura vuoi?
          </label>
          <input
            type="text"
            value={state.confettura || ""}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "confettura",
                value: e.target.value,
              })
            }
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Es: fragola, frutti di bosco..."
          />
        </div>
      )}
    </div>
  );
}
