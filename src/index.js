import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MutualFunds from './mf';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import appStore from './store';

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<MutualFunds/>
		</div> 	    
	</Provider>
	, document.getElementById('root')
);
