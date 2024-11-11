import Table from 'react-bootstrap/Table';
function List()
{
    var arr=[{rollno:101,name:"Ram",marks:55},
             {rollno:102,name:"Syam",marks:65},
             {rollno:103,name:"Mohan",marks:75},
             {rollno:104,name:"Rohan",marks:85}]
    return(
        <div>
           <Table>
            <tbody striped bordered hover variant="light">
                <tr>
                    <td>rollno</td>
                    <td>name</td>
                    <td>marks</td>
                </tr>
                {
                   arr.map((item)=>
                   item.marks>=75?
                    <tr>
                        <td>{item.rollno}</td>
                        <td>{item.name}</td>
                        <td>{item.marks}</td>
                    </tr>:null
                )
                }
            </tbody>
           </Table>
        </div>
    )
}
export default List