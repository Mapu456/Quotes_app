import React, { useState } from 'react'
import {Alert} from 'react-bootstrap';
import Login from '../Login/Login'

function Registration() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [nickname, setNickname] = useState("");
	const [password, setPassword] = useState("");
	const [flag, setflag] = useState(false);
	const [login, setLogin] = useState(true);

function handleFormSubmit(e){
	e.preventDefault();
	// si alguno de estos campos no esta lleno entonces flag sera true y por ende entrara a la condicion de abajo (alert)
	if(!name || !email || !nickname || !password ) {
		setflag(true)
	} else {
		setflag(false)
		localStorage.setItem("Nickname", JSON.stringify(nickname));
		localStorage.setItem("Password", JSON.stringify(password));

		console.log("Saved in local storage!");
		setLogin(!login);
	}
}
//si selecciono login in (es por que ya esta logueado) entonces login = false y se va para el componente Login y si no selecciono login es porque no esta logueado por ende la variable login= true entrara al componente register
function handleClick(){
	setLogin(!login);
}
	return (
	<div>
	{login ? (
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
			<button type='submit' className='btn btn-dark btn-lg btn-block '>Register</button>
			<p onClick={handleClick}>Already registered? Login in </p>
		{flag &&
            <Alert color='primary' variant="danger" >
                Please fill all fields!
            </Alert>
        }
		</form>
	) : (
		<login/>
		)}
	</div>
  )
}

export default Registration