import { useState } from "react"

function Controlled()
{
    const [name,setname]=useState()
    const [add,setadd]=useState()
    function hello(e)
    {
        e.preventDefault()
        console.log(name,add)
    }
    return(
        <div>
            <form onSubmit={hello}>
                <input type="Text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}></input><br></br>
                <input type="Text" placeholder="Enter Add" onChange={(e)=>setadd(e.target.value)}></input><br></br>
                 <button>Submit</button>
            </form>
        </div>
    )
}
export default Controlled