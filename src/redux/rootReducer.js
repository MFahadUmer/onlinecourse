import { combineReducers } from 'redux';
import courseReducer from './courses/coursesReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  user: userReducer,
});

export default rootReducer;
