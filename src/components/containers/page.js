import React from 'react';
import Axios from 'axios';

import Config from '../../config/config';

import {Dump} from '../../helpers/development';

import RouterStateMixin from '../../mixins/router-state'

import Loading from '../ui/loading';

import Page from '../ui/page';

export default React.createClass({
	mixins:[RouterStateMixin],
	getInitialState(){
		return {
			loading: true,
			page: {}
		}
	},

	fetchPage(slug){

		Axios.get(Config.apiUrl + 'pages?slug=='+ slug).then((page)=>{
			this.setState({
				loading: false,
				page: page.data
			});
		});
		
	},

	componentWillReceiveProps(nextProps){

		this.checkRouterState(nextProps, 'page', 'fetchPage');

	},
	componentWillMount(){

		this.checkRouterState(this.props, 'page', 'fetchPage');

	},
	render(){

		if(this.state.loading){
			return <Loading />
		}

		return(
			// 	{Dump(this.state.page)}
		

			<Page data={this.state.page}/>
		)
	}
})