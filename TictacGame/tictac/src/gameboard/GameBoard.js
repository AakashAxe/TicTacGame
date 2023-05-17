import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../context';
import Tile from '../tiles/Tile';
import "./GameBoard.css";


let gameBoard = new Array(9).fill(null);


const GameBoard = () => {
   
    let {playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore} = useContext(Context)
   
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
            
            
            if (playerOne){
                setPlayerOneScore(++playerOneScore);
            } 
            else{
                setPlayerTwoScore(++playerTwoScore);
            }
            console.log("Player One: " + playerOneScore + "\nPlayer Two: " + playerTwoScore)

            setRoundNo(++roundNo)
        }
    }

    useEffect( ()=> {
        if (roundNo > 1){
            console.log(roundNo)
            let name = ""
            // if (!playerOne){
            //     name = "Player 2"
            // }  
            if (playerOne ? name="Player 1" : name="Player 2");
            alert(name + " Won!!")
        }

    }, [roundNo]
    )

    const setupTiles = () => {
        return gameBoard.map((element, index) => {
            
            // When tile key changees, it renders that component
            return (
        
            <div key={`${roundNo}_${index}`} className="grid-item">
             <Tile id={index} onChangeFunc={onClickTile}/>
            </div>
            )
    
        }) 
    }

    const compareThreeLocations = (i,j,k) =>{
        if(gameBoard[i] === gameBoard[j] && gameBoard[j] === gameBoard[k] ){
            if(gameBoard[i] === "X" || gameBoard[i] === "O"){
                return true
            }
        }
        return  false
    }


    return (
        <div>
            <h1>Player 1: {playerOneScore} Player 2: {playerTwoScore}</h1>
            <div className="grid-container">
                {console.log("render")}
                {setupTiles()}
            </div>
        </div>
    )


}

export default GameBoard;



