import React, { useState, useContext, createContext } from "react";

const playerContext = createContext({});

export default playerContext;

export function AppProvider({ children }) {
    const player = useAppProvider();
    return <playerContext.Provider value={player}>{children}</playerContext.Provider>;
}

export const useApp = () => {
    return useContext(playerContext);
};

function useAppProvider() {
    const [players, setPlayers] = useState([
        { id: 0, name: "", faction: {} },
        { id: 1, name: "", faction: {} },
        { id: 2, name: "", faction: {} },
    ]);



    return {
        players,
        setPlayers,
    };
}