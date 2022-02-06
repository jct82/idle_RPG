// == Import : npm
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateHealthPlayer,
  startFighting,
  dealDamage,
  getNewMonster,
  addLogMessageDmgDealt,
  addLogMessageDmgReceived,
  receiveDamage,
  playerDeath,
  playerTooWeak,
  manualChangeMonsterBefore,
  manualChangeMonsterAfter,
  updateMonsterHp,
  updateAfterFight,
  addLogMessageDrop,
  addStatsPoints,
} from '../../actions/fight';
// == Import : local
import './styles.scss';
import '../../styles/allmonsters.scss';
import { sendResourceToInventory } from '../../actions/mining';
// == Composant

const Fight = () => {
  const dispatch = useDispatch();
  const {
    vie,
    force,
    endurance,
    dextérité,
    level,
  } = useSelector((state) => state.character);
  const {
    isFighting,
    buttonTitle,
    monsters,
    currentMonster,
    currentMonsterName,
    currentMonsterHP,
    currentMonsterMaxHP,
    monsterLoaded,
    currentMonsterClass,
    newMonsterIndex,
    autoMonsterSwitch,
    tooWeak,
    logMessages
  } = useSelector((state) => state.fight);

  // Calcul de pourcentage de la vie
  const percentage = (partialValue, maxLife) => (100 * partialValue) / maxLife;
  useEffect(() => {
    dispatch(getNewMonster(false, level));
    // console.log();
    // Se lance quand les monstres sont bien récupérés en bdd
  }, [monsters]);

  useEffect(() => {
    dispatch(updateMonsterHp());
  }, [currentMonster]);

  // Intervalle d'attaque pour le JOUEUR
  useEffect(() => {
    if (isFighting) {
      const interval = setInterval(() => {
        // console.log(currentMonster);
        const dropChance = ((Math.random() * 100) / 100).toFixed(2)
        const newLifeOfMonster = currentMonsterHP - (force - currentMonster.attributes[0].value);
        const cm = currentMonster;
        const cmr = cm.rewards_items[0];
        if (newLifeOfMonster <= 0) {
          if(dropChance <= cmr.drop_rate) {
            dispatch(addLogMessageDrop(cmr.item_name, cmr.quantity));
          };
          dispatch(updateAfterFight(cm.reward_exp, cm.reward_gold, dropChance <= cmr.drop_rate, cmr.item_id, vie, true, cmr.quantity));
          dispatch(autoMonsterSwitch ? getNewMonster(false, level) : getNewMonster(true, level));
        } else if (newLifeOfMonster >= currentMonsterHP) {
          dispatch(playerTooWeak());
          dispatch(addLogMessageDmgDealt(0));
        }
        else {
          dispatch(dealDamage(newLifeOfMonster));
          dispatch(addLogMessageDmgDealt(force - currentMonster.attributes[0].value))
        }
      }, 2000 - dextérité);

      return () => clearInterval(interval);
    }
  }, [isFighting, monsters, currentMonster, currentMonsterHP]);

  // Intervalle d'attaque pour le MONSTRE
  useEffect(() => {
    if (isFighting) {
      const intervalMonster = setInterval(() => {
        const cm = currentMonster;
        const cmr = cm.rewards_items[0];
        console.log(currentMonster);
        const newLifeOfPlayer = vie - (currentMonster.attributes[1].value - endurance);
        if (newLifeOfPlayer <= 0) {
          dispatch(updateAfterFight(cm.reward_exp, cm.reward_gold, false, cmr.item_id, 0, false, cmr.quantity));
          dispatch(receiveDamage(0));
          dispatch(playerDeath());
        } else if (newLifeOfPlayer >= vie) {
          dispatch(addLogMessageDmgReceived(0));
        } else {
          dispatch(receiveDamage(newLifeOfPlayer));
          dispatch(addLogMessageDmgReceived(currentMonster.attributes[1].value - endurance));
        }
        console.log('atk monstre');
      }, 2000 - currentMonster.attributes[2].value);

      return () => clearInterval(intervalMonster);
    }
  }, [isFighting, vie]);

  const playerStartsFight = () => {
    dispatch(startFighting());
  };

  const playerSwitchesMonsterBefore = () => {
    dispatch(manualChangeMonsterBefore());
    dispatch(getNewMonster(true, level));
    console.log(newMonsterIndex);
  };
  const playerSwitchesMonsterAfter = () => {
    dispatch(manualChangeMonsterAfter());
    dispatch(getNewMonster(true, level));
    console.log(newMonsterIndex);
  };
    console.log(monsters);
  return (
    <>
      <div className="background-fight" />
      <h1 className="fight-title">Combat</h1>
      <div className="fight-container">
        <div className="fight-container--characters">
          <div className="fight-profile fight-profile--player" style={ isFighting ? { animation: `playerAttacksMonster ${2000 - dextérité}ms infinite ease-in-out`} : {}}>
            <div className={isFighting ? "playerAttack" : vie <= 0 ? "playerDeath" : "playerIdle"} />
            <span id="healthBarContainer--player">
              <span className="healthBar--percentage">
                {vie}
              </span>
              <span id="healthBar--player" style={{ width: `${vie}%` }} />
            </span>
            <span id="atkSpeedContainer--player">
              <span id="atkSpeed--player" style={ isFighting ? { animation: `atkSpeedActive ${2000 - dextérité}ms infinite linear`} : {}}/>
            </span>
          </div>
          <div className="noDamageNotify">{ tooWeak && currentMonster.attributes[0].value >= force && "Tu es trop faible !" } </div>
          <div className="flexMonsterButtons">
          <button className={isFighting ? "hidden" : "themed-button"} onClick={playerSwitchesMonsterBefore}>←</button>
          <button className={isFighting ? "hidden" : "themed-button"} onClick={playerSwitchesMonsterAfter}>→</button>
          </div>
          <div className="fight-profile fight-profile--enemy" style={ isFighting ? { animation: `monsterAttacksPlayer ${2000 - currentMonster.attributes[2].value}ms infinite ease-in-out`} : {}}>
            <div className={isFighting ? `${currentMonsterClass}--fight` : currentMonsterClass} />
            <span id="healthBarContainer--enemy">
            <span className="healthBar--percentage">
              {currentMonsterHP}
            </span>
              <span id="healthBar--enemy" style={{ width: `${percentage(currentMonsterHP, currentMonsterMaxHP)}%` }}/>
            </span>
            <span id="atkSpeedContainer--enemy">
              <span id="atkSpeed--enemy" style={ isFighting ? { animation: `atkSpeedActive ${2000 - currentMonster.attributes[2].value}ms infinite linear`} : {}} />
            </span>
          </div>
        </div>
        <div className="fight-container--stats">
          <div className="fight--logs">
            {logMessages}
          </div>
          <div className="fight--stats">
            <div className="fight--stats-player">
              <p className="fight--stat">Personnage :</p>
              <p className="fight--stat">Niveau : {level}</p>
              <p className="fight--stat">PDV : {vie}</p>
              <p className="fight--stat">Attaque : {force}</p>
              <p className="fight--stat">Endurance : {endurance}</p>
              <p className="fight--stat">Dextérité : {dextérité}</p>
            </div>
            <div className="fight--stats-enemy">
              <p className="fight--stat">Monstre : {currentMonster.name}</p>
              {currentMonster.attributes && 
              (
                <>
                <p className="fight--stat">{currentMonster.level} : Niveau </p>
                <p className="fight--stat">{currentMonsterHP} : PDV</p>
                <p className="fight--stat">{currentMonster.attributes[1].value} : Attaque </p>
                <p className="fight--stat">{currentMonster.attributes[0].value} : Endurance </p>
                <p className="fight--stat">{currentMonster.attributes[2].value} : Dextérité</p>
              </>
              )
              }
            </div>
          </div>
        </div>
        <button type="button" className= "fight--button" onClick={vie !== 0 ? playerStartsFight : undefined}> {vie === 0 ? "Vous êtes K.O" : buttonTitle} </button>
      </div>
    </>
  );
};

// == Export
export default Fight;
