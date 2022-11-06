import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <header>
        <div className="header-title-categories">
            <h2>Pretty Girl</h2>
            <div className="categories">
                <h3>Hombre</h3>
                <h3>Mujer</h3>
            </div>
        </div>
        <div className="header-actions">
            <figure>
                <i className="fa-solid fa-magnifying-glass"></i>
                <p>Buscar</p>
            </figure>
            <figure>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                <p>Iniciar sesión</p>
            </figure>
        </div>
    </header>
    );
}

export default Header; 
