import React from 'react'

const Page = (props) => {

	console.log(props)
	return (
		<div>
			<h1>{props.data.title.rendered}</h1>
			{props.data.content.rendered}
			<p className="date">{props.data.date_gmt.substring(0, 10)}</p>
		</div>
	)

}

export default Page