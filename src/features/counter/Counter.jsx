import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './counterSlice'


export function Counter() {
 
  const [Amount, setAmount] = useState();
  
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

 const handleIncrease = ()=>{
    dispatch(increment())
 }

const handleDecreament = ()=>{
  dispatch(decrement())
}

 function handleReset(){
  dispatch(reset())
 }

 function handleIncAmount(){
  dispatch(incrementByAmount(Amount))
 }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={handleIncrease}
        >
          Increment
        </button><br />
        <span>{count}</span><br />
        <button
          aria-label="Decrement value"
          onClick={handleDecreament}
        >
          Decrement
        </button>
        <button
          aria-label="Reset value"
          onClick={handleReset}
        >
          Reset
        </button><br />
        <input type="number" 
         onChange={(e)=> setAmount(e.target.value)}
         placeholder='set the increament value'  /><br/>
          <button
          aria-label="INC Amount Value"
          onClick={handleIncAmount}
        >
          IncAmount By
        </button>
      </div>
    </div>
  )
}