import "./ext.css"
import style from "./style.module.css"
function Style()
{
     return(
        <div>
            <h1 style={{backgroundColor:"red",color:"white"}}>Inline CSS</h1>
            <h1 className="hello">Normal CSS</h1>
            <h1 className={style.hello1}>Modular CSS</h1>
        </div>
     )
}
export default Style