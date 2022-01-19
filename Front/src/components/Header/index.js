import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './style.scss';
import logo from './Logo.png';
import mails from './icon-mail.png';
import lock from './lock.png';
import { logModale,setUpdateField} from '../../actions/user';

import imageTop from '../../assets/titleLogo.png';


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
    <div className="connect">
      <img className="title-logo" src={imageTop}/>
      {!log &&
        <button onClick={openModale} className="btn-log">Se connecter</button> 
      }
      {log &&
        <div className="form-log">
          <form className="connect-form">
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
