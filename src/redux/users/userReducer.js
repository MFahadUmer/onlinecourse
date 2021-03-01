import {
  API_RESPONSE_STATUS, USER_FAILURE, USER_LOG_STATUS, USER_SIGNIN, USER_SIGNUP,
} from './userActionTypes';

const userInitialState = {
  logStatus: false,
  status: 400,
  loading: false,
  user: [],
  error: '',
};

let user = '';

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      user = action.payload;
      return {
        ...state, user,
      };
    case USER_SIGNIN:
      user = action.payload;
      return {
        ...state, user,
      };
    case API_RESPONSE_STATUS: return {
      ...state,
      status: action.payload,
    };
    case USER_LOG_STATUS: return {
      ...state,
      logStatus: action.payload,
    };
    case USER_FAILURE: return {
      ...state,
      error: action.payload,
    };
    default: return state;
  }
};

export default userReducer;
