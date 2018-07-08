import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;