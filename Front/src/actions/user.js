export const LOGMODALE = 'LOGMODALE';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const REGISTER_MODALE= 'REGISTER_MODALE';



export const logModale = () => ({
  type: LOGMODALE,



});

export const registerModale = () => ({
  type: REGISTER_MODALE,



});


export const setUpdateField = (name,value) => ({
  type: UPDATE_FIELD,
  name: name,
  value: value,
});
