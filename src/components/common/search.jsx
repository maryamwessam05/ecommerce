import React from 'react';
import search from "../../assets/Search.svg"
import "./search.css"

const Search = () => {
    return ( 
        <>
        <div className="search">
            <input type="" placeholder='Search Products'/>
            <img className='icon' src={search} alt="" />
        </div>
        
        </>
     );
}
 
export default Search;