import { useState } from 'react'
import { Navigate, Routes, Route} from "react-router-dom";
import { useConfigContext } from './Contexts/ConfigContext';
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Feed from './Pages/Feed/Feed';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/feed' />}/>
        {/* Por default le mostrará la página inicial de la página (feed) */}
        <Route path='/feed/*' element={<Feed />}/> 
        {/* En el login, redirigirá a register si no tiene cuenta */}
        <Route path='/login/*' element={<Login />}/> 
        <Route path='*' element={ <h1> 404 not found </h1> }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
