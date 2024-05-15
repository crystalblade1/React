

function Greeting(props){

    const date = new Date();
    const hours = date.getHours();

  
    console.log(props.name + hours);
}

export default Greeting