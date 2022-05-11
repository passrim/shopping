import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
// import bg from './img/bg.png';
import './App.css';
import Card from './components/Card';
import Detail from './contents/Detail';
import About from './contents/About';

import Data from './data';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  let [product] = useState(Data);
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
          <Nav.Link onClick={() => {navigate('/shopping/detail')}}>detail</Nav.Link>
          <Nav.Link onClick={() => {navigate('/shopping/about')}}>about</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/shopping" element={
        <>
          <div className="main-bg" /*style={{backgroundImage:'url(' + bg + ')'}}*/></div>
          <div className="container">
            <div className="row">
              {
                product.map((a,i) => {
                  return (
                    <Card product={product[i]} key={i} />
                  )
                })
              }

            
              {/* <div className="col-md-4">
                <img src ={process.env.PUBLIC_URL + '/img/shoes1.jpg'} alt="" width="80%" />
                <h4>상품명</h4>
                <p>상품설명</p>
              </div>
              <div className="col-md-4">
                <img src ={process.env.PUBLIC_URL + '/img/shoes2.jpg'} alt="" width="80%" />
                <h4>상품명</h4>
                <p>상품설명</p>
              </div>
              <div className="col-md-4">
                <img src ={process.env.PUBLIC_URL + '/img/shoes3.jpg'} alt="" width="80%" />
                <h4>상품명</h4>
                <p>상품설명</p>
              </div> */}
            </div>
          </div>
        </>
      } />
        <Route path="/shopping/detail" element={<Detail product={product} />} />
        <Route path="/shopping/about" element={<About />}>
          <Route path="member" element={<div>멤버페이지</div>} />
          <Route path="location" element={<div>위치페이지</div>} />
        </Route>
        {/* <Route path="/shopping/about/member" element={<About />} />
        <Route path="/shopping/about/location" element={<About />} /> */}
        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
      
    </div>
  );
}

export default App;
