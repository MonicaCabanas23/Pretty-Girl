import React, {useState} from "react";
import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchModal from "./SearchModal/SearchModal";
import ActionsBar from "./ActionsBar/ActionsBar";
import AdminBar from './AdminBar/AdminBar'
/* Context */
import {useConfigContext} from '../../Contexts/ConfigContext';

const Header = () => {
    const [showActions, setShowActions] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdminBar, setShowAdminBar] = useState(false);

    const handleAdminBar = () => {
        showAdminBar ? setShowAdminBar(false) : setShowAdminBar(true);
    }

    const handleActionsBar = () => {
        showActions ? setShowActions(false) : setShowActions(true);
    }

    return (
        <header>
            <div className="header-title-categories">
                <Link to={'/feed'}> <h2>Pretty Girl</h2> </Link>
                <div className="categories">
                    <h3>Hombre</h3>
                    <h3>Mujer</h3>
                </div>
            </div>
            {
                showActions ?
                <ActionsBar isAdmin={isAdmin} showAdminBar={showAdminBar} handleSearching={setIsSearching} handleAdminBar={handleAdminBar}/>
                : <></>
            }
            <FontAwesomeIcon icon={faBars} className="bars" onClick={handleActionsBar} onChange={handleActionsBar}/>
            {/* open the modal if the user is searching */}
            {
                isSearching ? <SearchModal cancelSearch={setIsSearching}/> : <></>
            }
        </header>
    )
}

export default Header