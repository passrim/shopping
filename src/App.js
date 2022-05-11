import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
// import bg from './img/bg.png';
import './App.css';
import Card from './components/Card';
import Detail from './contents/Detail';

import Data from './data';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [product,setProduct] = useState(Data);
  return (
    <div className="App">
      

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/shopping">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/shopping">Home</Link>
          <Link to="/shopping/detail">detail</Link>
          <Link to="/shopping/about">about</Link>
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
        <Route path="/shopping/about" element={<div>about페이지</div>} />
      </Routes>
      
    </div>
  );
}

export default App;
