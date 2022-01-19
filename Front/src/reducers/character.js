

const initialState = {
  nom: 'The Counter',
  experience: 0,
  level: 0,
  inventory: [{nom:'', type:'', description:'', image:'', valeur:0, quantite: 0}],
  equipement : {casque: {nom:'', statistique:'', valeur:''}, armure: {nom:'', statistique:'', valeur:''}, bottes:{nom:'', statistique:'', valeur:''}, arme :{nom:'', statistique:'', valeur:''}},
  life: 0,
  strength: 10, 
  endurance: 0, 
  dexterité: 0,
  argent: 0,
  
};

const character = (state = initialState, action = {}) => {
  switch (action.type) {
   
   
    default:
      return state;
  }
};

export default character;
