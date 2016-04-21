import React from 'react';

const UiTest = props => (
		<div>
			<p>UI</p>
			<p>{props.name}</p>
		</div>
)


UiTest.propTypes = {
	name: React.PropTypes.string.isRequired
}

export default UiTest
