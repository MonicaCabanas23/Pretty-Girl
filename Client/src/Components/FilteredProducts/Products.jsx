import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Products.scss'
import ProductCard from '../MainFeed/ProductsContainer/ProductCard/ProductCard'
import axios from "axios";

const ProductsContainer = ({filteredUrl}) => {
    const [products, setProducts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(filteredUrl);
            setProducts(data.products);
        }
        getData();
    }, []);

    useEffect(() => {
        if (products.length > 0)
            setIsEmpty(false);
        else 
            setIsEmpty(true);
    }, [products])

    return (
        <section className="filtered-products">
            <h1 className="title">Resultados de la búsqueda</h1>
            <div className="cards">
                {
                    isEmpty ? 
                    <div className='information-message'>
                        <figure>
                            <img src="https://res.cloudinary.com/cabrera-evil/image/upload/v1669599268/prettygirl-api/default/box_bjknfp.png" alt="empty" />
                        </figure>
                        <p> No se encontraron resultados :/ </p>
                    </div> :
                    products.map((item, index) => {
                        /* La ruta a la que redirigirá cada producto es ProductDescription */
                        return (
                            <Link to={{ pathname: '/product/', hash: item._id }} key={index}><ProductCard image={item.picture} name={item.name} price={item.price} /></Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductsContainer