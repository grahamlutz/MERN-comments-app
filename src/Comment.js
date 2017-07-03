import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Comment extends Component {

	render() {
		return(

				<div style={ style.comment }>
					<h2>{}</h2>
					<h3>{this.props.children.username}</h3>
					<h4>{ this.props.children.email} </h4>
					<h4>{ this.props.children.password} </h4>
				</div>

			)
	}
}

export default Comment;