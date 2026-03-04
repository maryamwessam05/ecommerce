import React from 'react';
import Navbar from '../components/layout/navbar';
import Add from '../components/common/addbtn';
import "./home.css"
import Search from '../components/common/search';
import DropDown from '../components/common/dropdown';
import Product from '../components/layout/product';
import prod1 from "../assets/prod01.png"
import prod2 from "../assets/prod02.png"
import prod3 from "../assets/prod03.png"
import prod4 from "../assets/prod04.png"
import prod5 from "../assets/prod05.png"
import prod6 from "../assets/prod06.png"
import prod7 from "../assets/prod07.png"
import prod8 from "../assets/prod08.png"
import prod9 from "../assets/prod09.png"
import prod10 from "../assets/prod10.png"
import prod11 from "../assets/prod11.png"
import prod12 from "../assets/prod12.png"
import Footer from '../components/layout/footer';


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

        <div className="productlist">

            <Product img={prod1} name="Bluetooth Speaker" desc="Portable waterproof speaker with 12-hour battery" price="$89.99" rating="4.6" stock="Stock: 76" />
            <Product img={prod2} name="Wireless Headphones" desc="Noise cancelling over-ear headphones" price="$129.99" rating="4.8" stock="Stock: 54" />
            <Product img={prod3} name="Smart Watch" desc="Fitness tracker with heart rate monitor" price="$149.99" rating="4.5" stock="Stock: 32" />
            <Product img={prod4} name="Gaming Mouse" desc="RGB ergonomic gaming mouse with precision sensor" price="$59.99" rating="4.7" stock="Stock: 120" />
            <Product img={prod5} name="Mechanical Keyboard" desc="Backlit mechanical keyboard with blue switches" price="$99.99" rating="4.6" stock="Stock: 48" />
            <Product img={prod6} name="Laptop Stand" desc="Adjustable aluminum ergonomic laptop stand" price="$39.99" rating="4.4" stock="Stock: 87" />
            <Product img={prod7} name="External SSD" desc="1TB high-speed portable SSD USB-C" price="$179.99" rating="4.9" stock="Stock: 21" />
            <Product img={prod8} name="HD Webcam" desc="1080p streaming webcam with built-in microphone" price="$69.99" rating="4.3" stock="Stock: 65" />
            <Product img={prod9} name="Tablet Pro" desc="10-inch display tablet with stylus support" price="$399.99" rating="4.7" stock="Stock: 18" />
            <Product img={prod10} name="Smart Desk Lamp" desc="App-controlled LED desk lamp with dimming" price="$49.99" rating="4.2" stock="Stock: 90" />
            <Product img={prod11} name="Portable Charger" desc="20000mAh fast charging power bank" price="$34.99" rating="4.6" stock="Stock: 140" />
            <Product img={prod12} name="VR Headset" desc="Immersive virtual reality headset with controllers" price="$299.99" rating="4.8" stock="Stock: 27" />

    </div>

    <Footer />


        
        </>
     );
}
 
export default Home;