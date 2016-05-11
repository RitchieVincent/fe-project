import React from 'react'

const Page = (props) => {

	function createMarkup() {
		return {__html: props.data.content.rendered};
	};

	console.log(props);

	return (
		<div className="page">
			<h1 className="title">{props.data.title.rendered}</h1>
			<div className="content" dangerouslySetInnerHTML={createMarkup()} />
			<p className="date">Posted on: {props.data.date_gmt.substring(0, 10)}</p>
		</div>
	)

}

export default Page