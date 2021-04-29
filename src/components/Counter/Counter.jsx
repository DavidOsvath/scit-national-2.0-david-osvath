import { useState } from "react";




export function Counter() {
    const [counterNumber, setCounterNumber] = useState(0);
    const[showText, setShowText] = useState(true);

    console.log("render counter");
    return (
        <div className="counter">
            {showText ? <h3>Count:</h3> : null}           
            <p>{counterNumber}</p>
            <button onClick = {() =>{
                setCounterNumber(counterNumber +1 );
                setShowText(false);
                }}
            >
                Press Me
            </button>
        </div>
    );
}