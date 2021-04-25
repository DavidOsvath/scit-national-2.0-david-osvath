import { Header } from "./components/Header/Header";
import { MenuFlyout } from "./components/MenuFlyout/MenuFlyout";
import "./App.css";

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <MenuFlyout />
    </div>
  );
}

export default App;
