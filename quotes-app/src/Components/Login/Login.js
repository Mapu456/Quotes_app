import React, { useState } from 'react'
import {Alert} from 'react-bootstrap';
import { createStore } from 'redux'

function Login() {
	let user = localStorage.getItem("ArrayUsers").replace(/"/g, "");
function todos(state, action) {
	switch (action.type) {
		case 'ADD_TOD':
			let userInfo = []
			return userInfo.concat([state])
		default:
			return state
	}
}

const store = createStore(todos, user)

store.dispatch({
	type: 'ADD_TOD',
})

console.log(store.getState())

	const [nicknamelog, setNicknamelog] = useState("");
	const [passwordlog, setPasswordlog] = useState("");
	const [flag, setflag] = useState(false);

function handleLogin(e) {
	e.preventDefault();
	let nick = localStorage.getItem("Nickname").replace(/"/g,"");
	let pass = localStorage.getItem("Password").replace(/"/g,"");

	if(!nicknamelog || !passwordlog ) {
		setflag(true)
		console.log("Empty");
	} else if ( nicknamelog !== nick || passwordlog !== pass) {
		setflag(true)
	} else {
		setflag(false);
	}
}

	return (
		<div>
			<form onSubmit={handleLogin}>
				<h1>Login</h1>
				<div className='form-group'>
					<label>Nickname</label>
					<input
						type='text'
						className='form-control'
						placeholder='Enter a nickname'
						onChange={(event) => setNicknamelog(event.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input
						type='text'
						className='form-control'
						placeholder='Enter a new password'
						onChange={(event) => setPasswordlog(event.target.value)}
					/>
				</div>
				<div id="button" className='row'>
					<button type='submit'>Login</button>
				</div>
				<p className="forgot-password text-center">
                	<a href="#">Sign up</a>
            	</p>
				{flag &&
					<Alert color='primary' variant="danger" >
						Please fill correctly all fields!
					</Alert>
				} 
			</form>
		</div>
	)
}

export default Login