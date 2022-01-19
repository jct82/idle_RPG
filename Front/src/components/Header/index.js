import './style.css';
import logo from './Logo.png';
import mail from './icon-mail.png';
import lock from './lock.png';
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
      
      <div className="btn">
      {!modale &&
      <button onClick={modaleLog} 
      className="btn-log">
      Se connecter
      </button> 
      }
</div>
      {modale &&
      <div className="form-log">
     

<form className="container-form">
    <img src={mail} alt="mail" />
    <input
       
        type="text"
        id="title"
        placeholder="Entrez votre email"
        className='inp-title'
   />
    <img src= {lock} alt="Mot de passe" />
    <input
       
        type="text"
        id="title"
        placeholder="Entrez votre mot de passe"
        className='inp-mdp'
   />
      <button className='btn-send'>Se connecter</button>

</form> 
      </div>
      
      }
    
    </div>
    



  )
}
