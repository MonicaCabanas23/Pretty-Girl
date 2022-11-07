import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Delivery from './Components/Body/Delivery';
import Login from './Components/Body/Login';
import Feed from './Pages/Feed/Feed';
import { Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/delivery' element={<Delivery />}/> 
        <Route path='/feed' element={<Feed />}/> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
