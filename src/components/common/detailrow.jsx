import React from 'react';
import "./detailrow.css"

const DetailRow = (props) => {
    return ( 
        <>
        <div className="detailrow">
            <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h3>{props.ans}</h3>
        </div>
        
        </>
     );
}
 
export default DetailRow;