import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import mfActionCreators from './actions';

let Mfname = ({mf}) => {
	 let {nm}=mf.name;
	return (
		<div>
			<span> {nm} </span>
		</div>
		);
};

class MutualFunds extends Component{
	componentDidMount() {
		this.props.load();
	}
	render(){
		let { mfs} = this.props;
		console.log("++++=====> ",mfs);
		return(
			<div>
				Mf loaded 
				
			</div>
		)
	}
}

//State extraction 
function mapStateToMfProps(storeState){
	let mfs = storeState.MfData;
	return { mfs : mfs };
}

//action creation
function mapDispatchToMfProps(dispatch){
	let mfActions = bindActionCreators(mfActionCreators, dispatch);
	return mfActions;	
}

export default connect(
	mapStateToMfProps,
	mapDispatchToMfProps
)(MutualFunds);