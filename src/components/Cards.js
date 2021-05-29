import React from "react";
import CardPiece from "./CardPiece";
import "./Cards.css";
import dogProject from "./dogProject.png"
import flippingGame from "./FlippingGame.png"
import blockGame from "./BlockGame.png"

function Cards() {
    return(
        <div className="cards">
            <h1>Check out some projects I've worked on!</h1>
            <div classNmae="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-pieces">
                        <CardPiece
                             src={dogProject}
                             text="Do you like side-scrollers? This game is for YOU! Do you think you can find all the diamonds?"
                             label="The Adventures of Doggo"
                             path="http://nerdcore.eu/osvathborosdavid/GameforNerd/"                          
                             />                                    
                        <CardPiece
                             src={flippingGame}
                             text="Do you like memory games? Try this one out! Only 2% of people can beat this game Kappa"
                             label="Flippin'League"
                             path="http://nerdcore.eu/osvathborosdavid/flippin-league/"
                             />
                        <CardPiece
                             src={blockGame}
                             text={`Block Mania! Dodge all the red blocks or face their wrath! Current Highscore: 2200`}
                             label="Block Mania"
                             path="http://nerdcore.eu/osvathborosdavid/BlockMania/"
                             />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;