export const defaultState = {
  loadingLogin: false,
  userLoggedIn: false,
  error: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "START_LOGIN_ATTEMPT":
      return { ...state, loadingLogin: true };
    case "ACCEPT_LOGIN":
      return { ...state, loadingLogin: false, userLoggedIn: true };
    case "DECLINE_LOGIN":
      return { ...state, loadingLogin: false, error: true };
    case "LOGOUT":
      return { ...state, userLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
