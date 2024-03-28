import React from 'react'
import Goodbye from './Goodbye'
import {useState} from "react"

const Counter =()=> {
const [count,setCounter]=useState(5)
const [name,setName]=useState("breezy")

const handleInputChanges=(e)=>{
    e.preventDefault()
    console.log("Our log",e.target.value)
    console.log("Our name",name)

    setName(e.target.value)
}

    return (
        <div style={{fontSize:"70px",color:"green"}}>
       <div>
            {count}
       </div>
           {name}
            <button onClick={()=>setCounter(count+1)}>
                Increase count
            </button>
            <Goodbye countess={count} name={name} country={"DE"}/>
            {/* {countess:count} */}
            <input onChange={(e)=>handleInputChanges(e)}/>
        </div>
    )
}

export default Counter