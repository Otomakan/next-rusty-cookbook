
import Link from 'next/link'
import Layout from '../components/Layout'
import React from 'react'
// const fetchRecipe = async () => {
// 	let recipes = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   	return recipes.json()
// }

// const getRecipeInfo = () => (
// 	<ul>
// 		{fetchRecipe().map((item)=>
// 			<div>{item.title}</div>
// 			)
// 		}
// 	</ul>
// )

export default class Recipe extends React.Component {
	

	constructor(props) {
	  super(props);
		
	  this.state = {
	  	title:"nothing"
	  };
	}
	async componentDidMount(){
		let request = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		let recipe = await request.json()
		this.setState({
			title: recipe.title
		})
	}
	// methods
	render(){
	return(
		<Layout>
			<div>
				<h1>{this.state.title}</h1>
			</div>
			</Layout>
			)
	}
}
