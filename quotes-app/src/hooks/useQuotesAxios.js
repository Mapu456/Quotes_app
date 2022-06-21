import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { QuotesApiAxios } from "../config/axios/QuotesApiAxios";

const useQuotesAxios = () => {
  const dispatch = useDispatch();

  const startOperation = () => {
    dispatch({ type: "LOADING" });
  };

  const loadCategories = useCallback(async () => {
    try {
      const result = await QuotesApiAxios.get(`/categories`);
      dispatch({ type: "SET_CATEGORIES", categories: result.data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error });
    }
  }, []);

  const setFavoriteQuotes = useCallback(async (favorites) => {
    dispatch({ type: "SET_FAVORITE_QUOTES", favoriteQuotes: favorites });
  }, []);

  const setCurrentCategory = useCallback(async (category) => {
    dispatch({ type: "SET_CURRENT_CATEGORY", category: category });
  }, []);

  const loadRandomQuote = useCallback(async (category) => {
    try {
      const result = await QuotesApiAxios.get(`/random?category=${category}`);
      dispatch({ type: "SET_QUOTE", quote: result.data?.value });
    } catch (error) {
      dispatch({ type: "ERROR", error: error });
    }
  }, []);

  return {
    startOperation: startOperation,
    loadCategories: loadCategories,
    setCurrentCategory: setCurrentCategory,
    setFavoriteQuotes: setFavoriteQuotes,
    loadRandomQuote: loadRandomQuote,
  };
};

export default useQuotesAxios;
