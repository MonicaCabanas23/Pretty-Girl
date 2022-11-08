import React from 'react'
import './Feed.scss';
import HeaderNoLogin from './../../Components/Header/HeaderNoLogin/HeaderNoLogin';
import ProductsContainer from '../../Components/Body/ProductsContainer/ProductsContainer';
import CategoriesContainer from '../../Components/Body/CategoriesContainer/CategoriesContainer'

const Feed = () => {
  return (
    <div>
      <HeaderNoLogin />
      <main>
        <CategoriesContainer />
        <ProductsContainer />
      </main>
    </div>
  );
};

export default Feed