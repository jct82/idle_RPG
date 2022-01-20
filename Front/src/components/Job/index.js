// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWorking, setCurrentOre, alertPlayerOre, addLogMessage } from '../../actions/jobs';
import './style.scss';

export default function Job() {
  const { isWorking, buttonTitle, currentOre, ores, baseReward, actionTime, logMessages, workingInterval } = useSelector((state) => state.jobs.mining);

  const dispatch = useDispatch();


  // Click bouton pour lancer l'action
  const buttonOnClick = () => {
    
    if (currentOre) {
      dispatch(setWorking());
      const oreExperience = ores.find(ore => ore.name === currentOre);
      let interval = setInterval(() => {
        dispatch(addLogMessage(oreExperience.experience, baseReward))
      }, 3000);
      if (isWorking) {
        console.log('clear interval');
        clearInterval(interval);
      }
    }
    else
    {
      dispatch(alertPlayerOre());
    }
  };

  // const isWorking && dispatch(addLogMessage(oreExperience.experience, baseReward))

  // setInterval(() => {
  //   console.log(isWorking);
  // }, 500);

  // Choix de la ressource
  const switchResource = (e) => {
    dispatch(setCurrentOre(e.target.className.split(' ')[1]));
  }

  // Remplissage de la liste des ressources
  const fillResources = ores.map(vein =>
  <div className={`resource ${vein.name}`} key={vein.name} onClick={switchResource}>
    <span className="oreTooltipText">{vein.name}<br /> {vein.desc}</span>
    {/* <div className={`resourceName ${vein}`} /> */}
    {/* <p>{vein}</p> */}
  </div> )

  return (
    <div className="jobContainer">
      <div className="jobMain">
        <button className="jobStartAction" onClick={buttonOnClick}>{buttonTitle}</button>
        <div className="playerWorkContainer">
          <div className={`jobPlayer ${isWorking ? "playerMining" : "playerIdle"}`}></div>
          <div className={`currentOre ${currentOre}`}></div>
        </div>
      </div>
      <div className="jobSecondaryContainer">
        <div className="jobSmall jobLogs">{logMessages}</div>
        <div className="jobSmall jobResourcesList">{fillResources}</div>
      </div>
    </div>
  );
}
