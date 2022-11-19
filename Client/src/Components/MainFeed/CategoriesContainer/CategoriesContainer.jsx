import React, { useState, useEffect } from 'react'
import './CategoriesContainer.scss'
import DecorativeLines from '../../DecorativeLines/DecorativeLines'
import CategoryCard from './CategoryCard/CategoryCard'
import axios from 'axios';
import Loading from '../../Loading/Loading';

const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);
  const [cargado, setCargado] = useState(false);
  const url = "/api/categories";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(url);
      setCategories(data.categories);
      setCargado(true);
    }
    getData();
  }, []);

  return (
    <section className="categoriesContainer">
      <h1 className="title">Explora nuestros productos</h1>
      <DecorativeLines />
      <div className="categoryCards">
        {cargado ? <>

          {
            categories.map((item, index) => {
              return (
                <CategoryCard key={index} image={item.picture.secure_url} name={item.name} />
              )
            })
          }
        </> : <Loading />}

      </div>
    </section>
  )
}

export default CategoriesContainer