import { useState } from "react";

function Tabs() {

    const [tab1, setTab1] = useState(false);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);
    const [color, setColor] = useState(false);
  

    return (
        <div className="main-container">
          <div className="tab-container">
              <div className="grid 1" id="grid1" onClick={() => {
                setTab1(true);
                setTab2(false);
                setTab3(false);
                setColor(true);
              }}><h1>Tab 1</h1>{color}</div>  
              <div className="grid 2" id="grid2" onClick={() => {                
                setTab1(false);
                setTab2(true);
                setTab3(false);
                setColor(true);
                }}><h1>Tab 2</h1></div>
              <div className="grid 3" id="grid3" onClick={() => {
                setTab1(false);
                setTab2(false);
                setTab3(true);
                setColor(true);
              }}><h1>Tab 3</h1></div>   
        </div>
          {tab1 && <h1 className="progress">This is tab 1 </h1>}
          {tab2 && <h1 className="progress">This is tab 2 </h1>}
          {tab3 && <h1 className="progress">This is tab 3 </h1>}
        </div>
            );
  
}




export default Tabs;
