import React, { useState } from 'react'


function Form() {
 
    const [name,setName] = useState({firstName:"",lastName:""});
    
  return (
    <div>
    
      {name.firstName}-{name.lastName} <br />
   <input  onChange={(e)=> setName({...name,firstName:e.target.value})} type="text" value={name.firstName} />
   <input  onChange={(e)=> setName({...name,lastName:e.target.value})} type="text" value={name.lastName} />

    </div>
  )
}

export default Form