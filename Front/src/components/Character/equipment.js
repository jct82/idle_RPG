import './style.scss';

// == Composant
const Equipment = (object) => {
  
  return (
    <div className="equip-block" key={object.nom}>
      <div className="name-equip">{object.nom}</div>
      <div className="img-equip">
        <img src={object.image}/>
      </div>
      <div className="stat-equip">{object.stastistique} XP</div>
    </div>
  );
};

// == Export
export default Equipment;
