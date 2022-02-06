import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setWorking,
  setCurrentResource,
  alertPlayerResource,
  addLogMessage,
  addLevelUpMessage,
  levelUpJob,
  getAllFishResources,
  sendFishToDb,
} from '../../actions/fishing';
import { sendResourceToInventory } from '../../actions/mining';
import '../../styles/allitems.scss';
import '../Mining/style.scss';

export default function Fishing({job}) {
  const {
    isWorking,
    buttonTitle,
    currentResource,
    resources,
    baseReward,
    actionTime,
    logMessages,
    experience,
    level,
    levelUpReq,
  } = useSelector((state) => job === 'mining' ? state.mining : state.fishing);

  const { inventory } = useSelector((state) => state.character);

  const dispatch = useDispatch();

  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  } 

  useEffect(() => {
    dispatch(getAllFishResources());
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
        const wr = workingResource;
        const { name, id, item_type_id, type, attribute } = wr;
        const stat = attribute.find(att => att.name == "soins");
        const quantity = Math.floor((level / 4) + 1);
        // id de l'item, quantité, exp gagnée
        dispatch(sendFishToDb(id, quantity, Math.floor(1 + (wr.attribute[0].value / 3))));
        dispatch(sendResourceToInventory(name, id, 'consommable', quantity, stat.value));
        //-------------------vvv exp récupérée -----------vvv quantité récupérée
        dispatch(addLogMessage(Math.floor(1 + (wr.attribute[0].value / 3)), Math.floor((level / 4) + 1)));
      }, actionTime);

      return () => clearInterval(interval)
    }
  }, [isWorking, experience])

  // Choix de la ressource
  const switchResource = (e) => {
    const workingResource = resources.find(resource => resource.name.replace(/['"]+/g, "").replace(/\s/g, "") === e.target.className.split(' ')[1]);
    if (level >= workingResource.attribute[0].value) {
      dispatch(setCurrentResource(e.target.className.split(' ')[1], workingResource.attribute[0].value )); // EXP GAGNÉE
    }
  }

  // Remplissage de la liste des ressources
  const fillResources = resources.map(fish =>
  <div className={`${level >= fish.attribute[0].value ? "resource" : "resource--not-allowed"} ${fish.name.replace(/['"]+/g, "").replace(/\s/g, "")}`} key={fish.name} onClick={switchResource}>
    <span className="oreTooltipText">{fish.name}<br /> {`Niveau ${fish.attribute[0].value} requis`}</span>
  </div> );

  return (
    <div className="jobContainer">
      <div className="jobMain jobMain-fishing">
        <button className="jobStartAction" onMouseDown={buttonOnClick}>{buttonTitle}</button>
        <span id="progressContainer">
          <span id="progress" style={isWorking ? { animation: `playerWorking 2000ms infinite linear`} : undefined}></span>
        </span>
        <p className="jobLevel">Niveau {level}</p>
        <div className="playerWorkContainer">
          <div className={`jobPlayer ${isWorking ? "playerFishing" : "playerIdle"}`}></div>
          <div className={`fishingResource ${currentResource}`}></div>
        </div>
      </div>
      <div className="jobSecondaryContainer">
        <div className="jobSmall jobLogs">{logMessages}</div>
        <div className="jobSmall jobResourcesList">{fillResources}</div>
      </div>
    </div>
  );
}
