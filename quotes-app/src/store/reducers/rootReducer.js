import authReducer from './authReducer';
import loadQuoteReducer from './loadQuoteReducer';
import toggleCategoryQuotes from './toggleCategoryQuotes';
import userSessionReducer from './userSessionReducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    authReducer: authReducer,
    loadQuoteReducer: loadQuoteReducer,
    toggleCategoryQuotes: toggleCategoryQuotes,
    userSessionReducer: userSessionReducer,
})

export default rootReducer;