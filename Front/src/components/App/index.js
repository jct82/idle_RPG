// == Import
import { Route, Routes } from 'react-router-dom';

import Character from 'src/components/Character';
import Craft from 'src/components/Craft';
import Fight from 'src/components/Fight';
import NotFound from 'src/components/NotFound';
import Menu from '../Menu';
import Header from '../Header';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">

   <Header title="Idle-Rpg"/>
    {/* <h1>Jeu IDLE</h1> */}
    <Menu />
    <Routes>
      <Route exact path="/" element={<Character />} />
      <Route exact path="/craft" element={<Craft />} />
      <Route exact path="/fight" element={<Fight />} />
      <Route path="*" element={<NotFound />} />
    </Routes>


  </div>
);

// == Export
export default App;
