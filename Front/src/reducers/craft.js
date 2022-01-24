

const initialState = {
  name: 'Minage',
  type: 'minerai',
  quantité: 0,
  level: 0,
  currentType: 'fer',
  // TEST
  recipes: [
    {
      name: 'armure rouillée',
      className: 'rustedArmor',
      recipe: {
        fer: 2,
        bronze: 2,
      }
    }
  ],
};

const craft = (state = initialState, action = {}) => {
  switch (action.type) {
    
    
    
    default:
      return state;
  }
};

export default craft;
