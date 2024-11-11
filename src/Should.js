import { Component } from "react";

class Should extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            count:0
        }
    }
    shouldComponentUpdate()
    {
        return true
    }
     render()
     {
        return(
            <div>
                <h1>Count :{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
            </div>
        )
     }

}
export default Should