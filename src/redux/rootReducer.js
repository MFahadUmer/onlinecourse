import { combineReducers } from 'redux';
import courseReducer from './courses/coursesReducer';
import userReducer from './users/userReducer';
import favouriteReducer from './favourites/favouriteReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  user: userReducer,
  favourite: favouriteReducer,
});

export default rootReducer;
