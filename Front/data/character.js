const characters = [
  {
    nom: 'The Counter',
    experience: 200,
    level: 4,
    inventory: {
      vivres : [
        {
          nom:'poisson', 
          description:'pour manger. Apporte 10 points de vie', 
          image:'./images/vivre/poisson.png', 
          valeur:15, 
          quantite: 8, 
          stastistique: 10, 
          type_statistique: 'vie'
        },
        {
          nom:'viande', 
          description:'pour manger. Apporte 20 points de vie', 
          image:'./images/vivre/viande.png', 
          valeur:15, 
          quantite: 12, 
          stastistique: 10, 
          type_statistique: 'vie'
        },
      ],
      equipment: [
        {
          nom:'bottes', 
          description:' pour se chausser. Augmente la dexterité', 
          image:'./images/equipement/bottes/botte1.png',  
          quantite: 3, 
          type_statistique: 'dexterité', 
          reserve:[
            {
              id:1,
              nom:'bottes légères', 
              valeur:150, 
              stastistique: 30,
              description: 'pour se déplacer vite',
              image:'./images/equipement/bottes/botte1.png', 
            },
            {
              id:2,
              nom:'bottes classes', 
              valeur:150, 
              stastistique: 5, 
              description: 'pour combattre avec élégance',
              image:'./images/equipement/bottes/botte2.png', 
            },
            {
              id:3,
              nom:'bottes d\'hiver', 
              valeur:150, 
              stastistique: 10, 
              description: 'pour avoir chaud aux pieds',
              image:'./images/equipement/bottes/botte3.png', 
            }
          ]
        },
        {
          nom:'casque', 
          description:' pour se protéger, Augmente l\'endurance', 
          quantite: 2, 
          type_statistique: 'endurance',  
          image:'./images/equipement/casque/casque.png', 
          reserve:[
            {
              id:1,
              nom:'casque moyen', 
              valeur:200, 
              stastistique: 20, 
              description: 'casque pas mal',
              image:'./images/equipement/casque/casque2.png', 
            },
            {
              id:2,
              nom:'casque solide', 
              valeur:250, 
              stastistique: 25, 
              description: 'casque résistant avec double amortisseur',
              image:'./images/equipement/casque/casque3.png', 
            }
          ]
        },
        {
          nom:'armure',  
          description:'pour se protéger, Augmente l\'endurance', 
          quantite: 1, 
          type_statistique: 'endurance',  
          image:'./images/equipement/armure/armure1.png', 
          reserve:[
            {
              id: 1,
              nom:'armure solide', 
              valeur:400, 
              stastistique: 40, 
              description: 'armure en titane',
              image:'./images/equipement/armure/armure1.png', 
            }
          ]
        },
        {
          nom:'arme', 
          description:'pour se battre, Augmente la force', 
          quantite: 2, 
          type_statistique: 'force', 
          image:'./images/idleMenuIcons/combat.png', 
          reserve:[
            {
              id:1,
              type:'épée', 
              nom:'épée de la force obscure', 
              description:'pour trancher tous types d\'adversaire',
              valeur:200, 
              stastistique: 30, 
              image:'./images/equipement/armes/epee/epee.png', 
            }, 
            {
              id:2,
              type:'arbalette', 
              nom: 'arbalette-po',
              description:'pour tirer des flêches',
              valeur:150, 
              stastistique: 15, 
              image:'./images/equipement/armes/arbalette/arbalette1.png', 
            }
          ]
        },
      ],
      ressources : [
        {
          nom:'curare', 
          categorie:'plante', 
          description:'pour faire préparer des médicaments chez l\'alchimiste',  
          image:'./images/ressources/plantes/curare.png', 
          valeur:50, 
          quantite: 3,
        },
        {
          nom:'fer', 
          categorie:'minerai', 
          description:'pour faire forger des équipements par le forgeron',  
          image:'./images/ressources/minerai/fer.png', 
          valeur:50, 
          quantite: 6, 
        },
      ]
    },
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
