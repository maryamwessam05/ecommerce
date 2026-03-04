import React from 'react';
import arrow from "../../assets/arrow.svg"
import "./dropdown.css"

const DropDown = (props) => {
    return ( 
        <>
        <div className="dropdown">
            <h5>{props.title}</h5>
            <div className="dd">
                <span>{props.cat}</span>
                <img src={arrow} alt="" />
            </div>
        </div>
        
        </>
     );
}
 
export default DropDown;