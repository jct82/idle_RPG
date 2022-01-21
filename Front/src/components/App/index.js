// == Import
import { Route, Routes } from 'react-router-dom';


import Craft from 'src/components/Craft';
import Fight from 'src/components/Fight';
import NotFound from 'src/components/NotFound';
import Home from 'src/components/Home';
import Menu from '../Menu';
import Header from '../Header';
import Job from '../Job';


import './style.scss';
import Register from '../Header/register';
import Inventory from '../Character';

// == Composant
const App = () => (
  <div className="app">
   <Header title="Idle-Rpg"/>
   <Register />
    <Menu />
    {/* <h1>Jeu IDLE</h1> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/inventory" element={<Inventory />} />
      <Route path="/jobs/mining" element={<Job />} />
      {/*<Route exact path="/craft" element={<Craft />} />
      <Route exact path="/fight" element={<Fight />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>


  </div>
);

// == Export
export default App;
