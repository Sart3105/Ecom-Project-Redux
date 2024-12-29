import React, { useState } from 'react'

function Welcome() {

  const[number,setNumber] = useState(0)
 const[diff, setDiff] = useState(1);
  function increment(){
    setNumber(number + diff)
  }
  function decrement(){
    setNumber(number - diff)
  }

  function difference(){
    setDiff(diff+1)
    
  }

  return (
    <div>
        <h4>Please click the  below button {number} </h4>
        <p>Set the difference by clicking  <button onClick={difference} >Difference</button> {diff} </p>
        <button onClick={increment} >Increament</button>
        <button onClick={decrement} >Decreament</button>
    </div>
  )
}

export default Welcome
