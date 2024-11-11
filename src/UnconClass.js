import { Component, createRef } from "react";

class UnconClass extends Component
{
    constructor()
    {
        super()
        this.inputref=createRef()
    }
    hello()
    {
        //console.log(this.inputref.current.value)
        this.inputref.current.value="Hello world"
         this.inputref.current.style.color="red"
          this.inputref.current.style.backgroundColor="green"
    }
    render()
    {
        return(
            <div>
                <input type="Text" placeholder="Enter name" ref={this.inputref}></input>
                <button onClick={()=>this.hello()}>Submit</button>
            </div>
        )
    }
}
export default UnconClass