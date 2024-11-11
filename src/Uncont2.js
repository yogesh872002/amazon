import { useRef, useState } from "react"
function Uncont2()
{
    const nameref=useRef()
    const addref=useRef()
    function hello(e)
    { 
        e.preventDefault()
        var name=nameref.current.value;
        var add=addref.current.value;
        var age=document.getElementById("age").value;
        console.log(name,add,age)
    }
    return(
        <div>
            <form onSubmit={hello}>
                <input type="Text" placeholder="Enter Name" ref={nameref}></input><br></br>
                <input type="Text" placeholder="Enter Add" ref={addref}></input><br></br>
                <input type="number" placeholder="Enter age" id="age"></input><br></br>
                 <button>Submit</button>
            </form>
        </div>
    )
}
export default Uncont2