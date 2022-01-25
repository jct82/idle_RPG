
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
      type: 'armor',
      desc: 'armure claquée au sol',
      className: 'rustedArmor',
      classLink: 'rusted-armor',
      recipe: {
        fer: 5,
        // bronze: 2,
      }
    },
  ],
};

const craft = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default craft;
