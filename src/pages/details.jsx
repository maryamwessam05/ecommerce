import React from 'react';
import "./details.css"
import Navbar from '../components/layout/navbar';
import Back from '../components/common/back';
import det from "../assets/det.png"
import Prodtag from '../components/common/prodtag';
import star from "../assets/Star.svg"
import DetailRow from '../components/common/detailrow';
import bag from "../assets/Package.svg"
import weight from "../assets/Weight.svg"
import Edit from '../components/common/editbtn';
import editw from "../assets/Editw.svg"
import trash2 from "../assets/Trash2.svg"
import Footer from '../components/layout/footer';



const Details = () => {
    return ( 
        <>
            <Navbar />
            <div className="content">
                <Back />
                <div className="productdet">
                    <img src={det} alt="" />

                    <div className="details">
                        <div className="name">
                        <Prodtag category="Electronics" />
                        <h1>Bluetooth Speaker</h1>

                        <div className="ratings">
                            <div className="rate">
                                    <img src={star} alt="" />
                                    <span>4.6</span>
                             </div>
                             <p>(4.6 out of 5)</p>
                        </div>

                        <h2>$89.99</h2>
                        </div>

                        <div className="desc">
                            <h3>Description</h3>
                            <p>Portable waterproof speaker with 12-hour battery</p>
                        </div>

                        <div className="productdetails">
                            <DetailRow title="Category" ans="Electronics" />
                            <DetailRow title="Stock" ans="76 units" icon={bag}/>
                            <DetailRow title="Weight" ans="0.5kg" icon={weight}/>

                        </div>

                        <div className="btnactions">
                            <Edit style="editdet" icon={editw} text="Edit Product"/>
                            <Edit style="deleted" icon={trash2} text="Delete Product"/>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        
        </>
     );
}
 
export default Details;