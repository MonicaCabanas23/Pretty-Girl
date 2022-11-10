import React from 'react'
import './Feed.scss';
import ProductsContainer from '../../Components/Body/ProductsContainer/ProductsContainer';
import CategoriesContainer from '../../Components/Body/CategoriesContainer/CategoriesContainer'

const Feed = () => {
  return (
    <main>
      <CategoriesContainer />
      <ProductsContainer />
    </main>
  );
};

export default Feed