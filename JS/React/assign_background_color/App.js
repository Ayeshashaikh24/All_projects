// import logo from './logo.sv
import React  from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Navbar from './components/Navbar'

import './App.css';
function App (){
const [style,setstyle]=useState("cont");
const changestyle=()=>{
  console.log("clicked");
  setstyle("cont2");
}
return(
<>
<div className='App'>change stylecolor</div>
<div className={style}> Hello </div>
  <button className='"butten' onClick={changestyle}>Click Me!</button>

 </>
    );
  }
  export default App;
  

