import React from 'react'
import { Routes, Route} from "react-router-dom";
import './Feed.scss';
import MainFeed from '../../Components/MainFeed/MainFeed';
import Booking from '../../Components/Booking/Booking';
const Feed = () => {
  /* Ocultar categoriesContainer si está en ProductDescription */
  /* Ocultar ambos que está por default si está en booking */

  /* El feed irá cambiando dependiendo de ciertos estados, esto puede ser con <Link/> */
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainFeed />}/> 
        
        <Route path='/booking/*' element={<Booking />}/> 
        
      </Routes>
    </div>
  );
};

export default Feed