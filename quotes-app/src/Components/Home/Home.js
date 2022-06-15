import React, { useState, useEffect } from 'react'
import Login from '../Login/Login'
import axios from 'axios'

function Home() {
	const [categories, setCategories] = useState("");
	const [logout, setlogout] = useState(true);

	useEffect(() => {
		axios.get('https://api.chucknorris.io/jokes/categories')
			.then(response => {
				setCategories(response.data)
			}).catch(function (error) {
				Promise.reject(error);
			});
	}, 10);
	function handleLogout() {
		setlogout(!logout)
	}
	const Welcome = ({ text }) => {
		return (<ul>
			{text.map((value) => {
				return (
				<div class="card">
					<div class="card-body text-center">
						{value}
					</div>
				</div>
				)
			})}
		</ul>)
	};
	console.log(categories)
	return (
		<div>
			{logout ? (
				<form>
					<h1>Categories</h1>
					<Welcome text={categories} />
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