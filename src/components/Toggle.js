import React,{ useState } from "react";

function Toggle() {
  const [isOff, setIsOff] = useState(true)


  function handleClick(){
    setIsOff((isOff) => !isOff)
  }
  const color = isOff ? "white" : "red"
  return <button style={{background:color}}onClick={handleClick}>{isOff? "Off":"On"}</button>;
}

export default Toggle;
