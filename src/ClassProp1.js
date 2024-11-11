const { Component } = require ("react");

class ClassProp1 extends Component
{
    render()
    {
        return(
            <div>
                <h1>My Name is{this.props.name}</h1>
                <h1>My Age is{this.props.age}</h1>
            </div>
        )
    }
}
export default ClassProp1