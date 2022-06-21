const setQuoteMessage = (request) => {
    return {
      type: request.type,
      quote: request.quote
    };
};

const setQuotesCategories = (request) => {
  return {
    type: request.type,
    categories: request.categories
  };
};

const setCurrentCategory = (request) => {
  return {
    type: request.type,
    categories: request.category
  };
};

const startLoadingQuote = (request) => {
    return {
      type: request.type,
    };
};

const setError = (request) => {
  return {
    type: request.type,
    error: request.error
  };
};

const setFavoriteQuotes = (request) => {
  return {
    type: request.type,
    favoriteQuotes: request.favoriteQuotes
  };
};