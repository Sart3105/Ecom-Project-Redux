import Hello from "./Components/Hello";
import Fruits from "./Components/Fruits";
import Conditional from "./Components/Conditional";
import { Counter } from "./features/counter/Counter";
import Welcome from "./Components/Welcome";
import Form from "./Components/Form";
import Todos from "./features/counter/Todos";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Cartpage from "./Components/Cartpage";
import Withloading from "./HOC/Withloading";
import User from "./HOC/User";
import { ErrorBoundary } from "react-error-boundary";
import Errorboundary from "./Components/Errorboundary";
// import { Suspense, lazy } from "react";
// const Product = lazy(()=> import("./Components/Product"));

function App() {
  // const personInfo ={
  //   name : "Sudharson",
  //   message:"getting Tired",
  //   emotion:'👋',
  //   Rollno:'893'
  // }

  
    
 
   const Loader = Withloading(Product)
  //const Loader1 = Withloading(Cartpage)
  return (
  <div>
   
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={ 
           <ErrorBoundary fallback={<Errorboundary/>}> 

           <Loader /> 

           </ErrorBoundary>  
           
           }/>

        <Route path="/Cart" element={<Cartpage/>}  />

      </Routes>
     </BrowserRouter>
     
    
</div>
  )
}

export default App;
