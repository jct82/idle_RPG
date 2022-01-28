// == Import : npm
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './style.scss';
import '../../styles/allitems.scss';
import { craftItem, sendCraftedItem, getCraftableItems } from '../../actions/craft';
import { useEffect } from 'react';

// == Composant
const Craft = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.craft);
  const { ressources, equipment } = useSelector((state) => state.character.inventory);
  // console.log(recipes);
  useEffect(() => {
    dispatch(getCraftableItems());
  }, []);
  
  const craftButtonOnClick = (e) => {
    
    const currentRecipe = recipes.find((recipe) => recipe.classLink === e.target.className);
    // console.log(currentRecipe);
    for (const [key, value] of Object.entries(currentRecipe.recipe)) {
      // console.log(equipment);
      // console.log(ressources);
      // ressources.find((resource) => resource === key);
      const neededResource = ressources.find((resource) => resource.nom === key);
      // console.log(currentRecipe);
      if (neededResource)
      {
        if (neededResource.quantite >= value) {
          dispatch(craftItem(neededResource.nom, currentRecipe.recipe[key]))
          dispatch(sendCraftedItem(currentRecipe.name, currentRecipe.type, currentRecipe.desc));
        }
      }
      // console.log(ressources.find((resource) => resource.nom === key));
    }
  }
  
  const fillRecipes = recipes.map(item => 
    <div className="craft-display" key={uuidv4()}>
        <h2 className={`craft-display-title`}>
          {item.name}
        </h2>
                         {/* vvvv enlève les quotes et les espaces vvvvvv */}
        <div className={item.name.replace(/['"]+/g, "").replace(/\s/g, "")} />
        <div className="craft-display-recipe">
        { item.ingredients.map((ingredient) => (
          <p className="craft-display-text" key={uuidv4()}>{ingredient.quantity} {ingredient.name}</p>
        )) }
          <button className={`item-${item.id}`} onClick={craftButtonOnClick}>Craft</button>
        </div>
      </div>
  )
  return (
    <div className="craft-container">
      {recipes && fillRecipes}
    </div>
  );
};

// == Export
export default Craft;
