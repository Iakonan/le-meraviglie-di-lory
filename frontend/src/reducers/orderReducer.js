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
    case "SET_PRODUCT":
      return {
        ...state,
        product: action.value,
        cakeType: "",
        tiers: "",
        spongeFlavor: "",
        spongeSoak: "",
        cream: "",
        buttercreamColor: "",
      };

    case "SET_CAKE_TYPE":
      return {
        ...state,
        cakeType: action.value,
        tiers: "",
        spongeFlavor: "",
        spongeSoak: "",
        buttercreamColor: "",
      };

    case "SET_TIERS":
      return {
        ...state,
        tiers: action.value,
      };

    case "SET_SPONGE_FLAVOR":
      return {
        ...state,
        spongeFlavor: action.value,
      };

    case "SET_SPONGE_SOAK":
      return {
        ...state,
        spongeSoak: action.value,
      };

    case "SET_CREAM":
      return {
        ...state,
        cream: action.value,
      };

    case "TOGGLE_EXTRA":
      return {
        ...state,
        extras: state.extras.includes(action.value)
          ? state.extras.filter((item) => item !== action.value)
          : [...state.extras, action.value],
      };

    case "SET_BUTTERCREAM_COLOR":
      return {
        ...state,
        buttercreamColor: action.value,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.value,
      };

    case "RESET_ORDER":
      return initialState;

    default:
      return state;
  }
};
