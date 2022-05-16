import Card from './../components/Card';
import axios from 'axios';

function Main(props) {
  return (
    <>
      <div className="main-bg" /*style={{backgroundImage:'url(' + bg + ')'}}*/></div>
      <div className="container">
        <div className="row">
          {
            props.product.map((a,i) => {
              return (
                <Card product={props.product[i]} key={i} />
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
      <div className="mb-5">
        <button onClick={() => {
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            console.log(result.data);
            //console.log(props.product);
            let copy = [...props.product,...result.data];
            props.setProduct(copy);
          })
          .catch(() => {
              console.log('실패하였습니다.')
          })
        }}>더보기 버튼+++</button>
      </div>
      <div>test</div>
    </>
  );
}

export default Main;
