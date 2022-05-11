import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
// import bg from './img/bg.png';
import Card from './components/Card';
import { useState } from 'react';
import Data from './data';

function App() {
  let [product,setProduct] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" /*style={{backgroundImage:'url(' + bg + ')'}}*/></div>
      <div className="container">
        <div className="row">
          {
            product.map((a,i) => {
              return (
                <Card product={product[i]} />
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
      
    </div>
  );
}

export default App;
