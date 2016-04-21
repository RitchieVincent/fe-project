import React from 'react';
import Axios from 'axios';

import Config from '../../config/config';


import Comment from '../ui/comment';

export default React.createClass({

	fetchComments(id){

		Axios.get(Config.apiUrl + 'comments?post='+ id).then((comments)=>{
			this.setState({
				loading: false,
				comments: comments.data
			});
		});

	},
	getInitialState(){
		return {
			loading: true,
			comments:[]
		}
	},
	componentDidMount(){

		this.fetchComments(this.props.id)

	},
	render(){

		if(this.state.loading){
			return(
				<p>loading</p>
			)
		}

		return(
			<div>
				{this.state.comments.map((item)=><Comment comment={item} key={item.id}/>)}
			</div>
		)
	}
})