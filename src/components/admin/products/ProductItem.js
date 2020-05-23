import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from "../../Spinner";

const ProductItem = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { id, image, name, shop_name } = product;
  const token = localStorage.token;

  const onDelete = async () => {
    var c = window.confirm('Deletion process is irreversible, Do you want to continue?');
    if(c){
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`/api/products/${id}`, config);

      setLoading(false);
    }
  };
  if(loading){
    return <Spinner />
  }
  return (
    <div className="col-3 inside2-box"> 
      <div className="inside2-box-content">
        <div
          className="content-img"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
          <span>Boosted Ad</span>
          <i className="fa fa-user-circle"></i>
        </div>
        <div className="content-text">
          <h4>{name}</h4>
          {/* <p>Alaba Ojo Market</p> */}
          <p>{shop_name}</p>
          <span>
            {/* <i className="fa fa-map-marker"></i> {shop.market.state} */}
          </span>
          <Link className="btn btn-default" to={'/edit-product/'+id}>Edit</Link>
          <button className="btn btn-warning" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
