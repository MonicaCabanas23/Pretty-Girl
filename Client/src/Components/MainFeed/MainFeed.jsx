import React, {useState, useEffect} from 'react'
import './MainFeed.scss'
import { Routes, Route} from "react-router-dom";
import CategoriesContainer from './CategoriesContainer/CategoriesContainer'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductsContainer from './ProductsContainer/ProductsContainer'
import { useConfigContext} from '../../Contexts/ConfigContext'

const Body = () => {
  const context = useConfigContext();
  const [categoryClicked, setCategoryClicked] = useState('');

  const handleCategoryClick = (value) => {
    setCategoryClicked(value);
  }

  useEffect(() => {
    console.log(categoryClicked);
  }, [categoryClicked])
  

  return (
    <div className='main-feed-container'>
      <CategoriesContainer handleCategoryClick={handleCategoryClick}/>
      {
        context.isLogged ? <ProductsContainer title={'Recomendados para ti'}/> : <></>
      }
      <ProductsContainer title={'Recién llegados'}/>
    </div>
  )
}

export default Body