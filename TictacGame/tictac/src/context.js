import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    let [playerOneScore, setPlayerOneScore] = useState(0);
    let [playerTwoScore, setPlayerTwoScore] = useState(0);
    return <Context.Provider value={{playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore}}>{children}</Context.Provider>

}

export const PlayerContext = createContext();

const PlayerProvider = ({children}) => {

    let [p1Name, setP1Name] = useState(null);
    let [p2Name, setP2Name] = useState(null);
    return <PlayerContext.Provider value={(p1Name, p2Name, setP1Name, setP2Name)} >{children}</PlayerContext.Provider>
}


export default Provider;
