import React from 'react'
import './AdminBar.scss'
import { Link } from 'react-router-dom';

const AdminBar = () => {
  return (
    <div className='admin-actions-container'>
        <div className="admin-actions">
            <Link>
                <figure className={`btn-products`}>
                    <i className="fa-solid fa-shirt"></i>
                    <p>Productos</p>
                </figure>
            </Link>
            <Link>
                <figure className={`btn-categories`}>
                    <i className="fa-solid fa-cubes-stacked"></i>
                    <p>Categorías</p>
                </figure>
            </Link>
            <Link>
                <figure className={`btn-login`}>
                    <i className="fa-regular fa-bookmark"></i>
                    <p>Reservas</p>
                </figure>
            </Link>
        </div>
    </div>
  )
}

export default AdminBar