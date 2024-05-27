import { useState, createContext } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [states, setStates] = useState({
        loading: false,
        user: {},
    });
    return <GlobalStateContext.Provider value={{ states, setStates }}>{children}</GlobalStateContext.Provider>;
};
