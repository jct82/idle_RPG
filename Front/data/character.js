const characters = [
  {
    nom: 'The Counter',
    experience: 200,
    level: 4,
    inventory: [
      {nom:'poisson', type:'vivre', description:'pour manger', image:'', valeur:15, quantite: 8, stastistique: 10, type_statistique: 'vie'},

      {nom:'botte', type:'equipement', description:' pour se chausser', image:'', quantite: 4, type_statistique: 'dexterité', réserve:[{valeur:150, stastistique: 10}]},
      {nom:'casque', type:'equipement', description:' pour se protéger', image:'', quantite: 2, type_statistique: 'endurance', réserve:[{valeur:200, stastistique: 20}]},
      {nom:'armure', type:'equipement', description:' pour se protéger', image:'', quantite: 1, type_statistique: 'endurance', réserve:[{valeur:400, stastistique: 40}]},

      {nom:'épée', type:'arme', description:'pour planter', image:'', valeur:200, quantite: 1, stastistique: 30, type_statistique: 'force'},
      {nom:'arbalette', type:'arme', description:'pour tirer des flêches', image:'', valeur:100, quantite: 1, stastistique: 15, type_statistique: 'force'},
      {nom:'plantes', type:'médicament', description:'pour se soigner', image:'', valeur:50, quantite: 0, stastistique: 10},
      {nom:'fer', type:'minerai', description:'pour forger', image:'', valeur:50, quantite: 6, stastistique: 10},
    ],
    equipement : {casque: {nom:'', statistique:'', description:'', image:''}, armure: {nom:'', statistique:'', description:'', image:''}, bottes:{nom:'', statistique:'', description:'', image:''}},
    arme :{nom:'', statistique:'', description:'', image:''},
    vie: 0,
    force: 10, 
    endurance: 0, 
    dexterité: 0,
    argent: 0,
  },
  {
    id: 2,

  },
  {
    id: 3,
    
  },
  {
    id: 4,
    
  },
];

export default character;
