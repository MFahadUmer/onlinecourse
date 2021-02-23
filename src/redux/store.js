import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import courseReducer from './courses/coursesReducer';

const store = createStore(courseReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
