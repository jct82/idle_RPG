import { Route, Routes } from "react-router-dom";
import Craft from "src/components/Craft";
import Fight from "src/components/Fight";
import NotFound from "src/components/NotFound";
import Home from "src/components/Home";
import Menu from "../Menu";
import Header from "../Header";
import Shop from "../Shop";
import Fishing from "../Fishing";
import Mining from "../Mining";
import "./style.scss";
import Inventory from "../Character";
import BtnDark from "../BtnDark/BtnDark";


// == Composant
const App = () => {
  // const audio = new Audio('https://api.soundcloud.com/tracks/1018153165');
  // audio.volume = 0.10;
  // audio.play();
  return (
    <div className="app">
      <BtnDark/>
      
      <Header title="Idle-Rpg" />
      <Menu />
    
      {/* <h1>Jeu IDLE</h1> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/fighting" element={<Fight />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/jobs/mining" element={<Mining job="mining" />} />
        <Route path="/jobs/fishing" element={<Fishing job="fishing" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
// == Export
export default App;
