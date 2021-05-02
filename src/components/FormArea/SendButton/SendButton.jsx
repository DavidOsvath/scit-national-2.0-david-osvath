import "./SendButton.css";

export function SendButton(press) {
    return(
        <div className="send-button">
            <button onClick={() => {
                console.log("clicked send");
                
                }
                }>
                Send
            </button>
            
        </div>
    );
}