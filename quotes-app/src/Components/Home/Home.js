import React, { useState } from 'react'
import Login from '../Login/Login'

function Home() {
	const [logout, setlogout] = useState(true);

	function handleLogout() {
		setlogout(!logout)
	}
	return (
		<div>
			{logout ? (
				<form>
					<h1>Categories</h1>
					<button onClick={handleLogout} type='submit' className='btn btn-dark btn-lg btn-block '>Log out</button>
				</form>
			) : (
				<Login />
			)}
		</div>
	)
}

export default Home