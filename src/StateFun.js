import { useState } from "react"

function StateFun()
{
    //var amount=10000
    var [amount,setAmount]=useState(10000)
    return(
        <div>
            <h1>My amount is {amount}</h1>
            <button onClick={()=>changeamt(20000)}>Submit</button>
        </div>    
    )
}
export default  StateFun