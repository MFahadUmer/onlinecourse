import {
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST, FETCH_FAVOURITE_COURSE_SUCCESS,
} from '../favourites/favouriteActionTypes';

const authorCoursesInitialState = {
  status: '',
  loading: false,
  courses: [],
  error: [],
};

const authorCoursesReducer = (state = authorCoursesInitialState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITE_COURSE_REQUEST: return {
      ...state,
      loading: true,
    };
    case FETCH_FAVOURITE_COURSE_SUCCESS: return {
      ...state,
      courses: action.payload,
      status: 200,
      loading: false,
    };
    case FETCH_FAVOURITE_COURSE_FAILURE: return {
      ...state,
      error: action.payload,
      status: 401,
      loading: false,
    };
    default: return state;
  }
};

export default authorCoursesReducer;
