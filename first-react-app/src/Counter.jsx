import React, { useState } from "react";

function Counter() {
  let [tnumber, setTnumber] = useState(0);

  function addCount() {
    setTnumber(tnumber + 1);
  }

  function minusCount() {
    setTnumber(tnumber - 1);
  }

  return (
    <div className="counter">
      <button className="counter-minus" onClick={minusCount}>
        <img
          id="minus"
          src="src/components/Ecommerce/images/icon-minus.svg"
          width="20px"
          alt="Logo"
        />
      </button>
      <div className="counter-count">
        <h1>{tnumber}</h1>
      </div>
      <button className="counter-plus" onClick={addCount}>
        <img
          id="plus"
          src="src/components/Ecommerce/images/icon-plus.svg"
          width="20px"
          alt="Logo"
        />
      </button>
    </div>
  );
}

export default Counter;
