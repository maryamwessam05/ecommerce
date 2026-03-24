import React, { useEffect, useState } from 'react';
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
import { Link, useParams } from "react-router-dom";



const Details = () => {
    const [loading, setLoading] = useState(true);
        const [data, setData] = useState([""]);

        const {id} = useParams();
    
        useEffect(() => {
            const getDetails = () =>{
                fetch('https://dummyjson.com/products/'+id)
                .then(res => res.json())
                .then(res => setData(res) );
    
            }
            
            getDetails();
            setLoading(false);
    
    
        },[])
    
        console.log(data)
    
        if (loading) return <p>Loading...</p>
        else return ( 
        <>
            <Navbar />
            <div className="content">
                <Link to="/">
                <Back />
                </Link>
                <div className="productdet">
                    <img className='prductimage' src={data.images} alt="" />

                    <div className="details">
                        <div className="name">
                        <Prodtag category="Electronics" />
                        <h1>{data.title}</h1>

                        <div className="ratings">
                            <div className="rate">
                                    <img src={star} alt="" />
                                    <span>{data.rating}</span>
                             </div>
                             <p>(4.6 out of 5)</p>
                        </div>

                        <h2>{data.price}</h2>
                        </div>

                        <div className="desc">
                            <h3>Description</h3>
                            <p>{data.description}</p>
                        </div>

                        <div className="productdetails">
                            <DetailRow title="Category" ans={data.category} />
                            <DetailRow title="Stock" ans={data.stock} icon={bag}/>
                            <DetailRow title="Weight" ans={data.weight} icon={weight}/>

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