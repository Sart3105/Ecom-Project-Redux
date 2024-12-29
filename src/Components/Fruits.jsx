import React, { useRef } from "react";
import Fruit from "./Fruit";

function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Grapes"];
  const fruits = [
    { name: "Apple", Price: 10, emoji: "🍎", soldout: true },
    { name: "Banana", Price: 5, emoji: "🍌", soldout: false },
    { name: "Grapess", Price: 3, emoji: "🍍", soldout: true }, 
    { name: "orange", Price: 8, emoji: "🍊" , soldout: false },
  ];

  const inputref = useRef();

  const show = ()=>{
    console.log("hey there")
  }

  return (
    <div>
     <ol>
        {fruits.map((item) => (
          <Fruit
            key={item.name}
            name={item.name}
            price={item.Price}
            emoji={item.emoji}
            soldout ={item.soldout}
          />
        ))}
          </ol>
        <br/>
     
      <input ref={inputref} type="text" name="" id="" /> 
      <button type="button" onClick={show}>Danger</button>
    </div>
  );
}

export default Fruits;
