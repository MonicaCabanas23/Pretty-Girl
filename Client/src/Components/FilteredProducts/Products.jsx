import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Products.scss'
import ProductCard from '../MainFeed/ProductsContainer/ProductCard/ProductCard'
import axios from "axios";

const ProductsContainer = ({filteredUrl}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(filteredUrl);
            setProducts(data.products);
        }
        getData();
    }, []);

    return (
        <section className="filtered-products">
            <h1 className="title">Resultados de la búsqueda</h1>
            <div className="cards">
                {products.map((item, index) => {
                    /* La ruta a la que redirigirá cada producto es ProductDescription */
                    return (
                        <Link to={{ pathname: '/product/', hash: item._id }} key={index}><ProductCard image={item.picture} name={item.name} price={item.price} /></Link>
                    )
                })}
            </div>
        </section>
    )
}

export default ProductsContainer