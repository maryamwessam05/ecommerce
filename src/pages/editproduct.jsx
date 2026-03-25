import React from 'react';
import "./editproduct.css"
import Navbar from '../components/layout/navbar';
import Back from '../components/common/back';
import FormInput from '../components/common/forminput';
import save from "../assets/Save.svg"
import { Link } from 'react-router-dom';
import Footer from '../components/layout/footer';

const EditProduct = () => {
    return ( 
        <>
                <Navbar />
        <div className="contentadd">
            <div className="wrap">
                <Link to="/">
                
                <Back />
                </Link>

                <div className="addform">
                    <h1>Edit New Product</h1>
                    <div className="formholders">
                     <FormInput style="input" label="Title *" placeholder="Enter Product Title" />
                     <FormInput style="inputlong" label="Description *" placeholder="Enter product description" />
                     <FormInput style="input" label="Category *" placeholder="Select a category" />
                    <div className="formrow">
                        <FormInput style="input" label="Price ($) *" placeholder="0.00" />
                        <FormInput style="input" label="Rating (0-5) *" placeholder="0.0" />
                    </div>
                    <div className="formrow">
                        <FormInput style="input" label="Stock *" placeholder="0" />
                        <FormInput style="input" label="Weight (kg) *" placeholder="0.00" />
                    </div>

                    </div>
                    <div className="formbtns">
                        <Link to="/">
                            <div className="addprod">
                                <img src={save} alt="" />
                                <span>Add Product</span>
                            </div>
                        </Link>
                        <Link to="/">
                        <div className="cancel">
                            Cancel
                        </div>
                        </Link>
                    </div>
                
                </div>
                
            </div>
        </div>

        <Footer />
        

        
        
        </>
     );
}
 
export default EditProduct;