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
} from '../../actions/fight';
// == Import : local
import './styles.scss';
// == Composant

const Fight = () => {
  const dispatch = useDispatch();
  const {
    vie,
    force,
    endurance,
    dexterite,
    attackSpeed,
  } = useSelector((state) => state.character);

  const {
    isFighting,
    buttonTitle,
    monsters,
    currentMonster,
    currentMonsterName,
    logMessages
  } = useSelector((state) => state.fight);

  // Vitesse d'attaque
  // const attackSpeedPlayer = attackSpeed - (dexterite);

  // Calcul de pourcentage de la vie
  const percentage = (partialValue, maxLife) => (100 * partialValue) / maxLife;
  useEffect(() => {
    // dispatch(updateHealthPlayer(percentage(100, 100)));
    dispatch(getNewMonster());
  }, []);

  // Intervalle d'attaque pour le JOUEUR
  useEffect(() => {
    if (isFighting) {
      const interval = setInterval(() => {
        console.log('atk joueur');
        const newLifeOfMonster = currentMonster.life - (force - currentMonster.attributes[0].value);
        if (newLifeOfMonster <= 0) {
          dispatch(getNewMonster());
        } else if (newLifeOfMonster >= currentMonster.life) {
          dispatch(addLogMessageDmgDealt(0));
        }
        else {
          dispatch(dealDamage(newLifeOfMonster));
          dispatch(addLogMessageDmgDealt(force - currentMonster.attributes[0].value))
        }
      }, 2000 - dexterite);

      return () => clearInterval(interval);
    }
  }, [isFighting, monsters, currentMonster]);

  // Intervalle d'attaque pour le MONSTRE
  useEffect(() => {
    if (isFighting) {
      const intervalMonster = setInterval(() => {
        const newLifeOfPlayer = vie - (currentMonster.attributes[1].value - endurance);
        if (newLifeOfPlayer <= 0) {
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
    console.log(monsters);
  return (
    <>
      <div className="background-fight" />
      <h1 className="fight-title">Combat</h1>
      <div className="fight-container">
        <div className="fight-container--characters">
          <div className="fight-profile fight-profile--player" style={ isFighting ? { animation: `playerAttacksMonster ${2000 - dexterite}ms infinite ease-in-out`} : {}}>
            <div className={isFighting ? "playerAttack" : vie <= 0 ? "playerDeath" : "playerIdle"} />
            <span id="healthBarContainer--player">
              <span className="healthBar--percentage">
                {vie}
              </span>
              <span id="healthBar--player" style={{ width: `${vie}%` }} />
            </span>
            <span id="atkSpeedContainer--player">
              <span id="atkSpeed--player" style={ isFighting ? { animation: `atkSpeedActive ${2000 - dexterite}ms infinite linear`} : {}}/>
            </span>
          </div>
          <div className="noDamageNotify">{ currentMonster.attributes[0].value >= force && "Tu es trop faible !" } </div>
          <div className="fight-profile fight-profile--enemy" style={ isFighting ? { animation: `monsterAttacksPlayer ${2000 - currentMonster.attributes[2].value}ms infinite ease-in-out`} : {}}>
            <div className="fight-enemy--img" />
            <span id="healthBarContainer--enemy">
            <span className="healthBar--percentage">
              {currentMonster.life}
            </span>
              <span id="healthBar--enemy" style={{ width: `${percentage(currentMonster.life, currentMonster.maxLife)}%` }}/>
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
              <p className="fight--stat">PDV : {vie}</p>
              <p className="fight--stat">Attaque : {force}</p>
              <p className="fight--stat">Endurance : {endurance}</p>
              <p className="fight--stat">Dextérité : {dexterite}</p>
            </div>
            <div className="fight--stats-enemy">
              <p className="fight--stat">Monstre : {currentMonster.name}</p>
              {currentMonster.attributes && 
              (
                <>
                <p className="fight--stat">{currentMonster.life} : PDV</p>
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
