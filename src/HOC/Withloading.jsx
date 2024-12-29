import React, { useState } from 'react'



function Withloading (WrappedComponent) {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
      setLoading(false)
  }, 2000);

   return(props)=>{
       return(
     <>
        {loading ? "Loading..." : <WrappedComponent {...props}/>  }
  
    </>
   )}
}

export default Withloading