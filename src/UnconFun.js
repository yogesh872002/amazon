import { useRef } from "react"

function UnconFun()
{
    const inputref=useRef()
    function hello()
    {
          console.log(inputref.current.value)
          inputref.current.value="Hello world"
          inputref.current.style.color="red"
          inputref.current.style.backgroundColor="green"
    }
    return(
        <div>
             <input type="Text" placeholder="Enter name" ref={inputref}></input>
             <button onClick={()=>hello()}>Submit</button>
        </div>
    )
}
export default UnconFun