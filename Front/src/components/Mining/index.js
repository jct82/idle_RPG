import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setWorking,
  setCurrentResource,
  alertPlayerResource,
  addLogMessage,
  addLevelUpMessage,
  levelUpJob,
  updateExpBar,
  sendResourceToInventory,
} from '../../actions/mining';
import './style.scss';

export default function Mining({job}) {
  const {
    isWorking,
    buttonTitle,
    currentResource,
    resources,
    // baseReward,
    actionTime,
    logMessages,
    experience,
    level,
    levelUpReq,
    experiencePercentage,
  } = useSelector((state) => job === 'mining' ? state.mining : state.fishing);

  const { inventory } = useSelector((state) => state.character);

  const dispatch = useDispatch();

  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  } 

  // Click bouton pour lancer l'action
  const buttonOnClick = () => {
    
    if (currentResource) {
      dispatch(setWorking());
    }
    else
    {
      dispatch(alertPlayerResource());
    }
  };

  // Pour afficher les logs
  // https://devtrium.com/posts/set-interval-react
  // Et gérer la montée de niveau
  useEffect(() => {
    if (isWorking) {
      const interval = setInterval(() => {
        console.log(inventory);
        if (experience >= levelUpReq) {
          dispatch(levelUpJob());
          dispatch(addLevelUpMessage());
        };
        const workingResource = resources.find(resource => resource.name === currentResource);
        const { name, type, description, baseReward } = workingResource;
        dispatch(sendResourceToInventory(name, type, description, baseReward));
        dispatch(addLogMessage(workingResource.experience, workingResource.baseReward));
        dispatch(updateExpBar(percentage(experience, levelUpReq)));
      }, actionTime);

      return () => clearInterval(interval)
    }
  }, [isWorking, experience])

  // Choix de la ressource
  const switchResource = (e) => {
    const workingResource = resources.find(resource => resource.name === e.target.className.split(' ')[1]);
    if (level >= workingResource.level) {
      dispatch(setCurrentResource(e.target.className.split(' ')[1], workingResource.experience));
    }
  }

  // Remplissage de la liste des ressources
  const fillResources = resources.map(vein =>
  <div className={`${level >= vein.level ? "resource" : "resource--not-allowed"} ${vein.name}`} key={vein.name} onClick={switchResource}>
    <span className="oreTooltipText">{vein.name}<br /> {vein.gatherDescription}</span>
  </div> );

  return (
    <div className="jobContainer">
      <div className="jobMain jobMain-mining">
        <button className="jobStartAction" onMouseDown={buttonOnClick}>{buttonTitle}</button>
        <span id="progressContainer">
          <span id="progress" style={{width: experiencePercentage + "%"}}></span>
        </span>
        <p className="jobLevel">Niveau {level}</p>
        <div className="playerWorkContainer">
          <div className={`jobPlayer ${isWorking ? "playerMining" : "playerIdle"}`}></div>
          <div className={`currentResource ${currentResource}`}></div>
        </div>
      </div>
      <div className="jobSecondaryContainer">
        <div className="jobSmall jobLogs">{logMessages}</div>
        <div className="jobSmall jobResourcesList">{fillResources}</div>
      </div>
    </div>
  );
}
