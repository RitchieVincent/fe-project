import React from 'react'
import {Link} from 'react-router'

const Item = (props) => <Link to={{pathname: props.slug, state:{page:props.page}}} className="btn btn-default navbar-btn text-uppercase" activeClassName="active">{props.title}</Link>

Item.propTypes = {
	page: React.PropTypes.object,
	title: React.PropTypes.string.isRequired,
	slug: React.PropTypes.string.isRequired
}

export default Item