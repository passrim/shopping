import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import TabMenu from './../components/TabMenu';

let YellowBtn = styled.button`
  background:${props11 => props11.bg};
  color:${props11 => props11.col};
  padding:10px 20px;
  border:${props12 => props12.bor};
  border-radius:10px;
`

let Box = styled.div`
  background:#ccc;
  padding:20px;
`

function Detail(props) {
  let [count,setCount] = useState(0);
  let [alert,setAlert] = useState(true);
  let [tab,setTab] = useState(0);

  let {idd} = useParams();
  // console.log(idd);
  // console.log(props.product[idd].id);
  useEffect(() => {
    // console.log('안녕')
    // for(var i=0; i < 10000; i++){
    //   console.log(i);
    // }
    let a = setTimeout(() => {
      setAlert(false);
    },2000);
    return () => {
      clearTimeout(a);
    }
  },[]);
  return (
    <>
      <div className="container">
        <Box>
          <YellowBtn bg="#ff0" bor="1px solid #f00">버튼</YellowBtn>
          <YellowBtn bg="#f00" col="#fff" bor="none">버튼</YellowBtn>
        </Box>
        {
          alert === true ? 
          <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
          : null
        }
        
        {count}
        <button onClick={() => {setCount(count + 1)}}>버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + '/img/shoes' + (props.product[idd].id+1) + '.jpg'} alt="" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.product[idd].title}</h4>
            <p>{props.product[idd].content}</p>
            <p>{props.product[idd].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
        <TabMenu tabBox={tab} setTabBox={setTab} />

      </div>
    </>
  );
}

// function TabContent(props){
//   if(props.tab === 0){
//     return <div>내용1</div>
//   }
//   if(props.tab === 1){
//     return <div>내용2</div>
//   }
//   if(props.tab === 2){
//     return <div>내용3</div>
//   }
// }
export default Detail;
