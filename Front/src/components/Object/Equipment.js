import './style.scss';

// == Composant
const Objects = (object) => {
  
  return (
    <div className="object">
      <span className="name">{object.nom}</span>
      <img className="view" src={object.image}/>
      <div className="details">
        <p className="details-name">{object.nom}</p>
        <img className="details-view" src={object.image}/>
        <div className="statistique">{object.statistique}</div>
        <div className="detail-description">
          {object.description}
        </div>
      </div>
      <button className="cta">Enfiler</button>
    </div>
  );
};

// == Export
export default Objects;
