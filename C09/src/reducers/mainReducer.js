import { combineReducers } from 'redux';
import userReducer from './loginReducer';
import bookReducer from './bookReducer';

const mainReducer = combineReducers({
  user: userReducer,
  books: bookReducer,
});

export default mainReducer;