import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router'

//Config
import Config from '../../config/config';

//Helpers
import {Dump} from '../../helpers/development';

//Components
import Loading from '../ui/loading';
import listItem from '../ui/listItem';


export default React.createClass({

	getInitialState(){
		return{
			loading: true,
			list: []
		}
	},
	componentDidMount(){

		Axios.get(Config.apiUrl + 'posts').then((posts)=>{
			this.setState({
				loading: false,
				list: posts.data
			});
		})

	},
	render(){

		if(this.state.loading){
			return <Loading />
		}

		return (
			<div>
				<h2>Posts</h2>
				<ul>
					{
						this.state.list.map((post)=>{
							return(
								<li key={post.id}>
									<Link to={{pathname:'post/' + post.slug, state:{post: post}}} >
									{/*I am a list item, build me at src/components/ui/listItem.js
									<br/> {Dump(post)}*/}

									<h3>{post.title.rendered}</h3>

									<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />

									</Link>
								</li>
							)
						})
					}
					<listItem props={this.state.list}/>
				</ul>
			</div>
		)

	}

})