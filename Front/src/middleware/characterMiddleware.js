import API from './api';

const characterMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case 'SPARE_POINTS': {
      // Attend dans le header le token
      // Attend dans le body l'id du personnage : characterId
      // Attend dans le body l'id de l'attribut modifié : attributeId

      const attributeId = action.attrId;
      const characterId = action.persoId;
      const config = {
        method: 'patch',
        url: '/attribute/augment',
        headers: {
          authorization: `${foundToken}`,
        },
        data: {
          characterId: characterId,
          attributeId: attributeId,
        },
      };

      API(config)
        .then((response) => {
          if (response.status === 204) {
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(logUser(response.headers.authorization, response.data.user.name, response.data.user.id));
            // store.dispatch(characterMoney(response.data.character.gold));
          }
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default characterMiddleware;

