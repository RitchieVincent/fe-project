import React from 'react';

export default React.createClass({
	render: function(){
		return (
			<div>
				<h1>Container</h1>
				<div>{this.props.children}</div>
			</div>
		)
	}
});


//Class implementation


// class Container extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<h1>Container</h1>
// 				<div>{this.props.children}</div>
// 			</div>
// 		)
// 	}
// }

// export default Container;