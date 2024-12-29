import React, { useState } from 'react'
import Errorimage from "../Images/Errorimage.png"

function Errorboundary() {

    


  return (
    <div className='d-flex justify-content-center align-items-center mh-100 mw-100'>
     <img src={Errorimage} alt="" />
     
    </div>
  )
}

export default Errorboundary