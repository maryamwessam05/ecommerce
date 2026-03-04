import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home';
import Results from './results';
import Details from './details';
import AddProduct from './addproduct';

const Routess = () => {
    return ( <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/results' element={<Results />} />
            <Route path='/details' element={<Details />} />
            <Route path='/addproduct' element={<AddProduct />} />


        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Routess;