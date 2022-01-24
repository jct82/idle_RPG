// == Import : npm
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './style.scss';
import { craftItem, sendCraftedItem } from '../../actions/craft';

// == Composant
const Craft = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.craft);
  const { ressources, equipment } = useSelector((state) => state.character.inventory);
  console.log(recipes);
  const craftButtonOnClick = (e) => {
    const currentRecipe = recipes.find((recipe) => recipe.classLink === e.target.className);
    // Object.entries(currentRecipe.recipe).map(([key, value]) => (
      // TODO chercher dans inventaire si y'a key et assez de value
      // dispatch(someAction(key, value))
    // ))

    console.log(currentRecipe);
    for (const [key, value] of Object.entries(currentRecipe.recipe)) {
      console.log(equipment);
      // ressources.find((resource) => resource === key);
      const neededResource = ressources.find((resource) => resource.nom === key);
      console.log(currentRecipe);
      if (neededResource)
      {
        if (neededResource.quantite >= value) {
          dispatch(craftItem(neededResource.nom, neededResource.quantite))
          dispatch(sendCraftedItem(currentRecipe.name, currentRecipe.type, currentRecipe.desc));
        }
      }
      // console.log(ressources.find((resource) => resource.nom === key));
    }
  }
  
  const fillRecipes = recipes.map(item => 
    <div className="craft-display" key={uuidv4()}>
        <h2 className={`craft-display-title ${item.classLink}`}>
          {item.name}
        </h2>
        <div className={item.className} />
        <div className="craft-display-recipe">
        { Object.entries(item.recipe).map(([key, value]) => (
          <p className="craft-display-text" key={uuidv4()}>{value} {key}</p>
        )) }
          <button className={item.classLink} onClick={craftButtonOnClick}>Craft</button>
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
