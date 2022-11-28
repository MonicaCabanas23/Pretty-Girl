import React from 'react'
import { Link } from "react-router-dom"
import './Products.scss'

const Products = () => {

  return (
    <div className="footer-products">
        <h3>Productos</h3>
        <Link to='/feed/filtered'>
          <p>Accesorios</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Bikinis</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Bolsos</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Camisas</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Lentes</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Pantalones</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Shorts</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Vestidos</p>
        </Link>
        <Link to='/feed/filtered'>
          <p>Zapatos</p>
        </Link>
    </div>
  )
}

export default Products