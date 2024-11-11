import { Component } from "react";

class Mount extends Component
{
    render()
    {
        console.log("render")
        return(
            <div>Mount</div>
        )
    }
    constructor()
    {
        super()
        console.log("Constructor")
    }
    componentDidMount()
    {
        console.log("Component Did Mount")

    }
}
export default Mount