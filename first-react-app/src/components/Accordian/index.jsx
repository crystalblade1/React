import React from 'react'

function Accordian(){

    

    return (
        <div className="accordion-wrapper">{
            content.map((item,index) => (
                <div className="first-info"key = {index}> 
                <header onClick={() => accordionToggle(index)}>{item.title}
                <span class="mso">expand_more</span>
                </header>
                <p className={`description ${accordion===index? 'opentab':''}`}>{item.answer}</p>
                </div>
            ))}
        </div>
    )
    


}

export default Accordian