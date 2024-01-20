import { createContext, useState } from "react";

export const UsersContext = createContext();



export const UsersContextProvider = ({ children }) => {

    // const [ login, setLogin ] = useState(false);
    const [ login, setLogin ] = useState(false);


    const handleLogin = () => {
        setLogin(true);
    }

    return (
        <UsersContext.Provider
        value={{
            login,
            handleLogin
        }}
        >{children}</UsersContext.Provider>
    )
}