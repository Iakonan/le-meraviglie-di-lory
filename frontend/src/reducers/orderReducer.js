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
        product: action.payload,
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
          cakeType: action.payload,
          tiers: action.payload === "piani" ? state.tiers : "",
          spongeFlavor:
            action.payload === "classica" || action.payload === "piani"
              ? state.spongeFlavor
              : "",
          spongeSoak:
            action.payload === "classica" || action.payload === "piani"
              ? state.spongeSoak
              : "",
          buttercreamColor: "",
        };
      

    case "SET_TIERS":
      return {
        ...state,
        tiers: action.payload,
      };

    case "SET_SPONGE_FLAVOR":
      return {
        ...state,
        spongeFlavor: action.payload,
      };

    case "SET_SPONGE_SOAK":
      return {
        ...state,
        spongeSoak: action.payload,
      };

    case "SET_CREAM":
      return {
        ...state,
        cream: action.payload,
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
        buttercreamColor: action.payload,
      };

      case "SET_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      

    case "RESET_ORDER":
      return initialState;

    default:
      return state;
  }
};
