import React from 'react';


const Exercises = (props) => {
  return (
    <div>
   {/* {  console.log(propss)} */}
   {props.currentCategory.map(e => 
    <div>
       
        <h1>{e.name}</h1>
        
        </div>)}
     
    </div>
  );
};

export default Exercises;