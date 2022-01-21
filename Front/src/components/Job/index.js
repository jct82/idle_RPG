import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWorking, setCurrentOre, alertPlayerOre, addLogMessage, addLevelUpMessage, levelUpJob } from '../../actions/jobs';
import './style.scss';

export default function Job() {
  const { isWorking, buttonTitle, currentOre, ores, baseReward, actionTime, logMessages, experience, level, levelUpReq } = useSelector((state) => state.jobs.mining);

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
  // Et gérer la montée de niveau
  useEffect(() => {
    if (isWorking) {
      const interval = setInterval(() => {
        if (experience >= levelUpReq) {
          dispatch(levelUpJob());
          dispatch(addLevelUpMessage());
        };
        const oreExperience = ores.find(ore => ore.name === currentOre);
        dispatch(addLogMessage(oreExperience.experience, baseReward));
      }, 150);

      return () => clearInterval(interval)
    }
  }, [isWorking, experience])

  // Choix de la ressource
  const switchResource = (e) => {
    const currentOre = ores.find(ore => ore.name === e.target.className.split(' ')[1]);
    if (level >= currentOre.level) {
      dispatch(setCurrentOre(e.target.className.split(' ')[1], currentOre.experience));
    }
  }

  // Remplissage de la liste des ressources
  const fillResources = ores.map(vein =>
  <div className={`${level >= vein.level ? "resource" : "resource--not-allowed"} ${vein.name}`} key={vein.name} onClick={switchResource}>
    <span className="oreTooltipText">{vein.name}<br /> {vein.desc}</span>
  </div> );

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
