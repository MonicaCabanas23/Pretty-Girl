import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Header.scss";
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchModal from "./SearchModal/SearchModal";
import ActionsBar from "./ActionsBar/ActionsBar";
import { useConfigContext } from "../../Contexts/ConfigContext";
import { useUserContext } from "../../Contexts/UserContext";

const Header = () => {
    const [showActions, setShowActions] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [isAdmin, setIsAdmin] = useState();
    const [showAdminBar, setShowAdminBar] = useState(false);
    const isMovile = useMediaQuery({ query: '(max-width: 900px)' });
    const role = localStorage.getItem("role");
    const context = useUserContext();
    const loggedContext = useConfigContext();

    useEffect(() => {
        setIsAdmin(context.admin);
    }, [context.admin])
    useEffect(() => {
        isMovile ? setShowActions(false) : setShowActions(true);
    }, [isMovile]);

    const handleAdminBar = () => {
        showAdminBar ? setShowAdminBar(false) : setShowAdminBar(true);
    }

    const handleActionsBar = () => {
        isMovile && showActions ? setShowActions(false) : setShowActions(true);
    }

    return (
        <header>
            <div className="header-title-categories">
                <Link to={'/feed'}> <h2>Pretty Girl</h2> </Link>
                <div className="categories">
                    {
                        loggedContext.isLogged ? 
                        <>
                            <a href="#recommended"><h3>Hombre</h3></a>
                            <a href="#recommended"><h3>Mujer</h3></a>
                        </> :
                        <>
                            <a href="#arrived"><h3>Hombre</h3></a>
                            <a href="#arrived"><h3>Mujer</h3></a>
                        </>
                    }
                </div>
            </div>
            {
                showActions ?
                    <ActionsBar isAdmin={isAdmin} showAdminBar={showAdminBar} handleSearching={setIsSearching} handleAdminBar={handleAdminBar} handleActionsBar={handleActionsBar} />
                    : <></>
            }
            <FontAwesomeIcon icon={faBars} className="bars" onClick={handleActionsBar} onChange={handleActionsBar} />
            {/* open the modal if the user is searching */}
            {
                isSearching ? <SearchModal cancelSearch={setIsSearching} /> : <></>
            }
        </header>
    )
}

export default Header