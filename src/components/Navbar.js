import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button"
import logo from "./charmie.png"
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return(
        <div>
            <nav className = "navbar">
                <div className="navbar-container"> 
                     <img src={logo} alt="logo" className="logo-image" />            
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                         Hi, I'm David
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu} >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu} >
                                Projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu} >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle="btn--outline">Contact</Button>}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;