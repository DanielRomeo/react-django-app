
import { useState, useEffect } from "react";
import axios from 'axios'


const Home = () => {

	const [names, setNames] = useState([]);

	useEffect( ()=>{
		axios.get('http://localhost:8024/userfindAutoGens')
		.then((response)=>{
			console.log(response.data)
			setNames(response.data)

		})
		.catch((error)=>{
			console.log(error)
		})
 

	}, [])


	return (
		<div>
			{
				names != undefined ? (

					names.map((user) => (
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
