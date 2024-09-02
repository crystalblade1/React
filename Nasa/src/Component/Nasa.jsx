import { useEffect, useState } from "react"
import NasaDisplay from "./NasaDisplay";

const Nasa = () => {

  const [data, setData] = useState(null);

  useEffect(() => {

    let isMounted = true;

   async function fetchData(){
    const NASA_API = import.meta.env.VITE_API_KEY;
    const url =  "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API}`
    console.log(NASA_API)

    try{
      const res = await fetch(url)
      const result = await res.json()
      if(isMounted){
        setData(result);
      }
    }
    catch (err){
      console.error(err)

    }
   }
   fetchData()
 
    return () => {
      isMounted = false;
    }
    
  },[])
    
  return (
    <NasaDisplay data = {data}/>
  )
}

export default Nasa