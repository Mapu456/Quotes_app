import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "../../store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";

const persistConfig = {
  key: "root-state",
  storage: storage,
  whitelist: ["userSessionReducer", "authReducer"],
  blacklist: ["loadQuoteReducer", "toggleCategoryQuotes"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { persistor };
