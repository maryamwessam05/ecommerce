import React from 'react';
import "./product.css"
import star from "../../assets/Star.svg";
import edit from "../../assets/Edit.svg";
import trash from "../../assets/Trash.svg";
import Edit from '../common/editbtn';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return ( 
        <>
        <div className="product">
            <img className='prodimg' src={props.img} alt="" />
            <Link to={props.url}>
                <div className="prodetails">
                    <div className="prodtag">{props.category}</div>
                    <h1>{props.name}</h1>
                    <p>{props.desc}</p>
                    <div className="rate">
                        <img src={star} alt="" />
                        <span>{props.rating}</span>
                    </div>
                    <h4>{props.price}</h4>
                    <h6>{props.stock}</h6>
                </div>
            
            </Link>

            <div className="actions">
                <Link to="/editproduct">
                <Edit style="edit" icon={edit} text="Edit" />
                </Link>
                <Link>
                <Edit style="delete" icon={trash} text="Delete" />
                </Link>
            </div>
        </div>
        
        </>
     );
}
 
export default Product;