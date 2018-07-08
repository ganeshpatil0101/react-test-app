import axios from 'axios';

const baseUrl = 'http://localhost:3030/mf';

function getAll(){
	console.log("====> getAll MfServer ");
	return axios
		.get(baseUrl)
		.then(response => response.data);
}
/*
function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(baseUrl, bugData)
			.then(response => response.data);	
	} else {
		return axios
			.put(`${baseUrl}/${bugData.id}`, bugData)
			.then(response => response.data);	
	}
}

function remove(bugData){
	return axios
			.delete(`${baseUrl}/${bugData.id}`)
			.then(response => response.data);	
}
*/
let MfServer = { getAll };

export default MfServer;