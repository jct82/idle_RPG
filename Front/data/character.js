const characters = [
  {
    nom: 'The Counter',
    experience: 200,
    level: 4,
    inventory: [
      {
        nom:'poisson', 
        type:'vivre', 
        description:'pour manger', 
        image:'', 
        valeur:15, 
        quantite: 8, 
        stastistique: 10, 
        type_statistique: 'vie'
      },
      {
        nom:'botte', 
        type:'equipement', 
        description:' pour se chausser', 
        image:'', 
        quantite: 4, 
        type_statistique: 'dexterité', 
        réserve:[
          {
            nom:'', 
            valeur:150, 
            stastistique: 10
          }
        ]
      },
      {
        nom:'casque', 
        type:'equipement', 
        description:' pour se protéger', 
        image:'', quantite: 2, 
        type_statistique: 'endurance', 
        réserve:[
          {
            nom:'', 
            valeur:200, 
            stastistique: 20
          }
        ]
      },
      {
        nom:'armure', 
        type:'equipement', 
        description:' pour se protéger', 
        image:'', 
        quantite: 1, 
        type_statistique: 'endurance', 
        réserve:[
          {
            nom:'', 
            valeur:400, 
            stastistique: 40
          }
        ]
      },
      {
        nom:'épée de la force obscure', 
        type:'équipement', 
        description:'pour planter', 
        image:'', 
        valeur:200, 
        quantite: 1, 
        stastistique: 30, 
        type_statistique: 'force', 
        réserve:[
          {
            type:'épée', 
            nom:'', 
            valeur:150, 
            stastistique: 10
          }
        ]
      },
      {
        nom:'arbalette-po', 
        type:'équipement', 
        description:'pour tirer des flêches', 
        image:'', 
        valeur:100, 
        quantite: 1, 
        stastistique: 15, 
        type_statistique: 'force', 
        réserve:[
          {
            type:'arbalette', 
            nom:'', 
            valeur:150, 
            stastistique: 10
          }
        ]
      },
      {
        nom:'curare', 
        type:'plantes', 
        description:'pour se soigner', 
        image:'', 
        valeur:50, 
        quantite: 0, 
        stastistique: 10
      },
      {
        nom:'fer', 
        type:'minerai', 
        description:'pour forger', 
        image:'', 
        valeur:50, 
        quantite: 6, 
        stastistique: 10
      },
    ],
    equipement : {
      casque: {
        nom:'casque du combattant',
        type_statistique:'endurance', 
        statistique: 50, 
        description:'le casque va nous servir à être plus fort il donne de la force', 
        image:''
      }, 
      armure: {
        nom:'armure du combattant',
        type_statistique:'endurance',
        statistique:150,
        description:'cette armure nous servira à être plus résistant ', 
        image:''
      }, 
      bottes:{
        nom:'bottes du combattant',
        type_statistique:'endurance',
        statistique: 80, 
        description:'des bottes à notre taille pour gagner en endurance',
        image:''
      },
      arme :{
        type:'lance-chipolata',
        nom:'chipo-5000',
        type_statistique:'force',
        statistique: 200,
        description:'cette magnifique lance nous donnera de la force et ou de la vie',
        image:''
      },
    },
    vie: 30,
    force: 10, 
    endurance: 15, 
    dexterité: 0,
    argent: 20,
  },
];

export default character;
