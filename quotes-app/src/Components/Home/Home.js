import React, { useEffect, useState } from 'react'
import Login from '../Login/Login'
import axios from 'axios'

function Home() {
	const [categories, setCategories] = useState("");
	const [logout, setlogout] = useState(true);
	const list = []

	useEffect(() => {
		axios.get('https://api.chucknorris.io/jokes/categories')
			.then(response => {
				setCategories(response.data)
			}).catch(function (error) {
				Promise.reject(error);
			});
	  });
	function handleLogout() {
		setlogout(!logout)
	}
	categories.forEach((product) => {list.push(<li>{product}</li>)})
	console.log(categories)
	return (
		<div>
			{logout ? (
				<form>
					<h1>Categories</h1>
					<div>
						{list}
					</div>
					<div id="button" className='row'>
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