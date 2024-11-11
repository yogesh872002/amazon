import { useState } from "react"

function HOC()
{
    return(
        <div>
            <RedCmp cmp={Counter}></RedCmp>
            <GreenCmp cmp={Counter}></GreenCmp>
            <YellowCmp cmp={Counter}></YellowCmp>
            <BlueCmp cmp={Counter}></BlueCmp>
        </div>
    )
}
function RedCmp(prop)
{
    return <h1 style={{backgroundColor:"red",width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function GreenCmp(prop)
{
    return <h1 style={{backgroundColor:"green",width:"200px"}}><prop.cmp></prop.cmp></h1>
}function YellowCmp(prop)
{
    return <h1 style={{backgroundColor:"yellow",width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function BlueCmp(prop)
{
    return <h1 style={{backgroundColor:"blue",width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Submit</button>
        </div>
    )
}
export default HOC