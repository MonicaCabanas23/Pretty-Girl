import React, {useState} from "react";

const ConfigContext = React.createContext();

export const ConfigProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false);

    const Logout = () => {
        setIsLogged(false);
        localStorage.removeItem("token");
    }

    const Login = () => {
        setIsLogged(true);
    }

    const state = {
        isLogged, 
        Logout, 
        Login,  
    }

    return (
        <ConfigContext.Provider value={state} {...props} />
    )
}

export const useConfigContext = () => {
    const context = React.useContext(ConfigContext);

    if (!context)
    throw new Error("useConfigContext must be call inside of a ConfigContextProvider component");

    return context;
}