import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import './ProductsContainer.scss'
import DecorativeLines from '../../DecorativeLines/DecorativeLines'
import ProductCard from './ProductCard/ProductCard'
import axios from "axios";

const ProductsContainer = ({title}) => {
  const [products, setProducts] = useState([]);
  const url = "/api/products";

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(url);
      setProducts(data.products);
      console.log(data.products)
    }
    getData();
  }, []);

  return (
    <section className="recommended-products">
        <DecorativeLines />
        <h1 className="title">{title}</h1>
        <div className="cards">
        {products.map((item, index) => {
          /* La ruta a la que redirigirá cada producto es ProductDescription */
            return (
              <Link to={{pathname: '/product/', hash:item._id}} key={index}><ProductCard  image={item.picture.secure_url} name={item.name} price={item.price} /></Link>
            )
          })}
        </div>
    </section>
  )
}

export default ProductsContainer