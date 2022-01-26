import { useSelector, useDispatch } from "react-redux";
import { subscribeUser, setUpdateField, setModale } from  "src/actions/user";
import "./style.scss";
import background from "src/assets/ImgModal/Modale-Register.png";

export default function Register() {
  const dispatch = useDispatch();
  const { modal, mail, password } = useSelector((state) => state.user);

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(subscribeUser());
  }

  const shutModal = (e) => {
    dispatch(setModale(''));
  };

  const updateField = (e) => {
    dispatch(setUpdateField(e.target.name, e.target.value));
  };
  return (
    <div className="register">
      {modal == "inscription" && (
        <div className="open-register">
          <form className="modale-register" onSubmit={loginUser} encType="multipart/form-data" >
            <div className="close-modal" onClick={shutModal}>X</div>
            <img src={background} alt="Image de fond" />
            <h1 className="title-register"> créez votre compte </h1>
            <label className="pseudo-register">
              Pseudo*
              <input
                className="text-form"
                type="text"
                name="name"
                placeholder="Pseudo"
                onChange={updateField}
              />
            </label>
            <label className="mail-register">
              E-mail*
              <input
                className="text-form"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={updateField}
              />
            </label>
            <label className="password-register">
              Mot de passe*
              <input
                className="text-form"
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={updateField}

              />
            </label>
            <label className="text-form">
              Confirmation du mot de passe*
              <input
                className="text-form"
                type="confirm-mdp"
                name="confirm-password"
                placeholder="Confirmation du mot de passe"
                onChange={updateField}
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
