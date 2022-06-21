import Card from "../../hoc/Card";
import { useSelector, useDispatch } from "react-redux";
import useQuotesAxios from "../../../hooks/useQuotesAxios";
import "./Category.scss"

const Category = (props) => {
  const { setCurrentCategory, loadRandomQuote } = useQuotesAxios();
  const { isLoading } = useSelector((state) => state?.loadQuoteReducer);
  const dispatch = useDispatch();

  const loadQuotesForCategory = (category) => {
    setCurrentCategory(category);
    loadRandomQuote(category).then(() => {

      dispatch({ type: "VIEW_QUOTES" });
    });
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Card width={90} padding={10}  color="#82ccdd">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="category-wrapper">
          <div className="category-title">{capitalizeFirstLetter(props.name)}</div>
          <div className="row">
            <button className="view-button" onClick={() => loadQuotesForCategory(props.name)}>View Random Quotes</button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Category;
