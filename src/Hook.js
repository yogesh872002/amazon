import { useEffect } from "react"
import { useState } from "react"
function Hook()
{
    const [data,setdata]=useState(0)
    const [count,setcount]=useState(10)
    const [hello,sethello]=useState(100)
    useState(()=>{
        console.log("Loading")
    })
    return(
        <div>
            <h1>data {data}</h1>
            <h1>count {count}</h1>
            <h1>hello{hello}</h1>
            <button onClick={()=>setdata(data+1)}>Data</button>
            <button onClick={()=>setcount(count+1)}>Count</button>
            <button onClick={()=>sethello(hello+1)}>Hello</button>

        </div>
    )
}
export default Hook