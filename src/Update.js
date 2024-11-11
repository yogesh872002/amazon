import { Component } from "react";

class Update extends Component
{
    constructor()
    {
        super()
        this.state={
            name:"Ram"
        }
        console.log("Constructor")
    }
    render()
    {
        console.log("Render")
        return(
            <div>
                <h1>My name is {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Syam"})}>Submit</button>
            </div>
        )
    }
    componentDidUpdate()
    {
        console.log("Component Did Update")
    }
}
export default Update