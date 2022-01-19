import { useState } from 'react';
import './style.scss';

export default function Job() {
  // State
  const arr = ['bronze', 'or', 'truc', 'machin', 'minerai', 'wow'];
  const [currentOre, setCurrentOre] = useState('');
  const [buttonTitle, setButtonTitle] = useState('Commencer à travailler');
  const [workingState, setWorkingState] = useState(false);

  // Click bouton
  const buttonOnClick = () => {
    setWorkingState(!workingState);
    // console.log(workingState);
    if (workingState) {
      setButtonTitle('Commencer à travailler');
    } else {
      setButtonTitle('Arrêter de travailler');
    };
  };

  // Choix de la ressource
  const switchResource = (e) => {
    setCurrentOre(e.target.className.split(' ')[1])
    // console.log(e.target.className.split(' ')[1]);
  }

  // Remplissage de la liste des ressources
  const fillResources = arr.map(vein =>
  <div className={`resource ${vein}`} key={vein} onClick={switchResource}>
    {/* <div className={`resourceName ${vein}`} /> */}
    {/* <p>{vein}</p> */}
  </div> )
  return (
    <div className="jobContainer">
      <div className="jobMain">
        <button className="jobStartAction" onClick={buttonOnClick}>{buttonTitle}</button>
        <div className={`jobPlayer ${workingState ? "playerMining" : "playerIdle"}`}></div>
        <div className={`currentOre ${currentOre}`}></div>
      </div>
      <div className="jobSecondaryContainer">
        <div className="jobSmall jobLogs"></div>
        <div className="jobSmall jobResourcesList">{fillResources}</div>
      </div>
    </div>
  );
}
