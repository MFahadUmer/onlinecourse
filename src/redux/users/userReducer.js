import { USER_SIGNIN, USER_SIGNUP } from './userActionTypes';

const userInitialState = {
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
    default: return state;
  }
};

export default userReducer;
