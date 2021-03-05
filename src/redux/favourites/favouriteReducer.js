import {
  ADD_COURSE_TO_FAVOURITE,
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST,
  FETCH_FAVOURITE_COURSE_SUCCESS, REMOVE_COURSE_FROM_FAVOURITE,
} from './favouriteActionTypes';

const initialFavouriteState = {
  loading: false,
  courses: [],
  error: '',
};

let courses = [];

const favouriteReducer = (state = initialFavouriteState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITE_COURSE_REQUEST: return {
      ...state,
      loading: true,
    };
    case FETCH_FAVOURITE_COURSE_SUCCESS: return {
      ...state,
      loading: false,
      courses: action.payload,
      error: '',
    };
    case FETCH_FAVOURITE_COURSE_FAILURE: return {
      ...state,
      loading: false,
      courses: [],
      error: action.payload,
    };
    case ADD_COURSE_TO_FAVOURITE:
      courses = state.courses.concat(action.payload);
      return {
        ...state,
        courses,
      };
    case REMOVE_COURSE_FROM_FAVOURITE:
      courses = state.courses.filter(course => course.course_id !== action.payload);
      return {
        ...state,
        courses,
      };
    default: return state;
  }
};

export default favouriteReducer;
