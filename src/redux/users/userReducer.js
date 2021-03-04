import {
  USER_API_FAILURE,
  USER_API_REQUEST, USER_API_SUCCESS,
} from './userActionTypes';

const userInitialState = {
  loading: false,
  logStatus: false,
  user: [],
  error: '',
};

let user = [];

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_API_REQUEST: return {
      ...state,
      loading: true,
    };
    case USER_API_SUCCESS:
      user = state.user.concat(action.payload);
      return {
        ...state,
        loading: false,
        user,
        error: '',
        logStatus: true,
      };
    case USER_API_FAILURE: return {
      ...state,
      loading: false,
      logStatus: false,
      error: action.payload,
    };
    default: return state;
  }
};

export default userReducer;
