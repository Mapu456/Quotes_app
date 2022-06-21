export const usersDefaultState = {
    users: [],
    currentUserId: "",
  };

  const setQuoteIntoFavorites = (users, quote, currentUserId) => {
    return users
    .filter(user => user.id === currentUserId)
    .map(user => {
      const favoriteQuotesCopy = [...user.favoriteQuotes]
      favoriteQuotesCopy.push(quote);
    });
  }

  const addUserToUsers = (users, user) => {
    return [...users].push(user);
  }
  
  const userSessionReducer = (state = usersDefaultState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state, users: [...state.users, action.user] }
      case "SET_USERS": 
        return { ...state, users: action.users };
      case "ADD_QUOTE_TO_FAVORITES":
        return { ...state, users: setQuoteIntoFavorites([...state.users], action.quote, state.currentUserId) };
      case "SET_CURRENT_CONNECTED_USER":
        return { ...state, currentUserId: action.userId };
      default:
        return state;
    }
  };
  
  export default userSessionReducer;