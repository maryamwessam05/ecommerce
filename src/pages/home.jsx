import React from 'react';
import Navbar from '../components/layout/navbar';
import Add from '../components/common/addbtn';
import "./home.css"
import Search from '../components/common/search';
import DropDown from '../components/common/dropdown';


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

        <div className="searchings">
            <Search />

            <div className="dds">
                <DropDown title="Category" cat="All Categories" />
                <DropDown title="Sort By" cat="Title (A-Z)" />

            </div>
        </div>


        
        </>
     );
}
 
export default Home;