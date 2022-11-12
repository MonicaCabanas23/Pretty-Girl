import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Delivery from './Pages/Delivery/Delivery';
import Login from './Pages/Login/Login';
import Feed from './Pages/Feed/Feed';
import Booking from './Pages/Booking/Booking';

import { Routes, Route} from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false);  

  return (
    <div className="App">
      <Header isLogged={isLogged}/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/delivery' element={<Delivery />}/> 
        <Route path='/feed' element={<Feed />}/> 
        <Route path='/booking/*' element={<Booking />}/> 
        <Route path='*' element={ <h1> 404 not found </h1> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
