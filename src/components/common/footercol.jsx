import React from 'react';
import "./footercol.css"

const Footercol = (props) => {
    return ( 
        <>
        <div className="col1">
                    <h3>{props.head}</h3>
                    <p>{props.deet}</p>
                    <p>{props.deet2}</p>

        </div>
        
        </>
     );
}
 
export default Footercol;