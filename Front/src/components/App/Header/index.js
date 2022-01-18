import './style.css';
import logo from './Logo.png';
import {useState} from 'react';


export default function Header(props) {

  const [modale,setModale] = useState(false);

  const modaleLog = () => {
    setModale(!modale)
  }
  console.log(modale);





  return (
    <div className="container">
      <img className="logo-rpg" src ={logo} alt="Idle-RPG" />
      <h1 className="title">{props.title}</h1>
      
      <button onClick={modaleLog} 
      className="btn-log">
      Se connecter
      </button> 

      {modale &&
      <div className="popup">
        <h1 className="text">Bonjour User</h1>
      </div>
      
      }
    
    </div>
    



  )
}
