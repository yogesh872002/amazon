import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jwellery">Jwellery</Nav.Link>
            <Nav.Link href="/men ">Men Cloths</Nav.Link>
            <Nav.Link href="/women ">Women Cloths</Nav.Link>
            <Nav.Link><Button variant="primary">Login</Button></Nav.Link>
            <Nav.Link> <Button variant="primary">Ragister</Button></Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
                <Routes>
                    <Route path="/" Component={GetData}></Route>
                    <Route path="/electronics" Component={Electronics}></Route>
                    <Route path="/jwellery" Component={Jwellery}></Route>
                    <Route path="/men" Component={Men}></Route>
                    <Route path="/women" Component={Women}></Route>
                </Routes>
        </BrowserRouter>
      </>
      
  );
}

export default Routing1;