import React, { useState } from 'react'
import {Alert} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { createStore } from 'redux'

function Registration() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [nickname, setNickname] = useState("");
	const [password, setPassword] = useState("");
	const [flag, setflag] = useState(false);
	
function handleFormSubmit(e){
	//let userInfo = []
	const arrayUsers = [];
	e.preventDefault();
	// si alguno de estos campos no esta lleno entonces flag sera true y por ende entrara a la condicion de abajo (alert)
	if(!name || !email || !nickname || !password ) {
		setflag(true)
	} else {
		setflag(false)
		// function todos(state = {}, action) {
		// 	switch (action.type) {
		// 		case 'ADD_TOD':
		// 			userInfo.concat([state])
		// 			return userInfo.concat([state])
		// 		default:
		// 			return state
		// 	}
		// }
		
		// const store = createStore(todos, {"uuid": uuidv4(), "Nickname":nickname, "Password": password})
		
		// store.dispatch({
		// 	type: 'ADD_TOD',
		// })
		
		// console.log(store.getState())
		arrayUsers.push({"uuid": uuidv4(), "Nickname":nickname, "Password": password})
		localStorage.setItem("ArrayUsers", JSON.stringify(arrayUsers));
		// localStorage.setItem("UUID", JSON.stringify(uuidv4()));
		// localStorage.setItem("Nickname", JSON.stringify(nickname));
		// localStorage.setItem("Password", JSON.stringify(password));
		console.log("Saved in local storage!");
	}
}
	return (
	<div>
		<form onSubmit={handleFormSubmit}>
			<h1>Register</h1>
			<div className='form-group'>
				<label>Name</label>
				<input 
				type='text'
				className='form-control'
				placeholder='Enter full name'
				onChange={(event)=> setName(event.target.value)}
				/>
			</div>
			<div className='form-group'>
				<label>Email</label>
				<input 
				type='text'
				className='form-control'
				placeholder='Enter full email'
				onChange={(event)=> setEmail(event.target.value)}
				/>
			</div>
			<div className='form-group'>
				<label>Nickname</label>
				<input 
				type='text'
				className='form-control'
				placeholder='Enter a nickname'
				onChange={(event)=> setNickname(event.target.value)}
				/>
			</div>
			<div className='form-group'>
				<label>Password</label>
				<input 
				type='text'
				className='form-control'
				placeholder='Enter a new password'
				onChange={(event)=> setPassword(event.target.value)}
				/>
			</div>
			<div id="button" className='row'>
				<button type='submit'>Register</button>
			</div>
			<p className="forgot-password text-right">
                Already registered? <a href="#">log in</a>
            </p>
		{flag &&
            <Alert color='primary' variant="danger" >
                Please fill all fields!
            </Alert>
        }
		</form>
	</div>
  )
}

export default Registration