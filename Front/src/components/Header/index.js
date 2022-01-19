import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './style.css';
import logo from './Logo.png';
import mails from './icon-mail.png';
import lock from './lock.png';
import { logModale,setUpdateField} from '../../actions/user';




export default function Header(props) {

  const {log,mail,password} = useSelector((state) => state.user);
  const dispatch = useDispatch() 
  

  const openModale = () => {
    dispatch(logModale());

  }

  const updateField = (e) => {
    
  dispatch(setUpdateField(e.target.name,e.target.value));

  }


  





  return (
    <div className="container">
      <img className="logo-rpg" src ={logo} alt="Idle-RPG" />
      <h1 className="title">{props.title}</h1>
      
      <div className="btn">
      {!log &&
     
      <button onClick={openModale}  
      className="btn-log">
      Se connecter
      </button> 
      }
</div>
      {log &&
      <div className="form-log">
     

<form className="container-form">
    <img src={mails} alt="mail" />
    <input
        name="mail"
        value={mail}
        onChange={updateField}
        type="text"
        id="title"
        placeholder="Entrez votre email"
        className='inp-title'
   />
    <img src= {lock} alt="Mot de passe" />
    <input
        name="password"
        value={password}
        onChange={updateField}
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
