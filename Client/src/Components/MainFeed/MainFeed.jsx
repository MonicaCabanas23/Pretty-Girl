import React from 'react'
import { Routes, Route} from "react-router-dom";
import CategoriesContainer from './CategoriesContainer/CategoriesContainer'
import ProductsContainer from './ProductsContainer/ProductsContainer'

const Body = () => {
  /* Ocultar categoriesContainer si está en ProductDescription */

  /* El body irá cambiando dependiendo de ciertos estados, esto puede ser con <Link/> */
  return (
    <div>
        <CategoriesContainer/>
        {/* Si da click en algún producto, este lo redirigirá a ProductDescription */}
        <ProductsContainer/>
    </div>
  )
}

export default Body