// import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from 'axios'


const Home = () => {

	const [names, setNames] = useState([]);

	// useEffect( ()=>{
	// 	axios.get('http://localhost:8024/userfindAutoGens')
	// 	.then((response)=>{
	// 		console.log(response.data)
	// 		setNames(response.data)

	// 	})
	// 	.catch((error)=>{
	// 		console.log(error)
	// 	})
	// }, [])

	let object = {
		firstname : 'neo',
		lastname: 'sam',
		password: 'password',
		email: 'neo@gmail.com'
	}

	const sendDataToApi= ()=>{
		axios.post('http://localhost:8024/usercreate', object)
		.then((res)=>{
			console.log(res)
		})
		.catch((error)=>{
			console.log(error)
		})
	}

	useEffect(()=>{
		sendDataToApi()
	})

	return (
		<div>
			{
				// names != undefined ? (

				// 	names.map((user:any) => (
				// 		<p>{user.firstname } {user.lastname} and email is : {user.email}</p>
				// 	))
				// )
				
				//  : 
				// (<div>
				// 	there is nothing here....
				// </div>)
			}
		</div>
	);
};




export default Home;
