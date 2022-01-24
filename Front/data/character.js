const characters = [
  {
    nom: 'The Counter',
    experience: 200,
    level: 4,
    inventory: [
      {
        nom:'poisson', 
        type:'vivre', 
        description:'pour manger. Apporte 10 points de vie', 
        image:'./images/vivre/poisson.png', 
        valeur:15, 
        quantite: 8, 
        stastistique: 10, 
        type_statistique: 'vie'
      },
      {
        nom:'viande', 
        type:'vivre', 
        description:'pour manger. Apporte 20 points de vie', 
        image:'./images/vivre/viande.png', 
        valeur:15, 
        quantite: 12, 
        stastistique: 10, 
        type_statistique: 'vie'
      },
      {
        nom:'bottes', 
        type:'equipement', 
        description:' pour se chausser', 
        quantite: 3, 
        type_statistique: 'dexterité', 
        réserve:[
          {
            id:1,
            nom:'bottes légères', 
            valeur:150, 
            stastistique: 10,
            image:'./images/equipement/bottes/botte1.png', 
          },
          {
            id:2,
            nom:'bottes classes', 
            valeur:150, 
            stastistique: 10,
            image:'',
          },
          {
            id:3,
            nom:'bottes d\'hiver', 
            valeur:150, 
            stastistique: 10,
            image:'',
          }
        ]
      },
      {
        nom:'casque', 
        type:'equipement', 
        description:' pour se protéger', 
        quantite: 2, 
        type_statistique: 'endurance', 
        réserve:[
          {
            id:1,
            nom:'casque moyen', 
            valeur:200, 
            stastistique: 20,
            image:'',
          },
          {
            id:2,
            nom:'casque solide', 
            valeur:250, 
            stastistique: 25,
            image:'',
          }
        ]
      },
      {
        nom:'armure', 
        type:'equipement', 
        description:' pour se protéger', 
        quantite: 1, 
        type_statistique: 'endurance', 
        réserve:[
          {
            id: 1,
            nom:'armure solide', 
            valeur:400, 
            stastistique: 40,
            image:'',
          }
        ]
      },
      {
        nom:'arme', 
        type:'équipement', 
        description:'pour se battre', 
        quantite: 2, 
        type_statistique: 'force',
        réserve:[
          {
            id:1,
            type:'épée', 
            nom:'épée de la force obscure', 
            description:'pour trancher',
            valeur:200, 
            stastistique: 30,
            image:'',
          }, 
          {
            id:2,
            type:'arbalette', 
            nom: 'arbalette-po',
            description:'pour tirer des flêches',
            valeur:150, 
            stastistique: 15,
            image:'',
          }
        ]
      },
      {
        nom:'curare', 
        type:'ressources',
        categorie:'plante', 
        description:'pour se soigner', 
        image:'', 
        valeur:50, 
        quantite: 0,
        craft: 'alchimiste', 
      },
      {
        nom:'fer', 
        type:'ressources',
        categorie:'minerai', 
        description:'pour forger', 
        image:'', 
        valeur:50, 
        craft:'forgeron',
        quantite: 6, 
      },
    ],
    equipement : {
      //nom, type(arme), description, statistique, image
      casque: 1, 
      armure: 1, 
      bottes: 1,
      arme : 1,
    },
    vie: 30,
    force: 10, 
    endurance: 15, 
    dexterité: 0,
    argent: 0,
  },
];

export default characters;
