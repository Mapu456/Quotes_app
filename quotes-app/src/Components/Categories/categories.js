// import { createStore } from 'redux'

// let nick = localStorage.getItem("Nickname").replace(/"/g, "");
// function todos(state = {}, action) {
// 	switch (action.type) {
// 		case 'ADD_CATEGORY':
// 			return state.concat([action.text])
// 		default:
// 			return state
// 	}
// }

// const store = createStore(todos, { name: nick, favCategory: "animal" })

// store.dispatch({
// 	type: 'ADD_CATEGORY',
// 	text: 'Read the docs'
// })

// console.log(store.getState())
// // [ 'Use Redux', 'Read the docs' ]


// import React from 'react'
// import { createStore } from 'redux'

// function Categories() {
// 	let nick = localStorage.getItem("Nickname").replace(/"/g, "");
// 	let value 

// 	const favoriteCategory = (state, action) => {
// 		const { type } = action
// 		if (type == '@saver/category') {
// 			let userInfo = []
// 			userInfo.push(state)
// 			return userInfo
// 		}
// 	}
// 	const store = createStore(favoriteCategory)

// 	const saveInformation = {
// 		type: '@saver/category'
// 	}

// 	store.subscribe(() => {
// 		console.log(store.getState())
// 	})
// 	store.dispatch({ name: nick, favCategory: "animal" }, saveInformation)
// 	//favoriteCategory({name: nick, favCategory: "animal"}, saveInformation)

// }
// export default Categories