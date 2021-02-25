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
      console.log('yessssssssssssssssssssssss');
      // eslint-disable-next-line no-case-declarations
      const courses = state.courses.concat(action.payload);
      return { ...state, courses };

    default: return state;
  }
};

export default courseReducer;
