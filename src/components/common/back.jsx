import React from 'react';
import back from "../../assets/ArrowLeft.svg"
import "./back.css"


const Back = () => {
    return ( 
        <>
        <div className="back">
            <img src={back} alt="" />
            <span>Back to Products</span>

        </div>
        
        </>
     );
}
 
export default Back;