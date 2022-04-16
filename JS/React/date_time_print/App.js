// import logo from './logo.sv
import React  from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Navbar from './components/Navbar'
function App (){
  const dt=null;
  const [date,setdate]=useState(dt);
  const handelDate=()=>{
    let dt=new Date().toLocaleString();
    setdate(dt);
  }
return(
<>
<h1>{date}</h1>
<button onClick={handelDate}>Click me!</button>

 </>
    );
  }
  export default App;
  

