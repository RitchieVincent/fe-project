import React from 'react';

import Axios from 'axios';

import Config from '../../config/config';

import RouterStateMixin from '../../mixins/router-state';
import {Dump} from '../../helpers/development';


import Comments from './comments';

export default React.createClass({
	mixins:[RouterStateMixin],
	fetchPost(slug){

		Axios.get(Config.apiUrl + 'posts?slug=='+ slug).then((post)=>{
			this.setState({
				loading: false,
				post: post.data
			});
		});
		
	},

	getInitialState(){
		return{
			loading: true,
			post:{}
		}
	},
	componentWillReceiveProps(nextProps){

		this.checkRouterState(nextProps, 'post', 'fetchPost');

	},
	componentWillMount(){

		this.checkRouterState(this.props, 'post', 'fetchPost');

	},
	render(){
		return(
			<div>
				<p>I am a Post ({this.props.routeParams.post})</p>
					<p>Build my ui component at src/components/ui/post.js</p>
					<p>Data:</p>
				
					{Dump(this.state.post)}
				<Comments id={this.state.post.id}/>
			</div>
		)
	}
})