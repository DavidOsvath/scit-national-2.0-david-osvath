import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

const LINKS = ["/Contact", "/Projects", "/Contact", "/Education"];


export const Button = ({children, type, onClick, buttonStyle, buttonSize, id}) =>  {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to={LINKS[id]} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>

            
        </Link>
    );
};