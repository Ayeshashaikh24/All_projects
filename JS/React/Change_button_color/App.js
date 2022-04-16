import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import About from './camponants/About';
 
function App(){
  const [state,setstate]=useState(false);
  const toggle=()=>{
    setstate(!state);
  }
  return (
    <div>
      <button onClick={toggle} className={'toggle--button '+ (state ? 'toggle--close' : ' ')} >
      click me!</button>
    </div>
  )
}


export default App;
