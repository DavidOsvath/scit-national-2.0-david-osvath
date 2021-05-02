import "./FirstName.css";

export function FirstNameField(props) {
    return(
        <div className="first-name">
            <p>FIRST NAME</p>
            <input  onChange={() => {
            console.log("changed");
                                    }}/>
        </div>
    );
}