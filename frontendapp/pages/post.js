// import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from 'axios'

const Post = () => {


	let object = {
		firstname : 'Phuti',
		lastname: 'lamola',
		password: 'password',
		email: 'phuti@gmail.com'
	}

	const sendDataToApi= ()=>{
		axios.post('http://localhost:8000/', object)
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
            <button onSubmit={sendDataToApi}>Press this button to send 'phuti', 'lamola' to the server</button>
			
		</div>
	);
};




export default Post;
