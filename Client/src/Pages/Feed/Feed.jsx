import React, {useState} from 'react'
import { Routes, Route} from "react-router-dom";
import './Feed.scss';
import MainFeed from '../../Components/MainFeed/MainFeed';
import Booking from '../../Components/Booking/Booking';
import { createContext } from 'react';

export const ProductContext = createContext();
export const DeliveryContext = createContext();

const Feed = () => {
  const [product, setProduct] = useState({product: 'Vestido', color: 'Azul', size: 'XS', quantity: '1', total: 'US$ 25.00'});
  const [isDelivery, setIsDelivery] = useState(true);
  const [deliveryDetails, setDeliveryDetails] = useState({addersee: 'Erick Guerra', date: '11/11/2022', location: 'UCA, Antiguo Cuscatlán'});

  /* Ocultar categoriesContainer si está en ProductDescription */
  /* Ocultar ambos que está por default si está en booking */

  /* El feed irá cambiando dependiendo de ciertos estados, esto puede ser con <Link/> */

  return (
    <div>
      <ProductContext.Provider value={{product, setProduct}}>
        <Routes>
          <Route path='/' element={<MainFeed />}/> 
          <Route path='/booking/*' element={<Booking />}/> 
        </Routes>
      </ProductContext.Provider>  
    </div>
  );
};

export default Feed