import { Component } from "react";
class ClassState extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            amount:1000
        }
    }
    render()
    {
        return(
            <div>
                <h1>My amount is {this.state.amount}</h1>
                <button onClick={()=>this.setState({amount:500})}>Submit</button>
            </div>
        )
    }
}
export default ClassState