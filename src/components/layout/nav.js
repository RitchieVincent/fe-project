import React from 'react';
import Axios from 'axios';
import NavItem from '../ui/navItem';


export default React.createClass({
	render(){
		if(this.props.loading){
			return(
				<nav className="navbar navbar-default">
					<p>loading</p>
				</nav>
			)
		}
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav">
					<NavItem slug="list" title="list" />
					{ this.props.pages.map((page)=><NavItem key={page.id} page={page} slug={page.slug} title={page.title.rendered}/>) }
				</ul>
			</nav>
		)
	}
})