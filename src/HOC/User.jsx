import React, { useState } from 'react'

 const User = () => {
   
    const info = {
        Name:"HOC",
        Email:"XYZ@example.com"
    };

  return (
        <div>
            <p>Name:{info.Name}</p>
            <p>Email:{info.Email}</p>
        </div>
  )
}

export default User;