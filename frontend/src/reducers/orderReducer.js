
export const initialState = {
    product: "",
    cakeType: "",
    tiers: "",
    spongeFlavor: "",
    spongeSoak: "",
    cream: "",
    extras: [],
    buttercreamColor: "",
    theme: "",
  };
  
  export const orderReducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.field]: action.value };
      case "TOGGLE_EXTRA":
        const exists = state.extras.includes(action.value);
        return {
          ...state,
          extras: exists
            ? state.extras.filter((item) => item !== action.value)
            : [...state.extras, action.value],
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  