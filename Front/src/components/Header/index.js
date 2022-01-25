import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import mails from "./icon-mail.png";
import lock from "./lock.png";
import { setModale, setUpdateField, connectUser } from "../../actions/user";
import imageTop from "../../assets/titleLogo.png";
import Register from "./register";
import ModalImgLog from "/src/assets/ImgModal/Modal-Log.png";


export default function Header(props) {
  const { modal, mail, password } = useSelector((state) => state.user);
  // Je sélectionne log,mail,password qui se trouve dans mon reducer user
  const dispatch = useDispatch();
  // Je crée ma méthode useDispatch
  const displayModale = (e) => {
    // Je dispatch mon new state
    const modalOn = e.target.name;
    modalOn == undefined ? "" : e.target.name;
    dispatch(setModale(modalOn));
  };
  const updateField = (e) => {
    dispatch(setUpdateField(e.target.name, e.target.value));
  };

  const getConnected = (e) => {
    e.preventDefault();
    dispatch(connectUser());
  }
  
  return (
    <div className="connect">
      <img className="title-logo" src={imageTop} />
      {modal == "" && (
        <button onClick={displayModale} name="connexion" className="btn-log">
          Se connecter
        </button>
      )}
      {modal == "connexion" && (
        <div className="form-log">
          <img className="img-log" src={ModalImgLog} alt="image-de-fond" />
          <form className="connect-form" onSubmit={getConnected} encType="multipart/form-data">
            <img src={mails} alt="mail" />
            <input
              name="email"
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
              type="password"
              id="title"
              placeholder="Entrez votre mot de passe"
              className="input-modal inp-mdp"
            />
            <button type="submit" className="btn-send">
              Se connecter
            </button>
            <button
              onClick={displayModale}
              name="inscription"
              className="btn-send"
            >
              Inscription
            </button>
          </form>
        </div>
      )}
      
      <Register />
    </div>
  );
}
