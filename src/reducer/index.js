import { combineReducers } from 'redux';

import MfReducer from './MfReducer';
import StocksReducer from './StocksReducer';

let rootReducer = combineReducers({
	StocksData : StocksReducer,
	MfData : MfReducer
});

export default rootReducer;