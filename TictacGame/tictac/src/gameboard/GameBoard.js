import React from 'react';
import Tile from '../tiles/Tile';

const GameBoard = () => {
    let gameBoard = new Array(9).fill(null);
    let playerOne = true;

    const onClickTile = (id, setValue) => {
        if (playerOne){
            setValue("X")
            gameBoard[id] = "X"
            playerOne=false

        }
        else{
            setValue("O")
            gameBoard[id] = "O"
            playerOne = true
        }
    }

    const checkGameState = () => {
        
        if (gameBoard[0] == gameBoard[1] == gameBoard[2]){  // Horizontal Checks
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[3] == gameBoard[4] == gameBoard[5]){
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[6] == gameBoard[7] == gameBoard[8]){
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[0] == gameBoard[3] == gameBoard[6]) { // Vertical Checks
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[1] == gameBoard[4] == gameBoard[7]){
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[2] == gameBoard[5] == gameBoard[8]){
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[6] == gameBoard[4] == gameBoard[2]){ // Foward Slash
            gameBoard = new Array(9).fill(null);
        }
        else if (gameBoard[0] == gameBoard[4] == gameBoard[8]){  // Backward Slash
            gameBoard = new Array(9).fill(null);
        }
    }

    const setupTiles = () => {
        return gameBoard.map((element, index) => {
            return <Tile id={index} onChangeFunc={onClickTile} />
        })
    }

    return (
        <div>
        {setupTiles()}
        </div>
    )
}

export default GameBoard;



