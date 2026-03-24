import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/navbar';
import Add from '../components/common/addbtn';
import "./home.css"
import Search from '../components/common/search';
import DropDown from '../components/common/dropdown';
import Product from '../components/layout/product';

import Footer from '../components/layout/footer';
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([""]);

    useEffect(() => {
        const getProducts = () =>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setData(res.products) );
        }

        getProducts();


    },[])

    console.log(data)


    return ( 
        <>
        <Navbar />
        <div className="header">
            <h1>Products</h1>
            <Link to="/addproduct">
                <div className="addcont">
                    <Add />
                </div>
            
            </Link>
        </div>

        <div className="searchings">
            <Search />

            <div className="dds">
                <DropDown title="Category" cat="All Categories" />
                <DropDown title="Sort By" cat="Title (A-Z)" />
            </div>

        </div>

        <div className="productlist">

        {data.map((item) =>{
            return <Product img={item.images} name={item.title} desc={item.description} price={item.price} rating={item.rating} stock={item.title} category={item.category}/>
        }
        )}
        </div>
        

    <Footer />


        
        </>
     );
}
 
export default Home;