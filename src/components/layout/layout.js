import React from 'react';
import Axios from 'axios';

//Config
import Config from '../../config/config';
//Components
import Sidebar from '../containers/sidebar.js';
import Nav from './nav';

export default React.createClass({

	contextTypes:{
		router: React.PropTypes.object.isRequired
	},

	getInitialState(){
		return{
			pagesLoading: true,
			pages: []
		}
	},

	componentDidMount(){

		Axios.get(Config.apiUrl + 'pages').then((pages)=>{
			this.setState({
				pagesLoading: false,
				pages: pages.data
			});
		});

	},
	render(){

		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						{/*<h1 className="text-center text-uppercase">Group Project 2</h1>*/}
					</div>
				</div>
				<div className="row">
					<Nav loading={this.state.pagesLoading} pages={this.state.pages} />
				</div>
				<div className="row">
					<div className="col-md-4">
						<Sidebar />
					</div>
					<div className="col-md-8">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
})