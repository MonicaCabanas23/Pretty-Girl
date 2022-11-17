import { Navigate, Routes, Route } from "react-router-dom";
import './App.scss'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Feed from './Pages/Feed/Feed';
import Filtered from './Pages/Feed/Filtered/Filtered';
import Product from "./Pages/Product/Product";

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/feed' />} />
          {/* Por default le mostrará la página inicial de la página (feed) */}
          <Route path='/feed/*' element={<Feed />} />
          <Route path='/feed/filtered/' element={<Filtered />} />
          <Route path='/product/*' element={<Product />} />
          {/* En el login, redirigirá a register si no tiene cuenta */}
          <Route path='/login/*' element={<Login />} />
          <Route path='*' element={<h1> 404 not found </h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
