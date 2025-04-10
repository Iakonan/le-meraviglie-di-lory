export const initialState = {
  event_date: "",
  portions: "",
  product: "",
  cakeVariant: "",
  tiers: "",
  spongeFlavor: "",
  spongeSoak: "",
  cream: "",
  extras: [],
  buttercreamColor: "",
  theme: "",
  servings: "",
  fornoCake: "",
  confettura: "",
  creamtartShape: "",
  creamtartExtras: [],
  muffinFilling: "",
  // Biscotti
  biscottiTipo: "",
  biscottiQuantita: "",
  biscottiRegalo: "",
  // Smash Cake
  smashOption: "",
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_PRODUCT":
      return {
        ...state,
        product: action.payload,
        cakeVariant: "",
        tiers: "",
        spongeFlavor: "",
        spongeSoak: "",
        cream: "",
        extras: [],
        servings: "",
        theme: "",
        fornoCake: "",
        confettura: "",
        buttercreamColor:
          action.payload === "torta" || action.payload === "torta_forno"
            ? ""
            : state.buttercreamColor,
        creamtartShape: "",
        creamtartExtras: [],
        muffinFilling: "",
        biscottiTipo: "",
        biscottiQuantita: "",
        biscottiRegalo: "",
        smashOption: "",
      };

    case "SET_CAKE_VARIANT":
      return {
        ...state,
        cakeVariant: action.payload,
        tiers: action.payload === "piani" ? state.tiers : "",
        spongeFlavor:
          action.payload === "piani" || action.payload === "bassa"
            ? state.spongeFlavor
            : "",
        spongeSoak:
          action.payload === "piani" || action.payload === "bassa"
            ? state.spongeSoak
            : "",
        buttercreamColor:
          action.payload === "piani" || action.payload === "bassa"
            ? state.buttercreamColor
            : "",
        servings: "",
        smashOption: action.payload === "smash" ? state.smashOption : "",
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

    case "TOGGLE_CREAMTART_EXTRA":
      return {
        ...state,
        creamtartExtras: state.creamtartExtras.includes(action.value)
          ? state.creamtartExtras.filter((item) => item !== action.value)
          : [...state.creamtartExtras, action.value],
      };

    case "SET_BISCOTTI_TIPO":
      return {
        ...state,
        biscottiTipo: action.payload,
        biscottiQuantita: "",
        biscottiRegalo: "",
      };

    case "SET_BISCOTTI_QUANTITA":
      return {
        ...state,
        biscottiQuantita: action.payload,
      };

    case "SET_BISCOTTI_REGALO":
      return {
        ...state,
        biscottiRegalo: action.payload,
      };

    case "SET_SMASH_OPTION":
      return {
        ...state,
        smashOption: action.payload,
      };

    case "RESET_ORDER":
      return initialState;

    default:
      return state;
  }
};
