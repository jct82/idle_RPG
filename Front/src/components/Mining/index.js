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
  getAllMineResources,
  sendOreToDb,
} from '../../actions/mining';
import '../../styles/allitems.scss'
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

  useEffect(() => {
    dispatch(getAllMineResources());
  }, []);

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
        // TODO A MODIFIER QUAND LA BDD SERA FINALISÉE
        console.log(inventory);
        if (experience >= levelUpReq) {
          dispatch(levelUpJob());
          dispatch(addLevelUpMessage());
        };
        const workingResource = resources.find(resource => resource.name === currentResource);
        
        const { name, id, item_type_id, type, attribute } = workingResource;
        dispatch(sendOreToDb(id, 1, attribute[0].value))
        // dispatch(sendResourceToInventory(name, id, 'ressource'));
        //-------------------vvv quantité récupérée -----------vvv exp récupérée
        dispatch(addLogMessage(1, workingResource.attribute[0].value));
        dispatch(updateExpBar(percentage(experience, levelUpReq)));
      }, actionTime);

      return () => clearInterval(interval)
    }
  }, [isWorking, experience])

  // Choix de la ressource
  const switchResource = (e) => {
    const workingResource = resources.find(resource => resource.name === e.target.className.split(' ')[1]);
    if (level >= workingResource.attribute[0].value) {
      dispatch(setCurrentResource(e.target.className.split(' ')[1], workingResource.attribute[0].value));
    }; //------------------------------------------------------------^^^^^^^^ Peut-être à modifier
      // l'exp qu'on récupère est pareil que le niveau requis
  };

  // Remplissage de la liste des ressources
  const fillResources = resources.map(vein =>
  <div className={`${level >= vein.attribute[0].value ? "resource" : "resource--not-allowed"} ${vein.name}`} key={vein.name} onClick={switchResource}>
    <span className="oreTooltipText">{vein.name}<br /> {`Niveau ${vein.attribute[0].value} requis`}</span>
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
        <div className="jobSmall jobResourcesList">{resources && fillResources}</div>
      </div>
    </div>
  );
}
