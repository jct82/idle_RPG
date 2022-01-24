// == Import
import { Route, Routes } from 'react-router-dom';

import Character from 'src/components/Character';
import Craft from 'src/components/Craft';
import Fight from 'src/components/Fight';
import NotFound from 'src/components/NotFound';
import Home from 'src/components/Home';
import Menu from '../Menu';
import Header from '../Header';
import Job from '../Job';
import Shop from '../Shop';


import './style.scss';
import Register from '../Header/register';

// == Composant
const App = () => (
  <div className="app">
   <Header title="Idle-Rpg"/>
   <Register />
    <Menu />
    {/* <h1>Jeu IDLE</h1> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/character" element={<Character />} />
      <Route path="/jobs/mining" element={<Job />} />
      <Route path="/shop" element={<Shop />} />
      {/*<Route exact path="/craft" element={<Craft />} />
      <Route exact path="/fight" element={<Fight />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>


  </div>
);

// == Export
export default App;
