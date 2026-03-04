import React from 'react';
import "./prodtag.css"

const Prodtag = (props) => {
    return ( 
        <>
        <div className="tag">
            {props.category}
        </div>
        </>
     );
}
 
export default Prodtag;