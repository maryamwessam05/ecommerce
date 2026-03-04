import React from 'react';
import Navbar from '../components/layout/navbar';
import Add from '../components/common/addbtn';
import "./home.css"


const Home = () => {
    return ( 
        <>
        <Navbar />
        <div className="header">
            <h1>Products</h1>
            <div className="addcont">
                <Add />
            </div>
        </div>

        
        
        </>
     );
}
 
export default Home;