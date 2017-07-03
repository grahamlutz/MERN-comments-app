import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';


class CommentList extends Component {
	render() {
		let commentNodes = this.props.data.map( user => {
			return(
					<Comment author={ user.username } key={ user.id }>
						{user}
					</Comment>
				)
		})
		return (
				<div style={ style.commentList }>
				{ commentNodes }
				</div>
			)

	}
}

export default CommentList;