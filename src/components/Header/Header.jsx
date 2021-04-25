import { AppLogo } from "../AppLogo/AppLogo";
import { MenuLogo } from "../MenuLogo/MenuLogo";
// import { MenuFlyout } from "../MenuFlyout/MenuFlyout";
import "./Header.css";

export function Header() {
  return (
    <div className="app-header">
      <MenuLogo />
      <AppLogo />
      
      <p className="app-header__title">To Do App</p>
    </div>
  );
}


