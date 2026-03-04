import React from 'react';
import logo from "../../assets/logo.svg"
import "./navbar.css"

const Navbar = () => {
    return ( 
        <>
        <nav>
            <img src={logo} alt="" />

            <div className="links">
                <span>Products</span>
                <span>Add Product</span>
            </div>
        </nav>
        
        </>
     );
}
 
export default Navbar;