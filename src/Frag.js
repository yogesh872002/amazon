import { Fragment } from "react"
import Row from "./Row"

function Frag()
{
    return(
        //<div>
          //  <h1>hello 1</h1>
            //<h1>hello 2</h1>
        //</div>
       // <Fragment>
         //      <h1>hello 1</h1>
           //    <h1>hello 2</h1>
        //</Fragment>
       // <> 
        //  <h1>hello 1</h1>
        //    <h1>hello 2</h1>
        //</>
        <table>
            <tbody>
                <tr>
                    <td>Rollno</td>
                    <td>Name</td>
                    <td>Marks</td>
                </tr>
                <tr>
                    <Row></Row>
                </tr>
            </tbody>
        </table>
    )
}
export default Frag