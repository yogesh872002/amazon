function Condition()
{
    var no=10;
    return(
        <div>
            {
            no>=0?<h1>Positive</h1>:<h1>Negative</h1>
            }
        </div>
    )
}
export default Condition