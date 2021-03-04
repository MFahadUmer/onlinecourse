import {
  ADD_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_REQUEST,
  FETCH_COURSE_SUCCESS, SET_MESSAGE,
} from './coursesActionTypes';

const initialState = {
  loading: false,
  courses: [],
  error: '',
  message: '',
};

let newCourses = '';

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_COURSE_SUCCESS:
      newCourses = state.courses.concat(action.payload);
      return {
        loading: false,
        newCourses,
        error: '',
      };

    case FETCH_COURSE_FAILURE: return {
      loading: false,
      error: action.payload,
    };

    case ADD_COURSE:
      newCourses = state.courses.concat(action.payload);
      return {
        ...state,
        loading: false,
        newCourses,
      };
    case SET_MESSAGE: return {
      ...state,
      message: action.payload,
    };
    default: return state;
  }
};

export default courseReducer;
