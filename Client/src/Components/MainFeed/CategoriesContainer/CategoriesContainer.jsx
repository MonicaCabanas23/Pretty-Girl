import React, {useState, useEffect} from 'react'
import './CategoriesContainer.scss'
import DecorativeLines from '../../DecorativeLines/DecorativeLines'
import CategoryCard from './CategoryCard/CategoryCard'
import axios from 'axios';

const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);
  const url = "/api/categories";

  useEffect(() => {
    const getData = async() => {
      const {data} = await axios.get(url);
      setCategories(data.categories);
    }
    getData();
  }, []);

  return (
    <section className="categoriesContainer">
        <DecorativeLines />
        <h1 className="title">Explora nuestros productos</h1>
        <div className="categoryCards">
          {categories.map((item, index) => {
            return (
              <CategoryCard key={index} image={item.picture.secure_url} name={item.name}/>
            )
          })}
        </div>
    </section>
  )
}

export default CategoriesContainer