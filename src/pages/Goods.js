import React, { useContext } from "react";
import { ShopContext } from "../context";
import './goods.css'
export default function Goods(props) {
  const { id, name, description,icon,price} = props;
  const {addToBasket}=useContext(ShopContext)
  return (
    <>
      <div className="cards col s12 m4 l4 xl3">
        <div className="card hoverable" id={id}>
          <div
            className="card-image"    
          >
            <img
              style={{
                width: '100%',
                height: "100%",
              }}
              src={
                icon ? icon : "https://media.fortniteapi.io/images/displayAssets/v2/CID_A_195_M_Crisis.png"
              }
              alt="shop"
            />
            <a
              href="#!"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons" onClick={()=>addToBasket({id,name,price})}>add</i>
            </a>
          </div>
          <div className="card-content">
            <span>{name}</span>
            <p>
             {description}
            </p>
          </div>
          <div className="card-action valign-wrapper">
              <div className="starandprice">
              <span className="purple-text text-darken-2">{price}$</span>
              <span className="star"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></span>
              </div>
              <button className="btn blue darken-4 hoverable" onClick={()=>addToBasket({id,name,price})}>buy</button>
          </div>  
        </div>
      </div>
    </>
  );
}
