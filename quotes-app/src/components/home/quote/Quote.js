import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImHeart } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Card from "../../hoc/Card";
import useQuotesAxios from "../../../hooks/useQuotesAxios";
import "./Quote.scss";

function Quote(props) {
  const [currentFavoriteQuotesIndex, setCurrentFavoriteQuotesindex] =
    useState(0);
  const { startOperation, loadRandomQuote } = useQuotesAxios();
  const { users, currentUserId } = useSelector(
    (state) => state?.userSessionReducer
  );
  const { isLoading, quote, currentCategory } = useSelector(
    (state) => state.loadQuoteReducer
  );
  const { view } = useSelector((state) => state.toggleCategoryQuotes);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const loadNextFromFavorites = () => {
    let quote;
    let nextIndex;
    if (currentFavoriteQuotesIndex === props.favoriteQuotes.length - 1) {
      nextIndex = 0;
      quote = props.favoriteQuotes[nextIndex];
    } else {
      nextIndex = currentFavoriteQuotesIndex + 1;
      quote = props.favoriteQuotes[nextIndex];
    }
    dispatch({ type: "SET_QUOTE", quote: quote });
    setCurrentFavoriteQuotesindex(nextIndex);
  };

  const closeDetailedQuote = () => {
    dispatch({ type: "VIEW_CATEGORIES" });
  };

  const loadNextRandomly = () => {
    startOperation();
    loadRandomQuote(currentCategory);
  };

  const saveAsFavorite = () => {
    const usersCopy = [...users];
    const currentUser = usersCopy.find((user) => user.id === currentUserId);
    const indexOfCurrentUser = usersCopy.indexOf(currentUser);
    const currentUserCopy = { ...currentUser };
    currentUserCopy.favoriteQuotes.push(quote);
    usersCopy[indexOfCurrentUser] = currentUserCopy;
    dispatch({ type: "SET_USERS", users: usersCopy });
  };

  return (
    <div>
      <div className="quote-head">
        <div>{view == "favQuotes" ? "Your favorite quotes" : "Quotes"}</div>
        <GrClose onClick={closeDetailedQuote} />
      </div>
      <Card width={90} color="#82ccdd">
        <div className="quote-wrapper">
          {isLoading ? (
            <div></div> //Load a spinner here
          ) : (
            <div className="quote-interact">
              <div className="quote-msg-wrapper">
                {view == "favQuotes"
                  ? props.favoriteQuotes[currentFavoriteQuotesIndex]
                  : quote}

              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {view === "favQuotes" ? null : (
                  <ImHeart className="icon-heart" onClick={saveAsFavorite} color="red" size={30} />
                )}
                                <GrFormNext
                  onClick={
                    view === "favQuotes"
                      ? loadNextFromFavorites
                      : loadNextRandomly
                  }
                  size={40}
                />
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Quote;
