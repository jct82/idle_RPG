// == Import
import { Route, Routes } from 'react-router-dom';

import Character from 'src/components/Character';
import Craft from 'src/components/Craft';
import Fight from 'src/components/Fight';
import NotFound from 'src/components/NotFound';
import Home from 'src/components/Home';
import Menu from '../Menu';
import Header from '../Header';
import './style.scss';
import Job from '../Job';

// == Composant
const App = () => (
  <div className="app">

   <Header title="Idle-Rpg"/>
    <Menu />
    {/* <h1>Jeu IDLE</h1> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/character" element={<Character />} />
      <Route path="/jobs/mining" element={<Job />} />
      {/*<Route exact path="/craft" element={<Craft />} />
      <Route exact path="/fight" element={<Fight />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>


  </div>
);

// == Export
export default App;
