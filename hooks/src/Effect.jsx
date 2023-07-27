import { useState, useEffect } from "react";

import React from "react";
import "./timer.css"

export default function EffectComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    let timer =setTimeout(()=>{
      setTime(new Date);
    },1000) // this will run every tiem the component is renderded after 1 second
    return(()=>{
      clearTimeout(timer); // this s to prevent the memory leaks
    })
  })
  return (
    <div className="timr">
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
