import React, { useState, useContext, createContext } from "react";

const dataContext = createContext({});

export default dataContext;

export function AppProvider({ children }) {
    const data = useAppProvider();
    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export const useApp = () => {
    return useContext(dataContext);
};

function useAppProvider() {
    const [user, setUser] = useState({});
    const [players, setPlayers] = useState([]);
    const [territories, setTerritories] = useState([]);


    return {
        user,
        setUser,
        players,
        setPlayers,
        territories,
        setTerritories
    };
}