function StocksReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	return currentState;
}
export default StocksReducer;