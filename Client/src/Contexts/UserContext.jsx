import React, { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(false);
    const [admin, setAdmin] = useState(false);

    const isAdmin = () => {

    }

    const state = {
        isAdmin,
        hasToken,
        admin
    }

    return (
        <UserContext.Provider value={state} {...props} />
    )
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context)
        throw new Error(context);

    return context;
}