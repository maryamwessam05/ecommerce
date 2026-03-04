import React from 'react';
import "./results.css"
import Navbar from '../components/layout/navbar';
import back from "../assets/ArrowLeft.svg"
import Search from '../components/common/search';
import Product from '../components/layout/product';
import prod1 from "../assets/prod01.png"
import prod2 from "../assets/prod02.png"
import prod3 from "../assets/prod03.png"
import Footer from '../components/layout/footer';
import Back from '../components/common/back';

const Results = () => {
    return ( 
        <>
        <Navbar />
        <div className="headerr">
        <Back />
        <Search />

            <div className="productlist">

            <Product img={prod1} name="Bluetooth Speaker" desc="Portable waterproof speaker with 12-hour battery" price="$89.99" rating="4.6" stock="Stock: 76" />
            <Product img={prod2} name="Wireless Headphones" desc="Noise cancelling over-ear headphones" price="$129.99" rating="4.8" stock="Stock: 54" />
            <Product img={prod3} name="Smart Watch" desc="Fitness tracker with heart rate monitor" price="$149.99" rating="4.5" stock="Stock: 32" />

            </div>

        </div>

        <Footer />
        
        </>
     );
}
 
export default Results;