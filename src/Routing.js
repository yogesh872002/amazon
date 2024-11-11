import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import PageNot from "./PageNot"

function Routing()
{
     return(
        <div>
            <BrowserRouter>
               <Link to="/">Home</Link><br></br>
               <Link to="Service">Service</Link><br></br>
               <Link to="Contact">Contact</Link><br></br>
               <Link to="About">About</Link><br></br>
               <Link to="*"></Link><br></br>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="About" Component={About}></Route>
                    <Route path="Contact" Component={Contact}></Route>
                    <Route path="Service" Component={Service}></Route>
                    <Route path="*" Component={PageNot}></Route>
                </Routes>
            </BrowserRouter>
        </div>
     )
}
export default Routing