import React, {useState} from 'react'
import { Routes, Route} from "react-router-dom";
import CategoriesContainer from './CategoriesContainer/CategoriesContainer'
import ProductDescription from './ProductDescription/ProductDescription'
import ProductsContainer from './ProductsContainer/ProductsContainer'
import { useConfigContext} from '../../Contexts/ConfigContext'

const Body = () => {
  const context = useConfigContext();
  /* Ocultar categoriesContainer si está en ProductDescription */
  const [isReading, setIsReading] = useState(false);

  /* El body irá cambiando dependiendo de ciertos estados, esto puede ser con <Link/> */
  return (
    <div>
      {
        isReading ? 
        <>
          <ProductDescription /> 
          <ProductsContainer title={'Recomendados para ti'}/>
        </> : 
        <>
          <CategoriesContainer/>
          {
            context.isLogged ? <ProductsContainer title={'Recomendados para ti'}/> : <></>
          }
          <ProductsContainer title={'Recién llegados'}/>
        </>
      }
    </div>
  )
}

export default Body