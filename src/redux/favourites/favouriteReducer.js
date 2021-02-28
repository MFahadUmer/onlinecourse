import {
  ADD_COURSE_TO_FAVOURITE,
  FETCH_FAVOURITE_COURSE_FAILURE,
  FETCH_FAVOURITE_COURSE_REQUEST,
  FETCH_FAVOURITE_COURSE_SUCCESS,
} from './favouriteActionTypes';

const initialFavouriteState = {
  loading: false,
  courses: [],
  error: '',
};

let course = '';

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
      courses: '',
      error: action.payload,
    };
    case ADD_COURSE_TO_FAVOURITE:
      course = state.courses.concat(action.payload);
      return {
        ...state, course,
      };
    default: return state;
  }
};

export default favouriteReducer;
