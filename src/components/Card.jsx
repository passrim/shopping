import {Link} from 'react-router-dom';

function Card(props) {
  return (
    <>
        <div className="col-md-4">
            <Link to="/shopping/detail">
                <img src ={process.env.PUBLIC_URL + '/img/shoes' + (props.product.id+1) + '.jpg'} alt="" width="80%" />
                <h4>{props.product.title}</h4>
                <p>{props.product.content}</p>
            </Link>
        </div>
    </>
  );
}

export default Card;
