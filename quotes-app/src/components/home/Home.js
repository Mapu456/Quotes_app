import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Quote from "./quote/Quote";
import Navbar from "./navbar/Navbar";
import Categories from "./categories/Categories";
import useQuotesAxios from "../../hooks/useQuotesAxios";

const Home = () => {
  const { view } = useSelector((state) => state.toggleCategoryQuotes);
  const { users, currentUserId } = useSelector((state) => state?.userSessionReducer);
  const { categories, favoriteQuotes } = useSelector(
    (state) => state?.loadQuoteReducer
  );

  const { loadCategories, setFavoriteQuotes } = useQuotesAxios();

  useEffect(() => {
    const favoriteQuotes = users
      .filter((user) => currentUserId === user.id)
      .map((user) => user.favoriteQuotes)[0];
    loadCategories();
    setFavoriteQuotes(favoriteQuotes);
  }, []);

  return (
    <div>
      <Navbar />
      {view === "favQuotes" || view === "quotes" ? (
        <Quote favoriteQuotes={favoriteQuotes} />
      ) : (
        <Categories categories={categories} />
      )}
    </div>
  );
};

export default Home;
