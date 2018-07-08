import MfServer from '../services/MfServer';

function load() {
	return function(dispatch){
		MfServer
			.getAll()
			.then(mf => {
				console.log("====action loan getall ",mf);
				let action = { type : 'LOAD', payload : mf};
				dispatch(action);
			});
	}
}

let mfActionCreators = { load };
export default mfActionCreators;