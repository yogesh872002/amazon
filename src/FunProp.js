import { useState } from "react"
import FunProp1 from "./FunProp1"

function FunProp()
{ 
    const [name,setName]=useState("Ram")
    const [age,setAge]=useState(25)
    function changeData()
    {
        setName("Syam")
        setAge(30)
    }
    return(
        <div>
            <FunProp1 name={name} age={age}></FunProp1>
            <button onClick={changeData}>Submit</button>
        </div>
    )  
}
export default FunProp
