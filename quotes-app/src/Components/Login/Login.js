import React, { useState } from 'react'
import {Alert} from 'react-bootstrap';
import Home from '../Home/Home'

function Login() {
	const [nicknamelog, setNicknamelog] = useState("");
	const [passwordlog, setPasswordlog] = useState("");
	const [flag, setflag] = useState(false);
	const [home, setHome] = useState(true);

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
		setHome(!home);
		setflag(false);
	}
}

	return (
		<div>
			{home ? (
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
				<div id="button" class="row">
					<button type='submit'>Login</button>
				</div>
				{flag &&
					<Alert color='primary' variant="danger" >
						Please fill correctly all fields!
					</Alert>
				} 
			</form>
		):(
			<Home/>
		)}
		</div>
	)
}

export default Login