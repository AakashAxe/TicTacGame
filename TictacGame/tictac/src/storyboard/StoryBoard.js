import { Outlet, Link } from "react-router-dom";
import { PlayerContext } from "../context";
import { useContext } from "react";
import "./StoryBoard.css";

const StoryBoard = () => {

    let p1 = "Aakash"
    let p2 = "Alex"

    const stories = [
        "In the quaint town of Willowbrook, nestled amidst rolling hills and lush greenery, two friends, " + p1 + " and " + p2 +", found themselves in a friendly rivalry that would soon ignite into a thrilling card duel. Both avid collectors of magical cards, they had spent countless hours honing their skills, studying strategies, and amassing powerful decks.",
        "On a sunny afternoon, they gathered at the local park, spreading their cards across a picnic table, excitement brimming in their eyes. " + p1 +", with a mischievous smile, declared, " + p2 +", it's time to settle this once and for all. Let's have a card duel!'",
        "In the dimly lit room, two rivals "+ p1 + " amd " +p2+ " locked eyes, their gazes filled with determination and rivalry. The air crackled with tension as they shuffled their decks, their hands poised to draw their opening hands. With a swift motion, they laid down their cards, commencing a card duel that would determine the fate of their long-standing rivalry.",
        "In the crowded gaming hall, two long-time rivals, "+p1+" and "+p2+", found themselves face-to-face, their eyes blazing with determination. Each was determined to prove their superiority in the world of magical card dueling, and the hall hummed with excitement as they shuffled their decks and prepared to face each other. With a nod, they both drew their opening hands, and the air crackled with energy as the duel began.",
    ]
    
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    return (
        <div className="story-board">
            {console.log("Story picked") }   
            {stories[getRandomInt(stories.length)]}
            <br/>
            <Link to="/gameBoard">BATTLE!!</Link>
        </div>
    )

}

export default StoryBoard;