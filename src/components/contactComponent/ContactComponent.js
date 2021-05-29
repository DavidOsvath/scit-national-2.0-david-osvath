import React, { useState } from "react"
import "./ContactComponent.css"
import emailjs from "emailjs-com";

const Result = () => {
    return(
        <p>Your message has been succesfully sent! I will contact you shortly!</p>
    );
}

function ContactComponent(props) {

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('davidosvath29@gmail.com', 'template_xz6xzkl', e.target, 'user_voHVhtSVkthP7Mkr9aKHt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

      setTimeout(() => {
          showResult(false);
      },5000);

    return(
        <div className="form">
        <form action="" onSubmit={sendEmail}>
            <div className="formWord">
                <span>Full Name</span>               
                <input
                    type="text"
                    name="fullName"
                    required/>

                    <br />
                <span>Phone Number</span>
                <input 
                    type="text"
                    name="phone"
                    required />
                    <br />
                    <span>Email</span>
                    <input type="text" name="email" required />
                    <br />
            </div>

            <div className="formWord">
                <span>Message</span>
                <textarea name="message" required></textarea>
                <br />
                <button>Submit</button>

                <div className="row">{
                    result ? <Result /> : null
                }</div>
            </div>
        </form>
        </div>
    );
}

export default ContactComponent;