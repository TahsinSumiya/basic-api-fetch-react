import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke,setJoke]=useState("")
 
const fetchData = async ()=>{
  const res = await fetch(url);
  const data =await res.json();
  setJoke(data.value)
  console.log(data)
  audio.play()
}

useEffect (()=>{
fetchData(url)
},[])




  return (
    <>
    
    <h1 className="head-1">Jokes fetching api</h1>
    <div className="box">
       <button className="btn" onClick={()=>fetchData()}>click to get new joke</button>
       <h1 className="text">{joke}</h1>
    </div>
    </>
  )
}

export default App;
