// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWorking, setCurrentOre } from '../../actions/jobs';
import './style.scss';

export default function Job() {
  // State
  const arr = ['bronze', 'or', 'truc', 'machin', 'minerai', 'wow'];

  const {isWorking, buttonTitle, currentOre} = useSelector((state) => state.jobs.mining);

  const dispatch = useDispatch();

  // Click bouton pour lancer l'action
  const buttonOnClick = () => {
    dispatch(setWorking());
  };

  // Choix de la ressource
  const switchResource = (e) => {
    dispatch(setCurrentOre(e.target.className.split(' ')[1]));
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
        <div className={`jobPlayer ${isWorking ? "playerMining" : "playerIdle"}`}></div>
        <div className={`currentOre ${currentOre}`}></div>
      </div>
      <div className="jobSecondaryContainer">
        <div className="jobSmall jobLogs"></div>
        <div className="jobSmall jobResourcesList">{fillResources}</div>
      </div>
    </div>
  );
}
