// import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from 'axios'

const Home = () => {

	const [names, setNames] = useState([]);

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
			<h3>Insert info you want to send to the server: </h3>
			
		</div>
	);
};




export default Home;
