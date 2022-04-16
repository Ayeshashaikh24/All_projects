// import logo from './logo.sv
import React  from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Navbar from './components/Navbar'

import './App.css';
function App (){
  
const [click,setclick]=useState('black')
function handle(){
  setclick('red')
}

return(
<>
<div className='App'>
<button id='click' onClick={handle}>Click me!</button>
<input  type='text' style={{color:click}}></input>
</div>
    

</>
);
  }

  export default App;
  

