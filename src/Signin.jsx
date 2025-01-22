import axios from "axios"
import { useState } from "react";
export default function NewSignin(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
    const user = {
    username : username,
    password : password
  };
 async function handleSubmit(e){
    e.preventDefault(); 
    const response=await axios.post("https://gatbackend-7gu5.onrender.com/signin",{user});
    console.log(response.data);
    alert("OK")
    setUsername("");
    setPassword("");
  }
  return(
    <>
    <h1>This is Sign in Page</h1>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">username</label>
      <input type="text" 
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
      />
      <label htmlFor="">Password</label>
      <input type="password" 
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
      
      <input type="submit" />
    </form>
    </>
  )
}