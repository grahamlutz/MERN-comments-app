import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import DATA from './data';
import style from './style';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = { data: null };
	}
	componentWillMount() {
	    DATA.then((result) => {  
	          	this.setState({
		            data: result
		          });
	        })
  	}
	render() {
		if (this.state.data) {
	      return(

			<div style={ style.commentBox }>
				<h2>Comments:</h2>
				<CommentList data={ this.state.data } />
				<CommentForm />
			</div>

			)
	    }
		return <div>Loading...</div>;
	}
}

export default CommentBox;