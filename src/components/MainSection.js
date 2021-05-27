import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";
import binary from "./videos/BinaryBackground.mp4";

function MainSection() {
    return(
        <div className="main-container"> 
            <video src={binary} autoPlay loop muted />
            <div className="info-container">
                    <h1>Osvath David</h1>
                    <p>Need a responsive website? I'm your guy</p>
                <div className="main-btns">
                    <Button id={0} className="btns" buttonStyle="btn--outline" buttonSize="btn--large">EMAIL</Button>
                    <Button id={1} className="btns" buttonStyle="btn--primary" buttonSize="btn--large">My Projects <i className="fas fa-project-diagram" /></Button>
                </div>
            </div>
        </div>

    );
}

export default MainSection;