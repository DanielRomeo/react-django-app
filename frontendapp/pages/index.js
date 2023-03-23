// import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from 'axios'


const Home = () => {
	const [persons, setPersons] = useState([]);

	useEffect( ()=>{
		axios.get('http://localhost:8000/')
		.then((response)=>{
			console.log(response.data)
			setPersons(response.data)

		})
		.catch((error)=>{
			console.log(error)
		})

	}, [])

	return (
		<div>
			<h3>Information already in the Server is: </h3>
			{
				persons != undefined ? (

					persons.map((user) => (
						<p>{user.firstname } {user.lastname} and email is : {user.email}</p>
					))
				)
				
				 : 
				(<div>
					there is nothing here....
				</div>)
			}
		</div>
	);
};




export default Home;
