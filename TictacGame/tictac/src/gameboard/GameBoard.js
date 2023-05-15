import React, { useEffect, useState } from 'react';
import Tile from '../tiles/Tile';


let  gameBoard = new Array(9).fill(null);

const GameBoard = () => {
    const [playerOne, setTurn] = useState(true);
    

    const onClickTile = (id, setValue) => {
        if (playerOne){
            setValue("X")
            gameBoard[id] = "X"
            setTurn(false)

        }
        else{
            setValue("O")
            gameBoard[id] = "O"
            setTurn(true)
        }
        console.log(gameBoard)
    }

    // When playerOne changes check game state
    useEffect(()=> { 
        checkGameState()
    }, [playerOne])


    const checkGameState = () => {
        // Co-Author: Meherwan Singh Gill
        if ((gameBoard[0] == gameBoard[1] == gameBoard[2] == ("X" || "O")) // Horizontal Checks
        ||
        (gameBoard[3] == gameBoard[4] == gameBoard[5] == ("X" || "O"))
        ||
        (gameBoard[6] == gameBoard[7] == gameBoard[8] == ("X" || "O"))
        ||
        (gameBoard[0] == gameBoard[3] == gameBoard[6] == ("X" || "O")) // Vertical Checks
        ||
        (gameBoard[1] == gameBoard[4] == gameBoard[7] == ("X" || "O"))
        ||   
        (gameBoard[2] == gameBoard[5] == gameBoard[8] == ("X" || "O")) 
        ||
        (gameBoard[6] == gameBoard[4] == gameBoard[2] == ("X" || "O")) // Fowards Slash Check
        ||
        (gameBoard[0] == gameBoard[4] == gameBoard[8] == ("X" || "O")) // Backward Slash Check
         ){
            console.log("THIS WAS CALLED")
            gameBoard = new Array(9).fill(null);
            
         }

    }

    const setupTiles = () => {
        return gameBoard.map((element, index) => {
            return <Tile key={index} id={index} onChangeFunc={onClickTile} />
        })
    }

    return (
        <div>
        {setupTiles()}
        </div>
    )
}

export default GameBoard;



