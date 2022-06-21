export const defaultState = {
  isLoading: false,
  error: false,
  quote: "",
  currentCategory: "",
  categories: [],
  favoriteQuotes: [],
};

const loadQuotesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true, error: false, quote: "" };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.categories,
        isLoading: false,
      };
    case "SET_FAVORITE_QUOTES":
      return {
        ...state,
        favoriteQuotes: action.favoriteQuotes,
        isLoading: false,
      };
    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.category,
      };
    case "SET_QUOTE":
      return {
        ...state,
        isLoading: false,
        error: false,
        quote: action.quote,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        error: true,
        quote: "",
      };
    default:
      return state;
  }
};

export default loadQuotesReducer;
