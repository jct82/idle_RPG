import { useEffect, useState } from "react";
import './Btndark.scss'
// J'importe useEffect pour ne pas avoir de rendu a chaque chargement
// J'importe useState pour avoir mon state 

export default function BtnDark() {

  // J'initialise le state a false
  const [darkmode, setDarkmode] = useState(false);


  const toogleDark = () => setDarkmode((prev) => !prev);

  useEffect(() => {
    // si darkmode et true
    if (darkmode) {
      // j'ajoute une class dark
      document.body.classList.add("dark");
    } 
    // sinon je supprime la classe dark
    else {
      document.body.classList.remove("dark");
    }
  }, [darkmode]);

  console.log(darkmode)
  return (
   
    <div className="toggle-theme-wrapper">
      <span className="sun">☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toogleDark}
          
        />
        <div className="slider round"></div>
      </label>
      <span className="moon">🌒</span>
    </div>
  );
};
 

