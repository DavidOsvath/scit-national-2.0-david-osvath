import { About } from "../About/About";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import "./HeaderButtons.css";

export function HeaderButtons() {
  return (
    <div className="headerButtons">
      <Home />
      <About />
      <Contact />
    </div>
  );
}