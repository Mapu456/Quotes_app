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
					<div id="button" class="row">
						<button onClick={handleLogout} type='submit'>Log out</button>
					</div>
				</form>
			) : (
				<Login />
			)}
		</div>
	)
}

export default Home