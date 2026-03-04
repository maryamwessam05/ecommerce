import React from 'react';
import "./editbtn.css"

const Edit = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <img src={props.icon} alt="" />
            <span>{props.text}</span>
        </div>
        
        </>
     );
}
 
export default Edit;