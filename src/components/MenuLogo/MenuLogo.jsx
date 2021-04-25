import menuSvg from "./menu.svg";
import "./MenuLogo.css";


export function MenuLogo() {
    return (
    <img 
        src={menuSvg} 
        alt="menu-logo" 
        className="menu-logo" 
        onMouseEnter= {() => {
        console.log("show menu");
        
        }}
        />

    );
}