export const defaultState = {
  view: "categories",
  viewFavoritesFirstTime: false,
};

const toggleCategoryQuotes = (state = defaultState, action) => {
  switch (action.type) {
    case "VIEW_QUOTES":
      return { ...state, view: "quotes" };
    case "VIEW_FAVORITE_QUOTES":
      return { ...state, view: "favQuotes" };
    case "VIEW_FAVORITE_QUOTES_AFTER_LOGIN":
      return { ...state, view: "favQuotes", viewFavoritesFirstTime: true };
    case "VIEW_CATEGORIES":
      return { ...state, view: "categories", viewFavoritesFirstTime: false };
    default:
      return state;
  }
};

export default toggleCategoryQuotes;
