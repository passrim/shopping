import {Link} from 'react-router-dom';

function Card(props) {
  return (
    <>
        <Link to="/detail">
            <div className="col-md-4">
                <img src ={process.env.PUBLIC_URL + '/img/shoes' + (props.product.id+1) + '.jpg'} alt="" width="80%" />
                <h4>{props.product.title}</h4>
                <p>{props.product.content}</p>
            </div>
        </Link>
    </>
  );
}

export default Card;
