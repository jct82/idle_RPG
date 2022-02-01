// == Import : npm
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHealthPlayer, startFighting, dealDamage, getNewMonster } from '../../actions/fight';
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
  } = useSelector((state) => state.fight);

  // Vitesse d'attaque
  const attack = attackSpeed - (dexterite * 2);

  // Calcul de pourcentage
  const percentage = (partialValue, maxLife) => (100 * partialValue) / maxLife;
  useEffect(() => {
    dispatch(updateHealthPlayer(percentage(100, 100)));
    dispatch(getNewMonster());
  }, []);

  // Intervalle d'attaque
  useEffect(() => {
    if (isFighting) {
      const interval = setInterval(() => {
        // const currentMonsterFight = monsters.find((monster) => monster.name === currentMonsterName);
        // const { name, id, item_type_id, type } = currentMonster;
        console.log(currentMonster.life);
        console.log(force);
        console.log(currentMonster.endurance);
        console.log(currentMonster);
        const newLife = currentMonster.life - (force - currentMonster.attributes[0].value);
        // console.log(currentMonster);
        // console.log(newLife);
        if (newLife <= 0) {
          dispatch(getNewMonster());
        } else if (newLife >= currentMonster.life) {
          console.log('pas taper');
        }
        else {
          dispatch(dealDamage(newLife));
        }
      }, attack);

      return () => clearInterval(interval);
    }
  }, [isFighting, monsters, currentMonster]);

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
          <div className="fight-profile">
            <div className="fight-player--img" />
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
          <div className="fight-profile">
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
            LOGS DYNAMIQUES
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
        <button type="button" className= "fight--button" onClick={playerStartsFight}> {buttonTitle} </button>
      </div>
    </>
  );
};

// == Export
export default Fight;
