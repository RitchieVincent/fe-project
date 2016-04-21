import React from 'react';
import {Dump} from '../../helpers/development';

const Comment = (props) => {
	return(
		<div>
			I am a comment <br/>
			Build me at src/components/ui/comment.js <br/> 
			{Dump(props.comment)}
		</div>

	)
};

Comment.propTypes = {
	comment: React.PropTypes.object.isRequired
}

export default Comment