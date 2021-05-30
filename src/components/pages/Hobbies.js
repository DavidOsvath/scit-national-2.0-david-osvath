import React from "react";
import "../../App.css" ;
import SimpleSlider from "../HobbyCarousel";

export default function Hobbies() {
    return (
        <div className="hobbies">
            <div className="hobbies-container">       
                    <SimpleSlider />        
            </div>
        </div>);
}