import React, {useState} from "react";
import "./Header.scss";
/* For icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* For navigating to another pages */
import { Link } from 'react-router-dom';
import SearchModal from "./SearchModal/SearchModal";

const Header = ({ isLogged=false }) => {
    const [isSearching, setIsSearching] = useState(false);

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
                <figure className="btn-search" onClick={() => {
                    setIsSearching(true);
                    }}>
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
                        <Link to={'/login'}>
                            <figure className={`btn-login`}>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                <p>Iniciar sesión</p>
                            </figure>
                        </Link>
                }
                <FontAwesomeIcon icon={faBars} className="bars"/>
            </div>
            {/* open the modal if the user is searching */}
            {
                isSearching ? <SearchModal cancelSearch={setIsSearching}/> : <></>
            }
        </header>
    )
}

export default Header