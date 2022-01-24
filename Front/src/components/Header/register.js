import { useSelector } from "react-redux";
import "./style.scss";
import background from "src/assets/ImgModal/Modale-Register.png";

export default function Register() {
  const { modal, mail, password } = useSelector((state) => state.user);
  return (
    <div className="register">
      {modal == "inscription" && (
        <div className="open-register">
          <form className="modale-register">
            <img src={background} alt="Image de fond" />
            <h1 className="title-register"> créez votre compte </h1>
            <label className="pseudo-register">
              Pseudo*
              <input
                className="text-form"
                type="Pseudo"
                name="name"
                placeholder="Pseudo"
              />
            </label>
            <label className="mail-register">
              E-mail*
              <input
                className="text-form"
                type="mail"
                name="name"
                placeholder="E-mail"
              />
            </label>
            <label className="password-register">
              Mot de passe*
              <input
                className="text-form"
                type="Mot-de-passe"
                name="name"
                placeholder="Mot de passe"
              />
            </label>
            <label className="text-form">
              Confirmation du mot de passe*
              <input
                className="text-form"
                type="confirm-mdp"
                name="name"
                placeholder="Confirmation du mot de passe"
              />
            </label>
            <input
              className="btn-register-send"
              type="submit"
              value="Terminer l'inscription"
            />
          </form>
        </div>
      )}
    </div>
  );
}
