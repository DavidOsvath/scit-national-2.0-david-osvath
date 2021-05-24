import { AppLogo } from "../AppLogo/AppLogo";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons"
import "./Header.css";

export function Header() {
  return (
    <div className="app-header">
      <AppLogo />
      <HeaderButtons />
      <p className="app-header__title"></p>
    </div>
  );
}
