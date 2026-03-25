import React from 'react';
import "./delete.css"

const DeleteOverlay = () => {
    return ( 
        <>

        <div className="deletebox">
            <div className="deletetxt">

            <h3>Are you sure?</h3>
            <p>Are you sure you want to delete "Bluetooth Speaker"? This action cannot be undone.</p>
            </div>

            <div className="actions">
                <div className="cancel">Cancel</div>
                <div className="deletebtn">Delete</div>
            </div>
        </div>
        
        </>
     );
}
 
export default DeleteOverlay;