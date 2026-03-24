import React from 'react';
import logo from "../../assets/logo.svg"
import "./navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <>
        <nav>
            <img src={logo} alt="" />

            <div className="links">
                <span>Products</span>
                <Link to="/addproduct">
                <span>Add Product</span>
                
                </Link>
            </div>
        </nav>
        
        </>
     );
}
 
export default Navbar;