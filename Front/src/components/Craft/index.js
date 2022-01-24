// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './style.scss';

// == Composant
const Craft = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.craft);
  console.log(recipes);
  const fillRecipes = recipes.map(item => 
    <div className="craft-display">
        <h2 className="craft-display-title">
          {item.name}
        </h2>
        <div className="craft-display-recipe">
        // TODO A FINIR
          {Object.getOwnPropertyNames(item.recipe).map(i => <p>{i}</p>)}
        </div>
      </div>
  )
  return (
    <div className="craft-container">
      {fillRecipes}
    </div>
  );
};

// == Export
export default Craft;
