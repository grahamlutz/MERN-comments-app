import React, { Component } from 'react';
import style from './style';
import axios from 'axios';

class CommentForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = { username: '', email: '', password: '' };
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(e) {
		this.setState({ username: e.target.value });
	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		axios.post('http://localhost:1701/users', {
		    'username': this.state.username,
		    'email': this.state.email,
		    'password': this.state.password
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		console.log(`${this.state.username} said “${this.state.text}”`)
	}

	render() {
		return (

				<form style={ style.commentForm } onSubmit={ this.handleSubmit }>
					<input
						type='text'
						placeholder='Your name…'
						style={ style.commentFormAuthor}
						value={ this.state.username }
						onChange={ this.handleUsernameChange } />
					<input
						type='text'
						placeholder='Your email...'
						style={ style.commentFormText}
						value={ this.state.email }
						onChange={ this.handleEmailChange } />
					<input
						type='text'
						placeholder='Your password…'
						style={ style.commentFormText}
						value={ this.state.password }
						onChange={ this.handlePasswordChange } />
					<input
						type='submit'
						action="localhost:1701/users"
						style={ style.commentFormPost }
						value='Post' />
				</form>

			)
	}
}

export default CommentForm;