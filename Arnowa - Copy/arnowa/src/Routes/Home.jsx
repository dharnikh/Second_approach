import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
function Home() {
    const[message,setMessage] = useState([])
    const[user,setUsers] = useState([])
    const[timeStamp,settimeStamp]= useState(Date.now())
    const navigate = useNavigate();
    async function getMessage(){
    try{
  let res = await fetch(`http://localhost:8000/users`)
  let data = await res.json()
  console.log(data)
setUsers(data)
    }
    catch(err){
      console.log(err)
    }
      
    }
    useEffect(()=>{
      getMessage()
    },[])
    

    const users = [{id:'1', mobile:'27826', email:'wywuiw', message:['onllll']}, {id:'2', mobile:'278226', email:'wy1wuiw'}] //purana users array



const onhandleSubmit = () => {

  const mobile_from_home = '27826';
  const new_message = 'from input state';

  const new_users = users.map((itm) => itm.mobile == mobile_from_home ? {...itm, message: [...itm.message, new_message] } : itm)
  //isse users root pe post kr de
  console.log(users);
  console.log(new_users);
}


    // fetch("http://localhost:8000/users", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message,timeStamp }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
        
    //       navigate("/login");
        
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });



  return (

    <div>
        <h1>{message}</h1>
      <input value={message} onChange={(e)=>{
        setMessage(e.target.value)
    }} placeholder='add message here' />
      <button onClick={onhandleSubmit}>Add Message</button>
    </div>
  )
}

export default Home
