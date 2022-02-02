import { UPDATE_RECIPES_LIST } from "../actions/craft";

const initialState = {
  name: 'Minage',
  type: 'minerai',
  quantité: 0,
  level: 0,
  currentType: 'fer',
  // TEST
  recipes: [
    // {
    //   id: 5,
    //   name: 'armure rouillée',
    //   item_type_id: 5,
    //   ingredients: [
    //    {
    //      id: 2,
    //      name: fer,
    //      quantity: 5,
    //      component_id: 1,
    //    },{
    //      id: 3,
    //      name: bronze,
    //      quantity: 2,
    //      component_id: 3,
    //    }
    //   ]
    // },
  ],
};

const craft = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_RECIPES_LIST:
      return {
        ...state,
        recipes: [
          ...action.payload.recipes,
        ]
      }
    default:
      return state;
  }
};

export default craft;
