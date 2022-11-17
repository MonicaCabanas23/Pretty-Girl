import './Product.scss';
import React, { useState, useEffect, Suspense } from 'react';
import axios from "axios";
import ProductDescription from '../../Components/MainFeed/ProductDescription/ProductDescription';
import { useLocation } from 'react-router-dom';

function Product() {    
    const prueba = useLocation();
    const id = prueba.hash.replace('#', '');
    return (
        <>
            <ProductDescription id={id} />
        </>
    );
}

export default Product;

