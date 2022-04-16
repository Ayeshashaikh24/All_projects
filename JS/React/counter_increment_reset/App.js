import React, { useState } from "react";

 export default function App(){
   const [time,settime]=useState(0);
   const reset=()=>{
     settime(0);

   };
   return(
<>
<h1>{time}</h1>
  <button onClick={()=>{settime(time+5);}}>click me</button>
  <button onClick={reset}>reset</button>

</>
   )
 }
