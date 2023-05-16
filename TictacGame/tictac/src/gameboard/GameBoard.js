import React, { useEffect, useState } from 'react';
import Tile from '../tiles/Tile';


let gameBoard = new Array(9).fill(null);

const GameBoard = () => {
    let [playerOneScore, setPlayerOneScore] = useState(0);
    let [playerTwoScore, setPlayerTwoScore] = useState(0);
    let [roundNo, setRoundNo] = useState(1)

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
        console.log("This is being called")
        if (gameBoard[1] == "X" && gameBoard[0] =="X" && gameBoard[2] =="X"){
            console.log("Hello If Here")
        }
        checkGameState()
    }, [playerOne])


    const checkGameState = () => {

        // // Co-Author: Meherwan Singh Gill
        if ((compareThreeLocations(0,1,2) || compareThreeLocations(0,1,2)) // Horizontal Checks
        ||
        (compareThreeLocations(3,4,5) || compareThreeLocations(3,4,5))
        ||
        (compareThreeLocations(6,7,8) || compareThreeLocations(6,7,8))
        ||
        (compareThreeLocations(0,3,6) || compareThreeLocations(0,3,6)) // Vertical Checks
        ||
        (compareThreeLocations(1,4,7) || compareThreeLocations(1,4,7))
        ||  
        (compareThreeLocations(2,5,8) || compareThreeLocations(2,5,8)) 
        ||
        (compareThreeLocations(6,4,2) || compareThreeLocations(6,4,2)) // Fowards Slash Check
        ||
        (compareThreeLocations(0,4,8) || compareThreeLocations(0,4,8)) )// Backward Slash Check
         {
            gameBoard = new Array(9).fill(null);
            setRoundNo(++roundNo)
            if (playerOne){
                setPlayerOneScore(++playerOneScore);
            } 
            else{
                setPlayerTwoScore(++playerTwoScore);
            }
            console.log("Player One: " + playerOneScore + "\nPlayer Two: " + playerTwoScore)
            
        }
    }

    const setupTiles = () => {
        return gameBoard.map((element, index) => {
            return <Tile key={`${roundNo}_${index}`} id={index} onChangeFunc={onClickTile}/>
        })
    }

    const compareThreeLocations = (i,j,k) =>{
        if(gameBoard[i] === gameBoard[j]  && gameBoard[j] === gameBoard[k] ){
            if(gameBoard[i] === "X" || gameBoard[i] === "O"){
                return true
            }
        }
        return  false
    }


    return (
        <div>
        <h1>score {playerTwoScore}</h1>
        {console.log("render")}
        {setupTiles()}
        </div>
    )


}

export default GameBoard;



