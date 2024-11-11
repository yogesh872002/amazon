function MultipleCondition()
{
    var no=20;
    return(
        <div>
            {
             no==10?<h1>No is 10</h1>:
             no==20?<h1>No is 20</h1>:
             no==30?<h1>No is 30</h1>:null
            }
        </div>
    )
}
export default MultipleCondition