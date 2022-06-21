const addUser = (request) => {
    return {
      type: request.type,
      user: request.user
    };
};

const setUsers = (request) => {
  return {
    type: request.type,
    user: request.users
  };
};

const setCurrentConnectedUser = (request) => {
  return {
    type: request.type,
    userId: request.userId
  };
};

const addQuoteToFavorites = (request) => {
  return {
    type: request.type,
    quote: request.quote
  };
};