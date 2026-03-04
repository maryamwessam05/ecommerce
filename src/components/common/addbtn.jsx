import React from 'react';
import add from "../../assets/Plus.svg"
import "./addbtn.css"


const Add = () => {
    return ( 
        <>
            <div className="addbtn">
                <img src={add} alt="" />
                <span>Add Product</span>
            </div>
        
        </>
     );
}
 
export default Add;