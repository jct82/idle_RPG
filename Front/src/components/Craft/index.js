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
  const { inventory } = useSelector((state) => state.character);
  useEffect(() => {
    dispatch(getCraftableItems());
  }, []);
  
  const craftButtonOnClick = (e) => {
    const currentRecipe = recipes.find((recipe) => recipe.id == e.target.id);
    const neededResource = inventory.filter((resource) => resource.name === currentRecipe.ingredients[0].name);
    if (neededResource.length !== 0) {
      if (neededResource.length + 1 >= currentRecipe.ingredients[0].quantity) {
        dispatch(craftItem(neededResource[0].name, currentRecipe.ingredients[0].quantity));
        dispatch(sendCraftedItem(currentRecipe.name, currentRecipe.type, currentRecipe.item_type_id));
        console.log(inventory);
      };
    } else {
      e.target.style.backgroundColor = 'red';
    }
  };
  
  const fillRecipes = recipes.map(item => 
    
    <div className={`craft-display`} key={uuidv4()}>
        <h2 className={`craft-display-title`}>
          {item.name}
        </h2>
                        {/* vvvv enlève les quotes et les espaces vvvvvv */}
        <div className={item.name.replace(/['"]+/g, "").replace(/\s/g, "")} />
        <div className="craft-display-recipe">
        { item.ingredients.map((ingredient) => (
          <p className="craft-display-text" key={uuidv4()}>{ingredient.quantity} {ingredient.name}</p>
        )) }
          <button id={item.id} onClick={craftButtonOnClick}>Craft</button>
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
