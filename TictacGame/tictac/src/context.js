import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    let [playerOneScore, setPlayerOneScore] = useState(0);
    let [playerTwoScore, setPlayerTwoScore] = useState(0);
    return <Context.Provider value={{playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore}}>{children}</Context.Provider>

}


export default Provider;
