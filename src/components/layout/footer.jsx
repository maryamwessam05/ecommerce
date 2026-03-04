import React from 'react';
import "./footer.css"
import Footercol from '../common/footercol';

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="columns">
                <Footercol head="About ShopHub" deet="Your one-stop destination for quality products at great prices."/>
                <Footercol head="Quick Links" deet="All Products" deet2="Add Product"/>
                <Footercol head="Contact" deet="Email: support@shophub.com" deet2="Phone: (555) 123-4567"/>
                </div>
                <div className="span">

                <span>© 2026 ShopHub. All rights reserved.</span>
                </div>

            </footer>
        
        </>
     );
}
 
export default Footer;