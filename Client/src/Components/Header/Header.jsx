import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = ({ isLogged=false }) => {
  return (
    <header>
        <div className="header-title-categories">
            <h2>Pretty Girl</h2>
            <div className="categories">
                <h3>Hombre</h3>
                <h3>Mujer</h3>
                <Link to="/deliverylkkj"> Test </Link>
            </div>
        </div>
        <div className="header-actions">
            <figure className="btn-search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <p>Buscar</p>
            </figure>
            {
                isLogged ? 
                    <>
                        <figure className="btn-logout">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <p>Cerrar sesión</p>
                        </figure>
                        <figure className="btn-bag">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p>Bolsa</p>
                        </figure>
                    </> : 
                <figure className={`btn-login`}>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <p>Iniciar sesión</p>
                </figure>
            }
            <FontAwesomeIcon icon={faBars} className="bars"/>
        </div>
    </header>
  )
}

export default Header