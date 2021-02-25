import {
  ADD_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_REQUEST,
  FETCH_COURSE_SUCCESS,
} from './coursesActionTypes';

const initialState = {
  loading: false,
  courses: [],
  error: '',
};

let courses = '';

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_COURSE_SUCCESS: return {
      loading: false,
      courses: action.payload,
      error: '',
    };

    case FETCH_COURSE_FAILURE: return {
      loading: false,
      error: action.payload,
    };

    case ADD_COURSE:
      courses = state.courses.concat(action.payload);
      console.log(courses);
      return { ...state, courses };

    default: return state;
  }
};

export default courseReducer;
