import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import logo from "./Logo.png";
import mails from "./icon-mail.png";
import lock from "./lock.png";
import { logModale, setUpdateField, registerModale } from "../../actions/user";
import imageTop from "../../assets/titleLogo.png";
import Register from "./register";

export default function Header(props) {
  const { log, mail, password,register } = useSelector((state) => state.user);
  // Je sélectionne log,mail,password qui se trouve dans mon reducer user
  const dispatch = useDispatch();
  // Je crée ma méthode useDispatch

  const openModale = () => {
    // Je dispatch mon new state
    dispatch(logModale());
  };

  const updateField = (e) => {
    dispatch(setUpdateField(e.target.name, e.target.value));
  };

  const registerLog = (e) => {
    e.preventDefault();
    dispatch(registerModale());
   
  };

  return (
    <div className="connect">
      <img className="title-logo" src={imageTop} />
      {!log && (
        <button onClick={openModale} className="btn-log">
          Se connecter
        </button>
      )}



      
      

     

      {log && (
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
              className="input-modal inp-title"
            />
            <img src={lock} alt="Mot de passe" />
            <input
              name="password"
              value={password}
              onChange={updateField}
              type="text"
              id="title"
              placeholder="Entrez votre mot de passe"
              className="input-modal inp-mdp"
            />

           
            
              
              <button onClick={openModale}
            className="btn-send">Se connecter</button>
            <button onClick={registerLog}
             className="btn-send">Inscription</button>

             


            




          </form>

        </div>
      )}
      
    </div>
  );
}
