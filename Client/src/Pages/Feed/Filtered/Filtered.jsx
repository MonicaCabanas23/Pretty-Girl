import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductsContainer from '../../../Components/FilteredProducts/Products';

const Body = () => {
    /* Ocultar categoriesContainer si está en ProductDescription */

    /* El body irá cambiando dependiendo de ciertos estados, esto puede ser con <Link/> */
    return (
        <div>
            <ProductsContainer />
        </div>
    )
}

export default Body