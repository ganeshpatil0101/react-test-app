function MfReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'UPDATE'){
		let {oldMf, newMf} = action.payload;
		let newState = currentState.map(mf => mf.id === oldMf.id ? newMf : mf);
		return newState;
	}
	return currentState;
}
export default MfReducer;