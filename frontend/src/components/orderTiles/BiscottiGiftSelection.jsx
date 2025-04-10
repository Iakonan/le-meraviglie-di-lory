export default function BiscottiGiftSelection({ state, dispatch }) {
    return (
      <div className="flex flex-col gap-2 text-black">
        <p className="text-sm font-medium">
          È un regalo per invitati a una festa?
        </p>
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="biscottiRegalo"
              value="si"
              checked={state.biscottiRegalo === "si"}
              onChange={() =>
                dispatch({ type: "SET_BISCOTTI_REGALO", payload: "si" })
              }
              className="w-4 h-4 accent-text-500"
            />
            Sì (incartati singolarmente)
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="biscottiRegalo"
              value="no"
              checked={state.biscottiRegalo === "no"}
              onChange={() =>
                dispatch({ type: "SET_BISCOTTI_REGALO", payload: "no" })
              }
              className="w-4 h-4 accent-text-500"
            />
            No (confezionati insieme)
          </label>
        </div>
      </div>
    );
  }
  