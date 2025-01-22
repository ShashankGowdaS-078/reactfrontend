/*import axios from 'axios';
import { useState } from 'react';
export default function App() {
    const [details,setDetails] = useState("");
    async function handleClick(){
        const response =await axios.get("http://localhost:3000/bck");
        const response =await axios.post("http://localhost:3000/login");
        setDetails(response.data);
    }
    return(
        <>
        <button onClick={handleClick}>fetch details from backend</button>
        <h1>{details}</h1>
        </>
    )
}


import axios from "axios"
import { useState } from "react";
export default function App() {
    const [username, setUsername] = useState("");
    const randomName = {
        randomName:username
    }
    async function handleSubmit(e){
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/login", randomName)
        console.log(response.data);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            </form></>
    )
}

*/



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./login";
import NewSignin from "./Signin";

export default function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NewSignin setAuth={setAuth} />}  />
            
          {/* {isAuth ? (
            <Route path="/signin" element={<NewSignin />} />
          ) : (
          )} */}
        </Routes>
      </BrowserRouter>
   </>
  );
}




