import "./FormArea.css"
import { Component } from "react";

import { FirstNameField } from "./Name/FirstName";
import { LastNameField } from "./Name/LastName";
import { EmailField } from "./Email/Email";
import { MessageField } from "./Message/Message";
import { SendButton } from "./SendButton/SendButton";

export class FormAreaField extends Component {
    state = {
        firstNameValue:"Dave",
      };

      handleInputChange = (event) => {
        this.setState({ firstNameValue: event.target.value });
        console.log(this.state.firstNameValue);
      };


      render() { 
    return(
        <div className="form-area">
            <FirstNameField />
            <LastNameField />
            <EmailField />
            <MessageField />
            <SendButton />
        </div>
    );
      }
}