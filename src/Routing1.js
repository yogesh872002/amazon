import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Electronics from './Electronics';
import Jwellery from './Jwellery';
import Men from './Men';
import Women from './Women';
import Button from 'react-bootstrap/Button';
import GetData from './GetData';
function Routing1() {
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
        
            <Link to="/">Home</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jwellery">Jwellery</Link>
            <Link to="/men ">Men Cloths</Link>
            <Link to="/women ">Women Cloths</Link>
            <Link><Button variant="primary">Login</Button></Link>
            <Link> <Button variant="primary">Ragister</Button></Link>
           
         
        </Container>
      </Navbar>
    
                <Routes>
                    <Route path="/" Component={GetData}></Route>
                    <Route path="/electronics" Component={Electronics}></Route>
                    <Route path="/jwellery" Component={Jwellery}></Route>
                    <Route path="/men" Component={Men}></Route>
                    <Route path="/women" Component={Women}></Route>
                </Routes>
       
      </>
      
  );
}

export default Routing1;