import { useSelector } from "react-redux";
import "./style.scss";

export default function Register() {
  const { modal, mail, password } = useSelector((state) => state.user);

  return (
    <div className="register">
      {modal == 'inscription' && 
        <div className="open-register">
          <form className="modale-register">
            <h1 className="title-register"> créez votre compte </h1>
            <label>
              Pseudo*
              <input
                className="text-form"
                type="Pseudo"
                name="name"
                placeholder="Pseudo"
              />
            </label>
            <label>
              E-mail*
              <input
                className="text-form"
                type="mail"
                name="name"
                placeholder="E-mail"
              />
            </label>
            <label>
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
      }
    </div>
  );
}
