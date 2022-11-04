import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Delivery from './Components/Body/Delivery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Delivery />
      <Footer />
    </div>
  )
}

export default App
