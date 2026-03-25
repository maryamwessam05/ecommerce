import React from 'react';
import "./forminput.css"

const FormInput = (props) => {
    return ( 
        <>
        <div className="forminput">
            <form action="">
                <label htmlFor="">{props.label}</label>
                <input type="text" name="" id="" placeholder={props.placeholder} className={props.style}/>

            </form>
        </div>
        
        
        </>
     );
}
 
export default FormInput;