import './Product.scss';
import React, { useEffect, useLayoutEffect } from 'react';
import ProductDescription from '../../Components/MainFeed/ProductDescription/ProductDescription';
import { useLocation, useNavigate } from 'react-router-dom';

function Product() {    
    const ruta = useLocation();
    let id = (ruta.hash.replace('#', '')).length > 0 ? ruta.hash.replace('#', '') : false;
    const navigate = useNavigate();
    if(!id){
        useEffect(() => {
            navigate('/feed');
        },[])
    }
    return (
        <>
            {id ? <ProductDescription id={id} /> : <></>}
        </>
    );
}

export default Product;

