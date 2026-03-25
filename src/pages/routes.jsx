import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home';
import Results from './results';
import Details from './details';
import AddProduct from './addproduct';
import EditProduct from './editproduct';

const Routess = () => {
    return ( <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/results' element={<Results />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/editproduct' element={<EditProduct />} />


        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Routess;