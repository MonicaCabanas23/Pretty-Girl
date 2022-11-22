import React, { useState, useEffect, Suspense } from 'react'
import { Link } from "react-router-dom";
import './ProductsContainer.scss'

import ProductCard from './ProductCard/ProductCard'
import axios from "axios";
import Loading from '../../Loading/Loading';

const ProductsContainer = ({ title, bag=false }) => {
  const [products, setProducts] = useState([]);
  const [cargado, setCargado] = useState(false);
  const url = "/api/products";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(url);
      setProducts(data.products);
      setCargado(true);
    }
    getData();
  }, []);

  return (
    <section className="recommended-products">
      {title?<h1 className="title">{title}</h1>:<></>}
      <div className="cards">
        <Suspense>
          {cargado ? <>
            {products.map((item, index) => {
              /* La ruta a la que redirigirá cada producto es ProductDescription */
              return (
                <Link to={{ pathname: '/product/', hash: item._id }} key={index}><ProductCard image={item.picture.secure_url} name={item.name} price={item.price} /></Link>
              )
            })}</> : <Loading />}
        </Suspense>
      </div>
    </section >
  )
}

export default ProductsContainer