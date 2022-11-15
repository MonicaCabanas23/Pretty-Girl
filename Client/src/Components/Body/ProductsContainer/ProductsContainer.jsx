import React, {useState, useEffect} from 'react'
import './ProductsContainer.scss'
import DecorativeLines from '../../DecorativeLines/DecorativeLines'
import ProductCard from './ProductCard/ProductCard'
import axios from "axios";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const url = "/api/products";

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(url);
      setProducts(data.products);
    }
    getData();
  }, []);

  return (
    <section className="recommended-products">
        <DecorativeLines />
        <h1 className="title">Recién llegados</h1>
        <div className="cards">
        {products.map((item, index) => {
            return (
              <ProductCard key={index} image={item.picture.secure_url} name={item.name} price={item.price}/>
            )
          })}
        </div>
    </section>
  )
}

export default ProductsContainer