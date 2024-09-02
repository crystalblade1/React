import React, { useState } from "react";

const  UpdatedComponent = (OriginalComponent) => {

    function NewComponent(){
        const [count, setCount] = useState(1);

        const handleCount = () => {
          setCount(count * 2);
        };

        return <OriginalComponent  handleCount = {handleCount} count = {count}/>
    }   

    return NewComponent;

}

export default  UpdatedComponent;