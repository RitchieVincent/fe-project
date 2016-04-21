import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from '../components/layout/layout';
import Home from '../components/ui/home';
import List from '../components/containers/list' 
import Page from '../components/containers/page' 
import Post from '../components/containers/post' 



export default (
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home} />
			<Route path="list" component={List}/>
			<Route path=":page" component={Page}/>
			<Route path="post/:post" component={Post} />
		</Route>
	</Router>
)