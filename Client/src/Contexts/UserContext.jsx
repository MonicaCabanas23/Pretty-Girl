import React, {useState} from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(false);
    const [role, setRole] = useState();

    isAdmin = () => {
        if(localRole === "ADMIN_ROLE")
            setRole("ADMIN_ROLE");
        else
            setRole("CLIENT_ROLE");
    }

    hasToken = () => {
        if(localToken)
            setToken(true);
        else
            setToken(false);
    }

    const state = {
        isAdmin,
        hasToken,
    }

    return (
        <UserContext.Provider value={state} {...props} />
    )
}

export const useUserContext = () => {
    const context = React.useContext(UserContext);

    if (!context)
    throw new Error("useUserContext must be call inside of a UserContextProvider component");

    return context;
}