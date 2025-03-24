export default function ThemeSelection({ state, dispatch }) {
    const handleChange = (e) => {
      const value = e.target.value;
  
      // Accetta solo lettere e spazi, fino a 20 caratteri
      const validValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").slice(0, 20);
      dispatch({ type: "SET_FIELD", field: "theme", value: validValue });
    };
  
    return (
      <div className="bg-primary-500 rounded-xl p-4">
        <input
          type="text"
          name="theme"
          maxLength={20}
          placeholder="Compleanno, Battesimo"
          value={state.theme}
          onChange={handleChange}
          className="w-full p-2 rounded-md shadow-inner border border-gray-300 text-black placeholder:text-gray-400"
        />
        <p className="text-sm mt-1 text-gray-700">
          ⚠️ Alcune decorazioni potrebbero essere incluse in base al tema scelto.
        </p>
      </div>
    );
  }
  