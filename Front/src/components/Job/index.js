import { useEffect } from 'react';
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
    }
    else
    {
      dispatch(alertPlayerOre());
    }
  };

  // Pour afficher les logs
  // https://devtrium.com/posts/set-interval-react
  useEffect(() => {
    if (isWorking) {
      const interval = setInterval(() => {
        const oreExperience = ores.find(ore => ore.name === currentOre);
        console.log(oreExperience);
        dispatch(addLogMessage(oreExperience.experience, baseReward));
      }, actionTime);

      return () => clearInterval(interval)
    }
  }, [isWorking])

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
        <button className="jobStartAction" onMouseDown={buttonOnClick}>{buttonTitle}</button>
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
