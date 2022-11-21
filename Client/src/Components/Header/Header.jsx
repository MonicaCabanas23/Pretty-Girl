import React, {useState, useEffect} from "react";
import "./Header.scss";
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchModal from "./SearchModal/SearchModal";
import ActionsBar from "./ActionsBar/ActionsBar";

const Header = () => {
    const [showActions, setShowActions] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdminBar, setShowAdminBar] = useState(false);
    const isMovile = useMediaQuery({query: '(max-width: 900px)'});
    const role = localStorage.getItem("role");

    useEffect(() => {
        if(role === "ADMIN_ROLE")
            setIsAdmin(true);
        else
            setIsAdmin(false);
        
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
                    <h3>Hombre</h3>
                    <h3>Mujer</h3>
                </div>
            </div>
            {
                showActions ?
                <ActionsBar isAdmin={isAdmin} showAdminBar={showAdminBar} handleSearching={setIsSearching} handleAdminBar={handleAdminBar} handleActionsBar={handleActionsBar}/>
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