import { combineReducers } from 'redux';
import userReducer from './modules/Login/reducer';
import bookReducer from './modules/Books/reducer';

const mainReducer = combineReducers({
  user: userReducer,
  books: bookReducer,
});

export default mainReducer;