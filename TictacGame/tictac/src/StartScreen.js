
import { Outlet, Link } from "react-router-dom";
import "./StartScreen.css";

export const StartScreen = () => {

    // Enter Form here for Entering Names.
    return (
    <div className="start-screen-main">
        <Link to="/storyBoard">Start</Link>
    </div>
    )
}