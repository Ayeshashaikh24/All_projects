import { useState } from 'react';
import './App.css';


const  App=()=> {
 
  const [counter,setcounter]=useState(1);
  const increamentCounter=()=>setcounter(counter+1);
  
  let decrementCounter=()=>setcounter(counter-1);

 if(counter<=0){
   decrementCounter=()=>setcounter(0);
 }
  return (
 < >
 <h1>{counter}</h1>
 <button   onClick={increamentCounter} > click me</button>

 <button onClick={decrementCounter} >Click Me</button>
 
 

    </>
  );
}

export default App;

