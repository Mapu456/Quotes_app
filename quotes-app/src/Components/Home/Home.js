import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
	const [categories, setCategories] = useState("");

	useEffect(() => {
		axios.get('https://api.chucknorris.io/jokes/categories')
			.then(response => {
				setCategories(response.data)
			}).catch(function (error) {
				Promise.reject(error);
			});
	}, 10);
	console.log(categories)
	return (
		<div>
			<form>
				<h1>Categories</h1>
				<div id="button" className='row'>
					<button type='submit'>Log out</button>
				</div>
			</form>
		</div>
	)
}

export default Home