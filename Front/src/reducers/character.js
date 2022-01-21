

const initialState = {
  nom: 'The Counter',
  experience: 0,
  level: 0,
  inventory: [
    {
      nom:'', 
      type:'', 
      description:'', 
      image:'', 
      valeur:0, 
      quantite: 0,
    }
  ],
  equipement : {
    casque: {
      nom:'', 
      statistique:'', 
      description:'', 
      image:''
    }, 
    armure: {
      nom:'', 
      statistique:'', 
      description:'', 
      image:''
    }, 
    bottes:{
      nom:'', 
      statistique:'', 
      description:'', 
      image:''
    }, arme :{
      nom:'', 
      type:'',
      statistique:'', 
      description:'', 
      image:''
    }
  },
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
