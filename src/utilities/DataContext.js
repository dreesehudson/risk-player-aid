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
    const [territories, setTerritories] = useState([]);


    return {
        territories,
        setTerritories
    };
}