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

    function addPlayer() {
        let proxy = players
        proxy.push({ id: players.length, name: "", faction: {} })
        setPlayers(proxy)
    }
    
    function removePlayer() {
        let proxy = players
        proxy.pop()
        setPlayers(proxy)
    }

    return {
        players,
        setPlayers,
        addPlayer,
        removePlayer
    };
}