import React from 'react'


 function Navbar(props) {
   const name=props.name;
   const listItems=name.map((names)=><li>{names}</li>);
  return (
    <>
      <h1> name of students are:{listItems}</h1>
    </>

  );
           }
           export default Navbar;
