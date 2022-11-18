import React from 'react'
import './ActionsBar.scss'
import { Link } from 'react-router-dom'
/* Context */
import {useConfigContext} from '../../../Contexts/ConfigContext'

const ActionsBar = ({isAdmin, showAdminBar, handleSearching, handleAdminBar}) => {
    const {isLogged, Logout} = useConfigContext();

    const handleLogOut = () => {
        Logout();
    }

    return (
        <div className="header-actions-container">
            <div className="header-actions">
                <figure className="btn-search" onClick={() => {
                    handleSearching(true);
                    }}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p>Buscar</p>
                </figure>
                {
                    isLogged ? 
                        <>
                            <Link to={'/'}>
                                <figure onClick={handleLogOut} className="btn-logout">
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    <p>Cerrar sesión</p>
                                </figure>
                            </Link>
                            {
                                isAdmin ? 
                                <figure className={`btn-admin`} onClick={handleAdminBar}>
                                    <i class="fa-solid fa-wrench"></i>
                                    <p>Administrar</p>
                                </figure> :
                                <Link to={'feed/bag'}>
                                    <figure className="btn-bag">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                        <p>Bolsa</p>
                                    </figure>
                                </Link>
                            }
                        </> : 
                        <Link to={'/login'}>
                            <figure className={`btn-login`}>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                <p>Iniciar sesión</p>
                            </figure>
                        </Link>
                }
            </div>
            {
                showAdminBar ? <AdminBar /> : <></>
            }
        </div>
    )
}

export default ActionsBar