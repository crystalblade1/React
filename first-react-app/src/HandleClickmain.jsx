import React, {useState} from "react";

function HandleClickmain(){

    const [IsImportant, setIsImportant] = useState("Yes")

function handleClick1(){

    setIsImportant("No");
    
  }
  
  return (
  
      <div className="state">
        <h1 className="state-title">
          Is state important to know?
        </h1>
        <div className="state-value" onClick={handleClick1}>
          <h1>{IsImportant}</h1>
        </div>
      </div>
  )
}
  
  export default HandleClickmain