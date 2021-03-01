import { combineReducers } from 'redux';
import courseReducer from './courses/coursesReducer';
import userReducer from './users/userReducer';
import favouriteReducer from './favourites/favouriteReducer';
import authorCoursesReducer from './authorCourses/authorCoursesActionReducer';

const rootReducer = combineReducers({
  course: courseReducer,
  user: userReducer,
  favourite: favouriteReducer,
  authorCourse: authorCoursesReducer,
});

export default rootReducer;
