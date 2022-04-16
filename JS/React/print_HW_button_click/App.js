import React from 'react';

import  { useState } from 'react';



import "./App.css";


function App() {
  const dt=null;
  const [date,setdate]=useState(dt);
  const handel=()=>{
    let dt="Hello World!";
    setdate(dt)

  };
   return (
    <>
    <h1>{date}</h1>
    <button onClick={handel}>Click Me!</button> 
    {/* <p> {change}</p> */}
    
    </>
  );
}
  
export default App;




