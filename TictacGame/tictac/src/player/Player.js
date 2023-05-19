

const Player = ( {name} )=>{

    const victoryQuotes = [
        "Your feeble attempts didn't stand a chance against my strategy!",
        "Your defenses were no match for my relentless assault!",
        "Behold the true power of my deck!",
        "I activated a devastating combo that has sealed your fate!"
    ]

    
    
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    return (
        <div>
            <h1> {name} </h1>
        </div>
    )



}