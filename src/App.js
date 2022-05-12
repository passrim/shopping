import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Routes, Route, useNavigate } from "react-router-dom";
// import bg from './img/bg.png';
import './App.css';
import Main from './contents/Main';
import Detail from './contents/Detail';
import About from './contents/About';
import Members from './contents/Members';
import Data from './data/data';

function App() {
  let [product,setProduct] = useState(Data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/shopping">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/shopping">Home</Link>
          <Link to="/shopping/detail">detail</Link>
          <Link to="/shopping/about">about</Link> */}
          <Nav.Link onClick={() => {navigate('/shopping')}}>Home</Nav.Link>
          <Nav.Link onClick={() => {navigate('/shopping/detail/0')}}>detail</Nav.Link>
          <Nav.Link onClick={() => {navigate('/shopping/about')}}>about</Nav.Link>
          <Nav.Link onClick={() => {navigate('/shopping/about/member')}}>member</Nav.Link>
          <Nav.Link onClick={() => {navigate('/shopping/about/location')}}>location</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/shopping" element={
          <Main product={product} setProduct={setProduct} />
        } />
        <Route path="/shopping/detail/:idd" element={<Detail product={product} />} />
        <Route path="/shopping/about" element={<About />}>
          <Route path="member" element={<Members />} />
          <Route path="location" element={<div>위치페이지위치페이지위치페이지</div>} />
        </Route>
        {/* <Route path="/shopping/about/member" element={<About />} />
        <Route path="/shopping/about/location" element={<About />} /> */}
        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
      
    </div>
  );
}

export default App;
